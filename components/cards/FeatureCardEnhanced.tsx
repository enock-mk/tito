// components/cards/FeatureCardEnhanced.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Feature } from '@/data/platform';

interface FeatureCardEnhancedProps {
  feature: Feature;
  className?: string;
  index?: number;
}

export function FeatureCardEnhanced({ feature, className, index }: FeatureCardEnhancedProps) {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut' },
        },
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
      className={cn(
        'group relative rounded-2xl bg-white p-6 transition-all duration-300 dark:bg-neutral-900',
        className
      )}
    >
      {/* Animated Gradient Border */}
      <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-0 blur transition-opacity duration-500 group-hover:opacity-50" />
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-white dark:bg-neutral-900" />

      {/* Icon Container with Glow */}
      <div className="relative">
        <div
          className={cn(
            'inline-flex rounded-xl bg-gradient-to-br p-3 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl',
            feature.gradient
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
        
        {/* Icon Glow */}
        <div
          className={cn(
            'absolute inset-0 -z-10 rounded-xl blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-50',
            feature.gradient
          )}
        />
      </div>

      {/* Content */}
      <h3 className="mt-4 text-lg font-semibold tracking-tight">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {feature.description}
      </p>

      {/* Stats Badge */}
      {feature.stats && (
        <div className="mt-4 inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
          {feature.stats}
        </div>
      )}

      {/* Link with Arrow Animation */}
      {feature.href && (
        <Link
          href={feature.href}
          className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-all hover:gap-2"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}

      {/* Hover Shine Effect */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}