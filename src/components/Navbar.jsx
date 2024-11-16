// src/Navbar.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaEnvelope, FaBriefcase, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation  } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const location = useLocation();

  // Only render Header if the current route is not "/about"
  if (location.pathname === '/about') {
    return null; // Don't render the header on the About page
  }


  return (
    <motion.nav
      className="w-full px-4 py-6 bg-black shadow-lg fixed top-0 left-0 z-20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 75 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <motion.div
          className="text-2xl font-bold text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          DFashion
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {[
            { to: "/", label: "Home", icon: <FaHome /> },
            { to: "/about", label: "About", icon: <FaUser /> },
            { to: "/projects", label: "Projects", icon: <FaBriefcase /> },
            { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="flex items-center text-gray-400 hover:text-purple-600 transition duration-300"
                aria-label={item.label}
              >
                <motion.div whileHover={{ scale: 1.2 }} className="mr-2">
                  {item.icon}
                </motion.div>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-gray-200 text-2xl cursor-pointer" onClick={handleToggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="absolute top-full left-0 w-full bg-white/80 bg-opacity-90 text-gray-800 backdrop-blur-lg shadow-lg flex flex-col items-center py-8 space-y-4 md:hidden z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { to: "/", label: "Home", icon: <FaHome /> },
            { to: "/about", label: "About", icon: <FaUser /> },
            { to: "/projects", label: "Projects", icon: <FaBriefcase /> },
            { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="flex items-center text-gray-700 hover:text-purple-600 transition duration-300"
                onClick={handleToggle}
                aria-label={item.label}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
