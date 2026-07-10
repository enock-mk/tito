// data/pages.ts
import {
  Users,
  Briefcase,
  Award,
  TrendingUp,
  Heart,
  Globe,
  Coffee,
  Laptop,
  Calendar,
  Clock,
  MapPin,
  Mail,
  Phone,
  DollarSign,
  GraduationCap,
  Rocket,
  Target,
  Zap,
  Shield,
  Star,
  Sparkles,
  Download,
  FileImage,
  Video,
  FileText,
  Image,
  Palette,
  Code,
  CheckCircle,
  ArrowRight,
  Building2,
  UserPlus,
  Handshake,
  Megaphone,
  PenTool,
  Smartphone,
  Monitor,
  Tablet,
  Share2,
  BookOpen,
  Globe as GlobeIcon,
  MessageSquare,
  HelpCircle,
  LucideIcon,
} from 'lucide-react';

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  salary?: string;
  postedAt: string;
  featured?: boolean;
}

export interface PartnerBenefit {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface MediaKitItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  type: string;
  size: string;
  downloadUrl: string;
}

export const jobOpenings: JobOpening[] = [
  {
    id: 'senior-frontend',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'full-time',
    description: 'We\'re looking for a Senior Frontend Developer to help build the future of TiTO. You\'ll work on our core product, building beautiful and performant user interfaces.',
    requirements: [
      '5+ years of experience with React and TypeScript',
      'Experience with Next.js and Tailwind CSS',
      'Strong understanding of web performance and accessibility',
      'Experience with state management (Redux, Zustand, or similar)',
      'Excellent problem-solving and communication skills',
    ],
    responsibilities: [
      'Build and maintain core product features',
      'Collaborate with designers and backend engineers',
      'Write clean, maintainable, and testable code',
      'Mentor junior developers',
      'Contribute to technical decisions and architecture',
    ],
    benefits: [
      'Competitive salary and equity',
      'Remote-first culture',
      'Flexible working hours',
      'Health insurance',
      'Learning and development budget',
    ],
    salary: '$120,000 - $160,000',
    postedAt: '2026-06-15',
    featured: true,
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'full-time',
    description: 'Join our product team to help define and deliver amazing experiences for our users. You\'ll work closely with engineering, design, and sales teams.',
    requirements: [
      '3+ years of product management experience',
      'Strong understanding of SaaS products',
      'Excellent communication and leadership skills',
      'Experience with agile methodologies',
      'Data-driven decision making',
    ],
    responsibilities: [
      'Define product strategy and roadmap',
      'Work with stakeholders to gather requirements',
      'Prioritize features and manage backlog',
      'Collaborate with design and engineering teams',
      'Track and analyze product metrics',
    ],
    benefits: [
      'Competitive salary and equity',
      'Remote-first culture',
      'Flexible working hours',
      'Health insurance',
      'Learning and development budget',
    ],
    salary: '$100,000 - $140,000',
    postedAt: '2026-06-10',
  },
  {
    id: 'backend-engineer',
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'full-time',
    description: 'We\'re looking for a Backend Engineer to build and scale our platform. You\'ll work on our core services and help us handle millions of requests.',
    requirements: [
      '3+ years of experience with Node.js and TypeScript',
      'Experience with PostgreSQL and database design',
      'Knowledge of cloud services (AWS, GCP, or Azure)',
      'Understanding of microservices architecture',
      'Strong problem-solving skills',
    ],
    responsibilities: [
      'Build and maintain backend services',
      'Design and implement APIs',
      'Optimize database queries and performance',
      'Work with frontend engineers to integrate features',
      'Participate in code reviews and architecture discussions',
    ],
    benefits: [
      'Competitive salary and equity',
      'Remote-first culture',
      'Flexible working hours',
      'Health insurance',
      'Learning and development budget',
    ],
    salary: '$110,000 - $150,000',
    postedAt: '2026-06-05',
  },
  {
    id: 'marketing-manager',
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'full-time',
    description: 'Drive our marketing strategy and help us grow our brand. You\'ll lead marketing campaigns, content creation, and community engagement.',
    requirements: [
      '5+ years of marketing experience in SaaS',
      'Experience with content marketing and SEO',
      'Strong writing and communication skills',
      'Experience with analytics and data-driven marketing',
      'Leadership experience',
    ],
    responsibilities: [
      'Develop and execute marketing strategy',
      'Lead content creation and distribution',
      'Manage social media and community engagement',
      'Analyze marketing metrics and optimize campaigns',
      'Collaborate with sales and product teams',
    ],
    benefits: [
      'Competitive salary and equity',
      'Remote-first culture',
      'Flexible working hours',
      'Health insurance',
      'Learning and development budget',
    ],
    salary: '$90,000 - $130,000',
    postedAt: '2026-06-01',
  },
];

