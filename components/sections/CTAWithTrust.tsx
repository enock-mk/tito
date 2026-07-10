// components/sections/CTAWithTrust.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SlideIn } from '@/components/animations/SlideIn';

export function CTAWithTrust() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SlideIn>
          <div className="rounded-3xl border bg-white p-8 shadow-lg dark:border-neutral-800 dark:bg-neutral-900 md:p-16">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Start your journey with{' '}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  TiTO
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                Join 120+ businesses already using TiTO. Get started with a free
                trial and see the difference.
              </p>

              {/* Trust Indicators */}
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: Shield, label: 'Secure Payments' },
                  { icon: Clock, label: '24/7 Support' },
                  { icon: Users, label: '120+ Partners' },
                  { icon: CheckCircle, label: 'Easy Setup' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center rounded-lg bg-neutral-50 p-3 dark:bg-neutral-800"
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                    <p className="mt-1 text-xs font-medium">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/partner">
                  <Button size="lg" className="group bg-primary hover:bg-primary/90">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline">
                    Book a Demo
                  </Button>
                </Link>
              </div>

              <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                No credit card required · Cancel anytime
              </p>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}