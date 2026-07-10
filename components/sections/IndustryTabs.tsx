// components/sections/IndustryTabs.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { industries, industryCategories } from '@/data/industries';
import { cn } from '@/lib/utils';
import { SlideIn } from '@/components/animations/SlideIn';
import { IndustryCard } from '@/components/cards/IndustryCard';

export function IndustryTabs() {
  const [activeCategory, setActiveCategory] = useState(industryCategories[0].id);

  const activeIndustries = industryCategories.find(
    (cat) => cat.id === activeCategory
  )?.industries || [];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SlideIn>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Industries
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Tailored solutions for your industry
            </h2>
          </div>
        </SlideIn>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {industryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-all',
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400'
              )}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Industries Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {activeIndustries.map((industry, index) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}