// components/sections/Workflow.tsx
'use client';

import { workflowSteps } from '@/data/workflow';
import { Timeline } from '@/components/timeline/Timeline';
import { SlideIn } from '@/components/animations/SlideIn';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export function Workflow() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SlideIn>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Platform Workflow
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              How TiTO{' '}
              <span className="h-highlight">
                works for you
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              From sign-up to success — follow the journey of businesses
              using TiTO to manage their operations.
            </p>
          </div>
        </SlideIn>

        {/* Timeline */}
        <ScrollReveal delay={0.2} className="mt-12">
          <Timeline steps={workflowSteps} autoPlay autoPlaySpeed={4000} />
        </ScrollReveal>

        {/* CTA */}
        <SlideIn delay={0.5}>
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/partner">
                <Button size="lg" className="group">
                  Start your journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="group">
                  <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Watch a demo
                </Button>
              </Link>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}