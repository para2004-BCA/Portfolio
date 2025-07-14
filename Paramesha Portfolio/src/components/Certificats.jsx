import React from "react";
import "./Certificates.css";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

function Certificates() {
  const certificateData = [
    {
      title: "Full Stack Development",
      provider: "Apna college ",
      date: "June 2025",
      link: "https://drive.google.com/file/d/1SLxJKnTMjh7Pbsy9YbBp9sHDPn5RbKs5/view?usp=drive_link",
    },
  ];

  return (
    <section className="cert-section" id="certificates">
      <h2 className="section-title">Certificates</h2>
      <div className="cert-container">
        {certificateData.map((cert, index) => (
          <div className="cert-card" key={index}>
            <FaAward className="cert-icon" />
            <h3>{cert.title}</h3>
            <p className="cert-provider">{cert.provider}</p>
            <p className="cert-date">{cert.date}</p>
            <a
              href={cert.link}
              className="cert-link"
              target="_blank"
              rel="noreferrer"
            >
              View Certificate <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
