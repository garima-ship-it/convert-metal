'use client'
import { useRouter } from 'next/navigation'

// ⚠️ Download these Figma assets before they expire (7 days):
// imgMovieTicket → /images/home/convertMovieTicket.png
// imgTerminal → /images/home/convertTerminal.png  
// imgMetalCard → /images/home/convertMetalCard.png
// imgShield → /images/home/convertShield.png
// imgHeroCard → /images/home/convertHeroCard.png (the card image on the right)

const goldGradient = 'linear-gradient(135deg, #ffe38d 0%, #f3c770 38%, #e7ac53 75%)'
const conicGlow = 'conic-gradient(from 90deg at 50% 50%, rgba(224,192,48,0.18) -0.68%, rgb(224,192,48) 0.5%, rgb(224,192,48) 21.14%, rgba(199,170,45,0.89) 22.7%, rgba(174,149,43,0.78) 24.27%, rgba(149,127,40,0.67) 25.83%, rgba(124,106,37,0.57) 27.39%, rgba(99,84,34,0.46) 28.95%, rgba(74,62,32,0.35) 30.52%, rgba(49,41,29,0.24) 32.08%, rgba(24,19,26,0.13) 33.64%, rgba(7,22,18,0) 83.53%, rgba(0,0,0,0) 97.15%, rgba(112,96,24,0.09) 98.23%, rgba(168,144,36,0.14) 98.77%, rgba(224,192,48,0.18) 99.32%, rgb(224,192,48) 100.5%)'

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
      <section className="hero-desktop" style={{ position: 'relative', background: '#000', width: '100%', height: 700, overflow: 'hidden' }}>
        {/* Gold conic glow — left */}
        <div style={{ position: 'absolute', left: -187, top: -531, width: 527, height: 552, opacity: 0.64, background: conicGlow, transform: 'rotate(-90deg)', pointerEvents: 'none', zIndex: 0 }} />
        {/* Gold conic glow — right */}
        <div style={{ position: 'absolute', right: -187, top: -531, width: 527, height: 552, opacity: 0.64, background: conicGlow, transform: 'rotate(-90deg) scaleY(-1)', pointerEvents: 'none', zIndex: 0 }} />

        {/* Left content */}
        <div style={{ position: 'absolute', left: 82, top: '50%', transform: 'translateY(-50%)', width: 621, zIndex: 2, display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(119,118,116,0.12)', border: '1px solid #8d7634', borderRadius: 14, padding: '5px 14px', width: 'fit-content' }}>
            <span style={{ fontSize: 12, color: '#d4af37' }}>✨&nbsp;</span>
            <span style={{ fontSize: 12, color: 'white', fontWeight: 500 }}>Upgrade the way you pay</span>
          </div>

          {/* Gold gradient heading */}
          <h1 style={{ fontSize: 54, fontWeight: 800, lineHeight: '62px', margin: 0, background: goldGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', opacity: 0.72 }}>
            Convert Your Plastic Payment Card to Metal
          </h1>

          {/* Benefits */}
          <div style={{ display: 'flex', gap: 40 }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: 90 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.img} alt="" style={{ width: 53, height: 53, objectFit: 'contain' }} />
                <p style={{ fontSize: 12, color: '#d5d5d5', textAlign: 'center', lineHeight: '15px', whiteSpace: 'pre-line', margin: 0 }}>{b.label}</p>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: 12 }}>
            {['Chip Safe Tech', 'Patented Technology'].map((label, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.07)', border: '0.5px solid #fdde88', borderRadius: 15, padding: '6px 14px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/home/convertShield.png" alt="" style={{ width: 11, height: 14 }} />
                <span style={{ fontSize: 13, color: '#e5e7eb', fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button onClick={handleExplore} style={{ background: goldGradient, borderRadius: 8, height: 48, width: 228, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'black' }}>Explore Card Designs</span>
          </button>
        </div>

        {/* Right — hero card image */}
        <div style={{ position: 'absolute', right: 0, top: 0, width: '52%', height: '100%', overflow: 'hidden', zIndex: 1 }}>
          {/* Left fade gradient */}
          <div style={{ position: 'absolute', left: 0, top: 0, width: 120, height: '100%', background: 'linear-gradient(to right, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/convertHeroCard.png" alt="Metal Card" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="hero-mobile" style={{ display: 'none', background: '#000', width: '100%', overflow: 'hidden', position: 'relative', paddingBottom: 32 }}>
        {/* Gold glow */}
        <div style={{ position: 'absolute', left: -100, top: -150, width: 400, height: 400, background: conicGlow, transform: 'rotate(-90deg)', opacity: 0.5, pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 1, padding: '24px 20px 0' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(119,118,116,0.12)', border: '1px solid #8d7634', borderRadius: 14, padding: '5px 12px', marginBottom: 16 }}>
            <span style={{ fontSize: 11, color: '#d4af37' }}>✨&nbsp;</span>
            <span style={{ fontSize: 11, color: 'white', fontWeight: 500 }}>Upgrade the way you pay</span>
          </div>

          {/* Heading */}
          <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: '40px', marginBottom: 20, background: goldGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', opacity: 0.9 }}>
            Convert Your Plastic Payment Card to Metal
          </h1>

          {/* Hero image */}
          <div style={{ width: '100%', borderRadius: 12, overflow: 'hidden', marginBottom: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/home/convertHeroCard.png" alt="Metal Card" style={{ width: '100%', display: 'block' }} />
          </div>

          {/* Benefits */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, justifyContent: 'space-around' }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: 1 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.img} alt="" style={{ width: 40, height: 40, objectFit: 'contain' }} />
                <p style={{ fontSize: 10, color: '#d5d5d5', textAlign: 'center', lineHeight: '13px', whiteSpace: 'pre-line', margin: 0 }}>{b.label}</p>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Chip Safe Tech', 'Patented Technology'].map((label, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.07)', border: '0.5px solid #fdde88', borderRadius: 15, padding: '5px 12px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/home/convertShield.png" alt="" style={{ width: 9, height: 12 }} />
                <span style={{ fontSize: 12, color: '#e5e7eb', fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button onClick={handleExplore} style={{ background: goldGradient, borderRadius: 10, height: 48, width: '100%', border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 600, color: 'black' }}>
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
