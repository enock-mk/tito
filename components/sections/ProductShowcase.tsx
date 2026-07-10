// components/sections/ProductShowcase.tsx
'use client';

import { IndustryCarousel } from '@/components/carousel/IndustryCarousel';
import { SlideIn } from '@/components/animations/SlideIn';
import { SlideReveal } from '@/components/animations/SlideReveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Monitor, Smartphone, Tablet } from 'lucide-react';

export function ProductShowcase() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50/50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SlideIn>
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Product Showcase
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              See TiTO in{' '}
              <span className="h-highlight">
                action
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Explore real product screenshots across different devices and
              industries. See how TiTO transforms business operations.
            </p>
          </div>
        </SlideIn>

        {/* Device Icons */}
        <SlideIn delay={0.2}>
          <div className="mt-8 flex justify-center gap-8">
            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <Monitor className="h-4 w-4" />
              <span>Desktop</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <Tablet className="h-4 w-4" />
              <span>Tablet</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <Smartphone className="h-4 w-4" />
              <span>Mobile</span>
            </div>
          </div>
        </SlideIn>

        {/* Industry Carousel */}
        <SlideReveal delay={0.3}>
          <div className="mt-8">
            <IndustryCarousel />
          </div>
        </SlideReveal>

        {/* CTA */}
        <SlideIn delay={0.5}>
          <div className="mt-12 text-center">
            <Link href="/demo">
              <Button size="lg" className="group">
                Request a live demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}