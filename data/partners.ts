// data/partners.ts
export interface Partner {
  id: string;
  name: string;
  icon: string; // This can be a path to an SVG or a component
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
export const partnersWithIcons = [
  {
    id: 'hotels',
    name: 'Hotels',
    icon: '🏨',
    industry: 'Hospitality',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'transport',
    name: 'Transport Operators',
    icon: '🚌',
    industry: 'Transportation',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'events',
    name: 'Event Organizers',
    icon: '🎪',
    industry: 'Events',
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'churches',
    name: 'Churches',
    icon: '⛪',
    industry: 'Religious',
    color: 'from-amber-500 to-amber-600',
  },
  {
    id: 'ngos',
    name: 'NGOs',
    icon: '🤝',
    industry: 'Non-Profit',
    color: 'from-rose-500 to-rose-600',
  },
  {
    id: 'businesses',
    name: 'Businesses',
    icon: '💼',
    industry: 'Corporate',
    color: 'from-indigo-500 to-indigo-600',
  },
];