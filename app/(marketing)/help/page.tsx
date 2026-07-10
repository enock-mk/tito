// app/(marketing)/resources/help-center/page.tsx
'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { helpTopics, HelpQuestion } from '@/data/resources';
import { SearchForm } from '@/components/forms/SearchForm';
import { SlideIn } from '@/components/animations/SlideIn';
import { CTASection } from '@/components/sections/CTASection';
import { cn } from '@/lib/utils';
import {
  ChevronDown,
  ChevronRight,
  MessageSquare,
  Mail,
  Phone,
  Clock,
  Search,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';



export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  // Filter questions based on search
  const allQuestions = helpTopics.flatMap((topic) =>
    topic.questions.map((q) => ({
      ...q,
      topicTitle: topic.title,
      topicId: topic.id,
    }))
  );

  const filteredQuestions = searchQuery
    ? allQuestions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const toggleTopic = (topicId: string) => {
    setExpandedTopic(expandedTopic === topicId ? null : topicId);
  };

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  const getSupportChannels = () => {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center gap-4 rounded-xl border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
          <MessageSquare className="h-6 w-6 text-primary" />
          <div>
            <p className="font-medium">Live Chat</p>
            <p className="text-sm text-neutral-500">Available 24/7</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-xl border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
          <Mail className="h-6 w-6 text-primary" />
          <div>
            <p className="font-medium">Email Support</p>
            <p className="text-sm text-neutral-500">support@tito.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-xl border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
          <Phone className="h-6 w-6 text-primary" />
          <div>
            <p className="font-medium">Phone Support</p>
            <p className="text-sm text-neutral-500">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <PageHeader
        title="Help Center"
        description="Find answers to common questions and get support from our team."
        variant="centered"
        badge="Support"
      />

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <SearchForm
              placeholder="Search help topics..."
              onSearch={(query) => setSearchQuery(query)}
              variant="expanded"
              autoFocus
            />
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <SlideIn>
            <h2 className="text-center text-2xl font-bold">Ways to Get Help</h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-neutral-600 dark:text-neutral-400">
              Choose the support channel that works best for you.
            </p>
            <div className="mt-6">{getSupportChannels()}</div>
          </SlideIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SlideIn>
            <h2 className="text-center text-2xl font-bold">Frequently Asked Questions</h2>
          </SlideIn>

          {filteredQuestions ? (
            // Search Results
            <div className="mx-auto mt-8 max-w-3xl space-y-4">
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map((q) => (
                  <div
                    key={q.id}
                    className="rounded-xl border bg-white dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    <button
                      onClick={() => toggleQuestion(q.id)}
                      className="flex w-full items-center justify-between p-4 text-left"
                    >
                      <span className="font-medium">{q.question}</span>
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 transition-transform',
                          expandedQuestion === q.id && 'rotate-180'
                        )}
                      />
                    </button>
                    {expandedQuestion === q.id && (
                      <div className="border-t p-4 dark:border-neutral-800">
                        <p className="text-neutral-600 dark:text-neutral-400">
                          {q.answer}
                        </p>
                        <div className="mt-2 text-sm text-neutral-500">
                          Category: {q.topicTitle}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <HelpCircle className="mx-auto h-12 w-12 text-neutral-300" />
                  <p className="mt-2 text-neutral-500">No questions found matching your search.</p>
                </div>
              )}
            </div>
          ) : (
            // Topics with Questions
            <div className="mx-auto mt-8 max-w-3xl space-y-4">
              {helpTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="rounded-xl border bg-white dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <button
                    onClick={() => toggleTopic(topic.id)}
                    className="flex w-full items-center justify-between p-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <topic.icon className="h-5 w-5 text-primary" />
                      <span className="font-semibold">{topic.title}</span>
                      <span className="text-sm text-neutral-500">
                        ({topic.questions.length} questions)
                      </span>
                    </div>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 transition-transform',
                        expandedTopic === topic.id && 'rotate-180'
                      )}
                    />
                  </button>

                  {expandedTopic === topic.id && (
                    <div className="border-t p-4 dark:border-neutral-800">
                      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                        {topic.description}
                      </p>
                      <div className="space-y-2">
                        {topic.questions.map((q) => (
                          <div
                            key={q.id}
                            className="rounded-lg bg-neutral-50 p-3 dark:bg-neutral-800/50"
                          >
                            <button
                              onClick={() => toggleQuestion(q.id)}
                              className="flex w-full items-center justify-between text-left"
                            >
                              <span className="text-sm font-medium">{q.question}</span>
                              <ChevronRight
                                className={cn(
                                  'h-4 w-4 transition-transform',
                                  expandedQuestion === q.id && 'rotate-90'
                                )}
                              />
                            </button>
                            {expandedQuestion === q.id && (
                              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                                {q.answer}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection variant="simple" />
    </>
  );
}