// data/platformPages.ts
import {
  Calendar,
  CreditCard,
  Users,
  BarChart3,
  Shield,
  Smartphone,
  Globe,
  Zap,
  Clock,
  Award,
  Cloud,
  Lock,
  Key,
  Server,
  Database,
  Mail,
  MessageSquare,
  Share2,
  Apple,
  Smartphone as MobileIcon,
  Tablet,
  Monitor,
  Download,
  TrendingUp,
  PieChart,
  LineChart,
  Activity,
  Target,
  Eye,
  Filter,
  Bell,
  FileText,
  Settings,
  HelpCircle,
  LucideIcon,
} from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  color: string;
  benefits?: string[];
  image?: string;
}

export interface Integration {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  category: string;
  status: 'available' | 'coming-soon' | 'beta';
  color: string;
}

export interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
  buttonVariant: 'default' | 'outline' | 'ghost';
  popular?: boolean;
}

export interface MobileAppFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export const platformFeatures: Feature[] = [
  {
    id: 'bookings',
    title: 'Smart Bookings',
    description: 'Accept and manage bookings from multiple channels. Real-time availability, automated confirmations, and seamless scheduling.',
    icon: Calendar,
    gradient: 'from-blue-500 to-blue-600',
    color: 'blue',
    benefits: [
      'Multi-channel booking management',
      'Real-time availability updates',
      'Automated confirmations',
      'Calendar synchronization',
    ],
  },
  {
    id: 'payments',
    title: 'Secure Payments',
    description: 'Process payments securely with multiple gateways. Support for credit cards, mobile money, and bank transfers.',
    icon: CreditCard,
    gradient: 'from-green-500 to-green-600',
    color: 'green',
    benefits: [
      'Multiple payment gateways',
      'Secure transaction processing',
      'Automated invoicing',
      'Payment reconciliation',
    ],
  },
  {
    id: 'customers',
    title: 'Customer Management',
    description: 'Build relationships with your customers. Manage profiles, track history, and personalize experiences.',
    icon: Users,
    gradient: 'from-purple-500 to-purple-600',
    color: 'purple',
    benefits: [
      'Customer profile management',
      'Booking history tracking',
      'Personalized communication',
      'Loyalty program support',
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics & Reports',
    description: 'Make data-driven decisions with comprehensive analytics. Track performance, revenue, and customer behavior.',
    icon: BarChart3,
    gradient: 'from-orange-500 to-orange-600',
    color: 'orange',
    benefits: [
      'Real-time analytics dashboard',
      'Custom report generation',
      'Revenue tracking',
      'Customer insights',
    ],
  },
];

export const integrations: Integration[] = [
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Process payments securely with Stripe.',
    icon: CreditCard,
    category: 'payments',
    status: 'available',
    color: 'blue',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Accept payments via PayPal.',
    icon: CreditCard,
    category: 'payments',
    status: 'available',
    color: 'blue',
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    description: 'Track your website traffic and user behavior.',
    icon: BarChart3,
    category: 'analytics',
    status: 'available',
    color: 'orange',
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Get real-time notifications in Slack.',
    icon: MessageSquare,
    category: 'communication',
    status: 'available',
    color: 'purple',
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    description: 'Sync your customers with Mailchimp.',
    icon: Mail,
    category: 'marketing',
    status: 'available',
    color: 'green',
  },
  {
    id: 'zapier',
    name: 'Zapier',
    description: 'Connect with thousands of apps via Zapier.',
    icon: Zap,
    category: 'automation',
    status: 'available',
    color: 'orange',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    description: 'Connect your business page to Facebook.',
    icon: Download,
    category: 'social',
    status: 'coming-soon',
    color: 'blue',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    description: 'Manage your Twitter presence.',
    icon: Monitor,
    category: 'social',
    status: 'coming-soon',
    color: 'blue',
  },
];

