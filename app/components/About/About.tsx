"use client";

import React from 'react';
import useRevealGroup from '../../hooks/useRevealGroup';

const About: React.FC = () => {
  const register = useRevealGroup({ threshold: 0.15 });

  const paragraphs = [
    `Hello! I'm a passionate developer who enjoys creating things that live on the internet. My interest in web development started back in 2015 when I decided to try editing custom themes — turns out hacking together a custom layout taught me a lot about HTML & CSS!`,
    `Fast-forward to today, and I've had the privilege of working on a variety of projects, from small business websites to large-scale applications. My main focus these days is building accessible, inclusive products and digital experiences.`,
    `I'm constantly learning and exploring new technologies to stay up-to-date with the ever-evolving web development landscape. When I'm not coding, you can find me reading tech blogs, contributing to open-source projects, or enjoying a good cup of coffee.`,
  ];

  return (
    <section
      id="about"
      className="py-20 flex flex-col items-center justify-center bg-gray-900 text-white px-4"
    >
      <div className="max-w-3xl mx-auto text-left">
        <h2 ref={register as any} className="text-4xl md:text-5xl mb-8 reveal" style={{ ['--i' as any]: 0 }}>
          About <span className="text-pink-400">Me</span>
        </h2>

        {/* Card is now a reveal target so it animates as a whole; set --i so it's between heading (0) and paragraphs */}
        <div
          ref={register as any}
          className="backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20 reveal"
          style={{ ['--i' as any]: 1 }}
        >
          <div className="flex flex-col">
            {paragraphs.map((txt, idx) => (
              <p
                key={idx}
                ref={register as any}
                className={`mt-4 text-gray-300 leading-relaxed reveal`}
                style={{ ['--i' as any]: idx + 2 }} // shift paragraphs to start after the card
              >
                {txt}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;