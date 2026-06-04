import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import {
  Wallet, PhoneCall, Mic, Heart, Share2, Languages
} from 'lucide-react'

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */

const passengerFeatures = [
  {
    title: 'White-label solution',
    desc: 'white-labeling the passenger application with your company name and logo enhances your customer reach and brand popularity.',
  },
  {
    title: 'Booking interface',
    desc: 'Being easy to use and comprehensive, passengers can securely log in to their account and schedule rides for their immediate or later needs.',
  },
  {
    title: 'Split the bill',
    desc: 'The ride-sharing facility for your passengers to split the ride costs with friends makes their rides cost-efficient and extremely convenient.',
  },
  {
    title: 'Ride statistics',
    desc: 'Using integrated GPS and Google Maps, passengers can track the approaching vehicle and the rides in real time and receive a summary of all rides.',
  },
]

const driverFeatures = [
  {
    title: 'Booking alerts',
    desc: 'Drivers receive prompt and accurate push notifications on every passenger request and the status of all ongoing and upcoming rides.',
  },
  {
    title: 'Quick reports',
    desc: 'Grant your drivers the provision to have a quick glance on their trip statistics, helping them scrutinize their daily earnings and payroll.',
  },
  {
    title: 'Street pickups',
    desc: 'Reduce response time for customers by permitting drivers for Street pickups on their way, and thus eliminating the waiting time till the next request.',
  },
  {
    title: 'Driver referrals',
    desc: 'Reward your drivers with impressive referral bonus on inviting their acquaintances to join the services and amplify your productivity with more drivers.',
  },
]

const dispatcherFeatures = [
  {
    title: 'Flexible dispatch',
    desc: 'The flexible dispatcher panel allows to switch between manual and automatic dispatching as per the convenience and customer requirements.',
  },
  {
    title: 'Real-time updates',
    desc: 'The dispatcher receives real-time updates on all rides scheduled and undertaken to efficiently monitor and execute all passenger requests accurately.',
  },
  {
    title: 'Quick billing',
    desc: 'The transparency of the application lets the dispatcher handle payments securely and protect your business from unauthorized transactions.',
  },
  {
    title: 'Activity review',
    desc: 'Summarized snapshots of the activities of all the employees and customers lead to better decision making and impressive customer service.',
  },
]

const adminFeatures = [
  {
    title: 'Complete CRM',
    desc: "Our solution's capability to monitor and manage all aspects of the business serves to gain a greater understanding of all CRM activities.",
  },
  {
    title: 'Activity analytics',
    desc: 'A well-implemented analytics module provides incredibly useful insights into the progress and assists in expanding the business goals.',
  },
  {
    title: 'Resource tracking',
    desc: 'Track rides, vehicles, and drivers using a refined tracking module to know how well you are utilizing your resources and serving your customers.',
  },
  {
    title: 'Revenue and payroll',
    desc: 'Instant access to advanced billing and profitability reports that can be monitored from a single platform offers you a simple, streamlined revenue management.',
  },
]

const moreFeatures = [
  { icon: <Wallet className="w-8 h-8 text-[#ff0000]" />, title: 'Wallet payment', desc: 'Host wallet option for both drivers and passengers for easier checkout and secure payment.' },
  { icon: <PhoneCall className="w-8 h-8 text-[#ff0000]" />, title: 'Call masking', desc: 'Protect private information on calls and texts by masking the permanent number of the users.' },
  { icon: <Mic className="w-8 h-8 text-[#ff0000]" />, title: 'Voice commands', desc: 'Integrate VoIP in the dispatcher panel to stay in touch with your resources at no additional costs.' },
  { icon: <Heart className="w-8 h-8 text-[#ff0000]" />, title: 'Loyalty program', desc: 'Avail discounts and rewards to persuade customers to engage more frequently with your services.' },
  { icon: <Share2 className="w-8 h-8 text-[#ff0000]" />, title: 'Social sharing', desc: 'Link relevant social media sites to bring on supporting reviews and feedback on your services.' },
  { icon: <Languages className="w-8 h-8 text-[#ff0000]" />, title: 'Multi-lingual support', desc: 'Incorporate multiple languages in the application to reach more customers at the global level.' },
]

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function NumberedFeatureList({ features }: { features: { title: string; desc: string }[] }) {
  return (
    <ul className="space-y-8">
      {features.map((f, i) => (
        <li key={i} className="flex gap-5 items-start">
          <span className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-[#ff0000] text-[#ff0000] font-bold text-base flex items-center justify-center">
            {i + 1}
          </span>
          <div>
            <h3 className="font-bold text-gray-900 text-base mb-1">{f.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{f.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex justify-center">
      <div className="relative w-[240px] rounded-[2.5rem] border-[8px] border-gray-200 shadow-xl overflow-hidden bg-white">
        {/* notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-200 rounded-b-2xl z-10" />
        <Image src={src} alt={alt} width={240} height={480} className="w-full object-cover" />
      </div>
    </div>
  )
}

function DashboardMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex justify-center">
      <div className="rounded-xl border border-gray-200 shadow-md overflow-hidden max-w-[380px] w-full">
        <Image src={src} alt={alt} width={760} height={480} className="w-full object-cover" />
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* Page Header */}
      <header className="pt-40 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-3">
          <span className="text-[#ff0000] font-bold uppercase tracking-widest text-base">Platform Overview</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Features
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Everything you need to run a world-class taxi dispatch operation
          </p>
          <div className="w-16 h-1 bg-[#ff0000] mx-auto mt-4" />
        </div>
      </header>

      <main className="flex-1">

        {/* ── Passenger application ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-10">Passenger application</h2>
                <NumberedFeatureList features={passengerFeatures} />
              </div>
              <PhoneMockup src="/phone_app_illustration.png" alt="Passenger App" />
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gray-100" />

        {/* ── Driver application ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <PhoneMockup src="/taxi_ride_illustration.png" alt="Driver App" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-10">Driver application</h2>
                <NumberedFeatureList features={driverFeatures} />
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gray-100" />

        {/* ── Dispatcher panel ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-10">Dispatcher panel</h2>
                <NumberedFeatureList features={dispatcherFeatures} />
              </div>
              <DashboardMockup src="/business_growth_illustration.png" alt="Dispatcher Panel" />
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gray-100" />

        {/* ── Admin panel ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <DashboardMockup src="/business_growth_illustration.png" alt="Admin Panel" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-10">Admin panel</h2>
                <NumberedFeatureList features={adminFeatures} />
              </div>
            </div>
          </div>
        </section>

        {/* ── More Features ── */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">More Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-12">
              {moreFeatures.map((f, i) => (
                <div key={i} className="text-center px-4">
                  <div className="flex justify-center mb-4">{f.icon}</div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-[#ff0000] text-white text-center">
          <div className="max-w-2xl mx-auto px-6 space-y-6">
            <h2 className="text-3xl font-bold">Ready to upgrade your fleet?</h2>
            <p className="text-red-100">
              Join the global network of transportation leaders using TagMyTaxi to scale their operations.
            </p>
            <Link href="/contact">
              <button className="bg-white text-[#ff0000] hover:bg-red-100 font-bold px-10 py-4 rounded-full transition-colors text-base uppercase tracking-widest">
                Get a Free Demo
              </button>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
