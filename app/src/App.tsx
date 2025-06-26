import React, { useEffect, ReactNode, useState } from 'react';
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
import { BlogPostPage } from './components/BlogPostPage';
import { AllBlogsPage } from './components/AllBlogsPage';
import { BlogPost } from './types/blog';

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
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [showAllBlogs, setShowAllBlogs] = useState(false);

  const handleBlogSelect = (blog: BlogPost) => {
    console.log('App.tsx handleBlogSelect called with:', blog.title);
    
    // Use functional updates to ensure we get the latest state
    setShowAllBlogs(false); // Ensure we're not showing all blogs when selecting a specific blog
    setSelectedBlog(blog);
    
    // Scroll to top for better UX after a small delay
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleBackToBlog = () => {
    setSelectedBlog(null);
    // Scroll to blog section
    setTimeout(() => {
      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleShowAllBlogs = () => {
    setShowAllBlogs(true);
    // Scroll to top for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setShowAllBlogs(false);
    // Scroll to blog section
    setTimeout(() => {
      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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

  // If showing all blogs page
  if (showAllBlogs) {
    console.log('App.tsx: Rendering AllBlogsPage');
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd]">
        <Header />
        <AllBlogsPage onBlogSelect={handleBlogSelect} onBack={handleBackToHome} />
      </div>
    );
  }

  // If a blog is selected, show the blog post page
  if (selectedBlog) {
    console.log('App.tsx: Rendering BlogPostPage for:', selectedBlog.title);
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd]">
        <Header />
        <BlogPostPage 
          key={selectedBlog.id} 
          blog={selectedBlog} 
          onBack={handleBackToBlog} 
        />
      </div>
    );
  }

  console.log('App.tsx: Rendering main page with showAllBlogs:', showAllBlogs, 'selectedBlog:', selectedBlog);

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
      <Section><BlogSection onBlogSelect={handleBlogSelect} onShowAllBlogs={handleShowAllBlogs} /></Section>
      <Section><ContactSection /></Section>
    </div>
  );
};

export default App;
