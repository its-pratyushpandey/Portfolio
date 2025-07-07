import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ChevronDownIcon, 
  PlayIcon, 
  DocumentArrowDownIcon,
  CodeBracketIcon,
  CpuChipIcon,
  SparklesIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  MapPinIcon,
  CalendarIcon,
  StarIcon,
  BoltIcon,
  FireIcon,
  HeartIcon,
  EyeIcon,
  UserGroupIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

// Professional typing animation hook with enhanced features
const useTypewriter = (words: string[], delay: number = 2000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay]);

  return currentText;
};

// Professional availability indicator
const AvailabilityStatus: React.FC = () => {
  return (
    <motion.div
      className="inline-flex items-center gap-2 px-4 py-2 bg-green-50/80 dark:bg-green-900/20 backdrop-blur-md rounded-full border border-green-200/50 dark:border-green-700/50 shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="w-3 h-3 bg-green-400 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <span className="text-sm font-medium text-green-700 dark:text-green-300">
        Available for opportunities
      </span>
    </motion.div>
  );
};

// Enhanced location and time widget
const LocationTimeWidget: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="flex items-center gap-6 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.6 }}
    >
      <div className="flex items-center gap-2 text-[#3949ab]/80">
        <MapPinIcon className="w-4 h-4" />
        <span className="text-sm font-medium">Mumbai, India</span>
      </div>
      <div className="flex items-center gap-2 text-[#3949ab]/80">
        <CalendarIcon className="w-4 h-4" />
        <span className="text-sm font-medium">
          {currentTime.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            timeZoneName: 'short'
          })}
        </span>
      </div>
    </motion.div>
  );
};

