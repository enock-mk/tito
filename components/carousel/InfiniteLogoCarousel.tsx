// components/carousel/InfiniteLogoCarousel.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Partner } from '@/data/partners';

interface InfiniteLogoCarouselProps {
  partners: Partner[];
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
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const animationRef = useRef<number | null>(null);

  // Create new array (immutable) for seamless scrolling
  const duplicatedPartners = [...partners, ...partners, ...partners];

  // Define animate as a regular function (not useCallback) to avoid circular reference
  const animate = () => {
    if (!containerRef.current || isPaused) return;

    const containerWidth = containerRef.current.scrollWidth / 3;
    const currentX = x.get();
    const step = direction === 'left' ? -1 : 1;

    if (Math.abs(currentX) >= containerWidth) {
      x.set(0);
    } else {
      x.set(currentX + step * (speed / 60));
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  // Start animation when component mounts or dependencies change
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, speed, direction]);

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
        {duplicatedPartners.map((partner, index) => {
          const Icon = partner.icon;
          return (
            <motion.div
              key={`${partner.id}-${index}`}
              className="flex shrink-0 items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div
                className={cn(
                  'flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br text-white shadow-lg transition-all duration-300 hover:shadow-xl',
                  partner.color || 'from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800'
                )}
              >
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium whitespace-nowrap">
                {partner.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}