import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useSwipeable } from '../lib/swipeable';
import { ArrowTopRightOnSquareIcon, EyeIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';
import { useProjectsDarkMode } from '../theme/ProjectsDarkModeContext';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
  year: string;
  details: string;
  videoDemo?: string; // Optional video demo URL
}

const projects: Project[] = [
  {
    title: 'NAYONA CONSULTANCY SERVICE',
    description: 'Consulting • Engineering',
    image: 'https://c.animaapp.com/mc46fmevF9sLme/img/nayona-consultancy-service.png',
    link: 'https://nayona.netlify.app/',
    github: 'https://github.com/its-pratyushpandey/nayona-consultancy', // Example repo
    tags: ['Design', 'Development', 'React', 'Consulting'],
    year: '2025',
    details: 'Led the development of a consulting platform with a modern UI, integrating real-time data and client dashboards. Used React, Node.js, and cloud services for scalability.',
    videoDemo: 'https://www.w3schools.com/html/mov_bbb.mp4' // Example video
  },
  {
    title: 'DEVCLI - CLI TOOL',
    description: 'NPM Library • CLI Tool',
    image: 'https://c.animaapp.com/mc46fmevF9sLme/img/devcli---cli-tool.png',
    link: 'https://devcli.vercel.app/',
    github: 'https://github.com/its-pratyushpandey/devcli', // Example repo
    tags: ['MERN', 'Package', 'CLI', 'Open Source'],
    year: '2024',
    details: 'Created a developer CLI tool for rapid project scaffolding and automation. Published on NPM, with a focus on DX and extensibility.',
    videoDemo: 'https://www.w3schools.com/html/movie.mp4' // Example video
  },
  // Add more projects here
];

const sectionVariants = {
  initial: { opacity: 0, y: 80 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.18,
      when: 'beforeChildren',
    },
  },
};

