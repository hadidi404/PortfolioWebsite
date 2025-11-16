"use client";

import React, { useState } from 'react';
import useRevealGroup from '../../hooks/useRevealGroup';
import Reveal from '../Reveal';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
  const register = useRevealGroup({ threshold: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-neutral-900 text-white flex items-center justify-between py-4 px-4 sm:px-20 z-50">
        <Reveal i={0} register={register} className="text-lg sm:text-xl font-semibold">
          &lt;Developer /&gt;
        </Reveal>

        {/* Desktop menu */}
        <ul className="hidden sm:flex list-none gap-8">
          <li>
            <Reveal as="a" i={1} register={register} className="font-semibold text-gray-300 hover:text-indigo-400 transition-colors" href="#about">
              About
            </Reveal>
          </li>
          <li>
            <Reveal as="a" i={2} register={register} className="font-semibold text-gray-300 hover:text-indigo-400 transition-colors" href="#skills">
              Skills
            </Reveal>
          </li>
          <li>
            <Reveal as="a" i={3} register={register} className="font-semibold text-gray-300 hover:text-indigo-400 transition-colors" href="#projects">
              Projects
            </Reveal>
          </li>
          <li>
            <Reveal as="a" i={4} register={register} className="font-semibold text-gray-300 hover:text-indigo-400 transition-colors" href="#contact">
              Contact
            </Reveal>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="sm:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;
