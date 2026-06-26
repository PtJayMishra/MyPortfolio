import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission via mailto
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:jay123mishrapt@gmail.com?subject=New Contact Inquiry&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      className="relative text-white p-5 bg-bg1 min-h-screen flex flex-col items-center justify-center"
      onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 197, 253, 0.3), transparent 200px)`,
        }}
        transition={{ duration: 0.2 }}
      />

      <h1 className="font-bold text-center text-3xl p-4 relative z-10">Contact Me</h1>
      <p className="text-lg sm:text-xl text-center mb-8 max-w-2xl relative z-10">
        Feel free to reach out for collaboration, inquiries, or just to say hello!
      </p>

      <motion.div
        className="bg-nav p-6 rounded-lg shadow-lg w-full max-w-lg relative z-10"
        whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
      >
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-md bg-bg1 text-white outline-none border border-gray-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md bg-bg1 text-white outline-none border border-gray-600"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-md bg-bg1 text-white outline-none border border-gray-600"
            required
          ></textarea>
          <button type="submit" className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-opacity-80">
            Send Message
          </button>
        </form>
      </motion.div>

      <div className="mt-8 flex flex-col gap-4 text-center relative z-10">
        <div className="flex items-center gap-2 justify-center">
          <Mail size={20} className="text-gray-300" />
          <a href="mailto:jay123mishrapt@gmail.com" className="hover:text-icon">
          jay123mishrapt@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <Phone size={20} className="text-gray-300" />
          <a href="tel:+919575702649" className="hover:text-icon">
            +91 9575702649
          </a>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <MapPin size={20} className="text-gray-300" />
          <p>Bhopal, India</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
