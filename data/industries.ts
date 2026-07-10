// data/industries.ts
import {
  Hotel,
  Bus,
  Calendar,
  Car,
  Heart,
  Church,
  Users,
  GraduationCap,
  Building2,
  LucideIcon,
} from 'lucide-react';

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string; // URL to industry image
  gradient: string;
  color: string;
  stats: string;
  href: string;
  features: string[];
  count?: number;
  // Detail page fields
  heroIntro?: string;
  heroText?: string;
  problemQuestions?: string[];
  solutionText?: string;
  workflow?: string[];
  faqs?: { question: string; answer: string }[];
  industryCategory?: string;
  slug?: string;
}

export const industries: Industry[] = [
  {
    id: 'hotels',
    title: 'Hotels',
    description: 'Streamline hotel operations from booking to check-out. Manage rooms, reservations, and guest experiences.',
    icon: Hotel,
    image: '/images/industries/hotels.jpg',
    gradient: 'from-blue-500 to-blue-600',
    color: 'blue',
    stats: '120+ hotels',
    href: '/industries/hotels',
    features: ['Room Management', 'Online Booking', 'Guest Profiles', 'Revenue Analytics'],
    slug: 'hotels',
    industryCategory: 'Hospitality',
    heroIntro: 'Hospitality Operations',
    heroText: 'Bring reservations, room assignments, housekeeping, and guest communications into one digital hotel operations platform.',
    problemQuestions: [
      'Room inventory is not synced?',
      'Guest details are stored in spreadsheets?',
      'Check-in and checkout are slow?',
      'Revenue is hard to forecast?',
    ],
    solutionText: 'TiTO helps hotels manage availability, bookings, customer profiles, payments, and front-desk workflows from one intuitive dashboard.',
    workflow: [
      'Create Rooms',
      'Open Availability',
      'Receive Booking',
      'Prepare Room',
      'Check In Guest',
      'Review Performance',
    ],
    faqs: [
      {
        question: 'Can TiTO sync hotel bookings with OTAs?',
        answer: 'Yes. TiTO supports channel management so your availability stays consistent across direct bookings and third-party sites.',
      },
      {
        question: 'Does the platform support guest preferences and loyalty?',
        answer: 'Yes. Keep guest profiles, notes, and loyalty details in one place so your team can personalize every stay.',
      },
      {
        question: 'Can housekeeping receive room updates in real time?',
        answer: 'Yes. Room status updates and clean schedules keep operations aligned from front desk to housekeeping teams.',
      },
    ],
  },
  {
    id: 'transport',
    title: 'Bus Operators',
    description: 'Optimize routes, manage fleets, and handle ticket sales. Real-time tracking and passenger management.',
    icon: Bus,
    image: '/images/industries/transport.jpg',
    gradient: 'from-green-500 to-green-600',
    color: 'green',
    stats: '50+ operators',
    href: '/industries/bus-operators',
    features: ['Fleet Management', 'Route Planning', 'Ticket Sales', 'Driver App'],
    slug: 'bus-operators',
    industryCategory: 'Transportation',
    heroIntro: 'Bus Operations',
    heroText: 'Manage route planning, seat assignments, ticketing, driver apps, and passenger check-in from one transport operations hub.',
    problemQuestions: [
      'Schedules change last minute?',
      'Ticket sales are hard to reconcile?',
      'Driver assignments are manual?',
      'Boarding is chaotic?',
    ],
    solutionText: 'TiTO automates bus scheduling, route management, ticketing, manifests, and driver coordination to keep your fleet moving smoothly.',
    workflow: [
      'Plan Route',
      'Publish Schedule',
      'Sell Tickets',
      'Assign Driver',
      'Board Passengers',
      'Close Trip',
    ],
    faqs: [
      {
        question: 'Can TiTO handle different bus service types and routes?',
        answer: 'Yes. Whether you run scheduled routes or charter services, TiTO adapts to your bus operation model.',
      },
      {
        question: 'Is there support for seat-specific ticketing?',
        answer: 'Yes. Allocate seats automatically and let passengers choose their preferred spots during booking.',
      },
      {
        question: 'Can drivers access manifests and trip details on mobile?',
        answer: 'Yes. TiTO provides driver-facing tools to view schedules, passenger lists, and route information.',
      },
    ],
  },
  {
    id: 'events',
    title: 'Event Organizers',
    description: 'Simplify event planning and ticketing. Manage registrations, seating, and attendee engagement.',
    icon: Calendar,
    image: '/images/industries/events.jpg',
    gradient: 'from-purple-500 to-purple-600',
    color: 'purple',
    stats: '200+ events',
    href: '/industries/event-organizers',
    features: ['Ticket Sales', 'Seating Charts', 'Check-in', 'Attendee Analytics'],
    slug: 'event-organizers',
    industryCategory: 'Events',
    heroIntro: 'Event Management',
    heroText: 'Plan and run events with registration, ticketing, check-in, and engagement tools for a seamless attendee experience.',
    problemQuestions: [
      'Ticket inventory is difficult to manage?',
      'Attendee check-in is slow?',
      'Access control is not centralized?',
      'Post-event insights are missing?',
    ],
    solutionText: 'TiTO centralizes event registration, seating, ticketing, guest management, and event analytics so organizers can focus on creating great experiences.',
    workflow: [
      'Create Event',
      'Sell Tickets',
      'Manage Attendees',
      'Run Check-In',
      'Host Event',
      'Review Metrics',
    ],
    faqs: [
      {
        question: 'Does TiTO support different ticket categories?',
        answer: 'Yes. Create general admission, VIP, early bird, and group tickets with custom pricing.',
      },
      {
        question: 'Can attendees receive digital tickets instantly?',
        answer: 'Yes. Digital tickets are delivered immediately after purchase and can be scanned on entry.',
      },
      {
        question: 'Is it easy to manage event access control?',
        answer: 'Yes. Use attendee lists and QR code scanning to validate entries quickly and securely.',
      },
    ],
  },
  {
    id: 'car-hire',
    title: 'Car Hire',
    description: 'Manage vehicle rentals, fleet availability, and customer bookings. Real-time inventory management.',
    icon: Car,
    image: '/images/industries/car-hire.jpg',
    gradient: 'from-orange-500 to-orange-600',
    color: 'orange',
    stats: '30+ fleets',
    href: '/industries/car-hire',
    features: ['Vehicle Management', 'Booking System', 'Payment Processing', 'Fleet Analytics'],
    slug: 'car-hire',
    industryCategory: 'Transportation',
    heroIntro: 'Vehicle Rental',
    heroText: 'Coordinate your fleet, booking calendar, drivers, payments, and pickup workflows from a single car hire platform.',
    problemQuestions: [
      'Fleet availability is not up to date?',
      'Bookings overlap vehicles?',
      'Driver schedules conflict?',
      'Payment collection is inconsistent?',
    ],
    solutionText: 'TiTO provides a unified car hire experience for reservations, vehicle management, driver coordination, contract generation, and customer communications.',
    workflow: [
      'List Vehicles',
      'Open Booking',
      'Confirm Reservation',
      'Assign Driver',
      'Complete Pickup',
      'Collect Payment',
    ],
    faqs: [
      {
        question: 'Can TiTO manage hourly and daily rentals?',
        answer: 'Yes. Configure flexible pricing rules for short-term and long-term rental offerings.',
      },
      {
        question: 'Does the platform handle driver coordination?',
        answer: 'Yes. Pair bookings with drivers and update assignments automatically as schedules change.',
      },
      {
        question: 'Can customers pay online before pickup?',
        answer: 'Yes. TiTO supports secure online payments so customers arrive ready to go.',
      },
    ],
  },
  {
    id: 'fundraising',
    title: 'Fundraising',
    description: 'Power your fundraising campaigns with ticketing, donations, and event management tools.',
    icon: Heart,
    image: '/images/industries/fundraising.jpg',
    gradient: 'from-rose-500 to-rose-600',
    color: 'rose',
    stats: '$2M+ raised',
    href: '/industries/fundraising',
    features: ['Donation Management', 'Event Ticketing', 'Campaign Tracking', 'Supporter Analytics'],
    slug: 'fundraising',
    industryCategory: 'Non-Profit',
    heroIntro: 'Fundraising Operations',
    heroText: 'Drive fundraising campaigns, collect donations, sell event tickets, and report on supporter impact with TiTO.',
    problemQuestions: [
      'Donations and tickets are disconnected?',
      'Campaign performance is unclear?',
      'Supporter follow-up is inconsistent?',
      'Reporting is manual and slow?',
    ],
    solutionText: 'TiTO connects your donation pages, ticket sales, supporter data, and campaign reporting so your team can raise more with less effort.',
    workflow: [
      'Launch Campaign',
      'Invite Supporters',
      'Collect Gifts',
      'Host Event',
      'Share Impact',
      'Analyze Results',
    ],
    faqs: [
      {
        question: 'Can TiTO manage donation pages and event ticketing together?',
        answer: 'Yes. Give supporters the choice to donate, buy tickets, or do both through the same platform.',
      },
      {
        question: 'Does the system provide campaign reporting?',
        answer: 'TiTO tracks ticket sales, donations, revenue, and supporter activity in intuitive campaign reports.',
      },
      {
        question: 'Is supporter data stored securely?',
        answer: 'Yes. TiTO follows best practices for payment security and data protection to keep donor information safe.',
      },
    ],
  },
  {
    id: 'churches',
    title: 'Churches',
    description: 'Manage services, events, and donations. Connect with your congregation and streamline operations.',
    icon: Church,
    image: '/images/industries/churches.jpg',
    gradient: 'from-amber-500 to-amber-600',
    color: 'amber',
    stats: '100+ churches',
    href: '/industries/churches',
    features: ['Service Management', 'Event Booking', 'Donation Tracking', 'Member Management'],
    slug: 'churches',
    industryCategory: 'Religious',
    heroIntro: 'Church Operations',
    heroText: 'Coordinate services, events, volunteer scheduling, and donation management from one church operations platform.',
    problemQuestions: [
      'Service schedules are hard to coordinate?',
      'Volunteer management is manual?',
      'Donation tracking is inconsistent?',
      'Member engagement is difficult?',
    ],
    solutionText: 'TiTO helps churches manage services, events, volunteer scheduling, donation tracking, and member communications in one platform.',
    workflow: [
      'Plan Service',
      'Schedule Volunteers',
      'Manage Events',
      'Track Donations',
      'Engage Members',
      'Review Impact',
    ],
    faqs: [
      {
        question: 'Can TiTO help with service and event planning?',
        answer: 'Yes. Plan services, schedule volunteers, and manage special events from one dashboard.',
      },
      {
        question: 'Is donation tracking integrated with member profiles?',
        answer: 'Yes. Track giving history and engagement alongside member information.',
      },
      {
        question: 'Can the platform help with volunteer coordination?',
        answer: 'Yes. Manage volunteer schedules, roles, and communications with ease.',
      },
    ],
  },
];

export const industryCategories = [
  {
    id: 'hospitality',
    title: 'Hospitality',
    industries: industries.filter(i => ['hotels'].includes(i.id)),
  },
  {
    id: 'transportation',
    title: 'Transportation',
    industries: industries.filter(i => ['transport', 'car-hire'].includes(i.id)),
  },
  {
    id: 'events',
    title: 'Events & Fundraising',
    industries: industries.filter(i => ['events', 'fundraising'].includes(i.id)),
  },
  {
    id: 'community',
    title: 'Community & Faith',
    industries: industries.filter(i => ['churches'].includes(i.id)),
  },
];