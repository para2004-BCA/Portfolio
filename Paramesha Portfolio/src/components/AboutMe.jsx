import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaFileAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./AboutMe.css";

function AboutMe() {
  return (

  
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <p>
            Hello! I'm Paramesha Pattanashetty, a passionate full stack developer skilled in HTML, CSS, JavaScript, React.js, and Node.js.
          </p>
          <p>
            I hold a BCA degree and love solving real-world problems through clean code and intuitive design.
          </p>
          <p>
            I’m currently seeking opportunities to contribute to impactful projects and grow in a dynamic development environment.
          </p>
        </div>
        <div className="about-right">
          <h2>Contact Info</h2>
          <ul className="contact-list">
            <li>
              <FaPhoneAlt className="icon" /> <span>8310201677</span>
            </li>
            <li>
              <FaMapMarkerAlt className="icon" /> <span>Karnataka, India</span>
            </li>
            <li>
              <FaEnvelope className="icon" />
              <a href="mailto:paramesha0002@gmail.com">paramesha0002@gmail.com</a>
            </li>
            <li>
              <FaLinkedin className="icon" />
              <a href="https://www.linkedin.com/in/paramesha-pattanashetty" target="_blank" rel="noreferrer">
                linkedin.com/in/paramesha-pattanashetty
              </a>
            </li>
             <li>
              <FaLinkedin className="icon" />
              <a href="https://github.com/para2004-BCA" target="_blank" rel="noreferrer">
                GitHub/para2004-BCA
              </a>
            </li>
            <li>
              <FaFileAlt className="icon" />
              <a href="https://drive.google.com/file/d/1Vczpv1oeUhL61i8PMKZKYBddG2Em7IG5/view?usp=drive_link" target="_blank" rel="noreferrer">
                View Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

  );
}

export default AboutMe;