export const securityFeatures: SecurityFeature[] = [
  {
    id: 'encryption',
    title: 'End-to-End Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard protocols.',
    icon: Lock,
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    id: 'authentication',
    title: 'Multi-Factor Authentication',
    description: 'Add an extra layer of security with MFA. Protect your account with SMS or authenticator apps.',
    icon: Key,
    color: 'green',
    gradient: 'from-green-500 to-green-600',
  },
  {
    id: 'compliance',
    title: 'Regulatory Compliance',
    description: 'We comply with GDPR, PCI DSS, and other industry standards to protect your data.',
    icon: Shield,
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    id: 'backup',
    title: 'Automated Backups',
    description: 'Your data is backed up regularly to ensure business continuity and disaster recovery.',
    icon: Database,
    color: 'orange',
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    id: 'monitoring',
    title: '24/7 Security Monitoring',
    description: 'Our security team monitors systems around the clock to detect and respond to threats.',
    icon: Eye,
    color: 'red',
    gradient: 'from-red-500 to-red-600',
  },
  {
    id: 'access-control',
    title: 'Role-Based Access Control',
    description: 'Granular permissions ensure team members only have access to what they need.',
    icon: Users,
    color: 'indigo',
    gradient: 'from-indigo-500 to-indigo-600',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses just getting started.',
    price: '$29',
    period: '/month',
    features: [
      '100 bookings per month',
      'Basic analytics',
      'Email support',
      '1 user',
      '5 integrations',
    ],
    buttonText: 'Start Free Trial',
    buttonVariant: 'outline',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses with higher demands.',
    price: '$99',
    period: '/month',
    features: [
      '1,000 bookings per month',
      'Advanced analytics',
      'Priority support',
      '5 users',
      '20 integrations',
      'Custom branding',
    ],
    highlighted: true,
    popular: true,
    buttonText: 'Get Started',
    buttonVariant: 'default',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with complex needs.',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited bookings',
      'Custom analytics',
      '24/7 phone support',
      'Unlimited users',
      'All integrations',
      'Custom development',
      'Dedicated account manager',
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'ghost',
  },
];

export const mobileAppFeatures: MobileAppFeature[] = [
  {
    id: 'book-on-go',
    title: 'Book on the Go',
    description: 'Make bookings anytime, anywhere from your mobile device. Perfect for last-minute reservations.',
    icon: MobileIcon,
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    id: 'real-time-updates',
    title: 'Real-Time Updates',
    description: 'Get instant notifications for booking confirmations, payment receipts, and important updates.',
    icon: Bell,
    gradient: 'from-green-500 to-green-600',
  },
  {
    id: 'manage-bookings',
    title: 'Manage Bookings',
    description: 'View, edit, and cancel bookings directly from your mobile device. Full control at your fingertips.',
    icon: Calendar,
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    id: 'secure-payments',
    title: 'Secure Payments',
    description: 'Process payments securely with biometric authentication. Support for multiple payment methods.',
    icon: CreditCard,
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    id: 'offline-mode',
    title: 'Offline Mode',
    description: 'Access key features even without an internet connection. Sync automatically when back online.',
    icon: Cloud,
    gradient: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 'push-notifications',
    title: 'Push Notifications',
    description: 'Stay informed with instant push notifications for new bookings, messages, and updates.',
    icon: MessageSquare,
    gradient: 'from-pink-500 to-pink-600',
  },
];

export const analyticsFeatures = [
  {
    id: 'revenue',
    title: 'Revenue Analytics',
    description: 'Track revenue trends, identify top-performing services, and forecast future earnings.',
    icon: TrendingUp,
    color: 'blue',
  },
  {
    id: 'booking-insights',
    title: 'Booking Insights',
    description: 'Analyze booking patterns, peak times, and customer preferences to optimize operations.',
    icon: Activity,
    color: 'green',
  },
  {
    id: 'customer-analytics',
    title: 'Customer Analytics',
    description: 'Understand your customers better with detailed profiles, behavior analysis, and segmentation.',
    icon: Users,
    color: 'purple',
  },
  {
    id: 'custom-reports',
    title: 'Custom Reports',
    description: 'Create and export custom reports with the metrics that matter most to your business.',
    icon: FileText,
    color: 'orange',
  },
];