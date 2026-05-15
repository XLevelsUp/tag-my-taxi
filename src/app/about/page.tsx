import Link from 'next/link'
import Image from 'next/image'
import {
  BarChart2, Pencil, Wrench, FlaskConical, PackageCheck,
  LayoutGrid, BadgeCheck, ThumbsUp
} from 'lucide-react'

import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'

/* ─────────────────────────────────────────────
   Timeline data
───────────────────────────────────────────── */

const timelineEvents = [
  {
    year: '2025',
    color: '#2E4057',   // dark blue-grey
    side: 'left',
    title: 'Bonding after delightful trial – 500+ TAXI COMPANIES AND STARTUPS',
    desc: 'Enhanced establishment containing software subscription model with free trial',
  },
  {
    year: '2016',
    color: '#F5A623',   // amber
    side: 'right',
    title: 'Carrying customers in Cloud',
    desc: 'Updation at even nooks of the world via Mongo DB and Amazon Cloud servers',
  },
  {
    year: '2015',
    color: '#C0392B',   // crimson
    side: 'left',
    title: 'Exhilarating enormous customers',
    desc: 'We made an outreach by achieving 1000+ absolutely satisfied customers',
  },
  {
    year: '2014',
    color: '#1A4F72',   // teal-navy
    side: 'right',
    title: 'Infiltration into establishments',
    desc: 'We enrolled into enterprises enrooted by reliable Pubnub integration',
  },
  {
    year: '2012',
    color: '#2E8B7A',   // teal
    side: 'left',
    title: 'The Sovereign shoot up',
    desc: 'We landed up for creating a revolution in digitization of the taxi world',
  },
]

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* Page Header */}
      <header className="pt-40 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-3">
          <span className="text-[#E31E24] font-bold uppercase tracking-widest text-xs">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About Us</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Driving the future of on-demand taxi technology since 2012
          </p>
          <div className="w-16 h-1 bg-[#E31E24] mx-auto mt-4" />
        </div>
      </header>

      <main className="flex-1">

        {/* ── What We Do ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              {/* Illustration placeholder */}
              <div className="flex justify-center">
                <Image
                  src="/phone_app_illustration.png"
                  alt="What We Do"
                  width={380}
                  height={340}
                  className="object-contain"
                />
              </div>
              <div className="space-y-5">
                <h2 className="text-2xl font-bold text-gray-900">What We Do</h2>
                <p className="text-xl font-bold text-gray-900 leading-snug">
                  We are agile, versatile, smart, responsive, and adaptive.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tagmytaxi is a dedicated group of people focused on pushing the limits in the taxi dispatch
                  industry producing amazing applications. We have 100% commitment toward fulfiling all your
                  taxi business needs and making it simple for you to meet your customer expectations. It is
                  very exciting to see your business grow with us, and we make it possible with applications
                  that are super simple, enticing, flexible, and creative. It all started with a vision, a
                  vision to remodel the Uber clone application to make your operations effortlessly simple.
                  We consistently find new ways to embody our vision, thereby reaching your vision most
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="py-12 bg-gray-50 border-y border-gray-200">
          <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
            {[
              { value: '10+', label: 'Products' },
              { value: '2,500+', label: 'Customers' },
              { value: '250+', label: 'Employees' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-black text-gray-900">{s.value}</div>
                <div className="text-[#E31E24] text-sm font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Us</h2>
            <p className="text-gray-500 mb-14">
              Applications created with the potential to reform. It's what we do.
            </p>
            <div className="grid md:grid-cols-3 gap-10">
              <WhyCard
                icon={<LayoutGrid className="w-8 h-8 text-[#E31E24]" />}
                title="Personalized attention"
                desc="All of our work is focused on the clients and in obtaining the results that they deserve."
              />
              <WhyCard
                icon={<BadgeCheck className="w-8 h-8 text-[#E31E24]" />}
                title="Perfected process"
                desc="One of our greatest triumphs is our seamless system that delivers high-quality products."
              />
              <WhyCard
                icon={<ThumbsUp className="w-8 h-8 text-[#E31E24]" />}
                title="Proven expertise"
                desc="The signature virtue of our business is the strong loyalty we uphold to our clients."
              />
            </div>
          </div>
        </section>

        {/* Red divider */}
        <div className="w-full h-1 bg-[#E31E24]" />

        {/* ── Timeline ── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
              Timeline of Tagmytaxi History
            </h2>

            {/* Vertical timeline */}
            <div className="relative">
              {/* Centre line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />

              <div className="space-y-12">
                {timelineEvents.map((ev, i) => (
                  <div key={i} className="relative flex items-start gap-0">
                    {/* Dot on the line */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-3 w-4 h-4 rounded-full border-2 bg-white z-10"
                      style={{ borderColor: ev.color }}
                    />

                    {ev.side === 'left' ? (
                      <>
                        {/* Left content */}
                        <div className="w-1/2 pr-10 text-right">
                          {/* Year pill */}
                          <div
                            className="inline-block text-white font-bold text-sm px-6 py-2 rounded-full mb-3"
                            style={{ backgroundColor: ev.color }}
                          >
                            {ev.year}
                          </div>
                          <h3 className="font-bold text-gray-900 text-sm mb-1">{ev.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{ev.desc}</p>
                        </div>
                        {/* Right spacer */}
                        <div className="w-1/2" />
                      </>
                    ) : (
                      <>
                        {/* Left spacer */}
                        <div className="w-1/2" />
                        {/* Right content */}
                        <div className="w-1/2 pl-10">
                          <div
                            className="inline-block text-white font-bold text-sm px-6 py-2 rounded-full mb-3"
                            style={{ backgroundColor: ev.color }}
                          >
                            {ev.year}
                          </div>
                          <h3 className="font-bold text-gray-900 text-sm mb-1">{ev.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{ev.desc}</p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── How We Work ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div className="space-y-5">
                <h2 className="text-2xl font-bold text-gray-900">How We Work</h2>
                <p className="text-xl font-bold text-gray-900 leading-snug">
                  It's our unique set of qualities that set us apart.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tagmytaxi represents the way we work together toward our goal. We build an environment
                  for creative talents to bloom and make innovative, creative, and flexible solutions
                  possible. We believe we can change the world for the better, and we strive to connect
                  people to unique experiences. Central to everything we do is making our employees happy,
                  thereby our clients.
                </p>
                <Link href="/portfolio">
                  <button className="bg-[#E31E24] hover:bg-red-700 text-white font-bold text-sm px-8 py-3 transition-colors">
                    Our Great Works
                  </button>
                </Link>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/business_growth_illustration.png"
                  alt="How We Work"
                  width={380}
                  height={340}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Process to Success ── */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-14">Our Process to Success</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {[
                { icon: <BarChart2 className="w-10 h-10 text-[#E31E24]" />, label: 'Analyze' },
                { icon: <Pencil className="w-10 h-10 text-[#E31E24]" />, label: 'Design' },
                { icon: <Wrench className="w-10 h-10 text-[#E31E24]" />, label: 'Build' },
                { icon: <FlaskConical className="w-10 h-10 text-[#E31E24]" />, label: 'Test' },
                { icon: <PackageCheck className="w-10 h-10 text-[#E31E24]" />, label: 'Deliver' },
              ].map((step) => (
                <div key={step.label} className="flex flex-col items-center gap-3">
                  {step.icon}
                  <span className="text-sm font-medium text-gray-700">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function WhyCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
