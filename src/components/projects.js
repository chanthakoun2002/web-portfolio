import React from 'react';
import ProjectCard from './ProjectCard';
// import '../styles/Projects.css';

const Projects = () => {
  const projectData = [
    {
      videoSrc: '/videos/GameVid.mp4',
      description: 'Note: just testing currently',
      links: [
        { text: 'More Info', href: 'https://example.com/project1' },
        { text: 'GitHub', href: 'https://github.com/chanthakoun2002/game-dev-project-2d-isometric-rpg' }
      ]
    },
    {
      videoSrc: '/videos/GameVid.mp4',
      description: 'Note: just testing currently',
      links: [
        { text: 'More Info', href: 'https://example.com/project1' },
        { text: 'GitHub', href: 'https://github.com/chanthakoun2002/game-dev-project-2d-isometric-rpg' }
      ]
    },
    {
      videoSrc: '/videos/GameVid.mp4',
      description: 'Note: just testing currently',
      links: [
        { text: 'More Info', href: 'https://example.com/project1' },
        { text: 'GitHub', href: 'https://github.com/chanthakoun2002/game-dev-project-2d-isometric-rpg' }
      ]
    },
    {
      videoSrc: '/videos/GameVid.mp4',
      description: 'Note: just testing currently',
      links: [
        { text: 'More Info', href: 'https://example.com/project1' },
        { text: 'GitHub', href: 'https://github.com/chanthakoun2002/game-dev-project-2d-isometric-rpg' }
      ]
    },
    {
      videoSrc: '/videos/GameVid.mp4',
      description: 'Note: just testing currently',
      links: [
        { text: 'More Info', href: 'https://example.com/project1' },
        { text: 'GitHub', href: 'https://github.com/chanthakoun2002/game-dev-project-2d-isometric-rpg' }
      ]
    },
    {
      videoSrc: '/videos/GameVid.mp4',
      description: 'Note: just testing currently',
      links: [
        { text: 'More Info', href: 'https://example.com/project1' },
        { text: 'GitHub', href: 'https://github.com/chanthakoun2002/game-dev-project-2d-isometric-rpg' }
      ]
    },
    
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            videoSrc={project.videoSrc}
            description={project.description}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
