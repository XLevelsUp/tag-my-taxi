'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

interface Review {
  quote: string
  role: string
  company: string
  stars: number
}

const reviews: Review[] = [
  {
    quote: "We tried two taxi dispatch software platforms before TagMyTaxi. Both disappointed. TagMyTaxi's AI-powered dispatch automated 90% of our bookings from day one. Real-time GPS tracking eliminated customer complaints overnight. Our dispatchers now handle exceptions, not every ride. Genuinely the best decision we've made for our fleet.",
    role: 'Fleet Operations Manager',
    company: '200-vehicle taxi operator',
    stars: 5,
  },
  {
    quote: "Replaced an expensive legacy taxi dispatch software with TagMyTaxi and cut operational costs by 30% immediately. The cloud-based taxi system needs zero IT maintenance. Fleet management software tracks all 140 vehicles from one dashboard. Pickup times dropped from 9 minutes to under 5. Should have switched years ago.",
    role: 'Regional Fleet Director',
    company: '140-vehicle fleet',
    stars: 5,
  },
  {
    quote: "I launched my taxi clone app in under 48 hours using TagMyTaxi. As a non-technical founder, I was nervous — but the setup was genuinely simple. The taxi app for Android & iOS was white-labeled with my branding immediately. First booking came in within 3 hours of going live. Incredible product.",
    role: 'Founder',
    company: 'Ride-hailing startup',
    stars: 5,
  },
  {
    quote: "As someone who managed manual dispatch for 8 years, switching to AI-powered dispatch felt risky. Within one week I wondered why we waited so long. The dispatch management software handles 90% of assignments automatically. My team now focuses on exceptions, not every single booking.",
    role: 'Dispatch Supervisor',
    company: 'Regional taxi operator',
    stars: 5,
  },
  {
    quote: "TagMyTaxi is the only fleet management software that gave us real-time GPS tracking, driver scoring, and earnings reports all in one dashboard. We manage 120 vehicles and have complete visibility over every single one. Other fleet management companies we spoke to couldn't match this at this price point.",
    role: 'Fleet Owner',
    company: '120-vehicle taxi fleet',
    stars: 5,
  },
  {
    quote: "From an IT perspective, the cloud taxi dispatch system is a dream. Zero on-premise infrastructure, automatic updates, and 99.9% uptime since we onboarded six months ago. Integration with our existing payment processor took less than a day. TagMyTaxi's taxi software is genuinely enterprise-grade.",
    role: 'IT Manager',
    company: 'Corporate transport company',
    stars: 5,
  },
  {
    quote: "I run 18 cabs and was using WhatsApp to dispatch. TagMyTaxi's taxi dispatch app completely transformed how I work. Real-time GPS tracking means I always know where every vehicle is. Bookings are up 40% since switching. For small operators, this is the most affordable software for taxi company I've found.",
    role: 'Owner-operator',
    company: '18-vehicle fleet',
    stars: 5,
  },
  {
    quote: "We switched from a legacy taxi dispatch system that cost us double and delivered half the features. TagMyTaxi's cloud taxi dispatch system gave us AI-powered dispatch, live tracking, and a full driver app within 24 hours of signing up. The ROI was visible in the first month.",
    role: 'Operations Director',
    company: 'Multi-city operator',
    stars: 5,
  },
  {
    quote: "I operate three taxi businesses across two cities. TagMyTaxi is the only dispatch management software that lets me manage all three from a single login. Fleet management across locations is seamless. The AI-powered dispatch works independently for each fleet while I monitor everything centrally.",
    role: 'Multi-fleet Owner',
    company: '200+ vehicles',
    stars: 5,
  },
  {
    quote: "Started with 12 vehicles on TagMyTaxi. Now running 340. The cloud taxi dispatch system scaled without any performance degradation. We never had to change plans, renegotiate contracts, or worry about infrastructure. TagMyTaxi simply grew with us.",
    role: 'CEO',
    company: 'Rapidly scaling taxi operator',
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
      ))}
    </div>
  )
}

export function ReviewCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Cards visible at once (responsive)
  const getVisibleCount = useCallback(() => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }, [])

  const maxIdx = reviews.length - getVisibleCount()

  const scrollTo = useCallback(
    (idx: number) => {
      const container = scrollRef.current
      if (!container) return
      const card = container.children[0] as HTMLElement | undefined
      if (!card) return
      const gap = 24
      const cardWidth = card.offsetWidth + gap
      container.scrollTo({ left: cardWidth * idx, behavior: 'smooth' })
      setActiveIdx(idx)
    },
    []
  )

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => {
        const next = prev >= maxIdx ? 0 : prev + 1
        scrollTo(next)
        return next
      })
    }, 5000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, maxIdx, scrollTo])

  const goLeft = () => {
    const next = activeIdx <= 0 ? maxIdx : activeIdx - 1
    scrollTo(next)
  }

  const goRight = () => {
    const next = activeIdx >= maxIdx ? 0 : activeIdx + 1
    scrollTo(next)
  }

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#dc2626] rounded-full" />
            <span className="text-[#dc2626] font-bold uppercase tracking-widest text-base">
              TESTIMONIALS
            </span>
            <span className="w-6 h-[2px] bg-[#dc2626] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Fleet Management Companies on 6&nbsp;Continents
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            500+ taxi companies and startups rely on TagMyTaxi&apos;s taxi dispatch software to grow their business every day.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left arrow */}
          <button
            onClick={goLeft}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center hidden md:flex"
            style={{
              boxShadow: 'var(--shadow-md)',
              border: '1px solid rgba(0,0,0,0.06)',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Right arrow */}
          <button
            onClick={goRight}
            aria-label="Next review"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center hidden md:flex"
            style={{
              boxShadow: 'var(--shadow-md)',
              border: '1px solid rgba(0,0,0,0.06)',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Cards container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="snap-start flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div
                  className="bg-white rounded-2xl p-8 h-full flex flex-col"
                  style={{
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    transition: 'all 0.22s ease-in-out',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.boxShadow = 'var(--shadow-lg)'
                    el.style.transform = 'translateY(-4px)'
                    el.style.borderColor = 'rgba(220,38,38,0.12)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.boxShadow = 'var(--shadow-sm)'
                    el.style.transform = 'translateY(0)'
                    el.style.borderColor = 'rgba(0,0,0,0.06)'
                  }}
                >
                  <StarRating count={review.stars} />
                  <blockquote
                    className="text-gray-600 text-base flex-1 mb-6"
                    style={{ lineHeight: '1.75' }}
                  >
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <div
                    className="pt-5 mt-auto"
                    style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
                  >
                    <p className="font-bold text-gray-900 text-base">
                      {review.role}
                    </p>
                    <p className="text-gray-600 text-base">{review.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to review ${i + 1}`}
              className="flex items-center justify-center transition-all duration-300"
              style={{
                width: '44px',
                height: '44px',
                padding: 0,
                background: 'transparent',
              }}
            >
              <span
                className="rounded-full block transition-all duration-300"
                style={{
                  width: activeIdx === i ? '24px' : '8px',
                  height: '8px',
                  backgroundColor: activeIdx === i ? '#dc2626' : '#6b7280',
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
