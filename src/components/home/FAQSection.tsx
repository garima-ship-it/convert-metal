'use client'
import { useState } from 'react'

const faqs = [
  { q: 'Is the DIY process difficult to do?', a: 'Not at all! Most customers swap their chip in under 5 minutes with our professional tools and video guide.' },
  { q: 'Will my card still work after the transfer?', a: 'Yes! Same chip, same PIN, same contactless payments — works exactly like your existing card.' },
  { q: 'How long does delivery take?', a: 'Typically 5-7 business days. Express delivery available at checkout.' },
  { q: 'What cards are supported?', a: 'Most Visa, Mastercard, and RuPay credit and debit cards are supported.' },
  { q: 'Is my banking information safe?', a: 'Absolutely. We never store your card number or banking data. Your chip is transferred securely.' },
  { q: 'Can I get a custom design?', a: 'Yes! We offer laser engraving for custom names, numbers, and logos.' },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ background: '#040404', padding: '60px', fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ textAlign: 'center', fontSize: 38, fontWeight: 800, color: 'white', marginBottom: 12 }}>
        Common Questions &amp; Answers
      </h2>
      <p style={{ textAlign: 'center', fontSize: 17, color: '#9ca3af', marginBottom: 48 }}>
        Find out all the essential details about our platform and how it can serve your needs.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 48px', maxWidth: 1121, margin: '0 auto' }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 20, cursor: 'pointer' }}
            onClick={() => setOpen(open === i ? null : i)}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 25, height: 25, borderRadius: 4, background: '#262626', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: 'white', fontWeight: 600, flexShrink: 0 }}>
                {i + 1}
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: 'white', marginBottom: open === i ? 8 : 0 }}>{faq.q}</p>
                {open === i && <p style={{ fontSize: 13, color: '#6b7280', lineHeight: '18px' }}>{faq.a}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          section { padding: 40px 20px !important; }
          section > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
