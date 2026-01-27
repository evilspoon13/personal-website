"use client";

import React, { useRef } from 'react';
import './Projects.css';

// Constellation Logo Component
function ConstellationLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="constellationLogo">
      {/* Stars */}
      <circle cx="12" cy="4" r="1.5" fill="currentColor" className="logoStar" />
      <circle cx="4" cy="12" r="1.5" fill="currentColor" className="logoStar" style={{ animationDelay: '0.2s' }} />
      <circle cx="20" cy="12" r="1.5" fill="currentColor" className="logoStar" style={{ animationDelay: '0.4s' }} />
      <circle cx="8" cy="20" r="1.5" fill="currentColor" className="logoStar" style={{ animationDelay: '0.6s' }} />
      <circle cx="16" cy="20" r="1.5" fill="currentColor" className="logoStar" style={{ animationDelay: '0.8s' }} />
      <circle cx="12" cy="12" r="2" fill="currentColor" className="logoCenterStar" />
      {/* Connections */}
      <path d="M12 4L4 12M12 4L20 12M12 4L12 12M4 12L12 12M20 12L12 12M4 12L8 20M20 12L16 20M12 12L8 20M12 12L16 20M8 20L16 20"
        stroke="currentColor" strokeWidth="1" className="logoLines" />
    </svg>
  );
}

const Projects: React.FC = () => {
  const projectsGridRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'Constellation',
      description: '1st place winner in the Compute & Cloud Challenge at TAMUhack 26. An AI-native IDE for HPC environments that replaces terminal-heavy workflows with a visual execution graph and natural language interface. Constructs, executes, and debugs parallel workflows deployed on AWS Batch with dynamically scaled EC2 workers.',
      technologies: ['Next.js', 'TypeScript', 'React', 'AWS Batch', 'EC2', 'S3', 'Gemini', 'Firebase'],
      image: '/constellation.png',
      links: [{'name': 'GitHub', 'link': 'https://github.com/aathul-raj/constellation'}, {'name': 'Devpost', 'link': 'https://devpost.com/software/constellation-qcb483?ref_content=user-portfolio&ref_feature=in_progress'}]
    },
    {
      title: 'Custom Distributed Battery Management System',
      description: 'A high-performance distributed battery management solution for the Texas A&M Formula SAE Electric race car, managing lithium-ion cells using TI BQ79616 ICs interfaced with an STM32 microcontroller. Implemented multi-protocol communication via UART and CAN bus for vehicle integration.',
      technologies: ['C', 'STM32', 'CAN', 'UART'],
      image: '/formulae.avif',
      links: []
    },
    {
      title: 'Aggie Finals',
      description: 'Website for Texas A&M students to streamline the process of finding their final exam date/time. Aggie Finals uses the Howdy API to fetch real-time class data and display it in a user-friendly format. Users can log in to save their exam schedule for easy reference.',
      technologies: ['React.js', 'Spring Boot', 'PostgreSQL', 'Howdy API', 'TypeScript', 'Java'],
      image: '/aggiefinals.png',
      links: [{'name': 'Live Website', 'link': 'https://aggiefinals.com'}, {'name': 'GitHub', 'link': 'https://github.com/evilspoon13/aggie-finals'}],
    },
    {
      title: 'Aggie Study',
      description: 'Project Manager for AggieStudy, a full-stack web application aimed at creating a one-stop website for Texas A&M students to study for their exams. AggieStudy provides a platform for students to access past exams and other study materials, enhancing their exam preparation experience.',
      technologies: ['React.js', 'Spring Boot', 'PostgreSQL', 'JavaScript', 'Java'],
      image: '/aggiestudylogo.png',
      links: [{'name': 'Live Website', 'link': 'https://aggiestudy.com'}, {'name': 'GitHub', 'link': 'https://github.com/aggie-coding-club/AggieStudy'}],
    },
    {
      title: 'Build4Nurse',
      description: 'A hands-free data entry solution for healthcare workers that placed in the top 5 at Build4Good Hackathon 2025. Build4Nurse uses voice commands to streamline data entry, reducing the 27% of time nurses spend on documentation so they can focus more on patient care.',
      technologies: ['React.js', 'HAPI FHIR API'],
      image: '/build4good.png',
      links: [
        {'name': 'GitHub', 'link': 'https://github.com/evilspoon13/build4nurse'}
      ],
    },
    {
      title: 'Single Cycle Processor',
      description: 'Designed and implemented a complete single-cycle processor in Verilog, building all essential components (ALU, memory systems, control unit, register file) and successfully integrating them into a fully functional system capable of executing a comprehensive instruction set.',
      technologies: ['Verilog', 'Computer Architecture', 'ARMv8'],
      image: '/processor.png',
      links: [{'name': 'GitHub', 'link': 'https://github.com/evilspoon13/ECEN350'}],
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
      links: [{'name': 'GitHub', 'link': 'https://github.com/evilspoon13/'}]
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
                    {project.title === 'Constellation' ? (
                      <div className="constellation-animation-container">
                        <ConstellationLogo size={180} />
                      </div>
                    ) : (
                      <img src={project.image} alt={project.title} />
                    )}
                    <div className="project-image-overlay"></div>
                  </div>
                  <div className="project-content">
                    <div className="project-header">
                      <h3>
                        {project.title === 'Constellation' && <ConstellationLogo size={28} />}
                        {project.title}
                      </h3>
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
        
      </div>
    </div>
  );
};

export default Projects;