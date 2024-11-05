// BeforeAfterShowcase.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
//import { motion } from 'framer-motion';

function ShowcaseModel({ model }) {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" />
    </mesh>
  );
}

export default function BeforeAfterShowcase() {
  return (
    <div className="flex">
      <Canvas>
        <ShowcaseModel />
      </Canvas>
    </div>
  );
}
