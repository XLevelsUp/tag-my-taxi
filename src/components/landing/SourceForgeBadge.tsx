'use client'

import { useEffect } from 'react'

/**
 * Renders three official SourceForge-related review badges:
 * 1. TopBusinessSoftware (tbs)
 * 2. Slashdot (sd)
 * 3. SourceForge (sf)
 */
export function SourceForgeBadge() {
  useEffect(() => {
    // Dynamic script loading function to trigger badge population on mount/remount
    const loadBadgeScript = (variantId: string) => {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://b.sf-syn.com/badge_js?sf_id=3088657&variant_id=${variantId}`
      document.body.appendChild(script)
      return script
    }

    const tbsScript = loadBadgeScript('tbs')
    const sdScript = loadBadgeScript('sd')
    const sfScript = loadBadgeScript('sf')

    return () => {
      // Cleanup dynamically injected scripts to avoid clutter and conflicts
      if (document.body.contains(tbsScript)) document.body.removeChild(tbsScript)
      if (document.body.contains(sdScript)) document.body.removeChild(sdScript)
      if (document.body.contains(sfScript)) document.body.removeChild(sfScript)
    }
  }, [])

  return (
    <div className="flex flex-row flex-wrap items-center gap-4 justify-center lg:justify-start">
      {/* TBS Tag */}
      <div 
        className="sf-root" 
        data-id="3088657" 
        data-badge="light-default" 
        data-variant-id="tbs" 
        style={{ width: '125px', minHeight: '52px' }}
      >
        <a 
          href="https://topbusinesssoftware.com/products/Tagmytaxi/reviews/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-[#dc2626] transition-colors"
        >
          Tagmytaxi Reviews
        </a>
      </div>

      {/* Slashdot Tag */}
      <div 
        className="sf-root" 
        data-id="3088657" 
        data-badge="users-love-us-new-white" 
        data-variant-id="sd" 
        style={{ width: '125px', minHeight: '52px' }}
      >
        <a 
          href="https://slashdot.org/software/p/Tagmytaxi/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-[#dc2626] transition-colors"
        >
          Tagmytaxi Reviews
        </a>
      </div>

      {/* SF Tag */}
      <div 
        className="sf-root" 
        data-id="3088657" 
        data-badge="light-default" 
        data-variant-id="sf" 
        style={{ width: '125px', minHeight: '52px' }}
      >
        <a 
          href="https://sourceforge.net/software/product/Tagmytaxi/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-[#dc2626] transition-colors"
        >
          Tagmytaxi Reviews
        </a>
      </div>
    </div>
  )
}

