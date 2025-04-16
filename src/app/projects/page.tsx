"use client";

import React, { useRef } from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projectsGridRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'Aggie Study',
      description: 'Project Manager for AggieStudy, a full-stack web application aimed at creating a one-stop website for Texas A&M students to study for their exams.',
      technologies: ['React.js', 'Spring Boot', 'PostgreSQL', 'JavaScript', 'Java'],
      image: '/aggiestudylogo.png',
      links: [{'name': 'Live Website', 'link': 'https://aggiestudy.com'}, {'name': 'GitHub', 'link': 'https://github.com/aggie-coding-club/AggieStudy'}],
    },
    {
      title: 'Aggie Finals',
      description: 'Website for Texas A&M students to simply enter their courses and instantly get their final exam date/time.',
      technologies: ['React.JS', 'Howdy API'],
      image: '/aggiefinals.png',
      links: [{'name': 'Live Website', 'link': 'https://aggiefinals.com'}, {'name': 'GitHub', 'link': 'https://github.com/cameron28202/aggie-finals'}],
    },
    {
      title: 'Build4Nurse',
      description: 'A hands-free data entry solution for healthcare workers that placed in the top 5 at Build4Good Hackathon 2025. Build4Nurse uses voice commands to streamline data entry, reducing the 27% of time nurses spend on documentation so they can focus more on patient care.',
      technologies: ['React.js', 'HAPI FHIR API', 'Vercel'],
      image: '/build4good.png',
      links: [
        {'name': 'Live Website', 'link': 'https://build4nurse.vercel.app'}, 
        {'name': 'GitHub', 'link': 'https://github.com/cameron28202/build4nurse'}
      ],
    },
    {
      title: 'Single Cycle Processor',
      description: 'Designed and implemented a complete single-cycle processor in Verilog, building all essential components (ALU, memory systems, control unit, register file) and successfully integrating them into a fully functional system capable of executing a comprehensive instruction set.',
      technologies: ['Verilog', 'Computer Architecture', 'ARMv8'],
      image: '/processor.png',
      links: [{'name': 'GitHub', 'link': 'https://github.com/cameron28202/ECEN350'}],
    },
    {
      title: 'Tidal Hackathon',
      description: 'Participated in the Tidal Hackathon 2024, a two-day hackathon sponsored by Nvidia, AWS and Phillips 66 at Texas A&M. Experimented with a machine learning model for a dynamic speed limit sign.',
      technologies: ['Python', 'Pandas', 'Sklearn'],
      image: '/tidal.png',
      links: []
    },
    {
      title: 'Minecraft Server Developer',
      description: 'Created and developed custom Minecraft plugins using Java, the Spigot API, and Maven. Grew a server to 1000+ members, driving in game purchases with a custom enchantment plugin.',
      technologies: ['Java', 'Spigot API', 'Maven'],
      image: '/minecraft.jpg',
      links: []
    },
    {
      title: 'Relevant Coursework at TAMU',
      description: 'As a junior at Texas A&M University, I\'ve taken the following: Data Structures and Algorithms, Object Oriented Programming, Discrete Mathematics, Digital System Design, Electrical Circuit Theory, Linear Algebra, Differential Equations, Computer Architecture and Design, Operating Systems and Network Programming',
      technologies: ['C/C++', 'Java', 'JavaScript', 'ARMv8', 'Verilog'], 
      image: '/tamulogo.png',
      links: [{'name': 'GitHub', 'link': 'https://github.com/cameron28202/'}]
    }  
  ];
  
  const scrollLeft = () => {
    if (projectsGridRef.current) {
      projectsGridRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (projectsGridRef.current) {
      projectsGridRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="projects fade-in">
      <div className="projects-container">
        
        <section className="projects-section function-block">
          <h2 className="function-name">featuredProjects {'{'}</h2>
          <div className="function-content">
            <div className="projects-grid" ref={projectsGridRef}>

              {projects.map((project, index) => (
                <div className="project-item" key={index}>
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} />
                    <div className="project-image-overlay"></div>
                  </div>
                  <div className="project-content">
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <div className="project-links">
                        {project.links.map((link, linkIndex) => (
                          <a href={link.link} key={linkIndex} target="_blank" rel="noopener noreferrer">{link.name}</a>
                        ))}
                      </div>
                    </div>
                    <p className="project-description">
                      {project.description}
                    </p>
                    <div className="project-tech">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll controls */}
            <div className="scroll-controls">
              <button className="scroll-button" onClick={scrollLeft}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="scroll-button" onClick={scrollRight}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="function-end">{'}'}</div>
        </section>

        <section className="projects-section function-block">
          <h2 className="function-name">currentInterests {'{'}</h2>
          <div className="function-content">
              <p>Currently learning about computer architecture and assembly language (ARMV8), operating systems, and networking. Feel free to reach out to work on an open-source project!</p>
          </div>
          <div className="function-end">{'}'}</div>
        </section>
        
      </div>
    </div>
  );
};

export default Projects;