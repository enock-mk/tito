import { featureList } from "@/types/information"

export const Features = () => {
  return (
    <section className="bg-slate-900 px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-yellow-300">Capabilities</p>
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
  )
}
