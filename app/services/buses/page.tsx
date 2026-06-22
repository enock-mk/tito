'use client';

import Link from 'next/link';

export default function BusesService() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:bg-slate-950 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl mb-6">🚌</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Bus Ticket Booking</h1>
          <p className="text-xl text-gray-600">
            Streamline your bus ticketing operations with Tito&apos;s robust booking system.
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
                <li>✓ Real-time seat management</li>
                <li>✓ Multi-route booking</li>
                <li>✓ Dynamic pricing</li>
                <li>✓ Instant confirmations</li>
                <li>✓ Mobile-friendly booking</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Operators</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Fleet management</li>
                <li>✓ Route optimization</li>
                <li>✓ Conductor tools</li>
                <li>✓ Revenue analytics</li>
                <li>✓ Automated payments</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Easy seat selection</li>
                <li>✓ Multiple payment options</li>
                <li>✓ Ticket history</li>
                <li>✓ Live tracking</li>
                <li>✓ 24/7 support</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">List Your Routes</h4>
                  <p className="text-gray-600">Add all your bus routes with schedules and pricing</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">Go Live</h4>
                  <p className="text-gray-600">Your bookings are immediately available to customers</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Get Bookings</h4>
                  <p className="text-gray-600">Receive reservations through the platform or API</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold text-gray-900">Manage & Earn</h4>
                  <p className="text-gray-600">Track bookings and receive automated payouts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect For</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <li>• National bus operators</li>
              <li>• Regional bus services</li>
              <li>• Shuttle services</li>
              <li>• Tour bus companies</li>
              <li>• Corporate transportation</li>
              <li>• Intercity bus networks</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-12 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Go Digital?</h3>
            <p className="mb-6">Start selling bus tickets online in minutes with Tito</p>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-bold">
              Get Started Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}