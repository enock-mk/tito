// components/animations/SlideUp.tsx
'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SlideUpProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideUp({
  children,
  delay = 0,
  duration = 0.6,
  className,
  ...props
}: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}