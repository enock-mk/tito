// components/sections/Downloads.tsx
'use client';

import { SlideIn } from '@/components/animations/SlideIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Download, 
  Apple, 
  PlayCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Users,
  Store
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Downloads() {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Designed for customers on the go',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Tablet,
      title: 'Cross-Platform',
      description: 'Works seamlessly on all devices',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Monitor,
      title: 'Enterprise Ready',
      description: 'Manage bookings, users, and reporting',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const appFeatures = [
    'Book on the go',
    'Real-time updates',
    'Secure payments',
    'Offline mode',
    'Push notifications',
    'QR code scanning',
  ];

  return (
    <section id="download" className="py-16 md:py-24 bg-gradient-to-b from-neutral-50/50 to-white dark:from-neutral-950 dark:to-neutral-900/50">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <SlideIn>
              <Badge className="inline-flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20">
                <Sparkles className="h-3.5 w-3.5" />
                Download
              </Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Apps and dashboard built for{' '}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  every user
                </span>
              </h2>
              <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                Give customers easy access to bookings while your team manages operations from a one-stop dashboard.
              </p>
            </SlideIn>

            {/* Features Grid */}
            <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: index * 0.1 },
                      },
                    }}
                    className="group relative rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div
                      className={`inline-flex rounded-xl bg-gradient-to-br p-2.5 text-white shadow-lg transition-all duration-300 group-hover:scale-110 ${feature.color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </StaggerContainer>

            {/* Trust Indicators */}
            <SlideIn delay={0.3}>
              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>4.8⭐ App Store</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>4.7⭐ Google Play</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>50K+ downloads</span>
                </div>
              </div>
            </SlideIn>
          </div>

          {/* Right Column - App Cards */}
          <div className="space-y-6">
            <SlideIn delay={0.2}>
              <div className="rounded-2xl border bg-white p-8 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-white shadow-lg">
                    <Smartphone className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Customer App</h3>
                    <p className="text-sm text-neutral-500">Book tickets quickly from mobile</p>
                  </div>
                </div>

                {/* App Features */}
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {appFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 rounded-lg bg-neutral-50 p-2 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Download Buttons */}
                <div className="mt-6 space-y-3">
                  <Link href="#" className="block">
                    <Button className="w-full bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
                      <Image className='mr-2 h-4 w-4' src={'/icons/app-store.svg'} alt='apple' width={24} height={24}/>
                      App Store
                    </Button>
                  </Link>
                  <Link href="#" className="block">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Image className='mr-2 h-4 w-4' src={'/icons/google-play.svg'} alt='apple' width={24} height={24}/>
                      Google Play
                    </Button>
                  </Link>
                  <Link href="#" className="block">
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download APK
                    </Button>
                  </Link>
                </div>

                <p className="mt-4 text-center text-xs text-neutral-500">
                  Available for iOS 14+ and Android 8.0+
                </p>
              </div>
            </SlideIn>

            {/*
            {/* Dashboard Link }
            <SlideIn delay={0.3}>
              <Link
                href="/dashboard"
                className="group flex items-center justify-between rounded-2xl border bg-white p-4 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-primary/10 p-2 text-primary">
                    <Monitor className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Access Dashboard</p>
                    <p className="text-sm text-neutral-500">Manage your business from desktop</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-neutral-400 transition-transform group-hover:translate-x-1" />
              </Link>
            </SlideIn>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}