'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Navbar } from '@/components/landing/Navbar'
import { Footer } from '@/components/landing/Footer'

/* ─────────────────────────────────────────────
   Portfolio Data
   ───────────────────────────────────────────── */

const portfolioItems = [
  {
    title: 'Pickme Cab',
    shortDescription: "Sri Lanka's number one ride hailing platform.",
    downloads: "10M+",
  },
  {
    title: 'Avis',
    shortDescription: "World's leading rental car service.",
    downloads: "5M+",
  },
  {
    title: 'Oway Ride',
    shortDescription: "Myanmar's top rated travel and transportation company.",
    downloads: "2M+",
  },
  {
    title: 'Seero',
    shortDescription: "Best taxi Dispatch app with open trips feature.",
    downloads: "50K+",
  },
  {
    title: 'Simplaa',
    shortDescription: "Best airport transfer and Local trips apps.",
    downloads: "30K+",
  },
  {
    title: 'NJRide',
    shortDescription: "NJride is proud to be Northern New Jersey's Best Car Service.",
    downloads: "5K+",
  },
  {
    title: 'Q8Taxi',
    shortDescription: "Kuwait's premier on-demand taxi booking and dispatch platform.",
    downloads: "100K+",
  },
  {
    title: 'Grand Limo',
    shortDescription: "Premium chauffeur-driven luxury limousine services across Kuwait.",
    downloads: "50K+",
  },
  {
    title: 'Drinkdrive',
    shortDescription: "Safe ride-hailing services prioritizing passenger security in Sri Lanka.",
    downloads: "20K+",
  },
  {
    title: 'Marhaba Taxi',
    shortDescription: "The leading tourist and city dispatch taxi solution in Muscat, Oman.",
    downloads: "500K+",
  },
  {
    title: 'ZustGo',
    shortDescription: "Affordable and consistent digital ride-hailing services in India.",
    downloads: "50K+",
  },
  {
    title: 'MyDrukRide',
    shortDescription: "Bhutan's most reliable and convenient on-demand taxi hailing platform.",
    downloads: "10K+",
  },
  {
    title: 'MobiTaxis',
    shortDescription: "Free peer-to-peer taxi booking app serving Lebanon nationwide.",
    downloads: "30K+",
  },
  {
    title: 'Lyncaride',
    shortDescription: "Specialized, wheelchair-accessible transport booking platform.",
    downloads: "15K+",
  },
  {
    title: 'uServ',
    shortDescription: "On-demand local ride-sharing and taxi booking in South Africa.",
    downloads: "25K+",
  },
  {
    title: 'Royal Smart Limousines',
    shortDescription: "Dubai's luxury corporate transport and VIP limousine services.",
    downloads: "100K+",
  },
  {
    title: 'Saru Cabs',
    shortDescription: "Reliable and safe local cab services across tier-2 cities in India.",
    downloads: "15K+",
  },
  {
    title: 'Express Impress',
    shortDescription: "Optimized corporate shuttle and fleet booking in Nairobi, Kenya.",
    downloads: "10K+",
  },
  {
    title: 'Resapremium',
    shortDescription: "Premier private shuttle and secure ride booking in Cameroon.",
    downloads: "5K+",
  },
  {
    title: 'Mai Linh',
    shortDescription: "Vietnam's largest green cab operator and digital taxi platform.",
    downloads: "5M+",
  },
]

/* ─────────────────────────────────────────────
   Google Play Store Badge Component
   ───────────────────────────────────────────── */

function PlayStoreBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-gray-200 bg-gray-50 text-[10.5px] text-gray-500 font-extrabold tracking-tight uppercase select-none shrink-0">
      <svg className="w-2.5 h-2.5 text-emerald-600 fill-current" viewBox="0 0 24 24">
        <path d="M3 20.316V3.684a1.684 1.684 0 0 1 2.528-1.458l14.4 8.316a1.684 1.684 0 0 1 0 2.916l-14.4 8.316A1.684 1.684 0 0 1 3 20.316z" />
      </svg>
      <span>play store</span>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Custom Brand Logo Component
   ───────────────────────────────────────────── */

