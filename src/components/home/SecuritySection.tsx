import { ASSETS } from '@/lib/data'

export default function SecuritySection() {
  return (
    <>
      {/* ── DESKTOP ── */}
      <section className="sec-desktop" style={{ background: 'black', width: '100%', height: 565, overflow: 'hidden', position: 'relative' }}>
        <p style={{ position: 'absolute', left: 79, top: 51, fontSize: 54, fontWeight: 700, lineHeight: '58px', color: 'white', width: 666 }}>
          Unbreakable standard of security &amp; convenience
        </p>
        <div style={{ position: 'absolute', left: 79, top: 217, width: 666, height: 1 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ASSETS.secDivider} alt="" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ASSETS.securityImg} alt="Security features"
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 245, width: 1281.5, height: 264.5, objectFit: 'cover' }} />
      </section>

      {/* ── MOBILE ── */}
      <section className="sec-mobile" style={{ display: 'none', background: 'black', padding: '40px 0 40px' }}>
        <p style={{ fontSize: 28, fontWeight: 700, lineHeight: '36px', color: 'white', textAlign: 'center', marginBottom: 24, padding: '0 20px' }}>
          Unbreakable standard of security &amp; convenience
        </p>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.2)', margin: '0 20px 28px' }} />

        {/* Swipeable boxes — just the uploaded images */}
        <div style={{
          display: 'flex',
          gap: 16,
          overflowX: 'auto',
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 8,
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
        } as React.CSSProperties}>
          {[ASSETS.secBox1, ASSETS.secBox2, ASSETS.secBox3, ASSETS.secBox4].map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} alt={`Security feature ${i + 1}`}
              style={{ flexShrink: 0, width: 220, height: 'auto', borderRadius: 8, display: 'block' }} />
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .sec-desktop { display: none !important; }
          .sec-mobile { display: block !important; }
          .sec-mobile ::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </>
  )
}
