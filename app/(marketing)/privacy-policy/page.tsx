// app/(marketing)/privacy-policy/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { CTASection } from '@/components/sections/CTASection';
import { 
  Mail, 
  Shield, 
  Server, 
  Lock, 
  Eye, 
  Database, 
  MapPin, 
  Smartphone, 
  Users, 
  FileText,
  Info,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | TiTO Bookings',
  description: 'Learn how TiTO Bookings collects, uses, and protects your personal information. Your privacy matters to us.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="TiTO Bookings is committed to protecting your privacy. Learn how we collect, use, and safeguard your information."
        badge="Privacy"
        variant="centered"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Overview */}
            <div className="mb-8 rounded-2xl border bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h2 className="text-xl font-bold">TiTO Bookings Privacy Policy</h2>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    TiTO Bookings (&quot;TiTO&quot;,&quot;we&quot;,&quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                    when you use our mobile application and related services (collectively, the &quot;App&quot;). 
                    Please read this policy carefully. If you do not agree with its terms, please discontinue 
                    use of the App.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              {/* Section 1 */}
              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">1. Information We Collect</h2>
                    <div className="mt-3 space-y-4 text-neutral-600 dark:text-neutral-400">
                      <p className="font-medium">We collect the following categories of personal information from users of the App:</p>
                      
                      <div className="space-y-3">
                        <div className="rounded-lg border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                          <h3 className="font-semibold text-primary">a) Personal Identification Information</h3>
                          <ul className="mt-2 list-disc pl-6 space-y-1">
                            <li>Full name</li>
                            <li>Email address</li>
                          </ul>
                        </div>

                        <div className="rounded-lg border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                          <h3 className="font-semibold text-primary">b) Contact Information</h3>
                          <ul className="mt-2 list-disc pl-6 space-y-1">
                            <li>Phone number</li>
                          </ul>
                        </div>

                        <div className="rounded-lg border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                          <h3 className="font-semibold text-primary">c) Location Data</h3>
                          <ul className="mt-2 list-disc pl-6 space-y-1">
                            <li>Approximate or precise geographic location (with your permission) to enable location-based booking services such as finding nearby transport, hotels, or events</li>
                            <li className="text-sm text-neutral-500">You may disable location access at any time through your device settings; however, certain features may be limited as a result</li>
                          </ul>
                        </div>

                        <div className="rounded-lg border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                          <h3 className="font-semibold text-primary">d) Automatically Collected Information</h3>
                          <ul className="mt-2 list-disc pl-6 space-y-1">
                            <li>Device type, operating system, and unique device identifiers</li>
                            <li>App usage data, crash logs, and performance diagnostics</li>
                            <li>IP address and general network information</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">2. How We Use Your Information</h2>
                    <div className="mt-3 text-neutral-600 dark:text-neutral-400">
                      <p className="font-medium">We use the information we collect to:</p>
                      <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li>Create and manage your TiTO account</li>
                        <li>Process bookings, reservations, and transactions</li>
                        <li>Send booking confirmations, receipts, and important service notifications</li>
                        <li>Provide location-based features such as nearby services and route suggestions</li>
                        <li>Improve the App&apos;s features, performance, and user experience</li>
                        <li>Respond to your inquiries and provide customer support</li>
                        <li>Comply with applicable legal and regulatory obligations</li>
                        <li>Detect and prevent fraudulent or unauthorised activity</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">3. Sharing of Your Information</h2>
                    <div className="mt-3 text-neutral-600 dark:text-neutral-400">
                      <p className="font-medium">We do not sell your personal information. We may share your data in the following limited circumstances:</p>
                      <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-semibold">Service Providers:</span> Third-party vendors who assist us in operating the App (e.g. cloud hosting, payment processing, SMS/notification services) under strict confidentiality obligations.
                        </li>
                        <li>
                          <span className="font-semibold">Business Partners:</span> Hotels, transport operators, event organisers, and other businesses listed on TiTO, solely to fulfil your booking requests.
                        </li>
                        <li>
                          <span className="font-semibold">Legal Compliance:</span> Where required by law, court order, or government authority.
                        </li>
                        <li>
                          <span className="font-semibold">Business Transfers:</span> In connection with a merger, acquisition, or sale of assets, with appropriate notice to you.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <Server className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">4. Data Retention</h2>
                    <div className="mt-3 text-neutral-600 dark:text-neutral-400">
                      <p>
                        We retain your personal information for as long as your account is active or as necessary to 
                        provide you with our services. You may request deletion of your account and associated data at 
                        any time by contacting us at <a href="mailto:info@titobookings.com" className="text-primary hover:underline">info@titobookings.com</a>. 
                        We may retain certain information where required by law or for legitimate business purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <Eye className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">5. Your Rights</h2>
                    <div className="mt-3 text-neutral-600 dark:text-neutral-400">
                      <p className="font-medium">Depending on your jurisdiction, you may have the right to:</p>
                      <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li>Access the personal information we hold about you</li>
                        <li>Request correction of inaccurate or incomplete data</li>
                        <li>Request deletion of your personal data</li>
                        <li>Withdraw consent for location access or marketing communications at any time</li>
                        <li>Lodge a complaint with a relevant data protection authority</li>
                      </ul>
                      <p className="mt-4">
                        To exercise any of these rights, contact us at{' '}
                        <a href="mailto:info@titobookings.com" className="text-primary hover:underline">info@titobookings.com</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <Info className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">6. Children&apos;s Privacy</h2>
                    <div className="mt-3 text-neutral-600 dark:text-neutral-400">
                      <p>
                        TiTO is not directed at children under the age of 13. We do not knowingly collect personal 
                        information from children under 13. If we become aware that a child under 13 has provided us 
                        with personal information, we will take immediate steps to delete such information. If you 
                        believe we may have inadvertently collected information from a child, please contact us 
                        immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">7. Security</h2>
                    <div className="mt-3 text-neutral-600 dark:text-neutral-400">
                      <p>
                        We implement industry-standard technical and organisational measures to protect your personal 
                        information against unauthorised access, loss, alteration, or disclosure. These include encrypted 
                        data transmission (HTTPS/TLS), access controls, and regular security reviews. However, no method 
                        of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee 
                        absolute security.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">8. Third-Party Links and Services</h2>
                    <div className="mt-3 text-neutral-600 dark:text-neutral-400">
                      <p>
                        The App may contain links to third-party websites or integrate with third-party services (e.g. 
                        payment gateways, map services). We are not responsible for the privacy practices of those 
                        third parties. We encourage you to review their privacy policies before providing any personal 
                        information.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9 */}
              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">9. Changes to This Privacy Policy</h2>
                    <div className="mt-3 text-neutral-600 dark:text-neutral-400">
                      <p>
                        We may update this Privacy Policy from time to time to reflect changes in our practices or 
                        applicable law. When we make material changes, we will notify you through the App or by email. 
                        Your continued use of the App after the effective date of any update constitutes your acceptance 
                        of the revised policy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10 */}
              <section>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">10. Contact Us</h2>
                    <div className="mt-3 space-y-4 text-neutral-600 dark:text-neutral-400">
                      <p>
                        If you have any questions, concerns, or requests regarding this Privacy Policy, please 
                        contact us:
                      </p>
                      <div className="rounded-lg border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                        <p className="font-semibold">TiTO Bookings</p>
                        <p>Parkview, Chalala 9th Avenue, Lusaka, Zambia</p>
                        <p>
                          <a href="mailto:info@titobookings.com" className="text-primary hover:underline">info@titobookings.com</a>
                        </p>
                        <p>
                          <a href="tel:+260963296682" className="text-primary hover:underline">+260 963 296 682</a>
                        </p>
                        <p>
                          <a href="https://titobookings.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://titobookings.com</a>
                        </p>
                      </div>
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