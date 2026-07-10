// components/cards/BenefitCardWithVariants.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Benefit } from '@/data/benefits';

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.98,
  },
};

export function BenefitCardWithVariants({
  benefit,
  index,
}: {
  benefit: Benefit;
  index: number;
}) {
  const Icon = benefit.icon;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative rounded-2xl border bg-white p-6 transition-shadow hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div
        className={cn(
          'inline-flex rounded-xl bg-gradient-to-br p-3 text-white shadow-lg transition-all duration-300 group-hover:scale-110',
          benefit.gradient
        )}
      >
        <Icon className="h-6 w-6" />
      </div>

      {/* Content */}
      <h3 className="mt-4 text-lg font-semibold tracking-tight">
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

      {/* Hover Border Glow */}
      <div className="absolute inset-0 -z-10 rounded-2xl border-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />
    </motion.div>
  );
}