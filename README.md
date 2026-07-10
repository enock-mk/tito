

## Key Takeaways from the Old Site

### 1. **Authentication System**
- Admin portal with JWT authentication
- HR portal with separate login
- Role-based access (superadmin, hr_admin)
- Rate limiting and lockout rules

### 2. **Email System**
- SMTP email sending (Gmail)
- Email templates for various notifications
- HR recruiting, payroll, compliance emails

### 3. **File Uploads**
- Cloudinary integration for images
- CV/resume uploads for careers
- Partner application documents

### 4. **Database Structure**
- Users (admin)
- HR Users
- Job Listings
- Applications (with CV URLs)
- Employees
- Partner Applications
- Messages (chat logs)

### 5. **API Endpoints**
- Authentication (admin + HR)
- Careers and jobs
- Partner applications
- File uploads
- TiTO Messenger

### 6. **Security Features**
- reCAPTCHA verification
- Rate limiting
- JWT tokens
- Role-based access

## What to Implement in the New Version

Here's the updated README with these features integrated:

```markdown
# TiTO - Modern Booking & Management Platform

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.0-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-316192?style=flat-square&logo=postgresql)](https://www.postgresql.org/)

TiTO is a modern booking and management platform designed to help businesses across multiple industries streamline their operations. From transport and hospitality to events and fundraising, TiTO provides the tools you need to manage bookings, payments, customers, and analytics in one place.

## 🎯 What is TiTO?

TiTO is an all-in-one booking and management platform that supports:

- **🚌 Transport Management** - Route planning, fleet tracking, and ticket sales
- **🏨 Hospitality Management** - Room inventory, reservations, and guest experiences
- **🎪 Event Management** - Ticketing, check-in, and attendee engagement
- **🚗 Car Hire** - Vehicle rentals, fleet availability, and customer bookings
- **❤️ Fundraising** - Donation campaigns, ticketing, and impact reporting
- **⛪ Community & Faith** - Service management, events, and donations

## 📱 Download TiTO

### For Customers
- **iOS App** - Download from Apple App Store (Coming Soon)
- **Android App** - Download from Google Play Store (Coming Soon)
- **Web Access** - Visit [tito.app](https://tito.app) to book

### For Businesses
- **Business Dashboard** - Complete control panel at [dashboard.tito.app](https://dashboard.tito.app)
- **API Documentation** - Integrate TiTO with your existing systems
- **White-Label Solutions** - Customize TiTO with your branding

## 🚀 Getting Started

### For Users
1. Download the TiTO mobile app or visit our website
2. Search for available services (transport, hotels, events, etc.)
3. Select your preferences
4. Complete payment securely
5. Receive instant confirmation with digital tickets

### For Businesses
1. [Sign up for a business account](https://tito.app/partner)
2. Choose your service type
3. Configure your services and availability
4. Set your pricing
5. Start receiving bookings immediately

## ✨ Key Features

### Platform-Wide Features
- **Smart Bookings** - Accept and manage bookings from multiple channels
- **Secure Payments** - Process payments securely with multiple gateways
- **Customer Management** - Build relationships with detailed customer profiles
- **Analytics & Reports** - Make data-driven decisions with comprehensive analytics
- **Mobile Apps** - Manage your business on the go with native iOS and Android apps
- **Integrations** - Connect with your favorite tools and services
- **Enterprise Security** - Bank-grade security with encryption and compliance

### Admin & HR Features
- **Admin Dashboard** - Full control panel for platform management
- **HR Portal** - Job postings, applications, and employee management
- **Role-Based Access** - Superadmin and HR admin roles
- **Email System** - Automated notifications and communications
- **File Uploads** - CV/resume uploads and partner documents
- **Audit Logs** - Track all system activities
- **Rate Limiting** - Protect against abuse
- **reCAPTCHA** - Prevent spam submissions

### Industry-Specific Solutions

**🚌 Transport Management**
- Route planning and optimization
- Fleet tracking and management
- Ticket sales and manifest generation
- Driver mobile app

**🏨 Hospitality Management**
- Room inventory management
- Multi-channel booking
- Guest profiles and preferences
- Housekeeping status tracking

**🎪 Event Management**
- Event publishing and ticketing
- Registration forms and check-in
- QR scanning and access control
- Attendee analytics

**🚗 Car Hire**
- Vehicle inventory management
- Driver scheduling
- Rental agreements and contracts
- Fleet reporting

**❤️ Fundraising**
- Donation pages and campaigns
- Supporter CRM
- Recurring donations
- Impact dashboards

**⛪ Community & Faith**
- Service scheduling
- Volunteer coordination
- Donation tracking
- Member engagement

## 💼 Why Choose TiTO?

✅ **All-in-One Platform** - One system for all your booking and management needs
✅ **Industry-Specific** - Solutions tailored to your business type
✅ **Mobile-First** - Optimized for customers on the go
✅ **White-Label Available** - Customize with your branding
✅ **Developer Friendly** - Comprehensive API documentation
✅ **Trusted by Businesses** - 120+ partners worldwide
✅ **Continuous Innovation** - Regular feature updates
✅ **24/7 Support** - Dedicated support team

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **State Management**: TanStack Query

### Backend
- **Database**: PostgreSQL 15
- **ORM**: Prisma 5
- **Authentication**: NextAuth.js / JWT
- **Email**: Nodemailer (SMTP)
- **File Storage**: Cloudinary (Images) + Azure Blob (PDFs)
- **Rate Limiting**: Upstash / Redis
- **reCAPTCHA**: Google reCAPTCHA v3
- **API**: Next.js API Routes + Server Actions

### Deployment
- **Hosting**: Vercel / Azure
- **Database**: Azure PostgreSQL / Neon
- **CI/CD**: GitHub Actions
- **Monitoring**: Vercel Analytics / Sentry

## 📚 Getting Started with Development

### Prerequisites
- Node.js 18+
- npm, yarn, or bun
- PostgreSQL 15 (local or cloud)
- Cloudinary account (for images)
- SMTP email provider (Gmail recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tito.git
cd tito

# Install dependencies
npm install
# or
yarn install
# or
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your database URL and other variables

# Set up the database
npx prisma migrate dev --name init
npx prisma generate

# Seed the database (optional)
npm run db:seed

# Run development server
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Environment Variables

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/tito"

# Authentication
JWT_SECRET_KEY="your-jwt-secret"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"

# Admin Credentials
ADMIN_EMAIL="admin@tito.com"
ADMIN_PASSWORD="your-admin-password"

# HR Credentials
HR_EMAIL="hr@tito.com"
HR_PASSWORD="your-hr-password"

# Email (SMTP)
MAIL_SERVER="smtp.gmail.com"
MAIL_PORT=587
MAIL_USERNAME="your-email@gmail.com"
MAIL_PASSWORD="your-app-password"
MAIL_DEFAULT_SENDER="TiTO <your-email@gmail.com>"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="your-site-key"
RECAPTCHA_SECRET_KEY="your-secret-key"

# Azure Blob Storage (for PDFs)
AZURE_STORAGE_CONNECTION_STRING="your-connection-string"
AZURE_STORAGE_CONTAINER_NAME="documents"
```

