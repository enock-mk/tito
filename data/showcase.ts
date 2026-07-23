// data/showcase.ts
export interface DashboardImage {
  id: string;
  title: string;
  description: string;
  image: string;
  industry: string;
  device: 'laptop' | 'tablet' | 'phone';
}

export interface ShowcaseIndustry {
  id: string;
  name: string;
  icon: string;
  dashboards: DashboardImage[];
}

export const showcaseIndustries: ShowcaseIndustry[] = [
  {
    id: 'hotels',
    name: 'Hotel Management',
    icon: '🏨',
    dashboards: [
      {
        id: 'hotel-dashboard',
        title: 'Hotel Dashboard',
        description: 'Manage room inventory, reservations, and guest check-ins',
        image: '/dashboards/hotel-dashboard.png',
        industry: 'hotels',
        device: 'laptop',
      },
      {
        id: 'hotel-bookings',
        title: 'Room Bookings',
        description: 'View and manage all hotel bookings in one place',
        image: '/dashboards/hotel-bookings.png',
        industry: 'hotels',
        device: 'tablet',
      },
      {
        id: 'hotel-mobile',
        title: 'Guest App',
        description: 'Mobile app for guests to book and manage stays',
        image: '/dashboards/hotel-mobile.png',
        industry: 'hotels',
        device: 'phone',
      },
    ],
  },
  {
    id: 'transport',
    name: 'Transport Management',
    icon: '🚌',
    dashboards: [
      {
        id: 'transport-dashboard',
        title: 'Transport Dashboard',
        description: 'Monitor fleet, routes, and real-time tracking',
        image: '/dashboards/transport-dashboard.jpeg',
        industry: 'transport',
        device: 'laptop',
      },
      {
        id: 'transport-routes',
        title: 'Route Planning',
        description: 'Optimize routes and manage schedules',
        image: '/dashboards/transport-routes.jpeg',
        industry: 'transport',
        device: 'tablet',
      },
      {
        id: 'transport-driver',
        title: 'Driver App',
        description: 'Mobile app for drivers to manage trips and check-ins',
        image: '/dashboards/transport-driver.png',
        industry: 'transport',
        device: 'phone',
      },
    ],
  },
  {
    id: 'events',
    name: 'Event Management',
    icon: '🎪',
    dashboards: [
      {
        id: 'events-app',
        title: 'Events App',
        description: 'Manage events, ticketing, and attendee tracking',
        image: '/dashboards/events-app.jpeg',
        industry: 'events',
        device: 'phone',
      },
      {
        id: 'events-ticketing',
        title: 'Ticketing System',
        description: 'Sell tickets and manage seating arrangements',
        image: '/dashboards/events-ticketing.jpeg',
        industry: 'events',
        device: 'tablet',
      },
      {
        id: 'events-checkin',
        title: 'Check-in App',
        description: 'Mobile app for attendee check-in and management',
        image: '/dashboards/events-checkin.jpeg',
        industry: 'events',
        device: 'phone',
      },
    ],
  },
];

// Placeholder images for development
export const placeholderDashboards: Record<string, string> = {
  'hotel-dashboard': '/placeholder/hotel-dashboard.jpg',
  'hotel-bookings': '/placeholder/hotel-bookings.jpg',
  'hotel-mobile': '/placeholder/hotel-mobile.jpg',
  'transport-dashboard': '/placeholder/transport-dashboard.jpg',
  'transport-routes': '/placeholder/transport-routes.jpg',
  'transport-driver': '/placeholder/transport-driver.jpg',
  'events-dashboard': '/placeholder/events-dashboard.jpg',
  'events-ticketing': '/placeholder/events-ticketing.jpg',
  'events-checkin': '/placeholder/events-checkin.jpg',
};