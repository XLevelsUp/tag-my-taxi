'use client'

import { useState } from 'react'
import { submitToGoogleSheets } from '@/app/actions/sheets'
import * as gtag from '../../utils/gtag'

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
        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Request Submitted!</h3>
        <p className="text-gray-600 max-w-sm mx-auto text-sm leading-relaxed">
          Thank you for requesting a quote. Our team will review your fleet requirements and contact you within one business day.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-sm font-black text-[#ff0000] hover:text-[#E53935] uppercase tracking-wider transition-colors pt-2 block mx-auto"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1: Name & Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            required
            className="w-full h-14 bg-white border border-gray-200 rounded-full px-6 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#ff0000] transition-colors"
          />
        </div>
        <div className="space-y-1">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            required
            className="w-full h-14 bg-white border border-gray-200 rounded-full px-6 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#ff0000] transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Country Code & Phone */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="w-full h-14 bg-white border border-gray-200 rounded-full px-6 text-sm text-gray-700 appearance-none focus:outline-none focus:border-[#ff0000] transition-colors"
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
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="space-y-1">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            required
            className="w-full h-14 bg-white border border-gray-200 rounded-full px-6 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#ff0000] transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Company & Country */}
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full h-14 bg-white border border-gray-200 rounded-full px-6 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#ff0000] transition-colors"
        />
        <div className="relative">
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full h-14 bg-white border border-gray-200 rounded-full px-6 text-sm text-gray-700 appearance-none focus:outline-none focus:border-[#ff0000] transition-colors"
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
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Row 4: Number of Cars */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          <select
            name="numberOfCars"
            value={formData.numberOfCars}
            onChange={handleChange}
            className="w-full h-14 bg-white border border-gray-200 rounded-full px-6 text-sm text-gray-700 appearance-none focus:outline-none focus:border-[#ff0000] transition-colors"
          >
            <option value="">Number of Cars</option>
            <option value="1-10">1 - 10</option>
            <option value="11-50">11 - 50</option>
            <option value="51-100">51 - 100</option>
            <option value="101-500">101 - 500</option>
            <option value="500+">500+</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div></div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-50 text-red-600 text-xs font-semibold leading-relaxed border border-red-100">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#ff0000] hover:bg-[#E53935] text-white font-bold text-lg py-4 rounded-lg transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
