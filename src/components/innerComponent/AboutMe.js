import React from "react";
import development from "../../icons/dev.svg";
import design from "../../icons/design.svg";
const AboutMe = () => {
  return (
    <div className="ic  ic-about">
      <div className="intro-peragraph">
        <div>
          <p>
            <br />
            <h1 className="page-title">About Me </h1>
            <br />
            <h2>Welcome to my website! </h2>
            <br />
          </p>

          <p>
            I have Understanding of HTML , CSS , Javascript as well as
            exprerience with frameworks , including React js and I am always
            curious about learning with the latest web technology If you have
            any questions or suggestions,reach out to me at{" "}
            <span className="page-title">solankirakesh895@gmail.com </span> and
            <span className="page-title">8078659728 </span>{" "}
          </p>
        </div>

        <div className="what-i-do">
          <h1 className="page-title">What I do </h1>
          <br/>
          <div className="row">
            <section className="col-1">
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
