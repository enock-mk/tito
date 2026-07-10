// components/sections/CTAMinimal.tsx
'use client';

import Link from 'next/link';
import { ArrowRight, Users, Calendar, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SlideIn } from '@/components/animations/SlideIn';
import { CountUp } from '@/components/animations/CountUp';

export function CTAMinimal() {
  return (
    <section className="py-16 md:py-24 border-t border-b dark:border-neutral-800">
      <div className="container mx-auto px-4">
        <SlideIn>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to grow your business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Join thousands of businesses already using TiTO to manage their operations.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { icon: Users, value: 120, label: 'Partners', suffix: '+' },
                { icon: Calendar, value: 5000, label: 'Bookings', suffix: '+' },
                { icon: DollarSign, value: 40, label: 'Revenue Growth', suffix: '%' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <stat.icon className="mx-auto h-6 w-6 text-primary" />
                  <div className="mt-2 text-2xl font-bold text-primary">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/partner">
                <Button size="lg" className="group">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}