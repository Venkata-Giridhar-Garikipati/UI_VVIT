import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';

function CampusModel() {
  const group = useRef();
  
  // Simple 3D building representation
  return (
    <group ref={group}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 3, 2]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
      <mesh position={[3, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#1e3a8a" />
      </mesh>
      <mesh position={[-3, 0, 0]}>
        <boxGeometry args={[2, 4, 2]} />
        <meshStandardMaterial color="#1e3a8a" />
      </mesh>
    </group>
  );
}

const Hero3D = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-[400px] w-full bg-gray-900"
    >
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <CampusModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  );
};

export default Hero3D;