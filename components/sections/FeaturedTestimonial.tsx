// components/sections/FeaturedTestimonial.tsx
'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';
import cn from 'classnames';


interface FeaturedTestimonialProps {
  testimonial: Testimonial;
  className?: string;
}

export function FeaturedTestimonial({
  testimonial,
  className,
}: FeaturedTestimonialProps) {
  const Icon = testimonial.industryIcon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-white shadow-xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100">
            <pattern
              id="grid"
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
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <Quote className="relative h-8 w-8 opacity-50" />

        <blockquote className="relative mt-4 text-xl font-medium leading-relaxed">
          `&quo;`{testimonial.content}`&quo;`
        </blockquote>

        <div className="relative mt-6 flex items-center gap-4">
          <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-white/20">
            {testimonial.avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-white/20 text-2xl font-bold">
                {testimonial.name.charAt(0)}
              </div>
            )}
          </div>

          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-white/80">
              {testimonial.role} · {testimonial.company}
            </p>
            <div className="mt-1 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'h-3 w-3',
                      i < testimonial.rating
                        ? 'fill-main-yellow-500 text-main-yellow-500'
                        : 'text-white/30'
                    )}
                  />
                ))}
              </div>
              <span className="text-xs text-white/80">
                {testimonial.industry}
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        {testimonial.stats && (
          <div className="relative mt-6 flex items-center gap-4 border-t border-white/20 pt-4">
            <div>
              <p className="text-2xl font-bold">{testimonial.stats.value}</p>
              <p className="text-sm text-white/80">{testimonial.stats.label}</p>
            </div>
          </div>
        )}

        {/* Floating Icon */}
        <div className="absolute -right-4 -top-4 rounded-full bg-white/10 p-3 backdrop-blur-sm">
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </motion.div>
  );
}