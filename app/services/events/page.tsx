'use client';

import Link from 'next/link';

export default function EventsService() {
  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 dark:bg-slate-950/95 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">Tito</Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white">← Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-pink-50 to-pink-100 dark:bg-slate-950 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl mb-6">🎪</div>
          <h1 className="text-5xl font-bold text-slate-950 dark:text-white mb-4">Event Ticketing Platform</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Sell event tickets effortlessly and maximize attendance with Tito.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">Key Features</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li>✓ Flexible seat layouts</li>
                <li>✓ Multiple ticket tiers</li>
                <li>✓ Early bird pricing</li>
                <li>✓ Guest list management</li>
                <li>✓ QR code tickets</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Event Organizers</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Easy event setup</li>
                <li>✓ Attendee analytics</li>
                <li>✓ Capacity management</li>
                <li>✓ Promotional codes</li>
                <li>✓ Email automation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Attendee Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Discover events</li>
                <li>✓ Easy booking</li>
                <li>✓ Digital tickets</li>
                <li>✓ Event reminders</li>
                <li>✓ Community features</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">Create Your Event</h4>
                  <p className="text-gray-600">Add details, date, location, and ticket options</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">Set Your Pricing</h4>
                  <p className="text-gray-600">Define ticket tiers and promotional pricing</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Promote & Share</h4>
                  <p className="text-gray-600">Get unique link to share across channels</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold text-gray-900">Manage Attendees</h4>
                  <p className="text-gray-600">Check in guests and track event performance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-600 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect For</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <li>• Music concerts</li>
              <li>• Conferences</li>
              <li>• Theatre productions</li>
              <li>• Sports events</li>
              <li>• Festivals</li>
              <li>• Workshops</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white p-12 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Make Your Event Unforgettable</h3>
            <p className="mb-6">Sell tickets and manage attendees with Tito&apos;s event platform</p>
            <button className="px-8 py-3 bg-white text-pink-600 rounded-lg hover:bg-gray-100 font-bold">
              Get Started Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}