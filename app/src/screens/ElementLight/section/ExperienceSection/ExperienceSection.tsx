import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dummy data for demonstration (replace with your actual data)
const experiences = [
  {
    company: "Nayona Consultancy",
    role: "Full Stack Developer",
    period: "Nov 2024 - Present",
    location: "Remote",
    tech: ["React", "Node.js", "MongoDB", "Express", "Redux", "Firebase", "JWT", "Oracle NetSuite"],
    details: [
      "Spearheaded the development of a MERN stack platform for Oracle EPM provider.",
      "Integrated client website and admin system, improving user experience by 35%.",
      "Streamlined customer communication processes.",
      "Implemented secure authentication using JWT.",
      "Training in Oracle NetSuite and managing client permissions."
    ]
  },
  {
    company: "GDSE Core Team",
    role: "Core Team Member",
    period: "2023 - 2024",
    location: "K L University",
    tech: ["Leadership", "Teamwork", "Event Management"],
    details: [
      "Organized and led multiple tech events and workshops.",
      "Collaborated with cross-functional teams to deliver impactful student programs."
    ]
  },
  {
    company: "Undergraduation",
    role: "Student, B.Tech CSE",
    period: "2022 - Present",
    location: "K L University",
    tech: ["Java", "Python", "C", "Data Structures", "Algorithms"],
    details: [
      "Consistent academic performer with a focus on software engineering and problem solving.",
      "Active participant in coding competitions and hackathons."
    ]
  }
  // Add more experiences as needed
];

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.8,
      when: "beforeChildren",
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ExperienceSection = (): JSX.Element => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] py-0 relative overflow-x-hidden"
    >
      {/* Parallax background */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] opacity-60"
        style={{ backgroundAttachment: "fixed" }}
      />
      <div className="w-full max-w-5xl mx-auto px-0 md:px-8 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#201d66] mb-20 text-center pt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Journey
        </motion.h2>
        {/* Timeline */}
        <motion.div
          className="relative flex flex-col gap-20 w-full before:absolute before:left-6 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#b3e5fc] before:to-[#201d66] before:rounded-full"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative flex flex-col md:flex-row md:items-center gap-8 group px-0 md:px-8"
              variants={itemVariants}
              tabIndex={0}
              aria-expanded={expandedIdx === idx}
              onFocus={() => setExpandedIdx(idx)}
              onBlur={() => setExpandedIdx(null)}
              onMouseEnter={() => setExpandedIdx(idx)}
              onMouseLeave={() => setExpandedIdx(null)}
            >
              {/* Timeline Dot */}
              <span className="absolute left-0 top-8 md:top-1/2 md:-translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#201d66] flex items-center justify-center shadow-lg z-10"></span>
              {/* Experience Content - full width, no card */}
              <div className="ml-14 flex-1 flex flex-col gap-3 bg-transparent rounded-none shadow-none px-0 py-0 transition-transform duration-300 group-hover:scale-[1.01] group-focus:scale-[1.01]">
                <div className="flex flex-col md:flex-row md:items-center md:gap-6 flex-wrap">
                  <span className="text-2xl md:text-3xl font-semibold text-[#201d66]">{exp.company}</span>
                  <span className="text-lg md:text-xl text-[#3949ab] md:ml-4 flex items-center gap-2">{exp.role}</span>
                  <span className="text-base md:text-lg text-[#201d66] font-medium md:ml-4">{exp.period}</span>
                  <span className="text-sm md:text-base text-[#3949ab] md:ml-4">{exp.location}</span>
                </div>
                {/* Tech Stack (no icons, no duplicates) */}
                <div className="flex flex-wrap gap-3 mt-2">
                  {[...new Set(exp.tech)].map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#e3f2fd] text-[#3949ab] px-3 py-1 rounded-full text-xs md:text-sm font-medium border border-[#b3e5fc] cursor-pointer"
                      tabIndex={0}
                      aria-label={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Expandable Details */}
                <AnimatePresence>
                  {expandedIdx === idx && (
                    <motion.ul
                      className="mt-4 pl-2 border-l-4 border-[#201d66] bg-[#f5f5f5]/80 rounded-lg py-3 px-4 text-[#3949ab] text-base md:text-lg shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                    >
                      {exp.details.map((d, i) => (
                        <li key={i} className="mb-2 last:mb-0 list-disc ml-4">
                          {d}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
