import { useRef, useState, useEffect, type ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.5s ease-in-out',
  wrapperClassName = '',
  innerClassName = ''
}) => {
  const magnetRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset position on scroll (fixes stuck issue)
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || isMobile || !magnetRef.current) return;

    const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const maxDistance = Math.max(width, height) / 2 + padding;

    if (distance < maxDistance) {
      setIsActive(true);
      setPosition({
        x: (distanceX / magnetStrength) * (1 - distance / maxDistance),
        y: (distanceY / magnetStrength) * (1 - distance / maxDistance)
      });
    } else {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'inline-block',
        position: 'relative'
      }}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: isActive ? activeTransition : inactiveTransition
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
