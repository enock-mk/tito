// components/showcase/PlaceholderImage.tsx
'use client';

interface PlaceholderImageProps {
  width: number;
  height: number;
  text: string;
  className?: string;
}

export function PlaceholderImage({
  width,
  height,
  text,
  className,
}: PlaceholderImageProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
    >
      <rect width="100%" height="100%" fill="#f0f0f0" />
      <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2563EB', stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: '#7C3AED', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#666"
        fontSize="16"
        fontFamily="system-ui"
      >
        {text}
      </text>
    </svg>
  );
}