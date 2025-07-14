import React from 'react';
import './Skils.css';

function Skils() {
  const skills = [
    { name: 'HTML', icon: './public/images/html.svg' },
    { name: 'CSS', icon: './public/images/css.svg' },
    { name: 'JavaScript', icon: './public/images/javascript.svg' },
    { name: 'React', icon: './public/images/react.svg' },
    { name: 'MongoDB', icon: './public/images/mongoDB.svg' },
    { name: 'Express', icon: './public/images/expressjs.svg' },
    { name: 'Node js', icon: './public/images/nodejs.svg' },
    { name: 'Material UI', icon: './public/images/materialui.svg' },
    { name: 'Bootstrap', icon: './public/images/bootstrap.svg' },
    { name: 'Git', icon: './public/images/git.svg' },
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
