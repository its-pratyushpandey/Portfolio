import React from "react";
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

export const ExperienceSection = (): JSX.Element => (
  <section className="w-full py-20 bg-[#f5f5f5]">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[#201d66] mb-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Professional Experience
      </motion.h2>
      <div className="flex flex-col gap-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-white/90 rounded-2xl shadow-xl p-8 border border-[#e3f2fd]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 32px 0 rgba(32,29,102,0.13)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <div className="flex flex-col">
                <span className="text-2xl font-semibold text-[#201d66]">{exp.company}</span>
                <span className="text-lg text-[#3949ab]">{exp.role}</span>
              </div>
              <div className="flex flex-col md:items-end">
                <span className="text-base text-[#201d66] font-medium">{exp.period}</span>
                <span className="text-sm text-[#3949ab]">{exp.location}</span>
              </div>
            </div>
            <ul className="list-disc pl-5 text-[#3949ab] mb-3">
              {exp.description.map((desc, i) => (
                <li key={i} className="mb-1 text-base">{desc}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.tech.map((tech, i) => (
                <span key={i} className="bg-[#e3f2fd] text-[#3949ab] px-3 py-1 rounded-full text-xs font-medium border border-[#b3e5fc]">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
