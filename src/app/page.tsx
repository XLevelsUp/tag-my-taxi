import Image from 'next/image'
import dynamic from 'next/dynamic'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import { Lightbulb, Rocket, Tv, Settings, TrendingUp } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import {
  HeroCTAButton,
  PrimaryButton,
  OutlineButton,
  FeatureCard,
} from '@/components/landing/LandingInteractive'
import { PlayStoreModalButton } from '@/components/landing/PlayStoreModalButton'
import { UnifiedContactForm } from '@/components/landing/UnifiedContactForm'
import { SourceForgeBadge } from '@/components/landing/SourceForgeBadge'

/* ── Lazy-loaded below-fold client components (reduces initial JS bundle) ── */
const ReviewCarousel = dynamic(
  () => import('@/components/landing/ReviewCarousel').then(m => m.ReviewCarousel)
)
const FAQAccordion = dynamic(
  () => import('@/components/landing/FAQAccordion').then(m => m.FAQAccordion)
)


/* ── JSON-LD Structured Data ────────────────────────────────────────────────── */

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What is TagMyTaxi's taxi dispatch software?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TagMyTaxi is a cloud-based taxi dispatch software that helps fleet owners manage bookings, track drivers in real time, and run their taxi business — just like Uber, but under your own brand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I launch my own branded taxi app using TagMyTaxi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. TagMyTaxi is a fully white-label taxi dispatch software — you get a taxi booking app with your own name, logo, and colours, so your customers see your brand, not ours.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get my fleet started on TagMyTaxi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Your fleet can be fully live on TagMyTaxi's taxi dispatch software within 24 hours — with your branded app, driver tracking, automated dispatch, and fleet management all ready to go.",
      },
    },
    {
      '@type': 'Question',
      name: "How does TagMyTaxi's taxi booking software help me save money on my fleet?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "TagMyTaxi's taxi booking software automatically assigns rides to the nearest driver, reduces vehicle idle time, and runs on the cloud — so you spend less on fuel, staff, and server costs every month.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does TagMyTaxi support ride pooling for my fleet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. TagMyTaxi supports ride pooling — multiple passengers heading the same way share one vehicle, which means lower ride costs for passengers, more earnings per trip for drivers, and better use of every vehicle in your fleet.',
      },
    },
    {
      '@type': 'Question',
      name: "Is TagMyTaxi's taxi management software suitable for both small and large fleets?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. TagMyTaxi's taxi management software works for any fleet size — whether you have 5 vehicles or 5,000. You can grow your fleet anytime without changing your plan or renegotiating contracts.",
      },
    },
    {
      '@type': 'Question',
      name: "Can I manage multiple cities with TagMyTaxi's taxi fleet management software?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. TagMyTaxi's taxi fleet management software lets you manage multiple cities from one single login — with separate fare rules, drivers, and dispatch zones set up for each location.",
      },
    },
    {
      '@type': 'Question',
      name: 'What reports does TagMyTaxi give me to run my fleet better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "TagMyTaxi's taxi dispatch system gives you daily driver performance reports, vehicle revenue reports, busy zone maps, and corporate client usage summaries — so you always know what's working and what's not.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can TagMyTaxi handle bookings and billing for my corporate clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. TagMyTaxi's taxi booking software manages your corporate clients with automatic invoicing, monthly ride reports, special fare packages, and a dedicated booking portal for each business account.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will my taxi dispatch software go down and affect my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. TagMyTaxi's taxi dispatch software runs on secure cloud servers with 99.9% uptime — meaning your drivers keep getting rides and your customers keep booking, without any interruption.",
      },
    },
  ],
}

const aggregateRatingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'TagMyTaxi — Taxi Dispatch Software',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Android, iOS',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free 15-day trial',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
}

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <main className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      {/* JSON-LD Structured Data — rendered server-side for instant availability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingJsonLd) }}
      />

      <Navbar />

      {/* Hero Section — optimized: next/image with priority for LCP preload */}
      <section
        className="relative flex items-center justify-center overflow-hidden py-16 lg:py-28"
        style={{ minHeight: '800px' }}
      >
        {/* Hero background — next/image enables AVIF/WebP + automatic preload */}
        <Image
          src="/banner.jpg"
          alt=""
          fill
          preload={true}
          sizes="100vw"
          className="object-cover object-center"
          quality={75}
        />

        {/* Dark overlay — matches reference site ~52% opacity */}
        <div className="absolute inset-0 z-[1]" style={{ backgroundColor: 'rgba(0,0,0,0.52)' }} />

        {/* Cinematic bottom fade */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-[1]"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.30))' }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading and Subtitle */}
            <FadeIn delay={0.2} direction="up" className="lg:col-span-7 text-center lg:text-left text-white space-y-6">
              <h1
                className="text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-tight text-white"
                style={{
                  lineHeight: '1.15',
                  textShadow: '0 2px 16px rgba(0,0,0,0.35)',
                  letterSpacing: '-0.02em',
                }}
              >
                #1 Taxi Dispatch Software<br />
                500+ Companies, Zero&nbsp;Compromises
              </h1>
              <p className="text-lg md:text-xl text-gray-200 font-normal italic" style={{ letterSpacing: '0.01em', lineHeight: '1.6' }}>
                The last upgrade your fleet will ever need — AI-powered dispatch, real-time GPS tracking, and a white-label taxi app ready in 24&nbsp;hours.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <PlayStoreModalButton />
                <span className="text-gray-300 text-sm italic">
                  Try free for 15 days. No credit card required.
                </span>
              </div>

              {/* Trust/Rating & Accreditation Badges with premium card layouts */}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-5 mt-8">
                {/* Review Badges */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <div className="text-[13px] font-black uppercase tracking-wider text-gray-300/90 whitespace-nowrap min-w-[100px] text-center lg:text-left">
                    Top Rated:
                  </div>
                  <div className="bg-white px-4 py-2 rounded-2xl shadow-xl flex items-center justify-center">
                    <SourceForgeBadge />
                  </div>
                </div>

                {/* Accreditation */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <div className="text-[13px] font-black uppercase tracking-wider text-gray-300/90 whitespace-nowrap min-w-[100px] text-center lg:text-left">
                    Accredited:
                  </div>
                  <div className="flex items-center gap-6 bg-white px-6 py-3 rounded-2xl shadow-xl">
                    <Image
                      src="/bas-iso-badge.png"
                      alt="BAS ISO 27001 Certified"
                      width={48}
                      height={48}
                      className="object-contain hover:scale-105 transition-transform duration-200 cursor-pointer"
                    />
                    <Image
                      src="/dmca-badge.png"
                      alt="DMCA Protected"
                      width={100}
                      height={25}
                      className="object-contain hover:scale-105 transition-transform duration-200 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right Column: Form Container */}
            <FadeIn delay={0.4} direction="up" className="lg:col-span-5 w-full max-w-md mx-auto">
              <div
                className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100/50 text-gray-900 text-left"
                style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)' }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-1">
                    Request <span className="text-[#dc2626]">A Quote</span>
                  </h3>
                  <p className="text-gray-500 text-[14px]">
                    Enter details below to start your free trial.
                  </p>
                </div>
                <UnifiedContactForm formType="quote" variant="landing" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <FadeIn delay={0.2} direction="up" className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <StatItem value="500+" label="Taxi companies & startups" />
            <StatItem value="42" label="Countries" />
            <StatItem value="50,000+" label="Vehicles" />
          </div>
        </FadeIn>
      </section>

      {/* Red Divider Line */}
      <div className="w-full h-[3px] bg-[#dc2626]" />

      {/* Stop Losing Rides Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn delay={0.1} direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stop Losing Rides. Our Taxi Dispatch Software Fills Every&nbsp;Seat, Automatically
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              AI-powered dispatch assigns the nearest driver in seconds — no missed bookings, no idle vehicles, no wasted time.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} direction="up" className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lightbulb className="w-6 h-6 text-[#dc2626]" />}
              title="Showcase your brand"
              description="Bring all your brand elements - right from logo, graphics to color scheme - to your white-labeled Uber clone taxi software for a personalized platform."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6 text-[#dc2626]" />}
              title="Go digital, grow your revenue"
              description="Automate your taxi operations to unlock cost-savings, attract a wider customer base and increase revenue opportunities with an Uber clone software."
            />
            <FeatureCard
              icon={<Tv className="w-6 h-6 text-[#dc2626]" />}
              title="Suite of dispatch system & mobile apps"
              description="Offer your passengers and drivers the convenience of Uber-like mobile apps while you discover the best way of dispatching with our taxi dispatch system."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6 text-[#dc2626]" />}
              title="Go digital, grow your revenue"
              description="Automate your taxi operations to unlock cost-savings, attract a wider customer base and increase revenue opportunities with an Uber clone software."
            />
            <FeatureCard
              icon={<Settings className="w-6 h-6 text-[#dc2626]" />}
              title="Built for your unique business"
              description="Set up a digital platform that effortlessly adapts your unique business model, fare strategy and customer experience with our Uber clone taxi application."
            />
            <FeatureCard
              icon={<Rocket className="w-6 h-6 text-[#dc2626]" />}
              title="Launch your platform in no time"
              description="Get ready to take on the digital competition of the taxi world by setting up your cloud-based, Uber-like taxi dispatch software instantly."
            />
          </FadeIn>
        </div>
      </section>

      {/* One Cloud Taxi Dispatch System Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <FadeIn delay={0.2} direction="right" className="space-y-7">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                One Cloud Taxi Dispatch System — Built for Every Business Model
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ lineHeight: '1.75' }}>
                The digital transformation of the taxi industry demands every business to step up their game for their survival. TagMyTaxi introduces a ready-made, on-demand taxi management software that empowers taxi companies to take charge of their operations and automate their activities for a better outcome. Explore the advanced features of our cloud-based taxi dispatch software that is both unique and profitable.
              </p>
              <PrimaryButton href="/features">View Features</PrimaryButton>
            </FadeIn>
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

      {/* From Sign-Up to Live Taxi Dispatch App Section */}
      <section className="py-16 md:py-24 bg-white overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <FadeIn delay={0.2} direction="right" className="flex justify-center">
              <div className="relative flex items-end justify-center gap-[-20px] w-full max-w-[420px] mx-auto">
                {/* Back phone — slightly raised and offset */}
                <div className="relative z-10 -mr-8 mb-8" style={{ transform: 'rotate(-6deg)' }}>
                  <Image
                    src="/mobile3.png"
                    alt="TagMyTaxi Passenger App — choose your ride type"
                    width={190}
                    height={380}
                    className="object-contain drop-shadow-xl"
                    loading="lazy"
                  />
                </div>
                {/* Front phone — centered and prominent */}
                <div className="relative z-20" style={{ transform: 'rotate(0deg)' }}>
                  <Image
                    src="/mobile2.png"
                    alt="TagMyTaxi Passenger App — book a ride with live map"
                    width={210}
                    height={420}
                    className="object-contain drop-shadow-2xl"
                    loading="lazy"
                  />
                </div>
                {/* Right phone — slightly offset */}
                <div className="relative z-10 -ml-8 mb-6" style={{ transform: 'rotate(5deg)' }}>
                  <Image
                    src="/mobile6.png"
                    alt="TagMyTaxi Passenger App — home screen"
                    width={185}
                    height={370}
                    className="object-contain drop-shadow-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.4} direction="left" className="space-y-7">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                From Sign-Up to Live Taxi Dispatch App in 4&nbsp;Simple&nbsp;Steps
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ lineHeight: '1.75' }}>
                The traditional taxi business is plagued with complex manual processes. TagMyTaxi breaks these inefficiencies with its Uber-like taxi booking app that saves both time and money. Witness how a white-label taxi dispatch software can help your business to increase your bookings, improve productivity and gain more returns.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryButton href="/contact">Request Demo</PrimaryButton>
                <PlayStoreModalButton />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>



      {/* Trusted by Fleet Management Companies Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <FadeIn delay={0.2} direction="right" className="space-y-7">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Trusted by Fleet Management Companies on 6&nbsp;Continents
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ lineHeight: '1.75' }}>
                Our white-label, on-demand taxi dispatch application is crafted in such a way that it can accommodate your specific business requirements. From a rental company, shuttle service to paratransit business, our unique booking software incorporates advanced features that address industry needs. Scale your business to newer heights with TagMyTaxi.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <OutlineButton href="/contact">Get Started Free</OutlineButton>
                <PlayStoreModalButton />
              </div>
            </FadeIn>
            <FadeIn delay={0.4} direction="left" className="flex justify-center">
              <div className="relative w-full max-w-[520px]">
                {/* Main tablet dashboard */}
                <Image
                  src="/tab1.png"
                  alt="TagMyTaxi Fleet Management Dashboard — dark mode with live vehicle tracking"
                  width={480}
                  height={360}
                  className="object-contain w-full drop-shadow-2xl rounded-2xl"
                  loading="lazy"
                />
                {/* Floating driver mobile overlaid bottom-right */}
                <div
                  className="absolute -bottom-4 -right-4 z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                  style={{ width: '120px' }}
                >
                  <Image
                    src="/mobile4.png"
                    alt="TagMyTaxi Driver App — live tracking"
                    width={120}
                    height={240}
                    className="object-contain w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewCarousel />

      {/* FAQ Section */}
      <FAQAccordion />

      <Footer />

    </main>
  )
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="space-y-2 px-4">
      <div
        className="text-4xl md:text-5xl font-black"
        style={{ color: '#dc2626', letterSpacing: '-0.02em' }}
      >
        {value}
      </div>
      <div className="text-base text-gray-600 font-medium tracking-wide uppercase">{label}</div>
    </div>
  )
}
