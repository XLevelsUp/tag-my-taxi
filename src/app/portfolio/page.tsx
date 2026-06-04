import Link from 'next/link'
import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import { PhoneCard } from '@/components/landing/PhoneCard'

/* ─────────────────────────────────────────────
   Portfolio Data
───────────────────────────────────────────── */

const portfolioItems = [
  {
    title: 'Q8Taxi',
    description:
      'Q8Taxi is an on-demand taxi booking solution that enables easy taxi hailing, tracking, and managing trips. Having connected over 1,000+ drivers and 1,500+ vehicles, Q8Taxi dispatches taxis for Kuwaitis through the application that contains essential features for both drivers and passengers. It also offers several reliable payment modes for easy transactions.',
    image: '/portfolio/q8taxi.png',
    bgColor: 'bg-white',
  },
  {
    title: 'Grand Limo',
    description:
      'Grand Limo offers its passengers a superior commute experience with its fleet of chauffeur-driven saloon vehicles across Kuwait. Through its customized limo-booking app that is available in both Android and iOS platforms, it provides a luxurious limousine service. By eliminating the hassles of phone calls and text messages, Grand Limo delivers a flawless, on-demand service with the application through which passengers can book, manage, and track their trips with ease.',
    image: '/portfolio/grandlimo.png',
    bgColor: 'bg-gray-50',
    reverse: true,
  },
  {
    title: 'Drinkdrive',
    description:
      'As its name signifies, Drinkdrive, a Sri Lankan taxi company, is intended to reduce the drunk-driving accidents while providing professional and quality service to its customers. Safety being the primary ethos of the company, they ensure the safety of their intoxicated customers by delivering an extensive transportation solution to them. Drinkdrive provides round-the-clock taxis service to the passengers through its eminent taxi-booking Android and iOS applications.',
    image: '/portfolio/drinkdrive.png',
    bgColor: 'bg-white',
  },
  {
    title: 'Marhaba Taxi',
    description:
      'An Omani Uber; this is how Marhaba Taxi has been addressed by the locals because of its seamless taxi service. It was the first of its kind when it was started in Muscat targeting the tourism sector. However, it had astonished the passengers with its quality service, highly professional drivers, and timely dispatch. While providing convenience, it offers the safest rides to the tourists and families across Omen.',
    image: '/portfolio/marhaba.png',
    bgColor: 'bg-gray-50',
    reverse: true,
  },
  {
    title: 'ZustGo',
    description:
      'With over 200+ vehicles, ZustGo has been launched into the taxi industry with the intention to bring a smile on every taxi passenger\'s face. By complying with the governmental norms, it wants to provide great ride experience at nominal rates through an affluent taxi service. The ZustGo taxi booking and dispatching applications allow it to give a consistent taxi service to its customers in India with an all-efficient taxi technology.',
    image: '/portfolio/zustgo.png',
    bgColor: 'bg-white',
  },
  {
    title: 'MyDrukRide',
    description:
      'MyDrukRide is offering a safe and reliable taxi service in Thimphu, Bhutan. With a simple, yet attractive, mobile application for taxi hiring, it offers an on-demand transportation solution under different categories with a wide variety of vehicle options to choose among. Based in Bhutan, MyDrukRide furnishes taxis with ease, convenience, reliability, and many more through an exclusive, on-demand transportation application.',
    image: '/portfolio/mydrukride.png',
    bgColor: 'bg-gray-50',
    reverse: true,
  },
  {
    title: 'MobiTaxis',
    description:
      'MobiTaxis is a free mobile application for people in and around Lebanon, where they can book private taxis based on their varied requirements and go for a ride around Lebanon any time. The app allows passengers to select the driver of their choice looking at the profile and reviews. The app affirms a user-friendly interface for easy booking, status notifications to minimize chaos, and easy online/offline payments.',
    image: '/portfolio/mobitaxis.png',
    bgColor: 'bg-white',
  },
  {
    title: 'NJRide',
    description:
      'NJRide is a one-tap taxi booking and dispatch application, where drivers are just a tap away from the passenger requests. Integrated with map-based taxi ordering services, both drivers and passengers can ensure they are moving in the right direction. The choice of online or cash payments and the facility to drop feedback through social media makes the app even more expedient.',
    image: '/portfolio/njride.png',
    bgColor: 'bg-gray-50',
    reverse: true,
  },
  {
    title: 'Lyncaride',
    description:
      'Lync transportation app on a range of platforms including Android and iOS aimed to provide a fast and reliable cab service to riders with the special needs. Lync mobile platform allows customers to easily locate the nearest available cabs or wheelchair-accessible vehicles on the Google Map. With an agile sign-up process, the customers can book taxis and track the vehicle in real time using an inbuilt navigation system.',
    image: '/portfolio/lyncaride.png',
    bgColor: 'bg-white',
  },
  {
    title: 'uServ',
    description:
      'Based in South Africa, uServ is a ride-hailing business started to make taxi booking easier than ever before. Through the online taxi-booking app, the passengers can select the point of origin and drop locations. uServ ensures a continued availability of drivers at nearby locations, and customers can schedule the trips at their convenience. They also have the option to choose from a wide range of vehicles.',
    image: '/portfolio/userv.png',
    bgColor: 'bg-gray-50',
    reverse: true,
  },
]


/* ─────────────────────────────────────────────
   Portfolio Row
───────────────────────────────────────────── */

function PortfolioRow({
  title,
  description,
  image,
  bgColor,
  reverse,
}: {
  title: string
  description: string
  image: string
  bgColor: string
  reverse?: boolean
}) {
  return (
    <section className={`py-14 ${bgColor}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          {/* Text side */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-600 text-base leading-relaxed">{description}</p>
          </div>
          {/* Image side */}
          <div className="flex-shrink-0">
            <PhoneCard image={image} title={title} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* Header */}
      <header className="pt-40 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-3">
          <span className="text-[#ff0000] font-bold uppercase tracking-widest text-base">Our Work</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Portfolio</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Trusted by taxi companies and startups across 42+ countries
          </p>
          <div className="w-16 h-1 bg-[#ff0000] mx-auto mt-4" />
        </div>
      </header>

      <main className="flex-1">
        {portfolioItems.map((item, i) => (
          <PortfolioRow key={i} {...item} />
        ))}
      </main>

      {/* CTA */}
      <section className="py-16 bg-[#ff0000] text-white text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold">Ready to be our next success story?</h2>
          <p className="text-red-100">
            Join 500+ taxi companies and startups that trust TagMyTaxi to power their operations.
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#ff0000] hover:bg-red-100 font-bold px-10 py-4 rounded-full transition-colors text-base uppercase tracking-widest">
              Get a Free Demo
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
