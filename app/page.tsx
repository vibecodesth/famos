'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function WaitlistSection() {
  const searchParams = useSearchParams();
  const showThanks = searchParams.get('thanks');

  return (
    <section id="waitlist" className="bg-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join the Waitlist
        </h2>
        <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
          Be among the first families to reclaim your sanity. Early access launching soon.
        </p>
        {showThanks ? (
          <div className="max-w-md mx-auto bg-white text-purple-600 rounded-lg p-8">
            <p className="text-2xl font-bold mb-2">Thank you! You&apos;re on the list 🎉</p>
            <p className="text-purple-500">We&apos;ll notify you when we launch.</p>
          </div>
        ) : (
          <form action="https://formsubmit.co/akisato888@gmail.com" method="POST" className="max-w-md mx-auto">
            <input type="hidden" name="_subject" value="🚀 Waitlist Signup - FamOS" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://famos-puce.vercel.app/?thanks=1" />
            <input type="hidden" name="product" value="famos" />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
                required
              />
              <button
                type="submit"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </div>
          </form>
        )}
        <p className="text-sm text-purple-200 mt-4">
          No spam. Just updates on our launch. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-700">FamOS</div>
          <a 
            href="#waitlist" 
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Join Waitlist
          </a>
        </div>
      </header>

      {/* Hero Section - BEFORE (Pain Points) */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Your Family Deserves an<br />Operating System
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Managing 3 kids' schedules is a full-time job nobody pays you for
        </p>
        
        {/* Pain Points */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">😵</div>
            <p className="text-gray-700 italic">
              "Permission slips, soccer practice, birthday RSVPs, library books... my brain is FULL"
            </p>
            <p className="text-sm text-gray-500 mt-2">— Parent on r/parenting</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">💬</div>
            <p className="text-gray-700 italic">
              "Group texts with my spouse about who's picking up which kid are chaos"
            </p>
            <p className="text-sm text-gray-500 mt-2">— Working parent</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">📧</div>
            <p className="text-gray-700 italic">
              "School emails get buried. I've missed 3 important deadlines this month alone"
            </p>
            <p className="text-sm text-gray-500 mt-2">— Overwhelmed mom</p>
          </div>
        </div>
      </section>

      {/* AFTER - The Vision */}
      <section className="bg-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Imagine This Instead
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            <div>
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">One Dashboard</h3>
              <p className="text-purple-100">
                Your entire family's life in one place
              </p>
            </div>
            <div>
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Never Miss Anything</h3>
              <p className="text-purple-100">
                School events, permission slips, practice—all tracked
              </p>
            </div>
            <div>
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Always in Sync</h3>
              <p className="text-purple-100">
                Both parents on the same page, always
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRIDGE - The Product */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            FamOS: Your Family, Organized
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your family has the complexity of a small company. It's time you had the tools to match.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Family Dashboard</h3>
            <p className="text-gray-600">
              See everyone's schedule, tasks, and commitments at a glance
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Smart Email Parsing</h3>
            <p className="text-gray-600">
              Auto-extract events and deadlines from school emails
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Chore Rotation</h3>
            <p className="text-gray-600">
              Fair distribution that actually works—no more arguments
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Shared Calendar</h3>
            <p className="text-gray-600">
              Color-coded by family member. Sync to your phone
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Weekly Prep View</h3>
            <p className="text-gray-600">
              Sunday planning made simple—see what's ahead
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">🔔</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Smart Reminders</h3>
            <p className="text-gray-600">
              Permission slips, library books, early dismissals—we got you
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 md:mr-8 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Set Up Your Family</h3>
                <p className="text-gray-600">
                  Add family members, connect your calendar, forward school emails
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 md:mr-8 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Let FamOS Do the Work</h3>
                <p className="text-gray-600">
                  We parse emails, track deadlines, organize schedules, and remind you what matters
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 md:mr-8 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Enjoy the Peace</h3>
                <p className="text-gray-600">
                  Check your dashboard, stay in sync with your partner, never drop the ball again
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Simple Pricing
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Free</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$0</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span className="text-gray-600">1 child</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span className="text-gray-600">Basic calendar & tasks</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span className="text-gray-600">Manual entry</span>
              </li>
            </ul>
            <a 
              href="#waitlist" 
              className="block w-full bg-gray-200 text-gray-900 text-center px-6 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
            >
              Get Started
            </a>
          </div>
          <div className="bg-purple-600 text-white p-8 rounded-xl shadow-lg border-2 border-purple-700 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold">
              BEST VALUE
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$8</span>
              <span className="text-purple-200">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <span>Unlimited children</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <span>Auto email parsing</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <span>Smart reminders</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <span>Chore rotation</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <span>Weekly prep view</span>
              </li>
            </ul>
            <a 
              href="#waitlist" 
              className="block w-full bg-white text-purple-600 text-center px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Built by Parents */}
      <section className="bg-purple-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Built by Parents, for Parents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're a team of working parents who got tired of the chaos. We built the tool we wished existed. Now we're sharing it with you.
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            <strong>33 million dual-income families in the US</strong> are managing the complexity of a small business with WhatsApp, Google Calendar, and their brain. It's time for something better.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">How does email parsing work?</h3>
            <p className="text-gray-600">
              Forward your school emails to your FamOS inbox. Our AI extracts events, deadlines, and action items automatically and adds them to your dashboard.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Can both parents access the same account?</h3>
            <p className="text-gray-600">
              Yes! FamOS is designed for co-parents. Both can log in, see the same dashboard, and stay in sync.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">What about privacy?</h3>
            <p className="text-gray-600">
              Your family data is yours. We don't sell it, we don't train AI on it, and we encrypt everything. We're parents too—we get it.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Is there a mobile app?</h3>
            <p className="text-gray-600">
              Coming soon! For now, FamOS works great on mobile browsers. Native iOS and Android apps are in development.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Can I try it before paying?</h3>
            <p className="text-gray-600">
              Absolutely. The Free plan is free forever for 1 child. Upgrade to Pro when you're ready for more.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <Suspense fallback={
        <section className="bg-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Waitlist</h2>
            <p className="text-xl text-purple-100 mb-12">Loading...</p>
          </div>
        </section>
      }>
        <WaitlistSection />
      </Suspense>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-white mb-4">FamOS</div>
          <p className="mb-4">The Operating System for Modern Families</p>
          <p className="text-sm">
            © 2026 FamOS. Built with ❤️ by parents who get it.
          </p>
        </div>
      </footer>
    </div>
  );
}
