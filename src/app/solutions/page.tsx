import Link from 'next/link'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import { FadeIn } from '@/components/animations/FadeIn'

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* Page Header */}
      <header className="pt-40 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-3">
          <span className="text-[#dc2626] font-bold uppercase tracking-widest text-base">Industry Solutions</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Solutions
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Tailored dispatch software for every transportation business model
          </p>
          <div className="w-16 h-1 bg-[#dc2626] mx-auto mt-4" />
        </div>
      </header>

      {/* Delivery Planning Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left: Text */}
            <FadeIn delay={0.2} direction="right" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Make delivery planning easy to save more and grow faster
              </h2>
              <p className="text-gray-600 leading-relaxed">
                With Tagmytaxi&apos;s delivery management and tracking platform, your business can not only deliver more orders, but you do it more intelligently and by cutting down your expenses.
              </p>
              <ul className="space-y-4">
                <CheckItem text="Plan multiple orders and deliver quickly with smart dispatch and powerful routing." />
                <CheckItem text="Offer real-time tracking, proof-of-delivery and quick feedback to wow customers." />
                <CheckItem text="Analyze crucial data to shorten delivery time & minimize costs." />
              </ul>
              <Link href="/contact">
                <button className="mt-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-base px-8 py-3 rounded transition-colors">
                  Get Started
                </button>
              </Link>
            </FadeIn>

            {/* Right: Real App Screenshot */}
            <FadeIn delay={0.4} direction="left" className="flex justify-center">
              <div className="relative w-full max-w-[520px]">
                <Image
                  src="/tab2.png"
                  alt="TagMyTaxi Fleet Management Dashboard — real-time vehicle tracking and metrics"
                  width={520}
                  height={390}
                  className="object-contain w-full drop-shadow-2xl rounded-2xl"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Fleet Management Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left: Dashboard Screenshot */}
            <FadeIn delay={0.2} direction="right" className="flex justify-center">
              <div className="relative w-full max-w-[520px]">
                <Image
                  src="/tab1.png"
                  alt="TagMyTaxi Fleet Management Dashboard — dark mode with live vehicle tracking"
                  width={520}
                  height={390}
                  className="object-contain w-full drop-shadow-2xl rounded-2xl"
                  loading="lazy"
                />
              </div>
            </FadeIn>

            {/* Right: Text */}
            <FadeIn delay={0.4} direction="left" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Complete fleet management from a single dashboard
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Monitor every vehicle in your fleet in real time. Track driver performance, manage maintenance schedules, and optimize routes — all from one powerful admin panel.
              </p>
              <ul className="space-y-4">
                <CheckItem text="Real-time GPS tracking for every vehicle in your fleet." />
                <CheckItem text="Driver performance analytics and automated payroll." />
                <CheckItem text="Multi-city management from a single login." />
              </ul>
              <Link href="/contact">
                <button className="mt-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-base px-8 py-3 rounded transition-colors">
                  Request Demo
                </button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Passenger & Driver Apps Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left: Text */}
            <FadeIn delay={0.2} direction="right" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                White-label apps your passengers and drivers will love
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Launch your own branded taxi booking app — just like Uber, but under your name. Passengers enjoy seamless booking, while drivers get a powerful app for ride management, navigation, and earnings tracking.
              </p>
              <ul className="space-y-4">
                <CheckItem text="Fully branded passenger app with your logo, name, and colors." />
                <CheckItem text="Driver app with booking alerts, navigation, and earning reports." />
                <CheckItem text="Ride pooling, split billing, and in-app wallet payments." />
              </ul>
              <Link href="/features">
                <button className="mt-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-base px-8 py-3 rounded transition-colors">
                  View Features
                </button>
              </Link>
            </FadeIn>

            {/* Right: Single Phone Screenshot */}
            <FadeIn delay={0.4} direction="left" className="flex justify-center">
              <div className="relative w-full max-w-[280px]">
                <Image
                  src="/mobile2.png"
                  alt="TagMyTaxi Passenger App — book a ride with live map"
                  width={280}
                  height={560}
                  className="object-contain w-full"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Dispatch Software Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left: Dispatch Screenshot */}
            <FadeIn delay={0.2} direction="right" className="flex justify-center">
              <div className="relative w-full max-w-[280px]">
                <Image
                  src="/mobile5.png"
                  alt="TagMyTaxi Dispatch App — ride assignment and driver tracking"
                  width={280}
                  height={560}
                  className="object-contain w-full"
                  loading="lazy"
                />
              </div>
            </FadeIn>

            {/* Right: Text */}
            <FadeIn delay={0.4} direction="left" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                AI-powered dispatch that fills every seat automatically
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Stop losing rides to manual errors. Our intelligent dispatch engine assigns the nearest available driver in seconds, reducing wait times and maximizing your fleet utilization.
              </p>
              <ul className="space-y-4">
                <CheckItem text="Automatic and manual dispatching modes for full flexibility." />
                <CheckItem text="Smart matching based on proximity, availability, and vehicle type." />
                <CheckItem text="Real-time dispatcher panel with live ride monitoring." />
              </ul>
              <Link href="/contact">
                <button className="mt-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-base px-8 py-3 rounded transition-colors">
                  Start Free Trial
                </button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 md:py-20 bg-[#dc2626] text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            With Tagmytaxi, step up your delivery business game and scale your growth
          </h2>
          <p className="text-red-100 text-lg max-w-2xl mx-auto">
            Join 500+ taxi companies across 42 countries already using TagMyTaxi to run smarter, more profitable fleets.
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#dc2626] hover:bg-red-100 font-bold text-base px-10 py-4 rounded-full transition-colors uppercase tracking-widest">
              Ask for a Free Trial
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <Check className="text-[#dc2626] w-5 h-5 mt-0.5 shrink-0" />
      <span className="text-gray-700 text-base leading-relaxed">{text}</span>
    </li>
  )
}
