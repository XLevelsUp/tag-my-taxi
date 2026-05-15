import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Car, MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <Navbar />


      {/* Header */}
      <header className="pt-40 pb-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <span className="text-[#E31E24] font-black uppercase tracking-[0.3em] text-xs">Get In Touch</span>
          <h1 className="text-4xl lg:text-7xl font-black uppercase tracking-tight">
            Ready to scale your <br /> <span className="text-[#E31E24]">Taxi Fleet?</span>
          </h1>
          <div className="w-20 h-1 bg-[#E31E24] mx-auto mt-8"></div>
        </div>
      </header>

      <main className="flex-1 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black uppercase tracking-tight">Contact <span className="text-[#E31E24]">Details</span></h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                  Have questions about our platform? Our team of experts is ready to help you optimize your transportation business.
                </p>
              </div>

              <div className="grid gap-8">
                <ContactInfoItem 
                  icon={<MapPin className="text-[#E31E24]" />} 
                  title="Office Address" 
                  text="Business Center, Dubai, United Arab Emirates" 
                />
                <ContactInfoItem 
                  icon={<Phone className="text-[#E31E24]" />} 
                  title="Phone Number" 
                  text="+971 4 123 4567" 
                />
                <ContactInfoItem 
                  icon={<Mail className="text-[#E31E24]" />} 
                  title="Email Address" 
                  text="sales@tagmytaxi.ae" 
                />
                <ContactInfoItem 
                  icon={<Clock className="text-[#E31E24]" />} 
                  title="Business Hours" 
                  text="Mon - Fri: 9:00 AM - 6:00 PM (GMT+4)" 
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <form className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500">First Name</label>
                    <input type="text" className="w-full h-14 bg-gray-50 border border-gray-200 rounded-2xl px-6 focus:outline-none focus:border-[#E31E24] transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500">Last Name</label>
                    <input type="text" className="w-full h-14 bg-gray-50 border border-gray-200 rounded-2xl px-6 focus:outline-none focus:border-[#E31E24] transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Work Email</label>
                  <input type="email" className="w-full h-14 bg-gray-50 border border-gray-200 rounded-2xl px-6 focus:outline-none focus:border-[#E31E24] transition-colors" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Fleet Size</label>
                  <select className="w-full h-14 bg-gray-50 border border-gray-200 rounded-2xl px-6 focus:outline-none focus:border-[#E31E24] transition-colors appearance-none">
                    <option>1 - 10 vehicles</option>
                    <option>11 - 50 vehicles</option>
                    <option>51 - 200 vehicles</option>
                    <option>200+ vehicles</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Message</label>
                  <textarea className="w-full h-40 bg-gray-50 border border-gray-200 rounded-3xl p-6 focus:outline-none focus:border-[#E31E24] transition-colors resize-none" placeholder="Tell us about your business goals..."></textarea>
                </div>
                <Button className="w-full bg-[#E31E24] hover:bg-red-700 h-16 rounded-full font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-red-200 group">
                  Send Inquiry <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
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
      <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-[#E31E24] group-hover:text-white transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="font-black uppercase text-xs text-gray-400 tracking-widest">{title}</h4>
        <p className="text-lg font-bold tracking-tight">{text}</p>
      </div>
    </div>
  )
}
