import React, { useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Separator } from "../../../../components/ui/separator";
import { Button } from "../../../../components/ui/button";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaDownload, FaEnvelope, FaStar, FaAward, FaUserGraduate, FaPaintBrush, FaBookOpen, FaMusic } from 'react-icons/fa';

// Data for programming languages
const programmingLanguages = ["Java", "C", "Python", "JavaScript"];

// Data for tech stacks
const techStacks = [
  "SpringBoot",
  "MySql",
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "Django",
  "PostgreSQL",
  "Git"
];

// Data for toolbox
const toolbox = [
  "Figma",
  "Gsap",
  "TailwindCSS",
  "ShadCN",
  "Firebase",
  "UI/UX Design"
];

// Data for timeline items
const timelineItems = [
  {
    id: "01",
    title: "Nayona Consultancy",
    period: "November 2024 - Present",
    highlighted: true
  },
  {
    id: "02",
    title: "GDSE Core Team",
    period: "2023 - 2024"
  },
  {
    id: "03",
    title: "Undergraduation",
    period: "2022 - present"
  },
  {
    id: "04",
    title: "Higher Secondary Certificate (HSC)",
    period: "2020 - 2022"
  },
  {
    id: "05",
    title: "Secondary School Certificate (SSC)",
    period: "2020"
  }
];

// Data for skills used in job
const jobSkills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Redux",
  "Firebase",
  "JWT",
  "Oracle NetSuite"
];

// Data for key achievements
const keyAchievements = [
  "Spearheaded the development of a MERN stack platform for Oracle EPM provider",
  "Integrated client website and admin system, improving user experience by 35%",
  "Streamlined customer communication processes",
  "Implemented secure authentication using JWT",
  "Training in Oracle NetSuite and managing client permissions"
];

// Data for specialties
const specialties = [
  {
    id: "01",
    title: "Full Stack Development",
    description: "Building comprehensive web applications with modern tech stacks that are responsive, scalable and user-friendly.",
    skills: [
      "MERN Stack Applications",
      "Spring Boot + React Solutions",
      "RESTful API Development"
    ]
  },
  {
    id: "02",
    title: "Web Design & Frontend",
    description: "Crafting engaging user interfaces with clean code and modern design principles for exceptional user experiences.",
    skills: [
      "Responsive UI Development",
      "Interactive Animations with GSAP",
      "Tailwind CSS Implementations"
    ]
  },
  {
    id: "03",
    title: "Problem Solving",
    description: "Solving complex problems with efficient algorithms and data structures to deliver optimal technical solutions.",
    skills: [
      "Algorithm Optimization",
      "Technical Architecture Design",
      "Performance Enhancement"
    ]
  },
  {
    id: "04",
    title: "Project Management",
    description: "Leading projects from conception to completion with structured approaches and collaborative workflows.",
    skills: [
      "Agile Development Practices",
      "Version Control with Git",
      "CI/CD Pipeline Integration"
    ]
  }
];

// Data for tech badges
const techBadges = [
  "MERN Stack",
  "Spring Boot",
  "React",
  "CI/CD",
  "UI/UX",
  "Web Development"
];

// Fun facts/interests data
const funFacts = [
  { icon: <FaPaintBrush className="text-[#80deea] w-7 h-7" />, label: 'Artist & Painter' },
  { icon: <FaBookOpen className="text-[#3949ab] w-7 h-7" />, label: 'Book Reviewer' },
  { icon: <FaMusic className="text-[#201d66] w-7 h-7" />, label: 'Music Lover' },
  { icon: <FaUserGraduate className="text-[#b3e5fc] w-7 h-7" />, label: 'CS Undergrad' },
];

// Floating SVG decorations (like in Hero/Projects)
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

