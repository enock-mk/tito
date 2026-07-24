// app/(marketing)/partners/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { partnerBenefits, partnerStats } from '@/data/pages';
import { PartnerForm } from '@/components/forms/PartnerForm';
import { SlideIn } from '@/components/animations/SlideIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { CTASection } from '@/components/sections/CTASection';
import { CountUp } from '@/components/animations/CountUp';
import { CheckCircle, Users, Handshake, TrendingUp, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'Partners | TiTO',
  description: 'Partner with TiTO and grow your business together.',
};

export default function PartnersPage() {
  const partnerTypes = [
    {
      icon: Users,
      title: 'Solution Partners',
      description: 'Integrate TiTO into your solution and offer it to your clients.',
    },
    {
      icon: Handshake,
      title: 'Referral Partners',
      description: 'Refer businesses to TiTO and earn commissions.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Partners',
      description: 'Deep collaboration with joint go-to-market strategies.',
    },
    {
      icon: DollarSign,
      title: 'Technology Partners',
      description: 'Build integrations and apps on the TiTO platform.',
    },
  ];

  return (
    <>
      <PageHeader
        title="Partner With Us"
        description="Join our growing network of partners and grow your business together with TiTO."
        variant="centered"
        badge="Partnership"
      />

      {/* Stats */}
      {/*<section className="border-b py-12 dark:border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {partnerStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-xl border bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="text-2xl font-bold text-primary">
                  <CountUp
                    end={parseInt(stat.value.replace(/[^0-9.]/g, ''))}
                    suffix={stat.value.includes('+') ? '+' : ''}
                    prefix={stat.value.includes('%') ? '' : ''}
                  />
                </div>
                <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Partner Benefits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SlideIn>
            <h2 className="text-center text-2xl font-bold">Why Partner With TiTO?</h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-neutral-600 dark:text-neutral-400">
              We`&apos;`re committed to helping our partners succeed.
            </p>
          </SlideIn>

          <StaggerContainer className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partnerBenefits.map((benefit) => {
              const Icon = benefit.icon;
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
                  key={benefit.id}
                  className="group rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div
                    className={`inline-flex rounded-xl bg-gradient-to-br p-3 text-white shadow-lg transition-all duration-300 group-hover:scale-110 ${colorMap[benefit.color]}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Partner Types */}
      <section className="border-y bg-neutral-50/50 py-12 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <SlideIn>
            <h2 className="text-center text-2xl font-bold">Partner Types</h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-neutral-600 dark:text-neutral-400">
              Choose the partnership that fits your business model.
            </p>
          </SlideIn>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnerTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-xl border bg-white p-6 text-center dark:border-neutral-800 dark:bg-neutral-900"
              >
                <type.icon className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-3 font-semibold">{type.title}</h3>
                <p className="mt-1 text-sm text-neutral-500">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Application */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <SlideIn>
              <div className="text-center">
                <h2 className="text-2xl font-bold">Apply to Become a Partner</h2>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  Fill out the form below and our partnerships team will get back to you.
                </p>
              </div>
            </SlideIn>

            <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 md:p-8">
              <PartnerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}