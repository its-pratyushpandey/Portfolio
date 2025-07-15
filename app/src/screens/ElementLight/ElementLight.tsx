import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { AboutMeSection } from "./section/AboutMeSection/AboutMeSection";
import { ContactSection } from "./section/ContactSection/ContactSection";
import { SkillsSection } from "./section/SkillsSection/SkillsSection";
import { ExperienceSection } from "./section/ExperienceSection/ExperienceSection";
import { BlogSection } from "./section/BlogSection/BlogSection";
import { HowICanHelpSection } from "./section/HowICanHelpSection/HowICanHelpSection";
import { HeroSection } from "./section/HeroSection/HeroSection";
import { BlogPostPage } from "../../components/BlogPostPage";
import { AllBlogsPage } from "../../components/AllBlogsPage";
import { BlogPost } from "../../types/blog";

export const ElementLight = (): JSX.Element => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [showAllBlogs, setShowAllBlogs] = useState<boolean>(false);

  const handleBlogSelect = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setShowAllBlogs(false);
    // Scroll to top for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShowAllBlogs = () => {
    setShowAllBlogs(true);
    setSelectedBlog(null);
    // Scroll to top for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    setSelectedBlog(null);
    setShowAllBlogs(false);
    // Scroll to blog section
    document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBackFromAllBlogs = () => {
    setShowAllBlogs(false);
    setSelectedBlog(null);
    // Scroll to blog section
    document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
  };

  // If showing all blogs, show the AllBlogsPage
  if (showAllBlogs) {
    return (
      <div className="flex flex-col w-full min-h-screen items-start relative bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] text-[#201d66] font-inter">
        {/* Header navigation for all blogs page */}
        <header className="flex w-full items-center justify-between px-5 py-3 fixed top-0 left-0 bg-white/80 backdrop-blur-md shadow-md z-20 border-b border-[#201d66]/10">
          {/* Logo and Brand Name */}
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <img
              className="relative w-[121px] h-[45px]"
              alt="Logo"
              src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2-21.svg"
            />
            <span
              className="mt-1 text-2xl font-extrabold tracking-wide bg-gradient-to-r from-[#201d66] via-[#3949ab] to-[#80deea] bg-clip-text text-transparent drop-shadow-sm select-none"
              style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif', letterSpacing: '0.05em' }}
            >
              TechVerse
            </span>
          </div>
          
          {/* Back to main site button */}
          <button
            onClick={handleBackFromAllBlogs}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#201d66] text-white rounded-full hover:bg-[#3949ab] transition-colors shadow-lg font-semibold"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5m7-7l-7 7 7 7"/>
            </svg>
            Back to Portfolio
          </button>
        </header>
        
        <AllBlogsPage onBlogSelect={handleBlogSelect} onBack={handleBackFromAllBlogs} />
      </div>
    );
  }

  // If a blog is selected, show the blog post page
  if (selectedBlog) {
    return (
      <div className="flex flex-col w-full min-h-screen items-start relative bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] text-[#201d66] font-inter">
        {/* Header navigation for blog post page */}
        <header className="flex w-full items-center justify-between px-5 py-3 fixed top-0 left-0 bg-white/80 backdrop-blur-md shadow-md z-20 border-b border-[#201d66]/10">
          {/* Logo and Brand Name */}
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <img
              className="relative w-[121px] h-[45px]"
              alt="Logo"
              src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2-21.svg"
            />
            <span
              className="mt-1 text-2xl font-extrabold tracking-wide bg-gradient-to-r from-[#201d66] via-[#3949ab] to-[#80deea] bg-clip-text text-transparent drop-shadow-sm select-none"
              style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif', letterSpacing: '0.05em' }}
            >
              TechVerse
            </span>
          </div>
          
          {/* Back to main site button */}
          <button
            onClick={handleBackToBlog}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#201d66] text-white rounded-full hover:bg-[#3949ab] transition-colors shadow-lg font-semibold"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5m7-7l-7 7 7 7"/>
            </svg>
            Back to Portfolio
          </button>
        </header>
        
        <BlogPostPage blog={selectedBlog} onBack={handleBackToBlog} />
      </div>
    );
  }
  return (
    <div
      className="flex flex-col w-full min-h-screen items-start relative bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] text-[#201d66] font-inter"
      data-model-id="2:273"
    >
      {/* Professional Hero Section */}
      <HeroSection />
      
      {/* Main content sections */}
      <AboutMeSection />
      <SkillsSection />
      <HowICanHelpSection />
      <ExperienceSection />
      <BlogSection onBlogSelect={handleBlogSelect} onShowAllBlogs={handleShowAllBlogs} />
      <ContactSection />
      {/* Footer component */}
      <div className="flex flex-col w-full items-start mt-8">
        <img className="relative w-full h-[153.59px]" alt="Component" />
        <img
          className="relative w-full flex-[0_0_auto] mt-[-153.28px]"
          alt="Container"
          src="https://c.animaapp.com/mc46fmevF9sLme/img/container.svg"
        />
      </div>
      {/* Blue dot indicator */}
      <div className="fixed w-3 h-3 top-0 -left-1.5 bg-[#201d66] rounded-full shadow-lg border-2 border-white z-50" />
      {/* Header navigation */}
      <header className="flex w-full items-center justify-between px-5 py-3 fixed top-0 left-0 bg-white/80 backdrop-blur-md shadow-md z-20 border-b border-[#201d66]/10">
        {/* Logo and Brand Name */}
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <img
            className="relative w-[121px] h-[45px]"
            alt="Logo"
            src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2-21.svg"
          />
          <span
            className="mt-1 text-2xl font-extrabold tracking-wide bg-gradient-to-r from-[#201d66] via-[#3949ab] to-[#80deea] bg-clip-text text-transparent drop-shadow-sm select-none"
            style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif', letterSpacing: '0.05em' }}
          >
            TechVerse
          </span>
        </div>
        {/* Navigation links */}
        <nav className="inline-flex items-center gap-7 relative flex-[0_0_auto]">
          <Button
            className="inline-flex items-center justify-center px-8 py-3 bg-[#201d66] text-white rounded-full hover:bg-[#3949ab] transition-colors shadow-lg font-semibold text-base"
            asChild
          >
            <a
              className="w-fit text-white text-[15.125px] font-semibold whitespace-nowrap"
              href="https://pratyush.netlify.app/contact"
              rel="noopener noreferrer"
              target="_blank"
            >
              Let&#39;s Talk.
            </a>
          </Button>
        </nav>
      </header>
    </div>
  );
};
