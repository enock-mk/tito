// app/(marketing)/terms/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { CTASection } from '@/components/sections/CTASection';
import { Calendar, FileText, Shield, Users, CreditCard, AlertCircle, CheckCircle, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | TiTO',
  description: 'Read TiTO\'s Terms of Service. Understand the terms and conditions governing the use of our platform.',
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        description="Understand the terms and conditions governing the use of TiTO's platform and services."
        badge="Effective June 2026"
        variant="centered"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Last Updated */}
            <div className="mb-8 flex items-center gap-2 text-sm text-neutral-500">
              <Calendar className="h-4 w-4" />
              <span>Effective: June 15, 2026</span>
            </div>

            {/* Overview */}
            <div className="mb-12 rounded-2xl border bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
              <h2 className="text-xl font-bold">Welcome to TiTO</h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                These Terms of Service govern your use of TiTO&apos;s platform and services. By using our platform, 
                you agree to these terms. Please read them carefully.
              </p>
            </div>

            <div className="space-y-10">
              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">1. Acceptance of Terms</h2>
                    <div className="mt-3 text-neutral-600 dark:text-neutral-400">
                      <p>
                        By creating an account or using TiTO&apos;s services, you agree to be bound by these Terms 
                        of Service. If you do not agree to these terms, please do not use our platform.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">2. User Accounts</h2>
                    <div className="mt-3 space-y-4 text-neutral-600 dark:text-neutral-400">
                      <p>To access certain features, you must create an account. You agree to:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Provide accurate and complete information</li>
                        <li>Maintain the security of your account credentials</li>
                        <li>Notify us immediately of any unauthorized use</li>
                        <li>Be responsible for all activities under your account</li>
                        <li>Be at least 18 years old to use our services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">3. Platform Services</h2>
                    <div className="mt-3 space-y-4 text-neutral-600 dark:text-neutral-400">
                      <p>TiTO provides a comprehensive platform for booking and management services including:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Booking and reservation management</li>
                        <li>Payment processing</li>
                        <li>Customer relationship management</li>
                        <li>Analytics and reporting</li>
                        <li>Mobile app access</li>
                        <li>Integration with third-party services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">4. Payments and Billing</h2>
                    <div className="mt-3 space-y-4 text-neutral-600 dark:text-neutral-400">
                      <p>Our payment terms are as follows:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Fees are billed in advance on a monthly or annual basis</li>
                        <li>All fees are non-refundable except as required by law</li>
                        <li>We accept various payment methods including credit cards and bank transfers</li>
                        <li>Prices are subject to change with 30 days&apos; notice</li>
                        <li>Taxes may apply based on your location</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">5. Acceptable Use Policy</h2>
                    <div className="mt-3 space-y-4 text-neutral-600 dark:text-neutral-400">
                      <p>You agree not to:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Use the platform for any illegal or unauthorized purpose</li>
                        <li>Attempt to gain unauthorized access to systems or data</li>
                        <li>Interfere with or disrupt the platform&apos;s functionality</li>
                        <li>Transmit viruses or malicious code</li>
                        <li>Harass, abuse, or harm others using the platform</li>
                        <li>Violate any applicable laws or regulations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">6. Limitation of Liability</h2>
                    <div className="mt-3 space-y-4 text-neutral-600 dark:text-neutral-400">
                      <p>
                        To the fullest extent permitted by law, TiTO shall not be liable for any indirect, 
                        incidental, special, consequential, or punitive damages arising from your use of the platform.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">7. Governing Law</h2>
                    <div className="mt-3 text-neutral-600 dark:text-neutral-400">
                      <p>
                        These Terms shall be governed by and construed in accordance with the laws of the 
                        Republic of Zambia, without regard to its conflict of law provisions.
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