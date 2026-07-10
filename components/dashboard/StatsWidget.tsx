// components/dashboard/StatsWidget.tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown, LucideIcon } from 'lucide-react';

interface StatsWidgetProps {
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  className?: string;
  index?: number;
}

export function StatsWidget({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  color,
  gradient,
  className,
  index = 0,
}: StatsWidgetProps) {
  const isPositive = change > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'group relative rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900',
        className
      )}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div
        className={cn(
          'inline-flex rounded-xl bg-gradient-to-br p-3 text-white shadow-lg transition-all duration-300 group-hover:scale-110',
          gradient
        )}
      >
        <Icon className="h-6 w-6" />
      </div>

      {/* Value */}
      <div className="mt-4">
        <p className="text-2xl font-bold tracking-tight">{value}</p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{title}</p>
      </div>

      {/* Change */}
      <div className="mt-3 flex items-center gap-2">
        <span
          className={cn(
            'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium',
            isPositive
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
          )}
        >
          {isPositive ? (
            <ArrowUp className="h-3 w-3" />
          ) : (
            <ArrowDown className="h-3 w-3" />
          )}
          {Math.abs(change)}%
        </span>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          {changeLabel}
        </span>
      </div>

      {/* Hover Glow */}
      <div
        className={cn(
          'absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20',
          gradient
        )}
      />
    </motion.div>
  );
}