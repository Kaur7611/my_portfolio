import React from "react";
import "./Hero.css";
import avatar from "../assets/avatar.png"; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={avatar} alt="Kamaljit Kaur" className="hero-avatar" />
        <h1 className="hero-title">Hi, I’m <span>Kamaljit Kaur</span></h1>
        <h2 className="hero-subtitle">A Full Stack Developer</h2>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">See My Work</a>
          <a href="#contact" className="btn secondary">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
