// components/sections/ComparisonTable.tsx
'use client';

import { benefits } from '@/data/benefits';
import { SlideIn } from '@/components/animations/SlideIn';
import { Check, X } from 'lucide-react';
import  cn  from 'classnames';

interface ComparisonData {
  feature: string;
  tito: boolean;
  competitor: boolean;
}

const comparisonData: ComparisonData[] = [
  { feature: 'Cloud-based platform', tito: true, competitor: false },
  { feature: 'Mobile apps', tito: true, competitor: true },
  { feature: 'Real-time analytics', tito: true, competitor: false },
  { feature: '24/7 support', tito: true, competitor: false },
  { feature: 'Secure payments', tito: true, competitor: true },
  { feature: 'Multi-industry solutions', tito: true, competitor: false },
];

export function ComparisonTable() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50/50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4">
        <SlideIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Why TiTO stands out
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              See how TiTO compares to traditional solutions
            </p>
          </div>
        </SlideIn>

        <SlideIn delay={0.2}>
          <div className="mt-8 overflow-hidden rounded-2xl border bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary">
                    TiTO
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-500">
                    Traditional
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      'border-b dark:border-neutral-800',
                      index % 2 === 0 && 'bg-white dark:bg-neutral-900',
                      index % 2 === 1 && 'bg-neutral-50/50 dark:bg-neutral-800/50'
                    )}
                  >
                    <td className="px-6 py-4 text-sm font-medium">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.tito ? (
                        <Check className="mx-auto h-5 w-5 text-primary" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-neutral-300" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.competitor ? (
                        <Check className="mx-auto h-5 w-5 text-neutral-400" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-neutral-300" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}