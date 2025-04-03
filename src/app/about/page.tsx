"use client";

import React, { useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';
import ConnectCard from '../components/ConnectCard';

const About: React.FC = () => {
  // Create refs for animated sections
  const aboutRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);
  
  // Apply scroll animation
  useScrollAnimation([aboutRef, timelineRef, connectRef], {
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.15,
    delay: 100
  });
  
  return (
    <div className="about fade-in">
      <div className="about-container">
        
        <section ref={aboutRef} className="about-section function-block">
          <h2 className="function-name">about {'{'}</h2>
          <div className="function-content">
            <p>
              Hey! I&apos;m Cam, a Junior at Texas A&amp;M University pursuing a Bachelor&apos;s degree in Computer Engineering with a minor in Mathematics. 
              I&apos;m passionate about learning, specifically in AI and machine learning. I have over 6 months of internship experience in the field 
              of software engineering, and I&apos;m actively seeking new opportunities.
            </p>
            <p>
              My passion for engineering was sparked when I was hooked on Minecraft. I taught myself the basics of programming with YouTube 
              tutorials so I could make fun mods and plugins for my friends and I to enjoy. Nowadays, I enjoy Brazilian Jiu Jitsu and working on 
              open-source projects.
            </p>
          </div>
          <div className="function-end">{'}'}</div>
        </section>
        
        <section ref={timelineRef} className="about-section function-block">
          <h2 className="function-name">timeline {'{'}</h2>
          <div className="function-content">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">May 2025</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Incoming Software Engineer Intern</h3>
                  </div>
                  <p className="timeline-location">T-Mobile, Bellevue, Washington</p>
                  <p className="timeline-description">Developing a full-stack web application to streamline emergency response and enhance communication with law enforcement.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">Aug 2024 - Dec 2024</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Software Engineer Co-Op</h3>
                  </div>
                  <p className="timeline-location">RoviSys Automation &amp; Information Solutions, Houston, Texas</p>
                  <p className="timeline-description">Engineered industrial data management solutions and HMI screens for oil &amp; gas facilities, improving operational efficiency and real-time visualization.</p>
                </div>
              </div>
              

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">Jun 2024 - Jul 2024</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>Machine Learning Research Intern</h3>
                  </div>
                  <p className="timeline-location">University of Technology of Compiègne, Heudiasyc Laboratory, France</p>
                  <p className="timeline-description">Researched and implemented machine learning algorithms for autonomous systems and computer vision applications.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="function-end">{'}'}</div>
        </section>
        
        <ConnectCard 
                connectRef={connectRef}
              
              />
      </div>
    </div>
  );
};

export default About;