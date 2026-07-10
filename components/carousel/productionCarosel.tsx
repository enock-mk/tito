// components/carousel/InfiniteLogoCarouselSVG.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Logo {
  id: string;
  name: string;
  svg: React.ReactNode;
}

interface InfiniteLogoCarouselSVGProps {
  logos: Logo[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
  pauseOnHover?: boolean;
}

export function InfiniteLogoCarouselSVG({
  logos,
  speed = 40,
  direction = 'left',
  className,
  pauseOnHover = true,
}: InfiniteLogoCarouselSVGProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const duplicatedLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    if (!containerRef.current || isPaused) return;

    const containerWidth = containerRef.current.scrollWidth / 3;

    const animate = () => {
      const currentX = x.get();
      const step = direction === 'left' ? -1 : 1;

      if (Math.abs(currentX) >= containerWidth) {
        x.set(0);
      } else {
        x.set(currentX + step * (speed / 60));
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [x, speed, direction, isPaused]);

  return (
    <div
      className={cn('overflow-hidden', className)}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex items-center gap-16 py-6"
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={`${logo.id}-${index}`}
            className="flex flex-shrink-0 items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="h-10 w-auto grayscale transition-all duration-300 hover:grayscale-0">
              {logo.svg}
            </div>
            <span className="sr-only">{logo.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}