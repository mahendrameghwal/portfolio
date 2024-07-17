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
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <section style={{
              flex: 1,
              padding: '2px',
              marginRight: '20px'
            }}>
              <span style={{
                fontWeight: 'bold',
                fontSize: '1.2em',
                display: 'block',
                marginBottom: '10px'
              }}>
                Frontend Development
              </span>
              <figcaption>
                <p style={{ margin: 0 }}>
                  Languages and technologies you work with, such as HTML, CSS,
                  JavaScript, and frameworks like React Js and Redux for state Management And many more.
                </p>
              </figcaption>
            </section>
            <section style={{
              flex: 1,
              padding: '20px'
            }}>
              <span style={{
                fontWeight: 'bold',
                fontSize: '1.2em',
                display: 'block',
                marginBottom: '10px'
              }}>
                Backend Development
              </span>
              <figcaption>
                <p style={{ margin: 0 }}>
                  Working on Backend with Node.js and Framework Like Express and MongoDB and NO SQL Database
                </p>
              </figcaption>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
