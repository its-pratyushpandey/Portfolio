import React, { useEffect, ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import { ContactSection } from './screens/ElementLight/section/ContactSection/ContactSection';
import { ExperienceSection } from './screens/ElementLight/section/ExperienceSection/ExperienceSection';
import { BlogSection } from './screens/ElementLight/section/BlogSection/BlogSection';
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
  useEffect(() => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="bg-[#e3f2fd]">
      <Header />
      <Hero />
      <Section><About /></Section>
      <Section><HowICanHelpSection /></Section>
      <Section><Skills /></Section>
      <ProjectsDarkModeProvider>
        <Section><Projects /></Section>
      </ProjectsDarkModeProvider>
      <Section><Certificates /></Section>
      <Section><ExperienceSection /></Section>
      <Section><BlogSection /></Section>
      <Section><ContactSection /></Section>
    </div>
  );
};

export default App;
