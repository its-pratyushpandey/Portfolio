import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  year: string;
  details: string;
}

const projects: Project[] = [
  {
    title: 'NAYONA CONSULTANCY SERVICE',
    description: 'Consulting • Engineering',
    image: 'https://c.animaapp.com/mc46fmevF9sLme/img/nayona-consultancy-service.png',
    link: 'https://nayona.netlify.app/',
    tags: ['Design', 'Development', 'React', 'Consulting'],
    year: '2025',
    details: 'Led the development of a consulting platform with a modern UI, integrating real-time data and client dashboards. Used React, Node.js, and cloud services for scalability.'
  },
  {
    title: 'DEVCLI - CLI TOOL',
    description: 'NPM Library • CLI Tool',
    image: 'https://c.animaapp.com/mc46fmevF9sLme/img/devcli---cli-tool.png',
    link: 'https://devcli.vercel.app/',
    tags: ['MERN', 'Package', 'CLI', 'Open Source'],
    year: '2024',
    details: 'Created a developer CLI tool for rapid project scaffolding and automation. Published on NPM, with a focus on DX and extensibility.'
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
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const filteredProjects = selectedTag ? projects.filter(p => p.tags.includes(selectedTag)) : projects;

  // Scroll snap to section
  const scrollToSection = (idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
  };

  // Responsive parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number) => {
    const img = document.getElementById(`project-img-${idx}`);
    if (img) {
      const { left, top, width, height } = img.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 16;
      const y = ((e.clientY - top) / height - 0.5) * 16;
      img.style.transform = `scale(1.03) rotateY(${-x}deg) rotateX(${y}deg)`;
    }
  };
  const handleMouseLeave = (idx: number) => {
    const img = document.getElementById(`project-img-${idx}`);
    if (img) img.style.transform = '';
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

  return (
    <section id="projects" className="relative w-full min-h-screen bg-gradient-to-br from-[#e3f2fd] to-[#fff] overflow-x-hidden">
      {/* Animated background gradient and floating shapes */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full -z-20 animate-gradient-move"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ background: 'radial-gradient(circle at 20% 30%, #b3c6f7 0%, transparent 70%), radial-gradient(circle at 80% 70%, #90caf9 0%, transparent 70%)' }}
      />
      {/* Sticky sidebar navigation */}
      <aside className="hidden md:flex flex-col fixed left-8 top-1/2 -translate-y-1/2 z-30 gap-4">
        {filteredProjects.map((p, i) => (
          <button
            key={p.title}
            onClick={() => scrollToSection(i)}
            className={`w-3 h-3 rounded-full border-2 ${scrollIdx === i ? 'bg-[#201d66] border-[#201d66]' : 'bg-[#b0bec5] border-[#b0bec5]'} transition-colors`}
            aria-label={`Jump to ${p.title}`}
          />
        ))}
      </aside>
      {/* Tag filter bar */}
      <div className="flex flex-wrap gap-3 mt-8 mb-4 z-10 justify-center sticky top-0 bg-gradient-to-b from-[#e3f2fd]/80 to-transparent py-4 backdrop-blur-md">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full text-base font-medium shadow transition-colors ${selectedTag === null ? 'bg-[#201d66] text-white' : 'bg-[#e3f2fd] text-[#3949ab]'}`}
          onClick={() => setSelectedTag(null)}
        >
          All
        </motion.button>
        {tagList.map(tag => (
          <motion.button
            whileTap={{ scale: 0.95 }}
            key={tag}
            className={`px-4 py-2 rounded-full text-base font-medium shadow transition-colors ${selectedTag === tag ? 'bg-[#201d66] text-white' : 'bg-[#e3f2fd] text-[#3949ab]'}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </motion.button>
        ))}
      </div>
      {/* Project full-screen sections */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll no-scrollbar">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            ref={el => (sectionRefs.current[idx] = el)}
            className="snap-center min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-16 relative group"
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Parallax image with reveal */}
            <motion.div
              className="flex-1 flex items-center justify-center p-8 relative"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.7 } }}
              viewport={{ once: true }}
            >
              <motion.img
                id={`project-img-${idx}`}
                src={project.image}
                alt={project.title}
                className="w-full max-w-lg h-auto rounded-2xl shadow-2xl object-contain border-4 border-[#e3f2fd] bg-white transition-transform duration-300 cursor-pointer hover:scale-105 group-hover:shadow-[0_8px_32px_0_rgba(32,29,102,0.15)]"
                onMouseMove={e => handleMouseMove(e, idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                onClick={() => setModalProject(project)}
                whileHover={{ scale: 1.05, rotate: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
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
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.7 } }}
              viewport={{ once: true }}
            >
              <motion.h2 className="text-5xl md:text-6xl font-bold text-[#201d66] mb-6 drop-shadow-lg" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                {project.title}
              </motion.h2>
              <motion.p className="text-2xl md:text-3xl text-[#3949ab] mb-6" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                {project.description}
              </motion.p>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-[#e3f2fd] text-[#3949ab] px-4 py-2 rounded-full text-base font-medium shadow">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-6 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#201d66] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#3949ab] transition-colors shadow-lg"
                >
                  View Project
                </a>
                <span className="text-[#3949ab] text-lg font-bold">{project.year}</span>
                <button
                  className="ml-2 px-4 py-2 rounded-full bg-[#e3f2fd] text-[#201d66] font-semibold shadow hover:bg-[#3949ab] hover:text-white transition"
                  onClick={() => setModalProject(project)}
                >
                  Details
                </button>
              </div>
              <motion.p className="mt-8 text-lg text-[#201d66]/80" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 0.5 } }} viewport={{ once: true }}>
                {project.details}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
      {/* Progress bar */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 h-2 bg-[#b0bec5] rounded-full w-2/3 z-20 overflow-hidden"
      >
        <motion.div
          className="h-2 bg-[#201d66] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((scrollIdx + 1) / filteredProjects.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
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
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative"
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 100 }}
              transition={{ duration: 0.4 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={modalProject.image} alt={modalProject.title} className="w-full h-48 object-contain rounded-xl mb-4 bg-[#e3f2fd]" />
              <h3 className="text-3xl font-bold text-[#201d66] mb-2">{modalProject.title}</h3>
              <p className="text-lg text-[#3949ab] mb-2">{modalProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {modalProject.tags.map((tag, i) => (
                  <span key={i} className="bg-[#e3f2fd] text-[#3949ab] px-3 py-1 rounded-full text-sm font-medium shadow">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[#201d66]/80 mb-4">{modalProject.details}</p>
              <a
                href={modalProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#201d66] text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-[#3949ab] transition-colors shadow-lg"
              >
                Visit Project
              </a>
              <button
                className="absolute top-4 right-4 text-[#3949ab] text-2xl font-bold hover:text-[#201d66]"
                onClick={() => setModalProject(null)}
                aria-label="Close"
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
          className="inline-block bg-[#201d66] text-white px-6 py-3 rounded-full text-lg hover:bg-[#3949ab] shadow-lg transition-colors"
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
      `}</style>
    </section>
  );
};

export default Projects;
