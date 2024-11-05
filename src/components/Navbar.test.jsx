// src/Navbar.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaEnvelope, FaBriefcase, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className="w-full px-4 py-6 bg-white bg-opacity-80 backdrop-blur-md shadow-lg fixed top-0 left-0 z-20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 75 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <motion.div
          className="text-2xl font-bold text-purple-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          MyPortfolio
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {[
            { href: "#home", label: "Home", icon: <FaHome /> },
            { href: "#about", label: "About", icon: <FaUser /> },
            { href: "#projects", label: "Projects", icon: <FaBriefcase /> },
            { href: "#contact", label: "Contact", icon: <FaEnvelope /> },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center text-gray-700 hover:text-purple-600 transition duration-300"
                aria-label={item.label}
              >
                <motion.div whileHover={{ scale: 1.2 }} className="mr-2">
                  {item.icon}
                </motion.div>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-purple-600 text-2xl cursor-pointer" onClick={handleToggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="absolute top-full left-0 w-full bg-white bg-opacity-90 backdrop-blur-lg shadow-lg flex flex-col items-center py-8 space-y-4 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { href: "#home", label: "Home", icon: <FaHome /> },
            { href: "#about", label: "About", icon: <FaUser /> },
            { href: "#projects", label: "Projects", icon: <FaBriefcase /> },
            { href: "#contact", label: "Contact", icon: <FaEnvelope /> },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center text-gray-700 hover:text-purple-600 transition duration-300"
                onClick={handleToggle}
                aria-label={item.label}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
