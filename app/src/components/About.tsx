import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] py-0 relative overflow-x-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] opacity-60" style={{ backgroundAttachment: 'fixed' }} />
      <div className="w-full max-w-5xl mx-auto px-0 md:px-8 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-[#201d66] dark:text-darkAccent mb-12 text-center drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          A brief intro, who am I?
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Text on the left */}
          <motion.div 
            className="md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.p className="text-lg md:text-xl text-[#3949ab] dark:text-darkText" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                I am a student, developer, and a pre-final year undergrad pursuing a degree in Bachelor's in Computer Science and Engineering from K L Deemed to be University, India.
              </motion.p>
              <motion.p className="text-lg md:text-xl text-[#3949ab] dark:text-darkText" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                I am passionate about problem solving, web development, and design. I am artistic, creative, and a problem solver. I love to design and code.💙
              </motion.p>
              <motion.p className="text-lg md:text-xl text-[#3949ab] dark:text-darkText" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                I am good at krafting solutions, critical thinking, and have a good understanding of data structures and algorithms. I have gained a hand full of experience in full-stack web development using SpringBoot with React, MERN stack & Python Django.
              </motion.p>
              <motion.p className="text-lg md:text-xl text-[#3949ab] dark:text-darkText" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                I love to sketch, paint, and read books. In my leisure time I like to stay updated on new tech and review books on my{' '}
                <a href="https://www.instagram.com/aka_thelostbookmark/" target="_blank" rel="noopener noreferrer" className="text-[#201d66] dark:text-darkAccent underline">Instagram</a>{' '}
                and share my insights on{' '}
                <a href="https://www.youtube.com/channel/UCmhi2NSl9RdC5biFARM3nsw" target="_blank" rel="noopener noreferrer" className="text-[#201d66] dark:text-darkAccent underline">YouTube</a> 📸
              </motion.p>
              <div className="flex gap-4 mt-4">
                <a href="mailto:manish__raj@outlook.com" target="_blank" rel="noopener noreferrer" className="text-[#201d66] dark:text-darkAccent hover:text-[#3949ab] dark:hover:text-darkText text-2xl transition-colors"><FaEnvelope /></a>
                <a href="https://github.com/its-pratyushpandey" target="_blank" rel="noopener noreferrer" className="text-[#201d66] dark:text-darkAccent hover:text-[#3949ab] dark:hover:text-darkText text-2xl transition-colors"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/pratyush-pandey1/" target="_blank" rel="noopener noreferrer" className="text-[#201d66] dark:text-darkAccent hover:text-[#3949ab] dark:hover:text-darkText text-2xl transition-colors"><FaLinkedin /></a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[#201d66] dark:text-darkAccent hover:text-[#3949ab] dark:hover:text-darkText text-2xl transition-colors"><FaFileAlt /></a>
              </div>
            </div>
          </motion.div>
          {/* Image on the right with animation */}
          <motion.div 
            className="md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img 
              src="/profile.jpg" 
              alt="Pratyush Kumar Pandey" 
              className="rounded-xl object-contain shadow-xl border-0 max-w-full h-auto md:w-[320px] md:h-[400px] w-48 h-64 transition-all duration-300 bg-white dark:bg-darkCard"
              style={{ objectFit: 'contain', border: 'none' }}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
