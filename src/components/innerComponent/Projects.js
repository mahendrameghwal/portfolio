import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {
  project0,
  project1,
  project2,
  project3,
  project4,
  project5,
} from "../../images/Images";
import { MdLiveTv } from "react-icons/md";
import { IoCode } from "react-icons/io5";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);



  const projects = [
    {
      name: "JobConnect",
      image: project0,
      tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "PayPal"],
      description:
        "A comprehensive full-stack Job Marketplace. Features include multi-role profiles (Candidates/Organizations), role-specific job searching, direct messaging, customized CV builders, and secure subscription management via PayPal integration.",
      demoLink: "https://jobconnect1.netlify.app/",
      codeLink: "https://github.com/mahendrameghwal/jobconnect",
    },
    {
      name: "Blog Management",
      image: project1,
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      description:
        "Full-stack blog platform featuring secure user authentication, role-based access for admins and users, and a robust backend for managing posts and comments effectively.",
      demoLink: "https://blog-zs58.onrender.com",
      codeLink: "https://github.com/mahendrameghwal/blogs",
    },
    {
      name: "Netflix Clone",
      image: project2,
      tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
      description:
        "A feature-rich Netflix clone that provides a seamless movie browsing experience. Includes user authentication and a responsive interface powered by the MERN stack.",
      demoLink: "https://netflix-client-seven.vercel.app",
      codeLink: "https://github.com/mahendrameghwal/netflix-client",
    },
    {
      name: "Global Guide",
      image: project3,
      tech: ["JavaScript", "REST API", "HTML", "SCSS"],
      description:
        "Interactive explorer for global country data. Features theme switching, region filtering, and detailed statistics for every nation, powered by a third-party REST API.",
      demoLink:
        "https://mahendrameghwal.github.io/REST-Countries-API-with-color-theme-switcher",
      codeLink:
        "https://github.com/mahendrameghwal/REST-Countries-API-with-color-theme-switcher",
    },
    {
      name: "Weather App",
      image: project4,
      tech: ["React", "Tailwind CSS", "Recharts", "Context API"],
      description:
        "Real-time weather tracking application with stunning data visualizations. Uses custom hooks for state management and provides detailed forecasts via weatherapi.com integration.",
      demoLink: "https://weather-app-codeclause.vercel.app",
      codeLink: "https://github.com/mahendrameghwal/PRODIGY_WD_01",
    },
    {
      name: "TaskMaster",
      image: project5,
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      description:
        "A personalized task management system designed to boost productivity. Includes task categorization, priority levels, and a clean, modern user interface.",
      demoLink: "https://taskmaster-tech.vercel.app/",
      codeLink: "https://github.com/mahendrameghwal/taskmaster-client",
    },
  ];

  const openModal = project => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="ic ic-about">
      <div className="main-project-div">
        <div className="project-wrapper">
          {projects.map((project, index) => (
            <figure
              key={index}
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-img-box">
                <div className="view-overlay">
                  <svg
                    width="48px"
                    height="48px"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#f5c724"
                  >
                    <path d="M0 0h48v48H0z" fill="none"></path>
                    <g id="Shopicon">
                      <circle cx="24" cy="24" r="4"></circle>
                      <path d="M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,16c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8 S19.582,16,24,16z"></path>
                    </g>
                  </svg>
                </div>
                <img
                  className="project-img"
                  src={project.image}
                  alt={project.name}
                />
              </div>
              <figcaption className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <div className="tech-stack">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="tech-chip">{t}</span>
                  ))}
                  {project.tech.length > 3 && <span className="tech-chip">+{project.tech.length - 3}</span>}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <Modal open={showModal} onClose={closeModal} center classNames={{ modal: 'custom-modal' }}>
        {selectedProject && (
          <div className="modal-content">
            <h2 className="modal-title">{selectedProject.name}</h2>
            <div className="modal-img-container">
              <img
                className="modal-img"
                src={selectedProject.image}
                alt={selectedProject.name}
              />
            </div>

            <div className="modal-details">
              <div className="modal-section">
                <h3>About the Project</h3>
                <p className="modal-desc">{selectedProject.description}</p>
              </div>

              <div className="modal-section">
                <h3>Technologies Used</h3>
                <div className="modal-tech-stack">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn live-btn"
                >
                  <MdLiveTv />
                  <span>Live Demo</span>
                </a>
                <a
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn code-btn"
                >
                  <IoCode />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Projects;