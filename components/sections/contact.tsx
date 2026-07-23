// components/sections/Contact.tsx (Simple version)
'use client';

import { useState } from 'react';
import { SlideIn } from '@/components/animations/SlideIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Clock, 
  Phone, 
  MapPin, 
  MessageSquare,
  Sparkles,
  Send,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@titobookings.com',
      href: 'mailto:info@titobookings.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Typically within a Minute',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+260 963296682',
      href: 'tel:+260963296682',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Parkview, Chalala 9th Avenue, Lusaka, Zambia',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <SlideIn>
              <Badge className="inline-flex items-center px-4 py-1 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20">
                Contact
              </Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Let us help you{' '}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  launch faster
                </span>
              </h2>
              <p className="max-w-xl text-lg text-neutral-300">
                Share your requirements and one of our team members will reach out with a tailored recommendation, pricing, and onboarding plan.
              </p>
            </SlideIn>

            {/* Contact Info Grid */}
            <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: index * 0.1 },
                      },
                    }}
                    className="group relative rounded-2xl bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 ring-1 ring-white/10"
                  >
                    <div
                      className={`inline-flex rounded-xl bg-gradient-to-br p-2.5 text-white shadow-lg transition-all duration-300 group-hover:scale-110 ${info.color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-sm font-medium text-neutral-400">
                      {info.title}
                    </p>
                    {info.href ? (
                      <Link
                        href={info.href}
                        className="mt-1 block text-base font-semibold text-white transition-colors hover:text-primary"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <p className="mt-1 text-base font-semibold text-white">
                        {info.value}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Right Column - Form */}
          <SlideIn delay={0.2}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Send us a message</h3>
                <p className="text-sm text-neutral-400">
                  We`&apos;`ll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-neutral-500 focus:border-primary"
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-neutral-500 focus:border-primary"
                    placeholder="you@example.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-300">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-neutral-500 focus:border-primary"
                    placeholder="Your company name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-neutral-500 focus:border-primary resize-none"
                    placeholder="Tell us about your project..."
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl bg-green-500/10 p-4 text-center text-green-400"
                  >
                    <CheckCircle2 className="mx-auto h-8 w-8 mb-2" />
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm text-green-400/80">We`&apos;`ll contact you shortly.</p>
                  </motion.div>
                )}
              </form>

              <p className="mt-4 text-center text-xs text-neutral-500">
                By submitting this form, you agree to our{' '}
                <Link href="/legal/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}