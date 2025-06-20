import React from 'react';
import { motion } from 'framer-motion';

interface ContactItem {
  icon: string;
  text: string;
  link: string;
}

interface ContactItemProps {
  icon: string;
  text: string;
  link: string;
}

const contactInfo: ContactItem[] = [
  { icon: 'https://c.animaapp.com/mc46fmevF9sLme/img/component-2-37.svg', text: 'manish__raj@outlook.com', link: 'mailto:manish__raj@outlook.com' },
  { icon: 'https://c.animaapp.com/mc46fmevF9sLme/img/component-2-20.svg', text: 'Github', link: 'https://github.com/manishraj27' },
  { icon: 'https://c.animaapp.com/mc46fmevF9sLme/img/component-2-19.svg', text: 'LinkedIn', link: 'https://www.linkedin.com/in/manishraj27' },
  { icon: 'https://c.animaapp.com/mc46fmevF9sLme/img/component-2-17.svg', text: 'YouTube', link: 'https://www.youtube.com/channel/UCmhi2NSl9RdC5biFARM3nsw' },
];

const profiles = [
  {
    icon: 'https://c.animaapp.com/mc46fmevF9sLme/img/component-2-8.svg',
    text: 'Stack Overflow',
    link: 'https://stackoverflow.com/users/20992654/manish-raj',
  },
  {
    icon: 'https://c.animaapp.com/mc46fmevF9sLme/img/component-2-5.svg',
    text: 'HackerRank',
    link: 'https://www.hackerrank.com/profile/manish_raj27',
  },
  {
    icon: 'https://c.animaapp.com/mc46fmevF9sLme/img/component-2-11.svg',
    text: 'CodeChef',
    link: 'https://www.codechef.com/users/manishraj_27',
  },
  {
    icon: 'https://c.animaapp.com/mc46fmevF9sLme/img/component-2-3.svg',
    text: 'Leetcode',
    link: 'https://leetcode.com/manish_raj27/',
  },
  {
    icon: 'https://c.animaapp.com/mc46fmevF9sLme/img/component-2-13.svg',
    text: 'Codeforces',
    link: 'https://codeforces.com/profile/manish_raj27',
  },
];

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-4 text-[#3949ab] hover:text-[#201d66]"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img src={icon} alt={text} className="w-6 h-6" />
    <span>{text}</span>
  </motion.a>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-[#201d66] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-center text-[#3949ab] mb-8">
            I'm always open to new opportunities, collaborations, or just a friendly chat about technology and design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <footer className="mt-20 pt-8 bg-gradient-to-t from-[#e3e6f3] to-white border-t border-[#e3e6f3]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#3949ab]">© 2025 Pratyush Kumar Pandey. All rights reserved.</p>
            <p className="text-[#3949ab] mt-2">Designed and coded with <span className="animate-pulse text-pink-500">❤️</span></p>
            <motion.div
              className="mt-6 w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-[#201d66] mb-2">Profiles</h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {profiles.map((profile, idx) => (
                  <motion.a
                    key={idx}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group bg-white rounded-xl shadow-md p-3 hover:shadow-xl transition-all duration-300 border border-[#e3e6f3] hover:border-[#201d66]"
                    whileHover={{ scale: 1.12, rotate: 2 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <img src={profile.icon} alt={profile.text} className="w-12 h-12 mb-1 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-[#3949ab] text-sm font-medium group-hover:text-[#201d66] transition-colors duration-300">{profile.text}</span>
                  </motion.a>
                ))}
              </div>
              <div className="flex justify-center gap-6 mt-8">
                <motion.a href="mailto:pratyushpandey@example.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="text-[#3949ab] hover:text-[#201d66] text-2xl transition-colors duration-300">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.29a1 1 0 0 1-1.42 0L4 6.41V20h16V6.41z"></path></svg>
                </motion.a>
                <motion.a href="https://github.com/its-pratyushpandey" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="text-[#3949ab] hover:text-[#201d66] text-2xl transition-colors duration-300">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"></path></svg>
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/pratyushpandey27" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="text-[#3949ab] hover:text-[#201d66] text-2xl transition-colors duration-300">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z"></path></svg>
                </motion.a>
                <motion.a href="/resume.pdf" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="text-[#3949ab] hover:text-[#201d66] text-2xl transition-colors duration-300">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-7V3.5L18.5 9H13z"></path></svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
