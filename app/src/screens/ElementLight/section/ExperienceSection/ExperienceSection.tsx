import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dummy data for demonstration (replace with your actual data)
const experiences = [
  {
  company: "Internship",
  role: "Software Developer Intern – Tech Solutions",
  period: "2024",
  location: "Remote",
  tech: ["Python", "Django", "PostgreSQL", "REST API"],
  details: [
    "Contributed to the development of a web application for data analytics.",
    "Implemented RESTful APIs for data retrieval and manipulation.",
    "Collaborated with senior developers on code reviews and feature enhancements.",
  ]
},
  {
  company: "Personal Project",
  role: "Full Stack Developer – NextHire",
  period: "2024",
  location: "Remote",
  tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Redux"],
  details: [
    "Developed a recruitment platform with user authentication and role-based access.",
    "Implemented job posting, application tracking, and admin dashboard features.",
    "Integrated secure backend APIs and dynamic frontend components for smooth UX.",
  ]
}
, 

{
  company: "Academic Project",
  role: "Project Lead – Video Streaming Platform",
  period: "2024",
  location: "K L University",
  tech: ["Java", "Spring Boot", "MySQL", "REST API"],
  details: [
    "Led the development of a video streaming web application using Spring Boot.",
    "Designed RESTful APIs for video upload, playback, and user management.",
    "Managed project workflow, code reviews, and team coordination.",
  ]
}

, 


{
  company: "Smart India Hackathon",
  role: "B.Tech CSE Student",
  period: "2023 – 2024",
  location: "Vaddeswaram, Andhra Pradesh",
  tech: ["HTML","CSS","Javascript", "C", "Data Structures", "Algorithms"],
  details: [
    "Strong academic focus on core computer science subjects.",
    "Hands-on experience with problem solving and coding challenges.",
    "Participated in hackathons and technical competitions.",
    "Developing a solid foundation in software development."
  ]
}
, 

  {
  company: "Senior Secondary Education",
  role: "Student",
  period: "2021 – 2023",
  location: "Sedhan",
  tech: ["C", "HTML", "CSS", "JavaScript"],
  details: [
    "Built foundational skills in C, HTML, CSS, and JavaScript.",
  "Created basic websites, sparking interest in web development.",
  "Maintained strong academic performance in computer science.",
    
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
      className="w-full min-h-[140vh] md:min-h-[120vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] py-16 md:py-28 relative overflow-x-hidden"
    >
      {/* Parallax background */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] opacity-60"
        style={{ backgroundAttachment: "fixed" }}
      />
      <div className="w-full max-w-5xl mx-auto px-2 md:px-8 relative z-10">
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
          className="relative flex flex-col gap-24 md:gap-28 w-full before:absolute before:left-6 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#b3e5fc] before:to-[#201d66] before:rounded-full"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative flex flex-col md:flex-row md:items-center gap-10 md:gap-12 group px-0 md:px-8"
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
              <div className="ml-14 flex-1 flex flex-col gap-4 bg-transparent rounded-none shadow-none px-0 py-0 transition-transform duration-300 group-hover:scale-[1.01] group-focus:scale-[1.01]">
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
                      className="mt-2 pl-4 list-disc text-[#201d66] text-base md:text-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
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
