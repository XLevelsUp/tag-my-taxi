'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'SOLUTIONS', href: '/solutions' },
    { name: 'FEATURES', href: '/features' },
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'COMPANY', href: '/about' },
    { name: 'LOGIN', href: '/login' },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <nav className="w-full z-50 bg-white border-b border-gray-200">
      {/* Top Row: Logo centered */}
      <div className="flex justify-center py-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Tagmytaxi"
            width={200}
            height={45}
            className="h-10 w-auto"
            priority
          />
        </Link>
      </div>

      {/* Bottom Row: Nav links centered */}
      <div className="hidden lg:flex items-center justify-center gap-10 pb-4">
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-[#E31E24] ${isActive(link.href) ? 'text-[#E31E24]' : 'text-gray-800'}`}
          >
            {link.name}
          </Link>
        ))}
        <Link href="/contact">
          <button className="bg-[#E31E24] hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs px-6 py-2.5 rounded transition-colors">
            GET STARTED
          </button>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex justify-end px-6 pb-3">
        <button className="p-2 text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-6 shadow-xl z-50">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`text-sm font-bold uppercase tracking-widest ${isActive(link.href) ? 'text-[#E31E24]' : 'text-gray-900'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-[#E31E24] text-white font-bold uppercase tracking-wider text-xs px-6 py-4 rounded">
              GET STARTED
            </button>
          </Link>
        </div>
      )}
    </nav>
  )
}
