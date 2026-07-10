// components/shared/Logo.tsx
'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light' | 'dark';
}

export function Logo({ className, variant = 'default' }: LogoProps) {
  const colors = {
    default: 'text-neutral-900 dark:text-white',
    light: 'text-white',
    dark: 'text-neutral-900',
  };

  return (
    <Link href="/" className={cn('flex relative gap-2 m-4 p-2', className)}>
      <Image src="/icons/logo.png" alt='logo' height={32} width={32}/>
      <span
        className={cn(
          'text-xl font-bold tracking-tight',
          colors[variant]
        )}
      >
        Ti<span className='text-primary'>TO</span>
      </span>
    </Link>
  );
}