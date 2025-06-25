import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '../types/blog';
import { blogCMS } from '../lib/blogCMS';

interface BlogPostPageProps {
  blog: BlogPost;
  onBack: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ blog, onBack }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      const blogContent = await blogCMS.loadBlogContent(blog.slug);
      setContent(blogContent || blog.description);
      setLoading(false);
    };

    loadContent();
  }, [blog.slug, blog.description]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.article
      className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-[#3949ab] hover:text-[#201d66] mb-8 transition-colors"
        whileHover={{ x: -5 }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M19 12H5m7-7l-7 7 7 7"/>
        </svg>
        Back to Blog
      </motion.button>

      {/* Blog Header */}
      <header className="mb-12">
        <motion.div
          className="flex flex-wrap items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {blog.featured && (
            <span className="bg-[#80deea] text-[#201d66] px-3 py-1 rounded-full text-sm font-bold">
              Featured
            </span>
          )}
          <span className="text-[#3949ab] font-medium">{formatDate(blog.date)}</span>
          <span className="text-[#3949ab]">•</span>
          <span className="text-[#3949ab]">{blog.readTime} min read</span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#201d66] mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {blog.title}
        </motion.h1>

        <motion.p
          className="text-xl text-[#3949ab] mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {blog.excerpt}
        </motion.p>

        {/* Tags */}        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {blog.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="bg-[#e3f2fd] text-[#3949ab] px-4 py-2 rounded-full text-sm font-medium border border-[#b3e5fc]"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Author Info */}
        <motion.div
          className="flex items-center gap-4 p-6 bg-[#e3f2fd]/60 rounded-2xl border border-[#b3e5fc]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <img
            src={blog.author.avatar || '/profile.jpg'}
            alt={blog.author.name}
            className="w-16 h-16 rounded-full border-2 border-[#201d66]"
          />
          <div>
            <h3 className="text-lg font-semibold text-[#201d66]">{blog.author.name}</h3>
            <p className="text-[#3949ab]">Software Developer & Tech Enthusiast</p>
          </div>
        </motion.div>
      </header>

      {/* Blog Content */}
      <motion.div
        className="prose prose-lg max-w-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >        {loading ? (
          <div className="blog-loading">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#201d66]"></div>
              <p className="text-[#3949ab]">Loading blog content...</p>
            </div>
          </div>
        ) : content ? (
          <div
            className="blog-content text-[#201d66] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <div className="blog-content text-[#201d66] leading-relaxed">
            <p className="text-xl text-[#3949ab] text-center py-12">
              Content is being loaded. Please check back soon!
            </p>
            <div className="bg-[#e3f2fd] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#201d66] mb-3">About this article:</h3>
              <p className="text-[#3949ab]">{blog.description}</p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Social Share */}
      <motion.div
        className="mt-12 pt-8 border-t border-[#e3f2fd]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-xl font-semibold text-[#201d66] mb-4">Share this article</h3>
        <div className="flex gap-4">
          {blog.socialLinks?.devTo && (
            <a
              href={blog.socialLinks.devTo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#201d66] text-white rounded-lg hover:bg-[#3949ab] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
              </svg>
              Read on Dev.to
            </a>
          )}
          
          <button
            onClick={() => navigator.share?.({ 
              title: blog.title, 
              text: blog.excerpt, 
              url: window.location.href 
            })}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#e3f2fd] text-[#201d66] rounded-lg hover:bg-[#b3e5fc] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
            </svg>
            Share
          </button>
        </div>
      </motion.div>
    </motion.article>
  );
};
