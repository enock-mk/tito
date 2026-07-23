// components/forms/DemoRequestForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { demoRequestFormSchema, DemoRequestFormValues } from '@/lib/forms';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormField } from '@/components/shared/FormField';
import { Loader2, CheckCircle, Calendar, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

// Replace with your Formspree endpoint
// You can get this from https://formspree.io/ after creating a form
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjgnabdj';

interface DemoRequestFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function DemoRequestForm({ className, onSuccess }: DemoRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<DemoRequestFormValues>({
    resolver: zodResolver(demoRequestFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      industry: 'other',
      employeeCount: '1-10',
      preferredDate: '',
      preferredTime: 'morning',
      message: '',
    },
  });

  const onSubmit = async (data: DemoRequestFormValues) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        onSuccess?.();
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    { value: 'hotel', label: 'Hotel' },
    { value: 'transport', label: 'Transport Operator' },
    { value: 'events', label: 'Event Organizer' },
    { value: 'car-hire', label: 'Car Hire Company' },
    { value: 'fundraising', label: 'Fundraising Organization' },
    { value: 'church', label: 'Church' },
    { value: 'ngo', label: 'NGO' },
    { value: 'university', label: 'University' },
    { value: 'government', label: 'Government' },
    { value: 'other', label: 'Other' },
  ];

  const employeeCounts = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-500', label: '201-500 employees' },
    { value: '500+', label: '500+ employees' },
  ];

  const timeSlots = [
    { value: 'morning', label: 'Morning (9AM - 12PM)' },
    { value: 'afternoon', label: 'Afternoon (12PM - 5PM)' },
    { value: 'evening', label: 'Evening (5PM - 8PM)' },
  ];

  if (isSubmitted) {
    return (
      <div className={cn(
        'flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20',
        className
      )}>
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h3 className="mt-4 text-xl font-semibold text-green-700 dark:text-green-400">
          Demo Request Submitted!
        </h3>
        <p className="mt-2 text-green-600 dark:text-green-300">
          Thank you for requesting a demo. Our team will contact you within 24 hours to schedule your personalized demo.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('space-y-6', className)}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Full Name */}
        <FormField
          label="Full Name"
          error={errors.fullName?.message}
          required
          className="sm:col-span-2"
        >
          <Input
            {...register('fullName')}
            placeholder="Enter your full name"
            disabled={isSubmitting}
          />
        </FormField>

        {/* Email */}
        <FormField
          label="Email Address"
          error={errors.email?.message}
          required
        >
          <Input
            {...register('email')}
            type="email"
            placeholder="Enter your email address"
            disabled={isSubmitting}
          />
        </FormField>

        {/* Phone */}
        <FormField
          label="Phone Number"
          error={errors.phone?.message}
          required
        >
          <Input
            {...register('phone')}
            type="tel"
            placeholder="Enter your phone number"
            disabled={isSubmitting}
          />
        </FormField>

        {/* Company Name */}
        <FormField
          label="Company Name"
          error={errors.companyName?.message}
          required
          className="sm:col-span-2"
        >
          <Input
            {...register('companyName')}
            placeholder="Enter your company name"
            disabled={isSubmitting}
          />
        </FormField>

        {/* Industry */}
        <FormField
          label="Industry"
          error={errors.industry?.message}
          required
        >
          <select
            {...register('industry')}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSubmitting}
          >
            {industries.map((industry) => (
              <option key={industry.value} value={industry.value}>
                {industry.label}
              </option>
            ))}
          </select>
        </FormField>

        {/* Employee Count */}
        <FormField
          label="Company Size"
          error={errors.employeeCount?.message}
          required
        >
          <select
            {...register('employeeCount')}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSubmitting}
          >
            {employeeCounts.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
        </FormField>

        {/* Preferred Date */}
        <FormField
          label="Preferred Date (Optional)"
          error={errors.preferredDate?.message}
        >
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <Input
              {...register('preferredDate')}
              type="date"
              className="pl-9"
              disabled={isSubmitting}
            />
          </div>
        </FormField>

        {/* Preferred Time */}
        <FormField
          label="Preferred Time (Optional)"
          error={errors.preferredTime?.message}
        >
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <select
              {...register('preferredTime')}
              className="flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isSubmitting}
            >
              {timeSlots.map((slot) => (
                <option key={slot.value} value={slot.value}>
                  {slot.label}
                </option>
              ))}
            </select>
          </div>
        </FormField>

        {/* Message */}
        <FormField
          label="Additional Information (Optional)"
          error={errors.message?.message}
          className="sm:col-span-2"
        >
          <Textarea
            {...register('message')}
            placeholder="Tell us about your business needs, specific requirements, or any questions you have..."
            rows={4}
            disabled={isSubmitting}
          />
        </FormField>
      </div>

      {/* Error Message */}
      {error && (
        <div className="rounded-xl bg-red-500/10 p-4 text-center text-red-400">
          <p className="font-medium">Error submitting demo request</p>
          <p className="text-sm text-red-400/80">{error}</p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Request Demo'
        )}
      </Button>

      <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
        We&apos;ll contact you within 24 hours to schedule your personalized demo.
      </p>
    </form>
  );
}