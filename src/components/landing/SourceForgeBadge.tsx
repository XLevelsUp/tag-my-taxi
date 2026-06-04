'use client'

import Script from 'next/script'

/**
 * SourceForge "Customers Love Us" badge widget.
 * Uses the official JS embed from b.sf-syn.com (sf_id=3874694).
 * The script writes the badge into the #sfwb-3874694 div.
 */
export function SourceForgeBadge() {
  return (
    <div>
      {/* Target container the SF script populates */}
      <div id="sfwb-3874694" />
      <Script
        id="sf-badge-script"
        src="https://b.sf-syn.com/badge_js?sf_id=3874694&achievement=customers-love-us&variant_id=sf"
        strategy="lazyOnload"
      />
      {/* Fallback link shown while script loads or if it fails */}
      <noscript>
        <a
          href="https://sourceforge.net/software/product/TagMyTaxi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://sourceforge.net/cdn/syncpulse/images/badges/customers-love-us.svg"
            alt="SourceForge Customers Love Us"
            width={130}
            height={45}
            style={{ width: '130px', height: 'auto' }}
          />
        </a>
      </noscript>
    </div>
  )
}
