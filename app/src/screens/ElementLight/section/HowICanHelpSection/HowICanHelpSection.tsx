import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const helpItems = [
	{
		title: "Web Development",
		description:
			"Building modern, scalable, and responsive web applications tailored to your business needs.",
		icon: "🌐",
		tags: ["React", "Node.js", "TypeScript", "Vite", "TailwindCSS"],
		tooltip: "Modern web apps, full-stack solutions, and performance.",
	},
	{
		title: "UI/UX Design",
		description:
			"Designing intuitive and engaging user interfaces for delightful user experiences.",
		icon: "🎨",
		tags: ["Figma", "Wireframes", "Accessibility", "Prototyping"],
		tooltip: "User-centered design, wireframes, and prototyping.",
	},
	{
		title: "Consulting & Mentorship",
		description:
			"Guiding teams and individuals in best practices, code reviews, and project architecture.",
		icon: "🤝",
		tags: ["Best Practices", "Code Reviews", "Architecture", "Teamwork"],
		tooltip: "Mentoring, code quality, and scalable architecture.",
	},
	{
		title: "Automation & Integration",
		description:
			"Automating workflows and integrating third-party services to boost productivity.",
		icon: "⚡",
		tags: ["APIs", "CI/CD", "Scripting", "Integrations"],
		tooltip: "Workflow automation and third-party integrations.",
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

export const HowICanHelpSection = (): JSX.Element => {
	const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
	const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

	const handleExpand = (idx: number) => {
		setExpandedIdx(expandedIdx === idx ? null : idx);
	};

	return (
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
				{/* Animated Marquee/Scrolling Expertise */}
				<div className="w-full overflow-x-hidden mb-12 mt-8">
					<div className="relative w-full h-[60px] md:h-[80px]">
						<div
							className="absolute left-0 top-0 flex items-center gap-10 h-full animate-marquee-expertise"
							style={{ minWidth: "200%", width: "max-content" }}
						>
							{[...helpItems, ...helpItems].map((item, idx) => (
								<div
									key={item.title + idx}
									className="flex flex-col items-center min-w-[120px] md:min-w-[180px] px-2"
								>
									<span
										className="text-2xl md:text-3xl mb-1 select-none relative"
									>
										{item.icon}
									</span>
									<span
										className="text-base md:text-lg text-[#201d66] font-semibold text-center whitespace-nowrap relative"
									>
										{item.title}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
				<style>{`
          @keyframes marquee-expertise {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-expertise {
            animation: marquee-expertise 18s linear infinite;
            will-change: transform;
          }
          @media (max-width: 768px) {
            .animate-marquee-expertise { animation-duration: 30s; }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.2s ease-in;
          }
        `}</style>

				<motion.h2
					className="text-4xl md:text-5xl font-bold text-[#201d66] mb-20 text-center pt-20"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					My Expertise
				</motion.h2>
				{/* Full-width, professional, responsive timeline with expandable details */}
				<motion.div
					className="relative flex flex-col gap-12 md:gap-20 w-full before:absolute before:left-6 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#b3e5fc] before:to-[#201d66] before:rounded-full"
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{helpItems.map((item, idx) => (
						<motion.div
							key={idx}
							className={`relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 px-0 md:px-8 transition-all duration-300 cursor-pointer group focus:outline-none ${
								expandedIdx === idx
									? "bg-white/80 shadow-xl scale-[1.01]"
									: "bg-transparent"
							}`}
							variants={itemVariants}
							tabIndex={0}
							onClick={() => handleExpand(idx)}
							onKeyDown={(e) =>
								(e.key === "Enter" || e.key === " ") &&
								handleExpand(idx)
							}
							aria-expanded={expandedIdx === idx}
							role="button"
						>
							{/* Timeline Dot */}
							<span className="absolute left-0 top-8 md:top-1/2 md:-translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#201d66] flex items-center justify-center shadow-lg z-10 text-2xl select-none">
								{item.icon}
							</span>
							{/* Content - full width, not a card */}
							<div className="ml-14 flex-1 flex flex-col gap-2 md:gap-3 bg-transparent rounded-none shadow-none px-0 py-0">
								<div className="flex flex-col md:flex-row md:items-center md:gap-6 flex-wrap">
									<span
										className="text-2xl md:text-3xl font-semibold text-[#201d66] relative"
									>
										{item.title}
									</span>
									{/* Badges/Tags */}
									<div className="flex flex-wrap gap-2 mt-2">
										{item.tags &&
											item.tags.map((tag, tagIdx) => (
												<span
													key={tagIdx}
													className="bg-[#e3f2fd] text-[#3949ab] px-3 py-1 rounded-full text-xs md:text-sm font-medium border border-[#b3e5fc] cursor-pointer hover:bg-[#b3e5fc] transition-colors"
												>
													{tag}
												</span>
											))}
									</div>
								</div>
								<AnimatePresence initial={false}>
									{expandedIdx === idx && (
										<motion.div
											key="expanded"
											initial={{ opacity: 0, y: 20, height: 0 }}
											animate={{ opacity: 1, y: 0, height: "auto" }}
											exit={{ opacity: 0, y: 20, height: 0 }}
											transition={{ duration: 0.4 }}
											className="overflow-hidden"
										>
											<motion.p
												className="mt-4 pl-2 border-l-4 border-[#201d66] bg-[#f5f5f5]/80 rounded-lg py-3 px-4 text-[#3949ab] text-base md:text-lg shadow-sm"
												initial={false}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
											>
												{item.description}
											</motion.p>
											{/* Example: Add more details, case studies, or links here */}
											<div className="mt-2 flex flex-col gap-2 md:gap-3">
												<span className="text-sm md:text-base text-[#201d66] font-medium">
													Case Study:{" "}
													<a
														href="#"
														className="underline hover:text-blue-700 transition-colors"
													>
														See Example Project
													</a>
												</span>
												<span className="text-sm md:text-base text-[#201d66] font-medium">
													Related:{" "}
													<a
														href="#"
														className="underline hover:text-blue-700 transition-colors"
													>
														Portfolio Link
													</a>
												</span>
											</div>
										</motion.div>
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

export default HowICanHelpSection;
