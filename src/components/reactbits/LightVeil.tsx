import React from 'react';
import { motion } from 'framer-motion';
import './LightVeil.css';

interface LightVeilProps {
  speed?: number;
}

const LightVeil: React.FC<LightVeilProps> = ({ speed = 20 }) => {
  return (
    <div className="light-veil">
      {/* Animated gradient orbs */}
      <motion.div
        className="light-orb light-orb-1"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="light-orb light-orb-2"
        animate={{
          x: [0, -80, -40, 0],
          y: [0, 80, -20, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: speed * 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="light-orb light-orb-3"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: speed * 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle mesh gradient overlay */}
      <div className="light-mesh" />
    </div>
  );
};

export default LightVeil;
