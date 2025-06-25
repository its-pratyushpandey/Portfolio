import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts, blogCategories, getRecentBlogs, getFeaturedBlogs } from "../../../../data/blogData";
import { BlogPost, BlogFilters } from "../../../../types/blog";

interface BlogSectionProps {
  onBlogSelect?: (blog: BlogPost) => void;
}

// Get recent blog posts for display
const blogs = getRecentBlogs(12);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  }
};

const cardVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const BlogSection = ({ onBlogSelect }: BlogSectionProps): JSX.Element => {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter blogs based on active category
  const filteredBlogs = useMemo(() => {
    let filtered = blogs;
    
    if (activeCategory) {
      filtered = filtered.filter(blog => blog.category === activeCategory);
    }
    
    return showAll ? filtered : filtered.slice(0, 6);
  }, [activeCategory, showAll]);

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

  return (
    <section
      id="blog"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#80deea] to-[#b3e5fc] rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#3949ab] to-[#80deea] rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#e3f2fd] to-[#b3e5fc] rounded-full blur-2xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#80deea]/20 to-[#b3e5fc]/20 text-[#201d66] px-6 py-3 rounded-full border border-[#80deea]/30 mb-6"
            variants={itemVariants}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"/>
            </svg>
            <span className="font-semibold text-sm tracking-wide uppercase">Latest Articles</span>
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#201d66] via-[#3949ab] to-[#80deea] bg-clip-text text-transparent tracking-tight leading-none mb-4"
            variants={itemVariants}
          >
            Blog
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-[#3949ab] font-medium max-w-3xl mx-auto leading-relaxed mb-8"
            variants={itemVariants}
          >
            Exploring the intersection of{" "}
            <span className="bg-gradient-to-r from-[#201d66] to-[#3949ab] bg-clip-text text-transparent font-bold">
              technology
            </span>
            ,{" "}
            <span className="bg-gradient-to-r from-[#3949ab] to-[#80deea] bg-clip-text text-transparent font-bold">
              innovation
            </span>
            , and{" "}
            <span className="bg-gradient-to-r from-[#80deea] to-[#b3e5fc] bg-clip-text text-transparent font-bold">
              development
            </span>
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm text-[#3949ab]"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#80deea] rounded-full animate-pulse" />
              <span className="font-medium">{blogs.length} Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#3949ab] rounded-full animate-pulse" />
              <span className="font-medium">{blogCategories.length} Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#201d66] rounded-full animate-pulse" />
              <span className="font-medium">Weekly Updates</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* All Posts button */}
          <motion.button
            onClick={clearFilters}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform ${
              !activeCategory
                ? 'bg-[#201d66] text-white shadow-lg' 
                : 'bg-white/80 backdrop-blur-sm text-[#3949ab] border border-[#e3f2fd] hover:bg-[#e3f2fd] hover:shadow-md'
            }`}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              All Posts
            </span>
          </motion.button>

          {/* Category buttons */}
          {blogCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(activeCategory === category.slug ? null : category.slug)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform ${
                activeCategory === category.slug
                  ? 'bg-[#201d66] text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm text-[#3949ab] border border-[#e3f2fd] hover:bg-[#e3f2fd] hover:shadow-md'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                {category.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredBlogs.length === 0 ? (
            <motion.div
              className="col-span-full text-center py-16"
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
                className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#e3f2fd]/50 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                variants={itemVariants}
                whileHover={cardVariants.hover}
                onClick={() => onBlogSelect?.(blog)}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e3f2fd]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                {/* Blog Status Indicators */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    {blog.featured && (
                      <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#80deea] to-[#b3e5fc] text-[#201d66] px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        Featured
                      </span>
                    )}
                    <span className="inline-flex items-center gap-2 bg-[#e3f2fd] text-[#3949ab] px-3 py-1 rounded-full text-xs font-medium border border-[#b3e5fc]">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      {formatDate(blog.date)}
                    </span>
                  </div>
                  <span className="text-[#3949ab] font-medium text-xs bg-[#f8f9fa] px-3 py-1 rounded-full border border-[#e3f2fd]">
                    {blog.readTime} min read
                  </span>
                </div>
                
                {/* Blog Content */}
                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#201d66] mb-3 leading-tight hover:text-[#3949ab] transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Category Badge */}
                  <div className="mb-3">
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
                  <p className="text-[#3949ab] text-sm leading-relaxed mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-full text-xs font-medium bg-[#f8f9fa] text-[#3949ab] border border-[#e3f2fd]"
                      >
                        #{tag}
                      </span>
                    ))}
                    {blog.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs text-[#3949ab] bg-[#f8f9fa] rounded-full border border-[#e3f2fd]">
                        +{blog.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button 
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-[#201d66] text-white rounded-lg font-semibold hover:bg-[#3949ab] transition-all duration-300 text-sm transform hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        onBlogSelect?.(blog);
                      }}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M15 12h6m-6 0l-3-3m3 3l-3 3"/>
                      </svg>
                      Read Article
                    </button>
                    
                    {blog.socialLinks?.devTo && (
                      <a
                        href={blog.socialLinks.devTo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-white border-2 border-[#e3f2fd] text-[#201d66] rounded-lg font-semibold hover:bg-[#e3f2fd] transition-all duration-300 text-sm transform hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31H13.65v1.3zm4.68 2.23c0 2.24-.02 2.32-.3 2.57-.43.38-.94.44-2.94.44-1.11 0-1.48-.02-1.67-.1-.32-.14-.37-.26-.37-2.91 0-2.65.05-2.77.37-2.91.19-.08.56-.1 1.67-.1 2 0 2.51.06 2.94.44.28.25.3.33.3 2.57z"/>
                        </svg>
                        Dev.to
                      </a>
                    )}
                  </div>

                  {/* Author Info */}
                  <div className="mt-4 pt-4 border-t border-[#e3f2fd] flex items-center gap-3">
                    <img
                      src={blog.author.avatar || '/profile.jpg'}
                      alt={blog.author.name}
                      className="w-8 h-8 rounded-full border-2 border-[#e3f2fd]"
                    />
                    <div>
                      <h4 className="font-semibold text-[#201d66] text-sm">{blog.author.name}</h4>
                      <p className="text-xs text-[#3949ab]">Full-Stack Developer</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </motion.div>

        {/* Show More/Less Button */}
        {blogs.length > 6 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#201d66] to-[#3949ab] text-white rounded-xl hover:from-[#3949ab] hover:to-[#201d66] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
              {showAll ? 'Show Less' : `Explore All ${blogs.length} Articles`}
              {!showAll && (
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  +{blogs.length - 6}
                </span>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
