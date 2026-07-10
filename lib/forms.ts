// lib/validations/forms.ts
import * as z from 'zod';

// Partner Form Schema
export const partnerFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  industry: z.enum(['hotel', 'transport', 'events', 'car-hire', 'fundraising', 'church', 'ngo', 'university', 'government', 'other']),
  businessSize: z.enum(['1-10', '11-50', '51-200', '201-500', '500+']),
  website: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms'),
});

export type PartnerFormValues = z.infer<typeof partnerFormSchema>;

// Contact Form Schema
export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(2, 'Subject must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// Demo Request Form Schema
export const demoRequestFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  industry: z.enum(['hotel', 'transport', 'events', 'car-hire', 'fundraising', 'church', 'ngo', 'university', 'government', 'other']),
  employeeCount: z.enum(['1-10', '11-50', '51-200', '201-500', '500+']),
  preferredDate: z.string().optional(),
  preferredTime: z.enum(['morning', 'afternoon', 'evening']).optional(),
  message: z.string().optional(),
});

export type DemoRequestFormValues = z.infer<typeof demoRequestFormSchema>;

// Newsletter Form Schema
export const newsletterFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().optional(),
  preferences: z.array(z.enum(['product-updates', 'industry-news', 'events', 'tips', 'offers'])).optional(),
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;

// Search Form Schema
export const searchFormSchema = z.object({
  query: z.string().min(1, 'Please enter a search term'),
  category: z.enum(['all', 'platform', 'solutions', 'industries', 'blog', 'documentation']).optional(),
});

export type SearchFormValues = z.infer<typeof searchFormSchema>;