### Building for Production

```bash
npm run build
npm run start
```

## 📖 Project Structure

```
tito/
├── app/
│   ├── (marketing)/          # Marketing pages (public)
│   │   ├── page.tsx          # Home page
│   │   ├── about/            # About page
│   │   ├── blog/             # Blog pages
│   │   ├── careers/          # Careers page
│   │   ├── contact/          # Contact page
│   │   ├── demo/             # Book a demo page
│   │   ├── faq/              # FAQ page
│   │   ├── industries/       # Industry pages
│   │   ├── media-kit/        # Media Kit page
│   │   ├── partner/          # Partner page
│   │   ├── platform/         # Platform pages
│   │   ├── resources/        # Resources pages
│   │   └── solutions/        # Solutions pages
│   ├── (auth)/               # Authentication routes
│   │   ├── login/            # Admin login
│   │   └── hr/               # HR login
│   ├── (dashboard)/          # Protected dashboard
│   │   ├── admin/            # Admin dashboard
│   │   └── hr/               # HR portal
│   └── api/                  # API routes
│       ├── auth/             # Authentication endpoints
│       ├── careers/          # Career endpoints
│       ├── partners/         # Partner endpoints
│       ├── uploads/          # File upload endpoints
│       └── messages/         # Chat endpoints
├── components/
│   ├── animations/           # Animation components
│   ├── cards/                # Card components
│   ├── carousel/             # Carousel components
│   ├── dashboard/            # Dashboard components
│   ├── forms/                # Form components
│   ├── hero/                 # Hero components
│   ├── layout/               # Layout components
│   ├── navigation/           # Navigation components
│   ├── sections/             # Section components
│   ├── shared/               # Shared components
│   ├── showcase/             # Showcase components
│   ├── timeline/             # Timeline components
│   └── ui/                   # shadcn/ui components
├── data/                     # Static data files
├── lib/                      # Utility functions
│   ├── auth.ts              # Authentication helpers
│   ├── email.ts             # Email sending
│   ├── recaptcha.ts         # reCAPTCHA validation
│   ├── rate-limit.ts        # Rate limiting
│   └── upload.ts            # File upload helpers
├── prisma/                   # Prisma schema and migrations
│   ├── schema.prisma         # Database schema
│   ├── seed.ts               # Seed script
│   └── migrations/           # Migration files
├── public/                   # Static assets
├── services/                 # Service layer
├── types/                    # TypeScript types
├── middleware.ts            # Route protection middleware
├── .env.example              # Environment variables example
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind configuration
└── README.md               # This file
```

## 🗄️ Database Schema

### Core Tables

**Users**
- Admin portal users with roles (superadmin, admin)
- JWT authentication
- Password hashing with bcrypt

**HR Users**
- HR portal access
- Separate authentication from admin

**Customers**
- Business clients using TiTO
- Industry classification
- Contact information

