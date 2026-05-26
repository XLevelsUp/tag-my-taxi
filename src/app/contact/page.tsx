import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import { ContactForm } from '@/components/landing/ContactForm'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <Navbar />


      {/* Header */}
      <header className="pt-40 pb-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <span className="text-[#ff0000] font-black uppercase tracking-[0.3em] text-xs">Get In Touch</span>
          <h1 className="text-4xl lg:text-7xl font-black uppercase tracking-tight">
            Ready to scale your <br /> <span className="text-[#ff0000]">Taxi Fleet?</span>
          </h1>
          <div className="w-20 h-1 bg-[#ff0000] mx-auto mt-8"></div>
        </div>
      </header>

      <main className="flex-1 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black uppercase tracking-tight">Contact <span className="text-[#ff0000]">Details</span></h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                  Have questions about our platform? Our team of experts is ready to help you optimize your transportation business.
                </p>
              </div>

              <div className="grid gap-8">
                <ContactInfoItem 
                  icon={<MapPin className="text-[#ff0000]" />} 
                  title="Office Address" 
                  text="Business Center, Dubai, United Arab Emirates" 
                />
                <ContactInfoItem 
                  icon={<Phone className="text-[#ff0000]" />} 
                  title="Phone Number" 
                  text="+971 4 123 4567" 
                />
                <ContactInfoItem 
                  icon={<Mail className="text-[#ff0000]" />} 
                  title="Email Address" 
                  text="sales@tagmytaxi.ae" 
                />
                <ContactInfoItem 
                  icon={<Clock className="text-[#ff0000]" />} 
                  title="Business Hours" 
                  text="Mon - Fri: 9:00 AM - 6:00 PM (GMT+4)" 
                />
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />

    </div>
  )
}

function ContactInfoItem({ icon, title, text }: any) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-[#ff0000] group-hover:text-white transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="font-black uppercase text-xs text-gray-400 tracking-widest">{title}</h4>
        <p className="text-lg font-bold tracking-tight">{text}</p>
      </div>
    </div>
  )
}
