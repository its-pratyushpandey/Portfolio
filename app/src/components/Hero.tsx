import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[url('https://c.animaapp.com/mc46fmevF9sLme/img/abstract-cubic-background-image-.png')] bg-cover bg-center">
      <div className="text-center flex flex-col items-center justify-center gap-6">
        <motion.h2
          className="text-lg md:text-2xl text-[#3949ab] font-medium mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hey I'M
        </motion.h2>
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[#201d66] mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Pratyush Kumar Pandey
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-[#3949ab] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Full Stack Developer | UI/UX Designer
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row items-center gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a href="#contact" className="bg-[#201d66] text-white px-6 py-3 rounded-full text-lg hover:bg-[#3949ab] transition">Get in Touch</a>
          <a href="https://github.com/its-pratyushpandey" target="_blank" rel="noopener noreferrer" className="bg-white border border-[#201d66] text-[#201d66] px-6 py-3 rounded-full text-lg hover:bg-[#201d66] hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/pratyushpandey27/" target="_blank" rel="noopener noreferrer" className="bg-white border border-[#201d66] text-[#201d66] px-6 py-3 rounded-full text-lg hover:bg-[#201d66] hover:text-white transition">LinkedIn</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-white border border-[#201d66] text-[#201d66] px-6 py-3 rounded-full text-lg hover:bg-[#201d66] hover:text-white transition">Resume</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
