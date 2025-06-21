import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#e3f2fd] z-10">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#201d66]"> </div>
        <ul className="flex space-x-6">
          <li><a href="#about" className="text-[#201d66] hover:text-[#3949ab]">About</a></li>
          <li><a href="#skills" className="text-[#201d66] hover:text-[#3949ab]">Skills</a></li>
          <li><a href="#projects" className="text-[#201d66] hover:text-[#3949ab]">Projects</a></li>
          <li><a href="#certificates" className="text-[#201d66] hover:text-[#3949ab]">Certificates</a></li>
          <li><a href="#experienc" className="text-[#201d66] hover:text-[#3949ab]">My Journey </a></li>
          <li><a href="#blog" className="text-[#201d66] hover:text-[#3949ab]">Blog</a></li>
          <li><a href="#contact" className="text-[#201d66] hover:text-[#3949ab]">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
