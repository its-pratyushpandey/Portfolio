import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillCategoryProps {
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

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-semibold text-[#201d66] mb-4">{title}</h3>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          className="bg-[#e3f2fd] text-[#3949ab] px-4 py-2 rounded-full text-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-[#201d66] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} title={category.title} skills={category.skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
