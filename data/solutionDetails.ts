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

export const solutionPages: DetailPageData[] = [
  {
    id: 'transport',
    title: 'Transport Management',
    description: 'Manage routes, seat allocations, driver workflows, payments, and revenue in one transport dashboard.',
    heroIntro: 'Transport Management',
    heroText: 'Run bus and transport operations from a modern control center that handles bookings, manifests, payments, and reporting.',
    problemQuestions: [
      'Managing routes manually?',
      'Seat allocation slowing down boarding?',
      'Payment reconciliation taking too long?',
      'Revenue leakage from empty seats?',
    ],
    solutionText:
      'TiTO brings every transport operation together in one dashboard. Plan routes, allocate seats automatically, accept payments securely, and close the gap on lost revenue with analytics built for operators.',
    features: [
      'Fleet Management',
      'Drivers',
      'Routes',
      'Schedules',
      'POS',
      'Manifest',
      'Ticket Sales',
      'Reporting',
      'Revenue Tracking',
    ],
    workflow: [
      'Create Route',
      'Assign Bus',
      'Passengers Book',
      'Driver App',
      'Check In',
      'Reports',
    ],
    faqs: [
      {
        question: 'Can TiTO handle multiple routes and vehicles at once?',
        answer: 'Yes. TiTO is built for multi-route transport operations and lets you manage buses, drivers, schedules, and bookings from one dashboard.',
      },
      {
        question: 'Does the platform support electronic manifests and check-in?',
        answer: 'Yes. You can generate manifests, assign seats, and check passengers in with a driver app or terminal scanner.',
      },
      {
        question: 'How does revenue tracking work for transport operators?',
        answer: 'TiTO combines ticket sales, payments, commissions, and refunds into intuitive reports so you can track revenue and reduce leakage.',
      },
    ],
  },
  {
    id: 'hospitality',
    title: 'Hospitality Management',
    description: 'Streamline hotel reservations, room inventory, guest communications, and housekeeping workflows.',
    heroIntro: 'Hospitality Management',
    heroText: 'Manage hotel bookings, room assignments, guest experiences, and revenue from a single hospitality platform.',
    problemQuestions: [
      'Too many manual reservation updates?',
      'Rooms booked without availability sync?',
      'Guests asking for better communication?',
      'Difficulty tracking occupancy?',
    ],
    solutionText:
      'TiTO automates room availability, guest profiles, pricing, and check-in workflows so your hospitality staff can focus on guest satisfaction rather than manual coordination.',
    features: [
      'Room Management',
      'Reservations',
      'Guest Profiles',
      'Channel Sync',
      'Housekeeping',
      'Payments',
      'Reporting',
      'Loyalty Tools',
      'Revenue Optimization',
    ],
    workflow: [
      'List Rooms',
      'Publish Availability',
      'Guest Books',
      'Confirm Stay',
      'Deliver Service',
      'Measure Revenue',
    ],
    faqs: [
      {
        question: 'Can TiTO manage both small properties and hotel chains?',
        answer: 'Absolutely. TiTO scales from boutique hotels to multi-property operations with centralized reservation and inventory management.',
      },
      {
        question: 'Does TiTO support guest communications and upsells?',
        answer: 'Yes. You can send booking confirmations, pre-arrival messages, and special offers directly from the platform.',
      },
      {
        question: 'Is housekeeping coordination included?',
        answer: 'Yes. TiTO tracks room status, cleans schedules, and syncs with bookings so housekeeping teams stay aligned.',
      },
    ],
  },
  {
    id: 'events',
    title: 'Events Management',
    description: 'Sell tickets, manage registrations, control access, and analyze attendee performance with event tools.',
    heroIntro: 'Events Management',
    heroText: 'Run event ticketing, check-in, seating, and audience engagement from a single event operations dashboard.',
    problemQuestions: [
      'Event ticketing is fragmented?',
      'Guest registration is hard to manage?',
      'Check-in lines are slow?',
      'Attendee reporting is incomplete?',
    ],
    solutionText:
      'TiTO brings event creation, ticketing, attendee lists, check-in, and analytics together so organizers can deliver memorable experiences and run events with confidence.',
    features: [
      'Ticket Sales',
      'Registration',
      'Seating',
      'Check-in',
      'QR Tickets',
      'Promotions',
      'Analytics',
      'Access Control',
      'Attendee Management',
    ],
    workflow: [
      'Create Event',
      'Publish Tickets',
      'Promote Event',
      'Attendees Register',
      'Manage Access',
      'Review Insights',
    ],
    faqs: [
      {
        question: 'Can TiTO handle events with different ticket tiers?',
        answer: 'Yes. Create multiple ticket types, early bird pricing, VIP packages, and promotional codes with ease.',
      },
      {
        question: 'Does the platform support mobile check-in?',
        answer: 'Yes. Use digital tickets and mobile scanning tools to speed up guest entry and reduce lines.',
      },
      {
        question: 'Can I get attendee analytics after an event?',
        answer: 'Yes. TiTO provides attendance, sales, revenue, and customer data so you can improve future events.',
      },
    ],
  },
  {
    id: 'fundraising',
    title: 'Fundraising Management',
    description: 'Sell tickets, track donations, manage campaigns, and engage supporters with fundraising tools.',
    heroIntro: 'Fundraising Management',
    heroText: 'Empower your nonprofit or fundraising event with ticketing, donor management, donation tracking, and campaign analytics.',
    problemQuestions: [
      'Donor data is scattered?',
      'Campaign payments are hard to reconcile?',
      'Event ticketing and donations are separate?',
      'Supporter engagement is inconsistent?',
    ],
    solutionText:
      'TiTO combines fundraising ticketing, donor journeys, payment collection, and campaign reporting so teams can focus on impact instead of manual tasks.',
    features: [
      'Donation Pages',
      'Ticketing',
      'Campaign Tracking',
      'Supporter CRM',
      'Payment Reconciliation',
      'Promotions',
      'Reporting',
      'Volunteer Coordination',
      'Impact Metrics',
    ],
    workflow: [
      'Launch Campaign',
      'Publish Tickets',
      'Collect Donations',
      'Engage Supporters',
      'Run Events',
      'Share Results',
    ],
    faqs: [
      {
        question: 'Can TiTO accept donations alongside ticket sales?',
        answer: 'Yes. Donations and tickets can be collected in the same workflow, with consolidated payment tracking and reporting.',
      },
      {
        question: 'Does the platform support recurring donations?',
        answer: 'TiTO supports one-time and recurring giving so you can build long-term supporter relationships.',
      },
      {
        question: 'Can I use TiTO for live and virtual fundraising events?',
        answer: 'Yes. The platform works for in-person events, online fundraisers, and hybrid campaigns.',
      },
    ],
  },
  {
    id: 'car-hire',
    title: 'Car Hire Management',
    description: 'Coordinate vehicle availability, bookings, drivers, payments, and rental contracts in one platform.',
    heroIntro: 'Car Hire Management',
    heroText: 'Run your vehicle rental business with scheduling, fleet availability, customer bookings, and secure payments from a single dashboard.',
    problemQuestions: [
      'Fleet availability is hard to track?',
      'Contracts and payments are manual?',
      'Drivers are not synced with bookings?',
      'Customer pickup is confusing?',
    ],
    solutionText:
      'TiTO centralizes fleet management, booking workflows, driver assignments, payments, and customer communications so your car hire service runs smoothly every day.',
    features: [
      'Vehicle Inventory',
      'Booking Calendar',
      'Driver Assignments',
      'Rental Contracts',
      'Payments',
      'Fleet Maintenance',
      'Customer Portal',
      'Reporting',
      'Pricing Rules',
    ],
    workflow: [
      'List Vehicles',
      'Accept Bookings',
      'Assign Driver',
      'Collect Payment',
      'Deliver Vehicle',
      'Capture Feedback',
    ],
    faqs: [
      {
        question: 'Can TiTO manage multiple vehicle categories and rates?',
        answer: 'Yes. Define car classes, rate rules, insurance options, and add-ons for each rental product.',
      },
      {
        question: 'Does the platform help with driver coordination?',
        answer: 'TiTO links bookings to drivers and schedules so pickups, drop-offs, and handovers stay organized.',
      },
      {
        question: 'Can customers book and pay online?',
        answer: 'Yes. Customers can reserve vehicles, select extras, and complete secure payments through the platform.',
      },
    ],
  },
  {
    id: 'custom',
    title: 'Custom Solutions',
    description: 'Tailored solutions for unique business needs and workflows.',
    heroIntro: 'Custom Solutions',
    heroText: 'Get a platform that adapts to your specific requirements, whether you need unique features or a completely customized experience.',
    problemQuestions: [
      'Off-the-shelf solutions don\'t fit your needs?',
      'Your workflow requires custom features?',
      'Integration with existing systems is complex?',
      'You need a solution that scales with your business?',
    ],
    solutionText:
      'TiTO\'s flexible platform can be customized to fit your unique business requirements, with tailored workflows, integrations, and support.',
    features: [
      'Custom Workflows',
      'Tailored Integrations',
      'White-label Options',
      'Dedicated Support',
      'Flexible Pricing',
      'API Access',
      'Custom Reporting',
      'Data Migration',
      'Training & Onboarding',
    ],
    workflow: [
      'Consultation',
      'Requirements Gathering',
      'Solution Design',
      'Development',
      'Testing',
      'Deployment',
    ],
    faqs: [
      {
        question: 'How long does it take to build a custom solution?',
        answer: 'Timeline varies based on complexity. Typically 4-12 weeks from requirements to deployment.',
      },
      {
        question: 'Can you integrate with our existing systems?',
        answer: 'Yes. TiTO offers API access and custom integration services for your existing tools and platforms.',
      },
      {
        question: 'What support is included with custom solutions?',
        answer: 'Custom solutions include dedicated support, training, and ongoing maintenance.',
      },
    ],
  }
];
