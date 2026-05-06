'use client'
import { useRouter } from 'next/navigation'

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
      <section className="hero-mobile" style={{ display: 'none', background: '#000', width: '100%', overflow: 'hidden' }}>
        <div style={{ padding: '24px 20px 0' }}>

          {/* Badge capsule */}
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(119,118,116,0.12)', border: '1px solid #8d7634', borderRadius: 14, padding: '5px 14px', marginBottom: 16 }}>
            <span style={{ fontSize: 11, color: '#d4af37' }}>✨ </span>
            <span style={{ fontSize: 11, color: 'white', fontWeight: 500 }}> Upgrade the way you pay</span>
          </div>

          {/* Gold gradient heading */}
          <h1 style={{ fontSize: 30, fontWeight: 800, lineHeight: '36px', marginBottom: 24, background: goldGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', opacity: 0.72 }}>
            Convert Your Plastic Payment Card to Metal
          </h1>

          {/* 3 benefit icons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flex: 1 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.img} alt="" style={{ width: 53, height: 53, objectFit: 'contain' }} />
                <p style={{ fontSize: 12, color: '#d5d5d5', textAlign: 'center', lineHeight: '14.4px', whiteSpace: 'pre-line', margin: 0 }}>{b.label}</p>
              </div>
            ))}
          </div>

          {/* Two trust badge capsules */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
            {['Chip Safe Tech', 'Patented Technology'].map((label, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.07)', border: '0.5px solid #fdde88', borderRadius: 15, padding: '6px 14px' }}>
                <span style={{ fontSize: 11, color: '#e5e7eb' }}>🛡</span>
                <span style={{ fontSize: 13, color: '#e5e7eb', fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <button onClick={handleExplore} style={{
            background: goldGradient, borderRadius: 8,
            height: 48, width: 228, border: 'none',
            cursor: 'pointer', fontSize: 14, fontWeight: 600, color: 'black',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 24,
          }}>
            Explore Card Designs
          </button>
        </div>

        {/* Video — full width below */}
        <div style={{ width: '100%' }}>
          <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
            <source src="/videos/cardVideo (1).webm" type="video/webm" />
          </video>
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
