// components/sections/WorkflowWithStats.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { workflowSteps } from '@/data/workflow';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight, Clock, Users, DollarSign } from 'lucide-react';

export function WorkflowWithStats() {
  const [activeStep, setActiveStep] = useState(0);

  const stats = [
    { icon: Clock, label: 'Average Setup', value: '15 min' },
    { icon: Users, label: 'Active Partners', value: '120+' },
    { icon: DollarSign, label: 'Revenue Growth', value: '+40%' },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50/50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Steps */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Your journey to{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                success
              </span>
            </h2>
            <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
              Follow our proven process to get started and grow your business.
            </p>

            <div className="mt-8 space-y-4">
              {workflowSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`
                    group relative flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300
                    ${
                      index === activeStep
                        ? 'border-primary bg-primary/5 shadow-lg'
                        : 'bg-white hover:shadow-md dark:bg-neutral-900'
                    }
                  `}
                >
                  <div
                    className={`
                      flex h-10 w-10 shrink-0 items-center justify-center rounded-lg
                      ${
                        index === activeStep
                          ? 'bg-primary text-white'
                          : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800'
                      }
                    `}
                  >
                    {index === activeStep ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-bold">{index + 1}</span>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-neutral-500">
                      {step.stats}
                    </p>
                  </div>

                  <ChevronRight
                    className={`
                      h-5 w-5 transition-transform
                      ${index === activeStep ? 'translate-x-1 text-primary' : 'text-neutral-400'}
                    `}
                  />
                </button>
              ))}
            </div>

            {/* Stats */}
            {/*<div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white p-4 text-center shadow-sm dark:bg-neutral-900"
                >
                  <stat.icon className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-1 text-lg font-bold">{stat.value}</p>
                  <p className="text-xs text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right: Active Step Details */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="sticky top-24 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent p-8"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`
                      flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg
                      ${workflowSteps[activeStep].gradient}
                    `}
                  >
                    {(() => {
                      const Icon = workflowSteps[activeStep].icon;
                      return <Icon className="h-7 w-7" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {workflowSteps[activeStep].title}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      Step {activeStep + 1} of {workflowSteps.length}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                  {workflowSteps[activeStep].description}
                </p>

                {workflowSteps[activeStep].details && (
                  <ul className="mt-4 space-y-2">
                    {workflowSteps[activeStep].details?.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 flex gap-3">
                  <Button
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    variant="outline"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() =>
                      setActiveStep(Math.min(workflowSteps.length - 1, activeStep + 1))
                    }
                    disabled={activeStep === workflowSteps.length - 1}
                  >
                    Next Step
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}