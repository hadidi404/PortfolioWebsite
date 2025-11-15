"use client";

import React from 'react';
import useRevealGroup from '../../hooks/useRevealGroup';

const Skills: React.FC = () => {
  const register = useRevealGroup({ threshold: 0.12 });
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] }
  ];

  return (
    <section
      id="skills"
      className="py-20 flex flex-col items-center justify-center bg-gray-900 text-white px-4"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 ref={register as any} className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent reveal" style={{ ['--i' as any]: 0 }}>
          Skills and Expertise
        </h2>

  <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8" style={{ ['--reveal-step' as any]: '50ms' }}>
          {skills.map((skillGroup, idx) => (
            <article
              key={`${skillGroup.category}-${idx}`}
              ref={register as any}
              className="reveal p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:shadow-pink-500/20 transition-transform transform hover:-translate-y-1"
              style={{ ['--i' as any]: idx + 1 }}
            >
              <h3 id={`skills-${idx}`} className="text-2xl font-semibold mb-4 text-pink-400">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block bg-white/6 text-gray-200 px-3 py-1 rounded-full text-sm"
                    title={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
