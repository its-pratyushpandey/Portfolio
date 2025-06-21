import React, { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Nayona Consultancy Service",
    role: "Freelance Web Developer & Oracle NetSuite Trainee",
    period: "Nov 2024 – Present",
    location: "Remote",
    description: [
      "Led the development of a consulting platform with a modern UI, integrating real-time data and client dashboards.",
      "Worked with React, Node.js, and cloud services for scalability.",
      "Implemented secure authentication and streamlined customer communication."
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Firebase", "JWT", "Oracle NetSuite"]
  },
  {
    company: "GDSE Core Team",
    role: "Core Team Member",
    period: "2023 – 2024",
    location: "Onsite",
    description: [
      "Contributed to technical workshops and hackathons.",
      "Mentored junior developers and organized coding events."
    ],
    tech: ["Mentorship", "Event Management", "Teamwork"]
  },
  {
    company: "Personal Projects",
    role: "Full Stack Developer",
    period: "2022 – Present",
    location: "Remote",
    description: [
      "Built and published open-source tools and web apps.",
      "Focused on developer experience and modern UI/UX."
    ],
    tech: ["MERN", "Spring Boot", "Django", "UI/UX"]
  }
];

export const ExperienceSection = (): JSX.Element => {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  return (
    <section id="experience" className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] py-20">
      <div className="container mx-auto px-4 max-w-4xl w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#201d66] mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <div className="flex flex-col gap-8 w-full">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="w-full border-b border-[#e3f2fd] pb-6 mb-6 last:mb-0 last:pb-0 last:border-b-0 group"
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
              tabIndex={0}
              onFocus={() => setHoverIdx(idx)}
              onBlur={() => setHoverIdx(null)}
            >
              <div className="w-full flex flex-col md:flex-row md:items-center md:gap-8 text-left px-2 md:px-8 py-4 md:py-6 cursor-pointer transition-colors group-hover:bg-[#f5f5f5] focus:bg-[#f5f5f5]">
                <span className="text-2xl md:text-3xl font-semibold text-[#201d66]">{exp.company}</span>
                <span className="text-lg md:text-xl text-[#3949ab] md:ml-4">{exp.role}</span>
                <span className="text-base md:text-lg text-[#201d66] font-medium md:ml-4">{exp.period}</span>
                <span className="text-sm md:text-base text-[#3949ab] md:ml-4">{exp.location}</span>
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={hoverIdx === idx ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden px-2 md:px-8"
              >
                {hoverIdx === idx && (
                  <div>
                    <ul className="list-disc pl-5 text-[#3949ab] mb-3 mt-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="mb-1 text-base md:text-lg">{desc}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.tech.map((tech, i) => (
                        <span key={i} className="bg-[#e3f2fd] text-[#3949ab] px-3 py-1 rounded-full text-xs md:text-sm font-medium border border-[#b3e5fc]">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
