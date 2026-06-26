import { useState } from "react";
import { motion } from "framer-motion";
import profile from "../image/profile.jpg";

export default function Main() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMove = (x, y) => {
    setMousePosition({ x, y });
  };

  return (
    <div
      className="relative bg-bg1 text-white flex flex-col items-center justify-center px-4 min-h-screen"
      onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
      onTouchMove={(e) => {
        const touch = e.touches[0];
        if (touch) handleMove(touch.clientX, touch.clientY);
      }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 197, 253, 0.3), transparent 200px)`,
        }}
        transition={{ duration: 0.0 }}
      />
      {/* Profile Section */}
      <div className="flex flex-col p-6 md:flex-row items-center md:items-start gap-8 w-full max-w-lg sm:max-w-2xl text-center md:text-left relative z-10">
        {/* Profile Image */}
        <div className="p-6 md:p-6">
          <img
            src={profile}
            alt="Jay Mishra"
            className="h-64 w-64 object-cover rounded-lg"
          />
        </div>

        {/* Introduction */}
        <div className="flex flex-col justify-center max-w-lg sm:max-w-2xl">
          <h1 className="text-xl sm:text-2xl">Hey 👋🏻 This is...</h1>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">Jay Mishra</h2>

          <p className="mt-4 text-lg sm:text-xl max-w-md">
            I’m a Fullstack Developer with 1+ years of experience exploring
            technologies across   Backend , Frontend and AI/ML. I love crafting solutions
            and sharing knowledge to empower developers worldwide.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-icon px-6 py-3 rounded-lg" onClick={() => window.location.href = "/about"}>About</button>
            <button className="bg-div px-6 py-3 rounded-lg" onClick={() => window.location.href = "/contact"}>Get in Touch</button>
          </div>
        </div>
      </div>

      {/* Professional Journey */}
      <div className="mt-12 text-center space-y-6 w-full cols relative z-10">
        <h1 className="text-xl sm:text-2xl font-bold">What I've Been Upto...</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-div rounded-lg p-6 max-w-lg sm:max-w-2xl mx-auto flex flex-col items-start text-left">
            <h2 className="text-lg sm:text-2xl font-semibold">Professional Journey</h2>
            <p className="mt-4">
              I have worked as a Fullstack Developer Intern for the last 12 months.
              My day-to-day includes collaborating across teams, crafting technical docs, leading workshops, and building tools that help developers explore cutting-edge solutions.
            </p>
          </div>

          {/* Personal Projects */}
          <div className="bg-div rounded-lg p-6 max-w-lg sm:max-w-2xl mx-auto flex flex-col items-start text-left">
            <h2 className="text-lg sm:text-2xl font-semibold">Personal Projects</h2>
            <p className="mt-4">
              Outside of my day job, I’m diving into AI and web3 space—experimenting with model
              fine-tuning, prompt engineering, and prototypes that push creative
              boundaries. I’m excited to share what’s next—stay tuned!
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 relative z-10">
        <p>&copy; {new Date().getFullYear()} Jay Mishra. All rights reserved.</p>
      </div>
    </div>
  );
}
