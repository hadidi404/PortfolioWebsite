"use client";

import React from 'react';
import useRevealGroup from '../../hooks/useRevealGroup';
import Reveal from '../Reveal';

const About: React.FC = () => {
  const register = useRevealGroup({ threshold: 0.15 });

  const paragraphs = [
    'Hi! I’m Rayson, a developer passionate about building useful and intuitive applications. My journey in tech began in 2018 through computer repair, which later inspired me to take Computer Science and discover my love for coding. I started programming in 2020 and have since worked on various personal and academic projects, including an event management app developed during my internship. I enjoy solving real-world problems through software and constantly improving my skills.',
    'I work mainly with Flutter, React, and Firebase, focusing on mobile and web development, and I’m currently upskilling in AI. I’m also working at the University of the Cordilleras as a Game Developer under a Project Assistant V role. Outside of coding, I still love repairing computers and phones — the passion that started it all.'
  ];
  return (
    <section
      id="about"
      className="py-20 flex flex-col items-center justify-center bg-gray-900 text-white px-4"
    >
      <div className="max-w-3xl mx-auto text-left">
        <Reveal as="h2" i={0} register={register} className="text-4xl md:text-5xl mb-8">
          About <span className="text-cyan-400">Me</span>
        </Reveal>

        {/* Card is now a reveal target so it animates as a whole; set --i so it's between heading (0) and paragraphs */}
        <Reveal
          i={1}
          register={register}
          className="backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20"
        >
          <div className="flex flex-col">
            {paragraphs.map((txt, idx) => (
              <Reveal
                key={idx}
                as="p"
                i={idx + 2}
                register={register}
                className="mt-4 text-gray-300 leading-relaxed"
              >
                {txt}
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;