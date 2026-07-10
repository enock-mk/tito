// components/hero/HeroStats.tsx
'use client';

import { CountUp } from '@/components/animations/CountUp';
import { FadeIn } from '@/components/animations/FadeIn';

interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface HeroStatsProps {
  stats?: Stat[];
  className?: string;
}

const defaultStats: Stat[] = [
  { value: 120, label: 'Partners', suffix: '+' },
  { value: 5000, label: 'Bookings', suffix: '+' },
  { value: 99.9, label: 'Uptime', suffix: '%' },
  { value: 24, label: 'Support', suffix: '/7' },
];

export function HeroStats({ stats = defaultStats, className }: HeroStatsProps) {
  return (
    <FadeIn delay={0.5}>
      <div className={className}>
        <div className="flex flex-wrap items-center gap-8 text-sm">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-1">
              <span className="font-bold text-primary">
                <CountUp
                  end={stat.value}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix || ''}
                />
              </span>
              <span className="text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </span>
              {index < stats.length - 1 && (
                <span className="ml-4 hidden h-4 w-px bg-neutral-300 dark:bg-neutral-700 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}