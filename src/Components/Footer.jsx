import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-16 pb-8 overflow-hidden">
      
      {/* 🔵 Subtle Glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600 opacity-20 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-white/10 pb-10">
          
          {/* Logo / Name */}
          <div>
            <h2 className="text-2xl font-bold">
              Parveen<span className="text-blue-500">.</span>
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Building modern web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-6 text-gray-400">
            <a href="#home" className="hover:text-blue-500 transition">
              Home
            </a>
            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>
            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-5 text-gray-400">
            <a href="#" className="hover:text-blue-500 transition">
              GitHub
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              Twitter
            </a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} Parveen. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;