import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Paramesha</div>
      <ul className="navbar-links">
        <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
        <li><Link to="certificates" smooth={true} duration={500}>Certificates</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
