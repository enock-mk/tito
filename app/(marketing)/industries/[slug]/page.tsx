// app/(marketing)/industries/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { industries, Industry } from '@/data/industries';
import { PageHeader } from '@/components/shared/PageHeader';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, HelpCircle, Zap } from 'lucide-react';
import { SlideIn } from '@/components/animations/SlideIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';

// Generate static params for all industry pages
export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug || industry.id,
  }));
}

// Find an industry by slug
async function getIndustry(slug: string): Promise<Industry | undefined> {
  return industries.find((industry) => (industry.slug || industry.id) === slug);
}

// Generate metadata - params is now a Promise
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  if (!industry) return {};

  return {
    title: `${industry.title} | TiTO Industries`,
    description: industry.description,
  };
}

// Page component - params is now a Promise
export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  if (!industry) notFound();

  const hasDetailContent = industry.heroIntro && industry.heroText && industry.problemQuestions;

  return (
    <>
      <PageHeader
        title={industry.title}
        description={industry.description}
        badge={industry.industryCategory || 'Industry'}
        variant="centered"
      />

      {hasDetailContent ? (
        <>
          {/* Hero Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl">
                <SlideIn>
                  <div className="text-center">
                    <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                      {industry.heroIntro}
                    </Badge>
                    <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                      {industry.heroText}
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
                  {industry.problemQuestions?.map((question, index) => (
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
                          {industry.solutionText}
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
                  {industry.features.map((feature) => (
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
                  {industry.workflow?.map((step, index) => (
                    <SlideIn key={index} delay={index * 0.1}>
                      <div className="flex w-full max-w-md items-center gap-4 rounded-xl border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                          {index + 1}
                        </div>
                        <span className="font-medium">{step}</span>
                        {index < (industry.workflow?.length || 0) - 1 && (
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
                  {industry.faqs?.map((faq, index) => (
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
      ) : (
        // Fallback: Show only features if no detail content
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <SlideIn>
                <h2 className="text-2xl font-bold text-center">Key Features</h2>
              </SlideIn>
              <StaggerContainer className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {industry.features.map((feature) => (
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
      )}

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <SlideIn>
              <div className="text-center">
                <h2 className="text-2xl font-bold md:text-3xl">
                  Ready to Transform Your {industry.title} Operations?
                </h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                  Join 120+ businesses already using TiTO to manage their operations.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/partner">
                    <Button size="lg" className="group">
                      Become a Partner
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline">
                      Book a Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
    </>
  );
}