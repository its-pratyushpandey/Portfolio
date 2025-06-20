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
  { icon: 'https://c.animaapp.com/mc46fmevF9sLme/img/component-2-37.svg', text: 'pratyush.me.ai@gmail.com', link: 'mailto:pratyush.me.ai@gmail.com' },
  { icon: 'https://c.animaapp.com/mc46fmevF9sLme/img/component-2-45.svg', text: 'Bento', link: 'https://bento.me/manishraj' },
  { icon: 'https://c.animaapp.com/mc46fmevF9sLme/img/component-2-20.svg', text: 'Github', link: 'https://github.com/manishraj27' },
  { icon: 'https://c.animaapp.com/mc46fmevF9sLme/img/component-2-19.svg', text: 'LinkedIn', link: 'https://www.linkedin.com/in/manishraj27' },
  { icon: 'https://c.animaapp.com/mc46fmevF9sLme/img/component-2-9.svg', text: 'X [Twitter]', link: 'https://x.com/manish_rraaj' },
  { icon: 'https://c.animaapp.com/mc46fmevF9sLme/img/component-2-17.svg', text: 'YouTube', link: 'https://www.youtube.com/channel/UCmhi2NSl9RdC5biFARM3nsw' },
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
      <footer className="mt-20 pt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#3949ab]">© 2025 Pratyush Kumar Pandey. All rights reserved.</p>
    
        </div>
      </footer>
    </section>
  );
};

export default Contact;
