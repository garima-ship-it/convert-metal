'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Card } from '@/types'

interface Props {
  card: Card
  onClose: () => void
}

export default function ServiceSelectModal({ card, onClose }: Props) {
  const router = useRouter()
  const [selected, setSelected] = useState<'neozap' | 'convert'>('neozap')

  const finalPrice = card.dprice ?? card.price

  const handleContinue = () => {
    sessionStorage.setItem('nz_flow', selected)
    const params = new URLSearchParams({
      flow: selected,
      productId: String(card.id),
      productName: card.name,
      price: String(card.price),
      dprice: String(finalPrice),
      img: card.imgCol ?? '',
    })
    router.push(`/checkout?${params.toString()}`)
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>
      {/* Backdrop */}
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }} />

      {/* Modal — bottom sheet on all screen sizes */}
      <div style={{
        position: 'relative', zIndex: 1,
        background: '#0a0a0a',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '24px 24px 0 0',
        width: '100%',
        maxWidth: 680,
        overflow: 'hidden',
        animation: 'slideUp 0.25s ease',
      }}>

        {/* Header */}
        <div style={{ borderBottom: '1px solid #1e2939', padding: '24px 24px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 700, background: 'linear-gradient(181deg, #e7e7e7 37%, #686868 141%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 4 }}>
                Select your preferred card
              </h2>
              <p style={{ fontSize: 14, color: '#99a1af' }}>{card.name}</p>
            </div>
            <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#6b7280', fontSize: 20, cursor: 'pointer', padding: '4px', lineHeight: 1 }}>✕</button>
          </div>
        </div>

        {/* Options */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Option 1 — NeoZAP Prepaid Metal Card (Recommended) */}
          <div onClick={() => setSelected('neozap')} style={{ position: 'relative', background: selected === 'neozap' ? 'rgba(33,200,164,0.1)' : 'rgba(16,24,40,0.5)', border: `2px solid ${selected === 'neozap' ? 'white' : '#364153'}`, borderRadius: 16, padding: '26px', cursor: 'pointer', transition: 'all .15s' }}>
            {/* Recommended badge */}
            <div style={{ position: 'absolute', top: -12, left: 24, background: 'white', borderRadius: 9999, padding: '4px 12px' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'black' }}>Recommended</span>
            </div>

            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>🔧</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 17, fontWeight: 700, color: 'white', marginBottom: 4 }}>Get NeoZAP Prepaid Metal Card</p>
                <p style={{ fontSize: 10, color: 'white', marginBottom: 16, opacity: 0.7 }}>Powered by RuPay</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    '🛍️ Load & Pay on card machines & websites',
                    '🎁 Benefits worth ₹60,000 in NeoZAP App',
                    '🤑 Get 4% Gold cashback on your spends',
                    '🍿 FREE Movie Tickets worth ₹300',
                  ].map((f, i) => (
                    <p key={i} style={{ fontSize: 14, color: '#99a1af', lineHeight: '20px' }}>{f}</p>
                  ))}
                </div>
              </div>
              {/* Radio */}
              <div style={{ width: 24, height: 24, borderRadius: '50%', border: `2px solid ${selected === 'neozap' ? 'white' : '#4a5565'}`, background: selected === 'neozap' ? 'white' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .15s' }}>
                {selected === 'neozap' && <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'black' }} />}
              </div>
            </div>
          </div>

          {/* Option 2 — Convert existing card */}
          <div onClick={() => setSelected('convert')} style={{ background: selected === 'convert' ? 'rgba(33,200,164,0.1)' : 'rgba(16,24,40,0.5)', border: `2px solid ${selected === 'convert' ? 'white' : '#364153'}`, borderRadius: 16, padding: '26px', cursor: 'pointer', transition: 'all .15s' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>👨‍💼</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 17, fontWeight: 700, color: 'white', marginBottom: 16 }}>Convert your existing card to Metal Card</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    '🍿 FREE Movie Tickets worth ₹300',
                    '💳 Works like your existing payment card',
                  ].map((f, i) => (
                    <p key={i} style={{ fontSize: 14, color: '#99a1af', lineHeight: '20px' }}>{f}</p>
                  ))}
                </div>
              </div>
              {/* Radio */}
              <div style={{ width: 24, height: 24, borderRadius: '50%', border: `2px solid ${selected === 'convert' ? 'white' : '#4a5565'}`, background: selected === 'convert' ? 'white' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .15s' }}>
                {selected === 'convert' && <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'black' }} />}
              </div>
            </div>
          </div>
        </div>

        {/* Continue button */}
        <div style={{ borderTop: '1px solid #1e2939', padding: '17px 24px 24px' }}>
          <button onClick={handleContinue} style={{ width: '100%', height: 50, background: 'white', borderRadius: 16, border: 'none', fontSize: 16, fontWeight: 700, color: 'black', cursor: 'pointer' }}>
            Continue →
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
