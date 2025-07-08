import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    image: 'https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/e9e674e2c0c35b3fcdd8c1a795eef804bbbfd65f', // Replace with your AI-generated image URL
    title: 'Burger Builder',
    description:
      'A fully functional Burger Builder website with user authentication, product listings, shopping cart, and secure checkout. Focused on seamless user experience.',
    skills: ['HTML 5', 'CSS 3', 'JavaScript', 'DOM manioulation'],
    githubLink: 'https://github.com/muneeb-sajid/Burger-Builder',
    liveLink: 'https://burger-builder-enbl.vercel.app/',
  },
  {
    id: 2,
    image: 'https://clickup.com/blog/wp-content/uploads/2025/04/ClickUp-Task-Management-Template-Dashboard.png', // Replace with your AI-generated image URL
    title: 'Task Management App',
    description:
      'A web application to help users organize their daily tasks, set reminders, and track progress with an intuitive UI and robust backend.',
    skills: [ 'HTML', 'React Js', ' CSS'],
    githubLink: 'https://github.com/muneeb-sajid/TODO-APP',
    liveLink: 'https://todo-app-sooty-nine.vercel.app/',
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