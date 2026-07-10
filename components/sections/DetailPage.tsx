// components/sections/DetailPage.tsx
'use client';

import Link from 'next/link';
import { PageHeader } from '@/components/shared/PageHeader';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, HelpCircle, Zap } from 'lucide-react';
import { SlideIn } from '@/components/animations/SlideIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface DetailPageProps {
  page: {
    id: string;
    title: string;
    description: string;
    heroIntro: string;
    heroText: string;
    problemQuestions: string[];
    solutionText: string;
    features: string[];
    workflow: string[];
    faqs: { question: string; answer: string }[];
    industry?: string;
  };
  breadcrumbs: Breadcrumb[];
}

export function DetailPage({ page, breadcrumbs }: DetailPageProps) {
  return (
    <>
      <PageHeader
        title={page.title}
        description={page.description}
        badge={page.industry || 'Solution'}
        variant="centered"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <SlideIn>
              <div className="text-center">
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                  {page.heroIntro}
                </Badge>
                <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  {page.heroText}
                </h2>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="border-y bg-neutral-50/50 py-12 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <SlideIn>
              <h2 className="text-2xl font-bold text-center">Is Your Business Facing These Challenges?</h2>
            </SlideIn>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {page.problemQuestions.map((question, index) => (
                <SlideIn key={index} delay={index * 0.1}>
                  <div className="flex items-center gap-3 rounded-xl border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{question}</span>
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <SlideIn>
              <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 dark:from-primary/10 dark:to-primary/5">
                <div className="flex items-start gap-4">
                  <Zap className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold">The TiTO Solution</h2>
                    <p className="mt-2 text-lg text-neutral-700 dark:text-neutral-300">
                      {page.solutionText}
                    </p>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y bg-neutral-50/50 py-12 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <SlideIn>
              <h2 className="text-2xl font-bold text-center">Key Features</h2>
            </SlideIn>
            <StaggerContainer className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {page.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 rounded-xl bg-white p-3 dark:bg-neutral-900"
                >
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <SlideIn>
              <h2 className="text-2xl font-bold text-center">How It Works</h2>
            </SlideIn>
            <div className="mt-8 flex flex-col items-center gap-4">
              {page.workflow.map((step, index) => (
                <SlideIn key={index} delay={index * 0.1}>
                  <div className="flex w-full max-w-md items-center gap-4 rounded-xl border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                      {index + 1}
                    </div>
                    <span className="font-medium">{step}</span>
                    {index < page.workflow.length - 1 && (
                      <ArrowRight className="ml-auto h-5 w-5 text-neutral-300" />
                    )}
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-y bg-neutral-50/50 py-12 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <SlideIn>
              <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
            </SlideIn>
            <div className="mt-8 space-y-4">
              {page.faqs.map((faq, index) => (
                <SlideIn key={index} delay={index * 0.1}>
                  <details className="group rounded-xl border bg-white dark:border-neutral-800 dark:bg-neutral-900">
                    <summary className="flex cursor-pointer items-center justify-between p-4 font-medium">
                      {faq.question}
                      <span className="ml-4 text-primary transition-transform group-open:rotate-180">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </summary>
                    <div className="border-t p-4 dark:border-neutral-800">
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </SlideIn>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}