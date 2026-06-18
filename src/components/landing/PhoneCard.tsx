'use client'

import { useState } from 'react'

export function PhoneCard({ image, title }: { image: string; title: string }) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className="relative w-[280px] mx-auto">
      {/* Top-right red accent */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-[#dc2626] z-10" />
      {/* Bottom-left red accent */}
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-[#dc2626] z-10" />

      {/* Phone frame */}
      <div className="relative z-20 rounded-[2rem] border-[6px] border-gray-300 overflow-hidden shadow-lg bg-white">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-300 rounded-b-xl z-30" />
        
        {hasError ? (
          <div
            style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
              height: '340px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              textAlign: 'center',
              padding: '0 20px',
            }}
          >
            {title}
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={image}
            alt={title}
            className="w-full h-[340px] object-cover"
            onError={() => setHasError(true)}
          />
        )}
      </div>
    </div>
  )
}
