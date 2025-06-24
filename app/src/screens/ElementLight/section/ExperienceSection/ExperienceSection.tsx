import React, { useState } from "react";
import { motion } from "framer-motion";

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
		],
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
		],
	},
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
		],
	},
	{
		company: "Smart India Hackathon",
		role: "B.Tech CSE Student",
		period: "2023 – 2024",
		location: "Vaddeswaram, Andhra Pradesh",
		tech: ["HTML", "CSS", "Javascript", "C", "Data Structures", "Algorithms"],
		details: [
			"Strong academic focus on core computer science subjects.",
			"Hands-on experience with problem solving and coding challenges.",
			"Participated in hackathons and technical competitions.",
			"Developing a solid foundation in software development.",
		],
	},
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
		],
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

export const ExperienceSection = (): JSX.Element => {
	const [selectedIdx, setSelectedIdx] = useState<number>(0);
	const selectedExp = experiences[selectedIdx];

	return (
		<section
			id="experience"
			className="w-full min-h-[100vh] flex flex-col md:flex-row items-stretch justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] py-0 relative overflow-x-hidden"
		>
			{/* Parallax background */}
			<div
				className="absolute inset-0 z-0 bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] opacity-60"
				style={{ backgroundAttachment: "fixed" }}
			/>
			{/* Sidebar Selector as vertical stepper, slightly right from edge */}
			<aside className="relative z-10 md:w-1/4 w-full flex md:flex-col flex-row md:items-start items-center md:justify-center justify-start bg-transparent md:py-24 py-4 px-2 md:px-6 overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-r border-[#b3e5fc]/40 md:ml-20 ml-4">
				<nav className="flex md:flex-col flex-row w-full md:w-auto gap-0">
					{experiences.map((exp, idx) => (
						<motion.button
							key={exp.company}
							className={
								`group flex items-center md:items-start px-2 py-2 md:px-4 md:py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#201d66] focus:ring-offset-2 bg-transparent text-[#201d66] md:rounded-l-xl rounded-xl md:rounded-r-none`}
							onClick={() => setSelectedIdx(idx)}
							aria-label={`Show details for ${exp.company}`}
							tabIndex={0}
							onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setSelectedIdx(idx)}
							style={{ minWidth: '140px', marginBottom: 0, marginLeft: 0, marginRight: 0 }}
							whileHover={{ scale: 1.04, x: 6 }}
							whileTap={{ scale: 0.98 }}
							initial="hidden"
							animate="visible"
							variants={itemVariants}
						>
							<span className="mr-3 flex items-center justify-center w-8 h-8 rounded-full font-bold text-base md:text-lg border-2 border-[#b3e5fc] bg-[#e3f2fd] transition">{String(idx + 1).padStart(2, '0')}</span>
							<span className="flex flex-col items-start text-left">
								<span className="font-semibold text-sm md:text-base truncate max-w-[120px]">{exp.company}</span>
								<span className="text-xs md:text-sm opacity-70 font-normal truncate max-w-[120px]">{exp.role.split('–')[0]}</span>
								<span className="text-xs md:text-sm opacity-60 font-medium mt-0.5">{exp.period}</span>
							</span>
						</motion.button>
					))}
				</nav>
			</aside>
			{/* Main Experience Details */}
			<main className="relative z-10 flex-1 flex flex-col items-center justify-center px-2 md:px-12 py-12 md:py-24 min-h-[60vh]">
				<motion.div
					className="w-full max-w-2xl mx-auto flex flex-col gap-6"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					<div className="flex items-center gap-3 mb-2">
						<span className="inline-block bg-[#201d66] text-white rounded-full px-3 py-1 text-xs font-bold tracking-widest shadow">{String(selectedIdx + 1).padStart(2, '0')}</span>
						<h2 className="text-2xl md:text-3xl font-extrabold text-[#201d66] leading-tight">{selectedExp.company}</h2>
						<span className="text-xs md:text-sm text-[#3949ab] font-medium bg-[#e3f2fd] rounded px-2 py-1 ml-auto">{selectedExp.period}</span>
					</div>
					<div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-1 mb-2">
						<span className="text-base md:text-lg text-[#3949ab] font-semibold">{selectedExp.role}</span>
						<span className="text-sm md:text-base text-[#201d66] font-medium">{selectedExp.location}</span>
					</div>
					<div className="flex flex-wrap gap-2 mt-2">
						{[...new Set(selectedExp.tech)].map((tech, i) => (
							<span
								key={i}
								className="bg-[#e3f2fd] text-[#3949ab] px-2 py-1 rounded text-xs md:text-sm font-medium border border-[#b3e5fc] shadow-sm"
							>
								{tech}
							</span>
						))}
					</div>
					<ul className="list-disc pl-6 text-[#201d66] text-sm md:text-base space-y-1 mt-3">
						{selectedExp.details.map((detail, i) => (
							<li key={i}>{detail}</li>
						))}
					</ul>
				</motion.div>
			</main>
		</section>
	);
};
