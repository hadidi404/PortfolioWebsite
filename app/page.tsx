import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* Future sections: About, Skills, Projects, Contact */}
    </>
  );
};

export default App;
