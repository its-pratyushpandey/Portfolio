import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Separator } from "../../../../components/ui/separator";
import { Button } from "../../../../components/ui/button";

// Data for programming languages
const programmingLanguages = ["Java", "C", "Python", "JavaScript"];

// Data for tech stacks
const techStacks = [
  "SpringBoot",
  "MySql",
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "Django",
  "PostgreSQL",
  "Git"
];

// Data for toolbox
const toolbox = [
  "Figma",
  "Gsap",
  "TailwindCSS",
  "ShadCN",
  "Firebase",
  "UI/UX Design"
];

// Data for timeline items
const timelineItems = [
  {
    id: "01",
    title: "Nayona Consultancy",
    period: "November 2024 - Present",
    highlighted: true
  },
  {
    id: "02",
    title: "GDSE Core Team",
    period: "2023 - 2024"
  },
  {
    id: "03",
    title: "Undergraduation",
    period: "2022 - present"
  },
  {
    id: "04",
    title: "Higher Secondary Certificate (HSC)",
    period: "2020 - 2022"
  },
  {
    id: "05",
    title: "Secondary School Certificate (SSC)",
    period: "2020"
  }
];

// Data for skills used in job
const jobSkills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Redux",
  "Firebase",
  "JWT",
  "Oracle NetSuite"
];

// Data for key achievements
const keyAchievements = [
  "Spearheaded the development of a MERN stack platform for Oracle EPM provider",
  "Integrated client website and admin system, improving user experience by 35%",
  "Streamlined customer communication processes",
  "Implemented secure authentication using JWT",
  "Training in Oracle NetSuite and managing client permissions"
];

// Data for specialties
const specialties = [
  {
    id: "01",
    title: "Full Stack Development",
    description: "Building comprehensive web applications with modern tech stacks that are responsive, scalable and user-friendly.",
    skills: [
      "MERN Stack Applications",
      "Spring Boot + React Solutions",
      "RESTful API Development"
    ]
  },
  {
    id: "02",
    title: "Web Design & Frontend",
    description: "Crafting engaging user interfaces with clean code and modern design principles for exceptional user experiences.",
    skills: [
      "Responsive UI Development",
      "Interactive Animations with GSAP",
      "Tailwind CSS Implementations"
    ]
  },
  {
    id: "03",
    title: "Problem Solving",
    description: "Solving complex problems with efficient algorithms and data structures to deliver optimal technical solutions.",
    skills: [
      "Algorithm Optimization",
      "Technical Architecture Design",
      "Performance Enhancement"
    ]
  },
  {
    id: "04",
    title: "Project Management",
    description: "Leading projects from conception to completion with structured approaches and collaborative workflows.",
    skills: [
      "Agile Development Practices",
      "Version Control with Git",
      "CI/CD Pipeline Integration"
    ]
  }
];

// Data for tech badges
const techBadges = [
  "MERN Stack",
  "Spring Boot",
  "React",
  "CI/CD",
  "UI/UX",
  "Web Development"
];

