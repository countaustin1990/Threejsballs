import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Jumbotron from '../footercomponent/JumbotronComponent.test';
import { Link } from 'react-router-dom'

const AboutHero = () => {
  const [hovered, setHovered] = useState(false);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('jumbotron-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white">
        {/* Three.js Canvas */}
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          {/* Add a custom 3D model or shapes */}
        </Canvas>

        {/* Hero Content */}
        <motion.div
          className="absolute top-1/2 transform -translate-y-1/2 text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h3 className="text-5xl font-bold md:text-6xl">The Best Fashion Agency</h3>
          <p className="text-lg md:text-2xl max-w-lg mx-auto text-gray-200">
            Experience the best in digital art and creativity with our 3D-powered experiences.
          </p>

          {/* Call-to-Action Button with Framer Motion animation */}
          <Link to='/projects'>
            <motion.button
              className="mt-6 px-6 py-3 bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
       

        {/* Scroll Down Icon with Motion */}
        <IconContext.Provider value={{ size: '2em', color: hovered ? 'white' : '#aaa' }}>
          <motion.div
            className="absolute bottom-8 cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={scrollToNextSection}
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaArrowDown/>
          </motion.div>
        </IconContext.Provider>
      </section>

      {/* Next Section */}
      <section id="jumbotron-section">
        <Jumbotron className="mt-5"/>
      </section>
    </>
  );
};

export default AboutHero;
