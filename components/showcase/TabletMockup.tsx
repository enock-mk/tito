// components/showcase/TabletMockup.tsx
'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

interface TabletMockupProps {
  src: string;
  alt: string;
  className?: string;
  title?: string;
}

export function TabletMockup({ src, alt, className, title }: TabletMockupProps) {
  return (
    <div className={cn('relative mx-auto', className)}>
      <div className="relative rounded-2xl h-100 w-80 bg-neutral-900 p-2 shadow-2xl">
        {/* Camera */}
        <div className="absolute left-1/2 top-0.4 h-2 w-2 -translate-x-1/2 rounded-full bg-neutral-800" />

        
        {/* Screen */}
        <div className="relative overflow-hidden rounded-2xl bg-white">
          <Image
                      src={src}
                      alt={alt}
                      width={600}
                      height={750}
                      className="h-auto w-full"
                    />
          {title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-sm font-medium text-white">{title}</p>
            </div>
          )}
        </div>
        

        {/* Home Button */}
        <div className="absolute bottom-1.0 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-neutral-800" />
      </div>
    </div>
  );
}