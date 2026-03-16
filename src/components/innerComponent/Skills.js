import React from "react";

const Skills = () => {
  return (
    <div className="ic  ic-about">
      <div className="intro-peragraph">
        <br />
        <h1 className="page-title">Skills</h1>
        <br />
        <div className="skill-div ">
          <div className="col-1">
            <h2>Frontend</h2>
            <ul>
              <li>React.js</li>
              <li>Redux</li>
              <li>Next.js</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="col-1">
            <h2>Backend</h2>
            <ul>
              <li>Node.js & Express.js</li>
              <li>REST APIs</li>
              <li>Socket.IO</li>
              <li>Authentication & Auth (RBAC)</li>
              <li>PostgreSQL & Sequelize ORM</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="col-1">
            <h2>Tools & Platforms</h2>
            <ul>
              <li>Git & GitHub</li>
              <li>Postman</li>
              <li>Linux & Windows</li>
              <li>Razorpay Integrated</li>
              <li>PayPal Integrated</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
