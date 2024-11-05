// src/HomePage.js

import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-screen py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-900 flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full flex flex-col justify-center items-center bg-cover bg-center text-center px-4">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://example.com/dress-background.jpg')" }} />
        <motion.div
          className="relative z-10 max-w-3xl p-6 bg-white bg-opacity-80 rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">Discover Your Elegance</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">Handcrafted dresses tailored to express your unique style.</p>
          <motion.button
            className="px-6 py-3 bg-purple-600 text-white text-lg rounded-full shadow-md hover:bg-purple-700 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Explore Our Collection
          </motion.button>
        </motion.div>
      </div>

      {/* Additional Section: Our Craft */}
      <section className="relative z-10 flex flex-col items-center justify-center py-16 md:py-24 bg-transparent text-white text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-teal-300 to-blue-400"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Craft
        </motion.h2>
        <p className="text-base md:text-lg mb-8 px-4 max-w-2xl text-gray-300">
          Every piece we create tells a story, combining tradition with innovation.
        </p>

        {/* Three-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">Tailored Jackets</h3>
            <p className="text-gray-300 text-sm">
              Our jackets are meticulously tailored for style and comfort, blending classic and contemporary designs.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">Unique Dresses</h3>
            <p className="text-gray-300 text-sm">
              Stand out in custom dresses crafted with precision and care, tailored to bring out the best in you.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">Custom Accessories</h3>
            <p className="text-gray-300 text-sm">
              Accessorize with exclusive, handcrafted pieces that add the perfect finishing touch to any outfit.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
