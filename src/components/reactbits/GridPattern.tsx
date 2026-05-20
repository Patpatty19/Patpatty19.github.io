import React from 'react';

interface GridPatternProps {
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GridPattern: React.FC<GridPatternProps> = ({
  size,
  width = 40,
  height = 40,
  color = 'currentColor',
  opacity = 0.1,
  className = '',
  style = {}
}) => {
  const patternSize = size || width;
  const patternHeight = size || height;
  
  return (
    <svg
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        ...style
      }}
    >
      <defs>
        <pattern
          id="grid-pattern"
          width={patternSize}
          height={patternHeight}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${patternSize} 0 L 0 0 0 ${patternHeight}`}
            fill="none"
            stroke={color}
            strokeWidth="0.5"
            strokeOpacity={opacity}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
};

export default GridPattern;
