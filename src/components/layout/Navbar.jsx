import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "education",
    "certifications",
    "contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-slate-900 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        {/* <div className="text-3xl font-bold text-blue-600 cursor-pointer">
          SS
        </div> */}
        <div className="flex items-center gap-2 cursor-pointer">
  <span className="text-3xl">📊</span>

  <h1 className="text-2xl font-bold text-slate-900">
    SS
  </h1>
</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-blue-600"
              className="capitalize cursor-pointer text-slate-700 hover:text-blue-600 transition"
            >
              {item}
            </Link>
          ))}
</nav>

        {/* Resume Button
        <a
          href="/resume.pdf"
          download
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          Resume ↓
        </a> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="block py-4 px-6 capitalize border-b hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              {item}
            </Link>
          ))}
          <a
            href="/myresume.pdf"
            download
            className="block text-center bg-blue-600 text-white py-4"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}