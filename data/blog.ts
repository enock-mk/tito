// data/blog.ts
import {
  Calendar,
  Clock,
  User,
  Tag,
  MessageSquare,
  Heart,
  Share2,
  Eye,
} from 'lucide-react';

export interface BlogAuthor {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  role: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: BlogAuthor;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  views: number;
  likes: number;
  comments: number;
  featured?: boolean;
  relatedPosts?: string[];
}

export const blogAuthors: Record<string, BlogAuthor> = {
  'sarah-johnson': {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    avatar: '/avatars/sarah-johnson.jpg',
    bio: 'Sarah is the CEO of Hotel Grande and a passionate advocate for digital transformation in hospitality.',
    role: 'Guest Contributor',
    social: {
      twitter: 'sarahjohnson',
      linkedin: 'sarahjohnson',
    },
  },
  'michael-okonkwo': {
    id: 'michael-okonkwo',
    name: 'Michael Okonkwo',
    avatar: '/avatars/michael-okonkwo.jpg',
    bio: 'Michael is the Operations Manager at City Transport Ltd with over 15 years of experience in fleet management.',
    role: 'Guest Contributor',
    social: {
      twitter: 'michaelokonkwo',
      linkedin: 'michaelokonkwo',
    },
  },
  'amara-okafor': {
    id: 'amara-okafor',
    name: 'Amara Okafor',
    avatar: '/avatars/amara-okafor.jpg',
    bio: 'Amara is an Event Director at Lagos Events Co and has organized over 200 successful events across Africa.',
    role: 'Guest Contributor',
    social: {
      twitter: 'amaraokafor',
      linkedin: 'amaraokafor',
    },
  },
  'chioma-nwosu': {
    id: 'chioma-nwosu',
    name: 'Chioma Nwosu',
    avatar: '/avatars/chioma-nwosu.jpg',
    bio: 'Chioma is the Founder of Hope Foundation and a passionate advocate for using technology for social good.',
    role: 'Guest Contributor',
    social: {
      twitter: 'chiomanwosu',
      linkedin: 'chiomanwosu',
    },
  },
  'david-mensah': {
    id: 'david-mensah',
    name: 'David Mensah',
    avatar: '/avatars/david-mensah.jpg',
    bio: 'David is the Lead Pastor at Grace Church and has been using TiTO to manage church operations for over 2 years.',
    role: 'Guest Contributor',
    social: {
      twitter: 'davidmensah',
      linkedin: 'davidmensah',
    },
  },
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Ways to Increase Hotel Bookings Using Technology',
    slug: 'increase-hotel-bookings-technology',
    excerpt: 'Discover how modern technology can help hotels boost their booking rates and improve guest satisfaction.',
    content: `
      <p>The hospitality industry has been transformed by technology in recent years. Hotels that embrace digital solutions are seeing significant increases in direct bookings and guest satisfaction.</p>
      
      <h2>1. Implement a Modern Booking Engine</h2>
      <p>A user-friendly booking engine is essential for converting visitors into guests. Look for features like:</p>
      <ul>
        <li>Real-time availability updates</li>
        <li>Mobile-responsive design</li>
        <li>Multiple payment options</li>
        <li>Upsell opportunities</li>
      </ul>
      
      <h2>2. Leverage Social Media</h2>
      <p>Social media platforms are powerful tools for reaching potential guests. Share high-quality photos, guest testimonials, and special offers regularly.</p>
      
      <h2>3. Personalize the Guest Experience</h2>
      <p>Use data to personalize communications and offers. Guests appreciate when you remember their preferences and previous stays.</p>
      
      <h2>4. Optimize for Mobile</h2>
      <p>More than 60% of bookings are now made on mobile devices. Ensure your website and booking process are mobile-friendly.</p>
      
      <h2>5. Implement a CRM System</h2>
      <p>A Customer Relationship Management system helps you track guest preferences, send targeted emails, and build loyalty.</p>
      
      <p>By implementing these strategies, hotels can increase direct bookings by up to 40% and improve overall guest satisfaction.</p>
    `,
    featuredImage: '/images/blog/hotel-technology.jpg',
    author: blogAuthors['sarah-johnson'],
    date: '2026-06-15',
    readingTime: '6 min',
    category: 'Hospitality',
    tags: ['Hotels', 'Technology', 'Bookings', 'Guest Experience'],
    views: 1245,
    likes: 89,
    comments: 12,
    featured: true,
    relatedPosts: ['2', '3'],
  },
  {
    id: '2',
    title: 'The Future of Transport Management: Trends to Watch',
    slug: 'future-transport-management-trends',
    excerpt: 'Explore the emerging trends shaping the future of transport management and how to stay ahead of the curve.',
    content: `
      <p>The transport industry is undergoing a major transformation. From AI-powered route optimization to electric vehicles, the future of transport management is exciting and full of opportunities.</p>
      
      <h2>1. AI and Machine Learning</h2>
      <p>Artificial intelligence is revolutionizing route planning and fleet management. AI algorithms can predict traffic patterns, optimize routes, and reduce fuel consumption.</p>
      
      <h2>2. Real-Time Tracking</h2>
      <p>GPS tracking and IoT devices enable real-time visibility into fleet operations. This improves efficiency and enhances customer satisfaction.</p>
      
      <h2>3. Sustainable Transportation</h2>
      <p>Electric vehicles and alternative fuels are becoming mainstream. Transport companies that adopt sustainable practices are gaining a competitive advantage.</p>
      
      <h2>4. Digital Ticketing</h2>
      <p>Contactless digital ticketing is becoming the norm. This reduces fraud, improves convenience, and provides valuable data insights.</p>
      
      <h2>5. Data Analytics</h2>
      <p>Data-driven decision making is essential for optimizing operations. Transport companies are using analytics to improve efficiency and reduce costs.</p>
      
      <p>The future of transport management is digital, data-driven, and customer-centric. Companies that embrace these trends will thrive in the coming years.</p>
    `,
    featuredImage: '/images/blog/transport-trends.jpg',
    author: blogAuthors['michael-okonkwo'],
    date: '2026-06-10',
    readingTime: '5 min',
    category: 'Transportation',
    tags: ['Transport', 'Technology', 'AI', 'Sustainability'],
    views: 876,
    likes: 56,
    comments: 8,
    relatedPosts: ['1', '4'],
  },
  {
    id: '3',
    title: 'How to Organize a Successful Fundraising Event',
    slug: 'successful-fundraising-event-guide',
    excerpt: 'A comprehensive guide to planning and executing fundraising events that exceed your goals.',
    content: `
      <p>Fundraising events are a powerful way to raise money and awareness for your cause. However, they require careful planning and execution to be successful.</p>
      
      <h2>1. Set Clear Goals</h2>
      <p>Define what you want to achieve. Is it raising a specific amount of money, building awareness, or recruiting volunteers?</p>
      
      <h2>2. Choose the Right Format</h2>
      <p>Consider the type of event that best suits your audience and goals. Options include galas, auctions, runs, and virtual events.</p>
      
      <h2>3. Use Technology</h2>
      <p>Leverage technology to streamline ticketing, promote your event, and process donations. Platforms like TiTO make it easy to manage fundraising events.</p>
      
      <h2>4. Build a Strong Team</h2>
      <p>Recruit passionate volunteers and staff. Delegate responsibilities and ensure everyone understands their role.</p>
      
      <h2>5. Promote Your Event</h2>
      <p>Use social media, email marketing, and traditional media to promote your event. Create compelling content that tells your story.</p>
      
      <h2>6. Follow Up</h2>
      <p>After the event, thank attendees, share results, and solicit feedback. This builds relationships and sets the foundation for future events.</p>
      
      <p>With careful planning and the right tools, you can organize fundraising events that make a real difference.</p>
    `,
    featuredImage: '/images/blog/fundraising-event.jpg',
    author: blogAuthors['chioma-nwosu'],
    date: '2026-06-05',
    readingTime: '7 min',
    category: 'Fundraising',
    tags: ['Fundraising', 'Events', 'Non-Profit', 'Planning'],
    views: 654,
    likes: 45,
    comments: 6,
    relatedPosts: ['1', '5'],
  },
  {
    id: '4',
    title: 'Digital Transformation in the Bus Industry',
    slug: 'digital-transformation-bus-industry',
    excerpt: 'How digital transformation is revolutionizing the bus industry and improving passenger experiences.',
    content: `
      <p>The bus industry is undergoing a significant digital transformation. From online ticketing to real-time tracking, technology is improving every aspect of bus operations.</p>
      
      <h2>1. Online Ticketing</h2>
      <p>Digital ticketing allows passengers to book and pay online. This reduces queues, improves convenience, and provides valuable data insights.</p>
      
      <h2>2. Real-Time Tracking</h2>
      <p>GPS tracking allows passengers to see bus locations in real-time. This reduces anxiety and improves the overall experience.</p>
      
      <h2>3. Mobile Apps</h2>
      <p>Dedicated mobile apps provide a seamless experience for booking, tracking, and managing trips.</p>
      
      <h2>4. Data-Driven Operations</h2>
      <p>Data analytics helps optimize routes, reduce fuel consumption, and improve operational efficiency.</p>
      
      <h2>5. Enhanced Customer Experience</h2>
      <p>Technology enables personalized communications and improved customer service.</p>
      
      <p>Digital transformation is not just about technology—it's about improving the passenger experience and creating more efficient operations.</p>
    `,
    featuredImage: '/images/blog/bus-digital-transformation.jpg',
    author: blogAuthors['michael-okonkwo'],
    date: '2026-05-28',
    readingTime: '5 min',
    category: 'Transportation',
    tags: ['Bus', 'Digital Transformation', 'Technology', 'Passenger Experience'],
    views: 543,
    likes: 38,
    comments: 4,
    relatedPosts: ['2', '6'],
  },
  {
    id: '5',
    title: 'How Technology is Changing Event Management',
    slug: 'technology-changing-event-management',
    excerpt: 'Explore how technology is revolutionizing event management and creating better experiences for attendees.',
    content: `
      <p>Event management has been transformed by technology. From virtual events to sophisticated registration systems, technology is making events more engaging and efficient.</p>
      
      <h2>1. Virtual and Hybrid Events</h2>
      <p>The rise of virtual and hybrid events has expanded the reach of events beyond physical boundaries.</p>
      
      <h2>2. Smart Registration Systems</h2>
      <p>Digital registration and check-in systems streamline the attendee experience and provide valuable data.</p>
      
      <h2>3. Event Apps</h2>
      <p>Dedicated event apps provide attendees with schedules, speaker information, and networking opportunities.</p>
      
      <h2>4. Real-Time Engagement Tools</h2>
      <p>Tools like live polling, Q&A, and social media integration increase attendee engagement.</p>
      
      <h2>5. Data Analytics</h2>
      <p>Event data provides insights into attendee behavior and preferences, helping organizers improve future events.</p>
      
      <p>Technology is making events more accessible, engaging, and data-driven. Event organizers who embrace technology will create better experiences for their attendees.</p>
    `,
    featuredImage: '/images/blog/event-technology.jpg',
    author: blogAuthors['amara-okafor'],
    date: '2026-05-20',
    readingTime: '6 min',
    category: 'Events',
    tags: ['Events', 'Technology', 'Virtual Events', 'Engagement'],
    views: 789,
    likes: 52,
    comments: 7,
    relatedPosts: ['1', '3'],
  },
  {
    id: '6',
    title: 'Streamlining Church Operations with Technology',
    slug: 'streamlining-church-operations-technology',
    excerpt: 'How technology can help churches manage services, events, and donations more effectively.',
    content: `
      <p>Churches are increasingly turning to technology to streamline their operations and better serve their congregations.</p>
      
      <h2>1. Service Management</h2>
      <p>Technology helps churches plan and manage services, including scheduling, volunteer coordination, and communication.</p>
      
      <h2>2. Event Management</h2>
      <p>Digital tools simplify the planning and promotion of church events, from Bible studies to community outreach.</p>
      
      <h2>3. Donation Management</h2>
      <p>Online giving platforms make it easy for congregants to donate and for churches to track contributions.</p>
      
      <h2>4. Member Engagement</h2>
      <p>Technology enables better communication and engagement with members through email, social media, and apps.</p>
      
      <h2>5. Data Management</h2>
      <p>Church management systems help organize member data, track attendance, and measure engagement.</p>
      
      <p>Technology helps churches focus on their mission by automating administrative tasks and improving member engagement.</p>
    `,
    featuredImage: '/images/blog/church-technology.jpg',
    author: blogAuthors['david-mensah'],
    date: '2026-05-15',
    readingTime: '5 min',
    category: 'Church',
    tags: ['Church', 'Technology', 'Operations', 'Engagement'],
    views: 456,
    likes: 34,
    comments: 3,
    relatedPosts: ['3', '5'],
  },
];