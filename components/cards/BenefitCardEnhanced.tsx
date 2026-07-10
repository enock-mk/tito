// components/cards/BenefitCardEnhanced.tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Benefit } from '@/data/benefits';
import { FloatingIcon } from '@/components/animations/FloatingIcon';

interface BenefitCardEnhancedProps {
  benefit: Benefit;
  className?: string;
  index?: number;
  showProgress?: boolean;
}

export function BenefitCardEnhanced({
  benefit,
  className,
  index = 0,
  showProgress = true,
}: BenefitCardEnhancedProps) {
  const Icon = benefit.icon;

  // Mock progress values for demo
  const progressValues: Record<string, number> = {
    'fast-onboarding': 95,
    'secure-payments': 99,
    'cloud-based': 100,
    'reports': 92,
    'easy-booking': 98,
    'multi-platform': 90,
    'customer-support': 97,
    'trusted-platform': 94,
  };

  const progress = progressValues[benefit.id] || 90;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.4, delay: index * 0.05 },
        },
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
      className={cn(
        'group relative rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900',
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <FloatingIcon
        duration={3 + index * 0.5}
        delay={index * 0.2}
        yOffset={6}
      >
        <div
          className={cn(
            'inline-flex rounded-xl bg-gradient-to-br p-3 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl',
            benefit.gradient
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
      </FloatingIcon>

      {/* Content */}
      <h3 className="mt-4 text-lg font-semibold tracking-tight">
        {benefit.title}
      </h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {benefit.description}
      </p>

      {/* Progress Circle */}
      {showProgress && (
        <div className="mt-4 flex items-center gap-4">
          <div className="relative h-12 w-12">
            <svg className="h-full w-full -rotate-90 transform">
              <circle
                cx="24"
                cy="24"
                r="18"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className="text-neutral-200 dark:text-neutral-700"
              />
              <motion.circle
                cx="24"
                cy="24"
                r="18"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className="text-primary"
                initial={{ strokeDasharray: `${progress * 2.83} 283` }}
                animate={{ strokeDasharray: `${progress * 2.83} 283` }}
                transition={{ duration: 1, delay: 0.5 }}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
              {progress}%
            </span>
          </div>
          <div>
            <p className="text-sm font-medium">{benefit.stats}</p>
            <p className="text-xs text-neutral-500">Satisfaction rate</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}