export const AboutMeSection = (): JSX.Element => {
  return (
    <section className="w-full py-16">
<div className="container mx-auto px-4 max-w-7xl">
{/* Intro Section */}
        <div className="flex flex-col space-y-10">
<img
            className="w-full h-[153px]"
            alt="Mask group"
            src="https://c.animaapp.com/mc46fmevF9sLme/img/mask-group-3.svg"
          />
<div className="flex flex-col md:flex-row gap-10">
<div className="flex-1">
<div className="w-full h-[1360px] rounded-md bg-cover bg-center bg-[url(https://c.animaapp.com/mc46fmevF9sLme/img/manish-s-profile-picture.png)]" />
</div>
<div className="flex-1 flex flex-col gap-10">
<div>
<h2 className="font-normal text-[70px] tracking-[-2.16px] leading-[90px] text-manishrajnetlifyappblack">
A brief intro, who am I?
                </h2>
</div>
<div className="flex flex-col gap-10">
<p className="font-normal text-[32.5px] leading-10 text-manishrajnetlifyappblack">
I am a student, developer, and a pre-final year
                  <br />
undergrad pursuing a degree in Bachelor&#39;s in
                  <br />
Computer Science and Engineering from K L Deemed
                  <br />
to be University, India.
                </p>
<p className="font-normal text-[31.5px] leading-10 text-manishrajnetlifyappblack">
I am passionate about problem solving, web
                  <br />
development, and design. I am artistic, creative, and a<br />
problem solver. I love to design and code.💙
                </p>
<p className="font-normal text-[31.8px] leading-10 text-manishrajnetlifyappblack">
I am good at krafting solutions, critical thinking, and
                  <br />
have a good understanding of data structures and
                  <br />
algorithms. I have gained a hand full of experience in
                  <br />
full-stack web development using SpringBoot with
                  <br />
React, MERN stack &amp; Python Django. Currently I am
                  <br />
diving deep into Computer Science fundamentals in
                  <br />
3rd year of my undergraduation.
                </p>
<p className="font-normal text-[31.4px] leading-10 text-manishrajnetlifyappblack">
I love to sketch, paint, and read books. In my leisure
                  <br />
time I like to stay updated on new tech and review
                  <br />
books on my{" "}
                  <a href="https://www.instagram.com/aka_thelostbookmark/" rel="noopener noreferrer" target="_blank" className="underline">
Instagram
                  </a>
{" "}and share my insights on
                  <a
                    href="https://www.youtube.com/channel/UCmhi2NSl9RdC5biFARM3nsw"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline"
                  >
<br />
YouTube{" "}
                  </a>
📸
                </p>
</div>
</div>
</div>
</div>
{/* Skills Section */}
        <div className="mt-40 flex flex-col gap-10">
<img
            className="w-full h-[153px]"
            alt="Mask group"
            src="https://c.animaapp.com/mc46fmevF9sLme/img/mask-group-1.svg"
          />
<div className="flex flex-col gap-14">
{/* Programming Languages */}
            <div className="flex gap-24 min-h-[388px]">
<div className="w-[800px]">
<div className="flex flex-col gap-10">
<h2 className="font-normal text-[71px] tracking-[-2.16px] leading-[90px] text-manishrajnetlifyappblack">
programming
                    <br />
languages.
                  </h2>
<div className="max-w-2xl">
<p className="font-normal text-[26px] leading-9 text-manishrajnetlifyappblack">
I have a good understanding of these programming
                      <br />
languages and am always eager to learn new ones to
                      <br />
meet project needs and those which align with my
                      <br />
interests.
                    </p>
</div>
</div>
</div>
<div className="w-[800px]">
{programmingLanguages.map((language, index) => (
                  <div key={index} className="w-full">
<h3 className="font-normal text-[71px] leading-[72px] text-manishrajnetlifyappmoody-blue">
{language}
                    </h3>
</div>
))}
              </div>
</div>
{/* Tech Stacks */}
            <div className="flex gap-24">
<div className="w-[800px]">
<div className="flex flex-col gap-10">
<h2 className="font-normal text-[70px] tracking-[-2.16px] leading-[90px] text-manishrajnetlifyappblack">
my tech stacks.
                  </h2>
<div className="max-w-2xl">
<p className="font-normal text-[26px] leading-9 text-manishrajnetlifyappblack">
I have gained experience in these tech stack and git
                      <br />
was my go to tool for managing my projects. I like
                      <br />
working with ReactJs and NodeJs for now and I am
                      <br />
always eager to learn more.
                    </p>
</div>
</div>
</div>
<div className="w-[800px]">
{techStacks.map((tech, index) => (
                  <div key={index} className="w-full">
<h3 className="font-normal text-[71px] leading-[72px] text-manishrajnetlifyappmoody-blue">
{tech}
                    </h3>
</div>
))}
              </div>
</div>
{/* Toolbox */}
            <div className="flex gap-24">
<div className="w-[800px]">
<div className="flex flex-col gap-10">
<h2 className="font-normal text-[70px] tracking-[-2.16px] leading-[90px] text-manishrajnetlifyappblack">
my toolbox.
                  </h2>
<div className="max-w-2xl">
<p className="font-normal text-[26px] leading-9 text-manishrajnetlifyappblack">
I have experience with these tools and frameworks
                      <br />
and have used them in my projects.
                    </p>
</div>
</div>
</div>
<div className="w-[800px]">
{toolbox.map((tool, index) => (
                  <div key={index} className="w-full">
<h3 className="font-normal text-[71px] leading-[72px] text-manishrajnetlifyappmoody-blue">
{tool}
                    </h3>
</div>
))}
              </div>
</div>
</div>
</div>
{/* Experience Section */}
        <div className="mt-40 flex flex-col gap-6 overflow-hidden">
<img
            className="w-full h-[153px]"
            alt="Mask group"
            src="https://c.animaapp.com/mc46fmevF9sLme/img/mask-group-6.svg"
          />
<div className="flex gap-12 mt-24">
{/* Timeline */}
            <div className="w-1/3">
<div className="relative h-[552px]">
{timelineItems.map((item, index) => (
                  <div 
                    key={index} 
                    className={`${index === 0 ? 'absolute top-0 left-0 w-full bg-manishrajnetlifyappmalibu-20 rounded-xl p-5' : 'absolute'}`}
                    style={{ top: index * 112 + (index > 0 ? 20 : 0), left: index > 0 ? 20 : 0 }}
                  >
<div className="flex items-center gap-3">
<div>
<span className={`text-[38px] leading-[57px] ${item.highlighted ? 'text-manishrajnetlifyapplucky-point' : 'text-manishrajnetlifyappmoody-blue opacity-70'}`}>
{item.id}
                        </span>
</div>
<div className="flex flex-col gap-1">
<h4 className={`text-[23px] tracking-[-0.72px] leading-9 font-medium ${item.highlighted ? 'text-manishrajnetlifyapplucky-point' : 'text-manishrajnetlifyappsapphire'}`}>
{item.title}
                        </h4>
<p className="text-base text-manishrajnetlifyappmoody-blue">
{item.period}
                        </p>
</div>
</div>
</div>
))}
              </div>
</div>
{/* Experience Details */}
            <div className="w-2/3">
<Card className="p-10 bg-manishrajnetlifyappsail-30 border border-[#90c9f833] backdrop-blur-sm">
<CardContent className="p-0 space-y-8">
<div className="flex justify-between items-start">
<div className="flex flex-col gap-1">
<h3 className="text-[38px] font-bold tracking-[-1.32px] leading-[66px] text-manishrajnetlifyappsapphire">
Nayona Consultancy
                      </h3>
<p className="text-[16px] font-medium leading-[26px] text-manishrajnetlifyapplucky-point">
Freelance Web Developer &amp; Oracle NetSuite Trainee
                      </p>
<div className="flex items-center pt-2">
<div className="w-6 h-4 pr-2">
<img
                            className="w-4 h-4"
                            alt="Component"
                            src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2-27.svg"
                          />
</div>
<span className="text-[14px] font-medium text-manishrajnetlifyappindigo">
Remote
                        </span>
</div>
</div>
<Badge className="bg-manishrajnetlifyapplucky-point-10 text-manishrajnetlifyapplucky-point text-xs tracking-[-0.30px] px-3 py-1 rounded-full">
November 2024 - Present
                    </Badge>
</div>
<p className="text-[21px] leading-[39px] text-manishrajnetlifyappsapphire">
Full-Stack Development: Spearheaded the development of a MERN stack platform for Oracle EPM
                    <br />
provider, Nayona Consultancy, an US based company, integrating a client website and admin system,
                    <br />
resulting in a streamlined user experience, and improved customer communication.
                  </p>
<div className="flex flex-col gap-4 pt-2">
<h4 className="text-[16px] font-medium tracking-[0.80px] leading-6 text-manishrajnetlifyappindigo">
SKILLS &amp; TECHNOLOGIES
                    </h4>
<div className="flex flex-wrap gap-2">
{jobSkills.map((skill, index) => (
                        <Badge 
                          key={index} 
                          className="px-[17px] py-[9px] text-[15px] font-medium bg-manishrajnetlifyappmalibu-20 text-manishrajnetlifyappsapphire border border-[#90c9f833] rounded-lg"
                        >
{skill}
                        </Badge>
))}
                    </div>
</div>
<div className="flex flex-col gap-4 pt-2">
<h4 className="text-[16px] font-medium tracking-[0.80px] leading-6 text-manishrajnetlifyappindigo">
KEY ACHIEVEMENTS
                    </h4>
<div className="flex flex-col gap-3">
{keyAchievements.map((achievement, index) => (
                        <div key={index} className="flex items-start">
<span className="pr-3 text-xl text-manishrajnetlifyapplucky-point">→</span>
<p className="text-[16px] leading-[26px] text-manishrajnetlifyappsapphire">
{achievement}
                          </p>
</div>
))}
                    </div>
</div>
</CardContent>
</Card>
</div>
</div>
</div>
{/* Intro Banner */}
        <div className="mt-40 flex flex-col items-center">
<div className="w-full">
<h1 className="text-[120px] font-medium tracking-[-3.74px] leading-[135px] text-manishrajnetlifyappmalibu">
I am passionately curious,
              <br />
always eager to learn and
              <br />
explore new possibilities in the
              <br />
world of tech and code.
            </h1>
</div>
<div className="flex items-center pt-12">
<div className="pr-8">
<Button 
                className="px-8 py-4 text-[16px] font-bold text-manishrajnetlifyapplucky-point rounded-full"
                asChild
              >
<a
                  href="https://manishraj.netlify.app/assets/2200032955_ManishRaj_Resume-Bmsf4nQq.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
Résumé
                  <div className="w-8 h-6 pl-2">
<img
                      className="w-6 h-6"
                      alt="Component"
                      src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2-34.svg"
                    />
</div>
</a>
</Button>
</div>
<div className="pr-8">
<img
                className="w-12 h-12"
                alt="Component"
                src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2-36.svg"
              />
</div>
<div>
<img
                className="w-12 h-12"
                alt="Component"
                src="https://c.animaapp.com/mc46fmevF9sLme/img/component-2-23.svg"
              />
</div>
</div>
{/* Specialties Section */}
          <div className="w-full pt-24 pb-48">
<div className="max-w-[1536px] mx-auto pt-24 pb-56 flex flex-col items-center">
<div className="max-w-screen-2xl w-[1536px] flex flex-col items-start gap-16">
<img
                  className="w-full h-[307px]"
                  alt="Mask group"
                  src="https://c.animaapp.com/mc46fmevF9sLme/img/mask-group-8.svg"
                />
<div className="flex w-full">
<div className="w-96"></div>
<div className="w-[1152px]">
<div className="flex flex-col gap-8">
<div className="pt-2.5 pb-0.5">
<h2 className="text-[32px] font-normal tracking-[-0.96px] leading-[48px] text-transparent">
Full-Stack Development • UI/UX Design • Problem Solving
                        </h2>
</div>
<div className="w-[768px]">
<p className="text-[18px] leading-[33px]">
<span className="text-[#e3f1fcb2]">I specialize in crafting </span>
<span className="font-medium text-[#bbdefb]">seamless digital experiences</span>
<span className="text-[#e3f1fcb2]"> that combine technical excellence
                            <br />
with intuitive design. From concept to deployment, I transform complex ideas into
                            <br />
elegant solutions using modern technologies.
                          </span>
</p>
</div>
<div className="pt-1">
<div className="flex flex-wrap gap-3">
{techBadges.map((badge, index) => (
                            <Badge 
                              key={index} 
                              className="px-[13px] py-[7px] text-[13px] bg-manishrajnetlifyappmoody-blue-20 text-manishrajnetlifyappsail border border-[#7985ca4c] rounded-full"
                            >
{badge}
                            </Badge>
))}
                        </div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Specialty Cards */}
            <div className="w-full">
{specialties.map((specialty, index) => (
                <div key={index} className="max-w-[1696px] w-[1696px] h-[563px] flex flex-col items-start justify-center">
<div className="flex-1 w-full pt-[17px] bg-manishrajnetlifyapphawkes-blue border-t border-[#90caf9]">
<div className="flex items-center justify-between">
<div className="w-[282px]">
<span className="text-[39px] font-normal leading-[66px] text-manishrajnetlifyappmalibu whitespace-nowrap">
({specialty.id})
                        </span>
</div>
<div className="w-[533px]">
<h3 className="text-[42px] font-normal tracking-[-1.32px] leading-[66px] text-manishrajnetlifyappmalibu whitespace-nowrap">
{specialty.title}
                        </h3>
</div>
<div className="w-8 h-8 opacity-50">
<img
                          className="w-8 h-8"
                          alt="Component"
                          src={`https://c.animaapp.com/mc46fmevF9sLme/img/component-2-${42 + index}.svg`}
                        />
</div>
</div>
<div className="min-h-[480px] flex gap-8 py-8">
<div className="w-[688px]">
<div className="max-w-[610px] pb-2 opacity-80">
<p className="text-[21px] font-normal leading-9 text-manishrajnetlifyappwhite-ice">
{specialty.description.split('<br />').map((line, i) => (
                              <React.Fragment key={i}>
{line}
                                {i < specialty.description.split('<br />').length - 1 && <br />}
                              </React.Fragment>
))}
                          </p>
</div>
</div>
<div className="flex-1 pr-2">
<Card className="p-[17px] rounded-lg border border-[#7985ca33]">
<CardContent className="p-0">
{specialty.skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className="flex items-start py-4 rounded-md">
<span className="text-[21px] font-medium text-[#90caf9] leading-[41px]">
{skillIndex < 9 ? `0${skillIndex + 1}` : skillIndex + 1}
                                </span>
<span className="text-[20px] font-normal text-manishrajnetlifyappwhite-ice leading-[31px]">
{skill}
                                </span>
</div>
))}
                          </CardContent>
</Card>
</div>
</div>
</div>
</div>
))}
            </div>
