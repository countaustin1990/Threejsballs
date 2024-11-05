// src/HomePage.js
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
//import Navbar from '../components/Navbar';

const HomePage = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountNode.appendChild(renderer.domElement);

    const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0x0077ff, flatShading: true });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(ambientLight, directionalLight);

    const animate = () => {
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      mountNode.removeChild(renderer.domElement);
      renderer.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Navbar 
     <Navbar/>*/}
      {/* 3D Scene */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Hero Section */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center px-6  bg-opacity-50 backdrop-blur-lg rounded-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 p-3">
          Artistry in Tailoring
        </h1>
        <p className="text-base md:text-lg mb-8 max-w-2xl text-gray-300">
          Explore a world of bespoke creations and unique designs, tailored just for you.
        </p>
        <motion.button
          className="px-8 py-3 bg-pink-600 rounded-full text-base md:text-lg font-semibold text-gray-50 transition-transform transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          whileHover={{ scale: 1.1 }}
        >
          Discover More
        </motion.button>
      </motion.div>

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
