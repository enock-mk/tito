// data/partners.ts

import {
  Hotel,
  Bus,
  Calendar,
  Car,
  Heart,
  Church,
  Users,
  GraduationCap,
  BriefcaseBusiness,
  LucideIcon,
} from 'lucide-react';
export interface Partner {
  id: string;
  name: string;
  icon: string; // This can be a path to an SVG or a component
  industry: string;
  color?: string;
}

export interface Partnerr{
  id: string;
  name: string;
  icon: LucideIcon; // This can be a path to an SVG or a component
  industry: string;
  color?: string;
}

export const partners: Partner[] = [
  {
    id: 'hotels',
    name: 'Hotels',
    icon: '/logos/hotels.svg',
    industry: 'Hospitality',
  },
  {
    id: 'transport',
    name: 'Transport Operators',
    icon: '/logos/transport.svg',
    industry: 'Transportation',
  },
  {
    id: 'events',
    name: 'Event Organizers',
    icon: '/logos/events.svg',
    industry: 'Events',
  },
  {
    id: 'churches',
    name: 'Churches',
    icon: '/logos/churches.svg',
    industry: 'Religious',
  },
  {
    id: 'ngos',
    name: 'NGOs',
    icon: '/logos/ngos.svg',
    industry: 'Non-Profit',
  },
  {
    id: 'businesses',
    name: 'Businesses',
    icon: '/logos/businesses.svg',
    industry: 'Corporate',
  },
];

// For demo purposes, we'll use text-based logos with icons
// In production, replace with actual SVG/PNG files
export const partnersWithIcons: Partnerr[] = [
  {
    id: 'hotels',
    name: 'Hotels',
    icon: Hotel,
    industry: 'Hospitality',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'transport',
    name: 'Transport Operators',
    icon: Bus,
    industry: 'Transportation',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'events',
    name: 'Event Organizers',
    icon: Calendar,
    industry: 'Events',
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'churches',
    name: 'Churches',
    icon: Church,
    industry: 'Religious',
    color: 'from-amber-500 to-amber-600',
  },
  {
    id: 'ngos',
    name: 'NGOs',
    icon: Heart,
    industry: 'Non-Profit',
    color: 'from-rose-500 to-rose-600',
  },
  {
    id: 'businesses',
    name: 'Businesses',
    icon: BriefcaseBusiness,
    industry: 'Corporate',
    color: 'from-indigo-500 to-indigo-600',
  },
];