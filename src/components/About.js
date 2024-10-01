import React from 'react';

const About = () => (
  <div className="about-container">

    <section id="about" className="about">
      <h2>About Me</h2>
      <p>I am a computer science graduate with experience working with multiple programming languages (C#, Java, javascript, HTML, CSS). 
        And have worked on projects creating Full stack websites, video games in the unity engine, experience working on both SQL
         and NoSQL database's, and working on server-side application's, and API development.</p>
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
        <li>React.js</li>
        <li>Express</li>
        <li>Vite.js</li>
        <li>Vue.js</li>

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
      {/* <div className="education-item">
        
        <h3>Bachelors in software engineering</h3>
        <p><strong>Western Governers University</strong>, Salt lake City, UT</p>
        <p>GPA: 0.0</p>
        <p><em>2025 - 2027</em></p>
        
      </div> */}
    </section>
  </div>
);

export default About;
