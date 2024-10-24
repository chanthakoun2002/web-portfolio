import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => (
  <div className="home-container">
    <section id="hero" className="hero">
      <div className="hero-overlay">
        <h1>Andrew Chanthakoun</h1>
        <h2>Full Stack Developer & Software Engineer</h2>
        <a class="scroll-down"><ScrollLink to="about" smooth={true} duration={500}> Learn More ▼</ScrollLink></a>
       
      </div>
    </section>
  </div>
);
export default Home;

