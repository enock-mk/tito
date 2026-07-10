// components/sections/SolutionsSection.tsx
'use client';

import { solutions } from '@/data/solutions';
import { SolutionCard } from '@/components/cards/SolutionCard';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';

export function SolutionsSection() {
  // Get featured solutions (first 6)
  const featuredSolutions = solutions.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-neutral-50/50 dark:from-neutral-950 dark:to-neutral-900/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SlideIn>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Solutions
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              TiTO solutions for{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                every ticketed business
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Deploy one platform across transport, hospitality, events, fundraising, and fleet operations.
            </p>
          </div>
        </SlideIn>

        {/* Solutions Grid */}
        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredSolutions.map((solution, index) => (
            <SolutionCard 
              key={solution.id} 
              solution={solution} 
              index={index}
            />
          ))}
        </StaggerContainer>

        {/* CTA */}
        <SlideIn delay={0.3}>
          <div className="mt-12 text-center">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/solutions">
                <Button size="lg" className="group">
                  Browse all solutions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="group">
                  <Rocket className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Book a demo
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
              Join 120+ businesses already using TiTO
            </p>
          </div>
        </SlideIn>

        {/* Decorative Elements */}
        <div className="relative mt-16">
          <div className="absolute left-1/4 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute right-1/4 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>
      </div>
    </section>
  );
}