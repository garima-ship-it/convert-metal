'use client'
import { useRouter } from 'next/navigation'

// ⚠️ Download this Figma asset before it expires (7 days):
// https://www.figma.com/api/mcp/asset/e8406273-49a3-4f23-ac13-6144174f2c6e
// Save as: public/images/home/heroTextImage.png
// This is the full left-side image with all text baked in

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
        width: '100%', height: 620, overflow: 'hidden',
      }}>
        {/* Left — text image + CTA */}
        <div style={{ position: 'absolute', left: 82, top: 197, width: 601, height: 371, zIndex: 2 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/heroTextImage.png"
            alt="Convert Your Plastic Payment Card to Metal"
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'left top', display: 'block' }}
          />
        </div>

        {/* CTA button — below the image */}
        <div style={{ position: 'absolute', left: 82, top: 603, zIndex: 2 }}>
          <button onClick={handleExplore} style={{
            background: goldGradient, borderRadius: 8,
            height: 48, width: 228, border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'black' }}>Explore Card Designs</span>
          </button>
        </div>

        {/* Right — video */}
        <div style={{ position: 'absolute', right: 0, top: 0, width: '54%', height: '100%', zIndex: 1 }}>
          {/* Left fade */}
          <div style={{ position: 'absolute', left: 0, top: 0, width: 120, height: '100%', background: 'linear-gradient(to right, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
            <source src="/videos/cardVideo (1).webm" type="video/webm" />
            <source src="/videos/cardVideo (1).webm" type="video/webm" />
          </video>
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="hero-mobile" style={{ display: 'none', background: '#000', width: '100%', overflow: 'hidden' }}>
        {/* Text image full width */}
        <div style={{ width: '100%', padding: '20px 20px 0' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/heroTextImage.png"
            alt="Convert Your Plastic Payment Card to Metal"
            style={{ width: '100%', display: 'block' }}
          />
        </div>

        {/* Video below */}
        <div style={{ width: '100%', marginTop: 16, position: 'relative' }}>
          <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
            <source src="/videos/cardVideo (1).webm" type="video/webm" />
            <source src="/videos/convert-card.mp4" type="video/mp4" />
          </video>
        </div>

        {/* CTA */}
        <div style={{ padding: '20px', paddingBottom: 32 }}>
          <button onClick={handleExplore} style={{
            background: goldGradient, borderRadius: 10,
            height: 48, width: '100%', border: 'none',
            cursor: 'pointer', fontSize: 15, fontWeight: 600, color: 'black',
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
