import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="col-md-6 px-4">
          <h1 className="aboutiam">Hey, I'm a Full Stack Web Developer.</h1>
          <p className="des">
            Hi, I am <strong>Paramesha Pattanashetty</strong> — a passionate Full Stack Developer.<br />
            I have experience building apps using <strong>JavaScript, React.js, Node.js, MongoDB, Express.js</strong> and more.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <div className="image-wrapper">
            <img src="/images/pic2_edited.jpg" alt="paramesha" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
