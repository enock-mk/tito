// app/(marketing)/platform/security/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { securityFeatures } from '@/data/platformPages';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';
import { CTASection } from '@/components/sections/CTASection';
import { Shield, CheckCircle, Lock, Server, Users, Eye } from 'lucide-react';

export const metadata = {
  title: 'Security | TiTO',
  description: 'Enterprise-grade security to protect your business and customer data.',
};

export default function SecurityPage() {
  const securityHighlights = [
    { label: 'End-to-end encryption', icon: Lock },
    { label: '99.9% uptime', icon: Server },
    { label: 'GDPR compliant', icon: Shield },
    { label: '24/7 monitoring', icon: Eye },
  ];

  return (
    <>
      <PageHeader
        title="Security"
        description="Enterprise-grade security to protect your business and customer data."
        variant="centered"
        badge="Bank-Grade Security"
      />

      {/* Security Highlights */}
      <section className="border-b py-12 dark:border-neutral-800">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {securityHighlights.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center rounded-xl border bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <item.icon className="h-8 w-8 text-primary" />
                  <p className="mt-2 text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="group rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div
                    className={`inline-flex rounded-xl bg-gradient-to-br p-3 text-white shadow-lg transition-all duration-300 group-hover:scale-110 ${feature.gradient}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {feature.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                    <CheckCircle className="h-4 w-4" />
                    <span>Secure</span>
                  </div>
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      
    </>
  );
}