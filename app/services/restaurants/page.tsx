'use client';

import Link from 'next/link';

export default function RestaurantsService() {
  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 dark:bg-slate-950/95 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-yellowow-600">Tito</Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900">← Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:bg-slate-950 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl mb-6">🍽️</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Restaurant Reservation System</h1>
          <p className="text-xl text-gray-600">
            Fill your tables with Tito&apos;s intelligent restaurant booking platform.
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
                <li>✓ Table management</li>
                <li>✓ Reservation calendar</li>
                <li>✓ Guest preferences</li>
                <li>✓ Waiting list</li>
                <li>✓ Multi-location support</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Restaurants</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Table optimization</li>
                <li>✓ Staff scheduling</li>
                <li>✓ Kitchen integration</li>
                <li>✓ Revenue forecasting</li>
                <li>✓ Customer profiles</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Diner Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Easy booking</li>
                <li>✓ Special requests</li>
                <li>✓ Instant confirmation</li>
                <li>✓ Reminders</li>
                <li>✓ Loyalty rewards</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">Setup Restaurant</h4>
                  <p className="text-gray-600">Add seating layout, operating hours, and capacity</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">Configure Availability</h4>
                  <p className="text-gray-600">Set time slots and party size options</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Receive Reservations</h4>
                  <p className="text-gray-600">Get bookings through app and web</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold text-gray-900">Manage & Grow</h4>
                  <p className="text-gray-600">Optimize seating and build customer loyalty</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect For</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <li>• Fine dining</li>
              <li>• Casual restaurants</li>
              <li>• Fast casual</li>
              <li>• Cafes</li>
              <li>• Bars & lounges</li>
              <li>• Restaurant chains</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-12 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Boost Your Restaurant Business</h3>
            <p className="mb-6">Fill more tables and delight customers with Tito reservations</p>
            <button className="px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-100 font-bold">
              Get Started Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}