import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contacts = () => {
  const [usermessgae, setusermessgae] =useState("Send Message");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sc3jkxf", "template_dhly5u2",form.current, "fJZQd8iRYM2EW1AHh" )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="ic  ic-about">
      <div className="intro-peragraph">
        <p>
          <br />
          <h1 className="page-title">Contact Me</h1>
          <br />
          <form ref={form} onSubmit={sendEmail}>
            <div className="contact-div">
              <section className="contact-wrapper">
                <input
                  required
                  name="name"
                  className="names"
                  type={"text"}
                  placeholder="Full name"
                />
                <br />
                <div className="sec-row">
                  <input
                    name="user_mail"
                    className="emails"
                    required
                    type={"email"}
                    placeholder="Your Email"
                  />
                  <br />
                  <input
                    name="message"
                    className="message"
                    required
                    type={"text"}
                    placeholder="Message For  me"
                  />
                </div>
              </section>

              <button onClick={()=>{setusermessgae("sent Successfully")}} type="submit" className="btn">
                {usermessgae}
              </button>
            </div>
          </form>

          <br />
        </p>
      </div>
    </div>
  );
};

export default Contacts;
