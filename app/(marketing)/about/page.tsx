// app/(marketing)/about/page.tsx
import { PageHeader } from '@/components/shared/PageHeader';
import { CTASection } from '@/components/sections/CTASection';
import { SlideIn } from '@/components/animations/SlideIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { 
  CheckCircle2, 
  Rocket, 
  Eye, 
  Heart, 
  Shield, 
  Zap, 
  Users, 
  Award,
  Target,
  Lightbulb,
  Handshake,
  TrendingUp,
  Globe,
  Sparkles,
  Clock,
  Star
} from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'About TiTO | Modern Booking & Management Platform',
  description: 'Learn more about TiTO, our mission, vision, and values. Discover the platform powering modern booking businesses across hospitality, transport, events, and more.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Customer Focus',
      description: 'We prioritize your success and work tirelessly to deliver solutions that solve real business challenges.',
      icon: Heart,
      gradient: 'from-rose-500 to-rose-600',
    },
    {
      title: 'Innovation',
      description: 'We continuously evolve our platform with cutting-edge technology and industry best practices.',
      icon: Lightbulb,
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency and honesty in all our business relationships and transactions.',
      icon: Shield,
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      title: 'Reliability',
      description: 'You can trust TiTO to deliver consistent, dependable service and support when you need it.',
      icon: Clock,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Efficiency',
      description: 'We streamline operations to help you reduce costs, save time, and maximize productivity.',
      icon: Zap,
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Accessibility',
      description: 'We build inclusive solutions that work for businesses of all sizes and technical levels.',
      icon: Globe,
      gradient: 'from-purple-500 to-purple-600',
    },
  ];

  const stats = [
    { value: '120+', label: 'Active Partners', icon: Users },
    { value: '5000+', label: 'Bookings Processed', icon: TrendingUp },
    { value: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { value: '24/7', label: 'Support Availability', icon: Clock },
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Former hospitality executive with 15+ years of experience.',
      avatar: '/avatars/sarah.jpg',
    },
    {
      name: 'Michael Okonkwo',
      role: 'CTO & Co-Founder',
      bio: 'Tech leader with a passion for scalable solutions.',
      avatar: '/avatars/michael.jpg',
    },
    {
      name: 'Amara Okafor',
      role: 'Head of Product',
      bio: 'Product strategist focused on user-centric design.',
      avatar: '/avatars/amara.jpg',
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: 'TiTO Founded',
      description: 'Started with a vision to transform booking management.',
      icon: Rocket,
    },
    {
      year: '2021',
      title: 'First 50 Partners',
      description: 'Grew our partner network across multiple industries.',
      icon: Users,
    },
    {
      year: '2022',
      title: 'Platform Launch',
      description: 'Launched the full TiTO platform with all features.',
      icon: Sparkles,
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded to serve businesses in 20+ countries.',
      icon: Globe,
    },
    {
      year: '2024',
      title: '100+ Partners',
      description: 'Reached 100+ active partners and 5000+ bookings.',
      icon: Award,
    },
  ];

  return (
    <>
      <PageHeader
        title="About TiTO"
        description="A modern platform for ticketing, hospitality, events, and transport solutions — built to grow with your business."
        badge="Our Story"
        variant="centered"
      />

      {/* Stats Section */}
      {/*<section className="border-b py-12 dark:border-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <SlideIn key={stat.label} delay={index * 0.1}>
                  <div className="flex flex-col items-center rounded-xl border bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900">
                    <Icon className="h-6 w-6 text-primary" />
                    <div className="mt-2 text-2xl font-bold text-primary">{stat.value}</div>
                    <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
                  </div>
                </SlideIn>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Mission */}
              <SlideIn>
                <div className="group relative rounded-2xl border bg-white p-8 transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-primary/10 p-2 text-primary">
                      <Target className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold">Our Mission</h3>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Provide innovative, accessible and dependable booking and support services that empower businesses to operate efficiently and deliver exceptional customer experiences.
                  </p>
                </div>
              </SlideIn>

              {/* Vision */}
              <SlideIn delay={0.2}>
                <div className="group relative rounded-2xl border bg-white p-8 transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-primary/10 p-2 text-primary">
                      <Eye className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold">Our Vision</h3>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Become a trusted leader in digital ticketing, reservations and service coordination, enabling businesses worldwide to thrive in the digital economy.
                  </p>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-y bg-neutral-50/50 py-16 dark:bg-neutral-900/50 md:py-24">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Our Values
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                What Drives Us
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                These core values guide everything we do at TiTO.
              </p>
            </div>
          </SlideIn>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="flex items-start gap-3">
                    <div
                      className={`inline-flex rounded-xl bg-gradient-to-br p-2.5 text-white shadow-lg transition-all duration-300 group-hover:scale-110 ${value.gradient}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{value.title}</h3>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {value.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 -z-10 rounded-2xl border-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Our Journey
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Company Milestones
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                Key moments in TiTO`&apos;`s journey to transform business operations.
              </p>
            </div>
          </SlideIn>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <SlideIn key={milestone.year} delay={index * 0.1}>
                  <div className="group relative rounded-2xl border bg-white p-6 text-center transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="flex flex-col items-center">
                      <div className="rounded-xl bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="mt-3 text-2xl font-bold text-primary">
                        {milestone.year}
                      </div>
                      <h4 className="mt-2 font-semibold">{milestone.title}</h4>
                      <p className="mt-1 text-sm text-neutral-500">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </SlideIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-y bg-neutral-50/50 py-16 dark:bg-neutral-900/50 md:py-24">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Leadership Team
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Meet the Team
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                Passionate people dedicated to building the future of booking management.
              </p>
            </div>
          </SlideIn>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group rounded-2xl border bg-white p-6 text-center transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                  {member.avatar ? (
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-2 text-sm text-neutral-500">{member.bio}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

    </>
  );
}