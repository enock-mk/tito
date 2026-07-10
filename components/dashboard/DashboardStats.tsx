// components/dashboard/DashboardStats.tsx
'use client';

import { Calendar, Users, CreditCard, TrendingUp } from 'lucide-react';

const stats = [
  {
    label: 'Total Bookings',
    value: '1,234',
    change: '+12%',
    icon: Calendar,
    color: 'blue',
  },
  {
    label: 'Active Partners',
    value: '120',
    change: '+8%',
    icon: Users,
    color: 'green',
  },
  {
    label: 'Revenue',
    value: '$45,678',
    change: '+23%',
    icon: CreditCard,
    color: 'purple',
  },
  {
    label: 'Growth Rate',
    value: '+23%',
    change: '+5%',
    icon: TrendingUp,
    color: 'orange',
  },
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const colorClasses = {
          blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
          green: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
          purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
          orange: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
        };
        
        return (
          <div
            key={stat.label}
            className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="flex items-center justify-between">
              <div className={`rounded-xl ${colorClasses[stat.color as keyof typeof colorClasses]} p-2.5`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-green-500">{stat.change}</span>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-neutral-500">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}