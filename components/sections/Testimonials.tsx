// components/sections/Testimonials.tsx
'use client';

import { testimonials, testimonialStats } from '@/data/testimonials';
import { TestimonialCarousel } from '@/components/carousel/TestimonialCarousel';
import { SlideIn } from '@/components/animations/SlideIn';
import { CountUp } from '@/components/animations/CountUp';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50/50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SlideIn>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              What our{' '}
              <span className="h-highlight">
                partners say
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Hear from businesses and organizations that have transformed
              their operations with TiTO.
            </p>
          </div>
        </SlideIn>

        {/* Stats */}
        <SlideIn delay={0.2}>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {testimonialStats.map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-xl border bg-white p-4 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="text-2xl font-bold text-primary">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </SlideIn>

        {/* Testimonials Carousel */}
        <div className="mt-12">
          <TestimonialCarousel
            testimonials={testimonials}
            variant="default"
            autoplay
            autoplaySpeed={5000}
          />
        </div>

        {/* CTA */}
        <SlideIn delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Join 120+ businesses already using TiTO
            </p>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}