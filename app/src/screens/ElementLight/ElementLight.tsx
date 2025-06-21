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
      className="flex flex-col w-full items-start relative bg-manishrajnetlifyappwhite"
      data-model-id="2:273"
    >
      <div className="flex flex-col items-start relative w-full bg-manishrajnetlifyapphawkes-blue">
        <div className="relative w-full bg-manishrajnetlifyapphawkes-blue">
          {/* Hero section with background image */}
          <div className="flex w-full h-[1200px] items-center justify-center relative">
            <div className="relative w-[1056px] h-[864px] mx-auto rounded-md overflow-hidden">
              <div className="relative w-[1162px] h-[950px] top-[-43px] left-[-53px] rounded-md opacity-50 bg-[url(https://c.animaapp.com/mc46fmevF9sLme/img/abstract-cubic-background-image-.png)] bg-cover bg-[50%_50%]" />
            </div>

            {/* Scroll indicator */}
            <div className="inline-flex flex-col items-center justify-center gap-[21.05px] py-0 px-[7px] absolute bottom-4 right-10">
              <div className="inline-flex flex-col items-start relative rotate-90">
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-manishrajnetlifyappblack text-[16.2px] tracking-[0] leading-[26.4px] whitespace-nowrap">
                  scroll
                </div>
              </div>
              <div className="relative w-10 h-1 overflow-hidden rotate-90">
                <div className="relative h-px left-10 bg-manishrajnetlifyapplucky-point" />
              </div>
            </div>

            {/* Hero content */}
            <div className="flex flex-col items-center relative flex-1 grow">
              <div className="inline-flex flex-col items-start pt-0 pb-4 px-0 relative flex-[0_0_auto]">
                <img
                  className="relative w-full h-48"
                  alt="Mask group"
                  src="https://drive.google.com/uc?export=view&id=1zao1OpajYz4syInvI4wqZcsLcsXTj5AV"
                />
              </div>
              <div className="inline-flex flex-col items-start pt-0 pb-4 px-0 relative flex-[0_0_auto]">
                <img
                  className="relative w-full h-48"
                  alt="Mask group"
                  src="https://c.animaapp.com/mc46fmevF9sLme/img/mask-group-2.svg"
                />
              </div>
              <img
                className="relative w-full h-48"
                alt="Mask group"
                src="/profile.jpg"
              />
            </div>
          </div>

          {/* Main content sections */}
          <AboutMeSection />
          <SkillsSection />
          <HowICanHelpSection />
          <ExperienceSection />
          <BlogSection />
          {/* Let's Connect Section - Professional, Responsive, Animated */}
          <ContactSection />

          {/* Footer component */}
          <div className="flex flex-col w-full items-start">
            <img className="relative w-full h-[153.59px]" alt="Component" />
            <img
              className="relative w-full flex-[0_0_auto] mt-[-153.28px]"
              alt="Container"
              src="https://c.animaapp.com/mc46fmevF9sLme/img/container.svg"
            />
          </div>
        </div>
      </div>

      {/* Blue dot indicator */}
      <div className="fixed w-3 h-3 top-0 -left-1.5 bg-manishrajnetlifyappcornflower-blue rounded-[33554400px]" />

      {/* Header navigation */}
      <header className="flex w-full items-center justify-between px-5 py-3 fixed top-0 left-0 bg-manishrajnetlifyapphawkes-blue z-10">
        {/* Logo */}
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <img
            className="relative w-[121px] h-[45px]"
            alt="Logo"
            src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2-21.svg"
          />
        </div>

        {/* Navigation links */}
        <div className="inline-flex items-center gap-7 relative flex-[0_0_auto]">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-manishrajnetlifyappblack text-[16px] tracking-[0] leading-[26.4px] whitespace-nowrap"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.text}
            </a>
          ))}

          {/* Call to action button */}
          <Button
            className="inline-flex items-center justify-center px-8 py-3 bg-manishrajnetlifyapplucky-point rounded-[33554400px] hover:bg-opacity-90 transition-colors"
            asChild
          >
            <a
              className="w-fit text-manishrajnetlifyappsail text-[15.125px] font-normal whitespace-nowrap"
              href="https://manishraj.netlify.app/contact"
              rel="noopener noreferrer"
              target="_blank"
            >
              Let&#39;s Talk.
            </a>
          </Button>
        </div>
      </header>
    </div>
  );
};
