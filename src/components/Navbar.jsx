import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 p-5 flex items-center justify-between">
        {/* Logo / Name */}
        <h3 className="font-bold text-indigo-600">Shaikh Altamash</h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#about" className="hover:text-indigo-600">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-indigo-600">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-indigo-600">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </li>
          <li className="">
            <a
              href="/Shaikh_Altamash_Resume.pdf"
              className="bg-indigo-600 text-black px-4 py-1 rounded hover:bg-indigo-700"
              target="_blank"
            >
              <b className="text-white">Resume</b>
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="text-l text-white">✖</span>
          ) : (
            <span className="text-l text-white">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white shadow-lg px-6 pb-4 space-y-4 text-gray-700 font-medium">
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => setOpen(false)}>
              Education
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-indigo-600 text-white px-4 py-2 rounded block text-center"
            >
              <b className="text-white">Resume</b>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
