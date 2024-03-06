import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { project1, project2, project3, project4 } from "../../images/Images";
import { Fragment } from "react";


const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Netflix FullStack",
      image: project1,
      description: "Netflix is a full-stack web application built using React, Node.js, Express.js, and MongoDB. It offers a seamless movie browsing experience with a user-friendly interface",
      demoLink: "https://netflix-client-seven.vercel.app/main",
      codeLink: "https://github.com/mahendrameghwal/netflix-client",
    },
    {
      name: "Global Guide",
      image: project2,
      description: "Global Guide project description",
      demoLink: "https://mahendrameghwal.github.io/REST-Countries-API-with-color-theme-switcher",
      codeLink: "https://github.com/mahendrameghwal/REST-Countries-API-with-color-theme-switcher",
    },
    {
      name: "Weather App",
      image: project3,
      description: "it offers real-time weather data from weatherapi.com. Custom hooks and the Context API ensure efficient state management, while Recharts to stunning data visualizations. Tailwind CSS with styling with responsive design. Explore the code on GitHub",
      demoLink: "https://weather-app-codeclause.vercel.app",
      codeLink: "https://github.com/mahendrameghwal/PRODIGY_WD_01",
    },
    
    {
      name: "Task Management System",
      image: project4,
      description: "TaskMaster is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack along with Tailwind CSS. It is designed to provide users with a personalized task management system",
      demoLink: "https://example.com/global-guide-demo",
      codeLink: "https://github.com/example/global-guide",
    },
    
  

  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="ic ic-about">
      <div  className="main-project-div">
        <div  className="project-wrapper">
          {projects.map((project, index) => (
            <figure  key={index} className="project-img-div" onClick={() => openModal(project)}>
             <div style={{position:"relative"}} >
             <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
             <svg width="64px" height="64px" viewBox="-4.8 -4.8 57.60 57.60" xmlns="http://www.w3.org/2000/svg" fill="#f5c724" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <circle cx="24" cy="24" r="4"></circle> <path d="M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,16c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8 S19.582,16,24,16z"></path> </g> </g></svg>
             </div>
             <img  style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}} className="project-img" src={project.image} alt={project.name} />
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
    <img className="modal-img" src={selectedProject.image} alt={selectedProject.name} />
    <p>Description: {selectedProject.description}</p>
   <div style={{display:"flex",margin:"0 5px", gap:"0 10px"}}>
   <button  onclick="window.location.href='http://google.com';" title="Save" class="save-button">
   <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
   <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">Live demo</a>
 </button>
 <button  onclick="window.location.href='http://google.com';" title="Save" class="save-button">
 <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
   <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">See code</a>
 </button>
   </div>
    </Fragment>
)}
</Modal>

     
    </div>
  );
};

export default Projects;
