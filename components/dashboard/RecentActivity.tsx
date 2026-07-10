// components/dashboard/RecentActivity.tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Activity } from '@/data/dashboard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Calendar, 
  CreditCard, 
  Users, 
  Settings, 
  RefreshCw,
  LucideIcon 
} from 'lucide-react';

interface RecentActivityProps {
  activities: Activity[];
  className?: string;
}

export function RecentActivity({ activities, className }: RecentActivityProps) {
  const getActivityIcon = (type: Activity['type']): LucideIcon => {
    const icons = {
      booking: Calendar,
      payment: CreditCard,
      customer: Users,
      system: Settings,
      update: RefreshCw,
    };
    return icons[type];
  };

  const getActivityColor = (type: Activity['type']) => {
    const colors = {
      booking: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
      payment: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
      customer: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
      system: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
      update: 'bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400',
    };
    return colors[type];
  };

  return (
    <div className={cn('space-y-4', className)}>
      {activities.map((activity, index) => {
        const Icon = getActivityIcon(activity.type);

        return (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800"
          >
            <div
              className={cn(
                'flex h-10 w-10 shrink-0 items-center justify-center rounded-full',
                getActivityColor(activity.type)
              )}
            >
              <Icon className="h-5 w-5" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-medium">{activity.user}</span>
                <span className="text-neutral-500 dark:text-neutral-400">
                  {' '}{activity.action}{' '}
                </span>
                <span className="font-medium">{activity.target}</span>
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {activity.time}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.avatar} alt={activity.user} />
                <AvatarFallback className="bg-primary/10 text-xs text-primary">
                  {activity.user
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}