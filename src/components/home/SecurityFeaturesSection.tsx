'use client'
import { useRouter } from 'next/navigation'

// ⚠️ Images needed in public/images/home/:
// security360Image.png — desktop baked image
// security360Mobile.png — mobile baked image (node 481:11709)
//   Download: https://www.figma.com/api/mcp/asset/3ae1f0dd-1ae6-4512-95d6-715e6d3c65ab

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
      <section className="sec360-desktop" style={{ background: 'linear-gradient(to right, #0d0a05, #0a0a0a)', width: '100%', padding: '46px 63px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ width: '100%', borderRadius: 12, overflow: 'hidden', marginBottom: 40 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/security360Image.png" alt="360° Security" style={{ width: '100%', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={handleExplore} style={{ background: 'transparent', border: '1px solid #ffe38d', borderRadius: 8, height: 45, padding: '0 34px', cursor: 'pointer' }}>
            <span style={{ fontSize: 14, fontWeight: 600, background: goldGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', opacity: 0.72 }}>
              Explore More Designs
            </span>
          </button>
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="sec360-mobile" style={{ background: 'linear-gradient(to right, #0d0a05, #0a0a0a)', padding: '32px 16px' }}>
        <div style={{ width: '100%', borderRadius: 12, overflow: 'hidden', marginBottom: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/security360Mobile.png" alt="360° Security" style={{ width: '100%', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={handleExplore} style={{ background: 'transparent', border: '1px solid #ffe38d', borderRadius: 8, height: 45, padding: '0 28px', cursor: 'pointer', width: '100%' }}>
            <span style={{ fontSize: 14, fontWeight: 600, background: goldGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Explore More Designs
            </span>
          </button>
        </div>
      </section>

      <style>{`
        @media (min-width: 769px) {
          .sec360-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          .sec360-desktop { display: none !important; }
        }
      `}</style>
    </>
  )
}
