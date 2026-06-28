import React from "react";
import { FaAws, FaGitAlt, FaGithub, FaLinux, FaNodeJs } from "react-icons/fa";
import { MdOutlineAccountTree } from "react-icons/md";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiSequelize,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  TbApi,
  TbDatabase,
  TbPlugConnected,
  TbTopologyStar3,
} from "react-icons/tb";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "React Hooks", icon: RiReactjsLine, color: "#61DAFB" },
      { name: "Context API", icon: MdOutlineAccountTree, color: "#FFD15C" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "BullMQ", icon: TbTopologyStar3, color: "#FFD15C" },
      { name: "REST APIs", icon: TbApi, color: "#FFD15C" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#FFFFFF" },
      { name: "WebSockets", icon: TbPlugConnected, color: "#4FD1C5" },
      { name: "Sequelize", icon: SiSequelize, color: "#52B0E7" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "NoSQL", icon: TbDatabase, color: "#7EE787" },
      { name: "Prisma", icon: SiPrisma, color: "#FFFFFF" },
      { name: "Mongoose", icon: SiMongoose, color: "#880000" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Linux", icon: FaLinux, color: "#FCC624" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="ic ic-about">
      <div className="intro-peragraph">
        <h1 className="page-title">Skills</h1>

        <div className="skill-div">
          {skillGroups.map((group) => (
            <div className="col-1" key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.skills.map(({ name, icon: Icon, color }) => (
                  <li key={name} className="skill-item">
                    <span className="skill-icons" aria-hidden="true">
                      <Icon className="skill-logo" style={{ color }} />
                    </span>
                    <span className="skill-name">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
