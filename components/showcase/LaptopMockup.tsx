// components/showcase/LaptopMockup.tsx
'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

interface LaptopMockupProps {
  src: string;
  alt: string;
  className?: string;
  title?: string;
}

export function LaptopMockup({ src, alt, className, title }: LaptopMockupProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Laptop Screen */}
      <div className="relative rounded-2xl bg-neutral-900 p-2 shadow-2xl">
        <div className="relative overflow-hidden rounded-lg bg-white">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={750}
            className="h-auto w-full"
          />
          {title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-sm font-medium text-white">{title}</p>
            </div>
          )}
        </div>
      </div>

      {/* Laptop Stand */}
      <div className="mx-auto mt-2 h-2 w-32 rounded-b-lg bg-neutral-300 dark:bg-neutral-700" />
      <div className="mx-auto h-1 w-20 bg-neutral-200 dark:bg-neutral-800" />
    </div>
  );
}