</div>
{/* Quote Section */}
          <div className="w-full py-24">
<div className="max-w-4xl w-[896px] relative">
<div className="absolute -top-10 left-0 opacity-20 w-[45px]">
<span className="text-[#90caf9] text-9xl leading-[128px] font-normal">&#34;</span>
</div>
<div className="flex flex-col items-center gap-6">
<blockquote className="text-[28px] font-light text-center leading-[52px] text-manishrajnetlifyappsail">
Code is like poetry; it should be elegant, concise, and tell a story
                  <br />
that others can understand.
                </blockquote>
<cite className="text-[16px] font-normal text-center text-manishrajnetlifyappmalibu">
— My Development Philosophy
                </cite>
</div>
</div>
</div>
</div>
{/* Projects Section */}
        <div className="mt-40">
<div className="py-24 flex flex-col gap-20">
<img
              className="w-full h-[153px]"
              alt="Mask group"
              src="https://c.animaapp.com/mc46fmevF9sLme/img/mask-group-4.svg"
            />
<div className="w-[1536px] flex flex-col gap-12">
<div className="flex justify-between items-end w-full">
<div className="relative w-[335px] h-[70px]">
<h2 className="absolute top-0 left-0 w-[319px] h-[66px] font-normal text-[44px] tracking-[-1.32px] leading-[66px] text-manishrajnetlifyappmalibu whitespace-nowrap">
Selected Works
                  </h2>
