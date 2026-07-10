// app/(marketing)/industries/page.tsx
'use client';

import { PageHeader } from '@/components/shared/PageHeader';
import { industries } from '@/data/industries';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';
import { CTASection } from '@/components/sections/CTASection';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building2, Users, Calendar, Bus, Hotel, Heart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function IndustriesPage() {
  const router = useRouter();

  // Group industries by category for better organization
  const categories = [
    {
      id: 'hospitality',
      title: 'Hospitality',
      icon: Hotel,
      industries: industries.filter(i => ['hotels'].includes(i.id)),
    },
    {
      id: 'transportation',
      title: 'Transportation',
      icon: Bus,
      industries: industries.filter(i => ['transport', 'car-hire'].includes(i.id)),
    },
    {
      id: 'events',
      title: 'Events & Fundraising',
      icon: Calendar,
      industries: industries.filter(i => ['events', 'fundraising'].includes(i.id)),
    },
    {
      id: 'community',
      title: 'Community & Faith',
      icon: Heart,
      industries: industries.filter(i => ['churches'].includes(i.id)),
    },
  ];

  const handleIndustryClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    console.log('Navigating to:', href);
    router.push(href);
  };

  return (
    <>
      <PageHeader
        title="Industries We Serve"
        description="Tailored solutions for every industry. Discover how TiTO can transform your business."
        variant="centered"
        badge="Industry Solutions"
      />

      {/* Category Showcase */}
      <section className="border-b py-12 dark:border-neutral-800">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.id}
                    className="flex flex-col items-center rounded-xl border bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    <Icon className="h-6 w-6 text-primary" />
                    <h4 className="mt-2 text-sm font-medium">{category.title}</h4>
                    <p className="text-xs text-neutral-500">
                      {category.industries.length} industries
                    </p>
                  </div>
                );
              })}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.id}
                  href={industry.href}
                  onClick={(e) => {
                    // Debug: Check if href is correct
                    console.log(`🔗 Clicking ${industry.title} -> ${industry.href}`);
                  }}
                  className="group relative rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex rounded-xl bg-gradient-to-br p-3 text-white shadow-lg transition-all duration-300 group-hover:scale-110 ${industry.gradient}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <Badge className="ml-3 bg-primary/10 text-primary hover:bg-primary/20">
                    {industry.stats}
                  </Badge>

                  <h3 className="mt-4 text-xl font-bold group-hover:text-primary">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {industry.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {industry.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                      >
                        {feature}
                      </span>
                    ))}
                    {industry.features.length > 2 && (
                      <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                        +{industry.features.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>

                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20 ${industry.gradient}`}
                  />
                </Link>
              );
            })}
          </StaggerContainer>

          {/* Debug Info - Remove in production */}
          <div className="mt-8 text-center text-xs text-neutral-400">
            <p>Available industry routes:</p>
            <div className="flex flex-wrap justify-center gap-2 mt-1">
              {industries.map((i) => (
                <span key={i.id} className="rounded bg-neutral-100 px-2 py-0.5 dark:bg-neutral-800">
                  {i.href}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="simple" />
    </>
  );
}