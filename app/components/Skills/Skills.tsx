"use client";

import React from 'react';
import useRevealGroup from '../../hooks/useRevealGroup';

const Skills: React.FC = () => {
  const register = useRevealGroup({ threshold: 0.12, once: true });
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] },
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={skillGroup.category} ref={register as any} className="p-6 bg-gray-900 rounded-lg reveal" style={{ ['--i' as any]: idx + 1 }}>
              <h3 className="text-2xl font-semibold mb-4 text-pink-400">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-gray-300">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
