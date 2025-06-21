import React from "react";
import { Button } from "../../components/ui/button";
import { AboutMeSection } from "./sections/AboutMeSection/AboutMeSection";
import { ContactSection } from "./sections/ContactSection";
import { SkillsSection } from "./sections/SkillsSection/SkillsSection";
import { ExperienceSection } from "./section/ExperienceSection/ExperienceSection";
import { BlogSection } from "./section/BlogSection/BlogSection";
import { HowICanHelpSection } from "./section/HowICanHelpSection/HowICanHelpSection";

// Navigation links data
const navigationLinks = [
  { text: "About", href: "#aboutme" },
  { text: "Skills", href: "#skills" },
  { text: "Projects", href: "#works" },
  { text: "Experience", href: "#experience" },
  { text: "Blog", href: "#blog" },
  {
    text: "Certifications",
    href: "#certifications",
  },
];

export const ElementLight = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full min-h-screen items-start relative bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] text-[#201d66] font-inter"
      data-model-id="2:273"
    >
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center min-h-[90vh] pt-32 pb-16 px-4 md:px-0 relative bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#e3f2fd] to-[#b3e5fc] opacity-60" style={{ backgroundAttachment: 'fixed' }} />
        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto gap-6">
          <img
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#201d66] shadow-lg object-cover mb-4"
            alt="Profile"
            src="/profile.jpg"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#201d66] text-center drop-shadow-md leading-tight">Pratyush Kumar Pandey</h1>
          <h2 className="text-xl md:text-2xl text-[#3949ab] font-semibold text-center mb-2">Software Developer | Full Stack Developer</h2>
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center mt-4">
            <a
              href="#contact"
              className="bg-[#201d66] text-white px-6 py-3 rounded-full text-lg hover:bg-[#3949ab] transition shadow-lg font-semibold"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/its-pratyushpandey"
              className="bg-white border-2 border-[#201d66] text-[#201d66] px-6 py-3 rounded-full text-lg hover:bg-[#201d66] hover:text-white hover:bg-[#3949ab] transition shadow-lg font-semibold"
              target="_blank" rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
      {/* Main content sections */}
      <AboutMeSection />
      <SkillsSection />
      <HowICanHelpSection />
      <ExperienceSection />
      <BlogSection />
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
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              className="relative w-fit font-semibold text-[#201d66] hover:text-[#3949ab] transition-colors text-[16px] leading-[26.4px] whitespace-nowrap"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.text}
            </a>
          ))}
          <Button
            className="inline-flex items-center justify-center px-8 py-3 bg-[#201d66] text-white rounded-full hover:bg-[#3949ab] transition-colors shadow-lg font-semibold text-base"
            asChild
          >
            <a
              className="w-fit text-white text-[15.125px] font-semibold whitespace-nowrap"
              href="https://manishraj.netlify.app/contact"
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
