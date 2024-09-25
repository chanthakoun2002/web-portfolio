import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home';
import About from './components/About';
import Projects from './components/projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';
// import './styles/Styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />


        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
