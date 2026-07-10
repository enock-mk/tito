// components/carousel/IndustryCarousel.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { DeviceCarousel } from './DeviceCarousel';
import { showcaseIndustries } from '@/data/showcase';

interface IndustryCarouselProps {
  className?: string;
}

export function IndustryCarousel({ className }: IndustryCarouselProps) {
  const [activeIndustry, setActiveIndustry] = useState(showcaseIndustries[0]);

  return (
    <div className={cn('space-y-8', className)}>
      {/* Industry Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {showcaseIndustries.map((industry) => (
          <button
            key={industry.id}
            onClick={() => setActiveIndustry(industry)}
            className={cn(
              'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
              activeIndustry.id === industry.id
                ? 'bg-primary text-white shadow-lg'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400'
            )}
          >
            <span>{industry.icon}</span>
            {industry.name}
          </button>
        ))}
      </div>

      {/* Industry Description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndustry.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold">{activeIndustry.name}</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            {activeIndustry.dashboards.length} dashboard views
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Device Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndustry.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <DeviceCarousel dashboards={activeIndustry.dashboards} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}