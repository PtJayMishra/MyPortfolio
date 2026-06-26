import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const WorkExperience = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const experienceData = [
    {
      title: "Full Stack Developer Intern",
      company: "Lakvins Entertainment Media",
      duration: " September 2024 – April 2025",
      description: <p> Architected and deployed scalable backend infrastructure using Node.js, Express, and MongoDB, hosted
on AWS EC2 with Nginx reverse proxy and Docker containers for seamless environment parity.  
 Express, MongoDB on the backend, enabling real-time data visualization for small businesses.
    Optimized database queries and indexing strategies, reducing data retrieval latency by 45percent and improving
throughput for key datasets in media content management systems.</p> ,
       link: "#",
      color: "rgba(147, 197, 253, 0.3)",
    },
    {
      title: "Full Stack Developer Intern",
      company: "Skadibolt Technologies Pvt. Ltd",
      duration: "March 2024 -- May 2024",
      description:  <p> Developed a customer analytics dashboard using React,  TailwindCSS on the frontend and Node.js,
Express, MongoDB on the backend, enabling real-time data visualization.
    Improved page load times and enhanced UX through dynamic content updates.
   
 
Designed and implemented CI/CD pipelines via GitHub Actions, automating build, test, and deployment
stages—resulting in 50 percent faster release cycles.</p>,
      link: "https://drive.google.com/file/d/1knBSh1HmFNMRYWQYWwhX-O5GnGgI_l2x/view?usp=drive_link",
      color: "rgba(255, 165, 0, 0.3)",
    },
    
  ];

  return (
    <div
      className="relative text-white p-5 bg-bg1 min-h-screen"
      onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 197, 253, 0.3), transparent 200px)`,
        }}
        transition={{ duration: 0.2 }}
      />

      <h1 className="font-bold text-center text-3xl p-4 relative z-10">Work Experience</h1>

      <div className="container mx-auto max-w-5xl relative z-10">
        <p className="text-lg sm:text-xl text-center mb-8">
          Here are some of my professional experiences showcasing my expertise in full-stack development, blockchain, and product management.
        </p>

        <div className="flex flex-col items-center relative">
          <div className="w-1 bg-gray-500 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2" />
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              onMouseMove={(e) => {
                setHoveredCard(index);
                setMousePosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
              }}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative bg-nav p-6 rounded-lg shadow-lg transition-transform overflow-hidden w-full max-w-lg my-6"
              whileHover={{
                scale: 1.05,
                backgroundColor: ["#1C1C1C", "#27272A", "#31473A"],
                transition: { duration: 0.5 },
              }}
              style={{
                transformStyle: "preserve-3d",
                transform: hoveredCard === index ? `rotateY(${mousePosition.x / 50}deg) rotateX(${mousePosition.y / 50}deg)` : "none",
              }}
            >
              {hoveredCard === index && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${experience.color}, transparent 150px)`,
                  }}
                  transition={{ duration: 0.15 }}
                />
              )}

              <div className="flex items-center gap-3 mb-3 relative z-10">
                <Briefcase size={24} className="text-gray-300" />
                <h2 className="text-xl font-semibold">{experience.title}</h2>
              </div>
              <h3 className="text-md font-medium text-gray-400 mb-2 relative z-10">{experience.company}</h3>
              <p className="text-sm text-gray-300 mb-4 relative z-10">{experience.duration}</p>
              <p className="text-md text-gray-300 mb-4 relative z-10">{experience.description}</p>

              <div className="flex justify-end relative z-10">
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bg1 text-white py-2 px-4 rounded-lg hover:bg-opacity-80"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
