import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from '../lib/swipeable';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
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
    tags: ['MERN', 'Package', 'CLI', 'Open Source'],
    year: '2024',
    details: 'Created a developer CLI tool for rapid project scaffolding and automation. Published on NPM, with a focus on DX and extensibility.',
    videoDemo: 'https://www.w3schools.com/html/movie.mp4' // Example video
  },
  // Add more projects here
];

const tagList = Array.from(new Set(projects.flatMap(p => p.tags)));

const sectionVariants = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [videoModal, setVideoModal] = useState<string | null>(null); // video URL
  const [previewModal, setPreviewModal] = useState<string | null>(null); // live preview URL
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const filteredProjects = selectedTag ? projects.filter(p => p.tags.includes(selectedTag)) : projects;
  const [currentIdx, setCurrentIdx] = useState(0); // For mobile carousel
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Scroll snap to section
  const scrollToSection = (idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
  };

  // Responsive parallax effect with 3D tilt and shadow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number) => {
    const img = document.getElementById(`project-img-${idx}`);
    if (img) {
      const { left, top, width, height } = img.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 2; // -1 to 1
      const y = ((e.clientY - top) / height - 0.5) * 2; // -1 to 1
      const rotateY = -x * 15; // max 15deg
      const rotateX = y * 15;  // max 15deg
      const shadowX = -x * 30; // max 30px
      const shadowY = y * 30;  // max 30px
      img.style.transform = `perspective(800px) scale(1.04) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      img.style.boxShadow = `${shadowX}px ${shadowY}px 40px 0px rgba(32,29,102,0.18), 0 8px 32px 0 rgba(32,29,102,0.10)`;
      img.style.transition = 'transform 0.2s cubic-bezier(.25,.8,.25,1), box-shadow 0.2s cubic-bezier(.25,.8,.25,1)';
    }
  };
  const handleMouseLeave = (idx: number) => {
    const img = document.getElementById(`project-img-${idx}`);
    if (img) {
      img.style.transform = '';
      img.style.boxShadow = '';
      img.style.transition = 'transform 0.5s cubic-bezier(.25,.8,.25,1), box-shadow 0.5s cubic-bezier(.25,.8,.25,1)';
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
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <section id="projects" className="relative w-full min-h-screen bg-gradient-to-br from-[#e3f2fd] to-[#fff] overflow-x-hidden">
      {/* Animated SVG floating background elements */}
      <motion.svg
        className="fixed top-0 left-0 w-full h-full -z-30 pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <motion.circle
          cx="300"
          cy="200"
          r="120"
          fill="#b3c6f7"
          style={{ filter: 'blur(40px)', opacity: 0.5 }}
          animate={{ cy: [200, 260, 200], cx: [300, 350, 300] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        />
        <motion.ellipse
          cx="1600"
          cy="900"
          rx="180"
          ry="90"
          fill="#90caf9"
          style={{ filter: 'blur(60px)', opacity: 0.4 }}
          animate={{ cy: [900, 950, 900], rx: [180, 200, 180] }}
          transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }}
        />
        <motion.path
          d="M900,300 Q950,350 1000,300 T1100,300"
          stroke="#e3f2fd"
          strokeWidth="40"
          fill="none"
          style={{ filter: 'blur(30px)', opacity: 0.3 }}
          animate={{ pathLength: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />
      </motion.svg>
      {/* Top animated progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-2 bg-[#b0bec5] w-full z-40 overflow-hidden"
        style={{ boxShadow: '0 2px 12px 0 rgba(32,29,102,0.08)' }}
      >
        <motion.div
          className="h-2 bg-[#201d66]"
          initial={{ width: 0 }}
          animate={{ width: `${((scrollIdx + 1) / filteredProjects.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      {/* Sticky sidebar navigation (desktop) */}
      <aside className="hidden md:flex flex-col fixed left-8 top-1/2 -translate-y-1/2 z-30 gap-4" aria-label="Project section navigation">
        {filteredProjects.map((p, i) => (
          <button
            key={p.title}
            onClick={() => scrollToSection(i)}
            className={`w-3 h-3 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2 ${scrollIdx === i ? 'bg-[#201d66] border-[#201d66]' : 'bg-[#b0bec5] border-[#b0bec5]'} transition-colors`}
            aria-label={`Jump to ${p.title}`}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') scrollToSection(i);
            }}
          />
        ))}
      </aside>
      {/* Mobile bottom navigation bar */}
      <nav className="fixed md:hidden bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-4 bg-white/90 shadow-lg rounded-full px-4 py-2 backdrop-blur-md border border-[#e3f2fd]" aria-label="Project section navigation (mobile)">
        {filteredProjects.map((p, i) => (
          <button
            key={p.title}
            onClick={() => scrollToSection(i)}
            className={`w-3 h-3 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2 ${scrollIdx === i ? 'bg-[#201d66] border-[#201d66] scale-125 shadow-lg' : 'bg-[#b0bec5] border-[#b0bec5]'} transition-all`}
            aria-label={`Jump to ${p.title}`}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') scrollToSection(i);
            }}
          />
        ))}
      </nav>
      {/* Tag filter bar */}
      <div className="flex flex-wrap gap-3 mt-8 mb-4 z-10 justify-center sticky top-0 bg-gradient-to-b from-[#e3f2fd]/80 to-transparent py-4 backdrop-blur-md">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full text-base font-medium shadow transition-colors focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2 ${selectedTag === null ? 'bg-[#201d66] text-white' : 'bg-[#e3f2fd] text-[#3949ab]'}`}
          onClick={() => setSelectedTag(null)}
          aria-label="Show all projects"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setSelectedTag(null);
            }
          }}
        >
          All
        </motion.button>
        {tagList.map(tag => (
          <motion.button
            whileTap={{ scale: 0.95 }}
            key={tag}
            className={`px-4 py-2 rounded-full text-base font-medium shadow transition-colors focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2 ${selectedTag === tag ? 'bg-[#201d66] text-white' : 'bg-[#e3f2fd] text-[#3949ab]'}`}
            onClick={() => setSelectedTag(tag)}
            aria-label={`Filter by ${tag}`}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedTag(tag);
              }
            }}
          >
            {tag}
          </motion.button>
        ))}
      </div>
      {/* Project full-screen sections */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll no-scrollbar">
        {/* Desktop: show all, Mobile: show carousel */}
        {isMobile ? (
          <div {...swipeHandlers} className="w-full h-full flex items-center justify-center relative">
            <AnimatePresence initial={false} custom={currentIdx}>
              <MobileProjectCard
                key={filteredProjects[currentIdx]?.title}
                project={filteredProjects[currentIdx]}
                setModalProject={setModalProject}
                setVideoModal={setVideoModal}
                setPreviewModal={setPreviewModal}
              />
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
            // Track hover state for each project
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
              >
                {/* Parallax image with video on hover */}
                <motion.div
                  id={`project-img-container-${idx}`}
                  className="flex-1 flex items-center justify-center p-8 relative group"
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.7 } }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  tabIndex={0}
                  onFocus={() => setIsHovered(true)}
                  onBlur={() => setIsHovered(false)}
                  style={{ cursor: project.videoDemo ? 'pointer' : 'default' }}
                >
                  {isHovered && project.videoDemo ? (
                    <motion.video
                      src={project.videoDemo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full max-w-lg h-auto rounded-2xl shadow-2xl object-contain border-4 border-[#e3f2fd] bg-black transition-transform duration-300 group-hover:shadow-[0_8px_32px_0_rgba(32,29,102,0.15)] parallax-img focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
                      style={{ minHeight: '320px', background: '#000' }}
                    />
                  ) : (
                    <motion.img
                      id={`project-img-${idx}`}
                      src={project.image}
                      alt={project.title}
                      className="w-full max-w-lg h-auto rounded-2xl shadow-2xl object-contain border-4 border-[#e3f2fd] bg-white transition-transform duration-300 cursor-pointer hover:scale-105 group-hover:shadow-[0_8px_32px_0_rgba(32,29,102,0.15)] parallax-img focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
                      tabIndex={0}
                      aria-label={`Play video demo for ${project.title}`}
                      onMouseMove={e => handleMouseMove(e, idx)}
                      onMouseLeave={() => handleMouseLeave(idx)}
                      onClick={() => project.videoDemo ? setVideoModal(project.videoDemo) : setModalProject(project)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          project.videoDemo ? setVideoModal(project.videoDemo) : setModalProject(project);
                        }
                      }}
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.7 }}
                    />
                  )}
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
                  <motion.div className="flex items-center gap-6 mt-4" variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#201d66] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#3949ab] transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
                      aria-label={`View ${project.title} project in new tab`}
                    >
                      View Project
                    </a>
                    {/* Live Preview Button */}
                    <button
                      className="inline-block bg-[#3949ab] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#201d66] transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
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
                      Live Preview
                    </button>
                    <span className="text-[#3949ab] text-lg font-bold">{project.year}</span>
                    {/* Details button */}
                    <button
                      className="ml-2 px-4 py-2 rounded-full bg-[#e3f2fd] text-[#201d66] font-semibold shadow hover:bg-[#3949ab] hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
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
                      Details
                    </button>
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
              transition={{ duration: 0.4 }}
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
              transition={{ duration: 0.4 }}
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
              transition={{ duration: 0.4 }}
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
      <div className="fixed bottom-4 right-4 z-20">
        <a
          href="https://manishraj.netlify.app/projectsarchive"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#201d66] text-white px-6 py-3 rounded-full text-lg hover:bg-[#3949ab] shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
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
    </section>
  );
};

interface MobileProjectCardProps {
  project: Project;
  setModalProject: (p: Project) => void;
  setVideoModal: (url: string) => void;
  setPreviewModal: (url: string) => void;
}

const MobileProjectCard: React.FC<MobileProjectCardProps> = ({ project, setModalProject, setVideoModal, setPreviewModal }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center px-4 py-16 relative group"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
        {isHovered && project.videoDemo ? (
          <motion.video
            src={project.videoDemo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-lg h-auto rounded-2xl shadow-2xl object-contain border-4 border-[#e3f2fd] bg-black transition-transform duration-300 group-hover:shadow-[0_8px_32px_0_rgba(32,29,102,0.15)] parallax-img focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
            style={{ minHeight: '320px', background: '#000' }}
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
            whileHover={{ scale: 1.05, rotate: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
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
        <motion.div className="flex items-center gap-6 mt-4" variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#201d66] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#3949ab] transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
            aria-label={`View ${project.title} project in new tab`}
          >
            View Project
          </a>
          <button
            className="inline-block bg-[#3949ab] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#201d66] transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
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
            Live Preview
          </button>
          <span className="text-[#3949ab] text-lg font-bold">{project.year}</span>
          <button
            className="ml-2 px-4 py-2 rounded-full bg-[#e3f2fd] text-[#201d66] font-semibold shadow hover:bg-[#3949ab] hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2"
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
            Details
          </button>
        </motion.div>
        <motion.p className="mt-8 text-lg text-[#201d66]/80" variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}>
          {project.details}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
