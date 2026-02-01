import { useState, useRef, useCallback, type ReactNode } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';
import './GradientText.css';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  direction?: 'horizontal' | 'vertical' | 'diagonal';
  pauseOnHover?: boolean;
  yoyo?: boolean;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#6366f1', '#8b5cf6', '#a855f7', '#6366f1'],
  animationSpeed = 8,
  showBorder = false,
  direction = 'horizontal',
  pauseOnHover = false,
  yoyo = true
}: GradientTextProps) {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const animationDuration = animationSpeed * 1000;

  useAnimationFrame((time) => {
    if (isPaused) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    if (yoyo) {
      const fullCycle = animationDuration * 2;
      const normalizedTime = elapsedRef.current % fullCycle;
      const yoyoProgress =
        normalizedTime <= animationDuration
          ? normalizedTime / animationDuration
          : 1 - (normalizedTime - animationDuration) / animationDuration;
      progress.set(yoyoProgress);
    } else {
      const normalizedProgress = (elapsedRef.current % animationDuration) / animationDuration;
      progress.set(normalizedProgress);
    }
  });

  const backgroundPosition = useTransform(progress, (p: number) => {
    const percentage = p * 100;
    switch (direction) {
      case 'horizontal':
        return `${percentage}% 50%`;
      case 'vertical':
        return `50% ${percentage}%`;
      case 'diagonal':
        return `${percentage}% ${percentage}%`;
      default:
        return `${percentage}% 50%`;
    }
  });

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientAngle =
    direction === 'horizontal'
      ? 'to right'
      : direction === 'vertical'
      ? 'to bottom'
      : 'to bottom right';

  const gradientColors = [...colors, colors[0]].join(', ');

  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize:
      direction === 'horizontal'
        ? '300% 100%'
        : direction === 'vertical'
        ? '100% 300%'
        : '300% 300%',
    backgroundRepeat: 'repeat'
  };

  return (
    <motion.span
      className={`gradient-text-wrapper ${showBorder ? 'with-border' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block', position: 'relative' }}
    >
      {showBorder && (
        <motion.span
          className="gradient-border"
          style={{
            ...gradientStyle,
            backgroundPosition,
            position: 'absolute',
            inset: '-2px',
            borderRadius: '8px',
            zIndex: 0
          }}
        >
          <span
            style={{
              position: 'absolute',
              background: 'var(--bg)',
              borderRadius: '6px',
              width: 'calc(100% - 2px)',
              height: 'calc(100% - 2px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </motion.span>
      )}
      <motion.span
        style={{
          ...gradientStyle,
          backgroundPosition,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          display: 'inline-block',
          position: 'relative',
          zIndex: 1
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
