// components/animations/FloatingIcon.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FloatingIconProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
}

export function FloatingIcon({
  children,
  className,
  duration = 3,
  delay = 0,
  yOffset = 10,
}: FloatingIconProps) {
  return (
    <motion.div
      className={cn(className)}
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}