// data/navigation.ts
export interface NavItem {
  label: string;
  href: string;
  megaMenu?: boolean;
  dropdown?: boolean;
  items?: DropdownItem[];
  icon?: string;
  description?: string;
}

export interface DropdownItem {
  label: string;
  href: string;
  icon?: string;
  description?: string;
}

export interface MegaMenuSection {
  title: string;
  items: DropdownItem[];
}

export const mainNavItems: NavItem[] = [
  {
    label: 'Platform',
    href: '/platform',
    megaMenu: true,
  },
  {
    label: 'Solutions',
    href: '/solutions',
    megaMenu: true,
  },
  {
    label: 'Industries',
    href: '/industries',
    megaMenu: true,
  },
  {
    label: 'Resources',
    href: '/resources',
    dropdown: true,
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Help Centre', href: '/help' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Release Notes', href: '/release-notes' },
      { label: 'Downloads', href: '/#download' },
    ],
  },
  {
    label: 'Company',
    href: '/company',
    dropdown: true,
    items: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Partners', href: '/partners' },
      { label: 'Contact', href: '/contact' },
      { label: 'Media Kit', href: '/media-kit' },
    ],
  },
];

export const megaMenuData: Record<string, MegaMenuSection[]> = {
  Platform: [
    {
      title: 'Platform',
      items: [
        { label: 'Overview', href: '/platform' },
        {
          label: 'Features',
          href: '/platform/features',
          description: 'Manage bookings, payments, customers and operations from one dashboard.',
        },
        {
          label: 'Integrations',
          href: '/platform/integrations',
          description: 'Connect payment gateways, calendars, and partner systems.',
        },
        {
          label: 'Security',
          href: '/platform/security',
          description: 'Built for enterprise-grade credentials, roles and compliance.',
        },
      ],
    },
    {
      title: 'Insights',
      items: [
        {
          label: 'Analytics & Reporting',
          href: '/platform/analytics',
          description: 'Measure performance and improve booking efficiency.',
        },
        {
          label: 'Mobile Apps',
          href: '/platform/mobile',
          description: 'Operate from desktop or on the go with native mobile tools.',
        },
        {
          label: 'Pricing',
          href: '/platform/pricing',
          description: 'Plans designed for operators, hotels and events.',
        },
        {
          label: 'Workflow',
          href: '/platform/workflow',
          description: 'See what’s coming next for TiTO.',
        },
      ],
    },
  ],
  Solutions: [
    {
      title: 'Solutions',
      items: [
        {
          label: 'Travel & Transport',
          href: '/solutions/transport',
          description: 'Manage routes, fleets, manifests, payments and bookings.',
        },
        {
          label: 'Hospitality',
          href: '/solutions/hospitality',
          description: 'Streamline guest bookings, rooms and customer care.',
        },
        {
          label: 'Events',
          href: '/solutions/events',
          description: 'Run ticketing, check-in and event operations in one place.',
        },
        {
          label: 'Car Hire',
          href: '/solutions/car-hire',
          description: 'Coordinate vehicles, contracts, drivers and payments.',
        },
        {
          label: 'Fundraising',
          href: '/solutions/fundraising',
          description: 'Sell tickets, manage donors and capture every contribution.',
        },
        {
          label: 'Custom Solutions',
          href: '/solutions/custom',
          description: 'Build workflows tailored to your business and operations.',
        },
      ],
    },
  ],
  Industries: [
    {
      title: 'Industries',
      items: [
        { label: 'Hotels', href: '/industries/hotels' },
        { label: 'Bus Operators', href: '/industries/bus-operators' },
        { label: 'Event Organizers', href: '/industries/event-organizers' },
        { label: 'Car Hire Companies', href: '/industries/car-hire' },
        { label: 'Churches', href: '/industries/churches' },
        { label: 'NGOs', href: '/industries/ngos' },
        { label: 'Universities', href: '/industries/universities' },
        { label: 'Government', href: '/industries/government' },
        { label: 'Fundraising', href: '/industries/fundraising' }
      ],
    },
  ],
};