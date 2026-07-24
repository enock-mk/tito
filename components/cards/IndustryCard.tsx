// components/cards/IndustryCard.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight, Check } from 'lucide-react';
import { Industry } from '@/data/industries';
import { ParallaxCard } from '@/components/animations/ParallaxCard';

interface IndustryCardProps {
  industry: Industry;
  className?: string;
  index?: number;
  variant?: 'default' | 'large' | 'small';
}

export function IndustryCard({
  industry,
  className,
  index = 0,
  variant = 'default',
}: IndustryCardProps) {
  const Icon = industry.icon;

  const sizeClasses = {
    default: 'p-6',
    large: 'p-8',
    small: 'p-4',
  };

  const imageClasses = {
    default: 'h-40',
    large: 'h-56',
    small: 'h-32',
  };

  const iconSizes = {
    default: 'h-8 w-8',
    large: 'h-10 w-10',
    small: 'h-6 w-6',
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 },
        },
      }}
      className={cn('h-full', className)}
    >
      <ParallaxCard className="h-full" perspective={800} scale={1.03}>
        <Link
          href={industry.href}
          className="group relative block h-full overflow-hidden rounded-2xl border bg-white transition-shadow hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
        >
          {/* Image with Overlay */}
          <div className="relative overflow-hidden">
            <div
              className={cn(
                'relative w-full overflow-hidden bg-gradient-to-br',
                industry.gradient
              )}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <pattern
                    id={`grid-${industry.id}`}
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                  <rect width="100" height="100" fill={`url(#grid-${industry.id})`} />
                </svg>
              </div>

              {/* Content */}
              <div className={cn(
                'relative flex items-center gap-4',
                sizeClasses[variant]
              )}>
                <div className="rounded-xl bg-white/20 p-3 backdrop-blur-sm">
                  <Icon className={cn('text-white', iconSizes[variant])} />
                </div>
                <div className="flex-1">
                  <h3 className={cn(
                    'font-bold text-white',
                    variant === 'large' ? 'text-2xl' : 'text-xl'
                  )}>
                    {industry.title}
                  </h3>
                  {/*<p className="text-sm text-white/80">
                    {industry.stats}
                  </p> */}
                </div>
                <div className="rounded-full bg-white/20 p-2 text-white transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className={cn(
              'space-y-3',
              sizeClasses[variant]
            )}>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {industry.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {industry.features.slice(0, 3).map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                  >
                    <Check className="h-3 w-3 text-primary" />
                    {feature}
                  </span>
                ))}
                {industry.features.length > 3 && (
                  <span className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                    +{industry.features.length - 3} more
                  </span>
                )}
              </div>

              {/* Learn More Link */}
              <div className="pt-2">
                <span className="inline-flex items-center text-sm font-medium text-primary transition-all group-hover:gap-2">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div
            className={cn(
              'absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20',
              industry.gradient
            )}
          />
        </Link>
      </ParallaxCard>
    </motion.div>
  );
}