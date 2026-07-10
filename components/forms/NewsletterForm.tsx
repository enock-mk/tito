// components/forms/NewsletterForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newsletterFormSchema, NewsletterFormValues } from '@/lib/forms';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { FormField } from '@/components/shared/FormField';
import { Loader2, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewsletterFormProps {
  className?: string;
  variant?: 'default' | 'inline' | 'modal';
  onSuccess?: () => void;
}

export function NewsletterForm({
  className,
  variant = 'default',
  onSuccess,
}: NewsletterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      preferences: [],
    },
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsSubmitting(true);
    try {
      console.log('Newsletter form data:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      reset();
      onSuccess?.();
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting newsletter form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const preferenceOptions = [
    { value: 'product-updates', label: 'Product Updates' },
    { value: 'industry-news', label: 'Industry News' },
    { value: 'events', label: 'Events & Webinars' },
    { value: 'tips', label: 'Tips & Best Practices' },
    { value: 'offers', label: 'Special Offers' },
  ];

  if (isSubmitted && variant !== 'inline') {
    return (
      <div className={cn(
        'flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-6 text-center dark:border-green-800 dark:bg-green-900/20',
        className
      )}>
        <CheckCircle className="h-8 w-8 text-green-500" />
        <h4 className="mt-2 font-semibold text-green-700 dark:text-green-400">
          Subscribed!
        </h4>
        <p className="mt-1 text-sm text-green-600 dark:text-green-300">
          Thank you for subscribing to our newsletter.
        </p>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn('flex flex-col gap-3 sm:flex-row', className)}
      >
        <div className="flex-1">
          <Input
            {...register('email')}
            type="email"
            placeholder="Enter your email"
            disabled={isSubmitting || isSubmitted}
            className={cn(
              errors.email && 'border-red-500',
              isSubmitted && 'border-green-500'
            )}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <Button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className="sm:w-auto"
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : isSubmitted ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            'Subscribe'
          )}
        </Button>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('space-y-4', className)}
    >
      <div className="grid grid-cols-1 gap-4">
        {/* First Name */}
        <FormField
          label="First Name (Optional)"
          error={errors.firstName?.message}
        >
          <Input
            {...register('firstName')}
            placeholder="Enter your first name"
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

        {/* Preferences */}
        <FormField
          label="Topics of Interest"
          error={errors.preferences?.message}
        >
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {preferenceOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center space-x-2 text-sm"
              >
                <Checkbox
                  {...register('preferences')}
                  value={option.value}
                  disabled={isSubmitting}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </FormField>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Subscribing...
          </>
        ) : (
          'Subscribe to Newsletter'
        )}
      </Button>

      <p className="text-center text-xs text-neutral-500 dark:text-neutral-400">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
}