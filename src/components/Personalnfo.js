import React from "react";
import { Link } from "react-router-dom";
import { mahendra } from "../images/Images";

const Personalnfo = () => {
  return (
    <div className="personal">
      <figure className="profile-img">
        <img className="avtar"
          alt="avtar"
          src={mahendra}
        />
        <figcaption>
          <h2>Mahendra Kumar</h2>
          <p className="prof-title">Full Stack developer</p>
        </figcaption>
      </figure>
      <br />
      <hr className="hr" />
      <div>
        <section className="social-div">
          <section className="social">
            <ion-icon size="large" name="mail-outline"></ion-icon>
            <div>
              <p className="title">E-mail</p>
              <p className="social-links">solankirakesh895@gmail.com</p>
            </div>
          </section>

          <section className="social">
            <ion-icon size="large" name="phone-portrait-outline"></ion-icon>
            <div>
              <p className="title">Phone</p>
              <p className="social-links">+91 8078659728</p>
            </div>
          </section>
          <section className="social">
            <ion-icon size="large" name="logo-linkedin"></ion-icon>
            <div>
              <p className="title">LinkedIn</p>
             
              <Link to="https://www.linkedin.com/in/mahendrameghwal/"> <p className="social-links">LinkedIn</p></Link>
            </div>
          </section>

          <section className="social">
            <ion-icon size="large" name="logo-github"></ion-icon>
            <div>
              <p className="title">Github</p>
              <Link to={"https://github.com/mahendrameghwal"}><p className="social-links">mahendrakumar</p></Link>
              
            </div>
          </section>

          <section className="social">
            <ion-icon size="large" name="logo-codepen"></ion-icon>
            <div>
              <p className="title">Codepen</p>
              <Link to={"https://codepen.io/Mahii-"}>
              <p className="social-links">mahendrakumar</p>
              
              </Link>
            </div>
          </section>

          <section className="social">
            <ion-icon size="large" name="location-outline"></ion-icon>

            <div>
              <p className="title">Location</p>
              <p className="social-links">Sirohi (Rajasthan)</p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Personalnfo;
