// app/(marketing)/partner/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { PartnerForm } from '@/components/forms/PartnerForm';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { CTASection } from '@/components/sections/CTASection';
import { SlideIn } from '@/components/animations/SlideIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Headphones, 
  Rocket,
  Shield,
  Zap,
  Award,
  Sparkles,
  Handshake,
  DollarSign,
  Globe,
  Calendar,
  Star,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Partner With TiTO | Grow Your Business',
  description: 'Join TiTO and expand your business with a digital platform trusted for bookings and operational management. Benefits include increased visibility, simplified operations, analytics and customer support.',
};

export default function PartnerPage() {
  const benefits = [
    {
      title: 'Increased Visibility',
      description: 'Get featured in our partner directory and gain exposure to thousands of potential clients.',
      icon: TrendingUp,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Simplified Operations',
      description: 'Streamline your booking and management processes with our all-in-one platform.',
      icon: Zap,
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      title: 'Advanced Analytics',
      description: 'Access detailed reports and insights to make data-driven business decisions.',
      icon: BarChart3,
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Dedicated Support',
      description: 'Get priority support from our team of experts whenever you need assistance.',
      icon: Headphones,
      gradient: 'from-green-500 to-green-600',
    },
    {
      title: 'Revenue Growth',
      description: 'Unlock new revenue streams with competitive commissions and referral programs.',
      icon: DollarSign,
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      title: 'Global Network',
      description: 'Connect with a growing community of partners across multiple industries.',
      icon: Globe,
      gradient: 'from-cyan-500 to-cyan-600',
    },
  ];

  const stats = [
    { value: '120+', label: 'Active Partners', icon: Users },
    { value: '40%', label: 'Average Growth', icon: TrendingUp },
    { value: '98%', label: 'Satisfaction Rate', icon: Star },
    { value: '24/7', label: 'Support Available', icon: Headphones },
  ];

  const partnerTypes = [
    {
      title: 'Solution Partners',
      description: 'Integrate TiTO into your solution and offer it to your clients.',
      icon: Handshake,
    },
    {
      title: 'Referral Partners',
      description: 'Refer businesses to TiTO and earn attractive commissions.',
      icon: Rocket,
    },
    {
      title: 'Strategic Partners',
      description: 'Deep collaboration with joint go-to-market strategies.',
      icon: Award,
    },
    {
      title: 'Technology Partners',
      description: 'Build integrations and apps on the TiTO platform.',
      icon: Shield,
    },
  ];

  return (
    <>
      <PageHeader
        title="Partner With TiTO"
        description="Join our growing network of partners and grow your business together with TiTO."
        badge="Apply Now"
        variant="centered"
      />

      {/* Stats Section */}
      <section className="border-b py-12 dark:border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <SlideIn key={stat.label} delay={index * 0.1}>
                  <div className="flex flex-col items-center rounded-xl border bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900">
                    <Icon className="h-6 w-6 text-primary" />
                    <div className="mt-2 text-2xl font-bold text-primary">{stat.value}</div>
                    <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
                  </div>
                </SlideIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Why Partner With Us
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Partnership Benefits
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                Join our partner program and unlock these exclusive benefits.
              </p>
            </div>
          </SlideIn>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="flex items-start gap-3">
                    <div
                      className={`inline-flex rounded-xl bg-gradient-to-br p-2.5 text-white shadow-lg transition-all duration-300 group-hover:scale-110 ${benefit.gradient}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{benefit.title}</h3>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 -z-10 rounded-2xl border-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="border-y bg-neutral-50/50 py-16 dark:bg-neutral-900/50 md:py-24">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Partner Types
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Choose Your Partnership
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                Find the partnership model that fits your business.
              </p>
            </div>
          </SlideIn>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {partnerTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border bg-white p-6 text-center transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="mx-auto rounded-xl bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold">{type.title}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{type.description}</p>
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <SlideIn>
              <div className="text-center">
                <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                  Apply Now
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                  Ready to Partner With Us?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                  Fill out the application form below and our partnerships team will get back to you within 24-48 hours.
                </p>
              </div>
            </SlideIn>

            <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 md:p-8">
              <PartnerForm />
            </div>
          </div>
        </div>
      </section>

      <TrustedBy />
      <CTASection variant="default" />
    </>
  );
}