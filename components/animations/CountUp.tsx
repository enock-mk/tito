// components/animations/CountUp.tsx
'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (end - startValue) * eased);

      if (ref.current) {
        ref.current.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  }, [isInView, end, duration, prefix, suffix]);

  return <span ref={ref} className={className}>0</span>;
}