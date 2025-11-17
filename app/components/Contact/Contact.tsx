"use client";

import React from 'react';
import useRevealGroup from '../../hooks/useRevealGroup';

const Contact: React.FC = () => {
  const register = useRevealGroup({ threshold: 0.12 });

  return (
    <section
      id="contact"
      className="py-20 flex flex-col items-center justify-center bg-gray-900 text-white px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 ref={register as any} className="text-4xl font-bold mb-6 bg-linear-to-r from-[#f5a353] via-[#53d0f5] to-[#f553a3] bg-clip-text text-transparent reveal" style={{ ['--i' as any]: 0 }}>
          Get In Touch
        </h2>

        <p ref={register as any} className="text-gray-300 mb-8 reveal" style={{ ['--i' as any]: 1 }}>
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            ref={register as any}
            href="mailto:raysonbarnachia@gmail.com"
            className="bg-[#53d0f5] hover:bg-[#3ab8dd] text-white font-semibold py-3 px-8 rounded transition reveal"
            style={{ ['--i' as any]: 2 }}
          >
            Send Email
          </a>
          <a
            ref={register as any}
            href="https://linkedin.com/in/rayson-barnachia-039464256"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#53d0f5] text-[#53d0f5] hover:bg-[#53d0f5] hover:text-white font-semibold py-3 px-8 rounded transition reveal"
            style={{ ['--i' as any]: 3 }}
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className="text-gray-400">
          <p>© 2025 Rayson Barnachia. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
