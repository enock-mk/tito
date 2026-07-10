// data/testimonials.ts
import { 
  Hotel, 
  Bus, 
  Calendar, 
  Users,
  Star,
  Quote,
  LucideIcon
} from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  industryIcon: LucideIcon;
  content: string;
  rating: number;
  avatar: string; // URL to avatar image
  image?: string; // Optional company image
  date?: string;
  stats?: {
    label: string;
    value: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Hotel Grande',
    industry: 'Hospitality',
    industryIcon: Hotel,
    content: 'TiTO has transformed how we manage our hotel operations. Our booking efficiency has increased by 40%, and guest satisfaction is at an all-time high. The platform is intuitive and the support team is exceptional.',
    rating: 5,
    avatar: '/avatars/sarah-johnson.jpg',
    stats: {
      label: 'Revenue Growth',
      value: '+40%',
    },
  },
  {
    id: '2',
    name: 'Michael Okonkwo',
    role: 'Operations Manager',
    company: 'City Transport Ltd',
    industry: 'Transportation',
    industryIcon: Bus,
    content: 'Managing our fleet of 50 buses has never been easier. TiTO handles everything from route planning to ticket sales. Our drivers love the mobile app, and we\'ve seen a 30% increase in efficiency.',
    rating: 5,
    avatar: '/avatars/michael-okonkwo.jpg',
    stats: {
      label: 'Efficiency Increase',
      value: '+30%',
    },
  },
  {
    id: '3',
    name: 'Amara Okafor',
    role: 'Event Director',
    company: 'Lagos Events Co',
    industry: 'Events',
    industryIcon: Calendar,
    content: 'We\'ve organized over 200 events using TiTO. The ticketing system is seamless, and the check-in app has revolutionized our attendee management. Our customers love the experience.',
    rating: 5,
    avatar: '/avatars/amara-okafor.jpg',
    stats: {
      label: 'Events Managed',
      value: '200+',
    },
  },
  {
    id: '4',
    name: 'David Mensah',
    role: 'Lead Pastor',
    company: 'Grace Church',
    industry: 'Religious',
    industryIcon: Users,
    content: 'TiTO has helped us manage our services, events, and donations effectively. Our congregation has grown, and we can now focus on ministry rather than administration.',
    rating: 5,
    avatar: '/avatars/david-mensah.jpg',
    stats: {
      label: 'Congregation Growth',
      value: '+25%',
    },
  },
  {
    id: '5',
    name: 'Chioma Nwosu',
    role: 'Founder',
    company: 'Hope Foundation',
    industry: 'Non-Profit',
    industryIcon: Users,
    content: 'As a non-profit, we needed an affordable and reliable platform for our fundraising events. TiTO delivered beyond our expectations. We\'ve raised over $2M using their platform.',
    rating: 5,
    avatar: '/avatars/chioma-nwosu.jpg',
    stats: {
      label: 'Funds Raised',
      value: '$2M+',
    },
  },
  {
    id: '6',
    name: 'James Osei',
    role: 'General Manager',
    company: 'Express Rentals',
    industry: 'Car Hire',
    industryIcon: Hotel,
    content: 'Our car hire business has grown significantly since we started using TiTO. The fleet management features are top-notch, and our customers appreciate the easy booking process.',
    rating: 5,
    avatar: '/avatars/james-osei.jpg',
    stats: {
      label: 'Fleet Growth',
      value: '+45%',
    },
  },
];

export const testimonialStats = [
  {
    value: 98,
    label: 'Satisfaction Rate',
    suffix: '%',
    icon: Star,
  },
  {
    value: 120,
    label: 'Active Partners',
    suffix: '+',
    icon: Users,
  },
  {
    value: 4.8,
    label: 'Average Rating',
    suffix: '⭐',
    icon: Star,
  },
];