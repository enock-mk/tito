// components/showcase/PhoneMockup.tsx
'use client';

import { ReactNode, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PhoneMockupProps {
  children?: ReactNode;
  className?: string;
  showStatusBar?: boolean;
  showHomeIndicator?: boolean;
  showNotch?: boolean;
  variant?: 'light' | 'dark';
  animated?: boolean;
  delay?: number;
}

export function PhoneMockup({
  children,
  className,
  showStatusBar = true,
  showHomeIndicator = true,
  showNotch = true,
  variant = 'dark',
  animated = true,
  delay = 0,
}: PhoneMockupProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = variant === 'dark';
  const bgColor = isDark ? '#111' : '#f5f5f5';
  const borderColor = isDark ? '#2a2a2a' : '#e0e0e0';
  const textColor = isDark ? 'text-white' : 'text-black';

  return (
    <motion.div
      initial={animated ? { opacity: 0, y: 20 } : false}
      animate={animated ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.7, delay }}
      className={cn('relative', className)}
    >
      {/* Glow Effects */}
      <div className="absolute -inset-8 bg-primary/15 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -inset-4 bg-primary/30 opacity-20 rounded-full blur-2xl" />

      {/* Floating Container */}
      <div className="relative animate-float">
        {/* Phone Body */}
        <div
          className={cn(
            'relative rounded-[3.5rem] border-[6px] shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden',
            isDark ? 'bg-[#111] border-[#2a2a2a]' : 'bg-[#f5f5f5] border-[#e0e0e0]'
          )}
          style={{ width: '300px' }}
        >
          {/* Notch */}
          {showNotch && (
            <div className={cn(
              'absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 rounded-b-2xl z-10 flex items-center justify-center gap-2',
              isDark ? 'bg-[#111]' : 'bg-[#f5f5f5]'
            )}>
              <div className={cn('w-2 h-2 rounded-full', isDark ? 'bg-[#333]' : 'bg-[#ccc]')} />
              <div className={cn('w-3 h-3 rounded-full border', isDark ? 'bg-[#222] border-[#333]' : 'bg-[#e8e8e8] border-[#ccc]')} />
            </div>
          )}

          {/* Status Bar */}
          {showStatusBar && (
            <div className={cn(
              'pt-9 pb-2 px-5 flex items-center justify-between',
              isDark ? 'bg-[#0A1A35]' : 'bg-[#f0f0f0]'
            )}>
              <span className={cn('text-xs font-bold', isDark ? 'text-white' : 'text-black')}>9:30</span>
              <div className="flex items-center gap-1.5">
                {/* Signal Bars */}
                <div className="flex gap-0.5 items-end h-3">
                  {[2, 3, 4, 5].map((h, i) => (
                    <div
                      key={i}
                      className={cn('w-1 rounded-sm', isDark ? 'bg-white' : 'bg-black')}
                      style={{ height: `${h * 3}px`, opacity: i < 3 ? 1 : 0.3 }}
                    />
                  ))}
                </div>
                <span className={cn('text-[10px] font-semibold', isDark ? 'text-white' : 'text-black')}>LTE</span>
                {/* Battery Icon */}
                <div className={cn('w-5 h-2.5 border rounded-sm relative', isDark ? 'border-white/60' : 'border-black/60')}>
                  <div className={cn('absolute inset-0.5 right-1 rounded-sm', isDark ? 'bg-white' : 'bg-black')} />
                  <div className={cn('absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0.5 h-1.5 rounded-r-sm', isDark ? 'bg-white/60' : 'bg-black/60')} />
                </div>
              </div>
            </div>
          )}

          {/* Content */}
          <div className={cn(
            'relative',
            isDark ? 'bg-[#0A1A35]' : 'bg-[#fafafa]'
          )}>
            {children}
          </div>

          {/* Home Indicator */}
          {showHomeIndicator && (
            <div className={cn(
              'pb-2 flex justify-center',
              isDark ? 'bg-[#081828]' : 'bg-[#f5f5f5]'
            )}>
              <div className={cn('w-24 h-1 rounded-full', isDark ? 'bg-white/20' : 'bg-black/20')} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

{/*
    // Example: Using the PhoneMockup in a hero section
import { PhoneMockup } from '@/components/showcase/PhoneMockup';
import { MobileAppContent } from '@/components/showcase/MobileAppContent';
import { MobileBottomNav } from '@/components/showcase/MobileBottomNav';

export function HeroWithPhone() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#0A1A35] to-[#081828]">
      <PhoneMockup animated delay={0.3}>
        <MobileAppContent variant="dark" />
        <MobileBottomNav variant="dark" />
      </PhoneMockup>
    </div>
  );
}
    */}