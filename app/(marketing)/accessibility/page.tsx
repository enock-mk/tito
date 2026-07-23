// app/(marketing)/accessibility/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { CTASection } from '@/components/sections/CTASection';
import { Calendar, Accessibility, Eye, Keyboard, Monitor, Mic, Hand, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Accessibility | TiTO',
  description: 'TiTO is committed to making our platform accessible to everyone, regardless of ability or technology.',
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader
        title="Accessibility"
        description="TiTO is committed to making our platform accessible to everyone, regardless of ability or technology."
        badge="Inclusive"
        variant="centered"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Commitment */}
            <div className="mb-12 rounded-2xl border bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
              <div className="flex items-start gap-4">
                <Accessibility className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h2 className="text-xl font-bold">Our Commitment</h2>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    TiTO is committed to ensuring digital accessibility for people with disabilities. 
                    We strive to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA 
                    standards and continuously improve the accessibility of our platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Accessibility Features</h2>
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                      {[
                        { icon: Keyboard, title: 'Keyboard Navigation', description: 'Full keyboard accessibility for all platform features' },
                        { icon: Monitor, title: 'Screen Reader Support', description: 'Optimized for screen readers and assistive technologies' },
                        { icon: Eye, title: 'High Contrast Mode', description: 'High contrast options for improved visibility' },
                        { icon: Mic, title: 'Voice Control', description: 'Support for voice control and speech recognition' },
                        { icon: Hand, title: 'Touch & Gesture', description: 'Optimized touch and gesture controls for mobile devices' },
                        { icon: Accessibility, title: 'Text Resize', description: 'Ability to resize text without breaking layout' },
                      ].map((item) => (
                        <div key={item.title} className="rounded-lg border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                          <div className="flex items-start gap-3">
                            <item.icon className="h-5 w-5 text-primary shrink-0" />
                            <div>
                              <h3 className="font-medium">{item.title}</h3>
                              <p className="mt-1 text-sm text-neutral-500">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <Eye className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Standards Compliance</h2>
                    <div className="mt-3 space-y-4 text-neutral-600 dark:text-neutral-400">
                      <p>We aim to meet the following standards:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>WCAG 2.1 Level AA compliance</li>
                        <li>Section 508 compliance (US)</li>
                        <li>EN 301 549 compliance (EU)</li>
                        <li>WAI-ARIA 1.2 support</li>
                        <li>HTML5 and CSS3 best practices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <Hand className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Feedback and Support</h2>
                    <div className="mt-3 space-y-4 text-neutral-600 dark:text-neutral-400">
                      <p>We welcome your feedback on the accessibility of our platform. If you encounter any barriers:</p>
                      <ul className="list-none space-y-2">
                        <li><a href="mailto:info@titobookings.com" className="text-primary hover:underline">info@titobookings.com</a></li>
                        <li><a href="tel:+260963296682" className="text-primary hover:underline">+260 963 296 682</a></li>
                      </ul>
                      <p className="mt-3">
                        We aim to respond to accessibility inquiries within 2 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}