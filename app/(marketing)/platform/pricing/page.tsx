// app/(marketing)/platform/pricing/page.tsx
'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { pricingPlans } from '@/data/platformPages';
import { SlideIn } from '@/components/animations/SlideIn';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';



export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  // Calculate annual pricing (12 months)
  const getPrice = (plan: typeof pricingPlans[0]) => {
    if (plan.id === 'enterprise') return 'Custom';
    if (isAnnual) {
      const monthlyPrice = parseInt(plan.price.replace('$', ''));
      const annualPrice = monthlyPrice * 12 * 0.8; // 20% discount
      return `$${annualPrice}`;
    }
    return plan.price;
  };

  const getPeriod = (plan: typeof pricingPlans[0]) => {
    if (plan.id === 'enterprise') return '';
    return isAnnual ? '/year' : '/month';
  };

  return (
    <>
      <PageHeader
        title="Simple, Transparent Pricing"
        description="Choose the perfect plan for your business. All plans include a free trial."
        variant="centered"
        badge="Pricing"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Billing Toggle */}
          <SlideIn>
            <div className="flex items-center justify-center gap-4">
              <span className={cn(
                'text-sm font-medium transition-colors',
                !isAnnual ? 'text-neutral-900 dark:text-white' : 'text-neutral-500'
              )}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={cn(
                  'relative h-8 w-16 rounded-full transition-colors',
                  isAnnual ? 'bg-primary' : 'bg-neutral-300 dark:bg-neutral-700'
                )}
              >
                <span
                  className={cn(
                    'absolute top-1 h-6 w-6 rounded-full bg-white transition-all',
                    isAnnual ? 'right-1' : 'left-1'
                  )}
                />
              </button>
              <span className={cn(
                'text-sm font-medium transition-colors',
                isAnnual ? 'text-neutral-900 dark:text-white' : 'text-neutral-500'
              )}>
                Annual
                <span className="ml-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  Save 20%
                </span>
              </span>
            </div>
          </SlideIn>

          {/* Pricing Cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <SlideIn key={plan.id} delay={0.1}>
                <div className={cn(
                  'relative rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900',
                  plan.highlighted && 'border-primary shadow-lg'
                )}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-white">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {plan.description}
                    </p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{getPrice(plan)}</span>
                      {plan.period && (
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
                          {getPeriod(plan)}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="mt-6 w-full"
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>

                  {plan.id === 'starter' && (
                    <p className="mt-3 text-center text-xs text-neutral-500 dark:text-neutral-400">
                      No credit card required
                    </p>
                  )}
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}