export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  // Getting Started
  {
    id: 'getting-started-1',
    category: 'Getting Started',
    question: 'What is TiTO?',
    answer: 'TiTO is a modern booking and management software platform designed for travel, hospitality, events, and mobility businesses. It provides integrated tools for managing bookings, ticketing, reservations, payments, and operations through a unified, cloud-based dashboard.',
  },
  {
    id: 'getting-started-2',
    category: 'Getting Started',
    question: 'How long does it take to set up TiTO?',
    answer: 'TiTO is designed for quick onboarding. Most businesses can get started within minutes. Our team provides setup assistance and documentation to ensure a smooth implementation process.',
  },
  {
    id: 'getting-started-3',
    category: 'Getting Started',
    question: 'Do I need technical expertise to use TiTO?',
    answer: 'No. TiTO is built with user accessibility in mind. Our intuitive interface is designed for business operators of all technical levels. We also provide comprehensive support and training resources.',
  },

  // Platform Features
  {
    id: 'features-1',
    category: 'Platform Features',
    question: 'What features does TiTO offer?',
    answer: 'TiTO includes centralized booking management, secure payments, real-time reporting, cloud-based dashboards, multi-user access, customer management, automated notifications, and advanced analytics.',
  },
  {
    id: 'features-2',
    category: 'Platform Features',
    question: 'Can I customize TiTO for my business?',
    answer: 'Yes. TiTO is highly flexible and can be configured to match your specific business processes and branding requirements. We offer customization options and white-label solutions for enterprise partners.',
  },
  {
    id: 'features-3',
    category: 'Platform Features',
    question: 'Does TiTO support multiple user roles?',
    answer: 'Yes. TiTO supports multi-user access with granular permission controls. You can set different roles and access levels for administrators, managers, operators, and customer service teams.',
  },

  // Pricing & Plans
  {
    id: 'pricing-1',
    category: 'Pricing & Plans',
    question: 'What are TiTO\'s pricing plans?',
    answer: 'We offer flexible pricing tailored to your business size and needs. Contact our sales team to discuss pricing options that fit your specific requirements and budget.',
  },
  {
    id: 'pricing-2',
    category: 'Pricing & Plans',
    question: 'Is there a free trial?',
    answer: 'Yes. We offer a free trial so you can explore TiTO\'s features and see how it works for your business. Sign up on our website to get started.',
  },
  {
    id: 'pricing-3',
    category: 'Pricing & Plans',
    question: 'Can I switch plans?',
    answer: 'Absolutely. You can upgrade or downgrade your plan at any time based on your changing business needs. Our support team can help facilitate the transition.',
  },

  // Payments & Security
  {
    id: 'security-1',
    category: 'Payments & Security',
    question: 'Is TiTO secure?',
    answer: 'Yes. TiTO is built with enterprise-grade security standards. We use end-to-end encryption, PCI DSS compliance, secure data centers, and regular security audits to protect your data and transactions.',
  },
  {
    id: 'security-2',
    category: 'Payments & Security',
    question: 'What payment methods does TiTO support?',
    answer: 'TiTO integrates with major payment gateways and supports multiple payment methods including credit cards, mobile payments, bank transfers, and more depending on your region.',
  },
  {
    id: 'security-3',
    category: 'Payments & Security',
    question: 'How are customer payments handled?',
    answer: 'All payments are processed securely through our integrated payment infrastructure. Funds are transferred directly to your account after transaction completion and processing fees deduction.',
  },

  // Integration & API
  {
    id: 'integration-1',
    category: 'Integration & API',
    question: 'Does TiTO have an API?',
    answer: 'Yes. TiTO provides a comprehensive API that allows you to integrate with your existing systems, automate workflows, and build custom solutions on top of the platform.',
  },
  {
    id: 'integration-2',
    category: 'Integration & API',
    question: 'What systems can TiTO integrate with?',
    answer: 'TiTO integrates with payment gateways, calendar systems, CRM platforms, accounting software, email marketing tools, and many other business applications. We also support custom integrations.',
  },
  {
    id: 'integration-3',
    category: 'Integration & API',
    question: 'Do you provide technical documentation?',
    answer: 'Yes. We offer comprehensive API documentation, code samples, webhooks support, and a developer dashboard to help you integrate TiTO seamlessly with your systems.',
  },

  // Support & Service
  {
    id: 'support-1',
    category: 'Support & Service',
    question: 'What support options are available?',
    answer: 'We provide 24/7 customer support through email, live chat, and phone. We also offer comprehensive documentation, help center articles, video tutorials, and webinars.',
  },
  {
    id: 'support-2',
    category: 'Support & Service',
    question: 'What is your response time for support inquiries?',
    answer: 'Our typical response time is within 1-2 hours for urgent issues. We prioritize critical technical issues and provide dedicated support for enterprise partners.',
  },
  {
    id: 'support-3',
    category: 'Support & Service',
    question: 'Do you offer training and onboarding?',
    answer: 'Yes. We provide comprehensive onboarding training, user documentation, video guides, and ongoing support to ensure your team gets the most out of TiTO.',
  },
];

export const faqCategories = [
  'Getting Started',
  'Platform Features',
  'Pricing & Plans',
  'Payments & Security',
  'Integration & API',
  'Support & Service',
];
