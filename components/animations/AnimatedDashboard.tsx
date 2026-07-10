// components/animations/AnimatedDashboard.tsx
'use client';

import { motion } from 'framer-motion';
import {
  Calendar,
  CreditCard,
  BarChart3,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';

export function AnimatedDashboard() {
  const floatingCards = [
    { 
      icon: Calendar, 
      label: 'Bookings', 
      value: '1,234', 
      change: '+12%',
      trend: 'up',
      color: 'blue' 
    },
    { 
      icon: CreditCard, 
      label: 'Revenue', 
      value: '$45,678', 
      change: '+8%',
      trend: 'up',
      color: 'green' 
    },
    { 
      icon: Users, 
      label: 'Customers', 
      value: '892', 
      change: '+23%',
      trend: 'up',
      color: 'purple' 
    },
    { 
      icon: TrendingUp, 
      label: 'Growth', 
      value: '+23%', 
      change: '+5%',
      trend: 'up',
      color: 'orange' 
    },
  ];

  const activities = [
    { 
      label: 'New booking from Hotel Grande', 
      time: '2 min ago', 
      type: 'success',
      amount: '$245.00'
    },
    { 
      label: 'Payment received from Event Co', 
      time: '15 min ago', 
      type: 'success',
      amount: '$1,200.00'
    },
    { 
      label: 'New customer registered', 
      time: '1 hour ago', 
      type: 'info',
      amount: '-'
    },
    { 
      label: 'Bus #42 route updated', 
      time: '2 hours ago', 
      type: 'warning',
      amount: '-'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full max-w-2xl"
    >
      <div className="relative rounded-2xl border bg-white p-6 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between border-b pb-4 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-primary/10 p-1.5 text-primary">
              <BarChart3 className="h-full w-full" />
            </div>
            <div>
              <h3 className="font-semibold">TiTO Dashboard</h3>
              <p className="text-xs text-neutral-500">Real-time overview</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="h-2 w-2 rounded-full bg-green-500">
                <div className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75" />
              </div>
            </div>
            <span className="text-xs text-neutral-500">Live</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {floatingCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg bg-neutral-50 p-3 dark:bg-neutral-800"
            >
              <div className="flex items-center justify-between">
                <div className={`rounded-lg bg-${card.color}-100 p-1.5 text-${card.color}-600`}>
                  <card.icon className="h-3 w-3" />
                </div>
                {card.trend === 'up' ? (
                  <ArrowUp className="h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDown className="h-3 w-3 text-red-500" />
                )}
              </div>
              <p className="mt-1 text-lg font-semibold">{card.value}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-500">{card.label}</span>
                <span className="text-xs font-medium text-green-500">
                  {card.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chart Area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Weekly Bookings</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-500">Last 7 days</span>
              <span className="text-xs font-medium text-green-500">↑ 23%</span>
            </div>
          </div>
          <div className="mt-3 flex h-20 items-end gap-2">
            {[65, 45, 80, 90, 60, 75, 85].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.6 + index * 0.05, duration: 0.5 }}
                className="relative flex-1 rounded-t bg-primary/80 hover:bg-primary"
              >
                <motion.div
                  className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100"
                >
                  {height}%
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Recent Activity</span>
            <button className="text-xs text-primary hover:underline">
              View all
            </button>
          </div>
          <div className="space-y-2">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-2 rounded-lg bg-neutral-50 p-2 text-sm dark:bg-neutral-800"
              >
                {activity.type === 'success' && (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                )}
                {activity.type === 'info' && (
                  <AlertCircle className="h-4 w-4 text-blue-500" />
                )}
                {activity.type === 'warning' && (
                  <AlertCircle className="h-4 w-4 text-main-yellow-500" />
                )}
                <span className="flex-1 truncate">{activity.label}</span>
                {activity.amount !== '-' && (
                  <span className="text-xs font-medium text-green-500">
                    {activity.amount}
                  </span>
                )}
                <span className="text-xs text-neutral-400">{activity.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -right-4 -top-4 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-3 text-white shadow-lg"
      >
        <Clock className="h-6 w-6" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute -bottom-4 -left-4 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 p-3 text-white shadow-lg"
      >
        <TrendingUp className="h-6 w-6" />
      </motion.div>

      {/* Glow Effect */}
      <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-3xl" />
    </motion.div>
  );
}