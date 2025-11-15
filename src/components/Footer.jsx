import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} <span>Kamaljit Kaur</span>. Built with 💻 React</p>
    </footer>
  );
}

export default Footer;