// Advanced floating elements with physics and interactive particles
const FloatingElements: React.FC<{ mousePosition: { x: number; y: number } }> = ({ mousePosition }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Interactive cursor follower */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(128,222,234,0.4) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated geometric shapes with enhanced physics */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 opacity-20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#80deea" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3949ab" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="40" fill="url(#grad1)" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 w-24 h-24 opacity-15"
        animate={{
          x: [0, 40, 0],
          rotate: [0, -90, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * 0.08}px)`,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b3e5fc" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#201d66" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <rect x="20" y="20" width="60" height="60" rx="15" fill="url(#grad2)" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 opacity-25"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * -0.02}px)`,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e3f2fd" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#80deea" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <polygon points="50,10 90,90 10,90" fill="url(#grad3)" />
        </svg>
      </motion.div>

      {/* Enhanced particle system with interactive behavior */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-[#80deea] to-[#b3e5fc] rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100 - Math.random() * 50, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5 + Math.random() * 0.5, 1],
            x: [0, (Math.random() - 0.5) * 50, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Interactive code symbols */}
      {['<', '>', '{', '}', '(', ')'].map((symbol, i) => (
        <motion.div
          key={symbol}
          className="absolute text-2xl font-mono text-[#3949ab]/20 font-bold"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced skill badges component with ratings and categories
const SkillBadges: React.FC = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: '⚛️', rating: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'TypeScript', icon: '🔷', rating: 92, color: 'from-blue-500 to-indigo-600' },
        { name: 'Next.js', icon: '▲', rating: 88, color: 'from-gray-700 to-gray-900' },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: '🟢', rating: 90, color: 'from-green-400 to-green-600' },
        { name: 'Python', icon: '🐍', rating: 85, color: 'from-yellow-400 to-blue-500' },
        { name: 'MongoDB', icon: '🍃', rating: 83, color: 'from-green-500 to-green-700' },
      ]
    },
    {
      category: 'Cloud & Tools',
      skills: [
        { name: 'AWS', icon: '☁️', rating: 78, color: 'from-orange-400 to-red-500' },
        { name: 'Docker', icon: '🐳', rating: 80, color: 'from-blue-300 to-blue-500' },
        { name: 'Git', icon: '📝', rating: 88, color: 'from-red-400 to-red-600' },
      ]
    }
  ];

  return (
    <motion.div
      className="mt-12 w-full max-w-6xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          className="mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4 + categoryIndex * 0.2, duration: 0.6 }}
        >
          <h3 className="text-sm font-semibold text-[#3949ab] mb-3 text-left">
            {category.category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`relative px-5 py-3 bg-gradient-to-r ${skill.color} text-white rounded-xl text-sm font-semibold shadow-lg backdrop-blur-sm bg-opacity-90 group cursor-pointer`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 1.6 + categoryIndex * 0.2 + index * 0.1, 
                  duration: 0.5 
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{skill.icon}</span>
                  <span>{skill.name}</span>
                  <div className="ml-2 text-xs opacity-90">
                    {skill.rating}%
                  </div>
                </div>
                
                {/* Skill rating bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 rounded-b-xl overflow-hidden">
                  <motion.div
                    className="h-full bg-white/40"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.rating}%` }}
                    transition={{ 
                      delay: 2 + categoryIndex * 0.2 + index * 0.1, 
                      duration: 1,
                      ease: "easeOut"
                    }}
                  />
                </div>

                {/* Tooltip on hover */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  Proficiency: {skill.rating}%
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Enhanced professional stats component with animations
const Stats: React.FC = () => {
  const stats = [
    { 
      label: 'Projects Completed', 
      value: '50+', 
      icon: RocketLaunchIcon,
      color: 'from-blue-500 to-purple-600',
      description: 'Successful projects delivered'
    },
    { 
      label: 'Years Experience', 
      value: '3+', 
      icon: LightBulbIcon,
      color: 'from-yellow-500 to-orange-600',
      description: 'Years of professional development'
    },
    { 
      label: 'Technologies', 
      value: '25+', 
      icon: CpuChipIcon,
      color: 'from-green-500 to-teal-600',
      description: 'Programming languages & frameworks'
    },
    { 
      label: 'Happy Clients', 
      value: '15+', 
      icon: HeartIcon,
      color: 'from-pink-500 to-red-600',
      description: 'Satisfied clients worldwide'
    },
  ];

  const [currentValue, setCurrentValue] = useState<number[]>(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const targetValue = parseInt(stat.value.replace(/\D/g, '')) || 0;
        let current = 0;
        const increment = targetValue / 50;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            current = targetValue;
            clearInterval(timer);
          }
          setCurrentValue(prev => {
            const newValues = [...prev];
            newValues[index] = Math.floor(current);
            return newValues;
          });
        }, 50);
      });
    }
  }, [isVisible]);

  return (
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full max-w-5xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      onViewportEnter={() => setIsVisible(true)}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
          whileHover={{
            scale: 1.05,
            y: -5,
          }}
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity duration-300`} />
          
          {/* Main card */}
          <div className="relative text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center">
              {/* Icon with gradient background */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Animated counter */}
              <div className="text-3xl md:text-4xl font-bold text-[#201d66] mb-2">
                {isVisible ? (
                  <span>
                    {currentValue[index]}
                    {stat.value.includes('+') && '+'}
                    {stat.value.includes('∞') && stat.value === '∞' ? '∞' : ''}
                  </span>
                ) : (
                  '0'
                )}
              </div>
              
              {/* Label */}
              <div className="text-sm font-semibold text-[#3949ab] mb-1">
                {stat.label}
              </div>
              
              {/* Description */}
              <div className="text-xs text-[#3949ab]/70 text-center leading-tight">
                {stat.description}
              </div>
            </div>

            {/* Hover effect border */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const HeroSection: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [globalMousePosition, setGlobalMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Enhanced parallax effects with spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y1 = useSpring(useTransform(scrollY, [0, 300], [0, -50]), springConfig);
  const y2 = useSpring(useTransform(scrollY, [0, 300], [0, -100]), springConfig);
  const opacity = useSpring(useTransform(scrollY, [0, 300], [1, 0.3]), springConfig);

  // Enhanced typewriter effect for dynamic titles
  const titles = [
    'Full Stack Developer',
    'React Specialist', 
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Innovator',
    'Cloud Architect',
    'Code Craftsman',
    'Digital Creator'
  ];
  const currentTitle = useTypewriter(titles, 2500);

  // Enhanced mouse movement tracking for interactive parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Global mouse position for cursor effects
      setGlobalMousePosition({ x: e.clientX, y: e.clientY });
      
      // Local mouse position for hero section parallax
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 25,
          y: (e.clientY - rect.top - rect.height / 2) / 25,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f5f5f5] via-[#e3f2fd] to-[#b3e5fc]"
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e3f2fd]/80 via-[#b3e5fc]/60 to-[#80deea]/40" />
      
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#201d66]/20 via-transparent to-[#3949ab]/20 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#80deea]/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <FloatingElements />

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
      >
        {/* Profile Image with Advanced Effects */}
        <motion.div
          className="relative mb-8 mx-auto w-fit"
          variants={imageVariants}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          <div className="relative">
            {/* Glowing ring effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#201d66] via-[#3949ab] to-[#80deea] rounded-full opacity-30 blur-lg animate-pulse" />
            
            {/* Main profile image */}
            <motion.img
              src="/profile.jpg"
              alt="Pratyush Kumar Pandey"
              className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-white shadow-2xl"
              whileHover={{
                scale: 1.05,
                rotate: 5,
                boxShadow: '0 25px 50px rgba(32,29,102,0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            
            {/* Status indicator */}
            <motion.div
              className="absolute bottom-4 right-4 w-6 h-6 bg-green-400 rounded-full border-3 border-white shadow-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          className="mb-4"
          variants={itemVariants}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-[#201d66] font-medium border border-white/30"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.span
              className="text-2xl"
              animate={{
                rotate: [0, 20, -10, 20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              👋
            </motion.span>
            Hello, I'm
          </motion.span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[#201d66] via-[#3949ab] to-[#80deea] bg-clip-text text-transparent leading-tight"
          variants={itemVariants}
          style={{ transform: `translateY(${y1}px)` }}
        >
          Pratyush Kumar
          <br />
          <span className="text-4xl md:text-6xl lg:text-7xl">Pandey</span>
        </motion.h1>

        {/* Dynamic Subtitle with Typewriter Effect */}
        <motion.div
          className="text-2xl md:text-3xl lg:text-4xl text-[#3949ab] font-semibold mb-8 h-12 flex items-center justify-center"
          variants={itemVariants}
          style={{ transform: `translateY(${y2}px)` }}
        >
          <span className="mr-3">💻</span>
          {currentTitle}
          <motion.span
            className="ml-1 text-[#201d66]"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-[#3949ab]/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          variants={itemVariants}
        >
          Passionate about creating exceptional digital experiences through modern web technologies.
          I specialize in building scalable applications that solve real-world problems and delight users.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#201d66] to-[#3949ab] text-white rounded-full font-semibold text-lg shadow-xl overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(32,29,102,0.3)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <RocketLaunchIcon className="w-5 h-5" />
              Let's Work Together
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3949ab] to-[#80deea] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.button
            onClick={() => setIsVideoModalOpen(true)}
            className="group flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-md text-[#201d66] rounded-full font-semibold text-lg border border-white/30 shadow-lg"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            <PlayIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch My Story
          </motion.button>

          <motion.a
            href="/presume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-md text-[#201d66] rounded-full font-semibold text-lg border border-white/30 shadow-lg"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            <DocumentArrowDownIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-12"
          variants={itemVariants}
        >
          {[
            { 
              href: 'https://github.com/its-pratyushpandey', 
              icon: '🐙', 
              label: 'GitHub',
              color: 'hover:bg-gray-800 hover:text-white'
            },
            { 
              href: 'https://www.linkedin.com/in/pratyush-pandey1/', 
              icon: '💼', 
              label: 'LinkedIn',
              color: 'hover:bg-blue-600 hover:text-white'
            },
            { 
              href: 'https://dev.to/itspratyushpandey', 
              icon: '📝', 
              label: 'Blog',
              color: 'hover:bg-black hover:text-white'
            },
            { 
              href: 'mailto:pratyushpandey.dev@gmail.com', 
              icon: '📧', 
              label: 'Email',
              color: 'hover:bg-red-500 hover:text-white'
            },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg transition-all duration-300 ${social.color}`}
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
            >
              <span className="text-2xl" aria-label={social.label}>
                {social.icon}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Skill Badges */}
        <SkillBadges />

        {/* Stats */}
        <Stats />

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-[#201d66]/60 hover:text-[#201d66] transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDownIcon className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              className="relative bg-white rounded-2xl p-6 max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <PlayIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600">Video coming soon...</p>
                  <p className="text-sm text-gray-500 mt-2">
                    I'm currently working on creating an engaging introduction video that showcases my journey and projects.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
