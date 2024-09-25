import React, { useState } from 'react';
// import '../styles/ProjectCard.css'; //all syles being handled by app.css

const ProjectCard = ({ videoSrc, description, links }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    ><h2>test</h2>
      <div className="video-section">
        
        <video src={videoSrc} controls className="video"></video>
      </div>
      <div className="description-section">
        <p>{description}</p>
      </div>
      <div className="links-section">
        {links.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
