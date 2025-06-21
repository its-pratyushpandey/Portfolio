import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

// Animation variants similar to ExperienceSection
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

const FloatingDecorations: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
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
  </div>
);

const Hero: React.FC = () => {
  // 3D tilt effect for heading
  const heroRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 1], [0, 18]);
  const rotateY = useTransform(x, [0, 1], [0, -18]);
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };
  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] relative overflow-hidden"
    >
      <FloatingDecorations />
      <motion.div
        className="text-center flex flex-col items-center justify-center gap-6 relative z-10 w-full max-w-4xl px-4 md:px-0"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-lg md:text-2xl text-[#3949ab] font-medium mb-2 flex items-center justify-center gap-2"
          variants={itemVariants}
        >
          <motion.span
            initial={{ rotate: -10 }}
            animate={{ rotate: [0, 20, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="inline-block"
            aria-label="Waving hand"
          >
            👋
          </motion.span>
          Hey I'M
        </motion.h2>
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[#201d66] mb-2 flex items-center justify-center gap-3"
          style={{ rotateX, rotateY }}
          variants={itemVariants}
          tabIndex={0}
        >
          <motion.span
            className="inline-flex items-center justify-center bg-[#e3f2fd] rounded-full p-2 shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <svg className="w-8 h-8 text-[#201d66]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.01z"/></svg>
          </motion.span>
          Pratyush Kumar Pandey
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-[#3949ab] mb-8"
          variants={itemVariants}
        >
          <span className="inline-flex items-center gap-2">
            <svg className="w-6 h-6 text-[#201d66]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"/></svg>
            Full Stack Developer | UI/UX Designer
          </span>
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row items-center gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="bg-[#201d66] text-white px-6 py-3 rounded-full text-lg hover:bg-[#3949ab] transition shadow-lg"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="https://github.com/its-pratyushpandey"
            className="bg-white border border-[#201d66] text-[#201d66] px-6 py-3 rounded-full text-lg hover:bg-[#201d66] hover:text-white transition shadow-lg"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            <svg className="w-6 h-6 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/pratyush-pandey1/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-[#201d66] text-[#201d66] px-6 py-3 rounded-full text-lg hover:bg-[#201d66] hover:text-white transition shadow-lg"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            <svg className="w-6 h-6 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            LinkedIn
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-[#201d66] text-[#201d66] px-6 py-3 rounded-full text-lg hover:bg-[#201d66] hover:text-white transition shadow-lg"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
            Resume
          </motion.a>
        </motion.div>
        {/* Animated details toggle for demonstration, similar to ExperienceSection */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              className="mt-8 bg-[#f5f5f5]/80 rounded-lg py-4 px-6 text-[#3949ab] text-base md:text-lg shadow-sm border-l-4 border-[#201d66]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              Welcome to my portfolio! I am passionate about building beautiful, performant web applications and delivering great user experiences.
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          className="mt-4 px-5 py-2 bg-[#3949ab] text-white rounded-full shadow hover:bg-[#201d66] transition text-base md:text-lg"
          onClick={() => setShowDetails((v) => !v)}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          {showDetails ? 'Hide Intro' : 'Show Intro'}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
