import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const containerVariants = {
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
const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.15, rotate: -8, transition: { type: "spring", stiffness: 300 } },
};
const bgVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: { duration: 12, repeat: Infinity, ease: "linear" },
  },
};

// Floating label motion
const labelVariants = {
  focused: { y: -22, scale: 0.85, color: '#201d66' },
  unfocused: { y: 0, scale: 1, color: '#3949ab' },
};

// Contact and social data
const contactData = {
  email: {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-37.svg",
    text: "pratyush.me.ai@gmail.com",
    url: "mailto:pratyush.me.ai@gmail.com",
  },
  location: {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-6.svg",
    text: "Vijayawada, India",
    url: "https://maps.app.goo.gl/dPjAwKErtBJW6kRo9",
  },
};

const digitalSpaces = [
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-20.svg",
    text: "Github",
    url: "https://github.com/its-pratyushpandey",
  },
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-19.svg",
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/pratyush-pandey1/",
  },
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-17.svg",
    text: "Code with fun",
    url: "https://www.youtube.com/@codewithfunn",
  },
  
];

const profiles = [
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-5.svg",
    text: "HackerRank",
    url: "https://www.hackerrank.com/klu2300030557", // Updated to correct link
  },
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-11.svg",
    text: "CodeChef",
    url: "https://www.codechef.com/users/kl_2300030557",
  },
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-3.svg",
    text: "Leetcode",
    url: "https://leetcode.com/klu2300030557/",
  },
];

