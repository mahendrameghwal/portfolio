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
import { Fragment } from "react";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "JobConnect",
      image: project0,
      description:
        "It is  a full-stack JOb MarketPalace Where Users can create accounts as candidates or organizations, each with detailed profiles. Organizations post jobs, while candidates search and apply for jobs. Direct messaging is enabled for communication. Both can update profiles and candidates can customize their CVs. PayPal integration allows seamless payments and subscription management.",
      demoLink: "https://jobconnect1.netlify.app/",
      codeLink: "https://github.com/mahendrameghwal/jobconnect",
    },

    {
      name: "Blog management",
      image: project1,
      description:
        "It is  a full-stack blog platform with user authentication, account creation, and commenting features and Integrated admin content management, secure user roles, and a robust back-end for data management and API integrations",
      demoLink: "https://blog-zs58.onrender.com",
      codeLink: "https://github.com/mahendrameghwal/blogs",
    },

    {
      name: "Netflix FullStack",
      image: project2,
      description:
        "Netflix is a full-stack web application built using React, Node.js, Express.js, and MongoDB. It offers a seamless movie browsing experience with a user-friendly interface",
      demoLink: "https://netflix-client-seven.vercel.app",
      codeLink: "https://github.com/mahendrameghwal/netflix-client",
    },
    {
      name: "Global Guide",
      image: project3,
      description: "Global Guide project description",
      demoLink:
        "https://mahendrameghwal.github.io/REST-Countries-API-with-color-theme-switcher",
      codeLink:
        "https://github.com/mahendrameghwal/REST-Countries-API-with-color-theme-switcher",
    },
    {
      name: "Weather App",
      image: project4,
      description:
        "it offers real-time weather data from weatherapi.com. Custom hooks and the Context API ensure efficient state management, while Recharts to stunning data visualizations. Tailwind CSS with styling with responsive design. Explore the code on GitHub",
      demoLink: "https://weather-app-codeclause.vercel.app",
      codeLink: "https://github.com/mahendrameghwal/PRODIGY_WD_01",
    },

    {
      name: "Task Management System",
      image: project5,
      description:
        "TaskMaster is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack along with Tailwind CSS. It is designed to provide users with a personalized task management system",
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
              className="project-img-div"
              onClick={() => openModal(project)}
            >
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <svg
                    width="64px"
                    height="64px"
                    viewBox="-4.8 -4.8 57.60 57.60"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#f5c724"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#CCCCCC"
                      stroke-width="0.096"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M0 0h48v48H0z" fill="none"></path>{" "}
                      <g id="Shopicon">
                        {" "}
                        <circle cx="24" cy="24" r="4"></circle>{" "}
                        <path d="M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,16c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8 S19.582,16,24,16z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
                <img
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",cursor:"pointer !important"
                  }}
                  className="project-img"
                  
                  src={project.image}
                  alt={project.name}
                />
              </div>
              <figcaption className="project-name ">{project.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <Modal open={showModal} onClose={closeModal} center>
        {selectedProject && (
          <Fragment>
            <h2>{selectedProject.name}</h2>
            <img
              className="modal-img"
              src={selectedProject.image}
              alt={selectedProject.name}
            />
            <p>Description: {selectedProject.description}</p>
            <div style={{ display: "flex", margin: "0 5px", gap: "0 20px" }}>
              <button
                title="see live"
                class="save-button"
              >
               <MdLiveTv/>
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo
                </a>
              </button>
              <button
          
                title="Save"
                class="save-button"
              >
              <IoCode/>
                <a
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See code
                </a>
              </button>
            </div>
          </Fragment>
        )}
      </Modal>
    </div>
  );
};

export default Projects;