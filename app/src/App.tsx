import React, { useEffect, ReactNode, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import { ContactSection } from './screens/ElementLight/section/ContactSection/ContactSection';
import { ExperienceSection } from './screens/ElementLight/section/ExperienceSection/ExperienceSection';
import { HowICanHelpSection } from './screens/ElementLight/section/HowICanHelpSection/HowICanHelpSection';
import { ProjectsDarkModeProvider } from './theme/ProjectsDarkModeContext';

interface SectionProps {
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-[#e3f2fd]">
      <Navbar />
      <ProjectsDarkModeProvider>
        <Hero />
        <Section><About /></Section>
        <Section><HowICanHelpSection /></Section>
        <Section><Skills /></Section>
        <Section><Projects /></Section>
        <Section><Certificates /></Section>
        <Section><ExperienceSection /></Section>
        <Section><ContactSection /></Section>
      </ProjectsDarkModeProvider>
    </div>
  );
};

export default App;
