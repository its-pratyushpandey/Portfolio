import React, { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

const helpItems = [
	{
    title: "Web Development",
    description:
      "Building modern, scalable, and responsive web applications tailored to business needs. Strong focus on performance, maintainability, and seamless user experience using cutting-edge technologies.",
    icon: "🌐",
    tags: ["React", "Node.js", "TypeScript", "Vite", "TailwindCSS"],
    level: 95, // out of 100
  },
  {
    title: "Full-Stack App Development",
    description:
      "Engineering robust, scalable web and mobile applications with end-to-end architecture. Leveraging modern JavaScript frameworks, cloud services, and databases to build performant full-stack solutions.",
    icon: "💻",
    tags: ["React", "Node.js", "MongoDB", "React Native", "Firebase"],
    level: 93, // out of 100
  },
  {
    title: "Product Interface Design",
    description:
      "Crafting clean, responsive, and user-centered interfaces with a sharp focus on usability, accessibility, and design consistency across platforms. Strong command over component libraries and design tools.",
    icon: "🧩",
    tags: ["Figma", "Material UI", "Tailwind CSS", "Design Systems", "Accessibility"],
    level: 89, // out of 100
  },
  {
    title: "Team Collaboration & Agile Development",
    description:
      "Working seamlessly within cross-functional teams using Agile methodologies. Emphasizing code quality, peer reviews, communication, and rapid delivery through well-structured workflows.",
    icon: "🤝",
    tags: ["Agile", "Scrum", "Git & Version Control", "Code Reviews", "Team Communication"],
    level: 91, // out of 100
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

// Floating SVG decorations (from Hero/Projects)
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

// Helper for lazy icon rendering (simulate for emoji, can be extended for SVGs)
const LazyIcon = ({ icon, label }: { icon: string; label: string }) => (
	<span role="img" aria-label={label} className="select-none">
		{icon}
	</span>
);

export const HowICanHelpSection = (): JSX.Element => {
	const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
	const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

	const handleExpand = (idx: number) => {
		setExpandedIdx(expandedIdx === idx ? null : idx);
	};

	const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

	return (
		<section
			id="help"
			className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] py-0 relative overflow-x-hidden"
			aria-labelledby="expertise-heading"
		>
			<FloatingDecorations />
			{/* Parallax background */}
			<div
				className="absolute inset-0 z-0 bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] opacity-60 animate-gradient-move"
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
									<Suspense
										fallback={
											<span className="text-2xl md:text-3xl mb-1">...</span>
										}
									>
										<LazyIcon
											icon={item.icon}
											label={item.title + " icon"}
										/>
									</Suspense>
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
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-move {
            background-size: 200% 200%;
            animation: gradient-move 8s ease-in-out infinite;
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
					id="expertise-heading"
					className="text-4xl md:text-5xl font-bold text-[#201d66] mb-20 text-center pt-20 font-sans tracking-tight"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					My Expertise
				</motion.h2>
				{/* Timeline/Vertical List with Expandable Details */}
				<motion.div
					className="relative flex flex-col gap-20 w-full before:absolute before:left-6 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#b3e5fc] before:to-[#201d66] before:rounded-full"
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					role="list"
				>
					{helpItems.map((item, idx) => (
						<motion.div
							key={idx}
							className={`relative flex flex-col md:flex-row md:items-center gap-8 group px-0 md:px-8 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#201d66] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e3f2fd] ${
								expandedIdx === idx
									? "bg-white/80 shadow-xl scale-[1.01] ring-2 ring-[#201d66]"
									: "bg-transparent hover:bg-[#e3f2fd]/60"
							} ${hoveredIdx === idx ? "scale-[1.01]" : ""}`}
							variants={itemVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							transition={{ delay: idx * 0.15, type: "spring", stiffness: 60 }}
							tabIndex={0}
							aria-expanded={expandedIdx === idx}
							onClick={() => handleExpand(idx)}
							onKeyDown={(e) =>
								(e.key === "Enter" || e.key === " ") && handleExpand(idx)
							}
							onFocus={() => setHoveredIdx(idx)}
							onBlur={() => setHoveredIdx(null)}
							onMouseEnter={() => setHoveredIdx(idx)}
							onMouseLeave={() => setHoveredIdx(null)}
							role="button"
							aria-label={`Expand details for ${item.title}`}
						>
							{/* Timeline Dot with Icon */}
							<span className="absolute left-0 top-8 md:top-1/2 md:-translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#201d66] flex items-center justify-center shadow-lg z-10 text-2xl select-none transition-transform duration-200 group-hover:scale-110 group-focus:scale-110">
								<Suspense fallback={<span>...</span>}>
									<LazyIcon icon={item.icon} label={item.title + " icon"} />
								</Suspense>
							</span>
							{/* Content - full width, not a card */}
							<div className="ml-14 flex-1 flex flex-col gap-3 bg-transparent rounded-none shadow-none px-0 py-0 transition-transform duration-300 group-hover:scale-[1.01] group-focus:scale-[1.01]">
								<div className="flex flex-col md:flex-row md:items-center md:gap-6 flex-wrap">
									<span className="text-2xl md:text-3xl font-semibold text-[#201d66] font-sans tracking-tight">
										{item.title}
									</span>
									<ul
										className="flex flex-wrap gap-3 mt-2"
										aria-label="Skills and tools"
										role="list"
									>
										{item.tags &&
											item.tags.map((tag, tagIdx) => (
												<li
													key={tagIdx}
													className="bg-[#e3f2fd] text-[#3949ab] px-3 py-1 rounded-full text-xs md:text-sm font-medium border border-[#b3e5fc] cursor-pointer"
													tabIndex={0}
													aria-label={`Skill: ${tag}`}
													role="listitem"
												>
													{tag}
												</li>
											))}
									</ul>
								</div>
								<AnimatePresence initial={false}>
									{(hoveredIdx === idx || expandedIdx === idx) && (
										<motion.div
											key="expanded"
											initial={{ opacity: 0, y: 20, height: 0 }}
											animate={{ opacity: 1, y: 0, height: "auto" }}
											exit={{ opacity: 0, y: 20, height: 0 }}
											transition={{ duration: 0.4 }}
											className="overflow-hidden animate-fade-in"
										>
											<motion.p
												className="mt-4 pl-2 border-l-4 border-[#201d66] bg-[#f5f5f5]/80 rounded-lg py-3 px-4 text-[#3949ab] text-base md:text-lg shadow-sm font-sans"
												initial={false}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
											>
												{item.description}
											</motion.p>
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
