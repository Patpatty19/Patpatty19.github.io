import React from 'react';
import { motion } from 'framer-motion';

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
  speed?: number;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  children,
  className = '',
  shimmerWidth = 100,
  speed = 2
}) => {
  return (
    <span
      className={className}
      style={{
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden'
      }}
    >
      {children}
      <motion.span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          )`,
          backgroundSize: `${shimmerWidth}px 100%`,
          pointerEvents: 'none'
        }}
        animate={{
          backgroundPosition: ['200% 0', '-200% 0']
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </span>
  );
};

export default ShinyText;
