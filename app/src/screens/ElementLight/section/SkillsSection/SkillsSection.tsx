import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaJs, FaReact, FaNodeJs, FaAws, FaGitAlt, FaGithub, FaGitlab, FaDatabase, FaPython, FaHtml5, FaCss3Alt, FaRegDotCircle } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiRedux, SiMongodb, SiMysql, SiFirebase, SiNextdotjs, SiSpringboot, SiExpress, SiTailwindcss, SiVercel, SiHeroku, SiDigitalocean, SiNotion, SiPrettier, SiFramer, SiPostman, SiIntellijidea, SiRender, SiDatagrip, SiNamecheap } from 'react-icons/si';

// Skill data (can be imported or defined here)
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
      { name: 'NextJS', icon: <SiNextdotjs className="text-[#000] dark:text-[#fff]" /> },
      { name: 'Typescript', icon: <SiTypescript className="text-[#3178c6]" /> },
      { name: 'NodeJS', icon: <FaNodeJs className="text-[#3c873a]" /> },
      { name: 'ExpressJS', icon: <SiExpress className="text-[#000] dark:text-[#fff]" /> },
      { name: 'SpringBoot', icon: <SiSpringboot className="text-[#6db33f]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47a248]" /> },
      { name: 'MySQL', icon: <SiMysql className="text-[#00758f]" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-[#ffca28]" /> },
      { name: 'AWS', icon: <FaAws className="text-[#ff9900]" /> },
      { name: 'Redux', icon: <SiRedux className="text-[#764abc]" /> },
      { name: 'Git', icon: <FaGitAlt className="text-[#f34f29]" /> },
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

export const SkillsSection = (): JSX.Element => {
  // Data for the three rows of repeating text
  const skillsData = [
    {
      word: "LEARN",
      fontSize: "text-[54.3px]",
      highlightColors: [
        "text-manishrajnetlifyapplucky-point",
        "text-manishrajnetlifyappsail",
      ],
    },
    {
      word: "ADAPT",
      fontSize: "text-[52.3px]",
      highlightColors: [
        "text-manishrajnetlifyappsail",
        "text-manishrajnetlifyappwild-watermelon",
      ],
      
    },
    {
      word: "THRIVE",
      fontSize: "text-[52.5px]",
      highlightColors: [
        "text-manishrajnetlifyappspring-green",
        "text-manishrajnetlifyappsail",
      ],
    },
  ];

  // Flatten all skills for marquee
  const allSkills = skillCategories.flatMap(cat => cat.skills);

  return (
    <>
      {/* Fullscreen Animated Skills Marquee */}
      <section
        className="w-screen h-screen min-h-[700px] md:min-h-[900px] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#201d66] via-[#3949ab] to-[#b3e5fc]"
        style={{ isolation: 'isolate', zIndex: 50 }}
        aria-label="Expertise Marquee"
      >
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" aria-hidden="true" />
        {/* Marquee Content */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="w-full overflow-x-hidden">
            <div className="relative w-full h-[160px] md:h-[220px] flex items-center">
              <div className="absolute left-0 top-0 flex items-center gap-16 h-full animate-marquee-skills-full" style={{ minWidth: '200%', width: 'max-content' }}>
                {[...allSkills, ...allSkills].map((skill, idx) => (
                  <div
                    key={skill.name + idx}
                    className="flex flex-col items-center min-w-[120px] md:min-w-[180px] px-4"
                  >
                    <span className="text-5xl md:text-7xl mb-2 drop-shadow-lg">{skill.icon}</span>
                    <span className="text-lg md:text-2xl text-white font-bold text-center whitespace-nowrap drop-shadow-md tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Marquee Animation Styles */}
        <style>{`
          @keyframes marquee-skills-full {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-skills-full {
            animation: marquee-skills-full 28s linear infinite;
            will-change: transform;
          }
          @media (max-width: 768px) {
            .animate-marquee-skills-full { animation-duration: 44s; }
          }
        `}</style>
      </section>

      {/* Original Skills Section Content Below, Unchanged */}
      <section
        className="w-full relative flex flex-col items-center justify-center min-h-[320px] md:min-h-[420px] py-8 md:py-16 overflow-hidden"
        style={{ isolation: "isolate" }}
      >
        {/* Animated Parallax/Fixed Gradient Background */}
        <div
          className="absolute inset-0 z-0 animate-gradient-move bg-gradient-to-br from-[#e3f2fd] via-[#b3e5fc] to-[#f5f5f5] opacity-80"
          style={{
            backgroundAttachment: "fixed",
            backgroundSize: "200% 200%",
          }}
          aria-hidden="true"
        />
        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-2 md:px-8">
          {/* Section Title */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#201d66] text-center mb-8 drop-shadow-lg tracking-tight">
            My Skills
          </h2>

          {/* Animated Marquee/Scrolling Skills */}
          <div className="w-full overflow-x-hidden mb-8">
            <div className="relative w-full h-[70px] md:h-[90px]">
              <div className="absolute left-0 top-0 flex items-center gap-8 h-full animate-marquee-skills" style={{ minWidth: '200%', width: 'max-content' }}>
                {[...allSkills, ...allSkills].map((skill, idx) => (
                  <div
                    key={skill.name + idx}
                    className="flex flex-col items-center min-w-[80px] md:min-w-[100px] px-2"
                  >
                    <span className="text-2xl md:text-3xl mb-1">{skill.icon}</span>
                    <span className="text-xs md:text-sm text-[#201d66] font-medium text-center whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Marquee Animation Styles */}
          <style>{`
            @keyframes marquee-skills {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-skills {
              animation: marquee-skills 22s linear infinite;
              will-change: transform;
            }
            @media (max-width: 768px) {
              .animate-marquee-skills { animation-duration: 36s; }
            }
          `}</style>

          {/* Animated Skill Words Rows */}
          <div className="flex flex-col gap-2 md:gap-4 mb-8">
            {/* First row - LEARN */}
            <div className="flex items-center justify-start gap-4 w-full overflow-hidden py-2 md:py-4">
              <div className="flex items-center animate-marquee">
                {Array.from({ length: 10 }).map((_, index) => (
                  <React.Fragment key={`learn-${index}`}>
                    {index < 5 ? (
                      <div className="relative w-[120px] md:w-[169.56px] h-[40px] md:h-[60px]" />
                    ) : (
                      <>
                        <div className="inline-flex flex-col items-start">
                          <div
                            className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#201d66] ${skillsData[0].fontSize} tracking-[-3.00px] leading-[40px] md:leading-[60px] whitespace-nowrap`}
                          >
                            {skillsData[0].word}
                          </div>
                        </div>
                        <div className="inline-flex flex-col items-start">
                          <img
                            className="relative w-4 h-4 md:w-6 md:h-6"
                            alt="Separator dot"
                            src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2.svg"
                          />
                        </div>
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            {/* Second row - ADAPT */}
            <div className="flex items-center justify-start gap-4 w-full overflow-hidden py-2 md:py-4">
              <div className="flex items-center animate-marquee-reverse">
                {Array.from({ length: 10 }).map((_, index) => (
                  <React.Fragment key={`adapt-${index}`}>
                    {index > 7 ? (
                      <div className="relative w-[120px] md:w-[173.97px] h-[40px] md:h-[60px]" />
                    ) : (
                      <>
                        <div className="inline-flex flex-col items-start">
                          <div
                            className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#201d66] ${skillsData[1].fontSize} tracking-[-3.00px] leading-[40px] md:leading-[60px] whitespace-nowrap`}
                          >
                            {skillsData[1].word}
                          </div>
                        </div>
                        <div className="inline-flex flex-col items-start">
                          <img
                            className="relative w-4 h-4 md:w-6 md:h-6"
                            alt="Separator dot"
                            src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2.svg"
                          />
                        </div>
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            {/* Third row - THRIVE */}
            <div className="flex items-center justify-start gap-4 w-full overflow-hidden py-2 md:py-4">
              <div className="flex items-center animate-marquee">
                {Array.from({ length: 10 }).map((_, index) => (
                  <React.Fragment key={`thrive-${index}`}>
                    {index < 5 ? (
                      <div className="relative w-[120px] md:w-[182.31px] h-[40px] md:h-[60px]" />
                    ) : (
                      <>
                        <div className="inline-flex flex-col items-start">
                          <div
                            className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#201d66] ${skillsData[2].fontSize} tracking-[-3.00px] leading-[40px] md:leading-[60px] whitespace-nowrap`}
                          >
                            {skillsData[2].word}
                          </div>
                        </div>
                        <div className="inline-flex flex-col items-start">
                          <img
                            className="relative w-4 h-4 md:w-6 md:h-6"
                            alt="Separator dot"
                            src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2.svg"
                          />
                        </div>
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          {/* Professional Skill Grid with Micro-interactions */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mt-4">
            {skillCategories.map((cat, catIdx) => (
              <React.Fragment key={cat.title}>
                {cat.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center justify-center bg-white/90 rounded-xl shadow-md hover:shadow-xl focus:shadow-xl border border-[#e3f2fd] p-4 md:p-6 transition-all group cursor-pointer outline-none"
                    tabIndex={0}
                    whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(32,29,102,0.13)' }}
                    whileTap={{ scale: 0.97, boxShadow: '0 2px 8px 0 rgba(32,29,102,0.10)' }}
                    whileFocus={{ scale: 1.04, boxShadow: '0 6px 24px 0 rgba(32,29,102,0.12)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    aria-label={skill.name}
                  >
                    <span className="text-3xl md:text-4xl mb-2 group-hover:text-[#3949ab] group-focus:text-[#3949ab] transition-colors duration-200">
                      {skill.icon}
                    </span>
                    <span className="font-semibold text-[#201d66] text-sm md:text-base text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Animated gradient keyframes for background */}
        <style>{`
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-move {
            background-size: 200% 200%;
            animation: gradient-move 8s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default SkillsSection;
