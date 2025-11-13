import React from 'react';
import profileImage from '../../assets/profile.jpg'; // Adjust path as needed

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4"
    >
      <img
        src={profileImage.src}
        alt="Profile"
        className="w-36 h-36 rounded-full mb-6 border-4 border-pink-500 shadow-lg"
      />
      <h1 className="text-sm uppercase tracking-widest text-pink-500">Hi, my name is</h1>

      {/* Updated: big animated gradient name */}
      <h2 className="text-6xl md:text-7xl font-bold mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
        Rayson Barnachia
      </h2>

      {/* Updated: sizing and color for the descriptive line */}
      <h3 className="text-3xl md:text-5xl mt-2 text-gray-300">
        I build{' '}
        <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
          things
        </span>{' '}
        for the web.
      </h3>

      <p className="max-w-xl mt-4 text-gray-300">
        I'm a software developer specializing in building exceptional digital experiences.
        Currently, I'm focused on building accessible, human-centered products.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="#projects"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded shadow transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold py-2 px-6 rounded transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
