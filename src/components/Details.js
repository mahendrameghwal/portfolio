import React from "react";
import { Outlet } from "react-router-dom";
import MenuButtons from "./MenuButtons";

const Details = () => {
  return (
    <div className="details " >
    <MenuButtons/>
    <Outlet/>
  
     
  
    
    </div>
  );
};

export default Details;




