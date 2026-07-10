// components/showcase/FloatingBadge.tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingBadgeProps {
  children: React.ReactNode;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  className?: string;
  delay?: number;
}

export function FloatingBadge({
  children,
  position = 'top-right',
  className,
  delay = 0,
}: FloatingBadgeProps) {
  const positions = {
    'top-right': 'top-16 -right-6',
    'top-left': 'top-16 -left-6',
    'bottom-right': 'bottom-16 -right-6',
    'bottom-left': 'bottom-16 -left-6',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={cn(
        'absolute z-20 rounded-2xl p-3 shadow-xl border border-[#FDB71A]/20 backdrop-blur-sm',
        positions[position],
        className
      )}
      style={{
        background: 'rgba(10, 26, 53, 0.85)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {children}
    </motion.div>
  );
}