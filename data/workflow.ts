// data/workflow.ts
import {
  UserPlus,
  ShieldCheck,
  LayoutDashboard,
  CalendarCheck,
  CreditCard,
  TrendingUp,
  Rocket,
  Users,
  BarChart3,
  Smartphone,
  LucideIcon,
} from 'lucide-react';

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  color: string;
  stats?: string;
  details?: string[];
  image?: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 'join',
    title: 'Join TiTO',
    description: 'Sign up for free and create your business account. No credit card required.',
    icon: UserPlus,
    gradient: 'from-blue-500 to-blue-600',
    color: 'blue',
    stats: '5 min setup',
    details: [
      'Create your business profile',
      'Set up your account preferences',
      'Invite team members',
    ],
  },
  {
    id: 'verify',
    title: 'Verification',
    description: 'Verify your business and get approved to start accepting bookings.',
    icon: ShieldCheck,
    gradient: 'from-emerald-500 to-emerald-600',
    color: 'emerald',
    stats: '24-48 hours',
    details: [
      'Submit business documents',
      'Identity verification',
      'Account review',
    ],
  },
  {
    id: 'setup',
    title: 'Dashboard Setup',
    description: 'Configure your dashboard, add services, and customize your settings.',
    icon: LayoutDashboard,
    gradient: 'from-purple-500 to-purple-600',
    color: 'purple',
    stats: '15 min setup',
    details: [
      'Add your services or products',
      'Set pricing and availability',
      'Customize your dashboard',
    ],
  },
  {
    id: 'bookings',
    title: 'Accept Bookings',
    description: 'Start receiving bookings from customers across all your channels.',
    icon: CalendarCheck,
    gradient: 'from-rose-500 to-rose-600',
    color: 'rose',
    stats: 'Real-time',
    details: [
      'Receive booking requests',
      'Manage availability',
      'Communicate with customers',
    ],
  },
  {
    id: 'payments',
    title: 'Receive Payments',
    description: 'Get paid securely with our integrated payment processing system.',
    icon: CreditCard,
    gradient: 'from-green-500 to-green-600',
    color: 'green',
    stats: 'Instant payments',
    details: [
      'Secure payment processing',
      'Multiple payment gateways',
      'Automated invoicing',
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics & Growth',
    description: 'Track performance, gain insights, and grow your business with data.',
    icon: TrendingUp,
    gradient: 'from-orange-500 to-orange-600',
    color: 'orange',
    stats: 'Live analytics',
    details: [
      'Real-time analytics dashboard',
      'Revenue tracking',
      'Customer insights',
    ],
  },
];

export const workflowCategories = [
  {
    id: 'setup',
    title: 'Getting Started',
    steps: workflowSteps.slice(0, 3),
  },
  {
    id: 'operations',
    title: 'Operations',
    steps: workflowSteps.slice(3, 5),
  },
  {
    id: 'growth',
    title: 'Growth',
    steps: workflowSteps.slice(5),
  },
];