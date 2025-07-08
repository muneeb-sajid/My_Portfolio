// src/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'; 
import './Navbar.css';
import { ThemeProvider, useTheme } from '../Context/ThemeContext';

const Navbar = () => {
  const [click, setClick] = useState(false); // State for mobile menu toggle
  const [scrolled, setScrolled] = useState(false); // State for navbar background on scroll
  const { theme, toggleTheme } = useTheme(); // Get current theme and toggle function from context

  const handleClick = () => setClick(!click); // Toggle mobile menu
  const closeMobileMenu = () => setClick(false); // Close mobile menu when a link is clicked

  // Effect to add/remove 'scrolled' class based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <Link to="about" smooth={true} duration={500} className="navbar-logo" onClick={closeMobileMenu}>
          Muneeb Sajid
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />} 
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500} className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="skills" smooth={true} duration={500} className="nav-links" onClick={closeMobileMenu}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="experience" smooth={true} duration={500} className="nav-links" onClick={closeMobileMenu}>
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link to="projects" smooth={true} duration={500} className="nav-links" onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="education" smooth={true} duration={500} className="nav-links" onClick={closeMobileMenu}>
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={500} className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          {/* Theme Toggle Button */}
          <li className="nav-item theme-toggle-item">
            <button
              className="theme-toggle"
              onClick={toggleTheme} // Call toggleTheme function on click
              aria-label="Toggle dark and light mode"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />} {/* Show Sun icon if dark, Moon if light */}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;