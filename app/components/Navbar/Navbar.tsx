import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-neutral-900 text-white flex items-center justify-between py-4 px-20 z-50">
      <div className="text-lg sm:text-xl font-semibold">&lt;Developer /&gt;</div>

      <ul className="hidden sm:flex list-none gap-8">
        <li>
          <a className="font-text-gray-300 hover:text-white transition-colors text-gray-300 hover:text-white transition-colors relative group group text-white hover:text-indigo-400 transition-colors" href="#about">About</a>
        </li>
        <li>
          <a className="font-text-gray-300 hover:text-white transition-colors relative group text-white hover:text-indigo-400 text-gray-300 hover:text-white transition-colors relative group-colors" href="#skills">Skills</a>
        </li>
        <li>
          <a className="font-semibold text-gray-300 hover:text-white transition-colors relative group-white hover:text-indigo-400 transition-colors" href="#projects">Projects</a>
        </li>
        <li>
          <a className="font-semibold text-text-gray-300 hover:text-white transition-colors relative group hover:text-indigo-400 transition-colors" href="#contact">Contact</a>
        </li>
      </ul>

      
    </nav>
  );
};

export default Navbar;
