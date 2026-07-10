// components/showcase/PhoneMockup.tsx
'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  title?: string;
}

export function PhoneMockup({ src, alt, className, title }: PhoneMockupProps) {
  return (
    <div className={cn('relative mx-auto', className)}>
      <div className="relative rounded-2xl h-78 w-40 bg-neutral-900 p-1 shadow-2xl">
        
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-10 h-2 w-20 -translate-x-1/2 rounded-full bg-neutral-900" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-xl bg-white">
          <Image
            src={src}
            alt={alt}
            width={400}
            height={800}
            className="h-full w-full"
          />
          {title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-sm font-medium text-white">{title}</p>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="absolute -right-0 top-20 h-7 w-0.5 rounded-r-lg bg-neutral-700" />
        <div className="absolute -right-0 top-36 h-10 w-0.5 rounded-r-lg bg-neutral-700" />
        <div className="absolute -left-0 top-28 h-10 w-0.5 rounded-l-lg bg-neutral-700" />
      </div>
    </div>
  );
}