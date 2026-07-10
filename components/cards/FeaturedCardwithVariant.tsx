// components/cards/FeatureCardWithVariants.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Feature } from '@/data/platform';

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.05,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: 'easeOut' as const,
    },
  },
};

export function FeatureCardWithVariants({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative rounded-2xl border bg-white p-6 transition-shadow hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
    >
      {/* ... rest of card content */}
    </motion.div>
  );
}