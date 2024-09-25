import React from 'react';

const About = () => (
  <div className="about-container">

    <section id="about" className="about">
      <h2>About Me</h2>
      <p>I am a recent graduate of Computer science with experience </p>
        <img src="profile.jpg" alt="Profile pic" className="profile-picture" />
    </section>

    <section className="skills">
      <h2>Skills</h2>
      <ul>
        <li>Full Stack Web Development</li>
        <li>API Development</li>
        <li>Game Development</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Java</li>
        <li>C#</li>
        <li>SQL</li>
        <li>NoSQL</li>
      </ul>
    </section>

    <section className="education">
      <h2>Education</h2>
      <div className="education-item">
        
        <h3>Associates in Computer Science</h3>
        <p><strong>Renton Technical College</strong>, Renton, WA</p>
        <p>GPA: 3.9</p>
        <p><em>2021 - 2024</em></p>
        
      </div>
    </section>
  </div>
);

export default About;
