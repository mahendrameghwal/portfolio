import React, { useState } from "react";
import { Link } from "react-router-dom";
import { project1, project2 } from "../../images/Images";
const Projects = () => {
  const [Modal, setModal] = useState(true);
  const [Modal2, setModal2] = useState();

  const toggleModal = () => {
    setModal(!Modal);
  };
  const toggleModal2 = () => {
    setModal(!Modal2);
  };

  return (
    <div className="ic  ic-about">
      <div className="intro-peragraph">
       
          <br />
          <h1 className="page-title">Projects</h1>
          <br />

          <br />
          <div className="main-project-div">
            <div className="project-wrapper">
              <figure className="project-img-div">
                <img className="project-img" src={project1} alt="project1" />
                <figcaption className="project-name">NetFlix Clone Using React.JS</figcaption>
                <span cl className=" project-btn-div">
                  {" "}
                  <p className="yellow-color">See Demo</p>{" "}
                  <p className="yellow-color">see code</p>
                </span>
              </figure>
         

            <figure className="project-img-div">
              <img className="project-img" src={project2} alt="project1" />
              <figcaption className="project-name">Global Guide</figcaption>
              <span className=" project-btn-div">
                {" "}
                <Link to={"https://mahendrameghwal.github.io/REST-Countries-API-with-color-theme-switcher/"}> <p className="yellow-color">See Demo</p></Link>
               <Link to="https://github.com/mahendrameghwal/REST-Countries-API-with-color-theme-switcher">  <p className="yellow-color ">see code</p></Link>
               
              
              </span>
            </figure>
            
          </div>
          </div>
     
      </div>
    </div>
  );
};

export default Projects;
