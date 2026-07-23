// components/sections/PartnersSection.tsx (Simpler)
'use client';

import { partners } from '@/data/partners';
import { cn } from '@/lib/utils';

export function PartnersSection() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-main-yellow-600">
            Partners
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Trusted by leading operators and teams.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            TiTO powers ticketing, hospitality, and event experiences for businesses across Africa and beyond.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.id}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-900 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
              >
                <div
                  className={cn(
                    'mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md',
                    partner.color || 'from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800'
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{partner.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {partner.industry}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}