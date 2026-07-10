// app/(marketing)/platform/analytics/page.tsx
'use client';

import { PageHeader } from '@/components/shared/PageHeader';
import { analyticsFeatures } from '@/data/platformPages';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, BarChart3, PieChart, LineChart, Activity, Target, Eye, Filter, Bell } from 'lucide-react';



export default function AnalyticsPage() {
  const stats = [
    { value: '100+', label: 'Data Points Tracked' },
    { value: '24/7', label: 'Real-time Monitoring' },
    { value: '30+', label: 'Report Templates' },
    { value: '99.9%', label: 'Data Accuracy' },
  ];

  return (
    <>
      <PageHeader
        title="Analytics & Reports"
        description="Data-driven insights to grow your business. Track performance, understand customers, and make informed decisions."
        variant="centered"
        badge="Data-Driven"
      />

      {/* Stats */}
      <section className="border-b py-12 dark:border-neutral-800">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center rounded-xl border bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Analytics Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SlideIn>
            <h2 className="text-center text-3xl font-bold">Powerful Analytics Tools</h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-neutral-600 dark:text-neutral-400">
              Understand your business performance with comprehensive analytics and reporting.
            </p>
          </SlideIn>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {analyticsFeatures.map((feature) => {
              const Icon = feature.icon;
              const colorMap: Record<string, string> = {
                blue: 'from-blue-500 to-blue-600',
                green: 'from-green-500 to-green-600',
                purple: 'from-purple-500 to-purple-600',
                orange: 'from-orange-500 to-orange-600',
                red: 'from-red-500 to-red-600',
                indigo: 'from-indigo-500 to-indigo-600',
              };
              return (
                <div
                  key={feature.id}
                  className="group rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div
                    className={`inline-flex rounded-xl bg-gradient-to-br p-3 text-white shadow-lg transition-all duration-300 group-hover:scale-110 ${colorMap[feature.color]}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </StaggerContainer>

          <SlideIn delay={0.3}>
            <div className="mt-12 text-center">
              <Button size="lg" className="group">
                Explore Analytics Dashboard
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </SlideIn>
        </div>
      </section>

      
    </>
  );
}