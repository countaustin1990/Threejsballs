// AboutMaterials.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { TextureLoader } from 'three';
//import cotton from './textures/cotton.jpg'; // Update the path according to your project structure
//import wool from './textures/wool.jpg'; // Update the path according to your project structure

function FabricCube({ texture }) {
  return (
    <mesh rotation={[45, 45, 0]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
}

export default function AboutMaterials() {
  // Load textures using the TextureLoader
  const fabricTextures = [
    new TextureLoader().load(cotton),
    new TextureLoader().load(wool)
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {fabricTextures.map((texture, index) => (
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.2 }} 
          key={index}
          className="bg-gray-100 rounded-lg shadow-md p-4"
        >
          <Canvas style={{ height: '200px', width: '100%' }}>
            <ambientLight intensity={0.5} />
            <OrbitControls enableZoom={false} />
            <FabricCube texture={texture} />
          </Canvas>
          <p className="text-center mt-2 font-semibold">Fabric {index + 1}</p>
        </motion.div>
      ))}
    </div>
  );
}
