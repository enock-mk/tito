// app/(marketing)/platform/features/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { platformFeatures } from '@/data/platformPages';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';
import { CTASection } from '@/components/sections/CTASection';
import { CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Platform Features | TiTO',
  description: 'Discover the powerful features that make TiTO the ultimate booking and management platform.',
};

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        title="Platform Features"
        description="Everything you need to manage your business operations in one powerful platform."
        variant="centered"
        badge="Powerful Features"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Feature Grid */}
          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {platformFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className="group relative rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div
                  className={`inline-flex rounded-xl bg-gradient-to-br p-3 text-white shadow-lg transition-all duration-300 group-hover:scale-110 ${feature.gradient}`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>

                {feature.benefits && (
                  <ul className="mt-4 space-y-1.5">
                    {feature.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      
    </>
  );
}