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

export const BlogSection = ({ onBlogSelect }: BlogSectionProps): JSX.Element => {
	const [filters, setFilters] = useState<BlogFilters>({});
	const [showAll, setShowAll] = useState(false);

	// Filter and sort blogs
	const filteredBlogs = useMemo(() => {
		let filtered = blogs;
		
		if (filters.category) {
			filtered = filtered.filter(blog => blog.category === filters.category);
		}
		
		if (filters.tags && filters.tags.length > 0) {
			filtered = filtered.filter(blog => 
				filters.tags!.some(tag => blog.tags.includes(tag))
			);
		}
		
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
	};	return (
		<section
			id="blog"
			className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] py-24 relative overflow-x-hidden"
		>
			{/* Parallax background with consistent styling */}
			<div
				className="absolute inset-0 z-0 bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] opacity-40"
				style={{ backgroundAttachment: "fixed" }}
			/>
			
			{/* Floating decorative elements for consistency */}
			<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
				<motion.svg
					className="absolute top-20 left-10 w-32 h-32 opacity-20"
					initial={{ y: 0 }}
					animate={{ y: [0, 30, 0] }}
					transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
					viewBox="0 0 100 100"
					fill="none"
				>
					<circle cx="50" cy="50" r="40" fill="#b3e5fc" />
				</motion.svg>
				<motion.svg
					className="absolute bottom-32 right-16 w-24 h-24 opacity-15"
					initial={{ x: 0 }}
					animate={{ x: [0, -40, 0] }}
					transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
					viewBox="0 0 100 100"
					fill="none"
				>
					<rect x="20" y="20" width="60" height="60" rx="18" fill="#80deea" />
				</motion.svg>
			</div>

			<div className="w-full max-w-6xl mx-auto px-4 md:px-8 relative z-10">
				{/* Professional Header with icon */}
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<motion.div
						className="inline-flex items-center gap-3 mb-6"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
					>
						<div className="p-3 bg-[#e3f2fd] rounded-xl border border-[#b3e5fc] shadow-sm">
							<svg className="w-8 h-8 text-[#201d66]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
							</svg>
						</div>
						<h2 className="text-5xl md:text-6xl font-bold text-[#201d66] tracking-tight">
							Blog
						</h2>
					</motion.div>
					<motion.p
						className="text-xl text-[#3949ab] max-w-2xl mx-auto font-medium"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						Insights from my journey as a Full-Stack Developer, sharing experiences, tutorials, and technical deep-dives
					</motion.p>
				</motion.div>
				
				{/* Enhanced Filter System */}
				<motion.div 
					className="flex flex-wrap justify-center gap-3 mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
				>
					<button
						onClick={clearFilters}
						className={`group px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
							!filters.category 
								? 'bg-[#201d66] text-white shadow-lg shadow-[#201d66]/25' 
								: 'bg-white/80 backdrop-blur-sm text-[#3949ab] border border-[#e3f2fd] hover:bg-[#e3f2fd] hover:shadow-md'
						}`}
					>
						<span className="flex items-center gap-2">
							<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
							</svg>
							All Posts
						</span>
					</button>
					{blogCategories.map(category => (
						<button
							key={category.id}
							onClick={() => setFilters(prev => ({ 
								...prev, 
								category: prev.category === category.slug ? undefined : category.slug 
							}))}
							className={`group px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
								filters.category === category.slug
									? 'bg-[#201d66] text-white shadow-lg shadow-[#201d66]/25'
									: 'bg-white/80 backdrop-blur-sm text-[#3949ab] border border-[#e3f2fd] hover:bg-[#e3f2fd] hover:shadow-md'
							}`}
						>
							<span className="flex items-center gap-2">
								<div 
									className="w-3 h-3 rounded-full"
									style={{ backgroundColor: category.color }}
								/>
								{category.name}
							</span>
						</button>
					))}
					<button
						onClick={() => setFilters(prev => ({ 
							...prev, 
							featured: prev.featured === true ? undefined : true 
						}))}
						className={`group px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
							filters.featured === true
								? 'bg-gradient-to-r from-[#80deea] to-[#b3e5fc] text-[#201d66] shadow-lg shadow-[#80deea]/25'
								: 'bg-white/80 backdrop-blur-sm text-[#3949ab] border border-[#e3f2fd] hover:bg-[#e3f2fd] hover:shadow-md'
						}`}
					>
						<span className="flex items-center gap-2">
							⭐ Featured
						</span>
					</button>
				</motion.div>				{/* Professional Blog Grid */}
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
				)}
			</div>
		</section>
	);
};
