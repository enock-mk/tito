// components/animations/ScaleIn.tsx
'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScaleInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  scale?: number;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
  scale = 0.9,
  ...props
}: ScaleInProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: scale },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration, delay, ease: 'easeOut' },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}