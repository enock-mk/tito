// components/sections/PlatformTabs.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { platformFeatures } from '@/data/platform';
import { cn } from '@/lib/utils';
import { SlideIn } from '@/components/animations/SlideIn';

export function PlatformTabs() {
  const [activeTab, setActiveTab] = useState(platformFeatures[0].id);

  const activeFeature = platformFeatures.find(f => f.id === activeTab)!;
  const Icon = activeFeature.icon;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SlideIn>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Platform Features
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Explore TiTO`&apos;`s capabilities
            </h2>
          </div>
        </SlideIn>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Tabs */}
          <div className="lg:col-span-1">
            <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-x-visible">
              {platformFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all',
                    'hover:bg-neutral-100 dark:hover:bg-neutral-800',
                    activeTab === feature.id
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'text-neutral-600 dark:text-neutral-400'
                  )}
                >
                  <feature.icon className="h-4 w-4" />
                  <span className="whitespace-nowrap">{feature.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      'rounded-xl bg-gradient-to-br p-4 text-white shadow-lg',
                      activeFeature.gradient
                    )}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{activeFeature.title}</h3>
                    <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
                      {activeFeature.description}
                    </p>
                    {activeFeature.stats && (
                      <div className="mt-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                        {activeFeature.stats}
                      </div>
                    )}
                  </div>
                </div>

                {/* Demo Preview */}
                <div className="mt-8 rounded-lg bg-neutral-50 p-6 dark:bg-neutral-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Live Preview</span>
                    <span className="text-xs text-neutral-500">Interactive demo</span>
                  </div>
                  <div className="mt-4 h-32 rounded bg-white dark:bg-neutral-700" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}