// components/hero/HeroButtons.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

interface HeroButtonsProps {
  className?: string;
}

export function HeroButtons({ className }: HeroButtonsProps) {
  return (
    <FadeIn delay={0.3}>
      <div className={className}>
        <div className="flex flex-wrap gap-4">
          <Link href="/partner">
            <Button size="lg" className="group bg-primary hover:bg-primary/90">
              Become a Partner
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <Link href="/demo">
            <Button size="lg" variant="outline" className="group">
              <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Book a Demo
            </Button>
          </Link>

          <Link href="/solutions">
            <Button size="lg" variant="ghost">
              Explore Solutions
            </Button>
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}