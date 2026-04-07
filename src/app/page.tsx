"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import './Home.css';
import useScrollAnimation from './hooks/useScrollAnimation';
import ConnectCard from './components/ConnectCard';
import Terminal from './components/Terminal';

const Home: React.FC = () => {
  const socialTrayRef = useRef<HTMLDivElement>(null);
  const navSectionRef = useRef<HTMLDivElement>(null);

  useScrollAnimation([socialTrayRef, navSectionRef]);

  return (
    <div className="home fade-in">
      <div className="home-container">
        <div className="hero-section">
          <Terminal />
        </div>


        {/* social tray */}
        <ConnectCard connectRef={socialTrayRef} />

        {/* Navigation Section */}
        <div ref={navSectionRef} className="nav-section function-block scroll-fade">
          <div className="function-name">
            <span className="syntax-type">void</span>
            <span className="syntax-punctuation">&nbsp;</span>
            <span className="syntax-function">explore</span>
            <span className="syntax-punctuation">{'() {'}</span>
          </div>
          <div className="nav-links stagger-children">
            <Link href="/projects" className="nav-link" style={{ '--stagger-index': 0 } as React.CSSProperties}>
              <div className="nav-icon">
                <i className="fas fa-code-branch"></i>
              </div>
              <div className="nav-text">
                <p>Projects</p>
              </div>
            </Link>
            <Link href="/about" className="nav-link" style={{ '--stagger-index': 1 } as React.CSSProperties}>
              <div className="nav-icon">
                <i className="fas fa-user"></i>
              </div>
              <div className="nav-text">
                <p>About Me</p>
              </div>
            </Link>
          </div>
          <div className="function-end">
            <span className="syntax-punctuation">{'}'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
