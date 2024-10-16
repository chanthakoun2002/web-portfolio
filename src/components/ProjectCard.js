import React, { useState } from 'react';

const ProjectCard = ({ title, images, info, description, links }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="project-card">
      <h3 onClick={toggleExpand} className="dropdown-title">
        {title} {isExpanded ? '▲' : '▼'}
      </h3>

      {isExpanded && (
        <div className="project-details">
          <div className="slideshow">
            <img
              src={images[currentImageIndex]}
              alt={`${title} screenshot`}
              className="slideshow-image"
            />
            <div className="slideshow-controls">
              <button onClick={prevImage}>&lt;</button>
              <button onClick={nextImage}>&gt;</button>
            </div>
          </div>

          <p className="project-info">{info}</p>
          <p className="project-description">{description}</p>
          <div className="project-links">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

