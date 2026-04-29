'use client'
import { useRouter } from 'next/navigation'

// Figma asset URLs (valid for 7 days — replace with local images after)
const imgMovieTicket = "https://www.figma.com/api/mcp/asset/86d30407-4d52-483f-a9f2-97e4a6a3b795"
const imgMetalCard   = "https://www.figma.com/api/mcp/asset/4191ca12-6ce4-40df-878a-6dbdb9d00803"
const imgTerminal    = "https://www.figma.com/api/mcp/asset/a2d5e1de-f623-41cc-8859-eaeb4e68ae44"
const imgShieldIcon  = "https://www.figma.com/api/mcp/asset/2ee1467d-6a0c-4ba9-95e5-04a4d0ab15f9"

const goldGradient = 'linear-gradient(135deg, #ffe38d 0%, #f3c770 38%, #e7ac53 75%)'
const goldBorder = '0.5px solid #fdde88'

const benefits = [
  { img: imgMovieTicket, label: 'Movie tickets\nworth ₹300' },
  { img: imgTerminal,    label: 'Works like current\nbank card' },
  { img: imgMetalCard,   label: 'Premium metal\ncard finish' },
]

const badges = [
  { label: 'Chip Safe Tech' },
  { label: 'Patented Technology' },
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
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20,
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          minHeight: 480,
        }}>
          {/* Gold glow background */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 0% 50%, rgba(224,192,48,0.12) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />

          {/* Left content */}
          <div style={{ flex: 1, padding: '56px 58px', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: 28, justifyContent: 'center' }}>
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(119,118,116,0.12)', border: '1px solid #8d7634', borderRadius: 14, padding: '5px 14px', width: 'fit-content' }}>
              <span style={{ fontSize: 12, color: '#d4af37' }}>✨&nbsp;</span>
              <span style={{ fontSize: 12, color: 'white', fontWeight: 500 }}>Upgrade the way you pay</span>
            </div>

            {/* Heading */}
            <h2 style={{
              fontSize: 54, fontWeight: 800, lineHeight: '62px', margin: 0,
              background: 'linear-gradient(180deg, #ededed 5%, #616169 94%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              maxWidth: 560,
            }}>
              Convert Your Plastic Payment Card to Metal
            </h2>

            {/* Benefit icons */}
            <div style={{ display: 'flex', gap: 32 }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: 90 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.img} alt="" style={{ width: 53, height: 53, objectFit: 'contain' }} />
                  <p style={{ fontSize: 12, color: '#d5d5d5', textAlign: 'center', lineHeight: '15px', whiteSpace: 'pre-line', margin: 0 }}>{b.label}</p>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', gap: 12 }}>
              {badges.map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.07)', border: goldBorder, borderRadius: 15, padding: '6px 14px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgShieldIcon} alt="" style={{ width: 11, height: 14 }} />
                  <span style={{ fontSize: 13, color: '#e5e7eb', fontWeight: 500 }}>{b.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button onClick={handleClick} style={{ background: goldGradient, borderRadius: 8, height: 48, width: 228, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'black' }}>Explore Card Designs</span>
            </button>
          </div>

          {/* Right — video */}
          <div style={{ width: 500, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 40px 32px 0' }}>
            <div style={{ width: '100%', borderRadius: 12, overflow: 'hidden', background: '#111' }}>
              <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block', borderRadius: 12 }}>
                <source src="/videos/cardVideo (1).webm" type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="conv-mobile" style={{ display: 'none', background: '#080808', padding: '32px 16px' }}>
        <div style={{
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 16,
          overflow: 'hidden',
          position: 'relative',
          padding: '28px 20px',
        }}>
          {/* Gold glow */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(224,192,48,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(119,118,116,0.12)', border: '1px solid #8d7634', borderRadius: 14, padding: '5px 14px', marginBottom: 16, position: 'relative' }}>
            <span style={{ fontSize: 11, color: '#d4af37' }}>✨&nbsp;</span>
            <span style={{ fontSize: 11, color: 'white', fontWeight: 500 }}>Upgrade the way you pay</span>
          </div>

          {/* Heading */}
          <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: '38px', marginBottom: 20, background: 'linear-gradient(180deg, #ededed 5%, #616169 94%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', position: 'relative' }}>
            Convert Your Plastic Payment Card to Metal
          </h2>

          {/* Video */}
          <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 20, background: '#111', position: 'relative' }}>
            <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
              <source src="/videos/cardVideo (1).webm" type="video/webm" />
            </video>
          </div>

          {/* Benefits */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 16, justifyContent: 'space-around', position: 'relative' }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: 1 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.img} alt="" style={{ width: 40, height: 40, objectFit: 'contain' }} />
                <p style={{ fontSize: 10, color: '#d5d5d5', textAlign: 'center', lineHeight: '13px', whiteSpace: 'pre-line', margin: 0 }}>{b.label}</p>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap', position: 'relative' }}>
            {badges.map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.07)', border: goldBorder, borderRadius: 15, padding: '5px 12px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgShieldIcon} alt="" style={{ width: 9, height: 12 }} />
                <span style={{ fontSize: 12, color: '#e5e7eb', fontWeight: 500 }}>{b.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <button onClick={handleClick} style={{ background: goldGradient, borderRadius: 10, height: 46, width: '100%', border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 600, color: 'black' }}>
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