<div className="absolute top-1 left-[319px]">
<span className="text-[13px] text-manishrajnetlifyappsail">(2)</span>
</div>
</div>
<div>
<div className="flex items-center gap-6">
<span className="text-[16px] font-normal text-manishrajnetlifyappsail">(PROJECTS)</span>
<div className="max-w-xs pr-[7px]">
<p className="text-[21px] font-normal leading-9 text-[#90caf9]">
Featured projects that have
                        <br />
been meticulously crafted with
                        <br />
passion to drive results and
                        <br />
impact.
                      </p>
</div>
</div>
</div>
</div>
{/* Project Showcase */}
              <div className="pt-16">
<div className="flex w-full">
<div className="w-[640px]">
<div className="flex items-center">
<div>
<span className="text-[224px] leading-[224px] font-normal text-manishrajnetlifyappsail whitespace-nowrap">0</span>
</div>
<div className="relative w-[187px] h-56">
<div className="w-[187px] -top-[15px] relative opacity-[0.23]">
<span className="text-[212px] leading-[224px] font-normal text-manishrajnetlifyappsail whitespace-nowrap">2.</span>
</div>
</div>
</div>
</div>
<div className="w-[896px] flex flex-col gap-32">
{/* Project 1 */}
                    <div className="flex flex-col gap-6">
