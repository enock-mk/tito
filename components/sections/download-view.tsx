
export const Downloads = () => {
  return (
    <section id="download" className="px-6 py-20 sm:py-24 bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1.25fr_0.8fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-yellow-600 dark:text-yellow-400">Download</p>
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

              <div className="grid gap-6 sm:grid-cols-1 xl:grid-cols-1">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-3xl text-white dark:bg-slate-100 dark:text-slate-950">
                    📱
                  </div>
                  <h3 className="mt-6 text-xl font-semibold dark:text-white">Customer App</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Book tickets quickly from mobile.</p>
                  <div className="mt-6 space-y-3">
                    <a href="#" className="block rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-yellow-600 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">
                      App Store
                    </a>
                    <a href="#" className="block rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                      Google Play
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
