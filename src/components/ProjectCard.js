import React, { useState } from 'react';

const ProjectCard = ({ title,videoSrc,imageSrc, info, description, links }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log("Image Source:", imageSrc);
  return (
    <div
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      
      >
      {/* <div className="video-section">
        
        <video src={videoSrc} controls className="video"></video>
      </div> */}
      <div className="title-section">
        <h2>{title}</h2>
      </div>
      <div>

        <img src={imageSrc} alt="Project representation" />
        </div>

        <div className="info-section">
        <p>{info}</p>
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
