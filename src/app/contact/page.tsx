import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'
import { UnifiedContactForm } from '@/components/landing/UnifiedContactForm'

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/tagmytaxi/',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/tagmytaxi?s=20',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/tagmytaxi/?utm_source=ig_web_button_share_sheet',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583 0.07-4.849 0.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCVS_iDaFYv6-HD7elZ158Rg',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/tagmytaxisoftware/tagmytaxi',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <Navbar />


      {/* Header */}
      <header className="pt-40 pb-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <span className="text-[#dc2626] font-black uppercase tracking-[0.3em] text-base">Get In Touch</span>
          <h1 className="text-4xl lg:text-7xl font-black uppercase tracking-tight">
            Ready to scale your <br /> <span className="text-[#dc2626]">Taxi Fleet?</span>
          </h1>
          <div className="w-20 h-1 bg-[#dc2626] mx-auto mt-8"></div>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black uppercase tracking-tight">Contact <span className="text-[#dc2626]">Details</span></h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                   Have questions about our platform? Our team of experts is ready to help you optimize your transportation business.
                </p>
              </div>

              <div className="grid gap-8">
                <ContactInfoItem 
                  icon={MapPin} 
                  title="Office Address" 
                  text="Business Center, Dubai, United Arab Emirates" 
                />
                <ContactInfoItem 
                  icon={Phone} 
                  title="Phone Number" 
                  text="+971 4 123 4567" 
                />
                <ContactInfoItem 
                  icon={Mail} 
                  title="Email Address" 
                  text="sales@tagmytaxi.ae" 
                />
                <ContactInfoItem 
                  icon={Clock} 
                  title="Business Hours" 
                  text="Mon - Fri: 9:00 AM - 6:00 PM (GMT+4)" 
                />
              </div>

              {/* Connect with Us / Socials */}
              <div className="space-y-4 pt-8 border-t border-gray-100">
                <h4 className="font-black uppercase text-base text-gray-400 tracking-widest">Connect with Us</h4>
                <div className="flex gap-4 items-center">
                  {socials.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#dc2626] transition-all duration-300 transform hover:-translate-y-1 shadow-sm border border-gray-100"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <UnifiedContactForm formType="contact" variant="contact" />
          </div>
        </div>
      </main>

      <Footer />

    </div>
  )
}

function ContactInfoItem({ icon: Icon, title, text }: any) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-[#dc2626] transition-all duration-300 shadow-sm">
        <Icon className="w-6 h-6 text-[#dc2626] group-hover:text-white transition-colors duration-300" />
      </div>
      <div className="space-y-1">
        <h4 className="font-black uppercase text-base text-gray-400 tracking-widest">{title}</h4>
        <p className="text-lg font-bold tracking-tight">{text}</p>
      </div>
    </div>
  )
}
