// data/platform.ts
import {
  Calendar,
  CreditCard,
  BarChart3,
  Users,
  TrendingUp,
  Settings,
  Shield,
  Smartphone,
  Globe,
  Zap,
  Clock,
  Award,
  LucideIcon,
} from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  stats?: string;
  href?: string;
}

export const platformFeatures: Feature[] = [
  {
    id: 'bookings',
    title: 'Bookings',
    description: 'Manage all bookings from a single dashboard. Accept reservations, schedule appointments, and track availability in real-time.',
    icon: Calendar,
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    stats: '10K+ bookings/month',
    href: '/platform/bookings',
  },
  {
    id: 'payments',
    title: 'Payments',
    description: 'Secure payment processing with multiple gateways. Accept credit cards, mobile money, and bank transfers with ease.',
    icon: CreditCard,
    color: 'green',
    gradient: 'from-green-500 to-green-600',
    stats: '99.9% uptime',
    href: '/platform/payments',
  },
  {
    id: 'reports',
    title: 'Reporting',
    description: 'Generate detailed reports and analytics. Track revenue, bookings, customer behavior, and operational metrics.',
    icon: BarChart3,
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
    stats: 'Real-time analytics',
    href: '/platform/reports',
  },
  {
    id: 'customers',
    title: 'Customers',
    description: 'Build lasting relationships with your customers. Manage profiles, track preferences, and personalize experiences.',
    icon: Users,
    color: 'orange',
    gradient: 'from-orange-500 to-orange-600',
    stats: '5K+ active customers',
    href: '/platform/customers',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Data-driven insights to grow your business. Understand trends, identify opportunities, and make informed decisions.',
    icon: TrendingUp,
    color: 'pink',
    gradient: 'from-pink-500 to-pink-600',
    stats: '23% avg growth',
    href: '/platform/analytics',
  },
  {
    id: 'operators',
    title: 'Operators',
    description: 'Multi-operator support with role-based access. Manage teams, assign permissions, and streamline operations.',
    icon: Settings,
    color: 'indigo',
    gradient: 'from-indigo-500 to-indigo-600',
    stats: 'Team management',
    href: '/platform/operators',
  },
  {
    id: 'security',
    title: 'Security',
    description: 'Enterprise-grade security with encryption, compliance, and regular audits. Your data is always protected.',
    icon: Shield,
    color: 'red',
    gradient: 'from-red-500 to-red-600',
    stats: 'ISO 27001 certified',
    href: '/platform/security',
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    description: 'Native mobile apps for iOS and Android. Your customers can book, pay, and manage their reservations on the go.',
    icon: Smartphone,
    color: 'teal',
    gradient: 'from-teal-500 to-teal-600',
    stats: '4.8⭐ App Store',
    href: '/platform/mobile',
  },
];

export const platformStats = [
  { value: 10000, label: 'Bookings processed', suffix: '+' },
  { value: 99.9, label: 'Uptime guarantee', suffix: '%' },
  { value: 120, label: 'Active partners', suffix: '+' },
  { value: 24, label: 'Support availability', suffix: '/7' },
];