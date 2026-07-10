// components/animations/SlideIn.tsx
'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SlideInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

export function SlideIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className,
  ...props
}: SlideInProps) {
  const directions = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}