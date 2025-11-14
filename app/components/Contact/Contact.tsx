import React from 'react';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 flex flex-col items-center justify-center bg-gray-900 text-white px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <p className="text-gray-300 mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href="mailto:raysonbarnachia@gmail.com"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded transition"
          >
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/rayson-barnachia-039464256"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold py-3 px-8 rounded transition"
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
