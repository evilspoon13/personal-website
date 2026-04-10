"use client";

import React, { useEffect, useRef } from 'react';

const CODE_SNIPPETS = [
  'const x =', 'return (', 'async', '=> {', 'import', '.map(',
  'useState(', 'if (', 'export default', 'function', 'await',
  'interface', '.then(', 'console.log(', '} else {', 'for (',
  'const [', 'useEffect(', '<div>', 'render()', 'class',
  'module.exports', 'require(', '.filter(', 'switch (',
  'try {', 'catch (', 'new Promise(', '.reduce(', 'typeof',
  'Object.keys(', 'Array.from(', '...spread', 'yield',
  'extends', 'implements', 'super(', 'this.', 'static',
];

const SYNTAX_COLORS = [
  '#c586c0', // keyword purple
  '#ce9178', // string orange
  '#6a9955', // comment green
  '#dcdcaa', // function yellow
  '#9cdcfe', // variable blue
  '#4ec9b0', // type teal
  '#b5cea8', // number green
];

interface Snippet {
  text: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  color: string;
  fontSize: number;
}

function createSnippet(canvasWidth: number, canvasHeight: number, startAtBottom = true): Snippet {
  return {
    text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
    x: Math.random() * canvasWidth,
    y: startAtBottom ? canvasHeight + Math.random() * 100 : Math.random() * canvasHeight,
    speed: 0.15 + Math.random() * 0.35,
    opacity: 0.03 + Math.random() * 0.04,
    color: SYNTAX_COLORS[Math.floor(Math.random() * SYNTAX_COLORS.length)],
    fontSize: 11 + Math.floor(Math.random() * 3),
  };
}

const CodeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const snippets: Snippet[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    // Initialize snippets scattered across canvas
    const count = Math.min(30, Math.floor(window.innerWidth / 50));
    for (let i = 0; i < count; i++) {
      snippets.push(createSnippet(canvas.width, canvas.height, false));
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < snippets.length; i++) {
        const s = snippets[i];
        s.y -= s.speed;

        // Respawn at bottom if exited top
        if (s.y < -20) {
          snippets[i] = createSnippet(canvas.width, canvas.height, true);
          continue;
        }

        ctx.font = `${s.fontSize}px Consolas, Monaco, monospace`;
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.opacity;
        ctx.fillText(s.text, s.x, s.y);
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default CodeBackground;
