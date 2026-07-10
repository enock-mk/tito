// components/sections/Industries.tsx
'use client';

import { industries } from '@/data/industries';
import { IndustryCard } from '@/components/cards/IndustryCard';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Building2, Bus, Calendar, Heart } from 'lucide-react';

export function Industries() {
  // Group industries by category for display
  const featuredIndustries = industries.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-neutral-50/50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SlideIn>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Industries We Serve
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Solutions for{' '}
              <span className="h-highlight">
                every industry
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              From hospitality to transportation, events to fundraising — 
              TiTO provides tailored solutions for your industry.
            </p>
          </div>
        </SlideIn>

        {/* Industry Grid */}
        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredIndustries.map((industry, index) => (
            <IndustryCard
              key={industry.id}
              industry={industry}
              index={index}
            />
          ))}
        </StaggerContainer>

        {/* Category Showcase */}
        <SlideIn delay={0.3}>
          <div className="mt-16">
            <h3 className="text-center text-2xl font-bold">
              Trusted by businesses across sectors
            </h3>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { icon: Building2, label: 'Hospitality', count: '120+' },
                { icon: Bus, label: 'Transport', count: '80+' },
                { icon: Calendar, label: 'Events', count: '200+' },
                { icon: Heart, label: 'Non-Profit', count: '50+' },
              ].map((category) => (
                <div
                  key={category.label}
                  className="rounded-xl border bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <category.icon className="mx-auto h-8 w-8 text-primary" />
                  <p className="mt-2 font-semibold">{category.label}</p>
                  <p className="text-sm text-neutral-500">{category.count}</p>
                </div>
              ))}
            </div>
          </div>
        </SlideIn>

        {/* CTA */}
        <SlideIn delay={0.5}>
          <div className="mt-12 text-center">
            <Link href="/industries">
              <Button size="lg" className="group">
                View all industries
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}