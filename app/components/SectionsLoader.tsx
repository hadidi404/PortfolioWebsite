import React from 'react';
import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection/HeroSection';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Project';
import Contact from './Contact/Contact';

const SectionsLoader: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default SectionsLoader;
