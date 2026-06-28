import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const projectData = [
    {
      title: "Portfolio",
      description:  <p> Designed and developed a fully responsive personal portfolio website to showcase professional skills, projects, and contact information using modern web technologies, ensuring compatibility across desktop and mobile devices. 
 Deployed the portfolio live on Vercel with optimized performance, enabling a professional online presence with reliable uptime and fast loading speeds.</p>,
      link: "#",
      github: "https://github.com/PtJayMishra/MyPortfolio",
      color: "rgba(147, 197, 253, 0.3)", // Light blue
    },
    {
      title:  "CRM (backend)",
      description:<p> Designed optimized MongoDB schemas with indexing strategies and relational referencing (Company–Leads mapping), improving query performance and ensuring efficient data retrieval for high-volume operations. 
    Implemented production-grade backend features including JWT-based authentication, role-based authorization, centralized error handling, request validation, and secure environment configuration management.

Containerized and productionized the backend using Docker, enabling consistent deployment across environments and preparing the system for cloud deployment.</p>,
      link: "https://github.com/AnshumanGupta2003/CRM",
      github: "https://github.com/AnshumanGupta2003/CRM",
      color: "rgba(255, 165, 0, 0.3)", // Orange
    },
    
  ];

  // Track global mouse movement
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative text-white p-5 bg-bg1 min-h-screen"
      onMouseMove={handleMouseMove}
    >
      {/* Global Cursor Glow Effect */}
      {hoveredCard === null && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 197, 253, 0.2), transparent 250px)`,
          }}
          transition={{ duration: 0.2 }}
        />
      )}

      <h1 className="font-bold text-center text-3xl p-4 relative z-10">
        Projects
      </h1>

      <div className="container mx-auto max-w-5xl relative z-10">
        <p className="text-lg sm:text-xl text-center mb-8">
          Here are some of my recent projects that showcase my skills in Web3,
          automation, and full-stack development.
        </p>

        <div className="grid grid-cols-1  gap-6">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              onMouseMove={(e) => {
                setHoveredCard(index);
                setMousePosition({
                  x: e.nativeEvent.offsetX,
                  y: e.nativeEvent.offsetY,
                });
              }}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative bg-nav p-6 rounded-lg shadow-lg transition-transform overflow-hidden"
              whileHover={{
                scale: 1.05,
                backgroundColor: ["#1C1C1C", "#27272A", "#31473A"],
                transition: { duration: 0.5 },
              }}
            >
              {/* Card-Specific Cursor Glow Effect */}
              {hoveredCard === index && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${project.color}, transparent 150px)`,
                  }}
                  transition={{ duration: 0.15 }}
                />
              )}

              <h2 className="text-xl font-semibold mb-3 relative z-10">
                {project.title}
              </h2>
              <p className="text-md text-gray-300 mb-4 relative z-10">
                {project.description}
              </p>

              <div className="flex justify-between items-center relative z-10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bg1 text-white py-2 px-4 rounded-lg hover:bg-opacity-80"
                >
                  View Project
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github
                    size={24}
                    className="text-gray-300 hover:text-white transition-colors"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
