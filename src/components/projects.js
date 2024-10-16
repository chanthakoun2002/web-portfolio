import React, { useState } from 'react';
import Image1 from '../media/GameScreenSwordAdventurer.png';
import Image2 from '../media/InvenMangApp.png';
import Image3 from '../media/Screenshot 2024-10-05 153128.png';

const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectData = [
    {
      title: '2D Isometric RPG',
      images: [Image1],
      info: '(C# | Unity engine)',
      description: 'An isometric RPG video game built with C# in the Unity engine.',
      links: [{ text: 'GitHub', href: 'https://github.com/chanthakoun2002/game-dev-project-2d-isometric-rpg' }],
    },
    {
      title: 'Inventory Management App',
      images: [Image2],
      info: '(HTML/CSS | Javascript | Vite.js | Bootstrap | Express | MongoDB)',
      description: 'An app for managing inventory with CRUD operations using NoSQL.',
      links: [{ text: 'GitHub', href: 'https://github.com/chanthakoun2002/Inventory-management-api' }],
    },
    {
      title: 'Web Portfolio',
      images: [Image3],
      info: '(HTML/CSS | Javascript | React.js)',
      description: 'My humble web portfolio showcasing my projects and skills.',
      links: [{ text: 'GitHub', href: 'https://github.com/chanthakoun2002/web-portfolio' }],
    },
  ];

  const toggleProject = (index) => {
    setActiveProjectIndex(index === activeProjectIndex ? null : index);
    setCurrentImageIndex(0); // Reset to the first image
  };

  const nextImage = (project) => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % project.images.length
    );
  };

  const prevImage = (project) => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <section id="projects-section" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {/* Left-side accordion */}
        <div className="projects-list">
          {projectData.map((project, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-title ${index === activeProjectIndex ? 'active' : ''}`}
                onClick={() => toggleProject(index)}
              >
                {project.title} ▼
              </div>
              {index === activeProjectIndex && (
                <div className="accordion-content">
                  <p>{project.info}</p>
                  <p>{project.description}</p>
                  <div className="project-links">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
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
          ))}
        </div>

        {/* Right-side slideshow */}
        {activeProjectIndex !== null && (
          <div className="project-details">
            <div className="project-image">
              {/* <button onClick={() => prevImage(projectData[activeProjectIndex])}>❮</button> */}
              <img
                src={projectData[activeProjectIndex].images[currentImageIndex]}
                alt={`${projectData[activeProjectIndex].title} showcase`}
              />
              {/* <button onClick={() => nextImage(projectData[activeProjectIndex])}>❯</button> */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

