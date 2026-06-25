'use client';

import Link from 'next/link';

export default function MoviesService() {
  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 dark:bg-slate-950/95 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-yellow-600">Tito</Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900">← Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-red-50 to-red-100 dark:bg-slate-950 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl mb-6">🎬</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Cinema Ticket Booking</h1>
          <p className="text-xl text-gray-600">
            Boost cinema revenue with Tito&apos;s easy-to-use movie ticketing solution.
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
                <li>✓ Seat selection interface</li>
                <li>✓ Multi-screen management</li>
                <li>✓ Show scheduling</li>
                <li>✓ Real-time seat maps</li>
                <li>✓ Combo booking</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Cinemas</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Theatre management</li>
                <li>✓ Show timings</li>
                <li>✓ Revenue analytics</li>
                <li>✓ Concession sales</li>
                <li>✓ Dynamic pricing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Movie-goer Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Visual seat booking</li>
                <li>✓ Pre-book snacks</li>
                <li>✓ Mobile tickets</li>
                <li>✓ Group bookings</li>
                <li>✓ Discount offers</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">Setup Theatres</h4>
                  <p className="text-gray-600">Configure screens, seats, and pricing tiers</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">Schedule Shows</h4>
                  <p className="text-gray-600">Add movies and show times to your calendar</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Go Online</h4>
                  <p className="text-gray-600">Your booking page is live and searchable</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold text-gray-900">Fill Seats</h4>
                  <p className="text-gray-600">Receive bookings and process payments instantly</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect For</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <li>• Multiplexes</li>
              <li>• Independent cinemas</li>
              <li>• Drive-in theatres</li>
              <li>• IMAX theatres</li>
              <li>• Cinema chains</li>
              <li>• Art house cinemas</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-12 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Sell More Tickets?</h3>
            <p className="mb-6">Let customers book movie tickets easily with Tito</p>
            <button className="px-8 py-3 bg-white text-red-600 rounded-lg hover:bg-gray-100 font-bold">
              Get Started Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}