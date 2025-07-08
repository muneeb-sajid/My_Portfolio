import React from 'react';
import './Experience.css'; // Make sure to create this CSS file

const experienceData = [
  {
    id: 1,
    company: 'Tech Solutions Inc.',
    title: 'Full-Stack Developer',
    years: 'Jan 2023 - Present',
    description: [
      'Developed and maintained web applications using React.js, Node.js, and MongoDB.',
      'Implemented RESTful APIs and integrated third-party services.',
      'Collaborated with cross-functional teams to define, design, and ship new features.',
      'Optimized application performance and ensured responsiveness across devices.',
    ],
  },
  {
    id: 2,
    company: 'Web Innovations Co.',
    title: 'Junior Web Developer',
    years: 'Jul 2021 - Dec 2022',
    description: [
      'Assisted in the development of front-end components with HTML, CSS, and JavaScript.',
      'Contributed to back-end logic using PHP and MySQL.',
      'Participated in code reviews and learned best practices in software development.',
    ],
  },
  // Add more experience entries as needed
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">My Experience</h2>
        <div className="experience-grid">
          {experienceData.map((exp) => (
            <div key={exp.id} className="experience-card">
              <h3 className="company-name">{exp.company}</h3>
              <p className="job-title">{exp.title}</p>
              <p className="job-years">{exp.years}</p>
              <ul className="job-description-list">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;