const FloatingDecorations: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
    {/* Example SVGs - you can customize colors/shapes as needed */}
    <motion.svg
      className="absolute top-10 left-10 w-32 h-32 opacity-30"
      initial={{ y: 0 }}
      animate={{ y: [0, 30, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle cx="50" cy="50" r="40" fill="#b2ebf2" />
    </motion.svg>
    <motion.svg
      className="absolute bottom-20 right-20 w-24 h-24 opacity-20"
      initial={{ x: 0 }}
      animate={{ x: [0, -40, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      viewBox="0 0 100 100"
      fill="none"
    >
      <rect x="20" y="20" width="60" height="60" rx="18" fill="#c5cae9" />
    </motion.svg>
    <motion.svg
      className="absolute top-1/2 left-1/3 w-20 h-20 opacity-25"
      initial={{ y: 0, rotate: 0 }}
      animate={{ y: [-10, 20, -10], rotate: [0, 15, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      viewBox="0 0 100 100"
      fill="none"
    >
      <polygon points="50,10 90,90 10,90" fill="#ffd6e0" />
    </motion.svg>
    {/* Add more shapes as desired */}
  </div>
);

const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [videoModal, setVideoModal] = useState<string | null>(null); // video URL
  const [previewModal, setPreviewModal] = useState<string | null>(null); // live preview URL
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const filteredProjects = selectedTag ? projects.filter(p => p.tags.includes(selectedTag)) : projects;
  const [currentIdx, setCurrentIdx] = useState(0); // For mobile carousel
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [sidebarOpen, setSidebarOpen] = useState(false); // For mobile sidebar
  const shouldReduceMotionRaw = useReducedMotion();
  const shouldReduceMotion = !!shouldReduceMotionRaw; // always boolean
  const { dark, setDark } = useProjectsDarkMode();

  // Micro-interaction config for motion buttons
  const microInteraction = shouldReduceMotion
    ? {}
    : { whileHover: { scale: 1.08 }, whileTap: { scale: 0.96 }, whileFocus: { scale: 1.04 } };

  // Scroll snap to section
  const scrollToSection = (idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
  };

  // Enhanced parallax/3D tilt effect with glare and premium shadow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number) => {
    const img = document.getElementById(`project-img-${idx}`) as HTMLImageElement | null;
    const glare = document.getElementById(`project-glare-${idx}`) as HTMLDivElement | null;
    if (img) {
      const { left, top, width, height } = img.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 2; // -1 to 1
      const y = ((e.clientY - top) / height - 0.5) * 2; // -1 to 1
      const rotateY = -x * 22; // max 22deg for more depth
      const rotateX = y * 22;  // max 22deg for more depth
      const shadowX = -x * 50; // max 50px
      const shadowY = y * 50;  // max 50px
      const brightness = 1.08 + y * 0.04;
      img.style.transform = `perspective(1200px) scale(1.07) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      img.style.boxShadow = `${shadowX}px ${shadowY}px 60px 0px rgba(32,29,102,0.22), 0 12px 48px 0 rgba(32,29,102,0.13)`;
      img.style.filter = `brightness(${brightness})`;
      img.style.transition = 'transform 0.18s cubic-bezier(.25,.8,.25,1), box-shadow 0.18s cubic-bezier(.25,.8,.25,1), filter 0.18s cubic-bezier(.25,.8,.25,1)';
      // Glare effect
      if (glare) {
        const glareX = (x + 1) * 50; // 0 to 100
        const glareY = (y + 1) * 50; // 0 to 100
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.32), rgba(255,255,255,0.0) 70%)`;
        glare.style.opacity = '1';
      }
    }
  };
  const handleMouseLeave = (idx: number) => {
    const img = document.getElementById(`project-img-${idx}`) as HTMLImageElement | null;
    const glare = document.getElementById(`project-glare-${idx}`) as HTMLDivElement | null;
    if (img) {
      img.style.transform = '';
      img.style.boxShadow = '';
      img.style.filter = '';
      img.style.transition = 'transform 0.5s cubic-bezier(.25,.8,.25,1), box-shadow 0.5s cubic-bezier(.25,.8,.25,1), filter 0.5s cubic-bezier(.25,.8,.25,1)';
    }
    if (glare) {
      glare.style.opacity = '0';
    }
  };

  // Progress bar
  const [scrollIdx, setScrollIdx] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const offsets = sectionRefs.current.map(ref => ref?.getBoundingClientRect().top || 0);
      const idx = offsets.findIndex(offset => offset > window.innerHeight * 0.2);
      setScrollIdx(idx === -1 ? filteredProjects.length - 1 : Math.max(0, idx - 1));
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [filteredProjects.length]);

  // Swipe handlers for mobile carousel
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (isMobile && currentIdx < filteredProjects.length - 1) setCurrentIdx(currentIdx + 1);
    },
    onSwipedRight: () => {
      if (isMobile && currentIdx > 0) setCurrentIdx(currentIdx - 1);
    },
    trackMouse: true
  });

  // Responsive: determine columns based on screen size
  const [columns, setColumns] = useState(2);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setColumns(1);
      else if (window.innerWidth < 1200) setColumns(2);
      else setColumns(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Accessible animation helpers
  const getMotion = (motionProps: any) => shouldReduceMotion ? { ...motionProps, transition: { duration: 0 } } : motionProps;

  return (
    <section className={`relative py-20 transition-colors duration-500 ${dark ? 'dark bg-darkBg' : 'bg-[#f5f5f5]'}`}> 
      {/* Floating/Drifting Decorative Elements */}
      <FloatingDecorations />
      {/* Dark mode toggle button */}
      <button
        className={`fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg border border-[#3949ab] bg-white/90 dark:bg-darkCard dark:text-darkText dark:border-darkAccent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#201d66]`}
        onClick={() => setDark(!dark)}
        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span className="font-semibold text-base">{dark ? 'Light' : 'Dark'} Mode</span>
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
          {dark ? (
            <path d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71m16.97 0l-.71-.71M4.05 4.93l-.71-.71M21 12h1M2 12H1" stroke="#3949ab" strokeWidth="2" strokeLinecap="round"/>
          ) : (
            <circle cx="12" cy="12" r="5" stroke="#3949ab" strokeWidth="2"/>
          )}
        </svg>
      </button>
      <div className="relative z-10 container mx-auto px-4">
        {/* Sidebar toggle for mobile */}
        <div className="md:hidden fixed top-4 left-4 z-50">
          <button
            className="bg-[#201d66] text-white rounded-full p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? 'Close project navigation' : 'Open project navigation'}
          >
            {sidebarOpen ? (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
            ) : (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
            )}
          </button>
        </div>
        {/* Sticky sidebar navigation (desktop) & collapsible on mobile */}
        <aside className={`fixed left-0 top-0 h-full z-40 transition-transform duration-300 md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:flex flex-col gap-4 bg-white/90 md:bg-transparent shadow-lg md:shadow-none px-6 py-8 md:static md:w-auto w-64`} aria-label="Project section navigation" style={{backdropFilter: 'blur(8px)'}}>
          <div className="flex flex-col gap-4">
            {filteredProjects.map((p, i) => (
              <motion.button
                key={p.title}
                onClick={() => { scrollToSection(i); setSidebarOpen(false); }}
                className={`w-3 h-3 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2 ${scrollIdx === i ? 'bg-[#201d66] border-[#201d66]' : 'bg-[#b0bec5] border-[#b0bec5]'} transition-colors`}
                aria-label={`Jump to ${p.title}`}
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') { scrollToSection(i); setSidebarOpen(false); }
                }}
                {...microInteraction}
              />
            ))}
          </div>
        </aside>
        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/30 z-30 md:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar overlay" />
        )}
        {/* Top animated progress bar */}
        <motion.div
          className="fixed top-0 left-0 h-2 bg-[#b0bec5] w-full z-40 overflow-hidden"
          style={{ boxShadow: '0 2px 12px 0 rgba(32,29,102,0.08)' }}
        >
          <motion.div
            className="h-2 bg-[#201d66]"
            initial={{ width: 0 }}
            animate={{ width: `${((scrollIdx + 1) / filteredProjects.length) * 100}%` }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          />
        </motion.div>
        {/* Mobile bottom navigation bar */}
        <nav className="fixed md:hidden bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-4 bg-white/90 shadow-lg rounded-full px-4 py-2 backdrop-blur-md border border-[#e3f2fd]" aria-label="Project section navigation (mobile)">
          {filteredProjects.map((p, i) => (
            <motion.button
              key={p.title}
              onClick={() => scrollToSection(i)}
              className={`w-3 h-3 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2 ${scrollIdx === i ? 'bg-[#201d66] border-[#201d66] scale-125 shadow-lg' : 'bg-[#b0bec5] border-[#b0bec5]'} transition-all`}
              aria-label={`Jump to ${p.title}`}
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') scrollToSection(i);
              }}
              {...microInteraction}
            />
          ))}
        </nav>
        {/* Project full-screen sections */}
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll no-scrollbar">
          {/* Desktop: show all, Mobile: show carousel */}
          {isMobile ? (
            <div {...swipeHandlers} className="w-full h-full flex items-center justify-center relative">
              <AnimatePresence initial={false} custom={currentIdx}>
                {filteredProjects[currentIdx] && (
                  <MobileProjectCard
                    key={filteredProjects[currentIdx].title}
                    project={filteredProjects[currentIdx]}
                    setModalProject={setModalProject}
                    setVideoModal={setVideoModal}
                    setPreviewModal={setPreviewModal}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                )}
              </AnimatePresence>
              {/* Carousel navigation dots for mobile */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {filteredProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className={`w-3 h-3 rounded-full border-2 ${currentIdx === i ? 'bg-[#201d66] border-[#201d66]' : 'bg-[#b0bec5] border-[#b0bec5]'} transition-all`}
                    aria-label={`Go to project ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            filteredProjects.map((project, idx) => {
              const [isPlaying, setIsPlaying] = useState(false);
              const [isHovered, setIsHovered] = useState(false);
              return (
                <motion.div
                  key={project.title}
                  ref={el => (sectionRefs.current[idx] = el)}
                  className="snap-center min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-16 relative group"
                  variants={sectionVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: 'easeOut' }}
                >
                  {/* Parallax image with video on click and 3D tilt on hover */}
                  <motion.div
                    id={`project-img-container-${idx}`}
                    className="flex-1 flex items-center justify-center p-8 relative group"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0, transition: shouldReduceMotion ? { duration: 0 } : { delay: 0.2, duration: 0.7 } }}
                    viewport={{ once: true }}
                    tabIndex={0}
                    style={{ cursor: project.videoDemo ? 'pointer' : 'default' }}
                    onMouseMove={e => {
                      if (!isPlaying) handleMouseMove(e, idx);
                    }}
                    onMouseLeave={() => {
                      if (!isPlaying) handleMouseLeave(idx);
                    }}
                  >
                    {isPlaying && project.videoDemo ? (
                      <motion.video
                        src={project.videoDemo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full max-w-lg h-auto rounded-2xl shadow-2xl object-contain border-4 border-[#e3f2fd] bg-black transition-transform duration-300 parallax-img focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
                        style={{ minHeight: '320px', background: '#000' }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.3, duration: 0.7 }}
                        onClick={e => { e.stopPropagation(); setIsPlaying(false); handleMouseLeave(idx); }}
                      />
                    ) : (
                      <motion.img
                        id={`project-img-${idx}`}
                        src={project.image}
                        alt={project.title}
                        className="w-full max-w-lg h-auto rounded-2xl shadow-2xl object-contain border-4 border-[#e3f2fd] bg-white transition-transform duration-300 cursor-pointer hover:scale-105 group-hover:shadow-[0_8px_32px_0_rgba(32,29,102,0.15)] parallax-img focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
                        tabIndex={0}
                        aria-label={`Play video demo for ${project.title}`}
                        onClick={() => setIsPlaying(true)}
                        onKeyDown={e => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setIsPlaying(true);
                          }
                        }}
                        whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: 1 }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.3, duration: 0.7 }}
                      />
                    )}
                    {/* Glare overlay for premium effect */}
                    <div
                      id={`project-glare-${idx}`}
                      className="pointer-events-none absolute inset-0 rounded-2xl z-10"
                      style={{ opacity: 0, transition: 'opacity 0.2s' }}
                    />
                    {/* Floating shape */}
                    <motion.div
                      className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#b3c6f7]/40 blur-2xl z-0"
                      animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                    />
                  </motion.div>
                  {/* Project info */}
                  <motion.div
                    className="flex-1 flex flex-col items-start justify-center max-w-xl p-8 z-10"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={{
                      initial: { opacity: 0, x: -80 },
                      animate: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: 0.2,
                          duration: 0.7,
                          staggerChildren: 0.15,
                          when: 'beforeChildren',
                        },
                      },
                    }}
                  >
                    <motion.h2 className="text-5xl md:text-6xl font-bold text-[#201d66] mb-6 drop-shadow-lg" variants={{ initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } }}>
                      {project.title}
                    </motion.h2>
                    <motion.p className="text-2xl md:text-3xl text-[#3949ab] mb-6" variants={{ initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } }}>
                      {project.description}
                    </motion.p>
                    <motion.div className="flex flex-wrap gap-3 mb-6" variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }}>
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          className="bg-[#e3f2fd] text-[#3949ab] px-4 py-2 rounded-full text-base font-medium shadow"
                          variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                    <motion.div className="flex items-center gap-3 mt-4" variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-[#201d66] text-white px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-[#3949ab] transition-colors shadow focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
                        aria-label={`View ${project.title} project in new tab`}
                      >
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-1" />
                        Visit
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-white border border-[#201d66] text-[#201d66] rounded-full p-2 text-base hover:bg-[#201d66] hover:text-white transition shadow focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2 ml-2"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                      <button
                        className="inline-flex items-center gap-1 bg-[#3949ab] text-white px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-[#201d66] transition-colors shadow focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
                        onClick={() => setPreviewModal(project.link)}
                        aria-label={`Live preview of ${project.title}`}
                        tabIndex={0}
                        onKeyDown={e => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setPreviewModal(project.link);
                          }
                        }}
                      >
                        <EyeIcon className="w-4 h-4 mr-1" />
                        Preview
                      </button>
                      <button
                        className="inline-flex items-center gap-1 bg-[#e3f2fd] text-[#201d66] px-3 py-1.5 rounded-full text-sm font-semibold shadow hover:bg-[#3949ab] hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
                        onClick={() => setModalProject(project)}
                        aria-label={`Show details for ${project.title}`}
                        tabIndex={0}
                        onKeyDown={e => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setModalProject(project);
                          }
                        }}
                      >
                        <InformationCircleIcon className="w-4 h-4 mr-1" />
                        Details
                      </button>
                      <span className="text-[#3949ab] text-xs font-bold ml-2">{project.year}</span>
                    </motion.div>
                    <motion.p className="mt-8 text-lg text-[#201d66]/80" variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}>
                      {project.details}
                    </motion.p>
                  </motion.div>
                </motion.div>
              );
            })
          )}
        </div>
        {/* Project Details Modal */}
        <AnimatePresence>
          {modalProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalProject(null)}
              aria-modal="true"
              role="dialog"
              tabIndex={-1}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative"
                initial={{ scale: 0.8, opacity: 0, y: 100 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 100 }}
                transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 320, damping: 28 }}
                onClick={e => e.stopPropagation()}
                tabIndex={0}
                aria-label="Project details modal"
                onKeyDown={e => {
                  if (e.key === 'Escape') setModalProject(null);
                }}
              >
                <>{modalProject && (
                  <>
                    <motion.img
                      src={modalProject.image}
                      alt={modalProject.title}
                      className="w-full h-48 object-contain rounded-xl mb-4 bg-[#e3f2fd]"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    />
                    <motion.h3 className="text-3xl font-bold text-[#201d66] mb-2" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }}>
                      {modalProject.title}
                    </motion.h3>
                    <motion.p className="text-lg text-[#3949ab] mb-2" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.18 }}>
                      {modalProject.description}
                    </motion.p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {modalProject.tags.map((tag, i) => (
                        <span key={i} className="bg-[#e3f2fd] text-[#3949ab] px-3 py-1 rounded-full text-sm font-medium shadow">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.p className="text-[#201d66]/80 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}>
                      {modalProject.details}
                    </motion.p>
                    <a
                      href={modalProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#201d66] text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-[#3949ab] transition-colors shadow-lg"
                    >
                      Visit Project
                    </a>
                  </>
                )}</>
                <button
                  className="absolute top-4 right-4 text-[#3949ab] text-2xl font-bold hover:text-[#201d66] focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
                  onClick={() => setModalProject(null)}
                  aria-label="Close project details modal"
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
                      e.preventDefault();
                      setModalProject(null);
                    }
                  }}
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Video Demo Modal */}
        <AnimatePresence>
          {videoModal && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setVideoModal(null)}
              aria-modal="true"
              role="dialog"
              tabIndex={-1}
            >
              <motion.div
                className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden"
                initial={{ scale: 0.95, opacity: 0, y: 100 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 100 }}
                transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 320, damping: 28 }}
                onClick={e => e.stopPropagation()}
                tabIndex={0}
                aria-label="Project video demo modal"
                onKeyDown={e => {
                  if (e.key === 'Escape') setVideoModal(null);
                }}
              >
                <video
                  src={videoModal}
                  controls
                  autoPlay
                  className="w-full h-full object-contain bg-black rounded-2xl"
                  style={{ maxHeight: '70vh' }}
                />
                <button
                  className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-[#b3c6f7] focus:outline-none focus:ring-2 focus:ring-[#b3c6f7] focus:ring-offset-2"
                  onClick={() => setVideoModal(null)}
                  aria-label="Close video demo modal"
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
                      e.preventDefault();
                      setVideoModal(null);
                    }
                  }}
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Live Preview Modal */}
        <AnimatePresence>
          {previewModal && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewModal(null)}
              aria-modal="true"
              role="dialog"
              tabIndex={-1}
            >
              <motion.div
                className="relative w-full max-w-6xl h-[80vh] bg-white rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden"
                initial={{ scale: 0.95, opacity: 0, y: 100 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 100 }}
                transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 320, damping: 28 }}
                onClick={e => e.stopPropagation()}
                tabIndex={0}
                aria-label="Project live preview modal"
                onKeyDown={e => {
                  if (e.key === 'Escape') setPreviewModal(null);
                }}
              >
                <iframe
                  src={previewModal}
                  title="Live Project Preview"
                  className="w-full h-full border-0 rounded-2xl bg-white"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                  style={{ minHeight: '400px' }}
                />
                <button
                  className="absolute top-4 right-4 text-[#201d66] text-3xl font-bold hover:text-[#3949ab] focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
                  onClick={() => setPreviewModal(null)}
                  aria-label="Close live preview modal"
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
                      e.preventDefault();
                      setPreviewModal(null);
                    }
                  }}
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* View More Projects Button */}
        <div className="w-full flex justify-center mt-16 md:mt-24">
          <a
            href="https://manishraj.netlify.app/projectsarchive"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#201d66] text-white px-8 py-3 rounded-full text-lg md:text-xl font-semibold border-2 border-[#80deea] shadow-lg hover:bg-[#3949ab] hover:text-[#e3f2fd] transition-all focus:outline-none focus:ring-2 focus:ring-[#201d66]"
            style={{ minWidth: 220 }}
            aria-label="View more projects in new tab"
          >
            View More Projects
          </a>
        </div>
        {/* Custom styles for scrollbars and snap */}
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          .animate-gradient-move {
            animation: gradientMove 16s ease-in-out infinite alternate;
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%, 100% 50%; }
            100% { background-position: 100% 50%, 0% 50%; }
          }
          .parallax-img {
            will-change: transform, box-shadow;
            backface-visibility: hidden;
          }
        `}</style>
      </div>
    </section>
  );
};

interface MobileProjectCardProps {
  project: Project;
  setModalProject: (p: Project) => void;
  setVideoModal: (url: string) => void;
  setPreviewModal: (url: string) => void;
  shouldReduceMotion?: boolean;
}

const MobileProjectCard: React.FC<MobileProjectCardProps> = ({ project, setModalProject, setVideoModal, setPreviewModal, shouldReduceMotion = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center px-4 py-16 relative group"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="flex-1 flex items-center justify-center p-8 relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        tabIndex={0}
        style={{ cursor: project.videoDemo ? 'pointer' : 'default' }}
      >
        {isHovered && project.videoDemo && false ? (
          <motion.video
            src={project.videoDemo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-lg h-auto rounded-2xl shadow-2xl object-contain border-4 border-[#e3f2fd] bg-black transition-transform duration-300 group-hover:shadow-[0_8px_32px_0_rgba(32,29,102,0.15)] parallax-img focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
            style={{ minHeight: '320px', background: '#000' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.3, duration: 0.7 }}
          />
        ) : (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full max-w-lg h-auto rounded-2xl shadow-2xl object-contain border-4 border-[#e3f2fd] bg-white transition-transform duration-300 cursor-pointer hover:scale-105 group-hover:shadow-[0_8px_32px_0_rgba(32,29,102,0.15)] parallax-img focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
            tabIndex={0}
            aria-label={`Play video demo for ${project.title}`}
            onClick={() => project.videoDemo ? setVideoModal(project.videoDemo) : setModalProject(project)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                project.videoDemo ? setVideoModal(project.videoDemo) : setModalProject(project);
              }
            }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, rotate: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.3, duration: 0.7 }}
          />
        )}
        {/* Floating shape */}
        <motion.div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#b3c6f7]/40 blur-2xl z-0"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        />
      </motion.div>
      {/* Project info (reuse as in desktop) */}
      <motion.div
        className="flex-1 flex flex-col items-start justify-center max-w-xl p-8 z-10"
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0, x: -80 },
          animate: {
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.2,
              duration: 0.7,
              staggerChildren: 0.15,
              when: 'beforeChildren',
            },
          },
        }}
      >
        <motion.h2 className="text-5xl md:text-6xl font-bold text-[#201d66] mb-6 drop-shadow-lg" variants={{ initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } }}>
          {project.title}
        </motion.h2>
        <motion.p className="text-2xl md:text-3xl text-[#3949ab] mb-6" variants={{ initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } }}>
          {project.description}
        </motion.p>
        <motion.div className="flex flex-wrap gap-3 mb-6" variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }}>
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              className="bg-[#e3f2fd] text-[#3949ab] px-4 py-2 rounded-full text-base font-medium shadow"
              variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        <motion.div className="flex items-center gap-3 mt-4" variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-[#201d66] text-white px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-[#3949ab] transition-colors shadow focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
            aria-label={`View ${project.title} project in new tab`}
          >
            <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-1" />
            Visit
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white border border-[#201d66] text-[#201d66] rounded-full p-2 text-base hover:bg-[#201d66] hover:text-white transition shadow focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2 ml-2"
            aria-label={`View ${project.title} on GitHub`}
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <button
            className="inline-flex items-center gap-1 bg-[#3949ab] text-white px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-[#201d66] transition-colors shadow focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
            onClick={() => setPreviewModal(project.link)}
            aria-label={`Live preview of ${project.title}`}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setPreviewModal(project.link);
              }
            }}
          >
            <EyeIcon className="w-4 h-4 mr-1" />
            Preview
          </button>
          <button
            className="inline-flex items-center gap-1 bg-[#e3f2fd] text-[#201d66] px-3 py-1.5 rounded-full text-sm font-semibold shadow hover:bg-[#3949ab] hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
            onClick={() => setModalProject(project)}
            aria-label={`Show details for ${project.title}`}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setModalProject(project);
              }
            }}
          >
            <InformationCircleIcon className="w-4 h-4 mr-1" />
            Details
          </button>
          <span className="text-[#3949ab] text-xs font-bold ml-2">{project.year}</span>
        </motion.div>
        <motion.p className="mt-8 text-lg text-[#201d66]/80" variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}>
          {project.details}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
