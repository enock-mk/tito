// data/documentation.ts
export interface DocArticle {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: string;
  readingTime: string;
  updatedAt: string;
  author?: string;
  popular?: boolean;
  new?: boolean;
  relatedArticles?: string[];
  tableOfContents?: {
    id: string;
    title: string;
    level: number;
  }[];
}

export const docArticles: DocArticle[] = [
  {
    id: 'what-is-tito',
    title: 'What is TiTO?',
    slug: 'what-is-tito',
    description: 'An overview of TiTO and its core features.',
    category: 'getting-started',
    readingTime: '3 min',
    updatedAt: '2026-06-15',
    popular: true,
    content: `
      <p>TiTO is a modern booking and management platform designed for businesses of all sizes. It provides a comprehensive solution for managing bookings, payments, customers, and analytics in one place.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Smart Bookings:</strong> Accept and manage bookings from multiple channels with real-time availability.</li>
        <li><strong>Secure Payments:</strong> Process payments securely with multiple gateway options.</li>
        <li><strong>Customer Management:</strong> Build relationships with your customers through detailed profiles and history.</li>
        <li><strong>Analytics & Reports:</strong> Make data-driven decisions with comprehensive analytics and reporting.</li>
        <li><strong>Mobile Apps:</strong> Manage your business on the go with native iOS and Android apps.</li>
      </ul>
      
      <h2>Who Uses TiTO?</h2>
      <p>TiTO is used by businesses across multiple industries:</p>
      <ul>
        <li><strong>Hotels:</strong> Manage room inventory, reservations, and guest experiences.</li>
        <li><strong>Transport Operators:</strong> Optimize routes, manage fleets, and handle ticket sales.</li>
        <li><strong>Event Organizers:</strong> Simplify event planning, ticketing, and attendee management.</li>
        <li><strong>Car Hire Companies:</strong> Manage vehicle rentals, fleet availability, and customer bookings.</li>
        <li><strong>Fundraising Organizations:</strong> Power fundraising campaigns with ticketing, donations, and event management.</li>
        <li><strong>Churches:</strong> Manage services, events, and donations with ease.</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>Ready to get started with TiTO? Here's how:</p>
      <ol>
        <li><strong>Sign Up:</strong> Create your account and set up your business profile.</li>
        <li><strong>Configure:</strong> Set up your services, pricing, and preferences.</li>
        <li><strong>Onboard:</strong> Invite team members and start accepting bookings.</li>
      </ol>
    `,
    tableOfContents: [
      { id: 'key-features', title: 'Key Features', level: 2 },
      { id: 'who-uses-tito', title: 'Who Uses TiTO?', level: 2 },
      { id: 'getting-started', title: 'Getting Started', level: 2 },
    ],
    relatedArticles: ['create-account', 'dashboard-overview'],
  },
  {
    id: 'create-account',
    title: 'Creating Your Account',
    slug: 'create-account',
    description: 'Step-by-step guide to setting up your TiTO account.',
    category: 'getting-started',
    readingTime: '5 min',
    updatedAt: '2026-06-20',
    new: true,
    content: `
      <p>Creating a TiTO account is quick and easy. Follow this step-by-step guide to get started.</p>
      
      <h2>Step 1: Visit the Sign-Up Page</h2>
      <p>Go to the TiTO website and click the "Sign Up" button in the top right corner.</p>
      
      <h2>Step 2: Enter Your Details</h2>
      <p>Fill in the registration form with your:</p>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Password</li>
        <li>Company name</li>
      </ul>
      
      <h2>Step 3: Verify Your Email</h2>
      <p>Check your email for a verification link. Click the link to verify your account.</p>
      
      <h2>Step 4: Complete Your Profile</h2>
      <p>Log in and complete your profile information:</p>
      <ul>
        <li>Add your company logo</li>
        <li>Set your business hours</li>
        <li>Configure your services</li>
      </ul>
      
      <h2>Step 5: Start Using TiTO</h2>
      <p>You're all set! Start exploring the dashboard and setting up your services.</p>
    `,
    tableOfContents: [
      { id: 'step-1-visit-sign-up', title: 'Step 1: Visit the Sign-Up Page', level: 2 },
      { id: 'step-2-enter-details', title: 'Step 2: Enter Your Details', level: 2 },
      { id: 'step-3-verify-email', title: 'Step 3: Verify Your Email', level: 2 },
      { id: 'step-4-complete-profile', title: 'Step 4: Complete Your Profile', level: 2 },
      { id: 'step-5-start-using', title: 'Step 5: Start Using TiTO', level: 2 },
    ],
    relatedArticles: ['what-is-tito', 'dashboard-overview'],
  },
  {
    id: 'dashboard-overview',
    title: 'Dashboard Overview',
    slug: 'dashboard-overview',
    description: 'Understanding the TiTO dashboard and navigation.',
    category: 'getting-started',
    readingTime: '4 min',
    updatedAt: '2026-06-10',
    popular: true,
    content: `
      <p>The TiTO dashboard is your central command center for managing all aspects of your business.</p>
      
      <h2>Dashboard Layout</h2>
      <p>The dashboard is organized into several key sections:</p>
      <ul>
        <li><strong>Sidebar Navigation:</strong> Access all main features and sections.</li>
        <li><strong>Header:</strong> Quick access to search, notifications, and your profile.</li>
        <li><strong>Main Content Area:</strong> Where you'll see your data and manage your operations.</li>
      </ul>
      
      <h2>Key Sections</h2>
      <ul>
        <li><strong>Overview:</strong> A summary of your key metrics and recent activity.</li>
        <li><strong>Bookings:</strong> Manage all your bookings and reservations.</li>
        <li><strong>Customers:</strong> View and manage your customer database.</li>
        <li><strong>Analytics:</strong> Access detailed reports and insights.</li>
        <li><strong>Settings:</strong> Configure your account and preferences.</li>
      </ul>
    `,
    tableOfContents: [
      { id: 'dashboard-layout', title: 'Dashboard Layout', level: 2 },
      { id: 'key-sections', title: 'Key Sections', level: 2 },
    ],
    relatedArticles: ['what-is-tito', 'create-account'],
  },
  {
    id: 'manage-bookings',
    title: 'Managing Bookings',
    slug: 'manage-bookings',
    description: 'How to view, edit, and cancel bookings.',
    category: 'bookings',
    readingTime: '4 min',
    updatedAt: '2026-06-18',
    popular: true,
    content: `
      <p>TiTO makes it easy to manage all your bookings from one centralized dashboard.</p>
      
      <h2>Viewing Bookings</h2>
      <p>All your bookings are displayed in the Bookings section. You can:</p>
      <ul>
        <li>View all upcoming and past bookings</li>
        <li>Filter by date, status, or customer</li>
        <li>Search for specific bookings</li>
      </ul>
      
      <h2>Editing a Booking</h2>
      <p>To edit a booking:</p>
      <ol>
        <li>Click on the booking in the list</li>
        <li>Click the "Edit" button</li>
        <li>Make your changes</li>
        <li>Click "Save"</li>
      </ol>
      
      <h2>Cancelling a Booking</h2>
      <p>To cancel a booking:</p>
      <ol>
        <li>Open the booking details</li>
        <li>Click the "Cancel Booking" button</li>
        <li>Provide a reason for cancellation (optional)</li>
        <li>Confirm cancellation</li>
      </ol>
    `,
    tableOfContents: [
      { id: 'viewing-bookings', title: 'Viewing Bookings', level: 2 },
      { id: 'editing-a-booking', title: 'Editing a Booking', level: 2 },
      { id: 'cancelling-a-booking', title: 'Cancelling a Booking', level: 2 },
    ],
    relatedArticles: ['booking-settings', 'calendar-sync'],
  },
  {
    id: 'payment-gateways',
    title: 'Payment Gateways',
    slug: 'payment-gateways',
    description: 'Set up and configure payment gateways.',
    category: 'payments',
    readingTime: '6 min',
    updatedAt: '2026-06-14',
    popular: true,
    content: `
      <p>TiTO supports multiple payment gateways to give you and your customers flexibility.</p>
      
      <h2>Supported Gateways</h2>
      <ul>
        <li><strong>Stripe:</strong> Accept credit card payments securely.</li>
        <li><strong>PayPal:</strong> Global payment processing.</li>
        <li><strong>Mobile Money:</strong> M-Pesa, Orange Money, and more.</li>
        <li><strong>Bank Transfers:</strong> Direct bank transfer support.</li>
      </ul>
      
      <h2>Configuring a Gateway</h2>
      <p>To set up a payment gateway:</p>
      <ol>
        <li>Go to Settings → Payments</li>
        <li>Click "Add Payment Gateway"</li>
        <li>Select your preferred gateway</li>
        <li>Enter your API credentials</li>
        <li>Click "Save"</li>
      </ol>
    `,
    tableOfContents: [
      { id: 'supported-gateways', title: 'Supported Gateways', level: 2 },
      { id: 'configuring-gateway', title: 'Configuring a Gateway', level: 2 },
    ],
    relatedArticles: ['transaction-history', 'refund-policy'],
  },
];