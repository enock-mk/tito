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
  icon: LucideIcon;
  industry: string;
  color?: string;
}

export const partners: Partner[] = [
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
    id: 'car-hire',
    name: 'Car Hire',
    icon: Car,
    industry: 'Transportation',
    color: 'from-orange-500 to-orange-600',
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
    id: 'universities',
    name: 'Universities',
    icon: GraduationCap,
    industry: 'Education',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 'businesses',
    name: 'Businesses',
    icon: BriefcaseBusiness,
    industry: 'Corporate',
    color: 'from-indigo-500 to-indigo-600',
  },
];

// Optional: Helper function to get partner by ID
export const getPartnerById = (id: string): Partner | undefined => {
  return partners.find((partner) => partner.id === id);
};

// Optional: Helper function to get partners by industry
export const getPartnersByIndustry = (industry: string): Partner[] => {
  return partners.filter((partner) => partner.industry === industry);
};

// Optional: Group partners by industry
export const getPartnersGroupedByIndustry = (): Record<string, Partner[]> => {
  return partners.reduce((acc, partner) => {
    if (!acc[partner.industry]) {
      acc[partner.industry] = [];
    }
    acc[partner.industry].push(partner);
    return acc;
  }, {} as Record<string, Partner[]>);
};