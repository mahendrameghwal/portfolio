import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const [userMessage, setUserMessage] = useState("Send Message");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setUserMessage("Sending...");
    setError("");
    setSuccess(false);

    const name = form.current.name.value.trim();
    const email = form.current.user_mail.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setUserMessage("Send Message");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      setUserMessage("Send Message");
      return;
    }

    emailjs
      .sendForm(
        "service_1x52n79",
        "template_dhly5u2",
        form.current,
        "fJZQd8iRYM2EW1AHh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setUserMessage("Sent Successfully");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setError("Failed to send message. Please try again later.");
          setUserMessage("Send Message");
        }
      );
  };

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="ic ic-about">
      <div className="intro-peragraph">
        <h1 className="page-title">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
        <div className="contact-div">
        <section className="contact-wrapper">
          <input
            required
            name="name"
            className="names"
            type="text"
            placeholder="Full name"
          />
          <div className="sec-row">
            <input
              name="user_mail"
              className="emails"
              required
              type="email"
              placeholder="Your Email"
            />
            <textarea
              name="message"
              className="message"
              required
              placeholder="Message for me"
              rows="4"
            ></textarea>
          </div>
        </section>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">Message sent successfully!</p>}
        <button type="submit" className="btn" disabled={userMessage === "Sending..."}>
          {userMessage}
        </button>
      </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;