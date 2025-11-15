import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, 
  FaGitAlt, FaGithub 
} from "react-icons/fa";
import { SiFlask, SiSqlalchemy, SiTailwindcss, SiMysql } from "react-icons/si";

function About() {
  return (
    <section className="about" id="about">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        About Me
      </motion.h2>

      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          Hi, I'm <span className="highlight">Kamaljit Kaur</span>, a passionate 
          <strong> Full Stack Developer </strong> dedicated to building clean, functional, and creative web applications. 
          I specialize in modern front-end and back-end technologies and love transforming ideas into smooth user experiences.
        </p>

        <h3 className="skills-heading">
          💻 I’m proficient in the following technologies:
        </h3>

        {/* Skills Grid */}
        <div className="skills-grid">
          {/* First Row - 5 Skills */}
          <div className="skill"><FaHtml5 color="#e34c26" /> HTML5</div>
          <div className="skill"><FaCss3Alt color="#1572B6" /> CSS3</div>
          <div className="skill"><SiTailwindcss color="#38BDF8" /> Tailwind CSS</div>
          <div className="skill"><FaJs color="#f7df1e" /> JavaScript</div>
          <div className="skill"><FaReact color="#61DBFB" /> React</div>
          

          {/* Second Row - 6 Skills */}
          <div className="skill"><FaPython color="#3776ab" /> Python</div>
          <div className="skill"><SiFlask color="#000000" /> Flask</div>
          <div className="skill"><SiSqlalchemy color="#d71f00" /> SQLAlchemy</div>
          <div className="skill"><SiMysql color="#00618A" /> SQL</div>
          <div className="skill"><FaGitAlt color="#f1502f" /> Git</div>
          <div className="skill"><FaGithub color="#525151ff" /> GitHub</div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;

