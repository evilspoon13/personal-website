"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import './Terminal.css';

interface HistoryLine {
  type: 'input' | 'output' | 'system';
  text: string;
}

const PROMPT = 'visitor@camstone.dev';
const PATH = '~';

const COMMANDS: Record<string, () => string[]> = {
  help: () => [
    'Available commands:',
    '',
    '  whoami      — about me',
    '  skills      — tech stack',
    '  ls          — list pages',
    '  about       — go to about page',
    '  projects    — go to projects page',
    '  contact     — get in touch',
    '  clear       — clear terminal',
    '  help        — show this message',
  ],
  whoami: () => [
    'Cam Stone',
    'Senior @ Texas A&M University — Computer Engineering',
    'Software Engineer with experience in embedded systems and full-stack development',
    'Currently a SWE Intern at T-Mobile and a Software Engineer at TAMU Formula SAE EV',
  ],
  skills: () => [
    '┌─────────────┬──────────────────────────────────────────────┐',
    '│ Languages   │ C/C++, TypeScript, Python, Java              │',
    '│ Frontend    │ React, Next.js, Angular, HTML/CSS            │',
    '│ Backend     │ Spring Boot, Node.js, PostgreSQL, Flask      │',
    '│ Embedded    │ STM32, CAN, UART, SPI, I2C                   │',
    '│ Cloud/Tools │ AWS, Firebase, Git, Docker, Redis, RabbitMQ  |',
    '|             │ Kafka, Linux                                 │',
    '└─────────────┴──────────────────────────────────────────────┘',
  ],
  ls: () => [
    'home.tsx    about.tsx    projects.tsx',
  ],
  contact: () => [
    'Email:    cameron28202@gmail.com',
    'GitHub:   github.com/evilspoon13',
    'LinkedIn: linkedin.com/in/cameronwstone',
  ],
};

const AUTO_SEQUENCE: { cmd: string; output: string[] }[] = [
  {
    cmd: 'whoami',
    output: ['Cam Stone — Computer Engineering @ TAMU'],
  },
  {
    cmd: 'cat status.txt',
    output: ['Software Engineer | T-Mobile SWE Intern'],
  },
  {
    cmd: 'contact',
    output: COMMANDS.contact(),
  },
  {
    cmd: 'help',
    output: COMMANDS.help(),
  },
];

const Terminal: React.FC = () => {
  const router = useRouter();
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isAutoTyping, setIsAutoTyping] = useState(true);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const isAutoTypingRef = useRef(true);

  // Auto-scroll to bottom
  const scrollToBottom = useCallback(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, []);

  // Auto-type sequence on mount
  useEffect(() => {
    let cancelled = false;

    const typeSequence = async () => {
      for (const step of AUTO_SEQUENCE) {
        if (cancelled) return;

        // Type the command character by character
        for (let i = 0; i <= step.cmd.length; i++) {
          if (cancelled) return;
          const partial = step.cmd.slice(0, i);
          setCurrentInput(partial);
          await new Promise(r => setTimeout(r, 50 + Math.random() * 30));
        }

        await new Promise(r => setTimeout(r, 300));
        if (cancelled) return;

        // "Execute" the command
        setHistory(prev => [
          ...prev,
          { type: 'input', text: step.cmd },
          ...step.output.map(line => ({ type: 'output' as const, text: line })),
        ]);
        setCurrentInput('');
        await new Promise(r => setTimeout(r, 600));
      }

      if (!cancelled) {
        setIsAutoTyping(false);
        isAutoTypingRef.current = false;
      }
    };

    typeSequence();
    return () => { cancelled = true; };
  }, []);

  // Scroll to bottom when history changes
  useEffect(() => {
    scrollToBottom();
  }, [history, currentInput, scrollToBottom]);

  // Focus input when auto-typing ends
  useEffect(() => {
    if (!isAutoTyping && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAutoTyping]);

  const executeCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    setCommandHistory(prev => [cmd, ...prev]);
    setHistoryIndex(-1);

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    const newLines: HistoryLine[] = [{ type: 'input', text: cmd }];

    if (trimmed === 'about' || trimmed === 'cd about') {
      newLines.push({ type: 'system', text: 'Navigating to about.tsx...' });
      setHistory(prev => [...prev, ...newLines]);
      setTimeout(() => router.push('/about'), 500);
      return;
    }

    if (trimmed === 'projects' || trimmed === 'cd projects') {
      newLines.push({ type: 'system', text: 'Navigating to projects.tsx...' });
      setHistory(prev => [...prev, ...newLines]);
      setTimeout(() => router.push('/projects'), 500);
      return;
    }

    if (COMMANDS[trimmed]) {
      const output = COMMANDS[trimmed]();
      output.forEach(line => newLines.push({ type: 'output', text: line }));
    } else if (trimmed === '') {
      // Empty command, just add the prompt line
    } else {
      newLines.push({
        type: 'output',
        text: `command not found: ${trimmed}. Type 'help' for available commands.`,
      });
    }

    setHistory(prev => [...prev, ...newLines]);
  }, [router]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
      setCurrentInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      } else {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  const focusInput = () => {
    if (!isAutoTyping && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="terminal" onClick={focusInput}>
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="terminal-title">visitor@camstone.dev: ~</span>
        <div className="terminal-titlebar-space" />
      </div>
      <div className="terminal-body" ref={terminalBodyRef}>
        {history.map((line, i) => (
          <div key={i} className={`terminal-line terminal-${line.type}`}>
            {line.type === 'input' ? (
              <>
                <span className="prompt-user">{PROMPT}</span>
                <span className="prompt-separator">:</span>
                <span className="prompt-path">{PATH}</span>
                <span className="prompt-symbol">$ </span>
                <span className="prompt-cmd">{line.text}</span>
              </>
            ) : (
              <span className={line.type === 'system' ? 'output-system' : ''}>{line.text}</span>
            )}
          </div>
        ))}

        {/* Active prompt line */}
        <div className="terminal-line terminal-input-line">
          <span className="prompt-user">{PROMPT}</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">{PATH}</span>
          <span className="prompt-symbol">$ </span>
          <span className="prompt-cmd">
            {currentInput}
            <span className={`terminal-cursor ${isAutoTyping ? 'cursor-typing' : 'cursor-blink'}`} />
          </span>
          {!isAutoTyping && (
            <input
              ref={inputRef}
              type="text"
              className="terminal-hidden-input"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal input"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
