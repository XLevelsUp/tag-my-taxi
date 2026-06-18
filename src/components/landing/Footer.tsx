import Link from 'next/link'
import Image from 'next/image'
import { SourceForgeBadge } from '@/components/landing/SourceForgeBadge'

const footerLinkStyle: React.CSSProperties = {
  fontSize: '16px',
  color: '#6b7280',
  textDecoration: 'none',
  display: 'inline-block',
  transition: 'all 0.2s ease-in-out',
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-600 text-base hover:text-[#dc2626] group"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', transition: 'all 0.2s ease-in-out' }}
      >
        <span
          className="group-hover:translate-x-1"
          style={{ display: 'inline-block', transition: 'transform 0.2s ease-in-out' }}
        >
          {children}
        </span>
      </Link>
    </li>
  )
}

export function Footer() {
  return (
    <footer className="bg-white" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
      {/* Brand red top accent bar */}
      <div className="w-full h-[3px] bg-[#dc2626]" />

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <h3
              className="font-bold text-gray-800 mb-6"
              style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.12em' }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
              <FooterLink href="/portfolio">Portfolio</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3
              className="font-bold text-gray-800 mb-6"
              style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.12em' }}
            >
              More
            </h3>
            <ul className="space-y-3">
              <FooterLink href="#">Uber Clone</FooterLink>
              <FooterLink href="/features">Features</FooterLink>
              <FooterLink href="/portfolio">Portfolio</FooterLink>
              <FooterLink href="#">Technology</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3
              className="font-bold text-gray-800 mb-6"
              style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.12em' }}
            >
              Contact Us
            </h3>
            <div className="space-y-4 text-base text-gray-600" style={{ lineHeight: '1.7' }}>
              <div>
                <p>2603 Camino Ramon,</p>
                <p>#409 San Ramon, CA 94583</p>
                <p>+1 (202) 657-6901</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700 text-base uppercase tracking-widest mb-1">Dubai Marina</p>
                <p>+91 8248729959</p>
              </div>
            </div>
          </div>

          {/* Accreditation */}
          <div>
            <h3
              className="font-bold text-gray-800 mb-6"
              style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.12em' }}
            >
              Accreditation
            </h3>
            <div className="space-y-4">
              <Image
                src="/bas-iso-badge.png"
                alt="BAS ISO 27001 Certified"
                width={90}
                height={90}
                className="object-contain"
              />
              <Image
                src="/dmca-badge.png"
                alt="DMCA Protected"
                width={120}
                height={30}
                className="object-contain"
              />
              {/* SourceForge Badge — official JS widget */}
              <SourceForgeBadge />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: '#f9fafb', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6">
            {['Terms of Use', 'Privacy Policy', 'Cookie Policy', 'Refund Policy'].map(label => (
              <Link
                key={label}
                href="#"
                className="text-base text-gray-600 hover:text-[#dc2626]"
                style={{ transition: 'color 0.2s' }}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="text-base text-gray-600 text-center md:text-right">
            <p>© {new Date().getFullYear()}, Tagmytaxi.com All Rights Reserved.</p>
            <p className="mt-1 text-[13px] text-gray-500">Built with ❤️ by <a href="https://www.xlevelsup.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#dc2626] transition-colors">XLevelsUp</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
