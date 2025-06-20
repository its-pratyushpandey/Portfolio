import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[url('https://c.animaapp.com/mc46fmevF9sLme/img/abstract-cubic-background-image-.png')] bg-cover bg-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#201d66] mb-4">Pratyush Kumar Pandey</h1>
        <p className="text-2xl text-[#3949ab] mb-8">Full Stack Developer | UI/UX Designer</p>
        <a href="#contact" className="bg-[#201d66] text-white px-6 py-3 rounded-full text-lg hover:bg-[#3949ab]">Get in Touch</a>
      </div>
    </section>
  );
};

export default Hero;
