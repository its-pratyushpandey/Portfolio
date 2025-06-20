import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-[#201d66] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          A brief intro, who am I?
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="https://c.animaapp.com/mc46fmevF9sLme/img/manish-s-profile-picture.png" alt="Manish Raj" className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-[#3949ab] mb-6">
              I am a student, developer, and a pre-final year undergrad pursuing a degree in Bachelor's in Computer Science and Engineering from K L Deemed to be University, India.
            </p>
            <p className="text-lg text-[#3949ab] mb-6">
              I am passionate about problem solving, web development, and design. I am artistic, creative, and a problem solver. I love to design and code.💙
            </p>
            <p className="text-lg text-[#3949ab] mb-6">
              I am good at krafting solutions, critical thinking, and have a good understanding of data structures and algorithms. I have gained a hand full of experience in full-stack web development using SpringBoot with React, MERN stack & Python Django.
            </p>
            <p className="text-lg text-[#3949ab]">
              I love to sketch, paint, and read books. In my leisure time I like to stay updated on new tech and review books on my{' '}
              <a href="https://www.instagram.com/aka_thelostbookmark/" target="_blank" rel="noopener noreferrer" className="text-[#201d66] underline">Instagram</a>{' '}
              and share my insights on{' '}
              <a href="https://www.youtube.com/channel/UCmhi2NSl9RdC5biFARM3nsw" target="_blank" rel="noopener noreferrer" className="text-[#201d66] underline">YouTube</a> 📸
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
