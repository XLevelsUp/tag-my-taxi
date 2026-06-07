import Image from 'next/image'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import { Lightbulb, Rocket, Tv, Settings, TrendingUp } from 'lucide-react'
import { RequestQuoteForm } from '@/components/landing/RequestQuoteForm'
import { FadeIn } from '@/components/animations/FadeIn'
import {
  HeroCTAButton,
  PrimaryButton,
  OutlineButton,
  FeatureCard,
} from '@/components/landing/LandingInteractive'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* Hero Section — banner.jpg from tagmytaxi.ae */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          minHeight: '740px',
        }}
      >
        {/* Dark overlay — matches reference site ~50% opacity */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.52)' }} />

        {/* Cinematic bottom fade */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
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
            On-demand Taxi Dispatch<br />
            Software To Build An Uber-like<br />
            Business
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 font-normal italic" style={{ letterSpacing: '0.01em' }}>
            With Tagmytaxi, you can set up your white-label taxi solution in no time
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
      <div className="w-full h-[3px] bg-[#ff0000]" />

      {/* A Reliable Uber Clone Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn delay={0.1} direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Reliable Uber Clone Taxi Software
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              Establish your taxi business or scale an existing one with our Uber clone platform
            </p>
          </FadeIn>

          <FadeIn delay={0.3} direction="up" className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lightbulb className="w-6 h-6 text-[#ff0000]" />}
              title="Showcase your brand"
              description="Bring all your brand elements - right from logo, graphics to color scheme - to your white-labeled Uber clone taxi software for a personalized platform."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6 text-[#ff0000]" />}
              title="Go digital, grow your revenue"
              description="Automate your taxi operations to unlock cost-savings, attract a wider customer base and increase revenue opportunities with an Uber clone software."
            />
            <FeatureCard
              icon={<Tv className="w-6 h-6 text-[#ff0000]" />}
              title="Suite of dispatch system & mobile apps"
              description="Offer your passengers and drivers the convenience of Uber-like mobile apps while you discover the best way of dispatching with our taxi dispatch system."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6 text-[#ff0000]" />}
              title="Go digital, grow your revenue"
              description="Automate your taxi operations to unlock cost-savings, attract a wider customer base and increase revenue opportunities with an Uber clone software."
            />
            <FeatureCard
              icon={<Settings className="w-6 h-6 text-[#ff0000]" />}
              title="Built for your unique business"
              description="Set up a digital platform that effortlessly adapts your unique business model, fare strategy and customer experience with our Uber clone taxi application."
            />
            <FeatureCard
              icon={<Rocket className="w-6 h-6 text-[#ff0000]" />}
              title="Launch your platform in no time"
              description="Get ready to take on the digital competition of the taxi world by setting up your cloud-based, Uber-like taxi dispatch software instantly."
            />
          </FadeIn>
        </div>
      </section>

      {/* An Uber-Clone Taxi Application Like No Other */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <FadeIn delay={0.2} direction="right" className="space-y-7">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                An Uber-Clone Taxi Application Like No Other
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ lineHeight: '1.75' }}>
                The digital transformation of the taxi industry demands every business to step up their game for their survival. Tagmytaxi introduces a ready-made, on-demand taxi management software that empowers taxi companies to take charge of their operations and automate their activities for a better outcome. Explore the advanced features of an Uber clone taxi software that is both unique and profitable.
              </p>
              <PrimaryButton href="/features">View Features</PrimaryButton>
            </FadeIn>
            <FadeIn delay={0.4} direction="left" className="flex justify-center">
              <Image
                src="/homeBanner.png"
                alt="Uber Clone Taxi App"
                width={480}
                height={430}
                className="object-contain"
                priority
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Drive More Business With An App Like Uber */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <FadeIn delay={0.2} direction="right" className="flex justify-center">
              <Image
                src="/taxi-app.png"
                alt="Taxi Booking App"
                width={450}
                height={400}
                className="object-contain"
              />
            </FadeIn>
            <FadeIn delay={0.4} direction="left" className="space-y-7">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Drive More Business With An App Like Uber
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ lineHeight: '1.75' }}>
                The traditional taxi business is plagued with complex manual processes. Tagmytaxi breaks these inefficiencies with its Uber-like taxi booking app that saves both time and money. Witness how a white-label Uber clone taxi software can help your business to increase your bookings, improve productivity and gain more returns.
              </p>
              <PrimaryButton href="/contact">Request Demo</PrimaryButton>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Uber Clone Solutions Designed For Businesses Like Yours */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <FadeIn delay={0.2} direction="right" className="space-y-7">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Uber Clone Solutions Designed For Businesses Like Yours
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ lineHeight: '1.75' }}>
                Our white-label, on-demand taxi dispatch application is crafted in such a way that it can accommodate your specific business requirements. From a rental company, shuttle service to paratransit business, our unique booking software incorporates advanced features that address industry needs. Scale your business to newer heights with Tagmytaxi.
              </p>
              <OutlineButton href="/contact">Get Uber Clone</OutlineButton>
            </FadeIn>
            <FadeIn delay={0.4} direction="left" className="flex justify-center">
              <Image
                src="/solutions_designed.png"
                alt="Business Growth Solutions"
                width={450}
                height={400}
                className="object-contain"
              />
            </FadeIn>
          </div>
        </div>
      </section>

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
                  <span className="w-6 h-[2px] bg-[#ff0000] rounded-full" />
                  <span className="text-[#ff0000] font-bold uppercase tracking-widest text-base">REQUEST A QUOTE</span>
                  <span className="w-6 h-[2px] bg-[#ff0000] rounded-full" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">Get a Free Demo</h2>
              </div>
              <RequestQuoteForm />
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />

    </div>
  )
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="space-y-2 px-4">
      <div
        className="text-4xl md:text-5xl font-black"
        style={{ color: '#ff0000', letterSpacing: '-0.02em' }}
      >
        {value}
      </div>
      <div className="text-base text-gray-500 font-medium tracking-wide uppercase">{label}</div>
    </div>
  )
}
