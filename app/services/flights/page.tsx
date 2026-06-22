'use client';

import Link from 'next/link';

export default function FlightsService() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-sky-50 to-sky-100 dark:bg-slate-950 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl mb-6">✈️</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Flight Booking System</h1>
          <p className="text-xl text-gray-600">
            Connect with passengers worldwide using Tito&apos;s comprehensive flight booking solution.
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
                <li>✓ Seat inventory sync</li>
                <li>✓ Multi-leg bookings</li>
                <li>✓ Class selection</li>
                <li>✓ Baggage management</li>
                <li>✓ Real-time pricing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Airlines</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Fleet management</li>
                <li>✓ Route optimization</li>
                <li>✓ Crew scheduling</li>
                <li>✓ Revenue management</li>
                <li>✓ Fuel optimization</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Passenger Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Seat comparison</li>
                <li>✓ Flexible payments</li>
                <li>✓ Booking modifications</li>
                <li>✓ Real-time updates</li>
                <li>✓ Miles integration</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">Add Flight Schedules</h4>
                  <p className="text-gray-600">Upload routes, aircraft types, and pricing</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">Manage Availability</h4>
                  <p className="text-gray-600">Control seat inventory and pricing dynamically</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Process Bookings</h4>
                  <p className="text-gray-600">Accept reservations from global distribution systems</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold text-gray-900">Maximize Revenue</h4>
                  <p className="text-gray-600">Use yield management to optimize ticket pricing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-sky-50 border-l-4 border-sky-600 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect For</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <li>• Full-service airlines</li>
              <li>• Low-cost carriers</li>
              <li>• Regional airlines</li>
              <li>• Charter flights</li>
              <li>• Private aviation</li>
              <li>• Air taxi services</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-sky-600 to-sky-700 text-white p-12 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Take Flight with Tito</h3>
            <p className="mb-6">Power your airline with a modern, reliable booking system</p>
            <button className="px-8 py-3 bg-white text-sky-600 rounded-lg hover:bg-gray-100 font-bold">
              Get Started Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}