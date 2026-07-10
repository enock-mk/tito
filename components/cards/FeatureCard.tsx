// components/cards/FeatureCard.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Feature } from '@/data/platform';

interface FeatureCardProps {
  feature: Feature;
  className?: string;
  index?: number;
}

export function FeatureCard({ feature, className, index }: FeatureCardProps) {
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
        'group relative rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900',
        className
      )}
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div
        className={cn(
          'inline-flex rounded-xl bg-gradient-to-br p-3 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl',
          feature.gradient
        )}
      >
        <Icon className="h-6 w-6" />
      </div>

      {/* Content */}
      <h3 className="mt-4 text-lg font-semibold tracking-tight group-hover:text-primary">
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

      {/* Link */}
      {feature.href && (
        <Link
          href={feature.href}
          className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-all hover:gap-0.9"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}

      {/* Hover Border Glow */}
      <div className="absolute inset-0 -z-10 rounded-2xl border-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />

      {/* Shine Effect */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}