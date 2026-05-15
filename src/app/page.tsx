import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import { Lightbulb, Rocket, BarChart3, Tv, Settings, TrendingUp } from 'lucide-react'
import { RequestQuoteForm } from '@/components/landing/RequestQuoteForm'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[680px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/hero_highway_bg.png" 
          alt="City Highway Traffic" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            On-demand Taxi Dispatch<br />
            Software To Build An Uber-like<br />
            Business
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 font-light" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}>
            With Tagmytaxi, you can set up your white-label taxi solution in no time
          </p>
          <Link href="/contact">
            <button className="bg-[#E31E24] hover:bg-red-700 text-white font-bold text-lg px-12 py-4 transition-colors mb-6">
              Get Free Trial
            </button>
          </Link>
          <p className="text-gray-300 text-base italic" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Try free for 15 days. No risk, and no credit card required.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          <StatItem value="500+" label="Taxi companies & startups" />
          <StatItem value="42" label="Countries" />
          <StatItem value="50,000+" label="Vehicles" />
        </div>
      </section>

      {/* Red Divider Line */}
      <div className="w-full h-1 bg-[#E31E24]"></div>

      {/* A Reliable Uber Clone Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Reliable Uber Clone Taxi Software
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Establish your taxi business or scale an existing one with our Uber clone platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
            <FeatureCard 
              icon={<Lightbulb className="w-10 h-10 text-[#E31E24]" />}
              title="Showcase your brand"
              description="Bring all your brand elements - right from logo, graphics to color scheme - to your white-labeled Uber clone taxi software for a personalized platform."
            />
            <FeatureCard 
              icon={<TrendingUp className="w-10 h-10 text-[#E31E24]" />}
              title="Go digital, grow your revenue"
              description="Automate your taxi operations to unlock cost-savings, attract a wider customer base and increase revenue opportunities with an Uber clone software."
            />
            <FeatureCard 
              icon={<Tv className="w-10 h-10 text-[#E31E24]" />}
              title="Suite of dispatch system & mobile apps"
              description="Offer your passengers and drivers the convenience of Uber-like mobile apps while you discover the best way of dispatching with our taxi dispatch system."
            />
            <FeatureCard 
              icon={<TrendingUp className="w-10 h-10 text-[#E31E24]" />}
              title="Go digital, grow your revenue"
              description="Automate your taxi operations to unlock cost-savings, attract a wider customer base and increase revenue opportunities with an Uber clone software."
            />
            <FeatureCard 
              icon={<Settings className="w-10 h-10 text-[#E31E24]" />}
              title="Built for your unique business"
              description="Set up a digital platform that effortlessly adapts your unique business model, fare strategy and customer experience with our Uber clone taxi application."
            />
            <FeatureCard 
              icon={<Rocket className="w-10 h-10 text-[#E31E24]" />}
              title="Launch your platform in no time"
              description="Get ready to take on the digital competition of the taxi world by setting up your cloud-based, Uber-like taxi dispatch software instantly."
            />
          </div>
        </div>
      </section>

      {/* An Uber-Clone Taxi Application Like No Other */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                An Uber-Clone Taxi Application Like No Other
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The digital transformation of the taxi industry demands every business to step up their game for their survival. Tagmytaxi introduces a ready-made, on-demand taxi management software that empowers taxi companies to take charge of their operations and automate their activities for a better outcome. Explore the advanced features of an Uber clone taxi software that is both unique and profitable.
              </p>
              <Link href="/features">
                <button className="bg-[#E31E24] hover:bg-red-700 text-white font-bold text-sm px-8 py-3 rounded-full transition-colors">
                  View Features
                </button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/phone_app_illustration.png" 
                alt="Uber Clone Taxi App" 
                width={450} 
                height={400} 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Drive More Business With An App Like Uber */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image 
                src="/taxi_ride_illustration.png" 
                alt="Taxi Booking App" 
                width={450} 
                height={400} 
                className="object-contain"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Drive More Business With An App Like Uber
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The traditional taxi business is plagued with complex manual processes. Tagmytaxi breaks these inefficiencies with its Uber-like taxi booking app that saves both time and money. Witness how a white-label Uber clone taxi software can help your business to increase your bookings, improve productivity and gain more returns.
              </p>
              <Link href="/contact">
                <button className="bg-[#E31E24] hover:bg-red-700 text-white font-bold text-sm px-8 py-3 rounded-full transition-colors">
                  Request Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Uber Clone Solutions Designed For Businesses Like Yours */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Uber Clone Solutions Designed For Businesses Like Yours
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our white-label, on-demand taxi dispatch application is crafted in such a way that it can accommodate your specific business requirements. From a rental company, shuttle service to paratransit business, our unique booking software incorporates advanced features that address industry needs. Scale your business to newer heights with Tagmytaxi.
              </p>
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-50 text-[#E31E24] font-bold text-sm px-8 py-3 rounded-full border-2 border-[#E31E24] transition-colors">
                  Get Uber Clone
                </button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/business_growth_illustration.png" 
                alt="Business Growth Solutions" 
                width={450} 
                height={400} 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Request A Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-10 md:p-14">
            <div className="text-center mb-10">
              <span className="text-[#E31E24] font-bold uppercase tracking-widest text-xs">REQUEST A QUOTE</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">Get a Free Demo</h2>
            </div>
            <RequestQuoteForm />
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-4xl md:text-5xl font-black text-gray-900">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="text-center px-4">
      <div className="flex justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
