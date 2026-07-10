// components/sections/CTAWithParticles.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Rocket, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParticleBackground } from '@/components/animations/ParticleBackground';
import { SlideIn } from '@/components/animations/SlideIn';

export function CTAWithParticles() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80">
        <ParticleBackground particleCount={80} color="255, 255, 255" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SlideIn>
          <div className="flex flex-col items-center text-center text-white">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mb-4 rounded-full bg-white/20 p-3 backdrop-blur-sm"
            >
              <Rocket className="h-8 w-8" />
            </motion.div>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Ready to launch your business
              <span className="block text-main-yellow-300">into the future?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Join 120+ businesses already using TiTO. Start your journey
              with a free trial today.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/partner">
                <Button
                  size="lg"
                  className="group bg-white text-primary hover:bg-white/90"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                24/7 support
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}