"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import './Home.css';
import useTypewriterEffect from './hooks/useTypewriterEffect';
import useScrollAnimation from './hooks/useScrollAnimation';
import ConnectCard from './components/ConnectCard';

const Home: React.FC = () => {
  
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

  // Function to scroll to social tray
  const scrollToSocialTray = () => {
    if (socialTrayRef.current) {
      socialTrayRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="home fade-in">
      <div className="home-container">
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
        <div className="button-section">
          <button 
            className="scroll-button fade-in"
            onClick={scrollToSocialTray}
          >
            <i className="fas fa-arrow-down"></i>
          </button>
        </div>
        
        {/* social tray */}
        <ConnectCard 
          connectRef={socialTrayRef}
        />
        
        {/* Navigation Section */}
        <div ref={navSectionRef} className="nav-section function-block scroll-fade">
          <div className="function-name">explore {'{'}</div>
          <div className="nav-links">
            <Link href="/projects" className="nav-link">
              <div className="nav-icon">
                <i className="fas fa-code-branch"></i>
              </div>
              <div className="nav-text">
                <h3>Projects</h3>
              </div>
            </Link>
            <Link href="/about" className="nav-link">
              <div className="nav-icon">
                <i className="fas fa-user"></i>
              </div>
              <div className="nav-text">
                <h3>About</h3>
              </div>
            </Link>
          </div>
          <div className="function-end">{'}'}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;