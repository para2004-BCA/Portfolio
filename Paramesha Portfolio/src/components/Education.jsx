import React from "react";
import "./Educations.css";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

function Educations() {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Vijayanagara Sri Krishnadevaraya University, Ballari",
      duration: "2022 - 2025",
      grade: "CGPA: 8.35",
    },
    {
      degree:"PUC-Commers",
      institution: " Govt PU College for Boys, Huvinahadagali",
      duration: "2020 - 2022",
      grade: "Percentage: 70%",
    },
    
  ];

  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <FaGraduationCap className="edu-icon" />
            <h3>{edu.degree}</h3>
            <p className="edu-institution"><FaUniversity /> {edu.institution}</p>
            <p className="edu-duration">{edu.duration}</p>
            <p className="edu-grade">{edu.grade}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Educations;
