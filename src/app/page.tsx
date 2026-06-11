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

/* ── Lazy-loaded below-fold client components (reduces initial JS bundle) ── */
const ReviewCarousel = dynamic(
  () => import('@/components/landing/ReviewCarousel').then(m => m.ReviewCarousel)
)
const FAQAccordion = dynamic(
  () => import('@/components/landing/FAQAccordion').then(m => m.FAQAccordion)
)
const RequestQuoteForm = dynamic(
  () => import('@/components/landing/RequestQuoteForm').then(m => m.RequestQuoteForm)
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
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: '740px' }}
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

        <FadeIn delay={0.2} direction="up" className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto py-20 md:py-28">
          <h1
            className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight mb-6 text-white"
            style={{
              lineHeight: '1.15',
              textShadow: '0 2px 16px rgba(0,0,0,0.35)',
              letterSpacing: '-0.02em',
            }}
          >
            #1 Taxi Dispatch Software<br />
            500+ Companies, Zero&nbsp;Compromises
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 font-normal italic" style={{ letterSpacing: '0.01em' }}>
            The last upgrade your fleet will ever need — AI-powered dispatch, real-time GPS tracking, and a white-label taxi app ready in 24&nbsp;hours.
          </p>
          <HeroCTAButton />
          <p className="text-gray-300 text-base italic mt-2">
            Try free for 15 days. No risk, and no credit card required.
          </p>
        </FadeIn>
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
              <Image
                src="/homeBanner.png"
                alt="Cloud-Based Taxi Dispatch Software Dashboard"
                width={480}
                height={430}
                className="object-contain"
                loading="lazy"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* From Sign-Up to Live Taxi Dispatch App Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <FadeIn delay={0.2} direction="right" className="flex justify-center">
              <Image
                src="/taxi-app.png"
                alt="Taxi Booking App for Android and iOS"
                width={450}
                height={400}
                className="object-contain"
              />
            </FadeIn>
            <FadeIn delay={0.4} direction="left" className="space-y-7">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                From Sign-Up to Live Taxi Dispatch App in 4&nbsp;Simple&nbsp;Steps
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ lineHeight: '1.75' }}>
                The traditional taxi business is plagued with complex manual processes. TagMyTaxi breaks these inefficiencies with its Uber-like taxi booking app that saves both time and money. Witness how a white-label taxi dispatch software can help your business to increase your bookings, improve productivity and gain more returns.
              </p>
              <PrimaryButton href="/contact">Request Demo</PrimaryButton>
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
              <OutlineButton href="/contact">Get Started Free</OutlineButton>
            </FadeIn>
            <FadeIn delay={0.4} direction="left" className="flex justify-center">
              <Image
                src="/solutions_designed.png"
                alt="Fleet Management Software for Business Growth"
                width={450}
                height={400}
                className="object-contain"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewCarousel />

      {/* FAQ Section */}
      <FAQAccordion />

      {/* Request A Quote Section */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(to bottom, #f9fafb, #ffffff)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn delay={0.2} direction="up">
            <div
              className="bg-white rounded-2xl p-10 md:p-14"
              style={{
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-[2px] bg-[#dc2626] rounded-full" />
                  <span className="text-[#dc2626] font-bold uppercase tracking-widest text-base">REQUEST A QUOTE</span>
                  <span className="w-6 h-[2px] bg-[#dc2626] rounded-full" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                  Start Your Free Trial of the Leading Taxi Dispatch&nbsp;Software&nbsp;Today
                </h2>
              </div>
              <RequestQuoteForm />
            </div>
          </FadeIn>
        </div>
      </section>

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
