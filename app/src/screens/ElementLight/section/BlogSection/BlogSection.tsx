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
    setShowAll(false); // Reset showAll when clearing filters
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
        >          {/* All Posts button */}
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
              onClick={() => {
                const newCategory = activeCategory === category.slug ? null : category.slug;
                setActiveCategory(newCategory);
                setShowAll(false); // Reset showAll when changing category
              }}
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
                className={`group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-[#e3f2fd]/50 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden blog-card-3d ${blog.featured ? 'blog-3d-featured blog-3d-holographic' : ''}`}
                variants={itemVariants}
                whileHover={cardVariants.hover}
                onClick={() => onBlogSelect?.(blog)}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e3f2fd]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                {/* Cover Image Section with 3D effects */}
                <div className="blog-3d-cover-container relative overflow-hidden rounded-t-2xl blog-3d-optimized">
                  <img
                    src={blog.coverImage.url}
                    alt={blog.coverImage.alt}
                    className="blog-3d-cover w-full h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 object-cover transition-all duration-500 blog-3d-cover-loading"
                    loading="lazy"
                    onLoad={(e) => {
                      // Remove loading state when image loads
                      e.currentTarget.classList.remove('blog-3d-cover-loading');
                      e.currentTarget.classList.add('blog-3d-optimized');
                    }}
                    onError={(e) => {
                      // Fallback for broken images with professional gradient
                      e.currentTarget.style.background = 'linear-gradient(135deg, #201d66 0%, #3949ab 50%, #80deea 100%)';
                      e.currentTarget.classList.remove('blog-3d-cover-loading');
                    }}
                  />
                  
                  {/* Professional 3D overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Enhanced featured badge with 3D effects */}
                  {blog.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="blog-3d-badge bg-gradient-to-r from-[#80deea] to-[#b3e5fc] text-[#201d66] px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                  
                  {/* Enhanced read time badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20 shadow-lg">
                      {blog.readTime} min read
                    </span>
                  </div>
                  
                  {/* Enhanced category badge with 3D depth */}
                  <div className="absolute bottom-4 left-4 z-10">
                    {blogCategories.find(cat => cat.slug === blog.category) && (
                      <span 
                        className="blog-3d-badge px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg backdrop-blur-sm border border-white/30"
                        style={{ 
                          backgroundColor: blogCategories.find(cat => cat.slug === blog.category)?.color + 'E6' 
                        }}
                      >
                        {blogCategories.find(cat => cat.slug === blog.category)?.name}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative z-10 blog-3d-content">{/* Blog Meta Info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#80deea] text-sm font-medium">
                      {formatDate(blog.date)}
                    </span>
                  </div>
                  
                  {/* Blog Title */}
                  <h3 className="text-xl font-bold text-[#201d66] mb-3 leading-tight group-hover:text-[#3949ab] transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Blog Excerpt */}
                  <p className="text-[#3949ab] text-sm leading-relaxed mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 3).map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="bg-[#e3f2fd] text-[#3949ab] px-3 py-1 rounded-full text-xs font-medium border border-[#b3e5fc] hover:bg-[#b3e5fc] transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                    {blog.tags.length > 3 && (
                      <span className="text-[#3949ab] text-xs font-medium px-2 py-1">
                        +{blog.tags.length - 3}
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
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
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
                          <path d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .468-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.078-.408-.233-.525zM19.236 3H4.764C3.791 3 3.002 3.787 3.002 4.760v14.48c0 .973.789 1.760 1.762 1.760h14.472c.973 0 1.762-.787 1.762-1.760V4.760C21.998 3.787 21.209 3 20.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.903 1.144 1.903 1.899v2.85zm4.045-3.562H11.1v1.544h1.909v.901H11.1v1.615h2.14v.901h-3.202V8.665h3.202v.901-.001zm2.156 2.448v1.718c0 1.549.021 1.911 1.618 1.911 1.598 0 1.619-.362 1.619-1.911v-1.718c0-1.548-.021-1.911-1.619-1.911-1.597 0-1.618.363-1.618 1.911zm2.87-.362v2.503c0 .647-.171 1.353-1.252 1.353-1.081 0-1.253-.706-1.253-1.353V12.5c0-.647.172-1.353 1.253-1.353 1.081 0 1.252.706 1.252 1.353z"/>
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
                      className="w-8 h-8 rounded-full border-2 border-[#e3f2fd] object-cover"
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
        </motion.div>        {/* Show More/Less Button */}
        {(() => {
          const totalAvailable = activeCategory 
            ? blogs.filter(blog => blog.category === activeCategory).length 
            : blogs.length;
          return totalAvailable > 6;
        })() && (
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
              {showAll ? 'Show Less' : `Explore All ${activeCategory ? blogs.filter(blog => blog.category === activeCategory).length : blogs.length} Articles`}
              {!showAll && (
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  +{(activeCategory ? blogs.filter(blog => blog.category === activeCategory).length : blogs.length) - 6}
                </span>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
