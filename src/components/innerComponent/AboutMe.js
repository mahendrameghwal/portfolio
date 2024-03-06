import React from "react";
import development from "../../icons/dev.svg";
import design from "../../icons/design.svg";
const AboutMe = () => {
  return (
    <div className="ic  ic-about">
      <div className="intro-peragraph">
        <div>

            <h2 className="page-title font-medium">About Me </h2>


          <p>
            I have Understanding of Frontend and Backend development and Database management with Javascript as well as
            exprerience with frameworks including React and Express.js and mongoDB <br /> 
    
                 </p>
        </div>

        <div className="what-i-do">
          <h1 className="page-title">What I do </h1>
          <br/>
          <div className="row">
            <section className="">
              <figure>
                <img alt="development" src={development} />&nbsp; &nbsp; 
                <span className="roll-title">Web development</span>
                <figcaption>
                  <p>
                    languages and technologies you work with, such as HTML, CSS,
                    JavaScript, and frameworks like React Js .
                  </p>
                </figcaption>
              </figure>
            </section>
            <section className="col-2">
              <figure>
                <img alt="designer" src={design} /> &nbsp; &nbsp; 
                <span className="roll-title">Web Design</span>
                <figcaption>
                  <p>
                    creating beautiful, user-friendly websites using Figma and
                    Adobe Photoshop
                  </p>
                </figcaption>
              </figure>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
