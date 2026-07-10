// data/dashboard.ts
import {
  LayoutDashboard,
  Calendar,
  Bus,
  Hotel,
  Car,
  Heart,
  Users,
  Settings,
  BarChart3,
  CreditCard,
  FileText,
  HelpCircle,
  LogOut,
  Bell,
  User,
  ChevronDown,
  LucideIcon,
} from 'lucide-react';

export interface SidebarItem {
  label: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
  badge?: number;
  children?: SidebarItem[];
}

export interface StatWidget {
  id: string;
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
}

export interface Booking {
  id: string;
  customer: string;
  email: string;
  service: string;
  date: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  amount: string;
  avatar?: string;
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
  type: 'booking' | 'payment' | 'customer' | 'system' | 'update';
  avatar?: string;
}

export const sidebarItems: SidebarItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: 'Bookings',
    href: '/dashboard/bookings',
    icon: Calendar,
    badge: 12,
  },
  {
    label: 'Transport',
    href: '/dashboard/transport',
    icon: Bus,
  },
  {
    label: 'Hotels',
    href: '/dashboard/hotels',
    icon: Hotel,
  },
  {
    label: 'Car Hire',
    href: '/dashboard/car-hire',
    icon: Car,
  },
  {
    label: 'Fundraising',
    href: '/dashboard/fundraising',
    icon: Heart,
  },
  {
    label: 'Customers',
    href: '/dashboard/customers',
    icon: Users,
  },
  {
    label: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart3,
  },
  {
    label: 'Payments',
    href: '/dashboard/payments',
    icon: CreditCard,
  },
  {
    label: 'Reports',
    href: '/dashboard/reports',
    icon: FileText,
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

export const statsWidgets: StatWidget[] = [
  {
    id: 'bookings',
    title: 'Total Bookings',
    value: '1,234',
    change: 12.5,
    changeLabel: 'vs last month',
    icon: Calendar,
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    id: 'revenue',
    title: 'Revenue',
    value: '$45,678',
    change: 8.2,
    changeLabel: 'vs last month',
    icon: CreditCard,
    color: 'green',
    gradient: 'from-green-500 to-green-600',
  },
  {
    id: 'customers',
    title: 'Active Customers',
    value: '892',
    change: 23.1,
    changeLabel: 'vs last month',
    icon: Users,
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    id: 'growth',
    title: 'Growth Rate',
    value: '+23%',
    change: 5.3,
    changeLabel: 'vs last month',
    icon: BarChart3,
    color: 'orange',
    gradient: 'from-orange-500 to-orange-600',
  },
];

export const recentBookings: Booking[] = [
  {
    id: '1',
    customer: 'Sarah Johnson',
    email: 'sarah.j@hotelgrande.com',
    service: 'Hotel Suite - 2 nights',
    date: '2026-07-01',
    status: 'confirmed',
    amount: '$450.00',
  },
  {
    id: '2',
    customer: 'Michael Okonkwo',
    email: 'michael@citytransport.com',
    service: 'Bus Charter - 50 seater',
    date: '2026-06-30',
    status: 'pending',
    amount: '$1,200.00',
  },
  {
    id: '3',
    customer: 'Amara Okafor',
    email: 'amara@lagosevents.com',
    service: 'Event Venue - Conference',
    date: '2026-06-29',
    status: 'completed',
    amount: '$2,500.00',
  },
  {
    id: '4',
    customer: 'David Mensah',
    email: 'david@gracechurch.org',
    service: 'Church Event - 200 attendees',
    date: '2026-06-28',
    status: 'cancelled',
    amount: '$800.00',
  },
  {
    id: '5',
    customer: 'Chioma Nwosu',
    email: 'chioma@hopefoundation.org',
    service: 'Fundraising Gala',
    date: '2026-06-27',
    status: 'confirmed',
    amount: '$3,200.00',
  },
];

export const recentActivities: Activity[] = [
  {
    id: '1',
    user: 'Sarah Johnson',
    action: 'created',
    target: 'a new booking',
    time: '2 minutes ago',
    type: 'booking',
  },
  {
    id: '2',
    user: 'Michael Okonkwo',
    action: 'processed',
    target: 'a payment of $1,200',
    time: '15 minutes ago',
    type: 'payment',
  },
  {
    id: '3',
    user: 'Amara Okafor',
    action: 'registered',
    target: 'a new customer',
    time: '1 hour ago',
    type: 'customer',
  },
  {
    id: '4',
    user: 'System',
    action: 'updated',
    target: 'booking #1234 status',
    time: '2 hours ago',
    type: 'system',
  },
  {
    id: '5',
    user: 'David Mensah',
    action: 'modified',
    target: 'event settings',
    time: '3 hours ago',
    type: 'update',
  },
];

export const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Bookings',
      data: [65, 59, 80, 81, 56, 55, 40],
      color: '#2563EB',
    },
    {
      label: 'Revenue',
      data: [28, 48, 40, 19, 86, 27, 90],
      color: '#7C3AED',
    },
  ],
};