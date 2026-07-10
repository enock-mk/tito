// components/sections/TestimonialsGrid.tsx
'use client';

import { testimonials } from '@/data/testimonials';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';

export function TestimonialsGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SlideIn>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              What our partners say
            </h2>
          </div>
        </SlideIn>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}