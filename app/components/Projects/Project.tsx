import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with React and Node.js.',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'A mobile-friendly e-commerce platform with Stripe integration.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'A real-time collaboration tool with WebSocket support.',
      tech: ['React', 'Express', 'Socket.io'],
      link: '#',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 flex flex-col items-center justify-center bg-gray-900 text-white px-4"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 bg-gray-800 rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition"
            >
              <h3 className="text-2xl font-semibold mb-2 text-pink-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-pink-500/20 text-pink-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-pink-400 hover:text-pink-300 font-semibold transition"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
