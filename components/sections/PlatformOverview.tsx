// components/sections/PlatformOverview.tsx
'use client';

import { platformFeatures, platformStats } from '@/data/platform';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';
import { CountUp } from '@/components/animations/CountUp';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';

export function PlatformOverview() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-neutral-50/50 dark:from-neutral-950 dark:to-neutral-900/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SlideIn>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Platform Features
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
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
        <SlideIn delay={0.15}>
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border bg-white/80 p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/80 md:grid-cols-4 md:p-8">
            {platformStats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative text-center"
              >
                <div className="text-2xl font-bold text-primary md:text-3xl transition-all duration-300 group-hover:scale-110">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </p>
                {/* Decorative line */}
                {index < platformStats.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-8 w-px -translate-y-1/2 bg-neutral-200 dark:bg-neutral-700 md:block" />
                )}
              </div>
            ))}
          </div>
        </SlideIn>

        {/* Feature Grid */}
        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platformFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </StaggerContainer>

        {/* CTA with Gradient Background */}
        <SlideIn delay={0.3}>
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-transparent p-8 text-center dark:from-primary/10 dark:via-primary/5">
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:text-left">
              <div>
                <h3 className="text-xl font-bold">Ready to get started?</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Explore all features and see how TiTO can transform your business.
                </p>
              </div>
              <Link href="/platform/features">
                <Button size="lg" className="group shrink-0">
                  Explore all features
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </SlideIn>

        {/* Floating decorative elements */}
        <div className="relative mt-16">
          <div className="absolute left-0 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute right-0 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>
      </div>
    </section>
  );
}