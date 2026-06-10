'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What is TagMyTaxi's taxi dispatch software?",
    answer:
      "TagMyTaxi is a cloud-based taxi dispatch software that helps fleet owners manage bookings, track drivers in real time, and run their taxi business — just like Uber, but under your own brand.",
  },
  {
    question: 'Can I launch my own branded taxi app using TagMyTaxi?',
    answer:
      "Yes. TagMyTaxi is a fully white-label taxi dispatch software — you get a taxi booking app with your own name, logo, and colours, so your customers see your brand, not ours.",
  },
  {
    question: 'How long does it take to get my fleet started on TagMyTaxi?',
    answer:
      "Your fleet can be fully live on TagMyTaxi's taxi dispatch software within 24 hours — with your branded app, driver tracking, automated dispatch, and fleet management all ready to go.",
  },
  {
    question: "How does TagMyTaxi's taxi booking software help me save money on my fleet?",
    answer:
      "TagMyTaxi's taxi booking software automatically assigns rides to the nearest driver, reduces vehicle idle time, and runs on the cloud — so you spend less on fuel, staff, and server costs every month.",
  },
  {
    question: 'Does TagMyTaxi support ride pooling for my fleet?',
    answer:
      'Yes. TagMyTaxi supports ride pooling — multiple passengers heading the same way share one vehicle, which means lower ride costs for passengers, more earnings per trip for drivers, and better use of every vehicle in your fleet.',
  },
  {
    question: "Is TagMyTaxi's taxi management software suitable for both small and large fleets?",
    answer:
      "Yes. TagMyTaxi's taxi management software works for any fleet size — whether you have 5 vehicles or 5,000. You can grow your fleet anytime without changing your plan or renegotiating contracts.",
  },
  {
    question: "Can I manage multiple cities with TagMyTaxi's taxi fleet management software?",
    answer:
      "Yes. TagMyTaxi's taxi fleet management software lets you manage multiple cities from one single login — with separate fare rules, drivers, and dispatch zones set up for each location.",
  },
  {
    question: 'What reports does TagMyTaxi give me to run my fleet better?',
    answer:
      "TagMyTaxi's taxi dispatch system gives you daily driver performance reports, vehicle revenue reports, busy zone maps, and corporate client usage summaries — so you always know what's working and what's not.",
  },
  {
    question: 'Can TagMyTaxi handle bookings and billing for my corporate clients?',
    answer:
      "Yes. TagMyTaxi's taxi booking software manages your corporate clients with automatic invoicing, monthly ride reports, special fare packages, and a dedicated booking portal for each business account.",
  },
  {
    question: 'Will my taxi dispatch software go down and affect my business?',
    answer:
      "No. TagMyTaxi's taxi dispatch software runs on secure cloud servers with 99.9% uptime — meaning your drivers keep getting rides and your customers keep booking, without any interruption.",
  },
]

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        backgroundColor: isOpen ? 'rgba(255,0,0,0.03)' : '#ffffff',
        border: isOpen ? '1px solid rgba(255,0,0,0.12)' : '1px solid rgba(0,0,0,0.06)',
        transition: 'all 0.25s ease-in-out',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
        aria-expanded={isOpen}
        id={`faq-trigger-${index}`}
        aria-controls={`faq-content-${index}`}
      >
        <span
          className="font-bold text-base"
          style={{
            color: isOpen ? '#ff0000' : '#111827',
            transition: 'color 0.2s ease-in-out',
          }}
        >
          {item.question}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: isOpen ? '#ff0000' : 'rgba(0,0,0,0.05)',
            transition: 'all 0.25s ease-in-out',
          }}
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4 text-gray-500" />
          )}
        </span>
      </button>
      <div
        id={`faq-content-${index}`}
        role="region"
        aria-labelledby={`faq-trigger-${index}`}
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.3s ease-in-out',
        }}
      >
        <div className="overflow-hidden">
          <p
            className="px-6 pb-6 text-gray-600 text-base"
            style={{ lineHeight: '1.75' }}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#ff0000] rounded-full" />
            <span className="text-[#ff0000] font-bold uppercase tracking-widest text-base">
              FAQ
            </span>
            <span className="w-6 h-[2px] bg-[#ff0000] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions About Our Taxi Dispatch Software
          </h2>
          <p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            style={{ lineHeight: '1.7' }}
          >
            Everything you need to know about getting started with TagMyTaxi&apos;s cloud-based taxi dispatch system.
          </p>
        </div>

        {/* Accordion items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              item={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
