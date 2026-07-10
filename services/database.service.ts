// services/database.service.ts
import { prisma } from "@/lib/prisma";
import { Prisma, BookingStatus, PaymentStatus } from "../generated/prisma/client";

export class DatabaseService {
  // === Users ===
  static async getUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      include: {
        bookings: true,
        customers: true,
      },
    });
  }

  static async getUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  static async createUser(data: Prisma.UserCreateInput) {
    return prisma.user.create({ data });
  }

  static async updateUser(id: string, data: Prisma.UserUpdateInput) {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  static async deleteUser(id: string) {
    return prisma.user.delete({
      where: { id },
    });
  }

  // === Customers ===
  static async getCustomers() {
    return prisma.customer.findMany({
      include: {
        bookings: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  static async getCustomerById(id: string) {
    return prisma.customer.findUnique({
      where: { id },
      include: {
        bookings: {
          include: {
            payments: true,
          },
        },
        user: true,
      },
    });
  }

  static async createCustomer(data: Prisma.CustomerCreateInput) {
    return prisma.customer.create({ data });
  }

  static async updateCustomer(id: string, data: Prisma.CustomerUpdateInput) {
    return prisma.customer.update({
      where: { id },
      data,
    });
  }

  static async deleteCustomer(id: string) {
    return prisma.customer.delete({
      where: { id },
    });
  }

  // === Bookings ===
  static async getBookings() {
    return prisma.booking.findMany({
      include: {
        customer: true,
        payments: true,
        creator: true,
        user: true,
      },
      orderBy: { date: 'desc' },
    });
  }

  static async getBookingById(id: string) {
    return prisma.booking.findUnique({
      where: { id },
      include: {
        customer: true,
        payments: true,
        creator: true,
        user: true,
        activities: true,
      },
    });
  }

  static async createBooking(data: Prisma.BookingCreateInput) {
    return prisma.booking.create({
      data,
      include: {
        customer: true,
      },
    });
  }

  static async updateBooking(id: string, data: Prisma.BookingUpdateInput) {
    return prisma.booking.update({
      where: { id },
      data,
      include: {
        customer: true,
        payments: true,
      },
    });
  }

  static async updateBookingStatus(id: string, status: BookingStatus) {
    return prisma.booking.update({
      where: { id },
      data: { status },
    });
  }

  static async deleteBooking(id: string) {
    return prisma.booking.delete({
      where: { id },
    });
  }

  // === Payments ===
  static async getPayments() {
    return prisma.payment.findMany({
      include: {
        booking: {
          include: {
            customer: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  static async getPaymentById(id: string) {
    return prisma.payment.findUnique({
      where: { id },
      include: {
        booking: {
          include: {
            customer: true,
          },
        },
      },
    });
  }

  static async createPayment(data: Prisma.PaymentCreateInput) {
    return prisma.payment.create({
      data,
      include: {
        booking: true,
      },
    });
  }

  static async updatePaymentStatus(id: string, status: PaymentStatus) {
    return prisma.payment.update({
      where: { id },
      data: { status },
    });
  }

  static async updatePayment(id: string, data: Prisma.PaymentUpdateInput) {
    return prisma.payment.update({
      where: { id },
      data,
      include: {
        booking: true,
      },
    });
  }

  // === Activities ===
  static async getActivities() {
    return prisma.activity.findMany({
      include: {
        user: true,
        booking: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  static async createActivity(data: Prisma.ActivityCreateInput) {
    return prisma.activity.create({
      data,
      include: {
        user: true,
        booking: true,
      },
    });
  }

  // === Dashboard Stats ===
  static async getDashboardStats() {
    const [totalBookings, totalCustomers, totalRevenue, recentBookings, recentActivities] = await Promise.all([
      prisma.booking.count(),
      prisma.customer.count(),
      prisma.payment.aggregate({
        where: { status: 'COMPLETED' },
        _sum: { amount: true },
      }),
      prisma.booking.findMany({
        take: 5,
        include: {
          customer: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.activity.findMany({
        take: 5,
        include: {
          user: true,
          booking: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    return {
      totalBookings,
      totalCustomers,
      totalRevenue: totalRevenue._sum.amount || 0,
      recentBookings,
      recentActivities,
    };
  }

  // === Bulk Operations ===
  static async getBookingsByDateRange(startDate: Date, endDate: Date) {
    return prisma.booking.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        customer: true,
        payments: true,
      },
      orderBy: { date: 'desc' },
    });
  }

  static async getCustomersByIndustry(industry: string) {
    return prisma.customer.findMany({
      where: { industry },
      include: {
        bookings: true,
      },
    });
  }

  static async getRevenueByDateRange(startDate: Date, endDate: Date) {
    const result = await prisma.payment.aggregate({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
        status: 'COMPLETED',
      },
      _sum: { amount: true },
    });
    return result._sum.amount || 0;
  }
}

// Helper types for return values
export type UserWithRelations = Prisma.UserGetPayload<{
  include: { bookings: true; customers: true };
}>;

export type CustomerWithRelations = Prisma.CustomerGetPayload<{
  include: { bookings: { include: { payments: true } }; user: true };
}>;

export type BookingWithRelations = Prisma.BookingGetPayload<{
  include: { customer: true; payments: true; creator: true; user: true; activities: true };
}>;

export type DashboardStats = {
  totalBookings: number;
  totalCustomers: number;
  totalRevenue: number;
  recentBookings: Prisma.BookingGetPayload<{ include: { customer: true } }>[];
  recentActivities: Prisma.ActivityGetPayload<{ include: { user: true; booking: true } }>[];
};