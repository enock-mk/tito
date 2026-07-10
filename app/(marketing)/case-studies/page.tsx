// app/(marketing)/resources/case-studies/page.tsx
'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { caseStudies, CaseStudy } from '@/data/resources';
import { SlideIn } from '@/components/animations/SlideIn';
import { CTASection } from '@/components/sections/CTASection';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Building2,
  TrendingUp,
  Users,
  CheckCircle,
  Quote,
  Star,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


export default function CaseStudiesPage() {
  const [filterIndustry, setFilterIndustry] = useState<string | null>(null);

  const industries = ['all', ...new Set(caseStudies.map((cs) => cs.industry))];
  
  const filteredCases = filterIndustry
    ? caseStudies.filter((cs) => cs.industry === filterIndustry)
    : caseStudies;

  return (
    <>
      <PageHeader
        title="Case Studies"
        description="See how businesses across industries are succeeding with TiTO."
        variant="centered"
        badge="Success Stories"
      />

      {/* Industry Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setFilterIndustry(industry === 'all' ? null : industry)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-all',
                    (filterIndustry === null && industry === 'all') || filterIndustry === industry
                      ? 'bg-primary text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400'
                  )}
                >
                  {industry === 'all' ? 'All Industries' : industry}
                </button>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {filteredCases.map((study, index) => (
              <div
                key={study.id}
                className="group rounded-2xl border bg-white overflow-hidden transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5">
                  {study.image ? (
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Building2 className="h-12 w-12 text-primary/30" />
                    </div>
                  )}
                  {study.featured && (
                    <div className="absolute top-4 right-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-yellow-900">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <span>{study.industry}</span>
                    <span>·</span>
                    <span>{study.company}</span>
                  </div>

                  <h3 className="mt-2 text-xl font-bold group-hover:text-primary">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    {study.description}
                  </p>

                  {/* Stats */}
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {study.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center rounded-lg bg-neutral-50 p-3 dark:bg-neutral-800"
                      >
                        <div className="text-lg font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-xs text-neutral-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial Preview */}
                  {study.testimonial && (
                    <div className="mt-4 rounded-lg bg-primary/5 p-4 dark:bg-primary/10">
                      <Quote className="h-4 w-4 text-primary" />
                      <p className="mt-1 text-sm italic text-neutral-600 dark:text-neutral-400">
                        `&qout;`{study.testimonial.quote.slice(0, 120)}...`&qout;`
                      </p>
                      <p className="mt-2 text-xs font-medium">
                        {study.testimonial.author}
                        <span className="font-normal text-neutral-500">
                          {' · '}{study.testimonial.role}
                        </span>
                      </p>
                    </div>
                  )}

                  <Link href={`/resources/case-studies/${study.slug}`}>
                    <Button variant="ghost" className="mt-4 group/btn">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </StaggerContainer>

          {filteredCases.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="mx-auto h-12 w-12 text-neutral-300" />
              <h3 className="mt-4 text-lg font-semibold">No case studies found</h3>
              <p className="text-neutral-500">Try selecting a different industry filter.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection variant="simple" />
    </>
  );
}