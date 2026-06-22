'use client';

import Link from 'next/link';

export default function HotelsService() {
  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 dark:bg-slate-950/95 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">Tito</Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900">← Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:bg-slate-950 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl mb-6">🏨</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Hotel Reservation System</h1>
          <p className="text-xl text-gray-600">
            Manage hotel bookings efficiently with Tito&apos;s comprehensive reservation platform.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Room inventory management</li>
                <li>✓ Multi-property support</li>
                <li>✓ Seasonal pricing</li>
                <li>✓ Guest management</li>
                <li>✓ Check-in/out tracking</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Hotels</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Occupancy management</li>
                <li>✓ Channel management</li>
                <li>✓ Housekeeping tools</li>
                <li>✓ Revenue optimization</li>
                <li>✓ Guest communications</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guest Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Instant confirmations</li>
                <li>✓ Easy modifications</li>
                <li>✓ Loyalty rewards</li>
                <li>✓ Direct messaging</li>
                <li>✓ Digital key access</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">Add Your Properties</h4>
                  <p className="text-gray-600">Upload room details, amenities, and availability</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">Set Your Rates</h4>
                  <p className="text-gray-600">Configure pricing rules and availability calendars</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Receive Bookings</h4>
                  <p className="text-gray-600">Get reservations from multiple booking channels</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold text-gray-900">Optimize & Grow</h4>
                  <p className="text-gray-600">Use analytics to maximize occupancy and revenue</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect For</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <li>• Budget hotels</li>
              <li>• Luxury resorts</li>
              <li>• Hostels</li>
              <li>• Holiday rentals</li>
              <li>• Hotel chains</li>
              <li>• Guest houses</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-12 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Increase Your Bookings</h3>
            <p className="mb-6">Connect with travelers worldwide using Tito&apos;s hotel booking system</p>
            <button className="px-8 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 font-bold">
              Get Started Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}