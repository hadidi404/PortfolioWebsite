"use client";

import React from 'react';
import profileImage from '../../assets/profile.jpg'; // Adjust path as needed
import useRevealGroup from '../../hooks/useRevealGroup';

const HeroSection: React.FC = () => {
  const register = useRevealGroup({ threshold: 0.1, once: true });

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen pt-15 flex items-center justify-center text-center bg-gray-900 text-white px-4"
      >
        {/* single wrapper so the whole block is centered vertically as one unit */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <div
            ref={register as any}
            className="w-36 h-36 rounded-full overflow-hidden  reveal"
            style={{ ['--i' as any]: 0 }}
          >
            <img
              src={profileImage.src}
              alt="Profile"
              className="w-full h-full object-top object-cover scale-110"
            />
          </div>

          {/* Uniform vertical spacing between name, line and paragraph */}
          <div className="flex flex-col items-center space-y-2">
            <h1 ref={register} className="text-sm uppercase tracking-widest text-pink-500 reveal" style={{ ['--i' as any]: 1 }}>
              Hi, my name is
            </h1>

            <h2 ref={register} className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient pb-1 reveal" style={{ ['--i' as any]: 2 }}>
              Rayson Barnachia
            </h2>

            <h3 ref={register} className="text-3xl md:text-5xl text-gray-300 reveal" style={{ ['--i' as any]: 3 }}>
              I build{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                things
              </span>{' '}
              for the web.
            </h3>

            <p ref={register} className="text-gray-400 max-w-2xl text-lg reveal" style={{ ['--i' as any]: 4 }}>
              I'm a software developer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              ref={register}
              href="#projects"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded shadow transition reveal"
              style={{ ['--i' as any]: 5 }}
            >
              View My Work
            </a>
            <a
              ref={register}
              href="#contact"
              className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold py-2 px-6 rounded transition reveal"
              style={{ ['--i' as any]: 6 }}
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6">
            {/* GitHub */}
            <a
              ref={register as any}
              href="https://github.com/hadidi404"
              target="_blank"
              className="p-3 rounded-full border border-gray-600 hover:border-gray-400 hover:text-gray-400 transition reveal"
              style={{ ['--i' as any]: 7 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5A12 12 0 0 0 0 12.6a12.1 12.1 0 0 0 8.2 11.5c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6a3.2 3.2 0 0 0-1.3-1.7c-1-.7.1-.7.1-.7a2.6 2.6 0 0 1 2 1.4 2.7 2.7 0 0 0 3.6 1 2.8 2.8 0 0 1 .8-1.7c-2.7-.3-5.5-1.4-5.5-6A4.8 4.8 0 0 1 6.6 8a4.4 4.4 0 0 1 .1-3.2s1-.3 3.3 1.3a11.4 11.4 0 0 1 6 0C18.2 4.5 19.2 5 19.2 5a4.4 4.4 0 0 1 .1 3.2 4.8 4.8 0 0 1 1.2 3.3c0 4.6-2.8 5.7-5.5 6a3 3 0 0 1 .9 2.3v3.4c0 .3.2.7.8.6A12.1 12.1 0 0 0 24 12.6 12 12 0 0 0 12 .5Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              ref={register as any}
              href="https://linkedin.com/in/rayson-barnachia-039464256"
              target="_blank"
              className="p-3 rounded-full border border-gray-600 hover:border-blue-500 hover:text-blue-500 transition reveal"
              style={{ ['--i' as any]: 8 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.27 8h4.44v12H.27zM8.36 8h4.26v1.64h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.94 5.29 6.76V20h-4.44v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.15 1.46-2.15 2.97V20H8.36z" />
              </svg>
            </a>

            {/* Email */}
            <a
              ref={register as any}
              href="mailto:raysonbarnachia@gmail.com"
              className="p-3 rounded-full border border-gray-600 hover:border-red-500 hover:text-red-500 transition reveal"
              style={{ ['--i' as any]: 9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 13.5 0 6V18a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6l-12 7.5ZM12 10 0 2h24L12 10Z" />
              </svg>
            </a>
          </div>

        </div>

      </section>

    </>
  );
};

export default HeroSection;
