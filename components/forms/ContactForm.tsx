// components/forms/ContactForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormValues } from '@/lib/forms';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormField } from '@/components/shared/FormField';
import { Loader2, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

// Replace with your Formspree endpoint
// You can get this from https://formspree.io/ after creating a form
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojgkazv';

interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function ContactForm({ className, onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
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

  if (isSubmitted) {
    return (
      <div className={cn(
        'flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20',
        className
      )}>
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h3 className="mt-4 text-xl font-semibold text-green-700 dark:text-green-400">
          Message Sent!
        </h3>
        <p className="mt-2 text-green-600 dark:text-green-300">
          Thank you for contacting us. Our team will get back to you within 24 hours.
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
          label="Phone Number (Optional)"
          error={errors.phone?.message}
        >
          <Input
            {...register('phone')}
            type="tel"
            placeholder="Enter your phone number"
            disabled={isSubmitting}
          />
        </FormField>

        {/* Subject */}
        <FormField
          label="Subject"
          error={errors.subject?.message}
          required
          className="sm:col-span-2"
        >
          <Input
            {...register('subject')}
            placeholder="What is your message about?"
            disabled={isSubmitting}
          />
        </FormField>

        {/* Message */}
        <FormField
          label="Message"
          error={errors.message?.message}
          required
          className="sm:col-span-2"
        >
          <Textarea
            {...register('message')}
            placeholder="Please describe your inquiry in detail..."
            rows={5}
            disabled={isSubmitting}
          />
        </FormField>
      </div>

      {/* Error Message */}
      {error && (
        <div className="rounded-xl bg-red-500/10 p-4 text-center text-red-400">
          <p className="font-medium">Error sending message</p>
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
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}