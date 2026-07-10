// app/(marketing)/platform/integrations/page.tsx
'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { integrations } from '@/data/platformPages';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';
import { CTASection } from '@/components/sections/CTASection';
import { cn } from '@/lib/utils';
import { CheckCircle, Clock, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';


export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = ['all', ...new Set(integrations.map((i) => i.category))];
  
  const filteredIntegrations = activeCategory
    ? integrations.filter((i) => i.category === activeCategory)
    : integrations;

  const getStatusBadge = (status: string) => {
    const styles = {
      available: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      'coming-soon': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      beta: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    };
    return styles[status as keyof typeof styles] || styles.available;
  };

  const getStatusIcon = (status: string) => {
    if (status === 'available') return <CheckCircle className="h-3 w-3" />;
    if (status === 'coming-soon') return <Clock className="h-3 w-3" />;
    return <Sparkles className="h-3 w-3" />;
  };

  return (
    <>
      <PageHeader
        title="Integrations"
        description="Connect TiTO with your favorite tools and services. Over 50+ integrations available."
        variant="centered"
        badge="Connect & Automate"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <SlideIn>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category === 'all' ? null : category)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-all',
                    (activeCategory === null && category === 'all') || activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400'
                  )}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </SlideIn>

          {/* Integrations Grid */}
          <StaggerContainer className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredIntegrations.map((integration, index) => (
              <div
                key={integration.id}
                className="group rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="flex items-start justify-between">
                  <div className={cn(
                    'rounded-xl bg-gradient-to-br p-3 text-white transition-all duration-300 group-hover:scale-110',
                    integration.color === 'blue' && 'from-blue-500 to-blue-600',
                    integration.color === 'green' && 'from-green-500 to-green-600',
                    integration.color === 'purple' && 'from-purple-500 to-purple-600',
                    integration.color === 'orange' && 'from-orange-500 to-orange-600',
                    'bg-neutral-200 dark:bg-neutral-700'
                  )}>
                    <integration.icon className="h-5 w-5" />
                  </div>
                  <Badge className={cn('font-normal', getStatusBadge(integration.status))}>
                    <span className="flex items-center gap-1">
                      {getStatusIcon(integration.status)}
                      {integration.status.charAt(0).toUpperCase() + integration.status.slice(1)}
                    </span>
                  </Badge>
                </div>

                <h3 className="mt-4 font-semibold">{integration.name}</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {integration.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
                  <span className="capitalize">{integration.category}</span>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      
    </>
  );
}