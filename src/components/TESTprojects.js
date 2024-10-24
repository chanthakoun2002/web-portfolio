import React, { useState } from 'react';
import ProjectCard from './TESTprojectCard';
import Overlay from './TESToverlay';

import Image1 from '../media/GameScreenSwordAdventurer.png';
import Image2 from '../media/InvenMangApp.png';
import Image3 from '../media/portolfio-img-1.png';
import Placeholder from '../media/underconstrucntion.jpg';

const projectData = [
  {
    title: 'Sword Adventurer',
    titleDescription: 'Video Game',
    image: [Image1],
    description: 'An Isometric 2D action fighter game where you go aroudn and try to slay as many slimes as you can before you die, created using C# in the unity engine.',
    techDescription: 'C# | Unity Engine',
    link: 'https://github.com/chanthakoun2002/game-dev-project-2d-isometric-rpg',
  },
  {
    title: 'Inventory Management App',
    image: [Image2],
    description: 'An inventory management web application with CRUD operations to handle user login/registration and authentication. Allows users to alter inventory items and create orders that update the data in a noSQL database.',
    techDescription: 'HTML/CSS | javascript | Express.js | MongoDB',
    link: 'https://github.com/chanthakoun2002/Inventory-management-api',
  },
  {
    title: 'Web Portfolio',
    image: [Image3],
    description: 'My humble portfolio showcasing my information about me, my skills and projects.',
    techDescription: 'HTML/CSS | javascript | React.js',
    link: 'https://github.com/chanthakoun2002/web-portfolio',
  },
  {
    title: 'Under Construction',
    image: [Placeholder],
    description: '(•‿•)',
    techDescription: '...',
    link: 'https://github.com/chanthakoun2002/web-portfolio',
  },
  {
    title: 'Under Construction',
    image: [Placeholder],
    description: '(•‿•)',
    techDescription: '...',
    link: 'https://github.com/chanthakoun2002/web-portfolio',
  },
  {
    title: 'Under Construction',
    image: [Placeholder],
    description: '(•‿•)',
    techDescription: '...',
    link: 'https://github.com/chanthakoun2002/web-portfolio',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseOverlay = () => {
    setSelectedProject(null);
  };

  return (
    <section className='projects'>
        <h2>My Projects</h2>
        <div className="projects-containerTEST">
            
            <div className="project-grid">
                {projectData.map((project, index) => (
                <ProjectCard
                    key={index}
                    images={project.image}
                    title={project.title}
                    onClick={() => handleCardClick(project)}
                />
                ))}
            </div>
            <Overlay project={selectedProject} onClose={handleCloseOverlay} />
        </div>
    </section>
        
  );
};

export default Projects;
