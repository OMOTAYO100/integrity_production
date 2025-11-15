import React, { useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

function Navbar({ openModal }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-6 bg-black text-white relative font-Figtree">
      <nav className="p-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">ITG</h2>
        </div>

        {/* Menu Links */}
        <ul
          className={`flex flex-col gap-6 z-50 fixed top-0 right-0 w-2/3 h-auto bg-white/40 backdrop-blur-lg p-24 transition-transform duration-300 origin-top
            ${menuOpen ? "scale-y-100" : "scale-y-0"}
            md:flex-row md:static md:w-auto md:h-auto md:bg-transparent md:p-0 md:gap-8 md:scale-y-100`}
        >
          <li>
            <a href="#" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-500">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-yellow-500">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-500">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-500">
              Contact
            </a>
          </li>
          <li className=" sm:hidden">
            <a href="#Book" onClick={openModal} className="hover:text-gray-200">
              Book Section
            </a>
          </li>
        </ul>
        <ul className="hidden sm:block">
          <li>
            <a
              href="#book"
              onClick={openModal}
              className="hover:text-yellow-500 border-2 border-yellow-500 px-6 py-2 rounded-md shadow-md shadow-yellow-500"
            >
              Book Section
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div
          className="md:hidden cursor-pointer z-50 fixed top-4 right-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <div className="text-2xl font-bold">
              <TfiClose />
            </div> // X symbol
          ) : (
            <>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-4 text-center h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
