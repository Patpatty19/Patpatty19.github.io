import React from 'react';
import './TiltCard.css';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxX?: number;
  tiltMaxY?: number;
  scale?: number;
  perspective?: number;
  glare?: boolean;
  maxGlare?: number;
}

// Check if the device is touch-enabled (mobile/tablet)
const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  tiltMaxX = 20,
  tiltMaxY = 20,
  scale = 1.02,
  perspective = 1000,
  glare = true,
  maxGlare = 0.3,
}) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [transform, setTransform] = React.useState('');
  const [glareStyle, setGlareStyle] = React.useState<React.CSSProperties>({});
  const [isTouch, setIsTouch] = React.useState(false);

  // Detect touch device on mount
  React.useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable tilt effect on touch devices
    if (isTouch || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * tiltMaxX;
    const rotateX = ((centerY - y) / centerY) * tiltMaxY;

    setTransform(
      `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
    );

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlareStyle({
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${maxGlare}), transparent 60%)`,
      });
    }
  };

  const handleMouseLeave = () => {
    // Disable on touch devices
    if (isTouch) return;
    setTransform('');
    setGlareStyle({});
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
    >
      {children}
      {glare && !isTouch && <div className="tilt-card-glare" style={glareStyle} />}
    </div>
  );
};

export default TiltCard;