<div className="relative flex items-center justify-center px-8 py-[210px] rounded-md overflow-hidden z-[1]">
<div className="absolute w-[896px] h-[896px] top-0 left-0 opacity-50 bg-cover bg-center bg-[url(https://c.animaapp.com/mc46fmevF9sLme/img/nayona-consultancy-service.png)]"></div>
<div className="flex-1 rounded-lg overflow-hidden">
<div className="bg-manishrajnetlifyappsapphire">
<div className="bg-manishrajnetlifyappblack">
<div className="relative w-[832px] h-[468px]">
<div className="w-[832px] absolute top-0 left
                                <div className="w-[832px] absolute top-0 left-0 flex flex-col items-start justify-center">
<div className="flex-1 w-full">
<div className="relative max-w-[832px] w-[832px] h-[468px] bg-cover bg-center bg-[url(https://c.animaapp.com/mc46fmevF9sLme/img/projectposter1-hzfo1fsm-png.png)]" />
</div>
</div>
</div>
</div>
</div>
</div>
<Badge 
                          className="absolute top-6 right-6 text-[11px] font-medium tracking-[0.60px] text-manishrajnetlifyappspray px-3 py-1"
                          asChild
                        >
<a
                            href="https://nayona.netlify.app/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
FREELANCE
                          </a>
</Badge>
</div>
<div className="flex gap-4 z-0">
<div className="w-[440px] flex flex-col gap-2">
<a
                            className="text-[31px] font-light leading-10 text-manishrajnetlifyappspray"
                            href="https://nayona.netlify.app/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
Consulting • Engineering
                          </a>
<a
                            className="text-[47px] font-medium tracking-[-1.44px] leading-[48px] text-manishrajnetlifyappwhite-ice"
                            href="https://nayona.netlify.app/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
NAYONA
                            <br />
CONSULTANCY
                            <br />
SERVICE
                          </a>
</div>
<div className="relative w-[440px]">
<Badge 
                            className="absolute top-0 left-[109px] px-[17px] py-[5px] text-[27px] text-center text-manishrajnetlifyappindigo border border-[#5c6bc0] rounded-full bg-transparent"
                            asChild
                          >
<a
                              href="https://nayona.netlify.app/"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
Design
                            </a>
</Badge>
<Badge 
                            className="absolute top-0 left-[237px] px-[17px] py-[5px] text-[27px] text-center text-manishrajnetlifyappindigo border border-[#5c6bc0] rounded-full bg-transparent"
                            asChild
                          >
<a
                              href="https://nayona.netlify.app/"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
Development
                            </a>
</Badge>
<Badge 
                            className="absolute top-[101px] left-[338px] px-4 py-1 text-[29px] text-center text-manishrajnetlifyapphawkes-blue bg-manishrajnetlifyappindigo rounded-full"
                            asChild
                          >
<a
                              href="https://nayona.netlify.app/"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
2025
                            </a>
</Badge>
</div>
</div>
</div>
{/* Project 2 */}
                    <div className="flex flex-col gap-6">
<div className="relative flex items-center justify-center px-8 py-[210px] rounded-md overflow-hidden z-[1]">
<div className="absolute w-[896px] h-[896px] top-0 left-0 opacity-50 bg-cover bg-center bg-[url(https://c.animaapp.com/mc46fmevF9sLme/img/devcli---cli-tool.png)]"></div>
<div className="flex-1 rounded-lg overflow-hidden">
<div className="bg-manishrajnetlifyappsapphire">
<div className="bg-manishrajnetlifyappblack">
<div className="relative w-[832px] h-[468px]">
<div className="w-[832px] absolute top-0 left-0 flex flex-col items-start justify-center">
<div className="flex-1 w-full">
<div className="relative max-w-[832px] w-[832px] h-[468px] bg-cover bg-center bg-[url(https://c.animaapp.com/mc46fmevF9sLme/img/projectposter2-c43zqebg-png.png)]" />
</div>
</div>
</div>
</div>
</div>
</div>
<Badge 
                          className="absolute top-6 right-6 text-[11px] font-medium tracking-[0.60px] text-manishrajnetlifyappblizzard-blue px-3 py-1"
                          asChild
                        >
