import React from "react";

const AboutMe = () => {
  return (
    <div className="ic  ic-about">
      <div className="intro-peragraph">
        <div>

            <h2 className="page-title font-medium">About Me </h2>
          <p>
            Exprienced with Frontend and Backend development and Database management with Javascript as well as
            exprerience with various frameworks including like <span style={{color:'#ffdb70'}}>Next.JS</span>,  <span style={{color:'#ffdb70'}}>React</span> and <span style={{color:'#ffdb70'}}>Express</span> and <span style={{color:'#ffdb70'}}>MongoDB</span>  etc more..<br /> 
    
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
                <p >
                I work with HTML for structuring content, CSS for styling, and JavaScript for interactivity. I use React.js to build user interfaces and Redux for efficient state management, ensuring predictable state changes. This tech stack allows me to develop responsive and efficient web applications
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
