'use client'
import { useRouter } from 'next/navigation'

// ⚠️ These Figma URLs expire in 7 days — download and save as:
// convertBannerDesktop.png → public/images/home/convertBannerDesktop.png
// convertBannerMobile.png  → public/images/home/convertBannerMobile.png
const desktopBanner = "https://www.figma.com/api/mcp/asset/baa7107b-5987-436e-b552-6cda3b529810"
const mobileBanner  = "https://www.figma.com/api/mcp/asset/2b9d3c4c-5a5a-43e0-9a44-4c92200d46b7"

export default function ConvertSection() {
  const router = useRouter()

  const handleClick = () => {
    sessionStorage.setItem('nz_flow', 'convert')
    router.push('/collection')
  }

  return (
    <>
      {/* ── DESKTOP ── */}
      <section className="conv-desktop" style={{ background: '#080808', padding: '48px 60px' }}>
        {/* Banner is the image, video overlaid on the right empty space */}
        <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', cursor: 'pointer' }} onClick={handleClick}>
          {/* Background image — full banner with left content baked in */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={desktopBanner}
            alt="Convert Your Plastic Card to Metal"
            style={{ width: '100%', display: 'block' }}
          />
          {/* Video overlaid on the right empty area */}
          <div style={{
            position: 'absolute',
            top: '12%',
            right: '2%',
            width: '47%',
            height: '76%',
            borderRadius: 12,
            overflow: 'hidden',
          }}>
            <video
              autoPlay loop muted playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src="/videos/cardVideo (1).webm" type="video/webm" />
            </video>
          </div>
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="conv-mobile" style={{ display: 'none', background: '#080808', padding: '24px 16px' }}>
        <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', cursor: 'pointer' }} onClick={handleClick}>
          {/* Background image — mobile banner with top content baked in */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={mobileBanner}
            alt="Convert Your Plastic Card to Metal"
            style={{ width: '100%', display: 'block' }}
          />
          {/* Video overlaid on the bottom empty area */}
          <div style={{
            position: 'absolute',
            bottom: '2%',
            left: '5%',
            width: '90%',
            height: '42%',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
            <video
              autoPlay loop muted playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src="/videos/cardVideo (1).webm" type="video/webm" />
            </video>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .conv-desktop { display: none !important; }
          .conv-mobile { display: block !important; }
        }
      `}</style>
    </>
  )
}
