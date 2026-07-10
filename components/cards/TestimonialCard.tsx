// components/cards/TestimonialCard.tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  variant?: 'default' | 'featured' | 'compact';
  index?: number;
}

export function TestimonialCard({
  testimonial,
  className,
  variant = 'default',
  index = 0,
}: TestimonialCardProps) {
  const Icon = testimonial.industryIcon;

  const variants = {
    default: {
      padding: 'p-6',
      avatarSize: 'h-12 w-12',
      fontSize: 'text-base',
    },
    featured: {
      padding: 'p-8',
      avatarSize: 'h-16 w-16',
      fontSize: 'text-lg',
    },
    compact: {
      padding: 'p-4',
      avatarSize: 'h-10 w-10',
      fontSize: 'text-sm',
    },
  };

  const currentVariant = variants[variant];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 },
        },
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className={cn(
        'group relative rounded-2xl border bg-white transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900',
        currentVariant.padding,
        className
      )}
    >
      {/* Quote Icon */}
      <Quote className="absolute right-4 top-4 h-8 w-8 text-neutral-200 opacity-50 dark:text-neutral-700" />

      {/* Rating */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              'h-4 w-4',
              i < testimonial.rating
                ? 'fill-main-yellow-500 text-main-yellow-500'
                : 'text-neutral-300 dark:text-neutral-600'
            )}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className={cn(
        'mt-3 leading-relaxed text-neutral-700 dark:text-neutral-300',
        currentVariant.fontSize
      )}>
        `&quot;`{testimonial.content}`&quot;`
      </blockquote>

      {/* Author */}
      <div className="mt-4 flex items-center gap-3">
        {/* Avatar */}
        <div className={cn(
          'relative shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-primary/10',
          currentVariant.avatarSize
        )}>
          {testimonial.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary">
              {testimonial.name.charAt(0)}
            </div>
          )}
        </div>

        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-neutral-500">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>

      {/* Industry Badge */}
      <div className="mt-3 flex items-center gap-2">
        <div className="flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
          <Icon className="h-3 w-3" />
          {testimonial.industry}
        </div>
        {testimonial.stats && (
          <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
            {testimonial.stats.label}: {testimonial.stats.value}
          </div>
        )}
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 -z-10 rounded-2xl border-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />
    </motion.div>
  );
}