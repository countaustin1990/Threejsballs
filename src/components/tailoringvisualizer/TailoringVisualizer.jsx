// TailoringVisualizer.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';

export default function TailoringVisualizer() {
  return (
    <Canvas>
      <ambientLight />
      <mesh>
        <boxBufferGeometry args={[1, 2, 0.5]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </Canvas>
  );
}