export const ContactSection = (): JSX.Element => {
  // Contact form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focus, setFocus] = useState({ name: false, email: false, message: false });
  const [submitted, setSubmitted] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocus({ ...focus, [e.target.name]: true });
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocus({ ...focus, [e.target.name]: false });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setShowCheck(true), 400);
    setTimeout(() => {
      setShowCheck(false);
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 2500);
    // Add your form submission logic here
  };

  return (
    <motion.section
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 py-0 bg-gradient-to-br from-[#f5f5f5] to-[#e3f2fd]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#e3f2fd] via-[#bbddfa] to-[#e3f2fd] bg-[length:200%_200%] animate-gradient-move"
        variants={bgVariants}
        animate="animate"
      />
      <motion.div
        className="w-full flex flex-col justify-center items-center gap-12 py-16"
        variants={itemVariants}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-[#201d66] text-center mb-2 drop-shadow-lg relative"
          variants={itemVariants}
        >
          Let's Connect
          <span className="block mx-auto mt-2 h-1 w-16 md:w-24 bg-gradient-to-r from-[#201d66] via-[#3949ab] to-[#80deea] rounded-full animate-pulse"></span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-2xl text-[#3949ab] text-center mb-8 max-w-2xl font-medium"
          variants={itemVariants}
        >
          Whether it's a new opportunity, collaboration, or a chat about tech and design—I’d love to hear from you.
        </motion.p>
        <motion.div
          className="w-full flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12 max-w-6xl"
          variants={itemVariants}
        >
          {/* Left: Socials and Profiles */}
          <motion.div
            className="flex-1 flex flex-col items-center gap-10 bg-white/90 rounded-2xl shadow-xl p-6 md:p-8 backdrop-blur-md border border-[#201d66]/15 min-w-[280px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="w-full" variants={itemVariants}>
              <h3 className="text-lg md:text-2xl font-semibold text-[#201d66] mb-2 text-center tracking-wide">
                Digital Spaces
              </h3>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6">
                {digitalSpaces.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#3949ab] hover:text-[#201d66] text-base md:text-xl transition group px-3 py-2 rounded-lg hover:bg-[#e3f2fd] focus:outline-none focus:ring-2 focus:ring-[#3949ab]"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                  >
                    <motion.img
                      src={item.icon}
                      alt={item.text}
                      className="w-7 h-7 drop-shadow-md"
                      variants={iconVariants}
                    />
                    <span className="group-hover:underline font-medium">{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            <motion.div className="w-full" variants={itemVariants}>
              <h3 className="text-lg md:text-2xl font-semibold text-[#201d66] mb-2 text-center tracking-wide">
                Profiles
              </h3>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6">
                {profiles.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#3949ab] hover:text-[#201d66] text-base md:text-xl transition group px-3 py-2 rounded-lg hover:bg-[#e3f2fd] focus:outline-none focus:ring-2 focus:ring-[#3949ab]"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                  >
                    <motion.img
                      src={item.icon}
                      alt={item.text}
                      className="w-7 h-7 drop-shadow-md"
                      variants={iconVariants}
                    />
                    <span className="group-hover:underline font-medium">{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            <motion.div className="flex flex-col items-center gap-4 mt-2" variants={itemVariants}>
              <motion.a
                href={contactData.email.url}
                className="flex items-center gap-3 text-[#201d66] hover:text-[#3949ab] text-base md:text-lg font-medium transition group px-3 py-2 rounded-lg hover:bg-[#e3f2fd] focus:outline-none focus:ring-2 focus:ring-[#3949ab]"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.img
                  src={contactData.email.icon}
                  alt="Email"
                  className="w-6 h-6"
                  variants={iconVariants}
                />
                <span className="group-hover:underline">{contactData.email.text}</span>
              </motion.a>
              <motion.a
                href={contactData.location.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#201d66] hover:text-[#3949ab] text-base md:text-lg transition group px-3 py-2 rounded-lg hover:bg-[#e3f2fd] focus:outline-none focus:ring-2 focus:ring-[#3949ab]"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.img
                  src={contactData.location.icon}
                  alt="Location"
                  className="w-5 h-5"
                  variants={iconVariants}
                />
                <span className="group-hover:underline">{contactData.location.text}</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="flex-1 flex flex-col justify-center items-center bg-white/95 rounded-2xl shadow-xl p-6 md:p-8 backdrop-blur-md border border-[#e3f2fd] min-w-[280px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3
              className="text-lg md:text-2xl font-semibold text-[#201d66] mb-6 text-center tracking-wide"
              variants={itemVariants}
            >
              Contact Form
            </motion.h3>
            <AnimatePresence>
              {submitted && showCheck ? (
                <motion.div
                  className="flex flex-col items-center justify-center gap-4 text-green-600 text-lg font-semibold text-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <motion.svg
                    width="60" height="60" viewBox="0 0 60 60" fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                  >
                    <circle cx="30" cy="30" r="28" stroke="#22c55e" strokeWidth="4" fill="#e3f2fd" />
                    <motion.path
                      d="M18 32L27 41L43 23"
                      stroke="#22c55e"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    />
                  </motion.svg>
                  Thank you for reaching out! I will get back to you soon.
                </motion.div>
              ) : !submitted ? (
                <motion.form
                  className="w-full max-w-md flex flex-col gap-8"
                  onSubmit={handleSubmit}
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  {/* Name Field */}
                  <motion.div className="relative" variants={itemVariants}>
                    <motion.input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className="peer border border-[#201d66] rounded-lg px-4 pt-6 pb-2 text-lg w-full focus:outline-none focus:ring-2 focus:ring-[#3949ab] transition shadow-sm bg-transparent"
                      required
                    />
                    <motion.label
                      htmlFor="name"
                      className="absolute left-4 top-3 text-[#3949ab] text-base pointer-events-none origin-left transition-all"
                      animate={focus.name || form.name ? "focused" : "unfocused"}
                      variants={labelVariants}
                    >
                      Your Name
                    </motion.label>
                  </motion.div>
                  {/* Email Field */}
                  <motion.div className="relative" variants={itemVariants}>
                    <motion.input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className="peer border border-[#201d66] rounded-lg px-4 pt-6 pb-2 text-lg w-full focus:outline-none focus:ring-2 focus:ring-[#3949ab] transition shadow-sm bg-transparent"
                      required
                    />
                    <motion.label
                      htmlFor="email"
                      className="absolute left-4 top-3 text-[#3949ab] text-base pointer-events-none origin-left transition-all"
                      animate={focus.email || form.email ? "focused" : "unfocused"}
                      variants={labelVariants}
                    >
                      Your Email
                    </motion.label>
                  </motion.div>
                  {/* Message Field */}
                  <motion.div className="relative" variants={itemVariants}>
                    <motion.textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className="peer border border-[#201d66] rounded-lg px-4 pt-6 pb-2 text-lg w-full min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#3949ab] transition shadow-sm bg-transparent"
                      required
                    />
                    <motion.label
                      htmlFor="message"
                      className="absolute left-4 top-3 text-[#3949ab] text-base pointer-events-none origin-left transition-all"
                      animate={focus.message || form.message ? "focused" : "unfocused"}
                      variants={labelVariants}
                    >
                      Your Message
                    </motion.label>
                  </motion.div>
                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="bg-[#201d66] text-white rounded-lg px-6 py-3 text-lg font-semibold hover:bg-[#3949ab] transition shadow-md relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#3949ab]"
                    whileHover={{ scale: 1.07, boxShadow: "0 8px 24px #3949ab33" }}
                    whileTap={{ scale: 0.97 }}
                    variants={itemVariants}
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Send Message
                    </motion.span>
                  </motion.button>
                </motion.form>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </motion.div>
        <motion.footer className="w-full mt-16 text-center" variants={itemVariants}>
          <p className="text-[#3949ab] text-base md:text-lg">
            © 2025 Pratyush Kumar Pandey. All rights reserved.
          </p>
        </motion.footer>
      </motion.div>
    </motion.section>
  );
};