function ClientLogo({ title }: { title: string }) {
  const normalizedTitle = title.toLowerCase()

  // Pickme Sri Lanka / Pickme Cab: Yellow circle with waving figure
  if (normalizedTitle.includes('pickme')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#eab308] flex items-center justify-center shadow-inner shrink-0 select-none">
        <svg className="w-9 h-9 text-black" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="6" r="3.5" />
          <path d="M12 11c-2.5 0-4.5 2-4.5 4.5V21h9v-5.5c0-2.5-2-4.5-4.5-4.5zm5.5-2.5c.3 0 .5-.2.5-.5v-3c0-.8-.7-1.5-1.5-1.5h-1c-.3 0-.5.2-.5.5s.2.5.5.5h1c.3 0 .5.2.5.5v3c0 .3.2.5.5.5z" />
          <path d="M16 11c1.5 0 3-1.2 3.8-2.6.4-.7.1-1.6-.6-2-.7-.4-1.6-.1-2 .6-.6 1-1.2 1.5-1.8 1.5-.3 0-.6.1-.8.3-.5.4-.6 1.1-.2 1.6.4.4.9.6 1.6.6z" />
        </svg>
      </div>
    )
  }

  // Avis: Red round square with AVIS SafeDrive text
  if (normalizedTitle.includes('avis')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#d92635] flex flex-col items-center justify-center shadow-md shrink-0 select-none">
        <span className="text-white font-black text-[17px] tracking-tight leading-none">AVIS</span>
        <span className="text-white/80 text-[7px] font-bold tracking-widest mt-0.5 leading-none uppercase">SafeDrive</span>
      </div>
    )
  }

  // Oway Ride: White circle with yellow map pin and steering wheel
  if (normalizedTitle.includes('oway')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-white border border-gray-150 flex items-center justify-center shadow-sm shrink-0 select-none">
        <div className="w-11 h-11 rounded-full bg-[#eab308]/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-[#eab308]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>
      </div>
    )
  }

  // Seero: White circle with diamond logo (blue, yellow, dark blue)
  if (normalizedTitle.includes('seero')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-white border border-gray-150 flex items-center justify-center shadow-sm shrink-0 select-none">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 12L12 22L2 12L12 2z" fill="#1e1b4b" />
          <path d="M12 6L18 12L12 18L6 12L12 6z" fill="#eab308" />
          <path d="M12 9L15 12L12 15L9 12L12 9z" fill="#2563eb" />
        </svg>
      </div>
    )
  }

  // Simplaa: Dark blue rounded square with white logo
  if (normalizedTitle.includes('simplaa')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#1e1b4b] flex items-center justify-center shadow-md shrink-0 select-none">
        <svg className="w-8 h-8 text-white animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      </div>
    )
  }

  // NJRide / Nj Ride: Green circle with white inner design
  if (normalizedTitle.includes('njride') || normalizedTitle.includes('nj ride')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#059669] flex items-center justify-center shadow-sm shrink-0 select-none">
        <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white font-black text-lg">
          nj
        </div>
      </div>
    )
  }

  // Q8Taxi: Red circle with white logo
  if (normalizedTitle.includes('q8')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#dc2626] flex items-center justify-center shadow-md shrink-0 select-none">
        <div className="text-white font-black text-xl tracking-tighter">Q8</div>
      </div>
    )
  }

  // Grand Limo: Black round square with gold wings/crown
  if (normalizedTitle.includes('grand limo') || normalizedTitle.includes('grandlimo')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#111827] flex items-center justify-center shadow-md shrink-0 border border-gray-800 select-none">
        <svg className="w-9 h-9 text-[#fbbf24]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L9 7h6l-3-5zm-7 8c0-3 2.5-5 5-5v2c-1.5 0-3 1-3 3s1.5 3 3 3v2c-2.5 0-5-2-5-5zm14 0c0-3-2.5-5-5-5v2c1.5 0 3 1 3 3s-1.5 3-3 3v2c2.5 0 5-2 5-5z" />
        </svg>
      </div>
    )
  }

  // Drinkdrive: Navy circle with safety logo
  if (normalizedTitle.includes('drinkdrive')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#1e293b] flex items-center justify-center shadow-sm shrink-0 select-none">
        <svg className="w-8 h-8 text-[#dc2626]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12h6" />
        </svg>
      </div>
    )
  }

  // Marhaba: Orange/gold circle
  if (normalizedTitle.includes('marhaba')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#f97316] flex items-center justify-center shadow-sm shrink-0 select-none">
        <span className="text-white font-black text-xl">M</span>
      </div>
    )
  }

  // ZustGo: Purple circle with white logo
  if (normalizedTitle.includes('zustgo')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#7c3aed] flex items-center justify-center shadow-sm shrink-0 select-none">
        <span className="text-white font-black text-2xl italic tracking-tighter">Z</span>
      </div>
    )
  }

  // MyDrukRide: Sky blue circle with steering wheel pin
  if (normalizedTitle.includes('druk')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#06b6d4] flex items-center justify-center shadow-sm shrink-0 select-none">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
        </svg>
      </div>
    )
  }

  // MobiTaxis: Red rounded square with white logo
  if (normalizedTitle.includes('mobi')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#ef4444] flex items-center justify-center shadow-sm shrink-0 select-none">
        <span className="text-white font-extrabold text-2xl">M</span>
      </div>
    )
  }

  // Lyncaride: Light blue circle with wheelchair/car symbol
  if (normalizedTitle.includes('lynca')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#3b82f6] flex items-center justify-center shadow-sm shrink-0 select-none">
        <span className="text-white font-black text-2xl">L</span>
      </div>
    )
  }

  // uServ: Dark gray circle with green symbol
  if (normalizedTitle.includes('userv')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#374151] flex items-center justify-center shadow-sm shrink-0 select-none">
        <span className="text-[#84cc16] font-black text-2xl">u</span>
      </div>
    )
  }

  // Royal Smart Limousines: Gold/black crown or wings
  if (normalizedTitle.includes('royal')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#1e293b] flex items-center justify-center shadow-md shrink-0 border border-yellow-600/30 select-none">
        <svg className="w-8 h-8 text-[#d97706]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 14h14v2H5v-2z" />
        </svg>
      </div>
    )
  }

  // Saru Cabs: Yellow circle with cab icon
  if (normalizedTitle.includes('saru')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#eab308] flex items-center justify-center shadow-sm shrink-0 select-none">
        <span className="text-black font-black text-2xl">S</span>
      </div>
    )
  }

  // Express Impress: Green circle with white double arrow
  if (normalizedTitle.includes('express')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#16a34a] flex items-center justify-center shadow-sm shrink-0 select-none">
        <span className="text-white font-black text-2xl">E</span>
      </div>
    )
  }

  // Resapremium: Crimson circle with gold 'R'
  if (normalizedTitle.includes('resa')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#991b1b] flex items-center justify-center shadow-sm shrink-0 select-none">
        <span className="text-[#f59e0b] font-black text-2xl">R</span>
      </div>
    )
  }

  // Mai Linh: Green circle with white emblem/pin
  if (normalizedTitle.includes('mai linh') || normalizedTitle.includes('mailinh')) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-[#15803d] flex items-center justify-center shadow-sm shrink-0 select-none">
        <span className="text-white font-black text-2xl">ML</span>
      </div>
    )
  }

  // Fallback: Generic styled initial circle
  const initial = title.charAt(0).toUpperCase()
  return (
    <div className="w-16 h-16 rounded-2xl bg-[#dc2626] text-white flex items-center justify-center font-bold text-2xl shadow-sm shrink-0 select-none">
      {initial}
    </div>
  )
}

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] font-sans text-gray-900">
      <Navbar />

      {/* Header */}
      <header className="pt-40 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-3">
          <span className="text-[#dc2626] font-bold uppercase tracking-widest text-base">Our Work</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Portfolio</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Trusted by taxi companies and startups across 42+ countries
          </p>
          <div className="w-16 h-1 bg-[#dc2626] mx-auto mt-4" />
        </div>
      </header>

      {/* Grid Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Top Section */}
              <div className="p-6 flex items-start gap-4">
                <ClientLogo title={item.title} />
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[17px] font-bold text-gray-900 truncate" title={item.title}>
                      {item.title}
                    </h3>
                    <PlayStoreBadge />
                  </div>
                  <div>
                    <span className="text-[13px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100/50 px-2.5 py-0.5 rounded-full select-none">
                      Downloads {item.downloads || '10K+'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="bg-gray-50/70 border-t border-gray-100/50 px-6 py-4 flex items-center min-h-[72px]">
                <p className="text-[13.5px] text-gray-600 font-medium leading-relaxed">
                  {item.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CTA */}
      <section className="py-16 bg-[#dc2626] text-white text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold">Ready to be our next success story?</h2>
          <p className="text-red-100">
            Join 500+ taxi companies and startups that trust TagMyTaxi to power their operations.
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#dc2626] hover:bg-red-100 font-bold px-10 py-4 rounded-full transition-colors text-base uppercase tracking-widest">
              Get a Free Demo
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
