'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const services = [
  {
    id: 'buses',
    name: 'Bus Tickets',
    icon: '🚌',
    description: 'Sell bus tickets with real-time booking',
    accent: 'from-blue-500 to-blue-600'
  },
  {
    id: 'hotels',
    name: 'Hotel Bookings',
    icon: '🏨',
    description: 'Manage hotel reservations easily',
    accent: 'from-violet-500 to-violet-600'
  },
  {
    id: 'movies',
    name: 'Movie Tickets',
    icon: '🎬',
    description: 'Offer cinema tickets to customers',
    accent: 'from-rose-500 to-rose-600'
  },
  {
    id: 'flights',
    name: 'Flight Bookings',
    icon: '✈️',
    description: 'Integrate flight reservations',
    accent: 'from-sky-500 to-sky-600'
  },
  {
    id: 'events',
    name: 'Event Tickets',
    icon: '🎪',
    description: 'Sell tickets for concerts and events',
    accent: 'from-pink-500 to-pink-600'
  },
  {
    id: 'restaurants',
    name: 'Restaurant Bookings',
    icon: '🍽️',
    description: 'Manage restaurant reservations',
    accent: 'from-orange-500 to-orange-600'
  }
];

const featureList = [
  { title: 'Easy Integration', description: 'Quick API setup for any business' },
  { title: 'Multi-Service', description: 'Support for dozens of ticket types' },
  { title: 'Secure Payments', description: 'PCI-DSS compliant payment processing' },
  { title: 'Real-time Analytics', description: 'Dashboard with actionable insights' },
  { title: 'White-label', description: 'Customize for your brand' },
  { title: '24/7 Support', description: 'Dedicated customer support team' },
  { title: 'Mobile App', description: 'Available on iOS and Android' },
  { title: 'Scalable', description: 'Handles millions of transactions' }
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('tito-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = storedTheme ? storedTheme === 'dark' : prefersDark;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(initial);
    // mark client mount to avoid rendering text that may mismatch on hydration
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem('tito-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((current) => !current);
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_45%)]" />
      <div className="pointer-events-none absolute right-0 top-64 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.16),_transparent_60%)]" />

      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Tito
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-6 md:flex">
              <a href="#services" className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Services
              </a>
              <a href="#download" className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Download
              </a>
              <a href="#contact" className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Contact
              </a>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              aria-pressed={isDark}
              className="inline-flex min-w-[140px] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              {mounted ? (isDark ? '☀️ Light' : '🌙 Dark') : (isDark ? '☀️' : '🌙')}
            </button>
            <Link href="#contact" className="rounded-full border border-blue-600 bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
              For Businesses
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative overflow-hidden px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                  Trusted by transport & hospitality teams
                </span>
                <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                  Build the ticketing experience your customers expect.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
                  Tito brings bookings, payments, analytics, and customer journeys together in one modern platform for buses, hotels, events, flights, and restaurants.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
                    Start free trial
                  </Link>
                  <Link href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800">
                    Schedule demo
                  </Link>
                </div>
                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">
                    <p className="text-3xl font-semibold text-slate-900 dark:text-white">24/7</p>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Support for every business</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">
                    <p className="text-3xl font-semibold text-slate-900 dark:text-white">200+</p>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Integrated ticketing workflows</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">
                    <p className="text-3xl font-semibold text-slate-900 dark:text-white">Fast</p>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Deploy in minutes, scale with confidence</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.35)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/90 sm:p-10">
                  <div className="grid gap-6">
                    <div className="flex items-center justify-between rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Platform overview</p>
                        <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Booking dashboard</p>
                      </div>
                      <div className="rounded-3xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white">Live</div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl bg-slate-950/95 p-5 text-white">
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Revenue</p>
                        <p className="mt-4 text-3xl font-semibold">$1.2M</p>
                        <p className="mt-2 text-sm text-slate-300">This month</p>
                      </div>
                      <div className="rounded-3xl bg-slate-950/95 p-5 text-white">
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Bookings</p>
                        <p className="mt-4 text-3xl font-semibold">14.8K</p>
                        <p className="mt-2 text-sm text-slate-300">Confirmed tickets</p>
                      </div>
                    </div>
                    <div className="rounded-3xl bg-slate-100 p-5 dark:bg-slate-900">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Customer rating</p>
                      <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">4.9 / 5</p>
                      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Highly rated by operators and travelers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="relative px-6 pb-20 sm:pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-600">Services</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                One platform for every ticketed journey.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                From bus routes to movie nights, Tito gives your team a unified control center and customers a seamless booking experience.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link key={service.id} href={`/services/${service.id}`} className="group">
                  <div className="flex h-full flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)] dark:border-slate-700 dark:bg-slate-900">
                    <div>
                      <div className={`inline-flex rounded-3xl bg-gradient-to-br ${service.accent} p-4 text-3xl text-white shadow-md shadow-slate-200/50`}>
                        {service.icon}
                      </div>
                      <h3 className="mt-8 text-2xl font-semibold text-slate-950 dark:text-white">{service.name}</h3>
                      <p className="mt-3 text-slate-600 dark:text-slate-400">{service.description}</p>
                    </div>
                    <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:text-blue-700">
                      <span>Explore</span>
                      <span aria-hidden="true">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-300">Capabilities</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Everything you need to run modern ticketing operations.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
              A flexible platform designed for customer-facing sales, operator workflows, analytics, and enterprise-grade security.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featureList.map((feature) => (
                <div key={feature.title} className="rounded-3xl bg-slate-800/80 p-6 ring-1 ring-white/10 backdrop-blur-md">
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="px-6 py-20 sm:py-24 bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1.25fr_0.8fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-600 dark:text-blue-400">Download</p>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Apps and dashboard built for every user.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
                  Give customers easy access to bookings while your team manages operations from a one-stop dashboard.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Mobile first</p>
                    <p className="mt-3 text-xl font-semibold dark:text-white">Designed for customers on the go</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Enterprise ready</p>
                    <p className="mt-3 text-xl font-semibold dark:text-white">Manage bookings, users, and reporting in one place</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-3xl text-white dark:bg-slate-100 dark:text-slate-950">
                    📱
                  </div>
                  <h3 className="mt-6 text-xl font-semibold dark:text-white">Customer App</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Book tickets quickly from mobile.</p>
                  <div className="mt-6 space-y-3">
                    <a href="#" className="block rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">
                      App Store
                    </a>
                    <a href="#" className="block rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                      Google Play
                    </a>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 text-3xl text-white">
                    💼
                  </div>
                  <h3 className="mt-6 text-xl font-semibold dark:text-white">Business Portal</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Monitor sales, inventory, and customer activity.</p>
                  <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Request access
                  </a>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900 text-3xl text-white dark:bg-slate-100 dark:text-slate-900">
                    ⚙️
                  </div>
                  <h3 className="mt-6 text-xl font-semibold dark:text-white">Developer API</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Connect with your existing systems and partners.</p>
                  <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800">
                    Talk to sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20 sm:py-24 bg-slate-950 text-white">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-400">Contact</p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Let us help you launch faster.
              </h2>
              <p className="max-w-xl text-base leading-8 text-slate-300">
                Share your requirements and one of our team members will reach out with a tailored recommendation, pricing, and onboarding plan.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Email</p>
                  <p className="mt-4 text-base text-slate-100">hello@tito.com</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Response time</p>
                  <p className="mt-4 text-base text-slate-100">Typically within 1 business day</p>
                </div>
              </div>
            </div>

            <form className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
              <div className="grid gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-200">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-200">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    placeholder="Tell us about your project"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="bg-blue-600 px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-200">Get started</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Launch a modern ticketing experience in minutes.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100">
              Build trust with your audience, automate operations, and capture more bookings with a platform designed for scale.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/" className="inline-flex rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-600 transition hover:bg-slate-100">
                Start a free trial
              </Link>
              <Link href="/" className="inline-flex rounded-full border border-white/90 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20">
                Talk to sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-12 text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">Tito</p>
              <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600 dark:text-slate-400">
                Universal ticket booking platform for modern operators and teams.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Product</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Company</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Legal</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <p>&copy; 2026 Tito. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
