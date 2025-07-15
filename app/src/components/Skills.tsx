import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
// Icon imports
import { FaJava, FaReact, FaNodeJs, FaAws, FaGitAlt, FaGithub, FaGitlab, FaDatabase, FaPython, FaJs, FaHtml5, FaCss3Alt, FaTools, FaCogs, FaCloud, FaCode, FaTerminal, FaVial, FaRocket, FaRegFileCode, FaRegKeyboard, FaRegObjectGroup, FaRegDotCircle } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiRedux, SiMongodb, SiMysql, SiFirebase, SiNextdotjs, SiSpringboot, SiExpress, SiTailwindcss, SiVercel, SiHeroku, SiDigitalocean, SiNotion, SiPrettier, SiFramer, SiPostman, SiIntellijidea, SiRender, SiDatagrip, SiNamecheap, SiTensorflow } from 'react-icons/si';

const translations = {
  en: {
    title: 'My Skills',
    categories: ['Languages I Code In', 'Core Technologies', 'Developer Tools'],
    sync: 'Sync ',
    topSkill: 'Top Skill',
  },
};

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories = [
  {
    title: 'Languages I Code In',
    skills: [
      { name: 'Java', icon: <FaJava className="text-[#e76f00]" /> },
      { name: 'C++', icon: <SiCplusplus className="text-[#00599c]" /> },
      { name: 'JavaScript', icon: <FaJs className="text-[#f7df1e]" /> },
    ],
  },
  {
    title: 'Core Technologies',
    skills: [
      { name: 'ReactJS', icon: <FaReact className="text-[#61dafb]" /> },
      { name: 'React Native', icon: <FaReact className="text-[#61dafb]" /> },
      { name: 'NextJS', icon: <SiNextdotjs className="text-[#000] dark:text-[#fff]" /> },
      { name: 'Typescript', icon: <SiTypescript className="text-[#3178c6]" /> },
      { name: 'NodeJS', icon: <FaNodeJs className="text-[#3c873a]" /> },
      { name: 'ExpressJS', icon: <SiExpress className="text-[#000] dark:text-[#fff]" /> },
      { name: 'SpringBoot', icon: <SiSpringboot className="text-[#6db33f]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47a248]" /> },
      { name: 'MySQL', icon: <SiMysql className="text-[#00758f]" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-[#ffca28]" /> },
      { name: 'AWS', icon: <FaAws className="text-[#ff9900]" /> },
      { name: 'Git', icon: <FaGitAlt className="text-[#f34f29]" /> },
      { name: 'REST API', icon: <SiPostman className="text-[#ff6c37]" /> },
      { name: 'OOP', icon: <FaJava className="text-[#e76f00]" /> },
      { name: 'NLP', icon: <SiTensorflow className="text-[#ff6f00]" /> },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-[#38bdf8]" /> },
      { name: 'GitHub', icon: <FaGithub className="text-[#181717]" /> },
      { name: 'GitLab', icon: <FaGitlab className="text-[#fc6d26]" /> },
      { name: 'VS Code', icon: <FaRegDotCircle className="text-[#007acc]" /> },
      { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="text-[#000] dark:text-[#fff]" /> },
      { name: 'Render', icon: <SiRender className="text-[#3949ab]" /> },
      { name: 'DataGrip', icon: <SiDatagrip className="text-[#21d789]" /> },
      { name: 'Postman', icon: <SiPostman className="text-[#ff6c37]" /> },
      { name: 'Framer Motion', icon: <SiFramer className="text-[#0055ff]" /> },
      { name: 'Prettier', icon: <SiPrettier className="text-[#f7b93e]" /> },
      { name: 'Notion', icon: <SiNotion className="text-[#000] dark:text-[#fff]" /> },
      { name: 'Heroku', icon: <SiHeroku className="text-[#430098]" /> },
      { name: 'Microsoft Azure', icon: <FaAws className="text-[#0078d4]" /> },
      { name: 'DigitalOcean', icon: <SiDigitalocean className="text-[#0080ff]" /> },
      { name: 'Namecheap', icon: <SiNamecheap className="text-[#de3723]" /> },
    ],
  },
];

// Section entrance animation variants (already present, but ensure usage)
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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const getDotCount = () => 0; // Placeholder function

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

// Icon mapping for skills (refined for a more professional, consistent look)
const skillIcons: Record<string, React.ReactNode> = {
  'Java': <FaJava className="text-[#e76f00] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'C++': <SiCplusplus className="text-[#00599c] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'JavaScript': <FaJs className="text-[#f7df1e] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'Typescript': <SiTypescript className="text-[#3178c6] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'ReactJS': <FaReact className="text-[#61dafb] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'NextJS': <SiNextdotjs className="text-[#000] dark:text-[#fff] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'React Native': <FaReact className="text-[#61dafb] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'NodeJS': <FaNodeJs className="text-[#3c873a] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'ExpressJS': <SiExpress className="text-[#000] dark:text-[#fff] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'SpringBoot': <SiSpringboot className="text-[#6db33f] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'REST API': <FaRegFileCode className="text-[#3949ab] group-hover:text-[#43a047] transition-colors duration-300" />,
  'WebSockets': <FaCloud className="text-[#3949ab] group-hover:text-[#43a047] transition-colors duration-300" />,
  'OOP': <FaRegObjectGroup className="text-[#3949ab] group-hover:text-[#43a047] transition-colors duration-300" />,
  'MongoDB': <SiMongodb className="text-[#47a248] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'MySQL': <SiMysql className="text-[#00758f] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'Firebase': <SiFirebase className="text-[#ffca28] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'AWS': <FaAws className="text-[#ff9900] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'NLP': <FaRegDotCircle className="text-[#3949ab] group-hover:text-[#43a047] transition-colors duration-300" />,
  'Git': <FaGitAlt className="text-[#f34f29] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'Redux': <SiRedux className="text-[#764abc] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'TailwindCSS': <SiTailwindcss className="text-[#38bdf8] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'GitHub': <FaGithub className="text-[#181717] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'GitLab': <FaGitlab className="text-[#fc6d26] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'VS Code': <FaRegKeyboard className="text-[#007acc] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'Cursor AI': <FaRegDotCircle className="text-[#3949ab] group-hover:text-[#43a047] transition-colors duration-300" />,
  'IntelliJ IDEA': <SiIntellijidea className="text-[#000] dark:text-[#fff] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'Render': <SiRender className="text-[#3949ab] group-hover:text-[#43a047] transition-colors duration-300" />,
  'DataGrip': <SiDatagrip className="text-[#21d789] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'Postman': <SiPostman className="text-[#ff6c37] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'Framer Motion': <SiFramer className="text-[#0055ff] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'Prettier': <SiPrettier className="text-[#f7b93e] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'Notion': <SiNotion className="text-[#000] dark:text-[#fff] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'Heroku': <SiHeroku className="text-[#430098] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'Microsoft Azure': <FaCloud className="text-[#0078d4] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'DigitalOcean': <SiDigitalocean className="text-[#0080ff] group-hover:text-[#3949ab] transition-colors duration-300" />,
  'Namecheap': <SiNamecheap className="text-[#de3723] group-hover:text-[#3949ab] transition-colors duration-300" />,
};

// Icon mapping for categories
const categoryIcons: Record<string, React.ReactNode> = {};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const t = translations['en'];
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Filtered skills based on search
  const filteredSkills = skillCategories[selectedCategory].skills.filter(skill =>
    skill.name.toLowerCase().includes('')
  );

  // Keyboard navigation for skills
  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowRight') {
      skillRefs.current[idx + 1]?.focus();
    } else if (e.key === 'ArrowLeft') {
      skillRefs.current[idx - 1]?.focus();
    } else if (e.key === 'ArrowDown') {
      skillRefs.current[idx + 3]?.focus();
    } else if (e.key === 'ArrowUp') {
      skillRefs.current[idx - 3]?.focus();
    }
  };

  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] py-0 relative overflow-x-hidden"
    >
      {/* Parallax background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] opacity-60" style={{ backgroundAttachment: 'fixed' }} />
      <div className="w-full max-w-7xl mx-auto px-2 md:px-8 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#201d66] mb-12 text-center pt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.title}
        </motion.h2>
        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          {t.categories.map((cat, idx) => (
            <motion.button
              key={cat}
              className={`px-6 py-2 rounded-full font-semibold border transition-colors duration-200 text-sm md:text-base shadow-sm ${selectedCategory === idx ? 'bg-[#201d66] text-white border-[#201d66]' : 'bg-white text-[#201d66] border-[#b3e5fc] hover:bg-[#e3f2fd]'}`}
              onClick={() => setSelectedCategory(idx)}
              aria-label={`Show ${cat} skills`}
              variants={itemVariants}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
        {/* Skills List - Responsive Grid/Carousel */}
        <motion.div
          className="w-full"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Mobile: horizontal scroll, Desktop: grid */}
          <div className="block md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory" role="list">
              {filteredSkills.length === 0 && (
                <div className="text-center text-[#bdbdbd] w-full">No skills found.</div>
              )}
              {filteredSkills.map((skill, i) => {
                return (
                  <motion.div
                    key={i}
                    ref={el => skillRefs.current[i] = el}
                    className="flex-shrink-0 w-64 bg-transparent min-h-[110px] px-4 py-6 rounded-xl shadow-sm snap-center transition-transform group focus:outline-none focus:ring-2 focus:ring-[#3949ab]"
                    whileHover={{ scale: 1.04, boxShadow: '0 6px 24px 0 rgba(32,29,102,0.10)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    tabIndex={0}
                    aria-label={`${skill.name}`}
                    onKeyDown={e => handleKeyDown(e, i)}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-medium text-[#201d66] text-base md:text-lg truncate flex items-center gap-2" title={
                        ''}>
                        <motion.span
                          className="inline-flex items-center justify-center w-6 h-6 md:w-7 md:h-7 mr-1"
                          whileHover={{ rotate: 20, scale: 1.2, color: '#3949ab' }}
                          whileTap={{ scale: 0.95, rotate: -10 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          tabIndex={-1}
                        >
                          {skillIcons[skill.name] || <FaRegDotCircle className="text-[#bdbdbd]" />}
                        </motion.span>
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          {/* Desktop/Tablet: grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-0 md:gap-2 border-t border-[#e3f2fd] divide-y-0 md:divide-x divide-[#e3f2fd] bg-transparent" role="list">
            {filteredSkills.length === 0 && (
              <div className="col-span-full text-center text-[#bdbdbd] py-8">No skills found.</div>
            )}
            {filteredSkills.map((skill, i) => {
              return (
                <motion.div
                  key={i}
                  ref={el => skillRefs.current[i] = el}
                  className="flex flex-col gap-2 px-6 py-6 md:py-8 bg-transparent min-h-[110px] justify-center transition-transform group focus:outline-none focus:ring-2 focus:ring-[#3949ab]"
                  whileHover={{ scale: 1.04, boxShadow: '0 6px 24px 0 rgba(32,29,102,0.10)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  tabIndex={0}
                  aria-label={`${skill.name}`}
                  onKeyDown={e => handleKeyDown(e, i)}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-[#201d66] text-base md:text-lg truncate flex items-center gap-2" title={
                      ''}>
                      <motion.span
                        className="inline-flex items-center justify-center w-6 h-6 md:w-7 md:h-7 mr-1"
                        whileHover={{ rotate: 20, scale: 1.2, color: '#3949ab' }}
                        whileTap={{ scale: 0.95, rotate: -10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        tabIndex={-1}
                      >
                        {skillIcons[skill.name] || <FaRegDotCircle className="text-[#bdbdbd]" />}
                      </motion.span>
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
