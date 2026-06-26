import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Navbar from "./components/navbar";
import { Menu } from "lucide-react";

// Importing Pages
import About from "./pages/about";
import Work from "./pages/work";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="flex bg-nav">
        {/* Desktop Sidebar (Navbar) */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden fixed top-5 left-5 z-50">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} className="text-icon" />
          </button>
        </div>

        {/* Mobile Sidebar (Navbar) - Slide-in Effect */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-64 h-full bg-nav shadow-lg z-40 transition-transform duration-300 ease-in-out">
            <Navbar setIsOpen={setIsOpen} />
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
