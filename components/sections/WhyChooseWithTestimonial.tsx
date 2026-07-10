// components/sections/WhyChooseWithTestimonial.tsx
'use client';

import { benefits } from '@/data/benefits';
import { BenefitCard } from '@/components/cards/BenefitCard';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';
import { Quote } from 'lucide-react';

export function WhyChooseWithTestimonial() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <SlideIn>
              <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Why TiTO
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Built for businesses that{' '}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  want to grow
                </span>
              </h2>
            </SlideIn>

            <StaggerContainer className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.slice(0, 4).map((benefit, index) => (
                <BenefitCard
                  key={benefit.id}
                  benefit={benefit}
                  index={index}
                  variant="compact"
                />
              ))}
            </StaggerContainer>
          </div>

          {/* Testimonial Sidebar */}
          <SlideIn delay={0.3}>
            <div className="relative rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-white">
              <Quote className="h-8 w-8 opacity-50" />
              <blockquote className="mt-4 text-lg font-medium leading-relaxed">
                `&quo;`TiTO has transformed how we manage our bookings. Our efficiency
                has increased by 40% and customer satisfaction is at an all-time high.`&quo;`
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white/20" />
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-white/80">CEO, Hotel Grande</p>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}