<a
                            href="https://devcli.vercel.app/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
PERSONAL
                          </a>
</Badge>
</div>
<div className="flex gap-4 z-0">
<div className="w-[440px] flex flex-col gap-2">
<a
                            className="text-[31px] font-light leading-10 text-manishrajnetlifyappspray"
                            href="https://devcli.vercel.app/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
NPM Library • CLI Tool
                          </a>
<a
                            className="text-[46px] font-medium tracking-[-1.44px] leading-[48px] text-manishrajnetlifyappwhite-ice"
                            href="https://devcli.vercel.app/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
DEVCLI - CLI TOOL
                          </a>
</div>
<div className="w-[440px] flex flex-wrap justify-end gap-2">
<Badge 
                            className="px-[17px] py-[5px] text-[28px] text-center text-manishrajnetlifyappindigo border border-[#5c6bc0] rounded-full bg-transparent"
                            asChild
                          >
<a
                              href="https://devcli.vercel.app/"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
MERN
                            </a>
</Badge>
<Badge 
                            className="px-[17px] py-[5px] text-[27px] text-center text-manishrajnetlifyappindigo border border-[#5c6bc0] rounded-full bg-transparent"
                            asChild
                          >
<a
                              href="https://devcli.vercel.app/"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
Package
                            </a>
</Badge>
<Badge 
                            className="px-4 py-1 text-[28px] text-center text-manishrajnetlifyapphawkes-blue bg-manishrajnetlifyappindigo rounded-full"
                            asChild
                          >
<a
                              href="https://devcli.vercel.app/"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
2024
                            </a>
</Badge>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Additional Projects */}
          <div className="relative w-full h-[3769px]">
<img
              className="absolute w-[1696px] h-[154px] top-0 left-0"
              alt="Mask group"
              src="https://c.animaapp.com/mc46fmevF9sLme/img/mask-group-5.svg"
            />
<div className="absolute w-[1696px] h-[3456px] top-[194px] left-0">
{/* FusionHub Project */}
              <div className="flex flex-col w-[1696px] h-[1260px] absolute top-0 left-0">
<div className="flex flex-col gap-6">
<div className="rounded-2xl overflow-hidden">
<div className="w-[1696px] h-[1078px] bg-cover bg-center bg-[url(https://c.animaapp.com/mc46fmevF9sLme/img/fusionhub-project-mockup.png)]" />
</div>
<div className="flex flex-col gap-3">
<div className="flex gap-0">
<Badge className="h-[46px] px-[17px] py-[5px] mr-2 text-[28px] text-center text-manishrajnetlifyappindigo border border-[#5c6bc0] rounded-full bg-transparent">
2024
                      </Badge>
<Badge className="px-[17px] py-[5px] text-[26px] text-center text-manishrajnetlifyappindigo border border-[#5c6bc0] rounded-full bg-transparent">
Java • Spring Boot • ReactJs • SQL • REST API • JWT • Microservices
                      </Badge>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-[47px] font-medium tracking-[-1.44px] leading-[48px] text-manishrajnetlifyappwhite-ice">
FUSIONHUB: A PROJECT AND PORTFOLIO MANAGEMENT PLATFORM
                      </h3>
<p className="text-[32px] font-light leading-10 text-manishrajnetlifyappspray">
Spring Boot • ReactJS • Full Stack Development
                      </p>
</div>
</div>
</div>
</div>
{/* MERN Project CLI */}
              <div className="flex flex-col w-[824px] h-[1094px] absolute top-[1308px] left-0">
<div className="flex flex-col gap-6">
<div className="rounded-2xl overflow-hidden">
<div className="w-[824px] h-[824px] bg-cover bg-center bg-[url(https://c.animaapp.com/mc46fmevF9sLme/img/mern-project-cli-project-mockup.png)]" />
</div>
<div className="flex flex-col gap-3">
<div className="flex gap-0">
<Badge className="h-[46px] px-[17px] py-[5px] mr-2 text-[28px] text-center text-manishrajnetlifyappindigo border border-[#5c6bc0] rounded-full bg-transparent">
2024
                      </Badge>
<Badge className="px-[17px] py-[5px] text-[26px] text-center text-manishrajnetlifyappindigo border border-[#5c6bc0] rounded-full bg-transparent">
Javascript • NPM • NodeJS • ReactJs
                      </Badge>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-[47px] font-medium tracking-[-1.44px] leading-[48px] text-manishrajnetlifyappwhite-ice">
