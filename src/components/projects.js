import React from 'react';
import ProjectCard from './ProjectCard';
// import '../styles/Projects.css';

const Projects = () => {
  const projectData = [
    {
      videoSrc: '',
      description: 'Note: Nothing here yet...',
      links: [
        { text: 'More Info', href: 'https://example.com' },
        { text: 'GitHub', href: '' }
      ]
    },
    {
      videoSrc: '',
      description: 'Note: Nothing here yet...',
      links: [
        { text: 'More Info', href: 'https://example.com' },
        { text: 'GitHub', href: '' }
      ]
    },
    {
      videoSrc: '',
      description: 'Note: Nothing here yet...',
      links: [
        { text: 'More Info', href: 'https://example.com' },
        { text: 'GitHub', href: '' }
      ]
    },
    {
      videoSrc: '',
      description: 'Note: Nothing here yet...',
      links: [
        { text: 'More Info', href: 'https://example.com' },
        { text: 'GitHub', href: '' }
      ]
    },
    {
      videoSrc: '',
      description: 'Note: Nothing here yet...',
      links: [
        { text: 'More Info', href: 'https://example.com' },
        { text: 'GitHub', href: '' }
      ]
    },
    {
      videoSrc: '',
      description: 'Note: Nothing here yet...',
      links: [
        { text: 'More Info', href: 'https://example.com' },
        { text: 'GitHub', href: '' }
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
