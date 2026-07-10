// components/timeline/TimelineConnector.tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TimelineConnectorProps {
  isActive: boolean;
  isLast: boolean;
  className?: string;
}

export function TimelineConnector({
  isActive,
  isLast,
  className,
}: TimelineConnectorProps) {
  if (isLast) return null;

  return (
    <div className={cn('relative flex flex-col items-center', className)}>
      {/* Vertical Line */}
      <div className="relative h-12 w-0.5">
        {/* Background Line */}
        <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-700" />
        
        {/* Animated Line */}
        <motion.div
          className="absolute inset-0 bg-primary"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isActive ? 1 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </div>

      {/* Dot at bottom */}
      <div className="relative">
        <div className="h-3 w-3 rounded-full border-2 bg-white dark:border-neutral-700 dark:bg-neutral-900">
          <motion.div
            className="absolute inset-0.5 rounded-full bg-primary"
            initial={{ scale: 0 }}
            animate={{ scale: isActive ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
}