
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        
        <div className="logo">
          Kamaljit<span>Kaur</span>
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Nav Menu */}
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <div className={`mobile-menu ${click ? "open" : ""}`}>
        <div className="close-btn" onClick={closeMenu}>
          <FaTimes />
        </div>

        <ul>
          <li><a onClick={closeMenu} href="#home">Home</a></li>
          <li><a onClick={closeMenu} href="#about">About</a></li>
          <li><a onClick={closeMenu} href="#projects">Projects</a></li>
          <li><a onClick={closeMenu} href="#experience">Experience</a></li>
          <li><a onClick={closeMenu} href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* BACKDROP */}
      {click && <div className="backdrop" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;
