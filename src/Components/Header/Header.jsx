import React, { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-[#1A1A1E] bg-opacity-80 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 h-20 md:h-auto md:p-10">
      <nav className="flex justify-between items-center px-4 md:px-20">
        
        <div className="text-2xl md:text-3xl text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer mb-7 md:mb-auto">
          <Link to="/" smooth={true} duration={500}>
             Arnav
          </Link>
        </div>

        <div className="md:hidden absolute right-5 mb-7 md:mb-auto">
          <button onClick={toggleMenu} className="text-3xl text-gray-300">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        <ul className="md:flex justify-center gap-5 text-xl md:text-2xl text-transparent md:text-gray-300 cursor-pointer">
          <li className="hover:text-cyan-400 transition-colors duration-300">
            <Link to="/" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-cyan-400 transition-colors duration-300">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="hover:text-cyan-400 transition-colors duration-300">
            <Link to="project" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="hover:text-cyan-400 transition-colors duration-300">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-6 mt-4 text-xl text-gray-300">
          <li className="hover:text-cyan-400 transition-colors duration-300">
            <Link to="/" smooth={true} duration={500} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="hover:text-cyan-400 transition-colors duration-300">
            <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="hover:text-cyan-400 transition-colors duration-300">
            <Link to="project" smooth={true} duration={500} onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li className="hover:text-cyan-400 transition-colors duration-300">
            <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
