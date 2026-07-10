// prisma/seed.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { 
  PrismaClient, 
  BookingStatus, 
  PaymentStatus, 
  ServiceType, 
  PaymentMethod, 
  UserRole 
} from '../generated/prisma/client';

const connectionString = process.env.DATABASE_URL || '';
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Starting database seeding...');

  // Clear existing data (optional - be careful in production)
  console.log('🧹 Clearing existing data...');
  await prisma.activity.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.user.deleteMany();
  console.log('✅ Existing data cleared');

  // Create Users
  console.log('👤 Creating users...');
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@tito.com',
      name: 'Admin User',
      role: UserRole.ADMIN,
    },
  });

  const staffUser = await prisma.user.create({
    data: {
      email: 'staff@tito.com',
      name: 'Staff User',
      role: UserRole.STAFF,
    },
  });

  const regularUser = await prisma.user.create({
    data: {
      email: 'user@tito.com',
      name: 'Regular User',
      role: UserRole.USER,
    },
  });

  console.log(`✅ Created ${await prisma.user.count()} users`);

  // Create Customers
  console.log('🏢 Creating customers...');
  const customers = await Promise.all([
    prisma.customer.create({
      data: {
        name: 'Hotel Grande',
        email: 'hotel@example.com',
        phone: '+1 234 567 8900',
        company: 'Hotel Grande',
        industry: 'HOSPITALITY',
        address: '123 Main St, New York, NY 10001',
        userId: adminUser.id,
      },
    }),
    prisma.customer.create({
      data: {
        name: 'City Transport Ltd',
        email: 'transport@example.com',
        phone: '+1 234 567 8901',
        company: 'City Transport Ltd',
        industry: 'TRANSPORT',
        address: '456 Oak Ave, Los Angeles, CA 90001',
        userId: staffUser.id,
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Lagos Events Co',
        email: 'events@example.com',
        phone: '+1 234 567 8902',
        company: 'Lagos Events Co',
        industry: 'EVENTS',
        address: '789 Pine St, Chicago, IL 60601',
        userId: adminUser.id,
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Express Rentals',
        email: 'carhire@example.com',
        phone: '+1 234 567 8903',
        company: 'Express Rentals',
        industry: 'CAR_HIRE',
        address: '321 Elm Rd, Houston, TX 77001',
        userId: staffUser.id,
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Hope Foundation',
        email: 'fundraising@example.com',
        phone: '+1 234 567 8904',
        company: 'Hope Foundation',
        industry: 'FUNDRAISING',
        address: '654 Maple Dr, Phoenix, AZ 85001',
        userId: regularUser.id,
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Grace Church',
        email: 'church@example.com',
        phone: '+1 234 567 8905',
        company: 'Grace Church',
        industry: 'OTHER',
        address: '987 Cedar Ln, Philadelphia, PA 19101',
        userId: regularUser.id,
      },
    }),
  ]);

  console.log(`✅ Created ${customers.length} customers`);

  // Create Bookings
  console.log('📅 Creating bookings...');
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);

  const bookings = await Promise.all([
    prisma.booking.create({
      data: {
        bookingNumber: 'BK-001',
        customerId: customers[0].id,
        serviceType: ServiceType.HOTEL,
        status: BookingStatus.CONFIRMED,
        date: today,
        endDate: tomorrow,
        amount: 450.00,
        currency: 'USD',
        notes: 'Suite for 2 nights',
        createdBy: adminUser.id,
        userId: adminUser.id,
      },
    }),
    prisma.booking.create({
      data: {
        bookingNumber: 'BK-002',
        customerId: customers[1].id,
        serviceType: ServiceType.TRANSPORT,
        status: BookingStatus.PENDING,
        date: tomorrow,
        endDate: nextWeek,
        amount: 1200.00,
        currency: 'USD',
        notes: 'Bus Charter - 50 seater',
        createdBy: staffUser.id,
        userId: staffUser.id,
      },
    }),
    prisma.booking.create({
      data: {
        bookingNumber: 'BK-003',
        customerId: customers[2].id,
        serviceType: ServiceType.EVENT,
        status: BookingStatus.COMPLETED,
        date: new Date(today.setDate(today.getDate() - 5)),
        endDate: new Date(today.setDate(today.getDate() + 1)),
        amount: 2500.00,
        currency: 'USD',
        notes: 'Event Venue - Conference',
        createdBy: adminUser.id,
        userId: adminUser.id,
      },
    }),
    prisma.booking.create({
      data: {
        bookingNumber: 'BK-004',
        customerId: customers[3].id,
        serviceType: ServiceType.CAR_HIRE,
        status: BookingStatus.CANCELLED,
        date: new Date(today.setDate(today.getDate() - 3)),
        endDate: new Date(today.setDate(today.getDate() + 2)),
        amount: 800.00,
        currency: 'USD',
        notes: 'SUV Rental - 5 days',
        createdBy: staffUser.id,
        userId: staffUser.id,
      },
    }),
    prisma.booking.create({
      data: {
        bookingNumber: 'BK-005',
        customerId: customers[4].id,
        serviceType: ServiceType.FUNDRAISING,
        status: BookingStatus.CONFIRMED,
        date: nextWeek,
        endDate: new Date(nextWeek.setDate(nextWeek.getDate() + 1)),
        amount: 3200.00,
        currency: 'USD',
        notes: 'Fundraising Gala',
        createdBy: adminUser.id,
        userId: adminUser.id,
      },
    }),
    prisma.booking.create({
      data: {
        bookingNumber: 'BK-006',
        customerId: customers[5].id,
        serviceType: ServiceType.OTHER,
        status: BookingStatus.PENDING,
        date: new Date(today.setDate(today.getDate() + 3)),
        endDate: new Date(today.setDate(today.getDate() + 4)),
        amount: 650.00,
        currency: 'USD',
        notes: 'Church Event - 200 attendees',
        createdBy: regularUser.id,
        userId: regularUser.id,
      },
    }),
  ]);

  console.log(`✅ Created ${bookings.length} bookings`);

  // Create Payments
  console.log('💳 Creating payments...');
  const payments = await Promise.all([
    prisma.payment.create({
      data: {
        bookingId: bookings[0].id,
        amount: 450.00,
        currency: 'USD',
        status: PaymentStatus.COMPLETED,
        method: PaymentMethod.CARD,
        transactionId: 'txn_001',
      },
    }),
    prisma.payment.create({
      data: {
        bookingId: bookings[1].id,
        amount: 600.00,
        currency: 'USD',
        status: PaymentStatus.PENDING,
        method: PaymentMethod.MOBILE_MONEY,
        transactionId: 'txn_002',
      },
    }),
    prisma.payment.create({
      data: {
        bookingId: bookings[2].id,
        amount: 2500.00,
        currency: 'USD',
        status: PaymentStatus.COMPLETED,
        method: PaymentMethod.BANK_TRANSFER,
        transactionId: 'txn_003',
      },
    }),
    prisma.payment.create({
      data: {
        bookingId: bookings[3].id,
        amount: 800.00,
        currency: 'USD',
        status: PaymentStatus.REFUNDED,
        method: PaymentMethod.CARD,
        transactionId: 'txn_004',
      },
    }),
    prisma.payment.create({
      data: {
        bookingId: bookings[4].id,
        amount: 1600.00,
        currency: 'USD',
        status: PaymentStatus.COMPLETED,
        method: PaymentMethod.PAYPAL,
        transactionId: 'txn_005',
      },
    }),
  ]);

  console.log(`✅ Created ${payments.length} payments`);

  // Create Activities
  console.log('📝 Creating activities...');
  await Promise.all([
    prisma.activity.create({
      data: {
        userId: adminUser.id,
        bookingId: bookings[0].id,
        action: 'BOOKING_CREATED',
        description: 'Admin User created booking BK-001',
        metadata: { timestamp: new Date().toISOString() },
      },
    }),
    prisma.activity.create({
      data: {
        userId: staffUser.id,
        bookingId: bookings[1].id,
        action: 'BOOKING_UPDATED',
        description: 'Staff User updated booking BK-002',
        metadata: { timestamp: new Date().toISOString() },
      },
    }),
    prisma.activity.create({
      data: {
        userId: adminUser.id,
        bookingId: bookings[2].id,
        action: 'PAYMENT_RECEIVED',
        description: 'Payment received for booking BK-003',
        metadata: { amount: 2500.00, timestamp: new Date().toISOString() },
      },
    }),
    prisma.activity.create({
      data: {
        userId: staffUser.id,
        bookingId: bookings[3].id,
        action: 'BOOKING_CANCELLED',
        description: 'Booking BK-004 cancelled by staff',
        metadata: { reason: 'Customer request', timestamp: new Date().toISOString() },
      },
    }),
    prisma.activity.create({
      data: {
        userId: adminUser.id,
        bookingId: bookings[4].id,
        action: 'BOOKING_CONFIRMED',
        description: 'Booking BK-005 confirmed by admin',
        metadata: { timestamp: new Date().toISOString() },
      },
    }),
  ]);

  console.log(`✅ Created activities`);

  // Display summary
  console.log('\n📊 Database Seeding Complete!');
  console.log('================================');
  console.log(`👤 Users: ${await prisma.user.count()}`);
  console.log(`🏢 Customers: ${await prisma.customer.count()}`);
  console.log(`📅 Bookings: ${await prisma.booking.count()}`);
  console.log(`💳 Payments: ${await prisma.payment.count()}`);
  console.log(`📝 Activities: ${await prisma.activity.count()}`);
  console.log('================================');
  console.log('✅ Seeding completed successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log('🔌 Database disconnected');
  })
  .catch(async (e) => {
    console.error('❌ Seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });