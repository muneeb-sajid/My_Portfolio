
import React from 'react';
import Navbar from './component/Navbar/Navbar';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Experience from './component/Experience/Experience';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Education from './component/Education/education';
import { ThemeProvider } from './component/Context/ThemeContext';


export default function App() {
  return (
     <ThemeProvider>
      <div className="App">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
