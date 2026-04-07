"use client";

import React from 'react';
import './SkillsTerminal.css';

const skills = {
  languages: ['C/C++','TypeScript', 'Python', 'Java', 'JavaScript'],
  frameworks: ['React', 'Next.js', 'Spring Boot', 'Node.js'],
  embedded: ['STM32', 'CAN', 'UART', 'SPI', 'I2C'],
  cloud: ['AWS', 'Firebase', 'Docker', 'PostgreSQL'],
  tools: ['Git', 'Linux', 'Maven'],
};

const SkillsTerminal: React.FC = () => {
  return (
    <div className="skills-terminal">
      <div className="skills-terminal-titlebar">
        <div className="skills-terminal-dots">
          <span className="skills-dot skills-dot-red" />
          <span className="skills-dot skills-dot-yellow" />
          <span className="skills-dot skills-dot-green" />
        </div>
        <span className="skills-terminal-title">visitor@camstone.dev: ~/skills.json</span>
        <div className="skills-terminal-titlebar-space" />
      </div>
      <div className="skills-terminal-body">
        <div className="skills-json">
          <div className="json-line"><span className="syntax-punctuation">{'{'}</span></div>
          {Object.entries(skills).map(([key, values], catIndex) => (
            <div key={key} className="json-category" style={{ '--stagger-index': catIndex } as React.CSSProperties}>
              <div className="json-line json-indent">
                <span className="syntax-variable">&quot;{key}&quot;</span>
                <span className="syntax-punctuation">: [</span>
              </div>
              <div className="json-line json-indent-2 skills-values">
                {values.map((skill, i) => (
                  <span key={skill} className="skill-value">
                    <span className="syntax-string">&quot;{skill}&quot;</span>
                    {i < values.length - 1 && <span className="syntax-punctuation">, </span>}
                  </span>
                ))}
              </div>
              <div className="json-line json-indent">
                <span className="syntax-punctuation">]{catIndex < Object.keys(skills).length - 1 ? ',' : ''}</span>
              </div>
            </div>
          ))}
          <div className="json-line"><span className="syntax-punctuation">{'}'}</span></div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTerminal;
