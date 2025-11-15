"use client";

import React from 'react';
import useRevealGroup from '../../hooks/useRevealGroup';

const Navbar: React.FC = () => {
  const register = useRevealGroup({ threshold: 0 });

  return (
    <nav className="fixed top-0 w-full bg-neutral-900 text-white flex items-center justify-between py-4 px-20 z-50">
      <div ref={register as any} className="text-lg sm:text-xl font-semibold reveal" style={{ ['--i' as any]: 0 }}>&lt;Developer /&gt;</div>

      <ul className="hidden sm:flex list-none gap-8">
        <li>
          <a ref={register as any} className="font-semibold text-text-gray-300 hover:text-white transition-colors relative group hover:text-indigo-400 transition-colors reveal" href="#about" style={{ ['--i' as any]: 1 }}>About</a>
        </li>
        <li>
          <a ref={register as any} className="font-semibold text-text-gray-300 hover:text-white transition-colors relative group hover:text-indigo-400 transition-colors reveal" href="#skills" style={{ ['--i' as any]: 2 }}>Skills</a>
        </li>
        <li>
          <a ref={register as any} className="font-semibold text-text-gray-300 hover:text-white transition-colors relative group hover:text-indigo-400 transition-colors reveal" href="#projects" style={{ ['--i' as any]: 3 }}>Projects</a>
        </li>
        <li>
          <a ref={register as any} className="font-semibold text-text-gray-300 hover:text-white transition-colors relative group hover:text-indigo-400 transition-colors reveal" href="#contact" style={{ ['--i' as any]: 4 }}>Contact</a>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
