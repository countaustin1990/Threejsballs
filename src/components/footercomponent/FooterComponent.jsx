// FooterComponent.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
//import JumbotronComponent from './JumbotronComponent.test';

const FooterComponent = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="container mx-auto py-2 px-4">
        
        {/* Company Name and Motto */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl font-bold">DFashion</h1>
          <p className="text-x1 text-gray-400">Artistry in Tailoring</p>
          {/*<JumbotronComponent/>*/}
        </motion.div>

        {/* Quick Links and Social Media */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-400 transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">
                <FaFacebook size={16} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Copyright Notice */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm p-5">&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterComponent;
