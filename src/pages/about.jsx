import { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative text-white p-5 bg-bg1 text-left min-h-screen"
      onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 197, 253, 0.3), transparent 200px)`,
        }}
        transition={{ duration: 0.2 }}
      />

      <h1 className="font-bold text-2xl p-4 relative z-10">Little About Me...</h1>

      <div className="container max-w-lg sm:max-w-2xl p-6 relative z-10">
        <h1 className="font-bold text-xl mb-2">Background</h1>
        <p className="text-lg sm:text-xl">
          B.Tech in Electronic and Communication Engineering • AI Enthusiast • Web-3 Developer • Blockchain Contributor • Product Manager • Public Speaker
        </p>
      </div>

      <div className="bg-nav m-4 p-6 rounded-lg relative z-10">
        <h1 className="font-bold text-xl text-left mb-4">Tech Toolkit</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[ "C++", "Node.js", "React.js", "MongoDB", "Docker", "AWS(EC2 , S3)", "CI/CD", "NGINX", "PM2", "Data Structure and Algorithm", "DBMS", "OOPs", "Operating Systems" , "Multithreading", "Concurrency" ].map((tech) => (
            <div key={tech} className="bg-bg1 p-3 rounded-lg text-center">{tech}</div>
          ))}
        </div>
      </div>
      <div className="container text-left max-w-lg sm:max-w-2xl p-6 m-3 gap-2 relative z-10">
        <h1 className="font-bold text-left text-2xl gap-4 m-3"> Development Philosophy</h1>
        <p className="text-gray-400 text-left gap-4 m-3">Believe in building open, transparent systems that empower both developers and end users. Passionate about crafting user-centric products and driving innovation through decentralized technologies. Dedicated to bridging technical depth with real-world impact.</p>
        
        <h1 className="font-bold text-left text-2xl gap-4 m-3">Community Work </h1>
        <p className="text-left text-gray-400 gap-4 m-3">Mentored 50+ developers • Active in web 3.0 & AI communities • Led product-focused initiatives on core teams • Public speaker at conferences • Regular workshop host • Blockchain meetup organizer</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 text-center font-bold hover:text-icon cursor-pointer relative z-10">
        <div className="bg-nav gap-4 m-3 rounded-lg">
          <a href="https://x.com/0xJayMishra">Twitter</a>
        </div>
        <div className="bg-nav gap-4 m-3 rounded-lg">
          <a href="https://www.linkedin.com/in/jaymishra10/">Linkedin</a>
        </div>
        <div className="bg-nav gap-4 m-3 rounded-lg">
          <a href="https://github.com/PtJayMishra">Github</a>
        </div>
      </div>
    </div>
  );
};

export default About;
