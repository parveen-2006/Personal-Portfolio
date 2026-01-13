import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Name */}
        <h1 className="text-2xl font-semibold text-white">
          Parveen
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          <li className="hover:text-blue-500 cursor-pointer transition">Home</li>
          <li className="hover:text-blue-500 cursor-pointer transition">About</li>
          <li className="hover:text-blue-500 cursor-pointer transition">Projects</li>
          <li className="hover:text-blue-500 cursor-pointer transition">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-300">
            <li onClick={() => setIsOpen(false)}>Home</li>
            <li onClick={() => setIsOpen(false)}>About</li>
            <li onClick={() => setIsOpen(false)}>Projects</li>
            <li onClick={() => setIsOpen(false)}>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
