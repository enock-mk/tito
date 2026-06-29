import Link from "next/link"


export const Getstarted = () => {
  return (
    <section className="bg-yellow-600 px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-yellow-200">Get started</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to grow your business?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-yellow-100">
              Join hundreds of operators using TiTO to simplify bookings and operations.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/" className="inline-flex rounded-full bg-white px-8 py-3 text-base font-semibold text-yellow-600 transition hover:bg-slate-100">
                Become a Partner
              </Link>
              <Link href="/" className="inline-flex rounded-full border border-white/90 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20">
                Book Demo
              </Link>
            </div>
          </div>
        </section>
  )
}
