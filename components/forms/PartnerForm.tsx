// components/forms/PartnerForm.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { partnerFormSchema, PartnerFormValues } from '@/lib/forms';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { FormField } from '@/components/shared/FormField';
import { Loader2, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

// Replace with your Formspree endpoint
// You can get this from https://formspree.io/ after creating a form
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqeryzoo';

interface PartnerFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function PartnerForm({ className, onSuccess }: PartnerFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const successTimeoutRef = useRef<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    
  } = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      industry: 'other',
      businessSize: '1-10',
      website: '',
      message: '',
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: PartnerFormValues) => {
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
        // Reset success state after 5 seconds (store timer so we can clear on unmount)
        successTimeoutRef.current = window.setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        let parsed: unknown = null;
        try {
          parsed = await response.json();
        } catch {
          // ignore parse errors
        }

        let errMsg = 'Something went wrong. Please try again.';
        if (parsed && typeof parsed === 'object') {
          const p = parsed as Record<string, unknown>;
          if (typeof p.error === 'string') {
            errMsg = p.error;
          } else if (Array.isArray(p.errors) && p.errors.length > 0) {
            const first = p.errors[0] as Record<string, unknown> | undefined;
            if (first && typeof first.message === 'string') {
              errMsg = first.message as string;
            }
          }
        }

        setError(errMsg);
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

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

  const businessSizes = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-500', label: '201-500 employees' },
    { value: '500+', label: '500+ employees' },
  ];

  if (isSubmitted) {
    return (
      <div className={cn(
        'flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20',
        className
      )}>
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h3 className="mt-4 text-xl font-semibold text-green-700 dark:text-green-400">
          Application Submitted!
        </h3>
        <p className="mt-2 text-green-600 dark:text-green-300">
          Thank you for your interest in partnering with TiTO. Our team will review your application and get back to you within 24-48 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => void handleSubmit(onSubmit)(e)}
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
              id="fullName"
              {...register('fullName')}
              placeholder="Enter your full name"
              disabled={isSubmitting}
              aria-invalid={!!errors.fullName?.message}
          />
        </FormField>

        {/* Email */}
        <FormField
          label="Email Address"
          error={errors.email?.message}
          required
        >
          <Input
            id="email"
            {...register('email')}
            type="email"
            placeholder="Enter your email address"
            disabled={isSubmitting}
            aria-invalid={!!errors.email?.message}
          />
        </FormField>

        {/* Phone */}
        <FormField
          label="Phone Number"
          error={errors.phone?.message}
          required
        >
          <Input
            id="phone"
            {...register('phone')}
            type="tel"
            placeholder="Enter your phone number"
            disabled={isSubmitting}
            aria-invalid={!!errors.phone?.message}
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
            id="companyName"
            {...register('companyName')}
            placeholder="Enter your company name"
            disabled={isSubmitting}
            aria-invalid={!!errors.companyName?.message}
          />
        </FormField>

        {/* Industry */}
        <FormField
          label="Industry"
          error={errors.industry?.message}
          required
        >
          <select
            id="industry"
            {...register('industry')}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSubmitting}
            aria-invalid={!!errors.industry?.message}
          >
            {industries.map((industry) => (
              <option key={industry.value} value={industry.value}>
                {industry.label}
              </option>
            ))}
          </select>
        </FormField>

        {/* Business Size */}
        <FormField
          label="Business Size"
          error={errors.businessSize?.message}
          required
        >
          <select
            id="businessSize"
            {...register('businessSize')}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSubmitting}
            aria-invalid={!!errors.businessSize?.message}
          >
            {businessSizes.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
        </FormField>

        {/* Website */}
        <FormField
          label="Website (Optional)"
          error={errors.website?.message}
          className="sm:col-span-2"
        >
          <Input
            id="website"
            {...register('website')}
            type="url"
            placeholder="https://your-company.com"
            disabled={isSubmitting}
            aria-invalid={!!errors.website?.message}
          />
        </FormField>

        {/* Message */}
        <FormField
          label="Why do you want to partner with TiTO?"
          error={errors.message?.message}
          required
          className="sm:col-span-2"
        >
          <Textarea
            id="message"
            {...register('message')}
            placeholder="Tell us about your business and why you want to partner with TiTO..."
            rows={4}
            disabled={isSubmitting}
            aria-invalid={!!errors.message?.message}
          />
        </FormField>

        {/* Terms */}
        <FormField
          error={errors.agreeToTerms?.message}
          className="sm:col-span-2"
        >
          <div className="flex items-center space-x-2">
            <Checkbox
              id="agreeToTerms"
              {...register('agreeToTerms')}
              disabled={isSubmitting}
              aria-invalid={!!errors.agreeToTerms?.message}
            />
            <label className="text-sm">
              I agree to the{' '}
              <a href="/legal/terms" className="text-primary hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/legal/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
        </FormField>
      </div>

      {/* Error Message */}
      {error && (
        <div className="rounded-xl bg-red-500/10 p-4 text-center text-red-400">
          <p className="font-medium">Error submitting application</p>
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
          'Apply to Partner'
        )}
      </Button>

      <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
        We&apos;ll review your application and get back to you within 24-48 hours.
      </p>
    </form>
  );
}