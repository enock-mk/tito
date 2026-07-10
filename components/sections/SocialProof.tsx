// components/sections/SocialProof.tsx
'use client';

import { motion } from 'framer-motion';
import { Star, Users, Award, TrendingUp } from 'lucide-react';
import { CountUp } from '@/components/animations/CountUp';
import { SlideIn } from '@/components/animations/SlideIn';

export function SocialProof() {
  const stats = [
    { icon: Star, value: 4.8, label: 'Average Rating', suffix: '⭐' },
    { icon: Users, value: 120, label: 'Active Partners', suffix: '+' },
    { icon: Award, value: 98, label: 'Satisfaction Rate', suffix: '%' },
    { icon: TrendingUp, value: 40, label: 'Revenue Growth', suffix: '%' },
  ];

  return (
    <section className="py-12 border-t border-b dark:border-neutral-800">
      <div className="container mx-auto px-4">
        <SlideIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Trusted by businesses worldwide
            </p>
          </div>
        </SlideIn>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <stat.icon className="h-6 w-6 text-primary" />
              <div className="mt-2 text-2xl font-bold text-primary">
                {typeof stat.value === 'number' ? (
                  <CountUp end={stat.value} suffix={stat.suffix} />
                ) : (
                  `${stat.value}${stat.suffix}`
                )}
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}