'use client'

import Link from 'next/link'

// ─── Hero CTA Button ─────────────────────────────────────────────────────────
export function HeroCTAButton() {
  return (
    <Link href="/contact">
      <button
        className="text-white font-bold text-base uppercase tracking-wide mb-5 bg-[#dc2626]"
        style={{
          padding: '16px 40px',
          borderRadius: '6px',
          boxShadow: 'var(--shadow-red-lg)',
          transition: 'all 0.2s ease-in-out',
          display: 'inline-block',
        }}
        onMouseEnter={e => {
          const b = e.currentTarget as HTMLButtonElement
          b.style.backgroundColor = '#b91c1c'
          b.style.transform = 'translateY(-3px)'
          b.style.boxShadow = '0 20px 40px -6px rgb(220 38 38 / 0.40)'
        }}
        onMouseLeave={e => {
          const b = e.currentTarget as HTMLButtonElement
          b.style.backgroundColor = '#dc2626'
          b.style.transform = 'translateY(0)'
          b.style.boxShadow = 'var(--shadow-red-lg)'
        }}
      >
        Get Free Trial
      </button>
    </Link>
  )
}

// ─── Primary Button ───────────────────────────────────────────────────────────
export function PrimaryButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link href={href}>
      <button
        className="bg-[#dc2626] text-white font-bold text-base rounded-full"
        style={{
          padding: '12px 32px',
          boxShadow: 'var(--shadow-red)',
          transition: 'all 0.2s ease-in-out',
        }}
        onMouseEnter={e => {
          const b = e.currentTarget as HTMLButtonElement
          b.style.backgroundColor = '#b91c1c'
          b.style.transform = 'translateY(-2px)'
          b.style.boxShadow = 'var(--shadow-red-lg)'
        }}
        onMouseLeave={e => {
          const b = e.currentTarget as HTMLButtonElement
          b.style.backgroundColor = '#dc2626'
          b.style.transform = 'translateY(0)'
          b.style.boxShadow = 'var(--shadow-red)'
        }}
      >
        {children}
      </button>
    </Link>
  )
}

// ─── Outline Button ───────────────────────────────────────────────────────────
export function OutlineButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link href={href}>
      <button
        className="text-[#dc2626] font-bold text-base rounded-full"
        style={{
          padding: '11px 30px',
          border: '2px solid #dc2626',
          backgroundColor: 'transparent',
          transition: 'all 0.2s ease-in-out',
        }}
        onMouseEnter={e => {
          const b = e.currentTarget as HTMLButtonElement
          b.style.backgroundColor = '#dc2626'
          b.style.color = '#ffffff'
          b.style.transform = 'translateY(-2px)'
          b.style.boxShadow = 'var(--shadow-red)'
        }}
        onMouseLeave={e => {
          const b = e.currentTarget as HTMLButtonElement
          b.style.backgroundColor = 'transparent'
          b.style.color = '#dc2626'
          b.style.transform = 'translateY(0)'
          b.style.boxShadow = 'none'
        }}
      >
        {children}
      </button>
    </Link>
  )
}

// ─── Feature Card ─────────────────────────────────────────────────────────────
export function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div
      className="bg-white rounded-2xl p-8 cursor-default"
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
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
        style={{ backgroundColor: 'rgba(220,38,38,0.07)' }}
      >
        {icon}
      </div>
      <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">{title}</h3>
      <p className="text-gray-600 text-base" style={{ lineHeight: '1.72' }}>{description}</p>
    </div>
  )
}
