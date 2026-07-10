// data/resources.ts
import {
  BookOpen,
  HelpCircle,
  FileText,
  GitBranch,
  Search,
  Video,
  MessageSquare,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Users,
  TrendingUp,
  Award,
  Calendar,
  Settings,
  Shield,
  Cloud,
  Database,
  Smartphone,
  BarChart3,
  CreditCard,
  Globe,
  Lock,
  Server,
  RefreshCw,
  AlertCircle,
  ThumbsUp,
  Star,
  Heart,
  Briefcase,
  GraduationCap,
  Building2,
  Truck,
  Hotel,
  Bus,
  Calendar as CalendarIcon,
  Car,
  LucideIcon,
} from 'lucide-react';

export interface DocCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  articles: DocArticle[];
}

export interface DocArticle {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  readingTime: string;
  updatedAt: string;
  author?: string;
  popular?: boolean;
  new?: boolean;
}

export interface HelpTopic {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  questions: HelpQuestion[];
}

export interface HelpQuestion {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  industry: string;
  company: string;
  logo?: string;
  image?: string;
  stats: {
    label: string;
    value: string;
  }[];
  challenges: string[];
  solutions: string[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  slug: string;
  publishedAt: string;
  featured?: boolean;
}

export interface ReleaseNote {
  id: string;
  version: string;
  date: string;
  title: string;
  description: string;
  type: 'major' | 'minor' | 'patch' | 'beta';
  features: string[];
  improvements: string[];
  fixes: string[];
  breaking?: string[];
  downloadUrl?: string;
}

export const docCategories: DocCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn the basics of TiTO and set up your account.',
    icon: BookOpen,
    color: 'blue',
    articles: [
      {
        id: 'what-is-tito',
        title: 'What is TiTO?',
        description: 'An overview of TiTO and its core features.',
        slug: 'what-is-tito',
        category: 'getting-started',
        readingTime: '3 min',
        updatedAt: '2026-06-15',
        popular: true,
      },
      {
        id: 'create-account',
        title: 'Creating Your Account',
        description: 'Step-by-step guide to setting up your TiTO account.',
        slug: 'create-account',
        category: 'getting-started',
        readingTime: '5 min',
        updatedAt: '2026-06-20',
        new: true,
      },
      {
        id: 'dashboard-overview',
        title: 'Dashboard Overview',
        description: 'Understanding the TiTO dashboard and navigation.',
        slug: 'dashboard-overview',
        category: 'getting-started',
        readingTime: '4 min',
        updatedAt: '2026-06-10',
        popular: true,
      },
      {
        id: 'first-booking',
        title: 'Making Your First Booking',
        description: 'How to create and manage your first booking.',
        slug: 'first-booking',
        category: 'getting-started',
        readingTime: '6 min',
        updatedAt: '2026-06-05',
      },
    ],
  },
  {
    id: 'bookings',
    title: 'Bookings',
    description: 'Manage bookings, reservations, and schedules.',
    icon: CalendarIcon,
    color: 'green',
    articles: [
      {
        id: 'manage-bookings',
        title: 'Managing Bookings',
        description: 'How to view, edit, and cancel bookings.',
        slug: 'manage-bookings',
        category: 'bookings',
        readingTime: '4 min',
        updatedAt: '2026-06-18',
        popular: true,
      },
      {
        id: 'booking-settings',
        title: 'Booking Settings',
        description: 'Configure your booking preferences and rules.',
        slug: 'booking-settings',
        category: 'bookings',
        readingTime: '7 min',
        updatedAt: '2026-06-12',
      },
      {
        id: 'calendar-sync',
        title: 'Calendar Integration',
        description: 'Sync your bookings with Google Calendar and other services.',
        slug: 'calendar-sync',
        category: 'bookings',
        readingTime: '5 min',
        updatedAt: '2026-06-08',
      },
    ],
  },
  {
    id: 'payments',
    title: 'Payments',
    description: 'Process payments and manage transactions.',
    icon: CreditCard,
    color: 'purple',
    articles: [
      {
        id: 'payment-gateways',
        title: 'Payment Gateways',
        description: 'Set up and configure payment gateways.',
        slug: 'payment-gateways',
        category: 'payments',
        readingTime: '6 min',
        updatedAt: '2026-06-14',
        popular: true,
      },
      {
        id: 'transaction-history',
        title: 'Transaction History',
        description: 'View and manage your payment history.',
        slug: 'transaction-history',
        category: 'payments',
        readingTime: '3 min',
        updatedAt: '2026-06-09',
      },
      {
        id: 'refund-policy',
        title: 'Refund Management',
        description: 'How to process refunds and manage disputes.',
        slug: 'refund-policy',
        category: 'payments',
        readingTime: '5 min',
        updatedAt: '2026-06-03',
      },
    ],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    description: 'Connect TiTO with other tools and services.',
    icon: Globe,
    color: 'orange',
    articles: [
      {
        id: 'api-overview',
        title: 'API Overview',
        description: 'Introduction to the TiTO API.',
        slug: 'api-overview',
        category: 'integrations',
        readingTime: '8 min',
        updatedAt: '2026-06-16',
        popular: true,
      },
      {
        id: 'webhooks',
        title: 'Webhooks',
        description: 'Set up webhooks for real-time notifications.',
        slug: 'webhooks',
        category: 'integrations',
        readingTime: '6 min',
        updatedAt: '2026-06-11',
      },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    description: 'Keep your account and data secure.',
    icon: Shield,
    color: 'red',
    articles: [
      {
        id: 'security-best-practices',
        title: 'Security Best Practices',
        description: 'Tips to keep your account secure.',
        slug: 'security-best-practices',
        category: 'security',
        readingTime: '4 min',
        updatedAt: '2026-06-13',
      },
      {
        id: 'two-factor-auth',
        title: 'Two-Factor Authentication',
        description: 'Set up 2FA for your account.',
        slug: 'two-factor-auth',
        category: 'security',
        readingTime: '5 min',
        updatedAt: '2026-06-07',
        popular: true,
      },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    description: 'Use TiTO on your mobile device.',
    icon: Smartphone,
    color: 'teal',
    articles: [
      {
        id: 'mobile-app-guide',
        title: 'Mobile App Guide',
        description: 'How to use the TiTO mobile app.',
        slug: 'mobile-app-guide',
        category: 'mobile',
        readingTime: '5 min',
        updatedAt: '2026-06-19',
        new: true,
      },
      {
        id: 'offline-mode',
        title: 'Offline Mode',
        description: 'Use TiTO without an internet connection.',
        slug: 'offline-mode',
        category: 'mobile',
        readingTime: '3 min',
        updatedAt: '2026-06-04',
      },
    ],
  },
];

export const helpTopics: HelpTopic[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'New to TiTO? Start here.',
    icon: BookOpen,
    color: 'blue',
    questions: [
      {
        id: 'what-is-tito',
        question: 'What is TiTO?',
        answer: 'TiTO is a modern booking and management platform for businesses of all sizes. It helps you manage bookings, payments, customers, and analytics in one place.',
        category: 'getting-started',
      },
      {
        id: 'how-to-signup',
        question: 'How do I create an account?',
        answer: 'You can sign up by visiting our website and clicking the "Sign Up" button. Fill in your details, verify your email, and you\'re ready to go.',
        category: 'getting-started',
      },
      {
        id: 'cost',
        question: 'How much does TiTO cost?',
        answer: 'We offer flexible pricing plans starting from $29/month. You can also start with a free trial to test the platform.',
        category: 'getting-started',
      },
    ],
  },
  {
    id: 'bookings',
    title: 'Bookings & Reservations',
    description: 'Manage your bookings effectively.',
    icon: CalendarIcon,
    color: 'green',
    questions: [
      {
        id: 'create-booking',
        question: 'How do I create a booking?',
        answer: 'You can create a booking from the dashboard by clicking "New Booking" and filling in the customer details, service, and date.',
        category: 'bookings',
      },
      {
        id: 'cancel-booking',
        question: 'How do I cancel a booking?',
        answer: 'To cancel a booking, go to the booking details page and click the "Cancel Booking" button. You may need to provide a reason for cancellation.',
        category: 'bookings',
      },
      {
        id: 'booking-sync',
        question: 'Can I sync bookings with my calendar?',
        answer: 'Yes! TiTO integrates with Google Calendar, Outlook, and other calendar services to keep your schedule in sync.',
        category: 'bookings',
      },
    ],
  },
  {
    id: 'payments',
    title: 'Payments & Billing',
    description: 'Understand payments and billing.',
    icon: CreditCard,
    color: 'purple',
    questions: [
      {
        id: 'payment-methods',
        question: 'What payment methods are supported?',
        answer: 'We support credit/debit cards, mobile money, bank transfers, and PayPal. You can configure your preferred gateways in settings.',
        category: 'payments',
      },
      {
        id: 'refund',
        question: 'How do I process a refund?',
        answer: 'You can process a refund from the transaction details page by clicking "Refund" and following the prompts.',
        category: 'payments',
      },
      {
        id: 'invoice',
        question: 'How do I generate an invoice?',
        answer: 'You can generate invoices from the booking details page or the payments section. Customize your invoice template in settings.',
        category: 'payments',
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical Support',
    description: 'Technical questions and troubleshooting.',
    icon: Settings,
    color: 'orange',
    questions: [
      {
        id: 'api-access',
        question: 'How do I access the API?',
        answer: 'You can access the TiTO API by generating an API key from your account settings. Documentation is available in our API guide.',
        category: 'technical',
      },
      {
        id: 'webhooks',
        question: 'How do I set up webhooks?',
        answer: 'You can configure webhooks from the integrations section in your dashboard. Provide the URL and select the events you want to receive.',
        category: 'technical',
      },
      {
        id: 'security',
        question: 'How is my data secured?',
        answer: 'We use end-to-end encryption, secure servers, and follow industry best practices to protect your data. All data is backed up regularly.',
        category: 'technical',
      },
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'hotel-grande',
    title: 'Hotel Grande: 40% Increase in Bookings',
    description: 'How Hotel Grande used TiTO to streamline operations and boost revenue.',
    industry: 'Hospitality',
    company: 'Hotel Grande',
    image: '/images/case-studies/hotel-grande.jpg',
    stats: [
      { label: 'Booking Increase', value: '+40%' },
      { label: 'Revenue Growth', value: '+35%' },
      { label: 'Customer Satisfaction', value: '98%' },
    ],
    challenges: [
      'Manual booking management across multiple platforms',
      'Inefficient payment processing',
      'Lack of customer data insights',
    ],
    solutions: [
      'Implemented TiTO\'s unified booking system',
      'Integrated Stripe and mobile money payments',
      'Used analytics to understand guest preferences',
    ],
    results: [
      '40% increase in direct bookings',
      '35% revenue growth in first year',
      '98% guest satisfaction rate',
    ],
    testimonial: {
      quote: 'TiTO transformed our hotel operations. We\'ve seen incredible growth and our guests love the seamless experience.',
      author: 'Sarah Johnson',
      role: 'CEO, Hotel Grande',
    },
    slug: 'hotel-grande-case-study',
    publishedAt: '2026-05-15',
    featured: true,
  },
  {
    id: 'city-transport',
    title: 'City Transport: 30% Efficiency Boost',
    description: 'How City Transport optimized their operations with TiTO.',
    industry: 'Transportation',
    company: 'City Transport Ltd',
    image: '/images/case-studies/city-transport.jpg',
    stats: [
      { label: 'Efficiency Increase', value: '+30%' },
      { label: 'Cost Savings', value: '25%' },
      { label: 'On-Time Rate', value: '96%' },
    ],
    challenges: [
      'Complex route management',
      'Manual ticketing process',
      'Fleet tracking difficulties',
    ],
    solutions: [
      'Route optimization with TiTO\'s transport module',
      'Digital ticketing system',
      'Real-time fleet tracking',
    ],
    results: [
      '30% increase in operational efficiency',
      '25% reduction in fuel costs',
      '96% on-time arrival rate',
    ],
    testimonial: {
      quote: 'TiTO has completely modernized our transport operations. Our drivers and customers love the new system.',
      author: 'Michael Okonkwo',
      role: 'Operations Manager, City Transport',
    },
    slug: 'city-transport-case-study',
    publishedAt: '2026-06-01',
  },
  {
    id: 'lagos-events',
    title: 'Lagos Events: 200+ Events Managed',
    description: 'How Lagos Events Co scaled their event management with TiTO.',
    industry: 'Events',
    company: 'Lagos Events Co',
    image: '/images/case-studies/lagos-events.jpg',
    stats: [
      { label: 'Events Managed', value: '200+' },
      { label: 'Attendee Growth', value: '+45%' },
      { label: 'Ticket Sales', value: '+50%' },
    ],
    challenges: [
      'Managing multiple events simultaneously',
      'Manual ticketing and check-in',
      'Attendee engagement tracking',
    ],
    solutions: [
      'Event management dashboard',
      'Digital ticketing with QR codes',
      'Attendee analytics and engagement tools',
    ],
    results: [
      'Successfully managed over 200 events',
      '45% increase in attendee numbers',
      '50% increase in ticket sales',
    ],
    testimonial: {
      quote: 'TiTO made it possible for us to scale our events business. The platform handles everything from ticketing to analytics.',
      author: 'Amara Okafor',
      role: 'Event Director, Lagos Events Co',
    },
    slug: 'lagos-events-case-study',
    publishedAt: '2026-05-20',
  },
];

export const releaseNotes: ReleaseNote[] = [
  {
    id: 'v2-0-0',
    version: 'v2.0.0',
    date: '2026-06-15',
    title: 'Major Platform Overhaul',
    description: 'A complete redesign of the platform with new features and improvements.',
    type: 'major',
    features: [
      'Completely redesigned dashboard with dark mode support',
      'New analytics module with real-time data',
      'Mobile app with offline support',
      'Multi-language support (English, French, Spanish)',
      'Advanced booking engine with AI recommendations',
    ],
    improvements: [
      '50% faster page load times',
      'Improved mobile responsiveness',
      'Enhanced search functionality',
      'Better accessibility (WCAG 2.1 AA compliant)',
    ],
    fixes: [
      'Fixed calendar sync issues with Google Calendar',
      'Resolved payment gateway timeout errors',
      'Fixed email notification delivery issues',
    ],
    breaking: [
      'API endpoints have been updated - see migration guide',
      'Legacy webhook format is deprecated',
    ],
  },
  {
    id: 'v1-5-0',
    version: 'v1.5.0',
    date: '2026-05-28',
    title: 'Analytics & Reports Update',
    description: 'New analytics features and reporting capabilities.',
    type: 'minor',
    features: [
      'Custom report builder',
      'Revenue forecasting tools',
      'Customer segmentation analytics',
      'Export reports to PDF and CSV',
    ],
    improvements: [
      'Faster report generation',
      'Better data visualization',
      'Enhanced filtering options',
    ],
    fixes: [
      'Fixed date range issues in reports',
      'Resolved currency conversion bugs',
      'Fixed export formatting issues',
    ],
  },
  {
    id: 'v1-4-2',
    version: 'v1.4.2',
    date: '2026-05-15',
    title: 'Security Patch & Bug Fixes',
    description: 'Security enhancements and performance improvements.',
    type: 'patch',
    features: [],
    improvements: [
      'Enhanced session security',
      'Improved error handling',
      'Better logging and monitoring',
    ],
    fixes: [
      'Fixed password reset flow',
      'Resolved email verification issues',
      'Fixed mobile app sync bugs',
    ],
  },
  {
    id: 'v1-4-0',
    version: 'v1.4.0',
    date: '2026-05-01',
    title: 'Payments & Integrations Update',
    description: 'New payment gateways and integration options.',
    type: 'minor',
    features: [
      'Stripe and PayPal integration',
      'Mobile money support (M-Pesa, Orange Money)',
      'Slack notifications',
      'Zapier integration',
    ],
    improvements: [
      'Faster payment processing',
      'Better transaction history',
      'Improved integration setup flow',
    ],
    fixes: [
      'Fixed payment webhook retry logic',
      'Resolved currency formatting issues',
    ],
  },
];