// components/sections/DetailPage.tsx
'use client';

import Link from 'next/link';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  ArrowRight, 
  HelpCircle, 
  Zap, 
  Rocket,
  Sparkles,
  Check,
  Users,
  Calendar,
  CreditCard,
  BarChart3,
  LucideIcon
} from 'lucide-react';
import { SlideIn } from '@/components/animations/SlideIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { cn } from '@/lib/utils';

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

// Workflow step icons mapping
const workflowIcons: Record<number, LucideIcon> = {
  0: Rocket,
  1: Users,
  2: Calendar,
  3: CreditCard,
  4: BarChart3,
  5: Sparkles,
};

const workflowColors: Record<number, string> = {
  0: 'from-blue-500 to-blue-600',
  1: 'from-green-500 to-green-600',
  2: 'from-purple-500 to-purple-600',
  3: 'from-orange-500 to-orange-600',
  4: 'from-rose-500 to-rose-600',
  5: 'from-cyan-500 to-cyan-600',
};

// ChevronDown component for FAQ
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <SlideIn>
              <div className="text-center">
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                  <Rocket className="mr-1 h-3 w-3" />
                  Process
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  How It Works
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                  Simple steps to get started with {page.title} solutions
                </p>
              </div>
            </SlideIn>

            <div className="relative mt-12">
              {/* Vertical Timeline Line */}
              <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent md:left-1/2 md:-translate-x-0.5" />

              <div className="space-y-8">
                {page.workflow.map((step, index) => {
                  const Icon = workflowIcons[index % 6] || Check;
                  const color = workflowColors[index % 6] || 'from-primary-500 to-primary-600';
                  const isEven = index % 2 === 0;

                  return (
                    <SlideIn key={index} delay={index * 0.1}>
                      <div
                        className={cn(
                          'relative flex items-start gap-6',
                          isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                        )}
                      >
                        {/* Timeline Dot */}
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-lg md:h-12 md:w-12">
                          <div className={cn('absolute inset-0 rounded-full bg-gradient-to-br', color)} />
                          <Icon className="relative h-5 w-5 md:h-6 md:w-6" />
                        </div>

                        {/* Content */}
                        <div className={cn(
                          'flex-1 rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900',
                          isEven ? 'md:mr-12 md:text-left' : 'md:ml-12 md:text-right'
                        )}>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-primary/60">0{index + 1}</span>
                            <span className="text-sm font-semibold text-primary">{step}</span>
                          </div>
                          <h3 className="mt-1 text-lg font-semibold">{step}</h3>
                          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                            {index === 0 && 'Start your journey by signing up and creating your account.'}
                            {index === 1 && 'Configure your services, pricing, and preferences.'}
                            {index === 2 && 'Set up your dashboard and invite your team.'}
                            {index === 3 && 'Start accepting bookings and managing operations.'}
                            {index === 4 && 'Track performance and gain valuable insights.'}
                            {index === 5 && 'Scale your business with data-driven decisions.'}
                            {!index && index > 5 && 'Complete this step to move forward.'}
                          </p>
                        </div>
                      </div>
                    </SlideIn>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-y bg-neutral-50/50 py-12 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <SlideIn>
              <div className="text-center">
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                  <HelpCircle className="mr-1 h-3 w-3" />
                  FAQs
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                  Quick answers to common questions about {page.title}
                </p>
              </div>
            </SlideIn>

            <div className="mt-8 space-y-3">
              {page.faqs.map((faq, index) => (
                <SlideIn key={index} delay={index * 0.05}>
                  <details
                    className="group rounded-xl border bg-white transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-4 font-medium transition-colors hover:text-primary">
                      <span className="flex items-center gap-3">
                        <span className="text-primary/40">0{index + 1}</span>
                        {faq.question}
                      </span>
                      <span className="ml-4 text-primary transition-transform duration-300 group-open:rotate-180">
                        <ChevronDown className="h-5 w-5" />
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