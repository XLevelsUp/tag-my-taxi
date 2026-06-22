import Link from 'next/link'
import Image from 'next/image'

const footerLinkStyle: React.CSSProperties = {
  fontSize: '16px',
  color: '#6b7280',
  textDecoration: 'none',
  display: 'inline-block',
  transition: 'all 0.2s ease-in-out',
}

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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
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
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: '#f9fafb', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
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

          {/* Social Media Links */}
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
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-gray-500 hover:text-white hover:bg-[#dc2626] hover:border-[#dc2626] transition-all duration-300 transform hover:-translate-y-1 shadow-sm bg-white"
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
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
