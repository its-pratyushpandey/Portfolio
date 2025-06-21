import React from "react";
import { motion } from "framer-motion";

const helpItems = [
  {
    title: "Web Development",
    description: "Building modern, scalable, and responsive web applications tailored to your business needs.",
    icon: "🌐"
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user interfaces for delightful user experiences.",
    icon: "🎨"
  },
  {
    title: "Consulting & Mentorship",
    description: "Guiding teams and individuals in best practices, code reviews, and project architecture.",
    icon: "🤝"
  },
  {
    title: "Automation & Integration",
    description: "Automating workflows and integrating third-party services to boost productivity.",
    icon: "⚡"
  }
];

export const HowICanHelpSection = (): JSX.Element => (
  <section id="how-i-can-help" className="w-full py-20 bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd]">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[#201d66] mb-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        How I Can Help You
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {helpItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white/90 rounded-2xl shadow-xl p-8 border border-[#e3f2fd] flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(32,29,102,0.13)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="text-5xl mb-4">{item.icon}</span>
            <h3 className="text-2xl font-semibold text-[#201d66] mb-2">{item.title}</h3>
            <p className="text-[#3949ab] text-base">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowICanHelpSection;
