// components/carousel/InfiniteLogoCarousel.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Partnerr } from '@/data/partners';

interface InfiniteLogoCarouselProps {
  partners: Partnerr[];
  speed?: number; // pixels per second
  direction?: 'left' | 'right';
  className?: string;
  pauseOnHover?: boolean;
}

export function InfiniteLogoCarousel({
  partners,
  speed = 40,
  direction = 'left',
  className,
  pauseOnHover = true,
}: InfiniteLogoCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 30 });

  // Duplicate partners for seamless scrolling
  const duplicatedPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    if (!containerRef.current || isPaused) return;

    const containerWidth = containerRef.current.scrollWidth / 3;
    const totalWidth = containerRef.current.scrollWidth;

    
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
        style={{ x: springX }}
        className="flex gap-12 py-4"
      >
        {duplicatedPartners.map((partner, index) => (
          <motion.div
            key={`${partner.id}-${index}`}
            className="flex shrink-0 items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br text-2xl',
                partner.color || 'from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800'
              )}
            >
              {<partner.icon /> }
            </div>
            <span className="text-sm font-medium whitespace-nowrap">
              {partner.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}