import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-[#ff0000] transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#ff0000] transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/portfolio" className="text-gray-600 hover:text-[#ff0000] transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[#ff0000] transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">More</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-[#ff0000] transition-colors text-sm">Uber Clone</Link></li>
              <li><Link href="/features" className="text-gray-600 hover:text-[#ff0000] transition-colors text-sm">Features</Link></li>
              <li><Link href="/portfolio" className="text-gray-600 hover:text-[#ff0000] transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#ff0000] transition-colors text-sm">Technology</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#ff0000] transition-colors text-sm">Pricing</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <p>2603 Camino Ramon,</p>
                <p>#409 San Ramon, CA 94583</p>
                <p>+1 (202) 657-6901</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">DUBAI MARINA</p>
                <p>+91 8248729959</p>
              </div>
            </div>
          </div>

          {/* Accreditation */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Accreditation</h4>
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
              {/* SourceForge Badge */}
              <a
                href="https://sourceforge.net/software/product/TagMyTaxi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="SourceForge Customers Love Us"
                  src="https://b.sf-syn.com/badge_img/3874694/customers-love-us-white?achievement=customers-love-us&r=https://tagmytaxi.com/"
                  style={{ width: '130px', height: 'auto' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6 text-xs text-gray-500">
            <Link href="#" className="hover:text-[#ff0000] transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-[#ff0000] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#ff0000] transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-[#ff0000] transition-colors">Refund Policy</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()}, Tagmytaxi.com All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
