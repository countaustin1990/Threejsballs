import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

export default function MeasurementGuide() {
  return (
    <div className="h-screen">
      <Canvas camera={{ position: [2, 2, 5], fov: 50 }}>
        {/* Ambient and Directional Light */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />

        {/* Mannequin/Box Geometry */}
        <mesh position={[0, 0, 0]}>
          <boxBufferGeometry args={[1, 2, 0.5]} />
          <meshStandardMaterial color="lightblue" />
        </mesh>

        {/* Measurement Lines and Labels */}
        <MeasurementLine position={[0.5, 1, 0]} label="Chest" />
        <MeasurementLine position={[0.5, -0.5, 0]} label="Waist" />
        <MeasurementLine position={[0.5, -1.5, 0]} label="Hip" />

        {/* Orbit Controls for rotation */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

function MeasurementLine({ position, label }) {
  return (
    <group position={position}>
      {/* Line Geometry */}
      <line>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={['attributes', 'position']}
            array={new THREE.Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3)}
            count={2}
          />
        </bufferGeometry>
        <lineBasicMaterial color="red" />
      </line>

      {/* Label as HTML Overlay */}
      <Html position={[1.2, 0, 0]}>
        <div className="bg-black text-white p-1 rounded text-xs">{label}</div>
      </Html>
    </group>
  );
}
