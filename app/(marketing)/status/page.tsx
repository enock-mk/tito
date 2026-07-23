// app/(marketing)/status/page.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { CTASection } from '@/components/sections/CTASection';
import { RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  uptime: string;
  lastIncident: string;
}

export default function StatusPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('Loading...');

  // Update time in a single effect without causing cascading renders
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    // Update time immediately
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleString());
    };
    
    updateTime();

    // Update time every minute
    const interval = setInterval(updateTime, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const services: ServiceStatus[] = [
    { name: 'Platform API', status: 'operational', uptime: '99.99%', lastIncident: 'None in 30 days' },
    { name: 'Booking Engine', status: 'operational', uptime: '99.95%', lastIncident: 'None in 15 days' },
    { name: 'Payment Processing', status: 'operational', uptime: '99.98%', lastIncident: 'None in 45 days' },
    { name: 'Mobile Apps', status: 'operational', uptime: '99.92%', lastIncident: 'None in 10 days' },
    { name: 'Analytics Dashboard', status: 'operational', uptime: '99.90%', lastIncident: 'None in 7 days' },
    { name: 'Customer Support', status: 'operational', uptime: '99.97%', lastIncident: 'None in 60 days' },
  ];

  const incidents = [
    { date: '2026-06-10', title: 'API Latency Issue', status: 'resolved', duration: '12 minutes' },
    { date: '2026-06-01', title: 'Payment Gateway Interruption', status: 'resolved', duration: '8 minutes' },
    { date: '2026-05-20', title: 'Mobile App Sync Delays', status: 'resolved', duration: '15 minutes' },
  ];

  const getStatusColor = (status: ServiceStatus['status']) => {
    const colors = {
      operational: 'bg-green-500',
      degraded: 'bg-yellow-500',
      outage: 'bg-red-500',
      maintenance: 'bg-blue-500',
    };
    return colors[status];
  };

  const getStatusText = (status: ServiceStatus['status']) => {
    const texts = {
      operational: 'Operational',
      degraded: 'Degraded',
      outage: 'Outage',
      maintenance: 'Maintenance',
    };
    return texts[status];
  };

  const getIncidentStatusColor = (status: string) => {
    return status === 'resolved' ? 'bg-green-500' : 'bg-yellow-500';
  };

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    setCurrentTime(new Date().toLocaleString());
    setTimeout(() => setIsRefreshing(false), 1000);
  }, []);

  return (
    <>
      <PageHeader
        title="System Status"
        description="Check the current status of TiTO platform services and view historical uptime information."
        badge="Live"
        variant="centered"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Overview */}
            <div className="mb-8 rounded-2xl border bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-3 w-3">
                    <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div>
                    <span className="font-semibold">All Systems Operational</span>
                    <p className="text-sm text-neutral-500" suppressHydrationWarning>
                      Last checked: {currentTime}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleRefresh}
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                >
                  <RefreshCw className={cn('h-4 w-4', isRefreshing && 'animate-spin')} />
                  {isRefreshing ? 'Refreshing...' : 'Refresh'}
                </button>
              </div>
            </div>

            {/* Services Status */}
            <h2 className="mb-4 text-xl font-bold">Service Status</h2>
            <div className="mb-12 space-y-3">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="flex flex-col gap-2 rounded-lg border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className={cn('h-2.5 w-2.5 rounded-full', getStatusColor(service.status))} />
                    <span className="font-medium">{service.name}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="text-neutral-500">
                      <span className="font-medium text-green-600 dark:text-green-400">{service.uptime}</span> uptime
                    </span>
                    <span className="text-neutral-500">
                      Last incident: <span className="text-neutral-700 dark:text-neutral-300">{service.lastIncident}</span>
                    </span>
                    <span className={cn(
                      'rounded-full px-2.5 py-1 text-xs font-medium',
                      service.status === 'operational' && 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
                      service.status === 'degraded' && 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
                      service.status === 'outage' && 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
                      service.status === 'maintenance' && 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
                    )}>
                      {getStatusText(service.status)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Uptime Stats */}
            <div className="mb-12">
              <h2 className="mb-4 text-xl font-bold">Uptime History</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: 'Last 24 Hours', value: '100%' },
                  { label: 'Last 7 Days', value: '99.99%' },
                  { label: 'Last 30 Days', value: '99.97%' },
                  { label: 'Last 90 Days', value: '99.95%' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg border bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="mt-1 text-sm text-neutral-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Incidents */}
            <h2 className="mb-4 text-xl font-bold">Past Incidents</h2>
            <div className="space-y-3">
              {incidents.map((incident) => (
                <div
                  key={incident.date}
                  className="flex flex-col gap-2 rounded-lg border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className={cn('h-2.5 w-2.5 rounded-full', getIncidentStatusColor(incident.status))} />
                    <div>
                      <span className="font-medium">{incident.title}</span>
                      <p className="text-sm text-neutral-500">{incident.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-neutral-500">Duration: {incident.duration}</span>
                    <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                      {incident.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Subscribe */}
            <div className="mt-12 rounded-2xl border bg-gradient-to-br from-primary/5 to-primary/10 p-6 text-center dark:border-neutral-800">
              <h3 className="text-lg font-bold">Stay Updated</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Subscribe to receive real-time status updates via email or webhook.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <button className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-white transition hover:bg-primary/90">
                  Subscribe via Email
                </button>
                <button className="rounded-full border px-6 py-2 text-sm font-medium transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  Webhook Integration
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}