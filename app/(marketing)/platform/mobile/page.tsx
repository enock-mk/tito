// app/(marketing)/platform/mobile-apps/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { mobileAppFeatures } from '@/data/platformPages';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Apple, 
  Smartphone, 
  Download, 
  QrCode, 
  Sparkles,
  CheckCircle2,
  Star,
  Users,
  Zap,
  Shield,
  Clock,
  Globe
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';


export default function MobileAppsPage() {
  const appStats = [
    { value: '4.8', label: 'App Store Rating', icon: Star },
    { value: '4.7', label: 'Google Play Rating', icon: Star },
    { value: '50K+', label: 'Downloads', icon: Download },
    { value: '98%', label: 'Satisfaction Rate', icon: Users },
  ];

  return (
    <>
      <PageHeader
        title="Mobile Apps"
        description="Manage your business on the go with TiTO mobile apps for iOS and Android."
        badge="Available Now"
        variant="centered"
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              <SlideIn>
                <Badge className="mb-4 inline-flex items-center gap-1 bg-primary/10 text-primary hover:bg-primary/20">
                  <Sparkles className="h-3 w-3" />
                  Available Now
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  Your Business in{' '}
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Your Pocket
                  </span>
                </h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                  Access all your business tools from anywhere with TiTO mobile apps.
                  Manage bookings, process payments, and stay connected with customers on the go.
                </p>

                {/* App Store Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="#" className="transition-transform hover:scale-105">
                    <div className="flex items-center gap-3 rounded-xl bg-neutral-900 px-5 py-3 text-white dark:bg-primary dark:text-neutral-900">
                      <Image className='mr-2 h-6 w-6' src={'/icons/app-store.svg'} alt='apple' width={24} height={24}/>
                      <div>
                        <p className="text-[10px] font-medium opacity-80">Download on the</p>
                        <p className="text-sm font-semibold">App Store</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="#" className="transition-transform hover:scale-105">
                    <div className="flex items-center gap-3 rounded-xl bg-neutral-900 px-5 py-3 text-white dark:bg-primary dark:text-neutral-900">
                       <Image className='mr-2 h-6 w-6' src={'/icons/google-play.svg'} alt='apple' width={24} height={24}/>
                      <div>
                        <p className="text-[10px] font-medium opacity-80">GET IT ON</p>
                        <p className="text-sm font-semibold">Google Play</p>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* QR Code */}
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-dashed border-neutral-300 dark:border-neutral-700">
                    <QrCode className="h-8 w-8 text-neutral-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Scan to download</p>
                    <p className="text-xs text-neutral-500">Available on iOS and Android</p>
                  </div>
                </div>

                {/* App Stats */}
                {/*<div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {appStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="flex flex-col items-center rounded-xl border bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900"
                      >
                        <Icon className="h-5 w-5 text-primary" />
                        <p className="mt-1 text-lg font-bold">{stat.value}</p>
                        <p className="text-xs text-neutral-500">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>*/}
              </SlideIn>
            </div>

            {/* Right: Phone Mockup */}
            <SlideIn delay={0.2}>
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl opacity-50" />
                  <div className="relative mx-auto w-64 animate-float">
                    <div className="rounded-[3rem] bg-neutral-900 p-3 shadow-2xl dark:bg-neutral-800">
                      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-primary/5">
                        <div className="aspect-[9/16]">
                          <Image
                            src="/dashboards/app.jpeg"
                            alt="TiTO Mobile App"
                            width={300}
                            height={533}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Floating Badge */}
                    {/*<div className="absolute -right-6 top-8 rounded-xl bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm dark:bg-neutral-900/90">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">4.8</span>
                      </div>
                    </div>
                    <div className="absolute -left-6 bottom-20 rounded-xl bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm dark:bg-neutral-900/90">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold">50K+</span>
                      </div>
                    </div>*/}
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y bg-neutral-50/50 py-16 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="text-center">
              <Badge className="mb-4 inline-flex items-center gap-1 bg-primary/10 text-primary hover:bg-primary/20">
                <Sparkles className="h-3 w-3" />
                Features
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Everything You Need on the Go
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                Powerful features designed to help you manage your business from anywhere.
              </p>
            </div>
          </SlideIn>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mobileAppFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="group relative rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div
                    className={`inline-flex rounded-xl bg-gradient-to-br p-3 text-white shadow-lg transition-all duration-300 group-hover:scale-110 ${feature.gradient}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold group-hover:text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {feature.description}
                  </p>

                  {/* Hover Glow */}
                  <div
                    className={cn(
                      'absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20',
                      feature.gradient
                    )}
                  />
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Compare Section */}
      {/*<section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-bold">Choose Your Platform</h2>
              <p className="mx-auto mt-2 max-w-2xl text-center text-neutral-600 dark:text-neutral-400">
                TiTO apps are available on all major platforms for your convenience.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { icon: Apple, platform: 'iOS', features: ['iPhone & iPad', 'Face ID', 'Widgets', 'Siri Shortcuts'] },
                  { icon: Smartphone, platform: 'Android', features: ['Phones & Tablets', 'Biometrics', 'Wear OS', 'Google Assistant'] },
                  { icon: Globe, platform: 'Web', features: ['Desktop & Laptop', 'Any Browser', 'Bookmarks', 'Progressive Web App'] },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.platform}
                      className="rounded-2xl border bg-white p-6 text-center dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <Icon className="mx-auto h-10 w-10 text-primary" />
                      <h3 className="mt-3 text-lg font-bold">{item.platform}</h3>
                      <ul className="mt-3 space-y-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex items-center justify-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </SlideIn>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="border-y bg-neutral-50/50 py-12 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Download the TiTO mobile app today and take your business wherever you go.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href="#">
                  <Button size="lg" className="gap-2">
                    <Image className='mr-2 h-4 w-4' src={'/icons/app-store.svg'} alt='apple' width={24} height={24}/>
                    App Store
                  </Button>
                </Link>
                <Link href="#">
                  <Button size="lg" variant="outline" className="gap-2">
                    <Smartphone className="h-5 w-5" />
                    Google Play
                  </Button>
                </Link>
              </div>
              <p className="mt-4 text-sm text-neutral-500">
                Available on iOS 14.0+ and Android 8.0+
              </p>
            </div>
          </SlideIn>
        </div>
      </section>

    </>
  );
}