// components/timeline/Timeline.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { WorkflowStep } from '@/data/workflow';
import { TimelineItem } from './TimelineItem';
import { TimelineConnector } from './TimelineConnector';

interface TimelineProps {
  steps: WorkflowStep[];
  className?: string;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
}

export function Timeline({
  steps,
  className,
  autoPlay = true,
  autoPlaySpeed = 3000,
}: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-play the timeline
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, autoPlaySpeed);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlaySpeed, steps.length]);

  // Handle scroll to activate steps
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const center = window.innerHeight / 2;

      // Find which step is closest to center
      let closestIndex = 0;
      let closestDistance = Infinity;

      const items = containerRef.current.querySelectorAll('[data-timeline-item]');
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - center);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={cn('relative py-8', className)}>
      {/* Vertical Line (Background) */}
      <div className="absolute left-7 top-0 h-full w-0.5 bg-neutral-200 dark:bg-neutral-700 md:left-1/2 md:-ml-0.5" />

      <div className="space-y-0">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          const isLast = index === steps.length - 1;

          return (
            <div
              key={step.id}
              data-timeline-item
              className={cn(
                'relative transition-all duration-500',
                isActive ? 'opacity-100' : 'opacity-60'
              )}
            >
              <div
                className={cn(
                  'flex flex-col gap-4 md:flex-row',
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                )}
              >
                {/* Timeline Item */}
                <TimelineItem
                  step={step}
                  index={index}
                  isActive={isActive}
                  isLast={isLast}
                  className="flex-1"
                />
              </div>

              {/* Connector */}
              {!isLast && (
                <div
                  className={cn(
                    'ml-7 md:absolute md:left-1/2 md:ml-0',
                    index % 2 === 0 ? 'md:-translate-x-4' : 'md:translate-x-4'
                  )}
                >
                  <TimelineConnector
                    isActive={isActive}
                    isLast={isLast}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress Indicator */}
      <div className="mt-8 flex justify-center gap-2">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              index === activeIndex
                ? 'w-8 bg-primary'
                : 'w-2 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700'
            )}
          />
        ))}
      </div>
    </div>
  );
}