// components/timeline/TimelineItem.tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check, ArrowRight } from 'lucide-react';
import { WorkflowStep } from '@/data/workflow';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface TimelineItemProps {
  step: WorkflowStep;
  index: number;
  isActive: boolean;
  isLast: boolean;
  className?: string;
}

export function TimelineItem({
  step,
  index,
  isActive,
  isLast,
  className,
}: TimelineItemProps) {
  const Icon = step.icon;

  return (
    <ScrollReveal
      delay={index * 0.1}
      direction="left"
      className={cn('flex gap-6', className)}
    >
      {/* Timeline Icon */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            'relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-all duration-300',
            step.gradient,
            isActive ? 'scale-110 shadow-xl' : 'scale-100'
          )}
        >
          <Icon className="h-6 w-6" />
          
          {/* Number Badge */}
          <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-neutral-900 shadow-md dark:bg-neutral-900 dark:text-white">
            {index + 1}
          </div>

          {/* Active Pulse */}
          {isActive && (
            <div className="absolute inset-0 -z-10 animate-pulse rounded-2xl bg-primary/20" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
          {isActive && (
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              <Check className="h-3 w-3" />
              Active
            </span>
          )}
          {step.stats && (
            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
              {step.stats}
            </span>
          )}
        </div>

        <p className="mt-1 text-neutral-600 dark:text-neutral-400">
          {step.description}
        </p>

        {/* Details */}
        {step.details && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isActive ? 'auto' : 0,
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="mt-3 space-y-1.5 overflow-hidden"
          >
            {step.details.map((detail) => (
              <li
                key={detail}
                className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                {detail}
              </li>
            ))}
          </motion.ul>
        )}

        {/* Connector */}
        {!isLast && (
          <div className="mt-4">
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <span>Next step</span>
              <ArrowRight className="h-3 w-3" />
            </div>
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}