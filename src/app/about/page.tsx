"use client";

import React, { useRef, useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';
import ConnectCard from '../components/ConnectCard';

const timelineData = [
  {
    hash: 'a3f7b2c',
    refs: 'HEAD -> main',
    title: 'Software Engineer Intern',
    company: 'T-Mobile',
    location: 'Bellevue, Washington',
    date: 'May 2025 - Present',
    description: 'Developing a full-stack web application to streamline emergency response and enhance communication with law enforcement. Extended internship through my final year of university, working part time remotely.',
    details: [
      'Built full-stack emergency response web application',
      'Streamlined communication workflows with law enforcement',
      'Extended to part-time remote during senior year',
    ],
  },
  {
    hash: 'e91c4d8',
    refs: 'origin/main',
    title: 'Software Engineer',
    company: 'Texas A&M Formula SAE Electric Racing',
    location: 'College Station, Texas',
    date: 'April 2025 - Present',
    description: 'Developing embedded software for a custom distributed battery management system, ensuring safety and reliability in intense racing conditions.',
    details: [
      'Developed embedded C firmware for STM32 microcontroller',
      'Implemented CAN bus & UART communication protocols',
      'Built distributed battery management for lithium-ion cells',
    ],
  },
  {
    hash: '7b2f9a1',
    refs: '',
    title: 'Software Engineer Co-Op',
    company: 'RoviSys Automation & Information Solutions',
    location: 'Houston, Texas',
    date: 'Aug 2024 - Dec 2024',
    description: 'Engineered industrial data management solutions and HMI screens for oil & gas facilities, improving operational efficiency and real-time visualization.',
    details: [
      'Engineered industrial data management solutions',
      'Designed HMI screens for real-time facility monitoring',
      'Improved operational efficiency for oil & gas clients',
    ],
  },
  {
    hash: '3d5e8f2',
    refs: '',
    title: 'Machine Learning Research Intern',
    company: 'University of Technology of Compiègne, Heudiasyc Lab',
    location: 'France',
    date: 'Jun 2024 - Jul 2024',
    description: 'Researched and implemented machine learning algorithms for autonomous systems and computer vision applications.',
    details: [
      'Implemented ML algorithms for autonomous systems',
      'Research in computer vision applications',
    ],
  },
];

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useScrollAnimation([aboutRef, skillsRef, timelineRef, connectRef], {
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.15,
    delay: 100,
  });

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="about fade-in">
      <div className="about-container">
        <section ref={aboutRef} className="about-section function-block scroll-fade">
          <h2 className="function-name">
            <span className="syntax-type">void</span>
            <span className="syntax-punctuation">&nbsp;</span>
            <span className="syntax-function">about</span>
            <span className="syntax-punctuation">{'() {'}</span>
          </h2>
          <div className="function-content">
            <p>
              Hey! I&apos;m Cam, a senior at Texas A&amp;M University pursuing a B.S. in Computer Engineering.
              I&apos;m passionate about learning and I have over a year of professional software engineering experience in embedded programming and full-stack development.
            </p>
            <p>
              My passion for engineering was sparked when I was hooked on Minecraft. I taught myself the basics of programming with YouTube
              tutorials so I could make fun mods and plugins for my friends and I to enjoy. Outside of work and school, I enjoy Brazilian Jiu Jitsu and working on
              open-source projects.
            </p>
          </div>
          <div className="function-end">
            <span className="syntax-punctuation">{'}'}</span>
          </div>
        </section>

        <section ref={timelineRef} className="about-section function-block scroll-fade">
          <h2 className="function-name">
            <span className="syntax-type">void</span>
            <span className="syntax-punctuation">&nbsp;</span>
            <span className="syntax-function">experience</span>
            <span className="syntax-punctuation">{'() {'}</span>
          </h2>
          <div className="function-content">
            <div className="git-log">
              {timelineData.map((entry, index) => (
                <div
                  key={index}
                  className={`git-commit ${expandedIndex === index ? 'expanded' : ''}`}
                  onClick={() => toggleExpand(index)}
                  style={{ '--stagger-index': index } as React.CSSProperties}
                >
                  <div className="commit-graph">
                    <div className="commit-dot" />
                    <div className="commit-line" />
                  </div>
                  <div className="commit-content">
                    <div className="commit-hash-line">
                      <span className="syntax-function">commit</span>{' '}
                      <span className="commit-hash">{entry.hash}</span>
                      {entry.refs && (
                        <span className="commit-refs"> ({entry.refs})</span>
                      )}
                    </div>
                    <div className="commit-meta">
                      <span className="syntax-variable">Author:</span> Cam Stone
                    </div>
                    <div className="commit-meta">
                      <span className="syntax-variable">Date:</span>{' '}
                      <span className="syntax-comment">{entry.date}</span>
                    </div>
                    <div className="commit-message">
                      <h3>{entry.title}</h3>
                      <p className="commit-company">
                        <span className="syntax-type">{entry.company}</span>
                        <span className="commit-location"> — {entry.location}</span>
                      </p>
                      <p className="commit-description">{entry.description}</p>
                    </div>
                    <div className={`commit-details ${expandedIndex === index ? 'details-visible' : ''}`}>
                      <div className="commit-diff-header">
                        <span className="syntax-comment">{'// Key contributions'}</span>
                      </div>
                      <ul className="commit-diff-list">
                        {entry.details.map((detail, i) => (
                          <li key={i}>
                            <span className="diff-plus">+</span> {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="commit-expand-hint">
                      {expandedIndex === index ? '▲ collapse' : '▼ expand details'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="function-end">
            <span className="syntax-punctuation">{'}'}</span>
          </div>
        </section>

        <ConnectCard connectRef={connectRef} />
      </div>
    </div>
  );
};

export default About;
