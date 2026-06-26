import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const Navbar = ({ setIsOpen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  return (
    <nav className="bg-nav text-white h-screen p-5 w-64 md:w-72 fixed md:relative flex flex-col">
      {/* Mobile Close (X) Button */}
      {isMobile && (
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-icon" />
          </button>
        </div>
      )}

      {/* Logo */}
      <h1 className="text-2xl font-bold"> <Link to="/" className="hover:text-icon cursor-pointer">Jay Mishra</Link> </h1>

      {/* Navigation Links */}
      <ul className="mt-8 space-y-4">
        <li>
          <Link to="/about" className="hover:text-icon cursor-pointer">About</Link>
        </li>
        <li>
          <Link to="/work" className="hover:text-icon cursor-pointer">Work</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-icon cursor-pointer">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-icon cursor-pointer">Get In Touch</Link>
        </li>
        <br />
        <span className="bg-nav">Quick Links</span>

        <li>
          <a href="https://x.com/0xJayMishra" target="_blank" rel="noopener noreferrer" className="hover:text-icon cursor-pointer">Twitter</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jay-mishra-21b17b200/" target="_blank" rel="noopener noreferrer" className="hover:text-icon cursor-pointer">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/PtJayMishra" target="_blank" rel="noopener noreferrer" className="hover:text-icon cursor-pointer">GitHub</a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1j-KvRitjEDocZRu3KLttHRaD3XKQwgP9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-icon cursor-pointer">Read CV</a>
        </li>
        <br />
      </ul>
    </nav>
  );
};

export default Navbar;
