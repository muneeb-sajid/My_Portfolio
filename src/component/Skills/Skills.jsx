import React from 'react';
import './Skills.css'; // Don't forget to create this CSS file

const Skills = () => {
  const frontendSkills = [
    'HTML5',
    'CSS3 (Flexbox, Grid)',
    'JavaScript (ES6+)',
    'React.js',
    'Redux',
    'Tailwind CSS',
    'Bootstrap',
    'Sass/Less',
    'Responsive Design',
  ];

  const backendSkills = [
    'PHP',
    'Laravel',
    'Node.js',
    'Express.js',
    'Python',
    'Django/Flask',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'RESTful APIs',
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-cards-wrapper">
          {/* Front-End Card */}
          <div className="skill-card frontend-card">
            <h3 className="skill-card-title">Front-End Development</h3>
            <ul className="skill-list">
              {frontendSkills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>

          {/* Back-End Card */}
          <div className="skill-card backend-card">
            <h3 className="skill-card-title">Back-End Development</h3>
            <ul className="skill-list">
              {backendSkills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;