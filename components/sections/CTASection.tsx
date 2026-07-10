// components/sections/CTASection.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Rocket, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SlideIn } from '@/components/animations/SlideIn';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  variant?: 'default' | 'simple' | 'gradient' | 'with-image';
  className?: string;
}

export function CTASection({ variant = 'default', className }: CTASectionProps) {
  const renderCTA = () => {
    switch (variant) {
      case 'default':
        return <DefaultCTA />;
      case 'simple':
        return <SimpleCTA />;
      case 'gradient':
        return <GradientCTA />;
      case 'with-image':
        return <CTAWithImage />;
      default:
        return <DefaultCTA />;
    }
  };

  return <div className={cn(className)}>{renderCTA()}</div>;
}

// Default CTA
function DefaultCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SlideIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 text-white shadow-2xl md:p-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" viewBox="0 0 100 100">
                <pattern
                  id="cta-grid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
                <rect width="100" height="100" fill="url(#cta-grid)" />
              </svg>
            </div>

            {/* Floating Icons */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute right-8 top-8 hidden opacity-20 md:block"
            >
              <Rocket className="h-16 w-16" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute bottom-8 left-8 hidden opacity-20 md:block"
            >
              <Sparkles className="h-12 w-12" />
            </motion.div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-medium backdrop-blur-sm">
                  <Zap className="h-4 w-4" />
                  Get started today
                </span>

                <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  Ready to digitize your business?
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
                  Join 120+ businesses already using TiTO to manage their
                  operations. Start your journey today.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link href="/partner">
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90"
                    >
                      Become a Partner
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>

                  <Link href="/demo">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/20"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Request Demo
                    </Button>
                  </Link>
                </div>

                <p className="mt-6 text-sm text-white/70">
                  No credit card required · Free trial available
                </p>
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}

// Simple CTA
function SimpleCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SlideIn>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Join 120+ businesses already using TiTO. Start your journey today.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/partner">
                <Button size="lg" className="group">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}

// Gradient CTA
function GradientCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SlideIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-purple-600 p-8 text-white shadow-2xl md:p-16">
            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Start your <span className="text-main-yellow-300">free trial</span> today
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
                No credit card required. Cancel anytime.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/partner">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/20"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
          </div>
        </SlideIn>
      </div>
    </section>
  );
}

// CTA with Image
function CTAWithImage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SlideIn>
          <div className="grid grid-cols-1 gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-2xl md:grid-cols-2">
            {/* Content */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                Limited time offer
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to transform your business?
              </h2>

              <p className="mt-4 text-lg text-white/90">
                Join thousands of businesses that have already made the switch.
                Get started with TiTO today.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/partner">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Become a Partner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/20"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <span>Free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-l from-primary/50 to-transparent" />
              <div className="flex h-full items-center justify-center p-8">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="h-48 w-64 rounded-lg bg-white/20" />
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/20" />
                    <div>
                      <div className="h-3 w-24 rounded bg-white/20" />
                      <div className="mt-1 h-2 w-16 rounded bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}