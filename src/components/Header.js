import React from 'react';

import { Link as ScrollLink} from 'react-scroll';
import logo from '../favicon-32x32.png';
const Header = () => (
  <header>
    <nav>
      <div className="nav-content">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul>
          <li><ScrollLink to="hero" smooth={true} duration={500}>Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
          <li><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></li>
          
          <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;

//note: add a collapsibel navbar