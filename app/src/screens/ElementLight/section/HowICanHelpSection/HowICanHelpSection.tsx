import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const helpItems = [
	{
		title: "Web Development",
		description:
			"Building modern, scalable, and responsive web applications tailored to your business needs.",
		icon: "🌐",
	},
	{
		title: "UI/UX Design",
		description:
			"Designing intuitive and engaging user interfaces for delightful user experiences.",
		icon: "🎨",
	},
	{
		title: "Consulting & Mentorship",
		description:
			"Guiding teams and individuals in best practices, code reviews, and project architecture.",
		icon: "🤝",
	},
	{
		title: "Automation & Integration",
		description:
			"Automating workflows and integrating third-party services to boost productivity.",
		icon: "⚡",
	},
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

export const HowICanHelpSection = (): JSX.Element => (
	<section
		id="how-i-can-help"
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
				How I Can Help You
			</motion.h2>
			{/* Timeline style layout, no cards */}
			<motion.div
				className="relative flex flex-col gap-20 w-full before:absolute before:left-6 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#b3e5fc] before:to-[#201d66] before:rounded-full"
				variants={sectionVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				{helpItems.map((item, idx) => (
					<motion.div
						key={idx}
						className="relative flex flex-col md:flex-row md:items-center gap-8 group px-0 md:px-8"
						variants={itemVariants}
						tabIndex={0}
					>
						{/* Timeline Dot */}
						<span className="absolute left-0 top-8 md:top-1/2 md:-translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#201d66] flex items-center justify-center shadow-lg z-10 text-2xl select-none">
							{item.icon}
						</span>
						{/* Content - full width, no card */}
						<div className="ml-14 flex-1 flex flex-col gap-3 bg-transparent rounded-none shadow-none px-0 py-0 transition-transform duration-300 group-hover:scale-[1.01] group-focus:scale-[1.01]">
							<div className="flex flex-col md:flex-row md:items-center md:gap-6 flex-wrap">
								<span className="text-2xl md:text-3xl font-semibold text-[#201d66]">
									{item.title}
								</span>
							</div>
							<AnimatePresence>
								<motion.p
									className="mt-4 pl-2 border-l-4 border-[#201d66] bg-[#f5f5f5]/80 rounded-lg py-3 px-4 text-[#3949ab] text-base md:text-lg shadow-sm"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 20 }}
								>
									{item.description}
								</motion.p>
							</AnimatePresence>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	</section>
);

export default HowICanHelpSection;
