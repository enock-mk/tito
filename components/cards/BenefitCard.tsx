// components/cards/BenefitCard.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Benefit } from '@/data/benefits';
import { FloatingIcon } from '@/components/animations/FloatingIcon';

interface BenefitCardProps {
  benefit: Benefit;
  className?: string;
  index?: number;
  variant?: 'default' | 'compact' | 'featured';
}

export function BenefitCard({
  benefit,
  className,
  index = 0,
  variant = 'default',
}: BenefitCardProps) {
  const Icon = benefit.icon;

  const variants = {
    default: {
      padding: 'p-6',
      iconSize: 'h-12 w-12',
      iconPadding: 'p-3',
      titleSize: 'text-lg',
    },
    compact: {
      padding: 'p-4',
      iconSize: 'h-10 w-10',
      iconPadding: 'p-2',
      titleSize: 'text-base',
    },
    featured: {
      padding: 'p-8',
      iconSize: 'h-14 w-14',
      iconPadding: 'p-4',
      titleSize: 'text-xl',
    },
  };

  const currentVariant = variants[variant];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, delay: index * 0.05 },
        },
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className={cn(
        'group relative rounded-2xl border bg-white transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900',
        currentVariant.padding,
        className
      )}
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon with Floating Animation */}
      <FloatingIcon
        duration={3 + index * 0.5}
        delay={index * 0.2}
        yOffset={6}
        className="relative"
      >
        <div
          className={cn(
            'inline-flex rounded-xl bg-gradient-to-br text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl',
            benefit.gradient,
            currentVariant.iconPadding,
            currentVariant.iconSize
          )}
        >
          <Icon className="h-full w-full"/>
        </div>

        {/* Icon Glow */}
        <div
          className={cn(
            'absolute inset-0 -z-10 rounded-xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-50',
            benefit.gradient
          )}
        />
      </FloatingIcon>

      {/* Content */}
      <h3 className={cn(
        'mt-4 font-semibold tracking-tight',
        currentVariant.titleSize
      )}>
        {benefit.title}
      </h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {benefit.description}
      </p>

      {/* Stats Badge */}
      {benefit.stats && (
        <div className="mt-4 inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
          {benefit.stats}
        </div>
      )}

      {/* Link */}
      {benefit.href && (
        <Link
          href={benefit.href}
          className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-all hover:gap-2"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}

      {/* Hover Border Glow */}
      <div className="absolute inset-0 -z-10 rounded-2xl border-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />
    </motion.div>
  );
}