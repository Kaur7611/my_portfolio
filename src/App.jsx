import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-poppins overflow-x-hidden">
      <Navbar />
      <section id="home">
        <Hero />
      </section>

      <section id="about" className="pt-24">
        <About />
      </section>

      <section id="projects" className="pt-24">
        <Projects />
      </section>

  <section id="experience" className="pt-24">
    <Experience /></section>

      <section id="contact" className="pt-24 pb-10">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;

