import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMicrosoft, FaRegCalendarAlt } from "react-icons/fa";

function Experience() {
  return (
    <section className="experience" id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Work Experience
      </motion.h2>

      <motion.div
        className="exp-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="exp-header">
          <FaLaptopCode className="exp-icon" />
          <div>
            <h3>Web Development Intern</h3>
            <p className="company">Spikitech Private Limited</p>
          </div>
        </div>

        <p className="exp-date">
          <FaRegCalendarAlt /> Sept, 2025
        </p>

        <ul className="exp-points">
          <li>Worked on innovative projects while learning professional development standards and best practices.</li>
          <li>Gained exposure to modern AI tools and their practical applications in development.</li>
          <li>Learned how company workflows are structured and projects are managed efficiently.</li>
          <li>Observed how professional developers plan, build, and deliver complete solutions.</li>
        </ul>

        <div className="extra-tag">
          <FaMicrosoft className="ms-icon" /> Spikitech × Microsoft Workshop
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
