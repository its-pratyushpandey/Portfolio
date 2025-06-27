import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { blogPosts, blogCategories, getRecentBlogs, getFeaturedBlogs } from "../../../../data/blogData";
import { BlogPost, BlogFilters } from "../../../../types/blog";

interface BlogSectionProps {
  onBlogSelect?: (blog: BlogPost) => void;
  onShowAllBlogs?: () => void;
}

// Get the 3 specific featured blogs for the main page
const getFeaturedMainBlogs = (): BlogPost[] => {
  const featuredTitles = [
    'Advanced Web Performance Optimization: From 3s to 300ms',
    'Mastering Artificial Intelligence in Modern Web Development', 
    'Modern Web Development: Building the Future of Digital Experiences'
  ];
  
  return blogPosts
    .filter(blog => blog.status === 'published' && featuredTitles.includes(blog.title))
    .sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime());
};

const blogs = getFeaturedMainBlogs();

// Premium animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  }
};

const heroVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  }
};

const floatingVariants = {
  float: {
    y: [-20, 20, -20],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const BlogSection = ({ onBlogSelect, onShowAllBlogs }: BlogSectionProps): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedBlogIndex, setSelectedBlogIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Filter blogs based on active category (for the 3 featured blogs)
  const filteredBlogs = useMemo(() => {
    if (activeCategory) {
      return blogs.filter(blog => blog.category === activeCategory);
    }
    return blogs;
  }, [activeCategory]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const clearFilters = () => {
    setActiveCategory(null);
  };

  const shareArticle = (blog: BlogPost) => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <section
      ref={containerRef}
      id="blog"
      className="relative min-h-screen w-full bg-gradient-to-br from-[#fafafa] via-[#f5f7fa] to-[#e3f2fd] dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#80deea]/20 to-[#b3e5fc]/30 rounded-full blur-3xl"
          animate={floatingVariants.float}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-[#3949ab]/20 to-[#80deea]/25 rounded-full blur-3xl"
          animate={{ ...floatingVariants.float, transition: { ...floatingVariants.float.transition, delay: 2 } }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#e3f2fd]/15 to-[#b3e5fc]/20 rounded-full blur-3xl"
          animate={{ ...floatingVariants.float, transition: { ...floatingVariants.float.transition, delay: 1 } }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, #201d66 1px, transparent 0)`,
               backgroundSize: '50px 50px'
             }} 
        />
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-20"
        style={{ y, opacity }}
      >
        {/* Premium Header Section */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Floating badge */}
          <motion.div
            className="inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl text-[#201d66] dark:text-blue-300 px-8 py-4 rounded-full border border-[#80deea]/30 dark:border-blue-400/30 mb-8 shadow-2xl"
            variants={heroVariants}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-[#80deea] to-[#b3e5fc] rounded-full animate-pulse" />
            <span className="font-bold text-sm tracking-wider uppercase">Featured Articles</span>
            <div className="w-3 h-3 bg-gradient-to-r from-[#3949ab] to-[#80deea] rounded-full animate-pulse" />
          </motion.div>

          {/* Hero title with premium typography */}
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-[#201d66] via-[#3949ab] to-[#80deea] dark:from-blue-400 dark:via-cyan-300 dark:to-blue-200 bg-clip-text text-transparent mb-6 leading-none tracking-tight"
            variants={heroVariants}
          >
            Latest
            <br />
            <span className="bg-gradient-to-r from-[#80deea] via-[#3949ab] to-[#201d66] dark:from-cyan-300 dark:via-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
              Insights
            </span>
          </motion.h1>

          {/* Premium subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed mb-12"
            variants={heroVariants}
          >
            Explore cutting-edge{" "}
            <span className="bg-gradient-to-r from-[#201d66] to-[#3949ab] dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent font-bold">
              development techniques
            </span>
            , innovative solutions, and industry insights that shape the future of technology
          </motion.p>

          {/* Enhanced stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400"
            variants={heroVariants}
          >
            <div className="flex items-center gap-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-3 h-3 bg-gradient-to-r from-[#80deea] to-[#b3e5fc] rounded-full animate-pulse" />
              <span className="font-semibold">3 Featured Articles</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-3 h-3 bg-gradient-to-r from-[#3949ab] to-[#80deea] rounded-full animate-pulse" />
              <span className="font-semibold">{blogCategories.length} Categories</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-3 h-3 bg-gradient-to-r from-[#201d66] to-[#3949ab] rounded-full animate-pulse" />
              <span className="font-semibold">{blogPosts.filter(blog => blog.status === 'published').length} Total Posts</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Premium Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* All Posts button */}
          <motion.button
            onClick={clearFilters}
            className={`group px-8 py-4 rounded-2xl text-sm font-bold transition-all duration-500 transform relative overflow-hidden ${
              !activeCategory
                ? 'bg-gradient-to-r from-[#201d66] to-[#3949ab] text-white shadow-xl' 
                : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl text-[#3949ab] dark:text-blue-300 border-2 border-[#e3f2fd]/50 dark:border-gray-700/50 hover:border-[#80deea] dark:hover:border-blue-400 hover:shadow-lg'
            }`}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              All Featured
            </span>
            {!activeCategory && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#3949ab] to-[#80deea] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </motion.button>

          {/* Category buttons */}
          {blogCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => {
                const newCategory = activeCategory === category.slug ? null : category.slug;
                setActiveCategory(newCategory);
              }}
              className={`group px-8 py-4 rounded-2xl text-sm font-bold transition-all duration-500 transform relative overflow-hidden ${
                activeCategory === category.slug
                  ? 'bg-gradient-to-r from-[#201d66] to-[#3949ab] text-white shadow-xl'
                  : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl text-[#3949ab] dark:text-blue-300 border-2 border-[#e3f2fd]/50 dark:border-gray-700/50 hover:border-[#80deea] dark:hover:border-blue-400 hover:shadow-lg'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full border-2 border-current"
                  style={{ backgroundColor: activeCategory === category.slug ? 'currentColor' : 'transparent' }}
                />
                {category.name}
              </span>
              {activeCategory === category.slug && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#3949ab] to-[#80deea] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Premium Blog Layout */}
        <AnimatePresence mode="wait">
          {filteredBlogs.length === 0 ? (
            <motion.div
              key="empty"
              className="text-center py-32"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-[#e3f2fd] to-[#b3e5fc] dark:from-gray-800 dark:to-gray-700 rounded-3xl mb-8 shadow-2xl">
                <svg className="w-16 h-16 text-[#3949ab] dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-[#201d66] dark:text-blue-300 mb-6">No Articles Found</h3>
              <p className="text-xl text-[#3949ab] dark:text-gray-400 mb-8 max-w-lg mx-auto">
                No posts match your current filters. Try exploring different categories.
              </p>
              <button
                onClick={clearFilters}
                className="px-10 py-4 bg-gradient-to-r from-[#201d66] to-[#3949ab] text-white rounded-2xl hover:from-[#3949ab] hover:to-[#201d66] transition-all duration-300 font-bold shadow-xl transform hover:scale-105"
              >
                Show All Articles
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="blogs"
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredBlogs.map((blog, index) => {
                const isReversed = index % 2 === 1;
                const category = blogCategories.find(cat => cat.slug === blog.category);
                
                return (
                  <motion.article
                    key={blog.id}
                    className={`group relative flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    onClick={() => onBlogSelect?.(blog)}
                  >
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative">
                      <motion.div 
                        className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
                        whileHover={{ scale: 1.05, rotateY: isReversed ? -5 : 5 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <img
                          src={blog.coverImage.url}
                          alt={blog.coverImage.alt}
                          className="w-full h-72 md:h-80 lg:h-96 object-cover transition-all duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        
                        {/* Professional overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Floating badges */}
                        <div className="absolute top-6 left-6 flex flex-col gap-3">
                          {blog.featured && (
                            <span className="bg-gradient-to-r from-[#80deea] to-[#b3e5fc] text-[#201d66] px-4 py-2 rounded-xl text-sm font-bold shadow-lg backdrop-blur-sm">
                              ⭐ Featured
                            </span>
                          )}
                          {category && (
                            <span 
                              className="px-4 py-2 rounded-xl text-sm font-bold text-white shadow-lg backdrop-blur-sm"
                              style={{ backgroundColor: category.color }}
                            >
                              {category.name}
                            </span>
                          )}
                        </div>
                        
                        <div className="absolute top-6 right-6">
                          <span className="bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-semibold">
                            {blog.readTime} min read
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="bg-[#e3f2fd] dark:bg-gray-800 px-4 py-2 rounded-full font-semibold">
                          {formatDate(blog.date)}
                        </span>
                        <div className="flex items-center gap-2">
                          <img
                            src={blog.author.avatar || '/profile.jpg'}
                            alt={blog.author.name}
                            className="w-8 h-8 rounded-full border-2 border-[#e3f2fd] dark:border-gray-700 object-cover"
                          />
                          <span className="font-semibold">{blog.author.name}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#201d66] dark:text-blue-300 leading-tight group-hover:text-[#3949ab] dark:group-hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                        {blog.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        {blog.excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-3">
                        {blog.tags.slice(0, 4).map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="bg-gradient-to-r from-[#e3f2fd] to-[#b3e5fc] dark:from-gray-800 dark:to-gray-700 text-[#3949ab] dark:text-blue-300 px-4 py-2 rounded-xl text-sm font-semibold border border-[#b3e5fc] dark:border-gray-600 hover:shadow-lg transition-all duration-300"
                          >
                            #{tag}
                          </span>
                        ))}
                        {blog.tags.length > 4 && (
                          <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold px-3 py-2">
                            +{blog.tags.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <motion.button 
                          className="px-8 py-4 bg-gradient-to-r from-[#201d66] to-[#3949ab] text-white rounded-2xl font-bold hover:from-[#3949ab] hover:to-[#201d66] transition-all duration-300 shadow-xl transform hover:scale-105 flex items-center gap-3"
                          onClick={(e) => {
                            e.stopPropagation();
                            onBlogSelect?.(blog);
                          }}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                          </svg>
                          Read Full Article
                        </motion.button>
                        
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            shareArticle(blog);
                          }}
                          className="px-6 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-2 border-[#e3f2fd] dark:border-gray-700 text-[#201d66] dark:text-blue-300 rounded-2xl font-bold hover:border-[#80deea] dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex items-center gap-3"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                          </svg>
                          Share
                        </motion.button>
                        
                        {blog.socialLinks?.devTo && (
                          <motion.a
                            href={blog.socialLinks.devTo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 flex items-center gap-3 shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .468-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.078-.408-.233-.525zM19.236 3H4.764C3.791 3 3.002 3.787 3.002 4.760v14.48c0 .973.789 1.760 1.762 1.760h14.472c.973 0 1.762-.787 1.762-1.760V4.760C21.998 3.787 21.209 3 20.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.903 1.144 1.903 1.899v2.85zm4.045-3.562H11.1v1.544h1.909v.901H11.1v1.615h2.14v.901h-3.202V8.665h3.202v.901-.001zm2.156 2.448v1.718c0 1.549.021 1.911 1.618 1.911 1.598 0 1.619-.362 1.619-1.911v-1.718c0-1.548-.021-1.911-1.619-1.911-1.597 0-1.618.363-1.618 1.911zm2.87-.362v2.503c0 .647-.171 1.353-1.252 1.353-1.081 0-1.253-.706-1.253-1.353V12.5c0-.647.172-1.353 1.253-1.353 1.081 0 1.252.706 1.252 1.353z"/>
                            </svg>
                            Dev.to
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Premium CTA Section */}
        <motion.div 
          className="text-center mt-20 pt-16 border-t border-gray-200/50 dark:border-gray-700/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={onShowAllBlogs}
            className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#201d66] via-[#3949ab] to-[#80deea] text-white rounded-3xl hover:from-[#80deea] hover:via-[#3949ab] hover:to-[#201d66] transition-all duration-500 font-bold shadow-2xl transform hover:scale-105 text-lg relative overflow-hidden"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Explore Complete Collection
              <span className="bg-white/25 px-4 py-2 rounded-full text-sm font-black">
                {blogPosts.filter(blog => blog.status === 'published').length} Articles
              </span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#80deea] via-[#3949ab] to-[#201d66] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};
