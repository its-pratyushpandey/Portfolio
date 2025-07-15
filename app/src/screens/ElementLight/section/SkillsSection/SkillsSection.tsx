import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaJs, FaReact, FaNodeJs, FaAws, FaGitAlt, FaGithub, FaGitlab, FaDatabase, FaPython, FaHtml5, FaCss3Alt, FaRegDotCircle } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiRedux, SiMongodb, SiMysql, SiFirebase, SiNextdotjs, SiSpringboot, SiExpress, SiTailwindcss, SiVercel, SiHeroku, SiDigitalocean, SiNotion, SiPrettier, SiFramer, SiPostman, SiIntellijidea, SiRender, SiDatagrip, SiNamecheap } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Languages I Code In',
    skills: [
      { name: 'Java', icon: <FaJava className="text-[#e76f00] text-4xl" /> },
      { name: 'C++', icon: <SiCplusplus className="text-[#00599c] text-4xl" /> },
      { name: 'JavaScript', icon: <FaJs className="text-[#f7df1e] text-4xl" /> },
    ],
  },
  {
    title: 'Core Technologies',
    skills: [
      { name: 'ReactJS', icon: <FaReact className="text-[#61dafb] text-4xl" /> },
      { name: 'NextJS', icon: <SiNextdotjs className="text-[#000] dark:text-[#fff] text-4xl" /> },
      { name: 'Typescript', icon: <SiTypescript className="text-[#3178c6] text-4xl" /> },
      { name: 'NodeJS', icon: <FaNodeJs className="text-[#3c873a] text-4xl" /> },
      { name: 'ExpressJS', icon: <SiExpress className="text-[#000] dark:text-[#fff] text-4xl" /> },
      { name: 'SpringBoot', icon: <SiSpringboot className="text-[#6db33f] text-4xl" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47a248] text-4xl" /> },
      { name: 'MySQL', icon: <SiMysql className="text-[#00758f] text-4xl" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-[#ffca28] text-4xl" /> },
      { name: 'AWS', icon: <FaAws className="text-[#ff9900] text-4xl" /> },
      { name: 'Redux', icon: <SiRedux className="text-[#764abc] text-4xl" /> },
      { name: 'Git', icon: <FaGitAlt className="text-[#f34f29] text-4xl" /> },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-[#38bdf8] text-4xl" /> },
      { name: 'GitHub', icon: <FaGithub className="text-[#181717] text-4xl" /> },
      { name: 'GitLab', icon: <FaGitlab className="text-[#fc6d26] text-4xl" /> },
      { name: 'VS Code', icon: <FaRegDotCircle className="text-[#007acc] text-4xl" /> },
      { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="text-[#000] dark:text-[#fff] text-4xl" /> },
      { name: 'Render', icon: <SiRender className="text-[#3949ab] text-4xl" /> },
      { name: 'DataGrip', icon: <SiDatagrip className="text-[#21d789] text-4xl" /> },
      { name: 'Postman', icon: <SiPostman className="text-[#ff6c37] text-4xl" /> },
      { name: 'Framer Motion', icon: <SiFramer className="text-[#0055ff] text-4xl" /> },
      { name: 'Prettier', icon: <SiPrettier className="text-[#f7b93e] text-4xl" /> },
      { name: 'Notion', icon: <SiNotion className="text-[#000] dark:text-[#fff] text-4xl" /> },
      { name: 'Heroku', icon: <SiHeroku className="text-[#430098] text-4xl" /> },
      { name: 'Microsoft Azure', icon: <FaAws className="text-[#0078d4] text-4xl" /> },
      { name: 'DigitalOcean', icon: <SiDigitalocean className="text-[#0080ff] text-4xl" /> },
      { name: 'Namecheap', icon: <SiNamecheap className="text-[#de3723] text-4xl" /> },
    ],
  },
];

export const SkillsSection = (): JSX.Element => {
  return (
    <section
      className="w-screen h-screen min-h-[700px] md:min-h-[900px] flex flex-col items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent text-darkText dark:text-darkAccent"
      aria-label="Skills Section"
    >
      <div className="container mx-auto px-4">
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-premium">
              {category.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-4 bg-glass-morphism rounded-lg shadow-lg hover:scale-105 transition-transform"
                >
                  {skill.icon}
                  <span className="mt-2 text-sm md:text-base font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
