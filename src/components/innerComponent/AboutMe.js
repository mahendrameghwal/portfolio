import React from "react";

const AboutMe = () => {
  return (
    <div className="ic  ic-about">
      <div className="intro-peragraph">
        <div>

          <h2 className="page-title font-medium">About Me</h2>
          <p>
            Experienced MERN Stack Developer with a strong background in building scalable enterprise applications. I specialize in the full development lifecycle, from optimizing backend APIs and database schemas to crafting responsive user interfaces. My expertise extends to implementing complex security systems like RBAC and integrating secure payment workflows.
          </p>
        </div>

        <div className="what-i-do">
          <h1 className="page-title">Experience</h1>
          <div className="experience-item">
            <div className="exp-header">
              <h3>KayJay Global Solutions Pvt. Ltd | MERN Stack Developer</h3>
              <p>Dec 2024 – Present | Udaipur, RJ</p>
            </div>
            <ul className="exp-list">
              <li>Developed 4+ enterprise apps (RMS, CMS, Warranty/Election Systems) with multi-role platforms.</li>
              <li>Optimized RESTful APIs & PostgreSQL/MongoDB schemas, improving performance by 30%.</li>
              <li>Implemented RBAC for secure access management across Admin, Recruiter, and User roles.</li>
              <li>Integrated Razorpay for automated subscriptions and billing workflows.</li>
              <li>Collaborated with AI Engineers to integrate backend APIs with AI-driven modules.</li>
            </ul>
          </div>
        </div>

        <div className="what-i-do">
          <h1 className="page-title">What I do</h1>
          <div className="service-grid">
            <section className="service-item">
              <span>Frontend Development</span>
              <p>
                I work with HTML for structuring content, CSS for styling, and JavaScript for interactivity. I use React.js to build user interfaces and Redux for efficient state management, ensuring predictable state changes.
              </p>
            </section>
            <section className="service-item">
              <span>Backend Development</span>
              <p>
                Working on Backend with Node.js and Frameworks like Express to build scalable and robust server-side applications with optimized business logic.
              </p>
            </section>
            <section className="service-item">
              <span>Database Management</span>
              <p>
                Experienced in designing and optimizing relational and NoSQL database schemas using PostgreSQL, MongoDB, and Sequelize ORM for efficient data handling.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
