'use client'
import { useRouter } from 'next/navigation'

// ⚠️ Images needed in public/images/home/:
// heroTextImage.png — the left side text image (desktop)
// heroCardMobile.png — the card image shown on mobile (node 448:9888)
//   Download: https://www.figma.com/api/mcp/asset/50683642-d75b-4547-b56f-56667a50eba5

const goldGradient = 'linear-gradient(135deg, #ffe38d 0%, #f3c770 38%, #e7ac53 75%)'

const benefits = [
  { img: '/images/home/convertMovieTicket.png', label: 'Movie tickets\nworth ₹300' },
  { img: '/images/home/convertTerminal.png',    label: 'Works like current\nbank card' },
  { img: '/images/home/convertMetalCard.png',   label: 'Premium metal\ncard finish' },
]

export default function ConvertHeroSection() {
  const router = useRouter()

  const handleExplore = () => {
    if (typeof window !== 'undefined') sessionStorage.setItem('nz_flow', 'convert')
    router.push('/collection')
  }

  return (
    <>
      {/* ── DESKTOP ── */}
      <section className="hero-desktop" style={{
        position: 'relative', background: '#000',
        width: '100%', height: 671, overflow: 'hidden',
      }}>
        {/* Left — baked text image */}
        <div style={{ position: 'absolute', left: 82, top: 100, width: 601, height: 371, zIndex: 2 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/heroTextImage.png" alt="Convert Your Plastic Payment Card to Metal"
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'left top', display: 'block' }} />
        </div>

        {/* CTA button */}
        <div style={{ position: 'absolute', left: 82, top: 506, zIndex: 2 }}>
          <button onClick={handleExplore} style={{
            background: goldGradient, borderRadius: 8,
            height: 48, width: 228, border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'black' }}>Explore Card Designs</span>
          </button>
        </div>

        {/* Right — video */}
        <div style={{ position: 'absolute', right: 60, top: '50%', transform: 'translateY(-50%)', width: 620, zIndex: 1 }}>
          <div style={{ position: 'absolute', left: 0, top: 0, width: 80, height: '100%', background: 'linear-gradient(to right, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block', borderRadius: 12 }}>
            <source src="/videos/cardVideo (1).webm" type="video/webm" />
          </video>
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="hero-mobile" style={{ display: 'none', background: '#000', width: '100%', overflow: 'hidden', paddingBottom: 32 }}>

        {/* Text image */}
        <div style={{ padding: '24px 20px 0' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/heroTextImage.png" alt="Convert Your Plastic Payment Card to Metal"
            style={{ width: '100%', display: 'block' }} />
        </div>

        {/* Card image */}
        <div style={{ width: '100%', padding: '0' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/heroCardMobile.png" alt="Metal Card"
            style={{ width: '100%', display: 'block' }} />
        </div>

        <div style={{ padding: '0 20px' }}>
          {/* Benefit icons */}
          <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 20 }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flex: 1 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.img} alt="" style={{ width: 53, height: 53, objectFit: 'contain' }} />
                <p style={{ fontSize: 12, color: '#d5d5d5', textAlign: 'center', lineHeight: '14px', whiteSpace: 'pre-line', margin: 0 }}>{b.label}</p>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Chip Safe Tech', 'Patented Technology'].map((label, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.07)', border: '0.5px solid #fdde88', borderRadius: 15, padding: '6px 14px' }}>
                <span style={{ fontSize: 11, color: '#e5e7eb' }}>🛡</span>
                <span style={{ fontSize: 13, color: '#e5e7eb', fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button onClick={handleExplore} style={{
            background: goldGradient, borderRadius: 8,
            height: 48, width: '100%', border: 'none',
            cursor: 'pointer', fontSize: 14, fontWeight: 600, color: 'black',
          }}>
            Explore Card Designs
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-desktop { display: none !important; }
          .hero-mobile { display: block !important; }
        }
      `}</style>
    </>
  )
}
