import React from 'react';
import './Skils.css';

function Skils() {
  const skills = [
    { name: 'HTML', icon: './images/html.svg' },
    { name: 'CSS', icon: './images/css.svg' },
    { name: 'JavaScript', icon: './images/javascript.svg' },
    { name: 'React', icon: './images/react.svg' },
    { name: 'MongoDB', icon: './images/mongoDB.svg' },
    { name: 'Express', icon: './images/expressjs.svg' },
    { name: 'Node js', icon: './images/nodejs.svg' },
    { name: 'Material UI', icon: './images/materialui.svg' },
    { name: 'Bootstrap', icon: './images/bootstrap.svg' },
    { name: 'Git', icon: './images/git.svg' },
    { name: 'Java', icon: './images/python.png'},
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skils;
