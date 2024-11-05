// JumbotronComponent.jsx
import React from 'react';
import { motion } from 'framer-motion';

const JumbotronComponent = () => {
  return (
    <div className="bg-yellow-400 py-5 md:py-24 w-lg rounded-lg">
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to MyPortfolio
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Crafting Your Style, One Stitch at a Time
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block bg-gray-800 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get in Touch
        </motion.a>
      </div>
    </div>
  );
};

export default JumbotronComponent;
