// components/sections/WorkflowHorizontal.tsx
'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { workflowSteps } from '@/data/workflow';
import { ChevronRight } from 'lucide-react';
import { SlideIn } from '@/components/animations/SlideIn';

export function WorkflowHorizontal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <section ref={containerRef} className="relative h-[300vh] py-16 md:py-24">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Workflow
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Your journey with{' '}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  TiTO
                </span>
              </h2>
            </div>
          </SlideIn>

          <motion.div
            style={{ x }}
            className="mt-12 flex gap-8"
          >
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  className="min-w-[300px] max-w-[400px] flex-1 rounded-2xl bg-white p-8 shadow-lg dark:bg-neutral-900"
                  whileHover={{ y: -8 }}
                >
                  <div
                    className={`
                      flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg
                      ${step.gradient}
                    `}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {step.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                    <span>{step.stats}</span>
                    {index < workflowSteps.length - 1 && (
                      <ChevronRight className="h-4 w-4 text-neutral-300" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}