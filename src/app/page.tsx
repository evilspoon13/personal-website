"use client";

import React from 'react';
import './Home.css';
import Terminal from './components/Terminal';

const Home: React.FC = () => {
  return (
    <div className="home fade-in">
      <div className="home-container">
        <div className="hero-section">
          <Terminal />
        </div>
      </div>
    </div>
  );
};

export default Home;
