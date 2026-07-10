// app/(marketing)/careers/page.tsx
'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { jobOpenings, companyValues } from '@/data/pages';
import { SlideIn } from '@/components/animations/SlideIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { CTASection } from '@/components/sections/CTASection';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Users,
  Rocket,
  Shield,
  Handshake,
  Sparkles,
  Filter,
  X,
} from 'lucide-react';
import Link from 'next/link';


export default function CareersPage() {
  const [filterDepartment, setFilterDepartment] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string | null>(null);

  const departments = ['all', ...new Set(jobOpenings.map((job) => job.department))];
  const types = ['all', ...new Set(jobOpenings.map((job) => job.type))];

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesDepartment = !filterDepartment || job.department === filterDepartment;
    const matchesType = !filterType || job.type === filterType;
    return matchesDepartment && matchesType;
  });

  const getTypeColor = (type: string) => {
    const colors = {
      'full-time': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      'part-time': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      contract: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      internship: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    };
    return colors[type as keyof typeof colors] || 'bg-neutral-100 text-neutral-700';
  };

  return (
    <>
      <PageHeader
        title="Join Our Team"
        description="Help us build the future of booking and management software. We're looking for passionate people to join our remote-first team."
        variant="centered"
        badge="Careers"
      />

      {/* Company Values */}
      <section className="border-b py-12 dark:border-neutral-800">
        <div className="container mx-auto px-4">
          <SlideIn>
            <h2 className="text-center text-2xl font-bold">Our Values</h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-neutral-600 dark:text-neutral-400">
              These are the principles that guide everything we do.
            </p>
          </SlideIn>

          <StaggerContainer className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {companyValues.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-center rounded-xl border bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900"
              >
                <value.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-2 font-semibold">{value.title}</h3>
                <p className="mt-1 text-sm text-neutral-500">{value.description}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SlideIn>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div>
                <h2 className="text-2xl font-bold">Open Positions</h2>
                <p className="text-neutral-500">Join our growing team</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <select
                  value={filterDepartment || ''}
                  onChange={(e) => setFilterDepartment(e.target.value || null)}
                  className="rounded-lg border px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
                >
                  <option value="">All Departments</option>
                  {departments.filter(d => d !== 'all').map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
                <select
                  value={filterType || ''}
                  onChange={(e) => setFilterType(e.target.value || null)}
                  className="rounded-lg border px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
                >
                  <option value="">All Types</option>
                  {types.filter(t => t !== 'all').map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </SlideIn>

          <div className="mt-8 space-y-4">
            {filteredJobs.map((job) => (
              <SlideIn key={job.id}>
                <div className={cn(
                  'rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900',
                  job.featured && 'border-primary/30'
                )}>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        {job.featured && (
                          <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500">
                            <Sparkles className="mr-1 h-3 w-3" />
                            Featured
                          </Badge>
                        )}
                        <Badge className={cn('font-normal', getTypeColor(job.type))}>
                          {job.type.replace('-', ' ')}
                        </Badge>
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          Posted {new Date(job.postedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        {job.salary && (
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {job.salary}
                          </span>
                        )}
                      </div>

                      <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                        {job.description}
                      </p>
                    </div>

                    <Link href={`/careers/${job.id}`}>
                      <Button className="shrink-0">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </SlideIn>
            ))}

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="mx-auto h-12 w-12 text-neutral-300" />
                <h3 className="mt-4 text-lg font-semibold">No Positions Available</h3>
                <p className="text-neutral-500">Check back later for new opportunities.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection variant="simple" />
    </>
  );
}