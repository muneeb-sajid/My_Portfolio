import React from 'react';
import './education.css'; // Make sure to create this CSS file

// Array of education data to easily manage multiple entries
const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Science (In Progress)',
    institution: 'Bahria University, Johar Town, Lahore',
    details: 'Currently studying in my Third semester.',
    gpa: 'Current GPA: 3.3',
   
    description: 'Engaging in a comprehensive curriculum focused on BSCS',
    year: 'Expected Graduation: 2027'
  },
  {
    id: 2,
    degree: 'Intermediate ICS',
    institution: 'Unique College Bahria Town Lahore', // Please update with your actual college/board
    details: 'Completed with 79% marks.',
    // Add more details about your intermediate studies here
    description: 'Successfully completed my intermediate studies, focusing on Intermediats in Computer Science.',
    year: 'Graduated: [e.g., 2023]', // Please update with your actual graduation year
  },
 
  
  {
    id: 3,
    degree: 'Matriculation',
    institution: 'Unique School Bahria Town Lahore',
    details: 'Completed with 81% marks.',
    description: 'Focused on foundational subjects, building strong basics for higher education.',
    year: 'Graduated: 2021',
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">My Education</h2>

        <div className="education-grid">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-card">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-year">{edu.year}</p>
              <p className="education-details">{edu.details}</p>
              {edu.gpa && <p className="education-gpa">{edu.gpa}</p>} {/* Conditionally show GPA */}
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;