export const partnerBenefits: PartnerBenefit[] = [
  {
    id: 'growth',
    title: 'Accelerated Growth',
    description: 'Partner with us to access new markets, customers, and revenue streams.',
    icon: TrendingUp,
    color: 'blue',
  },
  {
    id: 'technology',
    title: 'Cutting-Edge Technology',
    description: 'Leverage our modern platform to deliver better solutions to your clients.',
    icon: Laptop,
    color: 'green',
  },
  {
    id: 'support',
    title: 'Dedicated Support',
    description: 'Get priority support and dedicated account management.',
    icon: Users,
    color: 'purple',
  },
  {
    id: 'training',
    title: 'Training & Resources',
    description: 'Access comprehensive training materials and resources.',
    icon: GraduationCap,
    color: 'orange',
  },
  {
    id: 'marketing',
    title: 'Co-Marketing Opportunities',
    description: 'Participate in joint marketing campaigns and events.',
    icon: Megaphone,
    color: 'red',
  },
  {
    id: 'revenue',
    title: 'Competitive Commissions',
    description: 'Earn attractive commissions and recurring revenue.',
    icon: DollarSign,
    color: 'indigo',
  },
];

export const mediaKitItems: MediaKitItem[] = [
  {
    id: 'logo',
    title: 'Logo',
    description: 'Official TiTO logo in various formats and colors.',
    icon: FileImage,
    type: 'PNG, SVG',
    size: '2.5 MB',
    downloadUrl: '/media-kit/logo.zip',
  },
  {
    id: 'brand-guidelines',
    title: 'Brand Guidelines',
    description: 'Complete brand guidelines for using TiTO assets.',
    icon: FileText,
    type: 'PDF',
    size: '4.2 MB',
    downloadUrl: '/media-kit/brand-guidelines.pdf',
  },
  {
    id: 'press-images',
    title: 'Press Images',
    description: 'High-resolution images for press and media use.',
    icon: Image,
    type: 'JPG, PNG',
    size: '15 MB',
    downloadUrl: '/media-kit/press-images.zip',
  },
  {
    id: 'product-screenshots',
    title: 'Product Screenshots',
    description: 'Product screenshots for use in articles and presentations.',
    icon: Monitor,
    type: 'PNG',
    size: '8 MB',
    downloadUrl: '/media-kit/screenshots.zip',
  },
  {
    id: 'icon-pack',
    title: 'Icon Pack',
    description: 'A collection of TiTO icons for your projects.',
    icon: Palette,
    type: 'SVG, PNG',
    size: '3 MB',
    downloadUrl: '/media-kit/icons.zip',
  },
  {
    id: 'press-release',
    title: 'Press Release Template',
    description: 'Template for announcing your partnership with TiTO.',
    icon: FileText,
    type: 'DOCX',
    size: '1.2 MB',
    downloadUrl: '/media-kit/press-release.docx',
  },
  {
    id: 'product-video',
    title: 'Product Video',
    description: 'Demo video showcasing TiTO features.',
    icon: Video,
    type: 'MP4',
    size: '45 MB',
    downloadUrl: '/media-kit/product-video.mp4',
  },
  {
    id: 'media-kit',
    title: 'Complete Media Kit',
    description: 'Everything you need in one package.',
    icon: Download,
    type: 'ZIP',
    size: '78 MB',
    downloadUrl: '/media-kit/complete.zip',
  },
];

export const partnerStats = [
  { value: '120+', label: 'Active Partners' },
  { value: '50+', label: 'Countries Represented' },
  { value: '98%', label: 'Partner Satisfaction' },
  { value: '40%', label: 'Average Growth' },
];

export const companyValues = [
  {
    title: 'Customer First',
    description: 'We prioritize our customers in everything we do.',
    icon: Users,
  },
  {
    title: 'Innovation',
    description: 'We embrace innovation and continuous improvement.',
    icon: Rocket,
  },
  {
    title: 'Integrity',
    description: 'We act with honesty and transparency.',
    icon: Shield,
  },
  {
    title: 'Collaboration',
    description: 'We achieve more together through teamwork.',
    icon: Handshake,
  },
];