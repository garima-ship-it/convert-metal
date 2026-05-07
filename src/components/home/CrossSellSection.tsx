'use client'
import { useRouter } from 'next/navigation'

// ⚠️ Download these Figma assets:
// imgNeoZAPBanner → /images/home/neozapBanner.png (the "Get India's First Prepaid Metal Card" banner image)

export default function CrossSellSection() {
  const router = useRouter()

  const handleClick = () => {
    if (typeof window !== 'undefined') sessionStorage.setItem('nz_flow', 'neozap')
    router.push('/collection')
  }

  return (
    <>
      {/* ── DESKTOP ── */}
      <section className="crosssell-desktop" style={{ background: '#080808', padding: '48px 60px' }}>
<div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', cursor: 'pointer' }} onClick={handleClick}>
  {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/neozapBanner.png" alt="Get India's First Prepaid Metal Card"
            style={{ width: '100%', display: 'block' }} />
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="crosssell-mobile" style={{ display: 'none', background: '#080808', padding: '28px 16px' }}>
<div style={{ borderRadius: 16, overflow: 'hidden', cursor: 'pointer' }} onClick={handleClick}>
  {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/neozapBannerMobile.png" alt="Get India's First Prepaid Metal Card"
            style={{ width: '100%', display: 'block' }} />
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .crosssell-desktop { display: none !important; }
          .crosssell-mobile { display: block !important; }
        }
      `}</style>
    </>
  )
}
