import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skils from './components/Skills';
import Project from './components/Project';
import Educations from './components/Education';
import Certificates from './components/Certificats';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><AboutMe /></section>
      <section id="skills"><Skils /></section>
      <section id="projects"><Project /></section>
      <section id="education"><Educations /></section>
      <section id="certificates"><Certificates /></section>
      <section id="contact"><Footer /></section>
    </>
  );
}

export default App;