MERN PROJECT CLI [NPM PACKAGE]
                        <br />
(DEVCLI)
                      </h3>
<p className="text-[31px] font-light leading-10 text-manishrajnetlifyappspray">
CLI • Automation • NPM Package • MERN Stack
                        <br />
Development
                      </p>
</div>
</div>
</div>
</div>
{/* SAMAA Music App */}
              <div className="flex flex-col w-[824px] h-[1094px] absolute top-[1308px] left-[872px]">
<div className="flex flex-col gap-6">
<div className="rounded-2xl overflow-hidden">
<div className="w-[824px] h-[618px] bg-cover bg-center bg-[url(https://c.animaapp.com/mc46fmevF9sLme/img/samaa-project-homepage-in-desktop-view.png)]" />
</div>
<div className="flex flex-col gap-3">
<div className="flex">
<Badge className="h-[82px] px-[17px] py-[5px] mr-2 text-[28px] text-center text-manishrajnetlifyappindigo border border-[#5c6bc0] rounded-full bg-transparent">
2024
                      </Badge>
<div className="px-[17px] pr-[23px] py-[5px] rounded-full border border-[#5c6bc0]">
<p className="text-[26px] text-center text-manishrajnetlifyappindigo">
ReactJs • MongoDB • NodeJS • ExpressJS • REST API
                        </p>
<p className="text-[26px] text-center text-manishrajnetlifyappindigo">
• Firebase
                        </p>
</div>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-[47px] font-medium tracking-[-1.44px] leading-[48px] text-manishrajnetlifyappwhite-ice">
SAMAA (A MUSIC STREAMING APP)
                      </h3>
<p className="text-[31px] font-light leading-10 text-manishrajnetlifyappspray">
API • Full Stack Development • SDP 2
                      </p>
</div>
</div>
</div>
</div>
{/* AgriConnect Hub */}
              <div className="flex flex-col w-[824px] h-[1006px] absolute top-[2450px] left-0">
<div className="flex flex-col gap-6">
<div className="rounded-2xl overflow-hidden">
<div className="w-[824px] h-[824px] bg-cover bg-center bg-[url(https://c.animaapp.com/mc46fmevF9sLme/img/agri-connect-hub-project-mockup.png)]" />
</div>
<div className="flex flex-col gap-3">
<div className="flex">
<Badge className="h-[46px] px-[17px] py-[5px] mr-2 text-[28px] text-center text-manishrajnetlifyappindigo border border-[#5c6bc0] rounded-full bg-transparent">
2023
                      </Badge>
<Badge className="px-[17px] py-[5px] text-[26px] text-center text-manishrajnetlifyappindigo border border-[#5c6bc0] rounded-full bg-transparent">
Python • Django • Railway • PostgreSQL
                      </Badge>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-[47px] font-medium tracking-[-1.44px] leading-[48px] text-manishrajnetlifyappwhite-ice">
AGRICONNECT HUB
                      </h3>
<p className="text-[31px] font-light leading-10 text-manishrajnetlifyappspray">
Full Stack Development • SDP 1
                      </p>
</div>
</div>
</div>
</div>
{/* OneTouch News */}
              <div className="flex flex-col w-[824px] h-[1006px] absolute top-[2450px] left-[872px]">
<div className="flex flex-col gap-6">
<div className="rounded-2xl overflow-hidden">
<div className="w-[824px] h-[579px] bg-cover bg-center bg-[url(https://c.animaapp.com/mc46fmevF9sLme/img/news-aggregator-ml-project.png)]" />
</div>
<div className="flex flex-col gap-3">
<div className="flex">
<Badge className="h-[46px] px-[17px] py-[5px] mr-2 text-[28px] text-center text-manishrajnetlifyappindigo border border-[#5c6bc0] rounded-full bg-transparent">
2024
                      </Badge>
<Badge className="px-[17px] py-[5px] text-[26px] text-center text-manishrajnetlifyappindigo border border-[#5c6bc0] rounded-full bg-transparent">
Python • Flask • ReactJs • NLP
                      </Badge>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-[47px] font-medium tracking-[-1.44px] leading-[48px] text-manishrajnetlifyappwhite-ice">
ONETOUCH NEWS (NEWS
                        <br />
AGGREGATOR &amp; SUMMARIZER)
                      </h3>
<p className="text-[31px] font-light leading-10 text-manishrajnetlifyappspray">
Machine Learning • NLP • API • Web Development
                      </p>
</div>
</div>
</div>
</div>
</div>
{/* View More Projects Button */}
            <div className="flex justify-center absolute w-[1696px] top-[3678px] left-0">
<Button 
                className="px-[18px] py-[10px] text-[33px] font-light text-manishrajnetlifyappspray border-2 border-[#80deea] rounded-full bg-transparent"
                asChild
              >
<a
                  href="https://manishraj.netlify.app/projectsarchive"
                  rel="noopener noreferrer"
                  target="_blank"
                >
