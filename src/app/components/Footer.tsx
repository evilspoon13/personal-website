"use client";

import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {currentYear} Cam. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/evilspoon13" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/cameronwstone" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:cameron28202@gmail.com">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;