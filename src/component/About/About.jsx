import React from 'react';
import './About.css'; 



const About = () => {
  
  return (
    <section id="about" className="about-section">
      <div className="about-content-wrapper">
        <div className="about-text-content">
          <p className="greeting">Hi, I am</p>
          <h1 className="name">Muneeb Sajid</h1>
          <p className="title-animated">
            I am a <span className="highlight-text">Fullstack Web Developer</span>
            
            <span className="cursor">|</span>
          </p>
          <p className="description">
            I am a full-stack developer with over 3 month of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the PHP / Laravel stack and
            other modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
        </div>
        <div className="about-image-content">
          <div className="image-wrapper">
            <img id="/src/component/Images/pic.png" src="../Images/pic.png" alt="Profile Image" />
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;