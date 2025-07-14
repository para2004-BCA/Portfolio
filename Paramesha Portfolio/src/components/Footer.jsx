import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Paramesha Pattanashetty</h3>
        <p>Full Stack Developer | Passionate about building useful web apps</p>
        <div className="social-icons">
          <a
            href="https://github.com/para2004-BCA"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/paramesha-pattanashetty"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:paramesha0002@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-bottom">
          &copy; {new Date().getFullYear()} Paramesha Pattanashetty. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
