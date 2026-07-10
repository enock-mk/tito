// components/hero/HeroContent.tsx
'use client';

import { SlideUp } from '@/components/animations/SlideUp';
import { HeroButtons } from './HeroButtons';
import { HeroStats } from './HeroStats';

interface HeroContentProps {
  className?: string;
}

export function HeroContent({ className }: HeroContentProps) {
  return (
    <div className={className}>
      <SlideUp>
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Book. Ride. Stay.
        </h1>
      </SlideUp>

      <SlideUp delay={0.05}>
        <p className="mt-4 text-xl font-semibold bg-gradient-to-r from-main-yellow-600 to-main-yellow-700 bg-clip-text text-transparent">
          Modern Booking & Management Software for Travel, Hospitality, Events and Mobility.
        </p>
      </SlideUp>

      <SlideUp delay={0.1}>
        <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
          One platform that helps businesses manage bookings, customers, payments and operations while giving customers a seamless booking experience.
        </p>
      </SlideUp>

      <HeroButtons className="mt-8" />
      <HeroStats className="mt-8" />
    </div>
  );
}