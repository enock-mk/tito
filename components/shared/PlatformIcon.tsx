// components/icons/PlatformIcon.tsx
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PlatformIconProps {
  platform: 'apple' | 'google' | 'windows' | 'macos' | 'android';
  className?: string;
  width?: number;
  height?: number;
}

const iconMap = {
  apple: '/icons/apple-logo.svg',
  google: '/icons/play-store-logo.svg',
  windows: '/icons/windows-logo.svg',
  macos: '/icons/macos-logo.svg',
  android: '/icons/android-logo.svg',
};

export function PlatformIcon({ 
  platform, 
  className, 
  width = 24, 
  height = 24 
}: PlatformIconProps) {
  return (
    <Image
      src={iconMap[platform]}
      alt={`${platform} logo`}
      width={width}
      height={height}
      className={cn('object-contain', className)}
    />
  );
}