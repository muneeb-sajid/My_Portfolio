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
           <img id="" width="300px" src="https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-06c0-61f7-9d97-0cd5225dbd8a/raw?se=2025-07-08T11%3A11%3A02Z&sp=r&sv=2024-08-04&sr=b&scid=4f0046b3-2bec-5793-bd25-07bd0b683e42&skoid=31bc9c1a-c7e0-460a-8671-bf4a3c419305&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-07T22%3A26%3A59Z&ske=2025-07-08T22%3A26%3A59Z&sks=b&skv=2024-08-04&sig=B4/7uq2a%2B8rt/HI18CBHV5xrrBsh8wDCI%2BiFrMP1RLA%3D" alt="Profile Image" />
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
