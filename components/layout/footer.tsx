'use client';

import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Logo } from '../shared/Logo';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-50">
      <div className="border-b border-slate-800 py-16">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] xl:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-primary">Ready to grow your business?</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Join hundreds of operators using TiTO to simplify bookings and operations.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <Link href="/partner" className="w-full sm:w-auto">
              <button className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 sm:w-auto">
                Become a Partner
              </button>
            </Link>
            <Link href="/book-demo" className="w-full sm:w-auto">
              <button className="inline-flex w-full items-center justify-center rounded-lg border border-slate-700 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 sm:w-auto">
                Book Demo
              </button>
            </Link>
          </div>
        </Container>
      </div>

      <div className="border-b border-slate-800 py-16">
        <Container className="grid gap-10 md:grid-cols-2 xl:grid-cols-6">
          <div className="xl:col-span-2">
            <Logo variant='light'/>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
              Book. Ride. Stay.
              <br />
              Helping businesses simplify bookings, operations and customer experiences.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
              <span>Follow us</span>
              <div className="flex gap-3">
                <a href="#" className="transition hover:text-white">LinkedIn</a>
                <a href="#" className="transition hover:text-white">Twitter</a>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Solutions</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li><Link href="/solutions/events">Event Management</Link></li>
              <li><Link href="/solutions/transport">Transport Management</Link></li>
              <li><Link href="/solutions/hospitality">Hospitality</Link></li>
              <li><Link href="/solutions/car-hire">Car Hire</Link></li>
              <li><Link href="/solutions/fundraising">Fundraising</Link></li>
              <li><Link href="/solutions/custom">Custom Solutions</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white">Platform</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li><Link href="/platform/features">Features</Link></li>
              <li><Link href="/platform/analytics">Analytics</Link></li>
              <li><Link href="/platform/security">Security</Link></li>
              <li><Link href="/platform/integrations">Integrations</Link></li>
              <li><Link href="/platform/mobile">Mobile Apps</Link></li>
              <li><Link href="/platform/pricing">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white">Industries</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li><Link href="/industries/hotels">Hotels</Link></li>
              <li><Link href="/industries/transport">Transport</Link></li>
              <li><Link href="/industries/events">Events</Link></li>
              <li><Link href="/industries/churches">Churches</Link></li>
              <li><Link href="/industries/ngos">NGOs</Link></li>
              <li><Link href="/industries/government">Government</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white">Resources</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/help">Help Centre</Link></li>
              <li><Link href="/documentation">Documentation</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/downloads">Downloads</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white">Company</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/partners">Partner With Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white">Contact</p>
            <address className="mt-5 not-italic text-sm leading-7 text-slate-400">
              <span className="font-semibold text-slate-200">Parkview, Chalala</span>
              <br />
              Lusaka, Zambia
              <br />
              <a href="mailto:info@titobookings.com" className="text-slate-300 hover:text-white">info@titobookings.com</a>
              <br />
              <a href="tel:+260971756393" className="text-slate-300 hover:text-white">+260 971 756 393</a>
              <br />
              Mon - Fri
              <br />
              8 AM - 5 PM
            </address>
          </div>
        </Container>
      </div>

      <Container className="py-8">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 TiTO.</p>
          <p>Book. Ride. Stay.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms</Link>
            <Link href="/cookies" className="transition hover:text-white">Cookies</Link>
            <Link href="/accessibility" className="transition hover:text-white">Accessibility</Link>
            <Link href="/status" className="transition hover:text-white">Status</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
