'use client'

import { useEffect, useRef, useState } from 'react'

/* ─────────────────────────────────────────────────────────────
   useCountUp — triggers when the element enters the viewport
   Counts from 0 → target with an ease-out-cubic curve
───────────────────────────────────────────────────────────── */
function useCountUp(target: number, duration = 2200) {
  const [count, setCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = performance.now()

          const tick = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out cubic: decelerates near the end
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, containerRef }
}

/* ─────────────────────────────────────────────────────────────
   CountUpStat — formatted number + label with viewport trigger
   Handles commas (2,500) and suffix (+)
───────────────────────────────────────────────────────────── */
export function CountUpStat({
  value,
  label,
  duration = 2200,
}: {
  value: string        // e.g. "2,500+" or "10+" or "250+"
  label: string
  duration?: number
}) {
  // Parse: strip non-numeric chars to get the number; preserve suffix
  const suffix = value.replace(/[\d,]/g, '')       // e.g. "+"
  const raw = parseInt(value.replace(/[^0-9]/g, ''), 10)  // e.g. 2500
  const { count, containerRef } = useCountUp(raw, duration)

  // Format with commas
  const formatted = count.toLocaleString('en-US')

  return (
    <div ref={containerRef} className="space-y-2 px-4">
      <div
        className="text-4xl md:text-5xl font-black tabular-nums"
        style={{
          color: '#dc2626',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          minWidth: '4ch', // prevent layout shift
        }}
      >
        {formatted}
        <span style={{ color: '#dc2626' }}>{suffix}</span>
      </div>
      <div className="text-base text-gray-500 font-medium tracking-wide uppercase mt-2">
        {label}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   WhyCard — elevated card with icon pill + hover lift
───────────────────────────────────────────────────────────── */
export function WhyCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div
      className="flex flex-col items-center text-center bg-white rounded-2xl p-8 cursor-default"
      style={{
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid rgba(0,0,0,0.06)',
        transition: 'all 0.22s ease-in-out',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.boxShadow = 'var(--shadow-lg)'
        el.style.transform = 'translateY(-6px)'
        el.style.borderColor = 'rgba(220,38,38,0.12)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.boxShadow = 'var(--shadow-sm)'
        el.style.transform = 'translateY(0)'
        el.style.borderColor = 'rgba(0,0,0,0.06)'
      }}
    >
      {/* Icon pill */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
        style={{ backgroundColor: 'rgba(220,38,38,0.07)' }}
      >
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
      <p className="text-gray-500 text-base leading-relaxed">{desc}</p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   ProcessStep — numbered step card with hover lift
───────────────────────────────────────────────────────────── */
export function ProcessStep({
  icon,
  label,
  step,
}: {
  icon: React.ReactNode
  label: string
  step: string   // "01", "02", etc.
}) {
  return (
    <div
      className="flex flex-col items-center text-center bg-white rounded-2xl p-6 cursor-default relative"
      style={{
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid rgba(0,0,0,0.06)',
        transition: 'all 0.22s ease-in-out',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.boxShadow = 'var(--shadow-md)'
        el.style.transform = 'translateY(-4px)'
        el.style.borderColor = 'rgba(220,38,38,0.15)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.boxShadow = 'var(--shadow-sm)'
        el.style.transform = 'translateY(0)'
        el.style.borderColor = 'rgba(0,0,0,0.06)'
      }}
    >
      {/* Step number */}
      <span
        className="text-base font-black mb-3 block"
        style={{ color: '#dc2626', letterSpacing: '0.08em', opacity: 0.6 }}
      >
        {step}
      </span>
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: 'rgba(220,38,38,0.07)' }}
      >
        {icon}
      </div>
      <span className="text-base font-semibold text-gray-700">{label}</span>
    </div>
  )
}
