// components/animations/ScrollReveal.tsx
'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'left' | 'right' | 'up' | 'down' | 'none';
  className?: string;
  threshold?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className,
  threshold = 0.1,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px', amount: threshold });
  const controls = useAnimation();

  const directions = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 },
    none: { x: 0, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          ...directions[direction],
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}