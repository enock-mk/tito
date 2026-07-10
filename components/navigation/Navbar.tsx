// components/navigation/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/shared/Logo';
import { Container } from '@/components/layout/container';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { SearchDialog } from './SearchDialog';
import  ThemeToggle  from '@/components/shared/themeToggle';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm dark:bg-neutral-900/80'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          <Logo />

          <DesktopNav />

          <div className="flex items-center gap-2 lg:hidden">
            <SearchDialog />
            <ThemeToggle />
            <MobileNav />
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <SearchDialog />
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}