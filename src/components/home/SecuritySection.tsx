'use client'
import { useState } from 'react'

// ⚠️ Download before expiry (7 days):
// https://www.figma.com/api/mcp/asset/c9946790-1293-48bb-9d9a-21ec9a0ba65c
// Save as: public/images/home/securityBoxesImage.png (desktop combined image)
//
// For mobile carousel — upload 4 separate box images:
// secBox1.png, secBox2.png, secBox3.png, secBox4.png

const goldHeading = {
  background: 'linear-gradient(135deg, #ffe38d 0%, #f3c770 38%, #e7ac53 75%)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
  opacity: 0.72,
}

const mobileBoxes = [
  { img: '/images/home/secBox1.png', label: 'View your card details in the app' },
  { img: '/images/home/secBox2.png', label: 'Manage & set transaction limits' },
  { img: '/images/home/secBox3.png', label: 'Reset your card PIN securely' },
  { img: '/images/home/secBox4.png', label: 'Pause/Unpause your card' },
]

export default function SecuritySection() {
  const [offset, setOffset] = useState(0)

  return (
    <>
      {/* ── DESKTOP ── */}
      <section className="sec-desktop" style={{ background: 'black', width: '100%', padding: '51px 79px 60px', overflow: 'hidden' }}>
        {/* Gold gradient heading */}
        <h2 style={{ fontSize: 40, fontWeight: 700, lineHeight: '48px', width: 475, marginBottom: 0, ...goldHeading }}>
          Unbreakable standard of security convenience
        </h2>

        {/* Divider line */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.15)', width: 666, margin: '24px 0 28px' }} />

        {/* Combined boxes image */}
        <div style={{ width: '100%' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/securityBoxesImage.png"
            alt="Security features"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      </section>

      {/* ── MOBILE — carousel ── */}
      <section className="sec-mobile" style={{ display: 'none', background: 'black', padding: '40px 0 40px' }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, lineHeight: '36px', ...goldHeading, textAlign: 'center', padding: '0 20px', marginBottom: 8 }}>
          Unbreakable standard of security convenience
        </h2>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.15)', margin: '16px 20px 24px' }} />

        {/* Swipeable boxes */}
        <div style={{
          display: 'flex', gap: 16,
          overflowX: 'auto', paddingLeft: 20, paddingRight: 20,
          paddingBottom: 8, scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
        } as React.CSSProperties}>
          {mobileBoxes.map((box, i) => (
            <div key={i} style={{
              flexShrink: 0, width: 220,
              background: 'linear-gradient(to left, #232324, black)',
              border: '0.5px solid rgba(255,255,255,0.15)',
              borderRadius: 8, overflow: 'hidden',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={box.img} alt={box.label}
                style={{ width: '100%', height: 130, objectFit: 'cover', display: 'block' }} />
              <p style={{ fontSize: 14, color: 'white', textAlign: 'center', padding: '14px 12px', lineHeight: '20px' }}>
                {box.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .sec-desktop { display: none !important; }
          .sec-mobile { display: block !important; }
          .sec-mobile ::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </>
  )
}
