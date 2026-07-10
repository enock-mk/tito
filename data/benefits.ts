// data/benefits.ts
import {
  Zap,
  Shield,
  Cloud,
  BarChart3,
  Calendar,
  Smartphone,
  Users,
  Award,
  Clock,
  Globe,
  Heart,
  TrendingUp,
  LucideIcon,
} from 'lucide-react';

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  color: string;
  stats?: string;
  href?: string;
}

export const benefits: Benefit[] = [
  {
    id: 'fast-onboarding',
    title: 'Fast Onboarding',
    description: 'Get started in minutes with our intuitive setup process. No technical expertise required.',
    icon: Zap,
    gradient: 'from-main-yellow-500 to-main-yellow-600',
    color: 'main-yellow',
    stats: '5 min setup',
  },
  {
    id: 'secure-payments',
    title: 'Secure Payments',
    description: 'Enterprise-grade security with end-to-end encryption and PCI compliance.',
    icon: Shield,
    gradient: 'from-emerald-500 to-emerald-600',
    color: 'emerald',
    stats: '99.9% secure',
  },
  {
    id: 'cloud-based',
    title: 'Cloud Based',
    description: 'Access your business from anywhere. Automatic updates and backups included.',
    icon: Cloud,
    gradient: 'from-blue-500 to-blue-600',
    color: 'blue',
    stats: '24/7 access',
  },
  {
    id: 'reports',
    title: 'Real-time Reports',
    description: 'Make data-driven decisions with comprehensive analytics and reporting tools.',
    icon: BarChart3,
    gradient: 'from-purple-500 to-purple-600',
    color: 'purple',
    stats: 'Live analytics',
  },
  {
    id: 'easy-booking',
    title: 'Easy Booking',
    description: 'Streamlined booking experience for your customers. Mobile-friendly and intuitive.',
    icon: Calendar,
    gradient: 'from-rose-500 to-rose-600',
    color: 'rose',
    stats: '98% satisfaction',
  },
  {
    id: 'multi-platform',
    title: 'Multi Platform',
    description: 'Works seamlessly across web, mobile, and tablet. Native iOS and Android apps.',
    icon: Smartphone,
    gradient: 'from-indigo-500 to-indigo-600',
    color: 'indigo',
    stats: 'All devices',
  },
  {
    id: 'customer-support',
    title: '24/7 Support',
    description: 'Dedicated support team available around the clock to help you succeed.',
    icon: Users,
    gradient: 'from-cyan-500 to-cyan-600',
    color: 'cyan',
    stats: '24/7 availability',
  },
  {
    id: 'trusted-platform',
    title: 'Trusted Platform',
    description: 'Join 120+ businesses that trust TiTO to power their operations.',
    icon: Award,
    gradient: 'from-amber-500 to-amber-600',
    color: 'amber',
    stats: '120+ partners',
  },
];

export const benefitCategories = [
  {
    id: 'operations',
    title: 'Operations',
    benefits: benefits.filter(b => ['fast-onboarding', 'easy-booking', 'multi-platform'].includes(b.id)),
  },
  {
    id: 'security',
    title: 'Security & Reliability',
    benefits: benefits.filter(b => ['secure-payments', 'cloud-based', '24/7-support'].includes(b.id)),
  },
  {
    id: 'growth',
    title: 'Growth & Insights',
    benefits: benefits.filter(b => ['reports', 'trusted-platform'].includes(b.id)),
  },
];