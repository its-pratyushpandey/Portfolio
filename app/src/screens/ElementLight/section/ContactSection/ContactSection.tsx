import React, { useState } from "react";
import { motion } from "framer-motion";

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
    url: "https://github.com/manishraj27",
  },
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-19.svg",
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/manishraj27",
  },
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-17.svg",
    text: "YouTube",
    url: "https://www.youtube.com/channel/UCmhi2NSl9RdC5biFARM3nsw",
  },
];

const profiles = [
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-5.svg",
    text: "HackerRank",
    url: "https://www.hackerrank.com/profile/manish_raj27",
  },
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-11.svg",
    text: "CodeChef",
    url: "https://www.codechef.com/users/manishraj_27",
  },
  {
    icon: "https://c.animaapp.com/mc46fmevF9sLme/img/component-2-3.svg",
    text: "Leetcode",
    url: "https://leetcode.com/manish_raj27/",
  },
];

export const ContactSection = (): JSX.Element => {
  // Contact form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add your form submission logic here (e.g., emailjs, API call)
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#e3f2fd] to-[#bbddfa] px-0 py-0"
    >
      <motion.div
        className="w-full flex flex-col justify-center items-center gap-12 py-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-[#201d66] text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let&#39;s Connect
        </motion.h2>
        <motion.p
          className="text-lg md:text-2xl text-[#3949ab] text-center mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I&#39;m always open to new opportunities, collaborations, or just a
          friendly chat about technology and design.
        </motion.p>
        <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-12 max-w-6xl">
          {/* Left: Socials and Profiles */}
          <motion.div
            className="flex-1 flex flex-col items-center gap-10 bg-white/70 rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-full">
              <h3 className="text-xl md:text-2xl font-semibold text-[#201d66] mb-2 text-center">
                Digital Spaces
              </h3>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {digitalSpaces.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#3949ab] hover:text-[#201d66] text-lg md:text-xl transition"
                  >
                    <img src={item.icon} alt={item.text} className="w-7 h-7" />
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full">
              <h3 className="text-xl md:text-2xl font-semibold text-[#201d66] mb-2 text-center">
                Profiles
              </h3>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {profiles.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#3949ab] hover:text-[#201d66] text-lg md:text-xl transition"
                  >
                    <img src={item.icon} alt={item.text} className="w-7 h-7" />
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 mt-2">
              <a
                href={contactData.email.url}
                className="flex items-center gap-3 text-[#201d66] hover:text-[#3949ab] text-base md:text-lg font-medium transition"
              >
                <img
                  src={contactData.email.icon}
                  alt="Email"
                  className="w-6 h-6"
                />
                {contactData.email.text}
              </a>
              <a
                href={contactData.location.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#201d66] hover:text-[#3949ab] text-base md:text-lg transition"
              >
                <img
                  src={contactData.location.icon}
                  alt="Location"
                  className="w-5 h-5"
                />
                {contactData.location.text}
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="flex-1 flex flex-col justify-center items-center bg-white/80 rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-[#201d66] mb-6 text-center">
              Contact Form
            </h3>
            {submitted ? (
              <motion.div
                className="text-green-600 text-lg font-semibold text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Thank you for reaching out! I will get back to you soon.
              </motion.div>
            ) : (
              <form className="w-full max-w-md flex flex-col gap-6" onSubmit={handleSubmit}>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="border border-[#201d66] rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#3949ab] transition"
                  required
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="border border-[#201d66] rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#3949ab] transition"
                  required
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                />
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className="border border-[#201d66] rounded-lg px-4 py-3 text-lg min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#3949ab] transition"
                  required
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                />
                <motion.button
                  type="submit"
                  className="bg-[#201d66] text-white rounded-lg px-6 py-3 text-lg font-semibold hover:bg-[#3949ab] transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
        <footer className="w-full mt-16 text-center">
          <p className="text-[#3949ab] text-base md:text-lg">
            © 2025 Pratyush Kumar Pandey. All rights reserved.
          </p>
        </footer>
      </motion.div>
    </section>
  );
};
