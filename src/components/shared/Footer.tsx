import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#040404', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '48px 60px 32px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>

        {/* Left — Logo + description */}
        <div style={{ maxWidth: 360 }}>
          <p style={{ fontSize: 22, fontWeight: 800, background: 'linear-gradient(95.32deg,rgb(237,237,239) 3.75%,rgb(97,95,105) 95.24%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 10 }}>
            NeoZAP
          </p>
          <p style={{ fontSize: 13, color: '#6b7280', lineHeight: '22px' }}>
            India&apos;s first prepaid metal card. Premium quality, unlimited cashback, and luxury finishes — built for those who demand more.
          </p>
        </div>

        {/* Right — 3 links horizontal */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: 36, alignItems: 'center' }}>
          <Link href="/collection" style={{ fontSize: 14, color: '#d1d5db', textDecoration: 'none', fontWeight: 500, whiteSpace: 'nowrap' }}>
            Collection
          </Link>
          <Link href="/terms" style={{ fontSize: 14, color: '#d1d5db', textDecoration: 'none', fontWeight: 500, whiteSpace: 'nowrap' }}>
            Terms &amp; Conditions
          </Link>
          <Link href="/contact" style={{ fontSize: 14, color: '#d1d5db', textDecoration: 'none', fontWeight: 500, whiteSpace: 'nowrap' }}>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: 12, color: '#4b5563' }}>© {new Date().getFullYear()} NeoZAP. All rights reserved.</p>
        <p style={{ fontSize: 12, color: '#374151' }}>Powered by NeoFinity Services Private Limited</p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer { padding: 36px 20px 24px !important; }
          footer > div:first-child { flex-direction: column !important; gap: 28px !important; align-items: flex-start !important; }
          footer > div:first-child > div:last-child { flex-direction: column !important; gap: 16px !important; }
          footer > div:last-child { flex-direction: column !important; gap: 8px !important; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  )
}
