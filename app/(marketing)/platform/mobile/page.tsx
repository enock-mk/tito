// app/(marketing)/platform/mobile-apps/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { mobileAppFeatures } from '@/data/platformPages';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';
import { Apple, Smartphone, Download, QrCode } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Mobile Apps | TiTO',
  description: 'Manage your business on the go with TiTO mobile apps.',
};

export default function MobileAppsPage() {
  return (
    <>
      <PageHeader
        title="Mobile Apps"
        description="Manage your business on the go with TiTO mobile apps for iOS and Android."
        variant="centered"
        badge="Available Now"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              <SlideIn>
                <h2 className="text-3xl font-bold">
                  Your Business in Your Pocket
                </h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                  Access all your business tools from anywhere with TiTO mobile apps.
                  Manage bookings, process payments, and stay connected with customers on the go.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    <Apple className="h-5 w-5" />
                    App Store
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Smartphone className="h-5 w-5" />
                    Google Play
                  </Button>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <QrCode className="h-4 w-4" />
                    Scan to download
                  </div>
                </div>
              </SlideIn>
            </div>

            {/* Right: Phone Mockup */}
            <SlideIn delay={0.2}>
              <div className="flex justify-center">
                <div className="relative mx-auto w-64">
                  <div className="rounded-[3rem] bg-neutral-900 p-3 shadow-2xl">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-primary/5">
                      <div className="aspect-[9/16]">
                        <Image
                          src="/images/mobile-app-mockup.png"
                          alt="TiTO Mobile App"
                          width={300}
                          height={533}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y bg-neutral-50/50 py-16 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <SlideIn>
            <h2 className="text-center text-3xl font-bold">App Features</h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-neutral-600 dark:text-neutral-400">
              Everything you need to manage your business from anywhere.
            </p>
          </SlideIn>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mobileAppFeatures.map((feature) => {
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
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      
    </>
  );
}