import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] py-0 relative overflow-x-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] opacity-60" style={{ backgroundAttachment: 'fixed' }} />
      <div className="w-full max-w-5xl mx-auto px-0 md:px-8 relative z-10">
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
              <motion.p className="text-lg md:text-xl text-[#201d66] font-medium" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            I am a third-year B.Tech student in Computer Science and Engineering at KL University, India, with a strong interest in full-stack and cross-platform development. I have hands-on experience in modern technologies including React, React Native, Next.js, Express.js, TypeScript, Django, and Spring Boot.
              </motion.p>
              <motion.p className="text-lg md:text-xl text-[#201d66] font-medium" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
I specialize in web and app development, supported by a strong foundation in data structures, algorithms, and system design, with a focus on building efficient and user-centric solutions.
              </motion.p>
              <motion.p className="text-lg md:text-xl text-[#201d66] font-medium" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
Outside of academics and technology, I pursue creative and recreational interests that contribute to a balanced lifestyle. I’m passionate about cricket and running, which help build discipline and focus, while music serves as a source of relaxation and inspiration in my day-to-day routine.

              </motion.p>
            
              <div className="flex gap-4 mt-4">
                <a href="mailto:2300030557@kluniversity.in" target="_blank" rel="noopener noreferrer" className="text-[#201d66] hover:text-[#3949ab] text-2xl transition-colors"><FaEnvelope /></a>
                <a href="https://github.com/its-pratyushpandey" target="_blank" rel="noopener noreferrer" className="text-[#201d66] hover:text-[#3949ab] text-2xl transition-colors"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/pratyush-pandey1/" target="_blank" rel="noopener noreferrer" className="text-[#201d66] hover:text-[#3949ab] text-2xl transition-colors"><FaLinkedin /></a>
                <a href="/presume.pdf" target="_blank" rel="noopener noreferrer" className="text-[#201d66] hover:text-[#3949ab] text-2xl transition-colors" title="View Resume (PDF)"><FaFileAlt /></a>
              </div>
            </div>
          </motion.div>
          {/* Image on the right with animation and name caption */}
          <motion.div 
            className="md:w-1/2 flex flex-col items-center justify-center order-1 md:order-2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative flex flex-col items-center">
              <motion.img 
                src="/profile.jpg" 
                alt="Pratyush Kumar Pandey" 
                className="rounded-2xl object-cover shadow-2xl border-4 border-[#e3f2fd] max-w-full h-auto md:w-[480px] md:h-[560px] w-80 h-96 transition-all duration-300 bg-white dark:bg-darkCard hover:shadow-[0_8px_32px_rgba(32,29,102,0.18)] hover:scale-105"
                style={{ objectFit: 'cover', border: '4px solid #e3f2fd' }}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
              />
              <span className="mt-4 text-xl md:text-2xl font-bold text-[#201d66] bg-white/80 dark:bg-darkCard/80 px-4 py-2 rounded-lg shadow-md border border-[#e3f2fd] backdrop-blur-sm -translate-y-4">
                Pratyush Kumar Pandey
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
