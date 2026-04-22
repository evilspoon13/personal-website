"use client";

import React, { useRef } from 'react';
import './Home.css';
import Terminal from './components/Terminal';
import ConnectCard from './components/ConnectCard';

const Home: React.FC = () => {

  const connectRef = useRef<HTMLDivElement>(null);

  return (
    <div className="home fade-in">
      <div className="home-container">
        <div className="hero-section">
          <div className="hero-terminal">
            <Terminal />
          </div>

          <div className="hero-connect">
            <ConnectCard connectRef={connectRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
