import Link from "next/link"


export const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                  Modern Booking & Management Platform
                </span>
                <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                  Book. Ride. Stay.
                </h1>
                <p className="mt-4 text-xl font-semibold text-main-yellow-600">
                  Modern Booking & Management Software for Travel, Hospitality, Events and Mobility.
                </p>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
                  One platform that helps businesses manage bookings, customers, payments and operations while giving customers a seamless booking experience.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-main-yellow-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-main-yellow-600/20 transition hover:bg-main-yellow-700">
                    Become a Partner
                  </Link>
                  <Link href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800">
                    Book a Demo
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
                      <div className="rounded-3xl bg-main-yellow-600 px-3 py-2 text-sm font-semibold text-white">Live</div>
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

  )
}
