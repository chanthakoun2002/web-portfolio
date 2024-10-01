import React from 'react';
import ProjectCard from './ProjectCard';
import Image1  from '../media/GameScreenSwordAdventurer.png';
import Image2  from '../media/InvenMangApp.png';

const Projects = () => {
  const projectData = [
    {
      title: '2D Isometric RPG',
      imgSrc: Image1,
      info: '(C# | Unity engine)',
      description: 'A RPG Video game build with c# in the unity engine',
      links: [
        // { text: 'More Info', href: 'https://example.com' },
        { text: 'GitHub', href: 'https://github.com/chanthakoun2002/game-dev-project-2d-isometric-rpg' }
      ]
    },
    {
      title: 'Inventory Management App',
      imgSrc: Image2,
      info: '(HTML/CSS | Javascript | Bootstrap | Express | MongoDB)',
      description: 'An application for inventory management that allows for creating, reading, updating, and deletion of items. Along with a backend for communication with a database',
      links: [
        // { text: 'More Info', href: 'https://example.com' },
        { text: 'GitHub', href: 'https://github.com/chanthakoun2002/Inventory-management-api' }
      ]
    },
    {
      title: '...',
      imgSrc: 'https://placehold.co/600x400',
      info: '....',
      description: '....',
      links: [
        { text: 'More Info', href: '' },
        { text: 'GitHub', href: '' }
      ]
    },
    {
      title: '...',
      imgSrc: 'https://placehold.co/600x400',
      info: '....',
      description: '....',
      links: [
        { text: 'More Info', href: '' },
        { text: 'GitHub', href: '' }
      ]
    },
    {
      title: '...',
      imgSrc: 'https://placehold.co/600x400',
      info: '....',
      description: '....',
      links: [
        { text: 'More Info', href: '' },
        { text: 'GitHub', href: '' }
      ]
    },


    // {
    //   videoSrc: '',
    //   description: 'Note: Nothing here yet...',
    //   links: [
    //     { text: 'More Info', href: 'https://example.com' },
    //     { text: 'GitHub', href: '' }
    //   ]
    // },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projectData.map((project, index) => (
          <ProjectCard

            key={index}
            title = {project.title}
            //videoSrc={project.videoSrc}
            imageSrc={project.imgSrc} 
            info={project.info}
            description={project.description}
            links={project.links}
          />
        ))}
      </div>
    </section>
    
  );
};

export default Projects;