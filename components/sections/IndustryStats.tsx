// components/sections/IndustryStats.tsx
'use client';

import { motion } from 'framer-motion';
import { industries } from '@/data/industries';
import { CountUp } from '@/components/animations/CountUp';
import { SlideIn } from '@/components/animations/SlideIn';

export function IndustryStats() {
  const totalIndustries = industries.length;
  const totalFeatures = industries.reduce((acc, i) => acc + i.features.length, 0);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SlideIn>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: totalIndustries, label: 'Industries Served', suffix: '+' },
              { value: 120, label: 'Active Partners', suffix: '+' },
              { value: totalFeatures, label: 'Features', suffix: '+' },
              { value: 5000, label: 'Bookings', suffix: '+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </SlideIn>
      </div>
    </section>
  );
}