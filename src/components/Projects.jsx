import React, { useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";

// local screenshots
import coffeeImg from "../assets/coffee_culture.png";
import weatherImg from "../assets/weather_app.png";
import blogImg from "../assets/blog.png";
import dispatcherImg from "../assets/load_pilot.png";
import contactImg from "../assets/contact_book.png";

function Projects() {
  const allProjects = [
    {
      image: dispatcherImg,
      title: "LoadPilot | Full-Stack Logistics SaaS 🚛",
      subtitle: "Trucking Management App",
      description:
        "A full-stack logistics suite that automates truck dispatching through relational data tracking, real-time analytics, and secure cloud deployment.",
      tech: ["Python", "Flask", "SQLAlchemy", "HTML5", "Tailwind CSS"],
      live: "https://kaur7611.pythonanywhere.com/",
    },
    {
      image: blogImg,
      title: "Blog Platform ✍️",
      subtitle: "Full-Stack Blogging System",
      description:
        "Full-stack blogging system with Flask backend, SQLAlchemy ORM, and a clean, mobile-first interface.",
      tech: ["Python", "Flask", "SQL", "HTML5", "CSS3"],
      live: "https://k7611.pythonanywhere.com/",
    },
    
    {
      image: weatherImg,
      title: "Weather App 🌦",
      subtitle: "Real-time Weather Dashboard",
      description:
        "A sleek React weather app using Open-Meteo API — shows real-time weather with location and dark mode support.",
      tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
      live: "https://kaur7611.github.io/weather_app/",
    },
    {
      image: coffeeImg,
      title: "Coffee Culture ☕",
      subtitle: "Modern Landing Page",
      description:
        "A modern coffee shop landing page built with React — elegant animations, smooth scrolling, and responsive design.",
      tech: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
      live: "https://kaur7611.github.io/coffee_culture/",
    },
    
    
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        My Projects
      </motion.h2>

      <p className="section-subtitle">
        Projects I worked on. Each one has its own unique story.
      </p>

      <div className="projects-container">
        {visibleProjects.map((project, index) => (
          <motion.div
            className={`project-card-modern ${
              index % 2 === 1 ? "reverse-layout" : ""
            }`}
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
              <p>{project.description}</p>

              <div className="project-tech-badges">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-preview"
              >
                🔗 Preview
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="see-more-btn"
        onClick={() => setShowAll(!showAll)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {showAll ? "Show Less ↑" : "See More Projects ↓"}
      </motion.button>
    </section>
  );
}

export default Projects;



