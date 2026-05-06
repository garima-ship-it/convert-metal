'use client'
import { useRouter } from 'next/navigation'

// ⚠️ Download these Figma assets:
// imgChipCard → /images/home/secChipCard.png (the chip card image in the tall card)
const goldText = { background: 'linear-gradient(180deg, #fff 0%, #ffe2b8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }
const goldBorder = '0.4px solid #5f5f5f'
const cardShadow = '0px 8px 40px 0px rgba(0,0,0,0.4)'
const goldGradient = 'linear-gradient(135deg, #ffe38d 0%, #f3c770 38%, #e7ac53 75%)'

export default function SecurityFeaturesSection() {
  const router = useRouter()

  const handleExplore = () => {
    if (typeof window !== 'undefined') sessionStorage.setItem('nz_flow', 'convert')
    router.push('/collection')
  }

  return (
    <>
      {/* ── DESKTOP ── */}
      <section className="sec-feat-desktop" style={{ background: 'linear-gradient(to right, #0d0a05, #0a0a0a)', width: '100%', padding: '64px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 100px', position: 'relative' }}>
          {/* Left vertical gold line */}
          <div style={{ position: 'absolute', left: 100, top: 0, width: 1, height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.4), transparent)' }} />

          {/* Top left — badge + heading + description */}
          <div style={{ marginBottom: 48, paddingLeft: 18 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(119,118,116,0.12)', border: '1px solid rgba(139,139,139,0.3)', borderRadius: 14, padding: '5px 14px', marginBottom: 20 }}>
              <span style={{ fontSize: 12, color: '#d4af37' }}>✨&nbsp;</span>
              <span style={{ fontSize: 12, color: 'white', fontWeight: 500 }}>Upgrade your wallet</span>
            </div>
            <h2 style={{ fontSize: 44, fontWeight: 800, lineHeight: '56px', ...goldText, marginBottom: 16 }}>360° security</h2>
            <p style={{ fontSize: 16, color: 'white', lineHeight: '1.6', maxWidth: 445 }}>
              We transform your existing plastic card into a luxurious metal card, preserving your original EMV chip throughout.
            </p>
          </div>

          {/* Bento grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 403px', gridTemplateRows: 'auto auto', gap: 20, paddingLeft: 18 }}>
            {/* Wide card — 28 Grams */}
            <div style={{ background: '#0f0f0f', border: goldBorder, borderRadius: 20, padding: '32px', boxShadow: cardShadow }}>
              <h3 style={{ fontSize: 26, fontWeight: 700, ...goldText, marginBottom: 12 }}>28 Grams of Authority.</h3>
              <p style={{ fontSize: 13, color: 'white', lineHeight: '1.6' }}>The moment you drop it on the table, the distinctive &quot;Clink&quot; sound turns heads.</p>
            </div>

            {/* Tall card — Seamless Chip Transplant (spans 2 rows) */}
            <div style={{ background: '#0a0a0a', border: goldBorder, borderRadius: 20, padding: '28px', boxShadow: cardShadow, gridRow: '1 / 3', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: 26, fontWeight: 700, ...goldText, marginBottom: 12 }}>Seamless Chip Transplant.</h3>
              <p style={{ fontSize: 13, color: 'white', lineHeight: '1.6', marginBottom: 24 }}>Our patented technology seamlessly transfers the chip from your existing bank card to your new metal card, with no impact on functionality.</p>
              <div style={{ flex: 1, borderRadius: 12, overflow: 'hidden', background: 'linear-gradient(135deg, #0d1520, #162030)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 200 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/home/secChipCard.png" alt="Chip" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }} />
              </div>
            </div>

            {/* Bottom row — 2 small cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div style={{ background: '#0f0f0f', border: goldBorder, borderRadius: 20, padding: '28px', boxShadow: cardShadow }}>
                <h3 style={{ fontSize: 26, fontWeight: 700, ...goldText, marginBottom: 12 }}>Surgical Steel.</h3>
                <p style={{ fontSize: 13, color: 'white', lineHeight: '1.6' }}>Built from 304 Stainless Steel. Waterproof, fire-resistant, and unbendable.</p>
              </div>
              <div style={{ background: '#0f0f0f', border: goldBorder, borderRadius: 20, padding: '28px', boxShadow: cardShadow }}>
                <h3 style={{ fontSize: 26, fontWeight: 700, ...goldText, marginBottom: 12 }}>RFID Blocked.</h3>
                <p style={{ fontSize: 13, color: 'white', lineHeight: '1.6' }}>Solid metal blocks RFID skimmers, preventing digital theft of your card details.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
            <button onClick={handleExplore} style={{ background: 'transparent', border: '1px solid #ffe38d', borderRadius: 8, height: 45, padding: '0 34px', cursor: 'pointer' }}>
              <span style={{ fontSize: 14, fontWeight: 600, background: goldGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', opacity: 0.72 }}>
                Explore More Designs
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="sec-feat-mobile" style={{ display: 'none', background: 'linear-gradient(to right, #0d0a05, #0a0a0a)', padding: '40px 20px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(119,118,116,0.12)', border: '1px solid rgba(139,139,139,0.3)', borderRadius: 14, padding: '5px 12px', marginBottom: 16 }}>
          <span style={{ fontSize: 11, color: '#d4af37' }}>✨&nbsp;</span>
          <span style={{ fontSize: 11, color: 'white', fontWeight: 500 }}>Upgrade your wallet</span>
        </div>
        <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: '40px', ...goldText, marginBottom: 12 }}>360° security</h2>
        <p style={{ fontSize: 14, color: 'white', lineHeight: '1.6', marginBottom: 28 }}>We transform your existing plastic card into a luxurious metal card, preserving your original EMV chip throughout.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { title: '28 Grams of Authority.', desc: 'The moment you drop it on the table, the distinctive "Clink" sound turns heads.' },
            { title: 'Seamless Chip Transplant.', desc: 'Our patented technology seamlessly transfers the chip from your existing bank card to your new metal card.' },
            { title: 'Surgical Steel.', desc: 'Built from 304 Stainless Steel. Waterproof, fire-resistant, and unbendable.' },
            { title: 'RFID Blocked.', desc: 'Solid metal blocks RFID skimmers, preventing digital theft of your card details.' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#0f0f0f', border: goldBorder, borderRadius: 16, padding: '20px' }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, ...goldText, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: 13, color: 'white', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 28 }}>
          <button onClick={handleExplore} style={{ background: 'transparent', border: '1px solid #ffe38d', borderRadius: 8, height: 44, padding: '0 28px', cursor: 'pointer', width: '100%' }}>
            <span style={{ fontSize: 14, fontWeight: 600, background: goldGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Explore More Designs
            </span>
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .sec-feat-desktop { display: none !important; }
          .sec-feat-mobile { display: block !important; }
        }
      `}</style>
    </>
  )
}
