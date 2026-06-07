import Link from 'next/link'
import Image from 'next/image'
import {
  BarChart2, Pencil, Wrench, FlaskConical, PackageCheck,
  LayoutGrid, BadgeCheck, ThumbsUp,
} from 'lucide-react'

import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import { FadeIn } from '@/components/animations/FadeIn'
import { PrimaryButton } from '@/components/landing/LandingInteractive'
import { CountUpStat, WhyCard, ProcessStep } from '@/components/landing/AboutInteractive'

/* ─────────────────────────────────────────────
   Timeline data
───────────────────────────────────────────── */

const timelineEvents = [
  {
    year: '2025',
    color: '#2E4057',
    side: 'left',
    title: 'Bonding after delightful trial – 500+ TAXI COMPANIES AND STARTUPS',
    desc: 'Enhanced establishment containing software subscription model with free trial',
  },
  {
    year: '2016',
    color: '#F5A623',
    side: 'right',
    title: 'Carrying customer in Cloud',
    desc: 'Updation at even nooks of the world via Mongo DB and Amazon Cloud servers',
  },
  {
    year: '2015',
    color: '#C0392B',
    side: 'left',
    title: 'Exhilarating enormous customers',
    desc: 'We made an outreach by achieving 1000+ absolutely satisfied customers',
  },
  {
    year: '2014',
    color: '#1A4F72',
    side: 'right',
    title: 'Infiltration into establishments',
    desc: 'We enrolled into enterprises enrooted by reliable Pubnub integration',
  },
  {
    year: '2012',
    color: '#2E8B7A',
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

      {/* ── Hero Header ── */}
      <header
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1035 50%, #0f172a 100%)',
          minHeight: '320px',
          paddingTop: '96px',
          paddingBottom: '80px',
        }}
      >
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(255,0,0,0.12) 0%, transparent 70%)',
          }}
        />
        {/* Red bottom accent line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ff0000]" />

        <FadeIn delay={0.15} direction="up" className="relative z-10 text-center px-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-[#ff0000] rounded-full" />
            <span
              className="text-[#ff0000] font-bold uppercase tracking-widest"
              style={{ fontSize: '16px' }}
            >
              Our Story
            </span>
            <span className="w-8 h-[2px] bg-[#ff0000] rounded-full" />
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{
              letterSpacing: '-0.02em',
              textShadow: '0 2px 20px rgba(0,0,0,0.4)',
            }}
          >
            About Us
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto" style={{ lineHeight: '1.7' }}>
            Driving the future of on-demand taxi technology since 2012
          </p>
        </FadeIn>
      </header>

      <main className="flex-1">

        {/* ── What We Do ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <FadeIn delay={0.2} direction="right" className="flex justify-center">
                <Image
                  src="/phone_app_illustration.png"
                  alt="What We Do"
                  width={380}
                  height={340}
                  className="object-contain"
                  style={{ filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.10))' }}
                />
              </FadeIn>
              <FadeIn delay={0.4} direction="left" className="space-y-5">
                <div>
                  <span
                    className="text-[#ff0000] font-bold uppercase tracking-widest block mb-3"
                    style={{ fontSize: '16px' }}
                  >
                    Who We Are
                  </span>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                    style={{ letterSpacing: '-0.015em' }}
                  >
                    What We Do
                  </h2>
                </div>
                <p className="text-lg font-bold text-gray-800 leading-snug">
                  We are agile, versatile, smart, responsive, and adaptive.
                </p>
                <p className="text-gray-600 text-base leading-relaxed" style={{ lineHeight: '1.8' }}>
                  Tagmytaxi is a dedicated group of people focused on pushing the limits in the taxi dispatch
                  industry producing amazing applications. We have 100% commitment toward fulfiling all your
                  taxi business needs and making it simple for you to meet your customer expectations. It is
                  very exciting to see your business grow with us, and we make it possible with applications
                  that are super simple, enticing, flexible, and creative. It all started with a vision, a
                  vision to remodel the Uber clone application to make your operations effortlessly simple.
                  We consistently find new ways to embody our vision, thereby reaching your vision most
                  effectively.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Stats Bar with Count-Up ── */}
        <section
          className="py-16"
          style={{
            background: 'linear-gradient(to bottom, #f9fafb, #ffffff)',
            borderTop: '1px solid rgba(0,0,0,0.06)',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-4 text-center">
              {/* Dividers between items */}
              <div className="relative">
                <CountUpStat value="10+" label="Products" duration={1800} />
              </div>
              <div
                className="relative"
                style={{
                  borderLeft: '1px solid rgba(0,0,0,0.08)',
                  borderRight: '1px solid rgba(0,0,0,0.08)',
                }}
              >
                <CountUpStat value="2500+" label="Customers" duration={2400} />
              </div>
              <div className="relative">
                <CountUpStat value="250+" label="Employees" duration={2000} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn delay={0.1} direction="up" className="text-center mb-14">
              <span
                className="text-[#ff0000] font-bold uppercase tracking-widest block mb-3"
                style={{ fontSize: '16px' }}
              >
                Our Advantage
              </span>
              <h2
                className="text-3xl font-bold text-gray-900 mb-3"
                style={{ letterSpacing: '-0.015em' }}
              >
                Why Choose Us
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto" style={{ lineHeight: '1.7' }}>
                Applications created with the potential to reform. It&apos;s what we do.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} direction="up" className="grid md:grid-cols-3 gap-8">
              <WhyCard
                icon={<LayoutGrid className="w-8 h-8 text-[#ff0000]" />}
                title="Personalized attention"
                desc="All of our work is focused on the clients and in obtaining the results that they deserve."
              />
              <WhyCard
                icon={<BadgeCheck className="w-8 h-8 text-[#ff0000]" />}
                title="Perfected process"
                desc="One of our greatest triumphs is our seamless system that delivers high-quality products."
              />
              <WhyCard
                icon={<ThumbsUp className="w-8 h-8 text-[#ff0000]" />}
                title="Proven expertise"
                desc="The signature virtue of our business is the strong loyalty we uphold to our clients."
              />
            </FadeIn>
          </div>
        </section>

        {/* Red divider */}
        <div className="w-full h-[3px] bg-[#ff0000]" />

        {/* ── Timeline ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn delay={0.1} direction="up" className="text-center mb-16">
              <h2
                className="text-3xl font-bold text-gray-900"
                style={{ letterSpacing: '-0.015em' }}
              >
                Timeline of Tagmytaxi History
              </h2>
            </FadeIn>

            {/* Vertical timeline */}
            <div className="relative">
              {/* Centre line — gradient for depth */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]"
                style={{
                  background: 'linear-gradient(to bottom, transparent, #fca5a5 15%, #ef4444 50%, #fca5a5 85%, transparent)',
                }}
              />

              <div className="space-y-14">
                {timelineEvents.map((ev, i) => (
                  <FadeIn
                    key={i}
                    delay={i * 0.1}
                    direction={ev.side === 'left' ? 'right' : 'left'}
                  >
                    <div className="relative flex items-start">
                      {/* Dot */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-4 z-10">
                        {/* Outer ring */}
                        <div
                          className="w-5 h-5 rounded-full"
                          style={{
                            backgroundColor: ev.color,
                            boxShadow: `0 0 0 4px rgba(255,255,255,1), 0 0 0 6px ${ev.color}40`,
                          }}
                        />
                      </div>

                      {ev.side === 'left' ? (
                        <>
                          {/* Left card */}
                          <div className="w-1/2 pr-12">
                            <div
                              className="bg-white rounded-2xl p-6 text-right"
                              style={{
                                boxShadow: 'var(--shadow-md)',
                                border: '1px solid rgba(0,0,0,0.06)',
                              }}
                            >
                              <div
                                className="inline-block text-white font-bold text-base px-4 py-1.5 rounded-full mb-3"
                                style={{
                                  backgroundColor: ev.color,
                                  boxShadow: `0 4px 12px -2px ${ev.color}50`,
                                }}
                              >
                                {ev.year}
                              </div>
                              <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug">{ev.title}</h3>
                              <p className="text-gray-500 text-base leading-relaxed">{ev.desc}</p>
                            </div>
                          </div>
                          {/* Right spacer */}
                          <div className="w-1/2" />
                        </>
                      ) : (
                        <>
                          {/* Left spacer */}
                          <div className="w-1/2" />
                          {/* Right card */}
                          <div className="w-1/2 pl-12">
                            <div
                              className="bg-white rounded-2xl p-6"
                              style={{
                                boxShadow: 'var(--shadow-md)',
                                border: '1px solid rgba(0,0,0,0.06)',
                              }}
                            >
                              <div
                                className="inline-block text-white font-bold text-base px-4 py-1.5 rounded-full mb-3"
                                style={{
                                  backgroundColor: ev.color,
                                  boxShadow: `0 4px 12px -2px ${ev.color}50`,
                                }}
                              >
                                {ev.year}
                              </div>
                              <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug">{ev.title}</h3>
                              <p className="text-gray-500 text-base leading-relaxed">{ev.desc}</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── How We Work ── */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <FadeIn delay={0.2} direction="right" className="space-y-6">
                <div>
                  <span
                    className="text-[#ff0000] font-bold uppercase tracking-widest block mb-3"
                    style={{ fontSize: '16px' }}
                  >
                    Our Approach
                  </span>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                    style={{ letterSpacing: '-0.015em' }}
                  >
                    How We Work
                  </h2>
                </div>
                <p className="text-lg font-bold text-gray-800 leading-snug">
                  It&apos;s our unique set of qualities that set us apart.
                </p>
                <p className="text-gray-600 text-base" style={{ lineHeight: '1.8' }}>
                  Tagmytaxi represents the way we work together toward our goal. We build an environment
                  for creative talents to bloom and make innovative, creative, and flexible solutions
                  possible. We believe we can change the world for the better, and we strive to connect
                  people to unique experiences. Central to everything we do is making our employees happy,
                  thereby our clients.
                </p>
                <PrimaryButton href="/portfolio">Our Great Works</PrimaryButton>
              </FadeIn>
              <FadeIn delay={0.4} direction="left" className="flex justify-center">
                <Image
                  src="/business_growth_illustration.png"
                  alt="How We Work"
                  width={380}
                  height={340}
                  className="object-contain"
                  style={{ filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.10))' }}
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Our Process to Success ── */}
        <section className="py-16 md:py-24 bg-white" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn delay={0.1} direction="up" className="text-center mb-14">
              <span
                className="text-[#ff0000] font-bold uppercase tracking-widest block mb-3"
                style={{ fontSize: '16px' }}
              >
                How We Deliver
              </span>
              <h2
                className="text-3xl font-bold text-gray-900"
                style={{ letterSpacing: '-0.015em' }}
              >
                Our Process to Success
              </h2>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              <ProcessStep
                step="01"
                icon={<BarChart2 className="w-7 h-7 text-[#ff0000]" />}
                label="Analyze"
              />
              <ProcessStep
                step="02"
                icon={<Pencil className="w-7 h-7 text-[#ff0000]" />}
                label="Design"
              />
              <ProcessStep
                step="03"
                icon={<Wrench className="w-7 h-7 text-[#ff0000]" />}
                label="Build"
              />
              <ProcessStep
                step="04"
                icon={<FlaskConical className="w-7 h-7 text-[#ff0000]" />}
                label="Test"
              />
              <ProcessStep
                step="05"
                icon={<PackageCheck className="w-7 h-7 text-[#ff0000]" />}
                label="Deliver"
              />
            </FadeIn>
          </div>
        </section>

        {/* ── Bottom CTA Banner ── */}
        <section
          className="py-20 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e1035 50%, #0f172a 100%)',
          }}
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 50% 80% at 50% 100%, rgba(255,0,0,0.15) 0%, transparent 70%)',
            }}
          />
          <FadeIn delay={0.2} direction="up" className="relative z-10 text-center px-6 max-w-2xl mx-auto space-y-6">
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ letterSpacing: '-0.02em', textShadow: '0 2px 16px rgba(0,0,0,0.3)' }}
            >
              Ready to Build Your Taxi Business?
            </h2>
            <p className="text-gray-300 text-lg" style={{ lineHeight: '1.7' }}>
              Join 500+ taxi companies and startups using Tagmytaxi worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryButton href="/contact">Get Free Trial</PrimaryButton>
              <PrimaryButton href="/features">Explore Features</PrimaryButton>
            </div>
          </FadeIn>
        </section>

      </main>

      <Footer />
    </div>
  )
}
