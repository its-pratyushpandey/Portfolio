import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  year: string;
}

interface ProjectCardProps {
  project: Project;
}

const projects: Project[] = [
  {
    title: 'NAYONA CONSULTANCY SERVICE',
    description: 'Consulting • Engineering',
    image: 'https://c.animaapp.com/mc46fmevF9sLme/img/nayona-consultancy-service.png',
    link: 'https://nayona.netlify.app/',
    tags: ['Design', 'Development'],
    year: '2025',
  },
  {
    title: 'DEVCLI - CLI TOOL',
    description: 'NPM Library • CLI Tool',
    image: 'https://c.animaapp.com/mc46fmevF9sLme/img/devcli---cli-tool.png',
    link: 'https://devcli.vercel.app/',
    tags: ['MERN', 'Package'],
    year: '2024',
  },
  // Add more projects here
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-lg overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#201d66] mb-2">{project.title}</h3>
      <p className="text-[#3949ab] mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="bg-[#e3f2fd] text-[#3949ab] px-2 py-1 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#201d66] hover:text-[#3949ab]"
        >
          View Project
        </a>
        <span className="text-[#3949ab]">{project.year}</span>
      </div>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-[#201d66] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Selected Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://manishraj.netlify.app/projectsarchive" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-[#201d66] text-white px-6 py-3 rounded-full text-lg hover:bg-[#3949ab]"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
