// app/(marketing)/cookies/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { CTASection } from '@/components/sections/CTASection';
import { Calendar, Cookie, Settings, Shield, Eye, Globe, Database } from 'lucide-react';

export const metadata = {
  title: 'Cookies Policy | TiTO',
  description: 'Learn about how TiTO uses cookies to enhance your browsing experience and improve our services.',
};

export default function CookiesPage() {
  return (
    <>
      <PageHeader
        title="Cookies Policy"
        description="Learn about how TiTO uses cookies to enhance your browsing experience and improve our services."
        badge="Transparent"
        variant="centered"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Last Updated */}
            <div className="mb-8 flex items-center gap-2 text-sm text-neutral-500">
              <Calendar className="h-4 w-4" />
              <span>Last updated: June 15, 2026</span>
            </div>

            <div className="space-y-10">
              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <Cookie className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">What Are Cookies?</h2>
                    <div className="mt-3 text-neutral-600 dark:text-neutral-400">
                      <p>
                        Cookies are small text files that are stored on your device when you visit a website. 
                        They help websites remember information about your visit, preferences, and settings to 
                        enhance your browsing experience.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <Settings className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">How We Use Cookies</h2>
                    <div className="mt-3 space-y-4 text-neutral-600 dark:text-neutral-400">
                      <p>We use cookies for the following purposes:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Essential Cookies:</strong> Required for the platform to function properly (authentication, security)</li>
                        <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how you interact with our platform</li>
                        <li><strong>Marketing Cookies:</strong> Deliver relevant content and advertisements</li>
                        <li><strong>Performance Cookies:</strong> Optimize platform performance and loading times</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Types of Cookies We Use</h2>
                    <div className="mt-4 space-y-4">
                      {[
                        {
                          type: 'Session Cookies',
                          description: 'Temporary cookies that expire when you close your browser',
                          duration: 'Session',
                          example: 'Authentication, shopping cart'
                        },
                        {
                          type: 'Persistent Cookies',
                          description: 'Remain on your device for a set period or until you delete them',
                          duration: 'Up to 2 years',
                          example: 'Preferences, login status'
                        },
                        {
                          type: 'Third-Party Cookies',
                          description: 'Set by third-party services integrated into our platform',
                          duration: 'Varies',
                          example: 'Analytics, payment processing'
                        },
                      ].map((cookie) => (
                        <div key={cookie.type} className="rounded-lg border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                          <h3 className="font-semibold">{cookie.type}</h3>
                          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{cookie.description}</p>
                          <div className="mt-2 flex flex-wrap gap-4 text-xs text-neutral-500">
                            <span>Duration: {cookie.duration}</span>
                            <span>Example: {cookie.example}</span>
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
                    <h2 className="text-xl font-bold">Your Cookie Preferences</h2>
                    <div className="mt-3 space-y-4 text-neutral-600 dark:text-neutral-400">
                      <p>You have the right to control your cookie preferences:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>You can accept or decline cookies when you first visit our site</li>
                        <li>You can change your preferences at any time through your browser settings</li>
                        <li>You can delete existing cookies from your device</li>
                        <li>You can set your browser to reject cookies entirely</li>
                      </ul>
                      <p className="mt-3">
                        Please note that disabling certain cookies may affect platform functionality and your user experience.
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