**Bookings**
- Central booking records
- Service type categorization
- Status tracking (pending, confirmed, completed, cancelled)
- Payment integration

**Payments**
- Transaction records
- Payment methods (card, mobile money, bank transfer)
- Status tracking

**Job Listings**
- HR job postings
- Department and location
- Employment type

**Applications**
- Career applications
- CV/resume file URLs
- Application status

**Employees**
- HR employee records
- Job titles and departments
- Employment status

**Partner Applications**
- Partner With Us submissions
- Business details
- Application status

**Messages**
- TiTO Messenger chat logs
- User-to-user communication
- Timestamp tracking

**Activities**
- System audit log
- User actions
- Metadata for tracking

## 🔐 Security Features

### Authentication
- JWT-based authentication for API
- Session management with NextAuth.js
- Role-based access control (RBAC)
- Password hashing with bcrypt

### Protection
- Rate limiting on API endpoints
- reCAPTCHA v3 on forms
- CSRF protection
- XSS prevention
- SQL injection prevention (via Prisma)

### Compliance
- GDPR compliant
- Data encryption at rest and in transit
- Audit logging
- Data backup and recovery

## 📧 Email System

### Email Types
- **Admin Notifications** - System alerts and updates
- **HR Communications** - Job applications, interview scheduling
- **Customer Communications** - Booking confirmations, receipts
- **Partner Communications** - Application status, onboarding
- **Newsletter** - Marketing and updates

### Email Templates
- `booking-confirmation.html` - Booking confirmation emails
- `payment-receipt.html` - Payment receipts
- `application-received.html` - Job application acknowledgment
- `partner-application.html` - Partner application status
- `password-reset.html` - Password reset emails

## 📤 File Uploads

### Cloudinary (Images)
- **Purpose**: Website images, dashboard screenshots, operator images
- **Folder**: `tito/`
- **Usage**: Marketing site, product showcase

### Azure Blob (Documents)
- **Purpose**: CVs, partner documents, PDFs
- **Container**: `documents/`
- **Usage**: Career applications, partner applications

## 🤝 For Businesses

### Integration Methods
1. **Web Interface** - No coding required
2. **Mobile App** - Manage on the go
3. **REST API** - Custom integration
4. **White-Label** - Your own branding

### Partnership Benefits
- **Increased Visibility** - Get featured in our partner directory
- **Simplified Operations** - Streamline booking and management processes
- **Advanced Analytics** - Access detailed reports and insights
- **Dedicated Support** - Priority support from our team
- **Revenue Growth** - Unlock new revenue streams
- **Global Network** - Connect with partners across industries

## 🚦 Access Credentials (Development)

| Area | Value |
|------|-------|
| Admin Portal | http://localhost:3000/admin |
| Admin Email | admin@tito.com |
| Admin Password | admin123 |
| HR Portal | http://localhost:3000/hr/login |
| HR Email | hr@tito.com |
| HR Password | hr123 |
| API | http://localhost:3000/api |
| Health Check | http://localhost:3000/api/health |

## 📈 Roadmap

### Q4 2024
- [ ] Mobile app launch (iOS & Android)
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Operator dashboards (bus, hotel, car hire)

### Q1 2025
- [ ] AI-powered recommendations
- [ ] Automated email marketing
- [ ] WhatsApp Business integration
- [ ] Azure Blob storage for documents

### Q2 2025
- [ ] White-label solutions
- [ ] Custom integrations
- [ ] Marketplace for partners
- [ ] Advanced reporting suite

## 📝 License

This project is proprietary software. All rights reserved.

## 🎉 Join Us

Ready to transform your business operations? [Sign up for a free trial](https://tito.app/partner)

---

Built with ❤️ by the TiTO Team
```

## Key Features Added from the Old Site:

1. **Admin & HR Portal** - Separate authentication systems with role-based access
2. **Email System** - SMTP integration with templates for various notifications
3. **File Uploads** - Cloudinary for images, Azure Blob for documents
4. **reCAPTCHA** - Spam protection for forms
5. **Rate Limiting** - API protection against abuse
6. **Job Listings & Applications** - Career management system
7. **Partner Applications** - Partner onboarding workflow
8. **TiTO Messenger** - Chat/log system
9. **Audit Logging** - Track all system activities
10. **Environment Variables** - Comprehensive configuration management
---

**Tito - One Platform. All Bookings. Infinite Possibilities.**

🚀 Creating a Prisma Postgres database
│
◇  Database created successfully!
│
│
●  Database Connection
│
│
│    Connection String:
│
│    postgres://db54a3f125ce02137fb2f84d8585cf76e49d98f99812a6655b6cc2e910d734e0:sk_vrLyg5WhsWwybv0loGjFV@db.prisma.io:5432/postgres?sslmode=require
│
│
◆  Claim Your Database
│
│    Keep your database for free:
│
│    https://create-db.prisma.io/claim?projectID=proj_cmras411q0pnuxef9lhziyw1r&utm_source=create-db&utm_medium=cli
│
│    Database will be deleted on 7/8/2026, 5:03:33 PM if not claimed.
│
└  Done!