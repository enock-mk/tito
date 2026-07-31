import { 
  Download, 
  Smartphone, 
  Monitor, 
  Tablet, 
  QrCode,
  Apple,
  PlayCircle,
  FileArchive,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Store,
  Globe,
  Bus,
  Hotel,
  Calendar,
  Users,
  Truck,
  Building2,
  User,
  Briefcase,
  LayoutDashboard,
  LucideIcon
} from 'lucide-react';
import { PlatformIcon } from '@/components/shared/PlatformIcon';

export interface DownloadApp {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon| React.ComponentType<{ className?: string; width?: number; height?: number }>;
  color: string;
  gradient: string;
  audience: string;
  platforms: {
    name: string;
    url: string;
    icon: LucideIcon| React.ComponentType<{ className?: string; width?: number; height?: number }>;
  }[];
  downloads: {
    name: string;
    url: string;
    icon: LucideIcon| React.ComponentType<{ className?: string; width?: number; height?: number }>;
    size?: string;
  }[];
  features?: string[];
  qrCode?: string;
}

export const downloadApps: DownloadApp[] = [
  {
    id: 'marketplace',
    name: 'TiTO Marketplace',
    description: 'The public-facing hub — discover and book all TiTO services.',
    icon: Store,
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    audience: 'General Public / Customers',
    platforms: [
      { name: 'App Store', url: '#', icon: Apple },
      { name: 'Google Play', url: '#', icon: PlayCircle },
    ],
    downloads: [
      { name: 'iOS App', url: '#', icon: Apple, size: '45 MB' },
      { name: 'Android APK', url: '#', icon: Smartphone, size: '32 MB' },
    ],
    features: ['Discover Services', 'Book Bookings', 'Manage Reservations', 'View History'],
  },
  {
    id: 'orga',
    name: 'TiTO Orga',
    description: 'Operational management platform for service partners.',
    icon: Briefcase,
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
    audience: 'Event Organizers / Partners',
    platforms: [
      { name: 'App Store', url: '#', icon: Apple },
      { name: 'Google Play', url: '#', icon: PlayCircle },
    ],
    downloads: [
      { name: 'iOS App', url: '#', icon: Apple, size: '52 MB' },
      { name: 'Android APK', url: '#', icon: Smartphone, size: '38 MB' },
      { name: 'Desktop App (Windows)', url: '#', icon: Monitor, size: '68 MB' },
    ],
    features: ['Event Management', 'Partner Dashboard', 'Analytics', 'Revenue Tracking'],
  },
  {
    id: 'bus-operator',
    name: 'Bus Operator Dashboard',
    description: 'Full transport business management — fleet, trips, revenue.',
    icon: Bus,
    color: 'green',
    gradient: 'from-green-500 to-green-600',
    audience: 'Bus Companies',
    platforms: [
      { name: 'App Store', url: '#', icon: Apple },
      { name: 'Google Play', url: '#', icon: PlayCircle },
    ],
    downloads: [
      { name: 'iOS App', url: '#', icon: Apple, size: '48 MB' },
      { name: 'Android APK', url: '#', icon: Smartphone, size: '35 MB' },
      { name: 'Desktop App (Windows)', url: '#', icon: Monitor, size: '72 MB' },
      { name: 'Desktop App (macOS)', url: '#', icon: Monitor, size: '78 MB' },
    ],
    features: ['Fleet Management', 'Trip Planning', 'Revenue Analytics', 'Driver Scheduling'],
  },
  {
    id: 'driver-app',
    name: 'Driver App',
    description: 'Trip management, passenger manifests, live status updates.',
    icon: User,
    color: 'orange',
    gradient: 'from-orange-500 to-orange-600',
    audience: 'Bus Drivers',
    platforms: [
      { name: 'App Store', url: '#', icon: Apple },
      { name: 'Google Play', url: '#', icon: PlayCircle },
    ],
    downloads: [
      { name: 'iOS App', url: '#', icon: Apple, size: '28 MB' },
      { name: 'Android APK', url: '#', icon: Smartphone, size: '22 MB' },
    ],
    features: ['Trip Management', 'Passenger Manifests', 'Live Updates', 'Route Navigation'],
  },
  {
    id: 'agent-app',
    name: 'Agent App',
    description: 'Sell and issue tickets and reservations across TiTO services.',
    icon: Users,
    color: 'cyan',
    gradient: 'from-cyan-500 to-cyan-600',
    audience: 'Ticketing Agents',
    platforms: [
      { name: 'App Store', url: '#', icon: Apple },
      { name: 'Google Play', url: '#', icon: PlayCircle },
    ],
    downloads: [
      { name: 'iOS App', url: '#', icon: Apple, size: '32 MB' },
      { name: 'Android APK', url: '#', icon: Smartphone, size: '26 MB' },
    ],
    features: ['Sell Tickets', 'Issue Reservations', 'Customer Management', 'Payment Processing'],
  },
  {
    id: 'hotel-system',
    name: 'Hotel Management System',
    description: 'Full hospitality management — rooms, guests, menus, revenue.',
    icon: Hotel,
    color: 'rose',
    gradient: 'from-rose-500 to-rose-600',
    audience: 'Hotel & Lodge Owners',
    platforms: [
      { name: 'App Store', url: '#', icon: Apple },
      { name: 'Google Play', url: '#', icon: PlayCircle },
    ],
    downloads: [
      { name: 'iOS App', url: '#', icon: Apple, size: '55 MB' },
      { name: 'Android APK', url: '#', icon: Smartphone, size: '42 MB' },
      { name: 'Desktop App (Windows)', url: '#', icon: Monitor, size: '85 MB' },
      { name: 'Desktop App (macOS)', url: '#', icon: Monitor, size: '92 MB' },
    ],
    features: ['Room Management', 'Guest Profiles', 'Menu Management', 'Revenue Analytics'],
  },
];
