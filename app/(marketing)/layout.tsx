import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TiTO Marketing',
  description: 'Marketing pages for TiTO — product pages, resources, and solution overviews.',
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">{children}</div>;
}
