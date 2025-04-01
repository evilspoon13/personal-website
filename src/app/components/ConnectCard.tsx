import React from 'react';

interface ConnectCardProps {
  connectRef: React.RefObject<HTMLDivElement | null>;
  className?: string; 
}

export const ConnectCard: React.FC<ConnectCardProps> = ({ connectRef, className = '' }) => {
  return (
    <section ref={connectRef} className={`connect-card function-block ${className}`}>
      <h2 className="function-name">connect {'{'}</h2>
      <div className="function-content">
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
      </div>
      <div className="function-end">{'}'}</div>
    </section>
  );
};

export default ConnectCard;