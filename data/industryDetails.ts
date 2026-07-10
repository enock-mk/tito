export interface DetailPageData {
  id: string;
  title: string;
  description: string;
  heroIntro: string;
  heroText: string;
  problemQuestions: string[];
  solutionText: string;
  features: string[];
  workflow: string[];
  faqs: { question: string; answer: string }[];
}

export const industryPages: DetailPageData[] = [
  {
    id: 'hotels',
    title: 'Hotels',
    description: 'Simplify hotel reservations, room inventory, guest services, and revenue management with TiTO.',
    heroIntro: 'Hospitality Operations',
    heroText: 'Bring reservations, room assignments, housekeeping, and guest communications into one digital hotel operations platform.',
    problemQuestions: [
      'Room inventory is not synced?',
      'Guest details are stored in spreadsheets?',
      'Check-in and checkout are slow?',
      'Revenue is hard to forecast?',
    ],
    solutionText:
      'TiTO helps hotels manage availability, bookings, customer profiles, payments, and front-desk workflows from one intuitive dashboard.',
    features: [
      'Room Inventory',
      'Multi-channel Booking',
      'Guest Profiles',
      'Housekeeping Status',
      'Payment Processing',
      'Rate Management',
      'Guest Messaging',
      'Analytics',
      'Loyalty Tracking',
    ],
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
    id: 'bus-operators',
    title: 'Bus Operators',
    description: 'Optimize your bus routes, ticket sales, crew assignments, and boarding processes with TiTO.',
    heroIntro: 'Bus Operations',
    heroText: 'Manage route planning, seat assignments, ticketing, driver apps, and passenger check-in from one transport operations hub.',
    problemQuestions: [
      'Schedules change last minute?',
      'Ticket sales are hard to reconcile?',
      'Driver assignments are manual?',
      'Boarding is chaotic?',
    ],
    solutionText:
      'TiTO automates bus scheduling, route management, ticketing, manifests, and driver coordination to keep your fleet moving smoothly.',
    features: [
      'Route Planning',
      'Fleet Tracking',
      'Ticket Management',
      'Driver App',
      'Seat Allocation',
      'Manifest Generation',
      'Payments',
      'Customer Notifications',
      'Analytics',
    ],
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
    id: 'event-organizers',
    title: 'Event Organizers',
    description: 'Sell tickets, manage attendees, handle access control, and measure event performance with TiTO.',
    heroIntro: 'Event Management',
    heroText: 'Plan and run events with registration, ticketing, check-in, and engagement tools for a seamless attendee experience.',
    problemQuestions: [
      'Ticket inventory is difficult to manage?',
      'Attendee check-in is slow?',
      'Access control is not centralized?',
      'Post-event insights are missing?',
    ],
    solutionText:
      'TiTO centralizes event registration, seating, ticketing, guest management, and event analytics so organizers can focus on creating great experiences.',
    features: [
      'Event Publishing',
      'Ticketing',
      'Registration Forms',
      'Check-In Tools',
      'Attendee Lists',
      'QR Scanning',
      'Promotions',
      'Reporting',
      'Event Communication',
    ],
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
    description: 'Manage vehicle rental availability, bookings, driver assignments, and customer pickups with TiTO.',
    heroIntro: 'Vehicle Rental',
    heroText: 'Coordinate your fleet, booking calendar, drivers, payments, and pickup workflows from a single car hire platform.',
    problemQuestions: [
      'Fleet availability is not up to date?',
      'Bookings overlap vehicles?',
      'Driver schedules conflict?',
      'Payment collection is inconsistent?',
    ],
    solutionText:
      'TiTO provides a unified car hire experience for reservations, vehicle management, driver coordination, contract generation, and customer communications.',
    features: [
      'Vehicle Inventory',
      'Booking Calendar',
      'Driver Scheduling',
      'Rental Agreements',
      'Secure Payments',
      'Customer Portal',
      'Fleet Reporting',
      'Return Management',
      'Service Alerts',
    ],
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
    description: 'Run donation campaigns, event ticketing, supporter communications, and impact reporting in one platform.',
    heroIntro: 'Fundraising Operations',
    heroText: 'Drive fundraising campaigns, collect donations, sell event tickets, and report on supporter impact with TiTO.',
    problemQuestions: [
      'Donations and tickets are disconnected?',
      'Campaign performance is unclear?',
      'Supporter follow-up is inconsistent?',
      'Reporting is manual and slow?',
    ],
    solutionText:
      'TiTO connects your donation pages, ticket sales, supporter data, and campaign reporting so your team can raise more with less effort.',
    features: [
      'Donation Pages',
      'Ticketing',
      'Supporter CRM',
      'Payment Tracking',
      'Campaign Reporting',
      'Event Management',
      'Thank You Messaging',
      'Recurring Donations',
      'Impact Dashboards',
    ],
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
];
