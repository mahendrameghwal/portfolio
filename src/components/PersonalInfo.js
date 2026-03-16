import React from "react";
import { mahendra } from "../images/Images";
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoCodepen,
  IoLocationOutline,
  IoDownloadOutline
} from "react-icons/io5";
import resume from "../pdf/Mahendra 2026.pdf";

const PersonalInfo = () => {
  return (
    <div className="personal">
      <div className="resume-btn-container">
        <a href={resume} download="Mahendra_Kumar_Resume.pdf" className="resume-download-btn">
          <span>Resume</span>
          <IoDownloadOutline />
        </a>
      </div>

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
            <div className="icon-box"><IoMailOutline size={22} /></div>
            <div>
              <p className="title">E-mail</p>
              <p className="social-links">solankirakesh895@gmail.com</p>
            </div>
          </section>

          <section className="social">
            <div className="icon-box"><IoPhonePortraitOutline size={22} /></div>
            <div>
              <p className="title">Phone</p>
              <p className="social-links">+91 8078659728</p>
            </div>
          </section>
          <section className="social">
            <div className="icon-box"><IoLogoLinkedin size={22} /></div>
            <div>
              <p className="title">LinkedIn</p>

              <a href="https://www.linkedin.com/in/mahendrakumar99/" target="_blank" rel="noopener noreferrer">
                <p className="social-links">LinkedIn Profile</p>
              </a>
            </div>
          </section>

          <section className="social">
            <div className="icon-box"><IoLogoGithub size={22} /></div>
            <div>
              <p className="title">Github</p>
              <a href="https://github.com/mahendrameghwal" target="_blank" rel="noopener noreferrer"><p className="social-links">mahendrakumar</p></a>

            </div>
          </section>

          <section className="social">
            <div className="icon-box"><IoLogoCodepen size={22} /></div>
            <div>
              <p className="title">Codepen</p>
              <a href="https://codepen.io/Mahii-" target="_blank" rel="noopener noreferrer">
                <p className="social-links">mahendrakumar</p>

              </a>
            </div>
          </section>

          <section className="social">
            <div className="icon-box"><IoLocationOutline size={22} /></div>

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

export default PersonalInfo;
