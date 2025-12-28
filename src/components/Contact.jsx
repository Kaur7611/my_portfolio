import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Resume from "../assets/Kamaljit Kaur Resume.pdf";
function Contact() {
  const handleCopy = () => {
    navigator.clipboard.writeText("76Kaur11@gmail.com");
    alert("Email copied to clipboard 📋");
  };

  return (
    <section className="contact" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="contact-box"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <FaEnvelope className="email-icon" />
        <p onClick={handleCopy} className="email-text">
          76Kaur11@gmail.com
        </p>
        <span className="copy-hint">(Click to copy)</span>
      </motion.div>

      <div className="contact-links">
  <motion.a
        href={Resume}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📄 View My Resume
      </motion.a>

</div>


      {/* --- Social Buttons --- */}
      <div className="social-buttons">
        <a
          href="https://github.com/Kaur7611"
          target="_blank"
          rel="noopener noreferrer"
          className="circle-btn github-btn"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kamaljit-kaur-webdev"
          target="_blank"
          rel="noopener noreferrer"
          className="circle-btn linkedin-btn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export default Contact;
