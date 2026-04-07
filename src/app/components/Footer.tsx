"use client";

import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="status-bar">
      <div className="status-left">
        <a href="https://github.com/evilspoon13" target="_blank" rel="noopener noreferrer" className="status-item status-branch">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-2.25.75a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25zM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM3.5 3.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z" />
          </svg>
          main
        </a>
        <span className="status-item">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          0 problems
        </span>
      </div>
      <div className="status-right">
        <span className="status-item">Ln 1, Col 1</span>
        <span className="status-item">UTF-8</span>
        <span className="status-item">TypeScript React</span>
        <div className="status-social">
          <a href="https://github.com/evilspoon13" target="_blank" rel="noopener noreferrer" className="status-item status-link" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/cameronwstone" target="_blank" rel="noopener noreferrer" className="status-item status-link" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:cameron28202@gmail.com" className="status-item status-link" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
