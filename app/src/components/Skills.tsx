import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'C', 'Python', 'JavaScript'],
  },
  {
    title: 'Tech Stacks',
    skills: ['SpringBoot', 'MySQL', 'ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Django', 'PostgreSQL', 'Git'],
  },
  {
    title: 'Toolbox',
    skills: ['Figma', 'GSAP', 'TailwindCSS', 'ShadCN', 'Firebase', 'UI/UX Design'],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.8,
      when: 'beforeChildren',
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] py-0 relative overflow-x-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] opacity-60"
        style={{ backgroundAttachment: 'fixed' }}
      />
      <div className="w-full max-w-5xl mx-auto px-0 md:px-8 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#201d66] mb-20 text-center pt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <motion.div
          className="flex flex-col gap-16 w-full"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col gap-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-[#201d66] mb-2">{category.title}</h3>
              <div className="flex flex-wrap gap-3 mt-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="bg-[#e3f2fd] text-[#3949ab] px-4 py-2 rounded-full text-xs md:text-sm font-medium border border-[#b3e5fc] cursor-pointer shadow-sm hover:scale-105 transition-transform duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(32,29,102,0.13)' }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