export const AboutMeSection = (): JSX.Element => {
  // 3D tilt effect for profile image
  const profileRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useTransform(y, [0, 1], [18, -18]);
  const rotateY = useTransform(x, [0, 1], [-18, 18]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = profileRef.current?.getBoundingClientRect();
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

  // Add micro-interaction config
  const microInteraction = {
    whileHover: { scale: 1.08, boxShadow: '0 8px 32px 0 rgba(32,29,102,0.13)' },
    whileTap: { scale: 0.96 },
    whileFocus: { scale: 1.04 },
  };

  return (
    <section className="w-full py-16 relative bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] overflow-hidden">
      <FloatingDecorations />
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Animated Section Heading */}
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-[#201d66] mb-16 drop-shadow-lg flex items-center gap-4 justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <FaStar className="w-10 h-10 md:w-14 md:h-14 text-[#80deea] animate-spin-slow" />
          About Me
        </motion.h2>
        {/* Intro Section with 3D tilt and animated buttons */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-20">
          <div className="flex-1 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h2 className="font-normal text-[48px] md:text-[70px] tracking-[-2.16px] leading-[1.1] text-manishrajnetlifyappblack mb-6">
                A brief intro, who am I?
              </h2>
              <div className="flex flex-col gap-6 text-[22px] md:text-[32px] text-manishrajnetlifyappblack">
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>I am a student, developer, and a pre-final year undergrad pursuing a degree in Computer Science and Engineering from K L Deemed to be University, India.</motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>I am passionate about problem solving, web development, and design. I am artistic, creative, and a problem solver. I love to design and code.💙</motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>I am good at crafting solutions, critical thinking, and have a good understanding of data structures and algorithms. I have gained experience in full-stack web development using SpringBoot with React, MERN stack & Python Django. Currently I am diving deep into CS fundamentals in 3rd year of my undergraduation.</motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>I love to sketch, paint, and read books. In my leisure time I like to stay updated on new tech and review books on my <a href="https://www.instagram.com/aka_thelostbookmark/" rel="noopener noreferrer" target="_blank" className="underline">Instagram</a> and share my insights on <a href="https://www.youtube.com/channel/UCmhi2NSl9RdC5biFARM3nsw" rel="noopener noreferrer" target="_blank" className="underline">YouTube</a> 📸</motion.p>
              </div>
              <div className="flex gap-4 mt-8">
                <motion.a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-[#201d66] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#3949ab] transition focus:outline-none focus:ring-2 focus:ring-[#201d66]"
                  {...microInteraction}
                >
                  <FaDownload className="w-5 h-5" /> Download Resume
                </motion.a>
                <motion.a
                  href="mailto:pratyush.me.ai@gmail.com"
                  className="inline-flex items-center gap-2 bg-[#e3f2fd] text-[#201d66] px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#b3e5fc] transition focus:outline-none focus:ring-2 focus:ring-[#201d66]"
                  {...microInteraction}
                >
                  <FaEnvelope className="w-5 h-5" /> Contact Me
                </motion.a>
              </div>
            </motion.div>
          </div>
          <motion.div
            ref={profileRef}
            className="flex-1 flex items-center justify-center"
            style={{ perspective: 1200 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-3xl shadow-2xl border-4 border-[#e3f2fd] bg-cover bg-center bg-[url(https://c.animaapp.com/mc46fmevF9sLme/img/manish-s-profile-picture.png)]"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-full rounded-3xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ background: 'radial-gradient(circle at 60% 40%, #b3e5fc 0%, transparent 70%)' }}
              />
            </motion.div>
          </motion.div>
        </div>
        {/* Fun Facts Section */}
        <div className="mt-16 flex flex-wrap gap-8 justify-center">
          {funFacts.map((fact, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center bg-white/80 rounded-xl shadow-lg px-8 py-6 border border-[#e3f2fd] min-w-[180px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(32,29,102,0.13)' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {fact.icon}
              <span className="mt-3 text-lg font-medium text-[#201d66] text-center">{fact.label}</span>
            </motion.div>
          ))}
        </div>
        {/* Skills Section with animated badges */}
        <div className="mt-32 flex flex-col gap-20">
          <motion.h3
            className="text-4xl md:text-5xl font-bold text-[#201d66] mb-10 flex items-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <svg className="w-8 h-8 text-[#80deea]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
            My Skills
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Programming Languages */}
            <motion.div
              className="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-[#e3f2fd]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(32,29,102,0.13)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h4 className="text-2xl font-semibold text-[#201d66] mb-2 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#3949ab]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 01-8 0"/><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 004-4h0a4 4 0 004 4v2"/></svg>
                Programming Languages
              </h4>
              <div className="flex flex-wrap gap-3">
                {programmingLanguages.map((lang, i) => (
                  <motion.span
                    key={lang}
                    className="bg-[#e3f2fd] text-[#3949ab] px-4 py-2 rounded-full text-base font-medium shadow"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            {/* Tech Stacks */}
            <motion.div
              className="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-[#e3f2fd]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(32,29,102,0.13)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h4 className="text-2xl font-semibold text-[#201d66] mb-2 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#3949ab]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
                Tech Stacks
              </h4>
              <div className="flex flex-wrap gap-3">
                {techStacks.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="bg-[#e3f2fd] text-[#3949ab] px-4 py-2 rounded-full text-base font-medium shadow"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            {/* Toolbox */}
            <motion.div
              className="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-[#e3f2fd]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(32,29,102,0.13)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h4 className="text-2xl font-semibold text-[#201d66] mb-2 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#3949ab]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/></svg>
                Toolbox
              </h4>
              <div className="flex flex-wrap gap-3">
                {toolbox.map((tool, i) => (
                  <motion.span
                    key={tool}
                    className="bg-[#e3f2fd] text-[#3949ab] px-4 py-2 rounded-full text-base font-medium shadow"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        {/* Timeline & Experience Section with motion */}
        <div className="mt-32 flex flex-col md:flex-row gap-16">
          {/* Timeline */}
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[552px]">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute left-0 w-full rounded-xl p-5 ${item.highlighted ? 'bg-[#b3e5fc]/40 shadow-lg' : 'bg-[#e3f2fd]/60'}`}
                  style={{ top: index * 112 + (index > 0 ? 20 : 0) }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[38px] leading-[57px] ${item.highlighted ? 'text-[#201d66]' : 'text-[#3949ab] opacity-70'}`}>{item.id}</span>
                    <div className="flex flex-col gap-1">
                      <h4 className={`text-[23px] tracking-[-0.72px] leading-9 font-medium ${item.highlighted ? 'text-[#201d66]' : 'text-[#3949ab]'}`}>{item.title}</h4>
                      <p className="text-base text-[#3949ab]">{item.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Experience Details */}
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-10 bg-[#e3f2fd]/60 backdrop-blur-sm shadow-xl">
              <CardContent className="p-0 space-y-8">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[38px] font-bold tracking-[-1.32px] leading-[66px] text-[#201d66]">Nayona Consultancy</h3>
                    <p className="text-[16px] font-medium leading-[26px] text-[#3949ab]">Freelance Web Developer & Oracle NetSuite Trainee</p>
                    <div className="flex items-center pt-2">
                      <svg className="w-6 h-6 text-[#80deea] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87"/><path d="M9 20H4v-2a4 4 0 013-3.87"/><circle cx="12" cy="7" r="4"/></svg>
                      <span className="text-[14px] font-medium text-[#3949ab]">Remote</span>
                    </div>
                  </div>
                  <Badge className="bg-[#b3e5fc] text-[#201d66] text-xs tracking-[-0.30px] px-3 py-1 rounded-full">November 2024 - Present</Badge>
                </div>
                <p className="text-[21px] leading-[39px] text-[#3949ab]">Full-Stack Development: Spearheaded the development of a MERN stack platform for Oracle EPM provider, Nayona Consultancy, integrating a client website and admin system, resulting in a streamlined user experience, and improved customer communication.</p>
                <div className="flex flex-col gap-4 pt-2">
                  <h4 className="text-[16px] font-medium tracking-[0.80px] leading-6 text-[#201d66]">SKILLS & TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {jobSkills.map((skill, index) => (
                      <Badge key={index} className="px-[17px] py-[9px] text-[15px] font-medium bg-[#b3e5fc]/60 text-[#201d66] border border-[#90c9f833] rounded-lg">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4 pt-2">
                  <h4 className="text-[16px] font-medium tracking-[0.80px] leading-6 text-[#201d66]">KEY ACHIEVEMENTS</h4>
                  <div className="flex flex-col gap-3">
                    {keyAchievements.map((achievement, index) => (
                      <div key={index} className="flex items-start">
                        <span className="pr-3 text-xl text-[#80deea]">→</span>
                        <p className="text-[16px] leading-[26px] text-[#3949ab]">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        {/* Specialties Section with animated cards */}
        <div className="mt-32">
          <motion.h3
            className="text-4xl md:text-5xl font-bold text-[#201d66] mb-10 flex items-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <svg className="w-8 h-8 text-[#80deea]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
            Specialties
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {specialties.map((specialty: typeof specialties[0], index: number) => (
              <motion.div
                key={specialty.id}
                className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-[#e3f2fd]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(32,29,102,0.13)' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl font-bold text-[#80deea]">({specialty.id})</span>
                  <h4 className="text-2xl font-semibold text-[#201d66]">{specialty.title}</h4>
                  <svg className="w-8 h-8 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                </div>
                <p className="text-lg text-[#3949ab] opacity-80">{specialty.description}</p>
                <div className="flex flex-col gap-2">
                  {specialty.skills.map((skill: string, skillIndex: number) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                      <span className="text-lg font-bold text-[#80deea]">{skillIndex < 9 ? `0${skillIndex + 1}` : skillIndex + 1}</span>
                      <span className="text-base text-[#3949ab]">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Tech Badges Section */}
        <div className="mt-24 flex flex-wrap gap-4 justify-center">
          {techBadges.map((badge, index) => (
            <motion.span
              key={index}
              className="px-5 py-2 text-base font-medium bg-[#3949ab]/10 text-[#201d66] border border-[#7985ca4c] rounded-full shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
            >
              {badge}
            </motion.span>
          ))}
        </div>
        {/* Quote Section */}
        <div className="w-full py-24">
          <div className="max-w-4xl w-full mx-auto relative">
            <div className="absolute -top-10 left-0 opacity-20 w-[45px]">
              <span className="text-[#90caf9] text-9xl leading-[128px] font-normal">&#34;</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <blockquote className="text-[28px] font-light text-center leading-[52px] text-[#3949ab]">
                Code is like poetry; it should be elegant, concise, and tell a story<br />that others can understand.
              </blockquote>
              <cite className="text-[16px] font-normal text-center text-[#80deea]">— My Development Philosophy</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
