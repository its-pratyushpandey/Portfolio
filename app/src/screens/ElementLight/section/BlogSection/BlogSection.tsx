import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts, blogCategories, getRecentBlogs, getFeaturedBlogs } from "../../../../data/blogData";
import { BlogPost, BlogFilters } from "../../../../types/blog";

interface BlogSectionProps {
  onBlogSelect?: (blog: BlogPost) => void;
}

// Get recent blog posts for display
const blogs = getRecentBlogs(6);

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

// Advanced animation variants
const containerVariants = {
	hidden: { 
		opacity: 0,
		scale: 0.95,
		y: 50
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.6, -0.05, 0.01, 0.99],
			staggerChildren: 0.1,
			delayChildren: 0.2
		}
	}
};

const cardVariants = {
	hidden: { 
		opacity: 0, 
		y: 60,
		scale: 0.95,
		rotateX: 15
	},
	visible: { 
		opacity: 1, 
		y: 0,
		scale: 1,
		rotateX: 0,
		transition: { 
			duration: 0.6,
			ease: [0.25, 0.46, 0.45, 0.94]
		} 
	},
	hover: {
		y: -8,
		scale: 1.02,
		rotateY: 5,
		z: 50,
		transition: {
			duration: 0.3,
			ease: "easeOut"
		}
	}
};

const filterButtonVariants = {
	inactive: { 
		scale: 1,
		backgroundColor: "rgba(255,255,255,0.8)",
		boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
	},
	active: { 
		scale: 1.05,
		backgroundColor: "#201d66",
		boxShadow: "0 8px 25px rgba(32,29,102,0.3)",
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 20
		}
	},
	hover: {
		scale: 1.08,
		y: -2,
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 10
		}
	}
};

const textAnimationVariants = {
	hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
	visible: { 
		opacity: 1, 
		y: 0, 
		filter: "blur(0px)",
		transition: { 
			duration: 0.6,
			ease: "easeOut"
		}
	}
};

