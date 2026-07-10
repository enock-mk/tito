// components/hero/Hero.tsx
'use client';

import { Container } from '@/components/layout/container';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section className={className}>
      <Container>
        <div className="grid grid-cols-1 gap-12 py-8 md:py-16 lg:grid-cols-2 lg:gap-16">
          <HeroContent className="flex flex-col justify-center" />
          <HeroImage className="flex items-center justify-center" />
        </div>
      </Container>
    </section>
  );
}