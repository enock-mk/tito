'use client';

import Link from 'next/link';
import Image from 'next/image';


export const Footer = () => {
    
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-12 text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
                <Link href="/" className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white flex">
                    <Image src="/vercel.svg" alt="Tito" width={20} height={20} />
                    Tito
                </Link>
                <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600 dark:text-slate-400">
                    Universal ticket booking platform for modern operators and teams.
                </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Product</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Company</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Legal</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <p>&copy; 2026 Tito. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
