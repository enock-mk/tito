// components/sections/PlatformOverview.tsx
'use client';

import { platformFeatures, platformStats } from '@/data/platform';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';
import { CountUp } from '@/components/animations/CountUp';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function PlatformOverview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SlideIn>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Platform Features
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Everything you need to{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                grow your business
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              From bookings to payments, analytics to customer management — 
              TiTO provides all the tools you need to succeed.
            </p>
          </div>
        </SlideIn>

        {/* Stats */}
        <SlideIn delay={0.2}>
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50 md:grid-cols-4 md:p-8">
            {platformStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="text-2xl font-bold text-primary md:text-3xl">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </SlideIn>

        {/* Feature Grid */}
        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platformFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </StaggerContainer>

        {/* CTA */}
        <SlideIn delay={0.4}>
          <div className="mt-12 text-center">
            <Link href="/platform/features">
              <Button size="lg" className="group">
                Explore all features
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}