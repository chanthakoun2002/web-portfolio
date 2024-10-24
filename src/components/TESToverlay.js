import React from 'react';
import './TESToverlay';

const Overlay = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="overlay">
         
        <div className="overlay-container">
           <div className="overlay-header">
                <h2>{project.title}</h2>
                <h3>{project.titleDescription}</h3>
            </div>
            <div className="overlay-content">

                <img src={project.image} alt={`${project.title}`} />
                <p>{project.description}</p>
                <h4>{project.techDescription}</h4>
                <a href={project.link} target="_blank" rel="noopener noreferrer">Github</a>
            </div>
            <div className="overlay-footer">
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
            
            
        </div>
    </div>
  );
};

export default Overlay;
