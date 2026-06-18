'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: 'SOLUTIONS', href: '/solutions' },
    { name: 'FEATURES', href: '/features' },
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'COMPANY', href: '/about' },
  ]

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="w-full z-50 sticky top-0"
      style={{
        backgroundColor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(0,0,0,0.06)',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Side: Logo */}
        <Link href="/" aria-label="Tagmytaxi home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Tagmytaxi"
            width={180}
            height={40}
            className="h-8 w-auto"
            loading="eager"
          />
        </Link>

        {/* Right Side: Desktop Nav links & CTA */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-base font-bold uppercase tracking-wider group ${isActive(link.href) ? 'text-[#dc2626]' : 'text-gray-800'}`}
              style={{ transition: 'color 0.2s ease-in-out' }}
            >
              <span
                style={{ transition: 'color 0.2s ease-in-out' }}
                className="group-hover:text-[#dc2626]"
              >
                {link.name}
              </span>
              {/* Underline slide-in */}
              <span
                className="absolute -bottom-1 left-0 h-[2px] bg-[#dc2626] rounded-full"
                style={{
                  width: isActive(link.href) ? '100%' : '0%',
                  transition: 'width 0.22s cubic-bezier(0.4,0,0.2,1)',
                }}
                aria-hidden
              />
              <span
                className="absolute -bottom-1 left-0 h-[2px] bg-[#dc2626] rounded-full opacity-0 group-hover:opacity-100 group-hover:w-full"
                style={{ width: '0%', transition: 'width 0.22s cubic-bezier(0.4,0,0.2,1), opacity 0.15s' }}
                aria-hidden
              />
            </Link>
          ))}
          <Link href="/contact">
            <button
              className="bg-[#dc2626] text-white font-bold uppercase tracking-wider text-base px-6 py-2.5 rounded"
              style={{
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.2s ease-in-out',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#b91c1c'
                ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'var(--shadow-red)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#dc2626'
                ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'var(--shadow-md)'
              }}
            >
              GET STARTED
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            className="p-2 text-gray-900 rounded-lg"
            style={{ transition: 'background-color 0.15s' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — animated */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden absolute left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-6 z-50"
            style={{ boxShadow: 'var(--shadow-lg)' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-bold uppercase tracking-widest ${isActive(link.href) ? 'text-[#dc2626]' : 'text-gray-900'}`}
                style={{ transition: 'color 0.2s' }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#dc2626] text-white font-bold uppercase tracking-wider text-base px-6 py-4 rounded" style={{ boxShadow: 'var(--shadow-red)' }}>
                GET STARTED
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
