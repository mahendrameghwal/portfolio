import React from "react";
import { NavLink } from "react-router-dom";

const MenuButtons = () => {
  return (
    <div>
      <div className="btn-main-div ">
        <ul className="btn-wrapper active d-flex">
          <NavLink to={"/"} end className="activeLinks"><li>About</li></NavLink>
          <NavLink to={"/skills"} className="activeLinks">  <li>Skills</li></NavLink>
          <NavLink to={"/projects"} className="activeLinks"><li>Projects</li></NavLink>
          <NavLink to={"/contacts"} className="activeLinks"> <li>Contacts</li></NavLink>
        </ul>
      </div>
    </div>
  );
};

export default MenuButtons;
