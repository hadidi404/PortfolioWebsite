import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 flex flex-col items-center justify-center bg-gray-900 text-white px-4"
    >
      <div className="max-w-3xl mx-auto text-left">
        <h2 className="text-4xl md:text-5xl mb-8">
          About <span className="text-pink-400">Me</span>
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Hello! I'm a passionate developer who enjoys creating things that live on the internet.
          My interest in web development started back in 2015 when I decided to try editing custom
          themes — turns out hacking together a custom layout taught me a lot about HTML & CSS!
        </p>

        <p className="mt-4 text-gray-300 leading-relaxed">
          Fast-forward to today, and I've had the privilege of working on a variety of projects,
          from small business websites to large-scale applications. My main focus these days is
          building accessible, inclusive products and digital experiences.
        </p>

        <p className="mt-4 text-gray-300 leading-relaxed">
          I'm constantly learning and exploring new technologies to stay up-to-date with the
          ever-evolving web development landscape. When I'm not coding, you can find me reading
          tech blogs, contributing to open-source projects, or enjoying a good cup of coffee.
        </p>
      </div>
    </section>
  );
};

export default About;