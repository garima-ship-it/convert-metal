'use client'
import { useRouter } from 'next/navigation'

// ⚠️ Images needed in public/images/home/:
// heroTextImage.png — desktop left side baked text image
// heroMobileContent.png — mobile baked image (node 478:11707)

const goldGradient = 'linear-gradient(135deg, #ffe38d 0%, #f3c770 38%, #e7ac53 75%)'

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
      <section className="hero-mobile" style={{ background: '#000', width: '100%', overflow: 'hidden' }}>
        {/* Baked image — has all design elements */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/home/heroMobileContent.png" alt="Convert Your Plastic Payment Card to Metal"
          style={{ width: '100%', display: 'block' }} />

        {/* Video below */}
{/* Video below */}
        <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block', transform: 'scale(1.4)', transformOrigin: 'center center', marginTop: 40 }}>
  <source src="/videos/cardVideo (1).webm" type="video/webm" />
        </video>
      </section>

      <style>{`
        @media (min-width: 769px) {
          .hero-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          .hero-desktop { display: none !important; }
        }
      `}</style>
    </>
  )
}
