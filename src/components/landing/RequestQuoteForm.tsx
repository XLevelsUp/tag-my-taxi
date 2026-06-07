'use client'

import { useState } from 'react'
import { submitToGoogleSheets } from '@/app/actions/sheets'
import * as gtag from '../../utils/gtag'

const inputBase: React.CSSProperties = {
  width: '100%',
  height: '52px',
  backgroundColor: '#f9fafb',
  borderWidth: '1.5px',
  borderStyle: 'solid',
  borderColor: '#e5e7eb',
  borderRadius: '12px',
  padding: '0 20px',
  fontSize: '16px',
  color: '#374151',
  transition: 'all 0.2s ease-in-out',
  appearance: 'none' as const,
  WebkitAppearance: 'none' as const,
  outline: 'none',
}

const inputFocusStyle = {
  backgroundColor: '#ffffff',
  borderColor: '#ff0000',
  boxShadow: '0 0 0 3px rgba(255,0,0,0.10)',
}

function PremiumInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false)
  return (
    <input
      {...props}
      style={{ ...inputBase, ...(focused ? inputFocusStyle : {}) }}
      onFocus={e => { setFocused(true); props.onFocus?.(e) }}
      onBlur={e => { setFocused(false); props.onBlur?.(e) }}
    />
  )
}

function PremiumSelect(props: React.SelectHTMLAttributes<HTMLSelectElement> & { children: React.ReactNode }) {
  const [focused, setFocused] = useState(false)
  const { children, ...rest } = props
  return (
    <div className="relative">
      <select
        {...rest}
        style={{ ...inputBase, paddingRight: '40px', cursor: 'pointer', ...(focused ? inputFocusStyle : {}) }}
        onFocus={e => { setFocused(true); rest.onFocus?.(e) }}
        onBlur={e => { setFocused(false); rest.onBlur?.(e) }}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}

export function RequestQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '',
    phone: '',
    company: '',
    country: '',
    numberOfCars: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic client side validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill out all required fields (Name, Email, Phone Number).")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await submitToGoogleSheets({
        formType: 'quote',
        name: formData.name,
        email: formData.email,
        countryCode: formData.countryCode,
        phone: formData.phone,
        company: formData.company,
        country: formData.country,
        numberOfCars: formData.numberOfCars,
      })

      if (response.success) {
        // Track lead submission in Google Analytics
        gtag.event({
          action: 'generate_lead',
          category: 'Form Submission',
          label: 'Request Quote Form',
        })
        gtag.trackConversion('AW-17760687003/PXr2CPzF9s0bEJun-pRC')

        setSuccess(true)
        setFormData({
          name: '',
          email: '',
          countryCode: '',
          phone: '',
          company: '',
          country: '',
          numberOfCars: '',
        })
      } else {
        setError(response.error || "Failed to submit request. Please try again.")
      }
    } catch (err: any) {
      setError("An unexpected error occurred. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-10 space-y-4">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
          style={{ backgroundColor: '#f0fdf4', color: '#16a34a', boxShadow: '0 4px 12px -2px rgba(22,163,74,0.20)' }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Request Submitted!</h3>
        <p className="text-gray-600 max-w-sm mx-auto text-base leading-relaxed">
          Thank you for requesting a quote. Our team will review your fleet requirements and contact you within one business day.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-base font-black text-[#ff0000] uppercase tracking-wider pt-2 block mx-auto"
          style={{ transition: 'color 0.2s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#E53935' }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#ff0000' }}
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1: Name & Email */}
      <div className="grid md:grid-cols-2 gap-5">
        <PremiumInput
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name *"
          required
          aria-label="Your name"
        />
        <PremiumInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address *"
          required
          aria-label="Email address"
        />
      </div>

      {/* Row 2: Country Code & Phone */}
      <div className="grid md:grid-cols-2 gap-5">
        <PremiumSelect
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          aria-label="Country code"
        >
          <option value="">Code</option>
          <option value="+1">+1 (US)</option>
          <option value="+44">+44 (UK)</option>
          <option value="+91">+91 (IN)</option>
          <option value="+971">+971 (UAE)</option>
          <option value="+61">+61 (AU)</option>
          <option value="+49">+49 (DE)</option>
          <option value="+33">+33 (FR)</option>
          <option value="+86">+86 (CN)</option>
          <option value="+81">+81 (JP)</option>
        </PremiumSelect>
        <PremiumInput
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number *"
          required
          aria-label="Phone number"
        />
      </div>

      {/* Row 3: Company & Country */}
      <div className="grid md:grid-cols-2 gap-5">
        <PremiumInput
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          aria-label="Company name"
        />
        <PremiumSelect
          name="country"
          value={formData.country}
          onChange={handleChange}
          aria-label="Country"
        >
          <option value="">Country</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="IN">India</option>
          <option value="AE">United Arab Emirates</option>
          <option value="AU">Australia</option>
          <option value="DE">Germany</option>
          <option value="FR">France</option>
          <option value="CA">Canada</option>
          <option value="SG">Singapore</option>
        </PremiumSelect>
      </div>

      {/* Row 4: Number of Cars */}
      <div className="grid md:grid-cols-2 gap-5">
        <PremiumSelect
          name="numberOfCars"
          value={formData.numberOfCars}
          onChange={handleChange}
          aria-label="Number of cars"
        >
          <option value="">Number of Cars</option>
          <option value="1-10">1 - 10</option>
          <option value="11-50">11 - 50</option>
          <option value="51-100">51 - 100</option>
          <option value="101-500">101 - 500</option>
          <option value="500+">500+</option>
        </PremiumSelect>
        <div />
      </div>

      {error && (
        <div
          className="p-4 rounded-xl text-base font-semibold leading-relaxed"
          style={{ backgroundColor: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca' }}
          role="alert"
        >
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full text-white font-bold text-base rounded-xl flex items-center justify-center gap-2"
        style={{
          height: '56px',
          marginTop: '8px',
          backgroundColor: loading ? '#fca5a5' : '#ff0000',
          boxShadow: loading ? 'none' : 'var(--shadow-red)',
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s ease-in-out',
          opacity: loading ? 0.7 : 1,
        }}
        onMouseEnter={e => {
          if (!loading) {
            const b = e.currentTarget as HTMLButtonElement
            b.style.backgroundColor = '#E53935'
            b.style.transform = 'translateY(-2px)'
            b.style.boxShadow = 'var(--shadow-red-lg)'
          }
        }}
        onMouseLeave={e => {
          if (!loading) {
            const b = e.currentTarget as HTMLButtonElement
            b.style.backgroundColor = '#ff0000'
            b.style.transform = 'translateY(0)'
            b.style.boxShadow = 'var(--shadow-red)'
          }
        }}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </>
        ) : (
          "Request A Quote"
        )}
      </button>
    </form>
  )
}
