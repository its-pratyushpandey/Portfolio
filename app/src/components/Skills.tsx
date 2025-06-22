import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages I Code In',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'C++', level: 80 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    title: 'Core Technologies',
    skills: [
      { name: 'ReactJS', level: 90 },
      { name: 'NextJS', level: 80 },
      { name: 'React Native', level: 70 },
      { name: 'Typescript', level: 85 },
      { name: 'NodeJS', level: 80 },
      { name: 'ExpressJS', level: 80 },
      { name: 'SpringBoot', level: 70 },
      { name: 'REST API', level: 85 },
      { name: 'WebSockets', level: 70 },
      { name: 'OOP', level: 90 },
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Firebase', level: 75 },
      { name: 'AWS', level: 60 },
      { name: 'NLP', level: 60 },
      { name: 'Git', level: 90 },
      { name: 'Redux', level: 80 },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'TailwindCSS', level: 85 },
      { name: 'Firebase', level: 75 },
      { name: 'GitHub', level: 90 },
      { name: 'GitLab', level: 70 },
      { name: 'VS Code', level: 95 },
      { name: 'Cursor AI', level: 60 },
      { name: 'IntelliJ IDEA', level: 70 },
      { name: 'Render', level: 60 },
      { name: 'DataGrip', level: 60 },
      { name: 'Postman', level: 80 },
      { name: 'Framer Motion', level: 75 },
      { name: 'Prettier', level: 80 },
      { name: 'Notion', level: 70 },
      { name: 'Heroku', level: 65 },
      { name: 'Microsoft Azure', level: 60 },
      { name: 'DigitalOcean', level: 60 },
      { name: 'Namecheap', level: 60 },
    ],
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

const getDotCount = (level: number) => Math.round(level / 20);

// Mock endorsements and certifications data
const skillEndorsements: Record<string, { count: number; avatars: string[] }> = {
  
  // ...add more as needed
};

const skillCertifications: Record<string, { url: string }> = {
  Java: { url: '/Salesforce.pdf' },
  'C++': { url: '/Salesforce.pdf' }, // Example, update as needed
  JavaScript: { url: '/Salesforce.pdf' }, // Example, update as needed
  'ReactJS': { url: '/Accenture.pdf' },
  'NextJS': { url: '/Accenture.pdf' }, // Example, update as needed
  'React Native': { url: '/Accenture.pdf' }, // Example, update as needed
  Typescript: { url: '/Accenture.pdf' }, // Example, update as needed
  NodeJS: { url: '/Accenture.pdf' }, // Example, update as needed
  ExpressJS: { url: '/Accenture.pdf' }, // Example, update as needed
  SpringBoot: { url: '/Accenture.pdf' }, // Example, update as needed
  'REST API': { url: '/Accenture.pdf' }, // Example, update as needed
  WebSockets: { url: '/Accenture.pdf' }, // Example, update as needed
  OOP: { url: '/Accenture.pdf' }, // Example, update as needed
  MongoDB: { url: '/Aviatrix.pdf' }, // Example, update as needed
  MySQL: { url: '/Aviatrix.pdf' }, // Example, update as needed
  Firebase: { url: '/Aviatrix.pdf' }, // Example, update as needed
  AWS: { url: '/Aviatrix.pdf' }, // Example, update as needed
  NLP: { url: '/Aviatrix.pdf' }, // Example, update as needed
  Git: { url: '/Aviatrix.pdf' }, // Example, update as needed
  Redux: { url: '/Aviatrix.pdf' }, // Example, update as needed
  // ...add more as needed
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills" className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] py-0 relative overflow-x-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] opacity-60"
        style={{ backgroundAttachment: 'fixed' }}
      />
      <div className="w-full max-w-7xl mx-auto px-2 md:px-8 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#201d66] mb-12 text-center pt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.title}
              className={`px-6 py-2 rounded-full font-semibold border transition-colors duration-200 text-sm md:text-base shadow-sm ${selectedCategory === idx ? 'bg-[#201d66] text-white border-[#201d66]' : 'bg-white text-[#201d66] border-[#b3e5fc] hover:bg-[#e3f2fd]'}`}
              onClick={() => setSelectedCategory(idx)}
            >
              {cat.title}
            </button>
          ))}
        </div>
        {/* Skills List */}
        <motion.div
          className="flex flex-col gap-10 w-full"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 md:gap-2 border-t border-[#e3f2fd] divide-y md:divide-y-0 md:divide-x divide-[#e3f2fd] bg-transparent"
            variants={itemVariants}
          >
            {skillCategories[selectedCategory].skills.map((skill, i) => {
              const endorsement = skillEndorsements[skill.name];
              const certification = skillCertifications[skill.name];
              return (
                <motion.div
                  key={i}
                  className="flex flex-col gap-2 px-6 py-6 md:py-8 bg-transparent min-h-[110px] justify-center transition-transform group"
                  whileHover={{ scale: 1.04, boxShadow: '0 6px 24px 0 rgba(32,29,102,0.10)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-[#201d66] text-base md:text-lg truncate flex items-center gap-2">
                      {skill.name}
                      {/* Show tick for all in Languages I Code In and Core Technologies, with link if available */}
                      {(selectedCategory === 0 || selectedCategory === 1) && (
                        certification ? (
                          <a href={certification.url} target="_blank" rel="noopener noreferrer" title="View Certificate" className="ml-1">
                            <svg className="inline w-5 h-5 text-[#43a047]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#43a047" strokeWidth="2" fill="#e8f5e9"/><path d="M9 12l2 2 4-4" stroke="#43a047" strokeWidth="2" fill="none"/></svg>
                          </a>
                        ) : (
                          <svg className="inline w-5 h-5 text-[#bdbdbd] ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#bdbdbd" strokeWidth="2" fill="#f5f5f5"/><path d="M9 12l2 2 4-4" stroke="#bdbdbd" strokeWidth="2" fill="none"/></svg>
                        )
                      )}
                    </span>
                    <span className="text-xs text-[#3949ab] font-semibold">{skill.level}%</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-2 md:h-3 bg-[#e3f2fd] rounded-full overflow-hidden mt-1 mb-2">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#201d66] via-[#3949ab] to-[#80deea]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: i * 0.05 }}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  {/* Dots Indicator */}
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${idx < getDotCount(skill.level) ? 'bg-[#201d66]' : 'bg-[#e3f2fd] border border-[#b3e5fc]'}`}
                      />
                    ))}
                  </div>
                  {/* Endorsements */}
                  {endorsement && (
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex -space-x-2">
                        {endorsement.avatars.slice(0, 3).map((avatar, idx) => (
                          <img
                            key={idx}
                            src={avatar}
                            alt="Endorser"
                            className="w-6 h-6 rounded-full border-2 border-white shadow-sm object-cover"
                            style={{ zIndex: 10 - idx }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-[#3949ab] font-medium ml-2">{endorsement.count} Endorsements</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
