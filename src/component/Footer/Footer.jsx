import React from 'react';
import './Footer.css'; // Make sure to create this CSS file
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa'; // Importing social icons and an arrow icon

const Footer = () => {
  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Get the current year dynamically for the copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-content">
        {/* Social Media Links */}
        <div className="footer-social-links">
          {/* IMPORTANT: Replace "your-username" and URLs with your actual social media profiles */}
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub Profile">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn Profile">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Twitter Profile">
            <FaTwitter />
          </a>
          {/* Add more social icons here if needed (e.g., FaInstagram, FaDev etc.) */}
        </div>

        {/* Copyright Information */}
        <p className="footer-copyright">
          &copy; {currentYear} Muneeb Sajid. All rights reserved.
        </p>
      </div>

      {/* Back to Top Button (fixed position) */}
      <button className="back-to-top-button" onClick={scrollToTop} aria-label="Back to top of page">
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;