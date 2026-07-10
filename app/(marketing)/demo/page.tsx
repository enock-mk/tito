// app/(marketing)/demo/page.tsx
'use client';

import { PageHeader } from '@/components/shared/PageHeader';
import { DemoRequestForm } from '@/components/forms/DemoRequestForm';
import { SlideIn } from '@/components/animations/SlideIn';
import { CTASection } from '@/components/sections/CTASection';
import { CheckCircle, Clock, Users, Calendar, Video, MessageSquare, Headphones } from 'lucide-react';



export default function DemoPage() {
  const demoFeatures = [
    {
      icon: Video,
      title: 'Live Product Walkthrough',
      description: 'See the platform in action with a personalized demo tailored to your business needs.',
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Get expert advice on how TiTO can solve your specific business challenges.',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Choose a time that works for you. We\'re available across multiple time zones.',
    },
    {
      icon: MessageSquare,
      title: 'Q&A Session',
      description: 'Get all your questions answered in real-time by our product experts.',
    },
  ];

  return (
    <>
      <PageHeader
        title="Book a Demo"
        description="See TiTO in action. Schedule a personalized demo with our product experts."
        variant="centered"
        badge="Free Demo"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left: Form */}
            <div>
              <SlideIn>
                <div className="rounded-2xl border bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 md:p-8">
                  <h2 className="text-2xl font-bold">Request Your Demo</h2>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    Fill out the form below and our team will contact you within 24 hours.
                  </p>
                  <div className="mt-6">
                    <DemoRequestForm />
                  </div>
                </div>
              </SlideIn>
            </div>

            {/* Right: Info */}
            <div>
              <SlideIn delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold">What to Expect</h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                      Our demos are tailored to your specific needs and industry.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {demoFeatures.map((feature) => {
                      const Icon = feature.icon;
                      return (
                        <div
                          key={feature.title}
                          className="flex items-start gap-4 rounded-xl border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
                        >
                          <div className="rounded-xl bg-primary/10 p-2 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{feature.title}</h4>
                            <p className="text-sm text-neutral-500">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Trust Indicators */}
                  <div className="rounded-xl border bg-primary/5 p-6 dark:border-neutral-800">
                    <h4 className="font-semibold">Why Book a Demo?</h4>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        See how TiTO works for your industry
                      </li>
                      <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Get personalized recommendations
                      </li>
                      <li className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        No commitment required
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-neutral-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>30-45 minutes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Headphones className="h-4 w-4" />
                      <span>Dedicated expert</span>
                    </div>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="simple" />
    </>
  );
}