import React from 'react';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Project';
import Skills from './Skills';
import Certifications from './Certificats';
import Education from './Education';

function MainPage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
    </>
  );
}

export default MainPage;
