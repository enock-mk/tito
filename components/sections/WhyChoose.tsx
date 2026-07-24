// components/sections/WhyChoose.tsx
'use client';

import { benefits, benefitCategories } from '@/data/benefits';
import { BenefitCard } from '@/components/cards/BenefitCard';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function WhyChoose() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SlideIn>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Why TiTO
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              TiTO simplifies your <span className="h-highlight">
                business operations
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              TiTO simplifies business operations through integrated booking, ticketing, reservations and management tools. Whether you operate hotels, transport services, events or vehicle rentals, TiTO helps you digitize and grow.
            </p>
          </div>
        </SlideIn>

        {/* Key Selling Points */}
        {/*<SlideIn delay={0.2}>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Fast Setup', value: '5 minutes' },
              { label: 'Customer Satisfaction', value: '98%' },
              { label: 'Platform Uptime', value: '99.9%' },
              { label: 'Active Partners', value: '120+' },
            ].map((point, index) => (
              <div
                key={point.label}
                className="flex items-center gap-3 rounded-xl border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <CheckCircle className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">{point.value}</p>
                  <p className="text-sm text-neutral-500">{point.label}</p>
                </div>
              </div>
            ))}
          </div>
        </SlideIn> */}

        {/* Benefits Grid */}
        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.id}
              benefit={benefit}
              index={index}
            />
          ))}
        </StaggerContainer>

        {/* Category Showcase (Optional) */}
        <SlideIn delay={0.4}>
          <div className="mt-16 rounded-2xl border bg-gradient-to-br from-primary/5 via-transparent to-transparent p-8 dark:border-neutral-800">
            <h3 className="text-center text-2xl font-bold">
              Built for every aspect of your business
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {benefitCategories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-xl bg-white p-6 shadow-sm dark:bg-neutral-900"
                >
                  <h4 className="font-semibold">{category.title}</h4>
                  <ul className="mt-3 space-y-2">
                    {category.benefits.map((benefit) => (
                      <li
                        key={benefit.id}
                        className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {benefit.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SlideIn>

        {/* CTA */}
        <SlideIn delay={0.5}>
          <div className="mt-12 text-center">
            <Link href="/platform">
              <Button size="lg" className="group">
                Explore the platform
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}