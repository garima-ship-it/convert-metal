'use client'
import { useRouter } from 'next/navigation'

const imgMovieTicket = "/images/home/convertMovieTicket.png"
const imgMetalCard   = "/images/home/convertMetalCard.png"
const imgTerminal    = "/images/home/convertTerminal.png"
const imgShieldIcon  = "/images/home/convertShield.png"

const benefits = [
  { img: imgMovieTicket, label: 'Movie tickets\nworth ₹300' },
  { img: imgTerminal,    label: 'Works like current\nbank card' },
  { img: imgMetalCard,   label: 'Premium metal\ncard finish' },
]

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
        <div style={{
          position: 'relative',
          background: '#000000',
          borderRadius: 20,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          minHeight: 480,
          border: '1px solid rgba(255,255,255,0.05)',
        }}>

          {/* Gold conic glow — top left */}
          <div style={{
            position: 'absolute', left: -187, top: -531, width: 527, height: 552,
            opacity: 0.64,
            background: 'conic-gradient(from 90deg at 50% 50%, rgba(224,192,48,0.18) -0.68%, rgb(224,192,48) 0.5%, rgb(224,192,48) 21.14%, rgba(199,170,45,0.89) 22.7%, rgba(174,149,43,0.78) 24.27%, rgba(149,127,40,0.67) 25.83%, rgba(124,106,37,0.57) 27.39%, rgba(99,84,34,0.46) 28.95%, rgba(74,62,32,0.35) 30.52%, rgba(49,41,29,0.24) 32.08%, rgba(24,19,26,0.13) 33.64%, rgba(7,22,18,0) 83.53%, rgba(0,0,0,0) 97.15%, rgba(112,96,24,0.09) 98.23%, rgba(168,144,36,0.14) 98.77%, rgba(224,192,48,0.18) 99.32%, rgb(224,192,48) 100.5%)',
            transform: 'rotate(-90deg)', pointerEvents: 'none', zIndex: 0,
          }} />

          {/* Mirrored glow — right side */}
          <div style={{
            position: 'absolute', right: -187, top: -531, width: 527, height: 552,
            opacity: 0.64,
            background: 'conic-gradient(from 90deg at 50% 50%, rgba(224,192,48,0.18) -0.68%, rgb(224,192,48) 0.5%, rgb(224,192,48) 21.14%, rgba(199,170,45,0.89) 22.7%, rgba(174,149,43,0.78) 24.27%, rgba(149,127,40,0.67) 25.83%, rgba(124,106,37,0.57) 27.39%, rgba(99,84,34,0.46) 28.95%, rgba(74,62,32,0.35) 30.52%, rgba(49,41,29,0.24) 32.08%, rgba(24,19,26,0.13) 33.64%, rgba(7,22,18,0) 83.53%, rgba(0,0,0,0) 97.15%, rgba(112,96,24,0.09) 98.23%, rgba(168,144,36,0.14) 98.77%, rgba(224,192,48,0.18) 99.32%, rgb(224,192,48) 100.5%)',
            transform: 'rotate(-90deg) scaleY(-1)', pointerEvents: 'none', zIndex: 0,
          }} />

          {/* Left content */}
          <div style={{ flex: 1, padding: '56px 58px', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: 28, justifyContent: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(119,118,116,0.12)', border: '1px solid #8d7634', borderRadius: 14, padding: '5px 14px', width: 'fit-content' }}>
              <span style={{ fontSize: 12, color: '#d4af37' }}>✨&nbsp;</span>
              <span style={{ fontSize: 12, color: 'white', fontWeight: 500 }}>Upgrade the way you pay</span>
            </div>
            <h2 style={{ fontSize: 54, fontWeight: 800, lineHeight: '62px', margin: 0, background: 'linear-gradient(180deg, #ffe38d 0%, #f3c770 38%, #e7ac53 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', maxWidth: 560 }}>
              Convert Your Plastic Payment Card to Metal
            </h2>
            <div style={{ display: 'flex', gap: 32 }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: 90 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.img} alt="" style={{ width: 53, height: 53, objectFit: 'contain' }} />
                  <p style={{ fontSize: 12, color: '#d5d5d5', textAlign: 'center', lineHeight: '15px', whiteSpace: 'pre-line', margin: 0 }}>{b.label}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {['Chip Safe Tech', 'Patented Technology'].map((label, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.07)', border: '0.5px solid #fdde88', borderRadius: 15, padding: '6px 14px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgShieldIcon} alt="" style={{ width: 11, height: 14 }} />
                  <span style={{ fontSize: 13, color: '#e5e7eb', fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>
            <button onClick={handleClick} style={{ background: 'linear-gradient(135deg, #ffe38d 0%, #f3c770 38%, #e7ac53 75%)', borderRadius: 8, height: 48, width: 228, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'black' }}>Explore Card Designs</span>
            </button>
          </div>

          {/* Right — video with slant border lines */}
          <div style={{ width: 520, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: 40, position: 'relative', zIndex: 2 }}>
            <div style={{ position: 'relative', width: '100%' }}>
              {/* Slant border — left edge */}
              <div style={{
                position: 'absolute', left: -12, top: '5%', height: '90%', width: 2, zIndex: 3,
                background: 'linear-gradient(180deg, transparent 0%, #c9a227 20%, #e8c547 50%, #c9a227 80%, transparent 100%)',
                transform: 'skewX(-6deg)',
                pointerEvents: 'none',
              }} />
              {/* Slant border — right edge */}
              <div style={{
                position: 'absolute', right: -12, top: '5%', height: '90%', width: 2, zIndex: 3,
                background: 'linear-gradient(180deg, transparent 0%, #c9a227 20%, #e8c547 50%, #c9a227 80%, transparent 100%)',
                transform: 'skewX(-6deg)',
                pointerEvents: 'none',
              }} />
              <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block', borderRadius: 12 }}>
                <source src="/videos/cardVideo (1).webm" type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="conv-mobile" style={{ display: 'none', background: '#080808', padding: '28px 16px' }}>
        <div style={{ position: 'relative', background: '#000', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', padding: '28px 20px' }}>
          <div style={{ position: 'absolute', left: -100, top: -200, width: 400, height: 400, background: 'conic-gradient(from 90deg at 50% 50%, rgba(224,192,48,0.2) 0%, rgb(224,192,48) 5%, rgba(224,192,48,0) 40%, rgba(0,0,0,0) 100%)', transform: 'rotate(-90deg)', opacity: 0.5, pointerEvents: 'none', zIndex: 0 }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(119,118,116,0.12)', border: '1px solid #8d7634', borderRadius: 14, padding: '5px 14px', marginBottom: 16 }}>
              <span style={{ fontSize: 11, color: '#d4af37' }}>✨&nbsp;</span>
              <span style={{ fontSize: 11, color: 'white', fontWeight: 500 }}>Upgrade the way you pay</span>
            </div>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: '38px', marginBottom: 20, background: 'linear-gradient(180deg, #ffe38d 0%, #f3c770 38%, #e7ac53 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Convert Your Plastic Payment Card to Metal
            </h2>

            {/* Video with slant borders on mobile too */}
            <div style={{ marginBottom: 20, position: 'relative' }}>
              <div style={{ position: 'absolute', left: -8, top: '5%', height: '90%', width: 1.5, zIndex: 3, background: 'linear-gradient(180deg, transparent 0%, #c9a227 20%, #e8c547 50%, #c9a227 80%, transparent 100%)', transform: 'skewX(-6deg)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', right: -8, top: '5%', height: '90%', width: 1.5, zIndex: 3, background: 'linear-gradient(180deg, transparent 0%, #c9a227 20%, #e8c547 50%, #c9a227 80%, transparent 100%)', transform: 'skewX(-6deg)', pointerEvents: 'none' }} />
              <div style={{ borderRadius: 10, overflow: 'hidden' }}>
                <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
                  <source src="/videos/cardVideo (1).webm" type="video/webm" />
                </video>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 8, marginBottom: 16, justifyContent: 'space-around' }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: 1 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.img} alt="" style={{ width: 40, height: 40, objectFit: 'contain' }} />
                  <p style={{ fontSize: 10, color: '#d5d5d5', textAlign: 'center', lineHeight: '13px', whiteSpace: 'pre-line', margin: 0 }}>{b.label}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
              {['Chip Safe Tech', 'Patented Technology'].map((label, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.07)', border: '0.5px solid #fdde88', borderRadius: 15, padding: '5px 12px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgShieldIcon} alt="" style={{ width: 9, height: 12 }} />
                  <span style={{ fontSize: 12, color: '#e5e7eb', fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>
            <button onClick={handleClick} style={{ background: 'linear-gradient(135deg, #ffe38d 0%, #f3c770 38%, #e7ac53 75%)', borderRadius: 10, height: 46, width: '100%', border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 600, color: 'black' }}>
              Explore Card Designs
            </button>
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
