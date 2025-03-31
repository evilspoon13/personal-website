"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import './Home.css'
import useTypewriterEffect from './hooks/useTypewriterEffect';
import useScrollAnimation from './hooks/useScrollAnimation';

const Home: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  
  const facts = [
    "CPEN @ TAMU",
    "Software Engineer",
    "T-Mobile SWE Intern",
    "Brazilian Jiu Jitsu White Belt"
  ];
  
  const { displayText } = useTypewriterEffect({
    texts: facts
  });
  
  const socialTrayRef = useRef<HTMLDivElement>(null);
  const navSectionRef = useRef<HTMLDivElement>(null);
  
  useScrollAnimation([socialTrayRef, navSectionRef]);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to scroll to social tray
  const scrollToSocialTray = () => {
    if (socialTrayRef.current) {
      socialTrayRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="home">
      <div className="function-block home-function fade-in">
        <div className="function-name">intro {'{'}</div>
        <div className="function-content">
          <div className="name-display">
            <div className="first-name">Cam</div>
            <div className="last-name">Stone</div>
            <div className="title">
              <div className="typing-text">{displayText}</div>
              <span className="cursor"></span>
            </div>
          </div>
        </div>
        <div className="function-end">{'}'}</div>
      </div>

      {/* Scroll Button */}
      <button 
        className="scroll-button fade-in"
        onClick={scrollToSocialTray}
      >
        <i className="fas fa-arrow-down"></i>
      </button>
      
      {/* Social Links Tray */}
      <div ref={socialTrayRef} className={`social-tray function-block scroll-fade ${isClient ? '' : 'visible'}`}>
        <div className="function-name">connect {'{'}</div>
        <div className="contact-links">
          <a href="https://github.com/cameron28202" target="_blank" rel="noopener noreferrer" className="contact-link">
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/cameronwstone" target="_blank" rel="noopener noreferrer" className="contact-link">
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="mailto:cameron28202@gmail.com" className="contact-link">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
        <div className="function-end">{'}'}</div>
      </div>
      
      {/* Navigation Section */}
      <div ref={navSectionRef} className={`nav-section function-block scroll-fade ${isClient ? '' : 'visible'}`}>
        <div className="function-name">explore {'{'}</div>
        <div className="nav-links">
          <Link href="/projects" className="nav-link">
            <div className="nav-icon">
              <i className="fas fa-code-branch"></i>
            </div>
            <div className="nav-text">
              <h3>Projects</h3>
              <p>Check out my work</p>
            </div>
          </Link>
          <Link href="/about" className="nav-link">
            <div className="nav-icon">
              <i className="fas fa-user"></i>
            </div>
            <div className="nav-text">
              <h3>About</h3>
              <p>Learn more about me</p>
            </div>
          </Link>
        </div>
        <div className="function-end">{'}'}</div>
      </div>
    </div>
  );
};

export default Home;