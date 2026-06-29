'use client';

import Link from 'next/link';
import Image from 'next/image';


export const Footer = () => {
    
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-12 text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
                <Link href="/" className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white flex">
                    <Image src="/vercel.svg" alt="Tito" width={20} height={20} />
                    Tito
                </Link>
                <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600 dark:text-slate-400">
                    Book. Ride. Stay. <br />
                    Helping businesses simplify bookings,operations and customer experiences.
                </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Solutions</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#">Event Management</a></li>
                <li><a href="#">Transport Management</a></li>
                <li><a href="#">Hospitality</a></li>
                <li><a href="#">Car Hire</a></li>
                <li><a href="#">Fundraising</a></li>
                <li><a href="#">Custom Solutions</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Platform</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#">Features</a></li>
                <li><a href="#">Analytics</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Intergrations</a></li>
                <li><a href="#">Mobile Apps</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Company</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#">About</a></li>
                <li><a href="#">Partner With Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Industries</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#">Hotels</a></li>
                <li><a href="#">Transport</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Churches</a></li>
                <li><a href="#">NGOs</a></li>
                <li><a href="#">Government</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Resources</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Help Centre</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Downloads</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Contact</p>
              <address>
                <strong>Parkview, Chalala</strong><br/>
                Lusaka, Zambia<br/>
                Phone: <a href="tel:+260971756393">+260 971 756 393</a><br/>
                Email: <a href="mailto:info@titobookings.com">info@titobookings.com</a><br/>
                Mon - Fri<br/>
                8 AM - 5 PM<br/>
            </address>
              
            </div>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <p>&copy; 2026 Tito. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
