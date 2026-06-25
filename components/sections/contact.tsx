
export const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20 sm:py-24 bg-slate-950 text-white">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-yellow-400">Contact</p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Let us help you launch faster.
              </h2>
              <p className="max-w-xl text-base leading-8 text-slate-300">
                Share your requirements and one of our team members will reach out with a tailored recommendation, pricing, and onboarding plan.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-yellow-300">Email</p>
                  <p className="mt-4 text-base text-slate-100">hello@tito.com</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-yellow-300">Response time</p>
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
                    className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/30"
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
                    className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/30"
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
                    className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/30"
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
                    className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/30"
                    placeholder="Tell us about your project"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-yellow-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </section>
  )
}
