import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion, useAnimation } from 'framer-motion';
import { useSwipeable } from '../lib/swipeable';
import { ArrowTopRightOnSquareIcon, EyeIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';

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
//  previewModal?: string; // Optional live preview URL

//I want to add a heading Text as My workspace

            
const projects: Project[] = [
  {
    title: 'NextHire',
    description: 'AI Job Portal • Real-time Interviews',
    image: '/nexthire.png',
    link: 'https://nexthireap.netlify.app/',
    github: 'https://github.com/its-pratyushpandey/NextHire.git',
    tags: ['React.js', 'Node.js', 'MongoDB', 'WebSockets', 'AI'],
    year: '2024',
    details: 'Full-stack job portal connecting job seekers and employers with secure JWT and Bcrypt authentication. Features real-time chat and video interviews using WebSockets, AI-driven job recommendations and resume parsing, mock tests, smart notifications, premium dashboards, and seamless one-click application process.',
    videoDemo: 'https://www.w3schools.com/html/mov_bbb.mp4' // Example video
  },
  {
    title: 'Cogniview',
    description: 'AI Interview Platform • Voice AI',
    image: '/cogniview.png',
    link: 'https://cogniview.pratyushpandey.me/',
    github: 'https://github.com/its-pratyushpandey/Cogniview.git',
    tags: ['Next.js', 'TypeScript', 'AI', 'Firebase', 'Voice AI'],
    year: '2024',
    details: 'AI-powered interview platform with voice-enabled interviews using VAPI, intelligent chat assistance powered by Google Gemini, and secure Firebase authentication. Features real-time interview management, interactive dashboards, GitHub profile evaluation, and task management with a modern responsive UI.',
    videoDemo: 'https://www.w3schools.com/html/mov_bbb.mp4' // Example video
  },
  {
    title: 'Arise',
    description: 'AI Career Platform • Resume Builder',
    image: '/arise.png',
    link: 'https://arise.pratyushpandey.me/',
    github: 'https://github.com/its-pratyushpandey/Arise.git',
    tags: ['Next.js', 'MongoDB', 'Gemini AI', 'Prisma', 'Clerk'],
    year: '2024',
    details: 'Full-stack AI platform for building optimized resumes, generating tailored cover letters, and practicing mock interviews with instant feedback. Features secure Clerk authentication, GitHub README and portfolio generators, ATS score checker, smart notifications, and a modern responsive UI built with Shadcn UI and WebSockets.',
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
  const [showAllProjects, setShowAllProjects] = useState(false); // Show all projects grid
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const filteredProjects = selectedTag ? projects.filter(p => p.tags.includes(selectedTag)) : projects;
  const [currentIdx, setCurrentIdx] = useState(0); // For mobile carousel
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(false); // For mobile sidebar
  const shouldReduceMotionRaw = useReducedMotion();
  const shouldReduceMotion = !!shouldReduceMotionRaw; // always boolean
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Call immediately
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Horizontal scroll animation
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (containerRef.current) {
        const scrollAmount = event.deltaY;
        containerRef.current.scrollLeft += scrollAmount;

        // Trigger Framer Motion animation
        controls.start({
          x: -containerRef.current.scrollLeft,
          transition: { type: 'spring', stiffness: 100, damping: 20 },
        });
      }
    };

    const container = containerRef.current;
    container?.addEventListener('wheel', handleWheel);

    return () => {
      container?.removeEventListener('wheel', handleWheel);
    };
  }, [controls]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Adjusting the styles for the project section to make it full screen and responsive
  const projectContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
    padding: '2rem',
    maxWidth: '100%',
    height: '100vh', // Full screen height
    overflowY: 'auto',
  };

  const projectCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease',
  };

  const projectImageStyle = {
    width: '80%', // Reduced size
    height: 'auto',
    marginBottom: '1rem',
  };

  const projectTitleStyle = {
    fontSize: '1.2rem', // Reduced size
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const projectDescriptionStyle = {
    fontSize: '0.9rem', // Reduced size
    textAlign: 'center',
    color: '#555',
  };

  return (
    <section id="projects" className="w-screen min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] py-12 relative overflow-visible">
      {/* Parallax background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] opacity-60" style={{ backgroundAttachment: 'fixed' }} />
      <div className="w-full max-w-7xl mx-auto px-0 md:px-8 relative z-10 overflow-visible pb-24">
        
        {/* Heading */}
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold text-[#201d66] mb-10 text-center pt-20" // Increased padding-top
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          My Workspace
        </motion.h1>
        <motion.h2 className="text-5xl md:text-6xl font-bold text-[#201d66] mb-20 text-center pt-20" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Work Showcase
        </motion.h2>
        {/* Floating/Drifting Decorative Elements */}
        <FloatingDecorations />
        <motion.div
          ref={containerRef}
          className="relative z-10 container mx-auto px-4 flex gap-4 overflow-x-scroll no-scrollbar"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="snap-center min-w-[300px] flex-shrink-0 flex flex-col md:flex-row items-center justify-center px-4 py-16 relative group"
              initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: 'easeOut' }}
            >
              {/* Parallax image with video on click and 3D tilt on hover */}
              <motion.div
                id={`project-img-container-${idx}`}
                className="flex-1 flex items-center justify-center p-8 relative group"
                initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0, transition: shouldReduceMotion ? { duration: 0 } : { delay: isMobile ? 0 : 0.2, duration: 0.7 } }}
                viewport={{ once: true, amount: isMobile ? 0.1 : 0.5 }}
                tabIndex={0}
                style={{ cursor: 'pointer' }}
                onMouseMove={e => handleMouseMove(e, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
              >
                <motion.img
                  id={`project-img-${idx}`}
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="block w-full max-w-xl h-auto rounded-3xl shadow-3xl object-cover border-6 border-[#3949ab] bg-white transition-transform duration-300 cursor-pointer hover:scale-110 group-hover:shadow-[0_12px_48px_0_rgba(32,29,102,0.25)] parallax-img focus:outline-none focus:ring-4 focus:ring-[#201d66] focus:ring-offset-4"
                  style={{ maxHeight: '400px', display: 'block' }}
                  tabIndex={0}
                  aria-label={`Visit ${project.title} project`}
                  onClick={() => window.open(project.link, '_blank')}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      window.open(project.link, '_blank');
                    }
                  }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 2 }}
                  initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.3, duration: 0.7 }}
                />
                {/* Click to Visit Overlay */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center pointer-events-none transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-center">
                    <ArrowTopRightOnSquareIcon className="w-12 h-12 text-white mx-auto mb-2" />
                    <p className="text-white font-bold text-lg">Click to Visit</p>
                  </div>
                </motion.div>
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
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="inline-block bg-[#201d66] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
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
          ))}
        </motion.div>
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
                        loading="lazy"
                        decoding="async"
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
        {/* View All Projects Button */}
        <div className="w-full flex justify-center mt-16 md:mt-24">
          <button
            onClick={() => setShowAllProjects(true)}
            className="inline-block bg-[#201d66] text-white px-8 py-3 rounded-full text-lg md:text-xl font-semibold border-2 border-[#80deea] shadow-lg hover:bg-[#3949ab] hover:text-[#e3f2fd] transition-all focus:outline-none focus:ring-2 focus:ring-[#201d66]"
            style={{ minWidth: 220, cursor: 'pointer' }}
            aria-label="View all projects"
            role="button"
          >
            View All Projects
          </button>
        </div>

        {/* All Projects Modal/Fullscreen View */}
        <AnimatePresence>
          {showAllProjects && (
            <motion.div
              className="fixed inset-0 bg-white z-[9999] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ 
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <div className="min-h-screen bg-gradient-to-br from-[#f5f5f5] via-[#e3f2fd] to-[#b3e5fc] py-8 md:py-12 px-4 md:px-8 lg:px-12">
                {/* Header with Close Button */}
                <div className="max-w-7xl mx-auto mb-6 md:mb-10 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50 p-4 rounded-2xl shadow-lg">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h1 className="text-3xl md:text-5xl font-bold text-[#201d66]">All Projects</h1>
                    <p className="text-sm md:text-base text-[#3949ab] mt-1">
                      {projects.length} Amazing Projects • Click to Explore
                    </p>
                  </motion.div>
                  <button
                    onClick={() => setShowAllProjects(false)}
                    className="text-[#201d66] hover:text-white hover:bg-[#201d66] text-3xl md:text-4xl font-bold focus:outline-none focus:ring-2 focus:ring-[#201d66] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4"
                    aria-label="Close all projects view"
                  >
                    ×
                  </button>
                </div>

                {/* Projects Grid - Responsive columns */}
                <motion.div 
                  className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pb-8"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.2
                      }
                    }
                  }}
                >
                  {projects.map((project, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group border border-[#e3f2fd]"
                      variants={{
                        hidden: { opacity: 0, y: 30, scale: 0.95 },
                        visible: { opacity: 1, y: 0, scale: 1 }
                      }}
                      whileHover={{ y: -8 }}
                    >
                      {/* Project Image */}
                      <div 
                        className="relative h-48 sm:h-52 md:h-56 overflow-hidden cursor-pointer bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc]"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <ArrowTopRightOnSquareIcon className="w-10 h-10 md:w-12 md:h-12 text-white mx-auto mb-2" />
                            <p className="text-white font-bold text-base md:text-lg">Visit Project</p>
                          </div>
                        </div>
                        {/* Year Badge */}
                        <div className="absolute top-3 right-3 bg-[#201d66] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          {project.year}
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-4 md:p-6 flex-1 flex flex-col">
                        <h2 className="text-xl md:text-2xl font-bold text-[#201d66] mb-2 line-clamp-2 group-hover:text-[#3949ab] transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-[#3949ab] text-sm md:text-base mb-3 line-clamp-2">
                          {project.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 3).map((tag, tagIdx) => (
                            <span 
                              key={tagIdx} 
                              className="bg-[#e3f2fd] text-[#201d66] px-2.5 py-1 rounded-full text-xs font-semibold hover:bg-[#201d66] hover:text-white transition-colors cursor-default"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="bg-[#b3e5fc] text-[#201d66] px-2.5 py-1 rounded-full text-xs font-semibold">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Details - Show more on desktop */}
                        <p className="text-[#201d66]/70 text-xs md:text-sm mb-4 flex-1 line-clamp-3 hidden md:block">
                          {project.details}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex gap-2 md:gap-3 mt-auto">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#201d66] text-white px-3 md:px-4 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold hover:bg-[#3949ab] transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                            <span className="hidden sm:inline">Visit</span>
                            <span className="sm:hidden">View</span>
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-white border-2 border-[#201d66] text-[#201d66] rounded-full p-2 md:p-2.5 hover:bg-[#201d66] hover:text-white transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
                            aria-label={`View ${project.title} on GitHub`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
                          </a>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setModalProject(project);
                              setShowAllProjects(false);
                            }}
                            className="inline-flex items-center justify-center bg-[#e3f2fd] text-[#201d66] rounded-full p-2 md:p-2.5 hover:bg-[#201d66] hover:text-white transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
                            aria-label={`View ${project.title} details`}
                          >
                            <InformationCircleIcon className="w-4 h-4 md:w-5 md:h-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
            loading="lazy"
            decoding="async"
            className="block w-full max-w-lg h-auto rounded-2xl shadow-2xl object-contain border-4 border-[#e3f2fd] bg-white transition-transform duration-300 cursor-pointer hover:scale-105 group-hover:shadow-[0_8px_32px_0_rgba(32,29,102,0.15)] parallax-img focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
            style={{ display: 'block', minHeight: '200px' }}
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
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 0, duration: 0.3 }}
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
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="inline-block bg-[#201d66] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
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

const ViewAllProjects: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] py-20">
      <h1 className="text-5xl md:text-6xl font-bold text-[#201d66] mb-8 drop-shadow-lg">All Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold text-[#201d66] mb-2">{project.title}</h2>
            <p className="text-[#3949ab] mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#201d66] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#3949ab] transition">Visit</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
