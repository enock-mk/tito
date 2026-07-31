"use client"
// app/(marketing)/downloads/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { CTASection } from '@/components/sections/CTASection';
import { 
  Monitor,  
  QrCode,
  Apple,
  PlayCircle,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import { downloadApps } from '@/data/downloads';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SlideIn } from '@/components/animations/SlideIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';


export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        title="Downloads"
        description="Download TiTO apps and software for your business. Available on iOS, Android, and desktop."
        badge="Available Now"
        variant="centered"
      />

      {/* Quick Overview */}
      <section className="border-b py-12 dark:border-neutral-800">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {downloadApps.map((app) => {
                const Icon = app.icon;
                return (
                  <Link
                    key={app.id}
                    href={`#${app.id}`}
                    className="group flex flex-col items-center rounded-xl border bg-white p-4 text-center transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    <div
                      className={cn(
                        'rounded-xl bg-gradient-to-br p-2.5 text-white shadow-lg transition-all duration-300 group-hover:scale-110',
                        app.gradient
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="mt-2 text-xs font-medium line-clamp-2">{app.name}</span>
                  </Link>
                );
              })}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Download Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <StaggerContainer className="space-y-8">
            {downloadApps.map((app, index) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={app.id}
                  id={app.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: index * 0.05 },
                    },
                  }}
                  className="group rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 md:p-8"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                    {/* App Icon & Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            'rounded-2xl bg-gradient-to-br p-3 text-white shadow-lg transition-all duration-300 group-hover:scale-110',
                            app.gradient
                          )}
                        >
                          <Icon className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{app.name}</h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {app.description}
                          </p>
                          <Badge className="mt-2 bg-primary/10 text-primary hover:bg-primary/20">
                            {app.audience}
                          </Badge>
                        </div>
                      </div>

                      {/* Features */}
                      {app.features && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {app.features.map((feature) => (
                            <span
                              key={feature}
                              className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                            >
                              <CheckCircle2 className="h-3 w-3 text-primary" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Download Options */}
                    <div className="flex-1 space-y-4">
                      {/* Platform Store Links */}
                      <div>
                        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Available on:</p>
                        <div className="mt-2 flex flex-wrap gap-3">
                          {app.platforms.map((platform) => {
                            const PlatformIcon = platform.icon;
                            return (
                              <Link
                                key={platform.name}
                                href={platform.url}
                                className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all hover:border-primary hover:bg-primary/5 dark:border-neutral-700"
                              >
                                <PlatformIcon className="h-4 w-4" />
                                {platform.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Direct Downloads */}
                      <div>
                        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Direct Downloads:</p>
                        <div className="mt-2 flex flex-wrap gap-3">
                          {app.downloads.map((download) => {
                            const DownloadIcon = download.icon;
                            return (
                              <Link
                                key={download.name}
                                href={download.url}
                                className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all hover:border-primary hover:bg-primary/5 dark:border-neutral-700"
                              >
                                <DownloadIcon className="h-4 w-4" />
                                {download.name}
                                {download.size && (
                                  <span className="text-xs text-neutral-500">({download.size})</span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* QR Code Placeholder */}
                      {/* <div className="mt-2 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 dark:border-neutral-700">
                          <QrCode className="h-6 w-6 text-neutral-400" />
                        </div>
                        <span className="text-xs text-neutral-500">Scan to download</span>
                      </div>*/}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* System Requirements */}
      <section className="border-y bg-neutral-50/50 py-12 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-bold">System Requirements</h2>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: Apple, label: 'iOS', version: 'iOS 14.0 or later' },
                  { icon: PlayCircle, label: 'Android', version: 'Android 8.0 or later' },
                  { icon: Monitor, label: 'Windows', version: 'Windows 10 or later' },
                  { icon: Monitor, label: 'macOS', version: 'macOS 11.0 or later' },
                ].map((req) => {
                  const Icon = req.icon;
                  return (
                    <div
                      key={req.label}
                      className="rounded-xl border bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <Icon className="mx-auto h-8 w-8 text-primary" />
                      <p className="mt-2 font-semibold">{req.label}</p>
                      <p className="text-sm text-neutral-500">{req.version}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Need Help */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 text-center dark:border-neutral-800 dark:bg-neutral-900">
              <h3 className="text-xl font-bold">Need Help?</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Having trouble downloading or installing? Our support team is here to help.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button variant="default">Contact Support</Button>
                </Link>
                <Link href="/resources/help-center">
                  <Button variant="outline">Visit Help Center</Button>
                </Link>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>
    </>
  );
}