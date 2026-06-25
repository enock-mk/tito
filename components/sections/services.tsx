import Link from "next/link"
import { services } from "@/types/information";

export const Services = () => {
  return (
    <section id="services" className="relative px-6 pb-20 sm:pb-24">
              <div className="mx-auto max-w-6xl">
                <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-yellow-600">Services</p>
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
                      <div className="flex h-full flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-yellow-300 hover:shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)] dark:border-slate-700 dark:bg-slate-900">
                        <div>
                          <div className={`inline-flex rounded-3xl bg-gradient-to-br ${service.accent} p-4 text-3xl text-white shadow-md shadow-slate-200/50`}>
                            {service.icon}
                          </div>
                          <h3 className="mt-8 text-2xl font-semibold text-slate-950 dark:text-white">{service.name}</h3>
                          <p className="mt-3 text-slate-600 dark:text-slate-400">{service.description}</p>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-yellow-600 transition group-hover:text-yellow-700">
                          <span>Explore</span>
                          <span aria-hidden="true">→</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
  )
}