export const BlogSection = ({ onBlogSelect }: BlogSectionProps): JSX.Element => {
	const [filters, setFilters] = useState<BlogFilters>({});
	const [showAll, setShowAll] = useState(false);
	// Enhanced filter and sort blogs
	const filteredBlogs = useMemo(() => {
		let filtered = blogs;
		
		// Search filter
		if (filters.search && filters.search.trim()) {
			const searchTerm = filters.search.toLowerCase().trim();
			filtered = filtered.filter(blog => 
				blog.title.toLowerCase().includes(searchTerm) ||
				blog.excerpt.toLowerCase().includes(searchTerm) ||
				blog.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
				blog.author.name.toLowerCase().includes(searchTerm)
			);
		}
		
		// Category filter
		if (filters.category) {
			filtered = filtered.filter(blog => blog.category === filters.category);
		}
		
		// Tags filter
		if (filters.tags && filters.tags.length > 0) {
			filtered = filtered.filter(blog => 
				filters.tags!.some(tag => blog.tags.includes(tag))
			);
		}
		
		// Featured filter
		if (filters.featured !== undefined) {
			filtered = filtered.filter(blog => blog.featured === filters.featured);
		}
		
		return showAll ? filtered : filtered.slice(0, 3);
	}, [filters, showAll]);

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};

	const handleTagClick = (tag: string) => {
		setFilters(prev => ({
			...prev,
			tags: prev.tags?.includes(tag) 
				? prev.tags.filter(t => t !== tag)
				: [...(prev.tags || []), tag]
		}));
	};

	const clearFilters = () => {
		setFilters({});
	};

	// Icon components with animations
	const AnimatedIcon = ({ 
		children, 
		delay = 0, 
		className = "" 
	}: { 
		children: React.ReactNode; 
		delay?: number; 
		className?: string; 
	}) => (
		<motion.div
			className={className}
			initial={{ scale: 0, rotate: -180 }}
			animate={{ scale: 1, rotate: 0 }}
			transition={{
				type: "spring",
				stiffness: 260,
				damping: 20,
				delay
			}}
			whileHover={{
				scale: 1.1,
				rotate: 5,
				transition: { duration: 0.2 }
			}}
		>
			{children}
		</motion.div>
	);

	// Loading shimmer component
	const LoadingShimmer = () => (
		<motion.div
			className="w-full h-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-3xl"
			animate={{
				backgroundPosition: ["200% 0", "-200% 0"]
			}}
			transition={{
				duration: 1.5,
				repeat: Infinity,
				ease: "linear"
			}}
			style={{
				backgroundSize: "200% 100%"
			}}
		/>
	);

	// Floating action buttons for advanced features
	const FloatingActions = () => (
		<motion.div
			className="fixed bottom-8 right-8 z-50 flex flex-col gap-3"
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay: 1, type: "spring" }}
		>
			{/* Search toggle */}
			<motion.button
				className="w-14 h-14 bg-gradient-to-r from-[#201d66] to-[#3949ab] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
				whileHover={{ scale: 1.1, rotate: 5 }}
				whileTap={{ scale: 0.95 }}
				title="Search blogs"
			>
				<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
					<path d="M21 21l-4.35-4.35M16.65 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"/>
				</svg>
			</motion.button>
			
			{/* Sort options */}
			<motion.button
				className="w-14 h-14 bg-gradient-to-r from-[#80deea] to-[#b3e5fc] text-[#201d66] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
				whileHover={{ scale: 1.1, rotate: -5 }}
				whileTap={{ scale: 0.95 }}
				title="Sort options"
			>
				<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
					<path d="M3 6h18M7 12h10m-7 6h4"/>
				</svg>
			</motion.button>
			
			{/* Back to top */}
			<motion.button
				className="w-14 h-14 bg-white border-2 border-[#e3f2fd] text-[#201d66] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
				whileHover={{ scale: 1.1, y: -2 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
				title="Back to top"
			>
				<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
					<path d="M12 19V5m-7 7l7-7 7 7"/>
				</svg>
			</motion.button>
		</motion.div>
	);

	return (
		<section
			id="blog"
			className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] py-24 relative overflow-x-hidden"
		>
			{/* Enhanced Parallax background with multiple layers */}
			<div
				className="absolute inset-0 z-0 bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] opacity-40"
				style={{ backgroundAttachment: "fixed" }}
			/>
			
			{/* Animated mesh gradient overlay */}
			<motion.div 
				className="absolute inset-0 z-[1] opacity-30"
				animate={{
					background: [
						"radial-gradient(circle at 20% 30%, #80deea 0%, transparent 50%)",
						"radial-gradient(circle at 80% 70%, #b3e5fc 0%, transparent 50%)",
						"radial-gradient(circle at 40% 80%, #e3f2fd 0%, transparent 50%)",
						"radial-gradient(circle at 20% 30%, #80deea 0%, transparent 50%)"
					]
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut"
				}}
			/>
			
			{/* Enhanced floating decorative elements */}
			<div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
				{/* Animated particles */}
				{[...Array(6)].map((_, i) => (
					<motion.div
						key={i}
						className={`absolute w-2 h-2 bg-gradient-to-r from-[#80deea] to-[#b3e5fc] rounded-full opacity-20`}
						style={{
							left: `${20 + i * 15}%`,
							top: `${30 + i * 10}%`
						}}
						animate={{
							y: [0, -30, 0],
							x: [0, 15, 0],
							scale: [1, 1.2, 1],
							opacity: [0.2, 0.5, 0.2]
						}}
						transition={{
							duration: 4 + i * 0.5,
							repeat: Infinity,
							ease: "easeInOut",
							delay: i * 0.3
						}}
					/>
				))}
				
				{/* Geometric shapes with 3D rotation */}
				<motion.svg
					className="absolute top-20 left-10 w-32 h-32 opacity-20"
					initial={{ y: 0, rotateY: 0 }}
					animate={{ 
						y: [0, 30, 0],
						rotateY: [0, 180, 360]
					}}
					transition={{ 
						duration: 12, 
						repeat: Infinity, 
						ease: 'easeInOut'
					}}
					viewBox="0 0 100 100"
					fill="none"
				>
					<circle cx="50" cy="50" r="40" fill="url(#gradient1)" />
					<defs>
						<linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#80deea" />
							<stop offset="100%" stopColor="#b3e5fc" />
						</linearGradient>
					</defs>
				</motion.svg>
				
				<motion.svg
					className="absolute bottom-32 right-16 w-24 h-24 opacity-15"
					initial={{ x: 0, rotateZ: 0 }}
					animate={{ 
						x: [0, -40, 0],
						rotateZ: [0, 180, 360]
					}}
					transition={{ 
						duration: 15, 
						repeat: Infinity, 
						ease: 'easeInOut'
					}}
					viewBox="0 0 100 100"
					fill="none"
				>
					<rect x="20" y="20" width="60" height="60" rx="18" fill="url(#gradient2)" />
					<defs>
						<linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#b3e5fc" />
							<stop offset="100%" stopColor="#80deea" />
						</linearGradient>
					</defs>
				</motion.svg>
				
				{/* Additional geometric elements */}
				<motion.div
					className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-[#e3f2fd] to-[#80deea] rounded-full opacity-10"
					animate={{
						scale: [1, 1.3, 1],
						rotate: [0, 360],
						opacity: [0.1, 0.3, 0.1]
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
			</div>

			{/* Interactive cursor follower effect */}
			<motion.div
				className="pointer-events-none absolute inset-0 z-[1]"
				animate={{
					background: [
						"radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(128,222,234,0.15), transparent 40%)",
						"radial-gradient(800px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(179,229,252,0.1), transparent 40%)"
					]
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					repeatType: "reverse"
				}}
			/>			<div className="w-full max-w-6xl mx-auto px-4 md:px-8 relative z-10">
				{/* Enhanced Professional Header */}
				<motion.div
					className="text-center mb-20"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{/* Animated badge */}
					<motion.div
						className="inline-flex items-center gap-2 bg-gradient-to-r from-[#80deea]/20 to-[#b3e5fc]/20 text-[#201d66] px-6 py-3 rounded-full border border-[#80deea]/30 mb-8"
						variants={textAnimationVariants}
					>
						<AnimatedIcon delay={0.2}>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"/>
							</svg>
						</AnimatedIcon>
						<span className="font-semibold text-sm tracking-wide uppercase">Latest Articles</span>
					</motion.div>

					{/* Main title with gradient effect */}
					<motion.div
						className="relative mb-6"
						variants={textAnimationVariants}
					>
						<h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#201d66] via-[#3949ab] to-[#80deea] bg-clip-text text-transparent tracking-tight leading-none relative">
							Blog
							{/* Animated underline */}
							<motion.div
								className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[#80deea] to-[#b3e5fc] rounded-full"
								initial={{ width: 0 }}
								whileInView={{ width: "60%" }}
								transition={{ duration: 1, delay: 0.5 }}
							/>
						</h2>
					</motion.div>

					{/* Subtitle with typewriter effect */}
					<motion.p
						className="text-xl md:text-2xl text-[#3949ab] font-medium max-w-2xl mx-auto leading-relaxed"
						variants={textAnimationVariants}
					>
						Exploring the intersection of{" "}
						<motion.span
							className="bg-gradient-to-r from-[#201d66] to-[#3949ab] bg-clip-text text-transparent font-bold"
							animate={{
								opacity: [1, 0.7, 1]
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								repeatType: "reverse"
							}}
						>
							technology
						</motion.span>
						,{" "}
						<motion.span
							className="bg-gradient-to-r from-[#3949ab] to-[#80deea] bg-clip-text text-transparent font-bold"
							animate={{
								opacity: [0.7, 1, 0.7]
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								repeatType: "reverse",
								delay: 0.5
							}}
						>
							innovation
						</motion.span>
						, and{" "}
						<motion.span
							className="bg-gradient-to-r from-[#80deea] to-[#b3e5fc] bg-clip-text text-transparent font-bold"
							animate={{
								opacity: [1, 0.7, 1]
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								repeatType: "reverse",
								delay: 1
							}}
						>
							development
						</motion.span>
					</motion.p>

					{/* Stats bar */}
					<motion.div
						className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-[#3949ab]"
						variants={textAnimationVariants}
					>
						<div className="flex items-center gap-2">
							<AnimatedIcon delay={0.8}>
								<div className="w-2 h-2 bg-[#80deea] rounded-full animate-pulse" />
							</AnimatedIcon>
							<span className="font-medium">{blogs.length} Articles Published</span>
						</div>
						<div className="flex items-center gap-2">
							<AnimatedIcon delay={1.0}>
								<div className="w-2 h-2 bg-[#3949ab] rounded-full animate-pulse" />
							</AnimatedIcon>
							<span className="font-medium">{blogCategories.length} Categories</span>
						</div>
						<div className="flex items-center gap-2">
							<AnimatedIcon delay={1.2}>
								<div className="w-2 h-2 bg-[#201d66] rounded-full animate-pulse" />
							</AnimatedIcon>
							<span className="font-medium">Weekly Updates</span>
						</div>
					</motion.div>
				</motion.div>
						{/* Advanced Filter System with Search */}
				<motion.div 
					className="mb-16 space-y-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{/* Search bar */}
					<motion.div
						className="relative max-w-md mx-auto"
						variants={textAnimationVariants}
					>
						<div className="relative">
							<input
								type="text"
								placeholder="Search articles..."
								className="w-full px-6 py-4 pl-12 bg-white/90 backdrop-blur-sm border border-[#e3f2fd] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#3949ab] focus:border-transparent transition-all duration-300 text-[#201d66] placeholder-[#3949ab]/60"
								value={filters.search || ''}
								onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
							/>
							<AnimatedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#3949ab]">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M21 21l-4.35-4.35M16.65 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"/>
								</svg>
							</AnimatedIcon>
						</div>
					</motion.div>

					{/* Filter buttons with enhanced animations */}
					<motion.div 
						className="flex flex-wrap justify-center gap-3"
						variants={containerVariants}
					>
						{/* All Posts button */}
						<motion.button
							onClick={clearFilters}
							className={`group px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform relative overflow-hidden ${
								!filters.category && !filters.search && (!filters.tags || filters.tags.length === 0)
									? 'bg-[#201d66] text-white shadow-lg shadow-[#201d66]/25' 
									: 'bg-white/80 backdrop-blur-sm text-[#3949ab] border border-[#e3f2fd] hover:bg-[#e3f2fd] hover:shadow-md'
							}`}
							variants={filterButtonVariants}
							initial="inactive"
							animate={(!filters.category && !filters.search && (!filters.tags || filters.tags.length === 0)) ? "active" : "inactive"}
							whileHover="hover"
							whileTap={{ scale: 0.95 }}
						>
							{/* Ripple effect */}
							<motion.div
								className="absolute inset-0 bg-white/20 rounded-full scale-0"
								whileTap={{
									scale: 4,
									opacity: [0, 1, 0],
									transition: { duration: 0.3 }
								}}
							/>
							<span className="flex items-center gap-2 relative z-10">
								<AnimatedIcon delay={0}>
									<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
									</svg>
								</AnimatedIcon>
								All Posts
								{!filters.category && !filters.search && (!filters.tags || filters.tags.length === 0) && (
									<motion.span
										className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs"
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ delay: 0.2 }}
									>
										{filteredBlogs.length}
									</motion.span>
								)}
							</span>
						</motion.button>

						{/* Category buttons */}
						{blogCategories.map((category, index) => (
							<motion.button
								key={category.id}
								onClick={() => setFilters(prev => ({ 
									...prev, 
									category: prev.category === category.slug ? undefined : category.slug 
								}))}
								className={`group px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform relative overflow-hidden ${
									filters.category === category.slug
										? 'bg-[#201d66] text-white shadow-lg shadow-[#201d66]/25'
										: 'bg-white/80 backdrop-blur-sm text-[#3949ab] border border-[#e3f2fd] hover:bg-[#e3f2fd] hover:shadow-md'
								}`}
								variants={filterButtonVariants}
								initial="inactive"
								animate={filters.category === category.slug ? "active" : "inactive"}
								whileHover="hover"
								whileTap={{ scale: 0.95 }}
								style={{
									'--category-color': category.color
								} as React.CSSProperties}
							>
								{/* Ripple effect */}
								<motion.div
									className="absolute inset-0 bg-white/20 rounded-full scale-0"
									whileTap={{
										scale: 4,
										opacity: [0, 1, 0],
										transition: { duration: 0.3 }
									}}
								/>
								<span className="flex items-center gap-2 relative z-10">
									<motion.div 
										className="w-3 h-3 rounded-full"
										style={{ backgroundColor: category.color }}
										animate={filters.category === category.slug ? {
											scale: [1, 1.2, 1],
											boxShadow: [`0 0 0 0 ${category.color}30`, `0 0 0 8px ${category.color}00`]
										} : {}}
										transition={{ duration: 0.6, repeat: filters.category === category.slug ? Infinity : 0 }}
									/>
									{category.name}
									{filters.category === category.slug && (
										<motion.span
											className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs"
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											transition={{ delay: 0.2 }}
										>
											{filteredBlogs.length}
										</motion.span>
									)}
								</span>
							</motion.button>
						))}

						{/* Featured button with special animation */}
						<motion.button
							onClick={() => setFilters(prev => ({ 
								...prev, 
								featured: prev.featured === true ? undefined : true 
							}))}
							className={`group px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform relative overflow-hidden ${
								filters.featured === true
									? 'bg-gradient-to-r from-[#80deea] to-[#b3e5fc] text-[#201d66] shadow-lg shadow-[#80deea]/25'
									: 'bg-white/80 backdrop-blur-sm text-[#3949ab] border border-[#e3f2fd] hover:bg-[#e3f2fd] hover:shadow-md'
							}`}
							variants={filterButtonVariants}
							initial="inactive"
							animate={filters.featured === true ? "active" : "inactive"}
							whileHover="hover"
							whileTap={{ scale: 0.95 }}
						>
							{/* Sparkle animation for featured */}
							<AnimatePresence>
								{filters.featured === true && (
									<motion.div
										className="absolute inset-0 pointer-events-none"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										{[...Array(3)].map((_, i) => (
											<motion.div
												key={i}
												className="absolute w-1 h-1 bg-white rounded-full"
												style={{
													left: `${30 + i * 20}%`,
													top: `${30 + i * 15}%`
												}}
												animate={{
													scale: [0, 1, 0],
													opacity: [0, 1, 0]
												}}
												transition={{
													duration: 1,
													repeat: Infinity,
													delay: i * 0.2
												}}
											/>
										))}
									</motion.div>
								)}
							</AnimatePresence>
							<span className="flex items-center gap-2 relative z-10">
								<motion.span
									animate={filters.featured === true ? {
										rotate: [0, 360],
										scale: [1, 1.2, 1]
									} : {}}
									transition={{ duration: 2, repeat: filters.featured === true ? Infinity : 0 }}
								>
									⭐
								</motion.span>
								Featured
								{filters.featured === true && (
									<motion.span
										className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs"
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ delay: 0.2 }}
									>
										{filteredBlogs.length}
									</motion.span>
								)}
							</span>
						</motion.button>
					</motion.div>

					{/* Active filters display */}
					<AnimatePresence>
						{(filters.search || filters.category || (filters.tags && filters.tags.length > 0)) && (
							<motion.div
								className="flex flex-wrap justify-center gap-2 text-sm"
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
							>
								<span className="text-[#3949ab]">Active filters:</span>
								{filters.search && (
									<motion.span
										className="px-3 py-1 bg-[#e3f2fd] text-[#201d66] rounded-full flex items-center gap-1"
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										exit={{ scale: 0 }}
									>
										Search: "{filters.search}"
										<button
											onClick={() => setFilters(prev => ({ ...prev, search: undefined }))}
											className="hover:bg-[#201d66] hover:text-white rounded-full p-0.5 transition-colors"
										>
											<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path d="M6 18L18 6M6 6l12 12"/>
											</svg>
										</button>
									</motion.span>
								)}
								{filters.category && (
									<motion.span
										className="px-3 py-1 bg-[#e3f2fd] text-[#201d66] rounded-full flex items-center gap-1"
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										exit={{ scale: 0 }}
									>
										{blogCategories.find(cat => cat.slug === filters.category)?.name}
										<button
											onClick={() => setFilters(prev => ({ ...prev, category: undefined }))}
											className="hover:bg-[#201d66] hover:text-white rounded-full p-0.5 transition-colors"
										>
											<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path d="M6 18L18 6M6 6l12 12"/>
											</svg>
										</button>
									</motion.span>
								)}
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>{/* Professional Blog Grid */}
				<motion.div
					className="relative grid gap-8 w-full"
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{filteredBlogs.length === 0 ? (
						<motion.div
							className="text-center py-16"
							variants={itemVariants}
						>
							<div className="inline-flex items-center justify-center w-20 h-20 bg-[#e3f2fd] rounded-full mb-6">
								<svg className="w-10 h-10 text-[#3949ab]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-[#201d66] mb-4">No blogs found</h3>
							<p className="text-xl text-[#3949ab] mb-6">No posts match your current filters</p>
							<button
								onClick={clearFilters}
								className="px-8 py-3 bg-[#201d66] text-white rounded-full hover:bg-[#3949ab] transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
							>
								Clear Filters
							</button>
						</motion.div>
					) : (
						filteredBlogs.map((blog, idx) => (
							<motion.article
								key={blog.id}
								className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-[#e3f2fd]/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 overflow-hidden"
								variants={itemVariants}
								whileHover={{ 
									boxShadow: "0 25px 50px -12px rgba(32, 29, 102, 0.25)",
								}}
							>
								{/* Gradient overlay for visual interest */}
								<div className="absolute inset-0 bg-gradient-to-br from-[#e3f2fd]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
								
								{/* Blog Status Indicators */}
								<div className="flex items-center justify-between mb-6">
									<div className="flex items-center gap-3">
										{blog.featured && (
											<span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#80deea] to-[#b3e5fc] text-[#201d66] px-4 py-2 rounded-full text-sm font-bold shadow-sm">
												<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
												</svg>
												Featured
											</span>
										)}
										<span className="inline-flex items-center gap-2 bg-[#e3f2fd] text-[#3949ab] px-4 py-2 rounded-full text-sm font-medium border border-[#b3e5fc]">
											<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
											</svg>
											{formatDate(blog.date)}
										</span>
									</div>
									<span className="text-[#3949ab] font-medium text-sm bg-[#f8f9fa] px-3 py-1 rounded-full border border-[#e3f2fd]">
										{blog.readTime} min read
									</span>
								</div>
								
								{/* Blog Content */}
								<div className="relative z-10">									
									{/* Title */}
									<h3 
										className="text-2xl md:text-3xl font-bold text-[#201d66] mb-4 leading-tight cursor-pointer hover:text-[#3949ab] transition-colors duration-300 group-hover:text-[#3949ab]"
										onClick={() => onBlogSelect?.(blog)}
									>
										{blog.title}
									</h3>

									{/* Category Badge */}
									<div className="mb-4">
										{blogCategories.find(cat => cat.slug === blog.category) && (
											<span 
												className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border"
												style={{
													backgroundColor: `${blogCategories.find(cat => cat.slug === blog.category)?.color}15`,
													borderColor: `${blogCategories.find(cat => cat.slug === blog.category)?.color}30`,
													color: blogCategories.find(cat => cat.slug === blog.category)?.color
												}}
											>
												<div 
													className="w-2 h-2 rounded-full"
													style={{ backgroundColor: blogCategories.find(cat => cat.slug === blog.category)?.color }}
												/>
												{blogCategories.find(cat => cat.slug === blog.category)?.name}
											</span>
										)}
									</div>
									
									{/* Description */}
									<motion.p
										className="text-[#3949ab] text-lg leading-relaxed mb-6"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
									>
										{blog.excerpt}
									</motion.p>
									
									{/* Tags */}
									<div className="flex flex-wrap gap-2 mb-8">
										{blog.tags.slice(0, 4).map((tag, i) => (
											<button
												key={i}
												onClick={() => handleTagClick(tag)}
												className={`px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105 ${
													filters.tags?.includes(tag)
														? 'bg-[#201d66] text-white shadow-md'
														: 'bg-[#f8f9fa] text-[#3949ab] border border-[#e3f2fd] hover:bg-[#e3f2fd] hover:shadow-sm'
												}`}
											>
												#{tag}
											</button>
										))}
										{blog.tags.length > 4 && (
											<span className="px-3 py-1 text-xs text-[#3949ab] bg-[#f8f9fa] rounded-full border border-[#e3f2fd]">
												+{blog.tags.length - 4} more
											</span>
										)}
									</div>
								</div>

								{/* Action Buttons */}
								<div className="flex flex-wrap gap-4 relative z-10">
									<motion.button 
										onClick={() => onBlogSelect?.(blog)}
										className="inline-flex items-center px-6 py-3 bg-[#201d66] text-white rounded-xl font-semibold shadow-lg hover:bg-[#3949ab] transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-[#3949ab] focus:ring-offset-2 transform hover:scale-105"
										whileHover={{ y: -2 }}
										whileTap={{ scale: 0.98 }}
									>
										<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
											<path d="M15 12h6m-6 0l-3-3m3 3l-3 3m-3-3H3"/>
										</svg>
										Read Article
									</motion.button>
									
									{blog.socialLinks?.devTo && (
										<motion.a
											href={blog.socialLinks.devTo}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center px-6 py-3 bg-white border-2 border-[#e3f2fd] text-[#201d66] rounded-xl font-semibold shadow-md hover:bg-[#e3f2fd] hover:shadow-lg transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-[#3949ab] focus:ring-offset-2 transform hover:scale-105"
											whileHover={{ y: -2 }}
											whileTap={{ scale: 0.98 }}
										>
											<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
												<path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
											</svg>
											Dev.to
										</motion.a>
									)}
								</div>

								{/* Author Info */}
								<div className="mt-8 pt-6 border-t border-[#e3f2fd] flex items-center gap-4">
									<img
										src={blog.author.avatar || '/profile.jpg'}
										alt={blog.author.name}
										className="w-12 h-12 rounded-full border-2 border-[#e3f2fd] shadow-sm"
									/>
									<div>
										<h4 className="font-semibold text-[#201d66]">{blog.author.name}</h4>
										<p className="text-sm text-[#3949ab]">Full-Stack Developer</p>
									</div>
								</div>
							</motion.article>
						))
					)}
				</motion.div>				
				{/* Enhanced Show More/Less Button */}
				{blogs.length > 3 && (
					<motion.div 
						className="text-center mt-16"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						<motion.button
							onClick={() => setShowAll(!showAll)}
							className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#201d66] to-[#3949ab] text-white rounded-2xl hover:from-[#3949ab] hover:to-[#201d66] transition-all duration-500 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.98 }}
						>
							<svg className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
							</svg>
							{showAll ? 'Show Less' : `Explore All ${blogs.length} Articles`}
							{!showAll && (
								<span className="bg-white/20 px-3 py-1 rounded-full text-sm">
									+{blogs.length - 3}
								</span>
							)}
						</motion.button>
						
						{/* Blog Stats */}
						{!showAll && (
							<motion.div 
								className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[#3949ab]"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
							>
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-[#80deea] rounded-full"></div>
									<span>{getFeaturedBlogs().length} Featured Articles</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-[#3949ab] rounded-full"></div>
									<span>{blogCategories.length} Categories</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-[#201d66] rounded-full"></div>
									<span>Updated Weekly</span>
								</div>
							</motion.div>
						)}
					</motion.div>
				)}			</div>

			{/* Floating Actions Component */}
			<FloatingActions />
		</section>
	);
};
