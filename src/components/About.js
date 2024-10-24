import React from 'react';
import ProfileImg  from '../media/20240616_213408314_iOS.jpg';

const About = () => (
  <div className="about-container">

    <section id="about" className="about">
      <div>
        <h2>A Little About Me...</h2>
          <div>
            <img src={ProfileImg} alt="Profile picture" className="profile-picture" />
          </div> 
          <p>Greetings, I am Andrew and I am a Computer Science graduate and a current Software Engineering Student. 
            I have experience creating full stack websites, applications, and software and looking to grow my skills and experience as a developer.</p>
      </div>
    </section>

    <section className="skills">
      <h2>My Skill's</h2>
      <div className="skills-column">
        <ul>
          <li>Full Stack Web Development</li>
          <li>API Development</li>
          <li>Game Development</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Java</li>
          <li>C#</li>
          <li>Ruby</li>
          <li>Microsoft SQL</li>
          <li>MySQL</li>
          <li>NoSQL</li>
          <li>React.js</li>
          <li>Express.js</li>
          {/* <li>Vite.js</li> */}
          <li>Vue.js</li>
          <li>Ruby On Rails</li>
        </ul>
      </div>
    </section>

    <section className="education">
      <h2>Education</h2>
      <div className="education-row">
       <div className="education-item">
        
        <h3>Associates In Computer Science</h3>
        <p><strong>Renton Technical College</strong>, Renton, WA</p>
        <p>GPA: 3.9</p>
        <p><em>2021 - 2024</em></p>
        
      </div>
      <div className="education-item">
        
        <h3>Bachelors In Software Engineering</h3>
        <p><strong>Western Governors University</strong>, Salt lake City, UT</p>
        {/* <p></p> */}
        <p><em>2025 - Current</em></p>
        
      </div> 
      </div>
      
    </section>
  </div>
);

export default About;
