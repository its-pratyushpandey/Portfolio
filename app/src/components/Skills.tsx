import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const translations = {
  en: {
    title: 'My Skills',
    categories: ['Languages I Code In', 'Core Technologies', 'Developer Tools'],
    sync: 'Sync ',
    topSkill: 'Top Skill',
    streak: 'Streak',
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
    <section id="skills" className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] py-0 relative overflow-x-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] opacity-60" style={{ backgroundAttachment: 'fixed' }} />
      <div className="w-full max-w-7xl mx-auto px-2 md:px-8 relative z-10">
        <motion.h2 className="text-4xl md:text-5xl font-bold text-[#201d66] mb-12 text-center pt-10" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{t.title}</motion.h2>
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {t.categories.map((cat, idx) => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-full font-semibold border transition-colors duration-200 text-sm md:text-base shadow-sm ${selectedCategory === idx ? 'bg-[#201d66] text-white border-[#201d66]' : 'bg-white text-[#201d66] border-[#b3e5fc] hover:bg-[#e3f2fd]'}`}
              onClick={() => setSelectedCategory(idx)}
              aria-label={`Show ${cat} skills`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Skills List - Responsive Grid/Carousel */}
        <motion.div className="w-full" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Mobile: horizontal scroll, Desktop: grid */}
          <div className="block md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory" role="list">
              {filteredSkills.length === 0 && (
                <div className="text-center text-[#bdbdbd] w-full">No skills found.</div>
              )}
              {filteredSkills.map((skill, i) => {
                const certification = skillCertifications[skill.name];
                const isTopSkill = skill.level >= 90;
                const streak = skillCategories[selectedCategory].skills.filter(s => s.level >= 90).length >= 2 && isTopSkill;
                return (
                  <motion.div
                    key={i}
                    ref={el => skillRefs.current[i] = el}
                    className="flex-shrink-0 w-64 bg-transparent min-h-[110px] px-4 py-6 rounded-xl shadow-sm snap-center transition-transform group focus:outline-none focus:ring-2 focus:ring-[#3949ab]"
                    whileHover={{ scale: 1.04, boxShadow: '0 6px 24px 0 rgba(32,29,102,0.10)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    tabIndex={0}
                    aria-label={`${skill.name}, proficiency ${skill.level}%`}
                    onKeyDown={e => handleKeyDown(e, i)}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-medium text-[#201d66] text-base md:text-lg truncate flex items-center gap-2" title={[
                        certification ? 'Certified' : '',
                        isTopSkill ? t.topSkill : '',
                        streak ? t.streak : ''
                      ].filter(Boolean).join(', ')}>
                        {skill.name}
                        {(selectedCategory === 0 || selectedCategory === 1) && (
                          certification ? (
                            <a href={certification.url} target="_blank" rel="noopener noreferrer" title="View Certificate" className="ml-1" aria-label={`View ${skill.name} certificate`}>
                              <svg className="inline w-5 h-5 text-[#43a047]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#43a047" strokeWidth="2" fill="#e8f5e9"/><path d="M9 12l2 2 4-4" stroke="#43a047" strokeWidth="2" fill="none"/></svg>
                            </a>
                          ) : (
                            <svg className="inline w-5 h-5 text-[#bdbdbd] ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#bdbdbd" strokeWidth="2" fill="#f5f5f5"/><path d="M9 12l2 2 4-4" stroke="#bdbdbd" strokeWidth="2" fill="none"/></svg>
                          )
                        )}
                        {isTopSkill && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#43a047] to-[#80deea] text-white animate-pulse" title={t.topSkill}>
                            <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32-3.87-3.77 5.34-.78z" /></svg>
                            {t.topSkill}
                          </span>
                        )}
                        {streak && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#3949ab] to-[#80deea] text-white animate-bounce" title={t.streak}>
                            <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" /><path d="M10 4v8l4 2" stroke="#fff" strokeWidth="2" fill="none"/></svg>
                            {t.streak}
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-[#3949ab] font-semibold">{skill.level}%</span>
                    </div>
                    {/* Animated Progress Bar */}
                    <div className="w-full h-2 bg-[#e3f2fd] rounded-full overflow-hidden mt-1 mb-2" aria-label={`Proficiency bar for ${skill.name}`}> 
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#201d66] via-[#3949ab] to-[#80deea]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: i * 0.05 }}
                        style={{ width: `${skill.level}%` }}
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        role="progressbar"
                      />
                    </div>
                    {/* Dots Indicator */}
                    <div className="flex gap-1 mt-1" aria-label={`Proficiency dots for ${skill.name}`}> 
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span
                          key={idx}
                          className={`w-2 h-2 rounded-full ${idx < getDotCount(skill.level) ? 'bg-[#201d66]' : 'bg-[#e3f2fd] border border-[#b3e5fc]'}`}
                        />
                      ))}
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
              const certification = skillCertifications[skill.name];
              const isTopSkill = skill.level >= 90;
              const streak = skillCategories[selectedCategory].skills.filter(s => s.level >= 90).length >= 2 && isTopSkill;
              return (
                <motion.div
                  key={i}
                  ref={el => skillRefs.current[i] = el}
                  className="flex flex-col gap-2 px-6 py-6 md:py-8 bg-transparent min-h-[110px] justify-center transition-transform group focus:outline-none focus:ring-2 focus:ring-[#3949ab]"
                  whileHover={{ scale: 1.04, boxShadow: '0 6px 24px 0 rgba(32,29,102,0.10)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  tabIndex={0}
                  aria-label={`${skill.name}, proficiency ${skill.level}%`}
                  onKeyDown={e => handleKeyDown(e, i)}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-[#201d66] text-base md:text-lg truncate flex items-center gap-2" title={[
                      certification ? 'Certified' : '',
                      isTopSkill ? t.topSkill : '',
                      streak ? t.streak : ''
                    ].filter(Boolean).join(', ')}>
                      {skill.name}
                      {(selectedCategory === 0 || selectedCategory === 1) && (
                        certification ? (
                          <a href={certification.url} target="_blank" rel="noopener noreferrer" title="View Certificate" className="ml-1" aria-label={`View ${skill.name} certificate`}>
                            <svg className="inline w-5 h-5 text-[#43a047]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#43a047" strokeWidth="2" fill="#e8f5e9"/><path d="M9 12l2 2 4-4" stroke="#43a047" strokeWidth="2" fill="none"/></svg>
                          </a>
                        ) : (
                          <svg className="inline w-5 h-5 text-[#bdbdbd] ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#bdbdbd" strokeWidth="2" fill="#f5f5f5"/><path d="M9 12l2 2 4-4" stroke="#bdbdbd" strokeWidth="2" fill="none"/></svg>
                        )
                      )}
                      {isTopSkill && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#43a047] to-[#80deea] text-white animate-pulse" title={t.topSkill}>
                          <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32-3.87-3.77 5.34-.78z" /></svg>
                          {t.topSkill}
                        </span>
                      )}
                      {streak && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#3949ab] to-[#80deea] text-white animate-bounce" title={t.streak}>
                          <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" /><path d="M10 4v8l4 2" stroke="#fff" strokeWidth="2" fill="none"/></svg>
                          {t.streak}
                        </span>
                      )}
                    </span>
                    <span className="text-xs text-[#3949ab] font-semibold">{skill.level}%</span>
                  </div>
                  {/* Animated Progress Bar */}
                  <div className="w-full h-2 md:h-3 bg-[#e3f2fd] rounded-full overflow-hidden mt-1 mb-2" aria-label={`Proficiency bar for ${skill.name}`}> 
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#201d66] via-[#3949ab] to-[#80deea]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: i * 0.05 }}
                      style={{ width: `${skill.level}%` }}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      role="progressbar"
                    />
                  </div>
                  {/* Dots Indicator */}
                  <div className="flex gap-1 mt-1" aria-label={`Proficiency dots for ${skill.name}`}> 
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${idx < getDotCount(skill.level) ? 'bg-[#201d66]' : 'bg-[#e3f2fd] border border-[#b3e5fc]'}`}
                      />
                    ))}
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
