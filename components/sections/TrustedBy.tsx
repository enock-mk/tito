// components/sections/TrustedBy.tsx
'use client';

import { partners } from '@/data/partners';
import { InfiniteLogoCarousel } from '@/components/carousel/InfiniteLogoCarousel';
import { SlideIn } from '@/components/animations/SlideIn';

export function TrustedBy() {
  return (
    <section className="border-y bg-neutral-50/50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4 py-12">
        <SlideIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Trusted by businesses worldwide
            </p>
          </div>
        </SlideIn>

        <SlideIn delay={0.2}>
          <div className="mt-6">
            <InfiniteLogoCarousel
              partners={partners}
              speed={35}
              direction="left"
              pauseOnHover
            />
          </div>
        </SlideIn>

        {/*<SlideIn delay={0.4}>
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Join 120+ partners and 5000+ businesses using TiTO
            </p>
          </div>
        </SlideIn> */}
      </div>
    </section>
  );
}