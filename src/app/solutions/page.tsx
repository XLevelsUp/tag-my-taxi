import Link from 'next/link'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* Delivery Planning Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Make delivery planning easy to save more and grow faster
              </h2>
              <p className="text-gray-600 leading-relaxed">
                With Tagmytaxi's delivery management and tracking platform, your business can not only deliver more orders, but you do it more intelligently and by cutting down your expenses.
              </p>
              <ul className="space-y-4">
                <CheckItem text="Plan multiple orders and deliver quickly with smart dispatch and powerful routing." />
                <CheckItem text="Offer real-time tracking, proof-of-delivery and quick feedback to wow customers." />
                <CheckItem text="Analyze crucial data to shorten delivery time & minimize costs." />
              </ul>
              <Link href="/contact">
                <button className="mt-2 bg-[#ff0000] hover:bg-[#E53935] text-white font-bold text-base px-8 py-3 rounded transition-colors">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Right: Dispatch App Screenshot */}
            <div className="flex justify-center">
              <Image
                src="/dispatch_app_screenshot.png"
                alt="Dispatch App Interface"
                width={420}
                height={520}
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-700 leading-snug">
            With Tagmytaxi, step up your delivery business game and scale your growth
          </h2>
          <Link href="/contact">
            <button className="bg-[#ff0000] hover:bg-[#E53935] text-white font-bold text-base px-10 py-3 rounded transition-colors">
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
      <Check className="text-[#ff0000] w-5 h-5 mt-0.5 shrink-0" />
      <span className="text-gray-700 text-base leading-relaxed">{text}</span>
    </li>
  )
}
