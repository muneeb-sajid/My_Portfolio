import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    image: 'https://picsum.photos/id/237/800/600', // Replace with your AI-generated image URL
    title: 'E-commerce Platform',
    description:
      'A fully functional e-commerce website with user authentication, product listings, shopping cart, and secure checkout. Focused on seamless user experience.',
    skills: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/your-username/ecommerce-platform',
    liveLink: 'https://ecommerce-demo.netlify.app',
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/200/800/600', // Replace with your AI-generated image URL
    title: 'Task Management App',
    description:
      'A web application to help users organize their daily tasks, set reminders, and track progress with an intuitive UI and robust backend.',
    skills: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
    githubLink: 'https://github.com/your-username/task-manager-app',
    liveLink: 'https://task-manager-demo.netlify.app',
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/150/800/600', // Replace with your AI-generated image URL
    title: 'Blog CMS',
    description:
      'A custom Content Management System for blogging, featuring an admin panel, rich text editor, category management, and robust security.',
    skills: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    githubLink: 'https://github.com/your-username/blog-cms',
    liveLink: 'https://blog-cms-demo.netlify.app',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        {/* Changed class name back to projects-grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-skills">
                  {project.skills.map((skill, index) => (
                    <span key={index} className="skill-box">{skill}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link github-icon"
                      title="View on GitHub"
                    >
                      <FaGithub className="link-icon" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link live-demo-icon"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt className="link-icon" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;