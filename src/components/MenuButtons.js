import React from "react";
import { Link, NavLink } from "react-router-dom";

const MenuButtons = () => {
  





  return (



    
    <div>
    <div className="btn-main-div ">
      <ul className="btn-warpper active fr d-flex">
       <NavLink    to={"/"} className="activeLinks"><li>about</li></NavLink>
       <NavLink to={"/skills"} className="activeLinks">  <li>skills</li></NavLink> 
       <NavLink to={"/projects"} className="activeLinks"><li>Projects</li></NavLink>
       <NavLink to ={"/contacts"} className="activeLinks"> <li>Contacts</li></NavLink>  
       
      </ul>
      <p className="page-title">This Website Currently not Mobile Responsive</p>
    </div>
    </div>
  );
};

export default MenuButtons;
