'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Navbar = () => {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const storedTheme = window.localStorage.getItem('tito-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial = storedTheme ? storedTheme === 'dark' : prefersDark;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsDark(initial);
        // mark client mount to avoid rendering text that may mismatch on hydration
        setMounted(true);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
        window.localStorage.setItem('tito-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark((current) => !current);
    };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white flex">
            <Image src="/vercel.svg" alt="Tito" width={20} height={20} />
            Tito
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-6 md:flex">
              <a href="#" className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Platform
              </a>
              <a href="#" className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Solutions
              </a>
              <a href="#contact" className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                industries
              </a>
              <a href="#contact" className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Resources
              </a>
              <a href="#contact" className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Company
              </a>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              aria-pressed={isDark}
              className="inline-flex min-w-[140px] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              {mounted ? (isDark ? '☀️ Light' : '🌙 Dark') : (isDark ? '☀️' : '🌙')}
            </button>
            <Link href="#contact" className="rounded-full border border-yellow-600 bg-yellow-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-yellow-700">
              Become a partner
            </Link>
            <Link href="#contact" className="rounded-full border border-yellow-600 bg-yellow-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-yellow-700">
              login
            </Link>
            <Link href="#contact" className="rounded-full border border-yellow-600 bg-yellow-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-yellow-700">
              Book a demo
            </Link>
          </div>
        </div>
      </nav>
  )
}