View More Projects
                </a>
</Button>
</div>
</div>
</div>
{/* Certificates Section */}
        <div className="mt-40 h-[700px] relative">
<div className="w-full">
<img className="w-full h-[153px] mt-[-153px]" alt="Container" src="https://c.animaapp.com/mc46fmevF9sLme/img/container-1.svg" />
</div>
<div className="flex gap-4 justify-center absolute top-[186px] left-0 w-full">
{/* Certificate 1 */}
            <Card className="w-1/3 p-[17px] bg-manishrajnetlifyappwhite-02 border border-[#5c6bc0] rounded-2xl shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] flex flex-col items-center">
<div className="w-48 h-48 flex items-center justify-center">
<div className="w-48 h-48 rounded-lg bg-cover bg-center bg-[url(https://c.animaapp.com/mc46fmevF9sLme/img/oracle-certified-professional--java-se-11-developer.png)]" />
</div>
<div className="pt-4 w-full">
<div className="flex flex-col items-center">
<h3 className="h-[71px] text-[28px] font-medium tracking-[-0.90px] leading-9 text-center text-manishrajnetlifyappwhite-ice">
Oracle Certified Professional : Java SE 11
                    <br />
Developer
                  </h3>
<div className="pt-8 mt-[-31px]">
<p className="text-[23px] text-center leading-8 text-manishrajnetlifyappspray">
2024
                    </p>
</div>
</div>
</div>
<div className="pt-2">
<Button 
                  className="px-4 py-2 text-[14px] bg-manishrajnetlifyappindigo text-manishrajnetlifyappwhite rounded-full"
                  asChild
                >
<a
                    href="https://catalog-education.oracle.com/pls/certview/sharebadge"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
Verify Credentials
                  </a>
</Button>
</div>
</Card>
{/* Certificate 2 */}
            <Card className="w-1/3 p-[17px] bg-manishrajnetlifyappwhite-02 border border-[#5c6bc0] rounded-2xl shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] flex flex-col items-center">
<div className="w-48 h-48 flex items-center justify-center">
<div className="w-48 h-48 rounded-lg bg-cover bg-center bg-[url(https://c.animaapp.com/mc46fmevF9sLme/img/postman-api-fundamentals-student-expert.png)]" />
</div>
<div className="pt-4 w-full">
<div className="flex flex-col items-center">
<h3 className="h-[71px] text-[29px] font-medium tracking-[-0.90px] leading-9 text-center text-manishrajnetlifyappwhite-ice">
Postman API Fundamentals Student
                    <br />
Expert
                  </h3>
<div className="pt-8 mt-[-31px]">
<p className="text-[23px] text-center leading-8 text-manishrajnetlifyappspray">
2024
                    </p>
</div>
</div>
</div>
<div className="pt-2">
<Button 
                  className="px-4 py-2 text-[14px] bg-manishrajnetlifyappindigo text-manishrajnetlifyappwhite rounded-full"
                  asChild
                >
<a
                    href="https://badgr.com/public/assertions/A3hUtfzgReGKmgt12TX-ew"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
Verify Credentials
                  </a>
</Button>
</div>
</Card>
{/* Certificate 3 */}
            <Card className="w-1/3 p-[17px] bg-manishrajnetlifyappwhite-02 border border-[#5c6bc0] rounded-2xl shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] flex flex-col items-center">
<div className="w-48 h-48 flex items-center justify-center">
<div className="w-48 h-48 rounded-lg bg-cover bg-center bg-[url(https://c.animaapp.com/mc46fmevF9sLme/img/github-foundations.png)]" />
</div>
<div className="pt-4">
<div className="flex flex-col items-center">
<h3 className="h-10 text-[29px] font-medium tracking-[-0.90px] leading-9 text-center text-manishrajnetlifyappwhite-ice">
GitHub Foundations
                  </h3>
<div className="pt-8">
<p className="text-[23px] text-center leading-8 text-manishrajnetlifyappspray">
2024
                    </p>
</div>
</div>
</div>
<div className="pt-2">
<Button 
                  className="px-4 py-2 text-[14px] bg-manishrajnetlifyappindigo text-manishrajnetlifyappwhite rounded-full"
                  asChild
                >
<a
                    href="https://www.credly.com/badges/a8d9b534-63c4-48d2-a8f7-5c5c280b83d5/public_url"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
Verify Credentials
                  </a>
</Button>
</div>
</Card>
</div>
{/* View All Certificates Button */}
          <div className="flex justify-center absolute w-[1696px] top-[609px] left-0">
<Button 
              className="px-[18px] py-[10px] text-[32px] font-light text-manishrajnetlifyappspray border-2 border-[#80deea] rounded-full bg-transparent"
              asChild
            >
<a
                href="https://manishraj.netlify.app/certificatesList"
                rel="noopener noreferrer"
                target="_blank"
              >
View All Certificates
              </a>
</Button>
</div>
</div>
</div>
</section>
);
};
