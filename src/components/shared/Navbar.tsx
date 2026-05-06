'use client'
import Link from 'next/link'

interface NavbarProps {
  buyHref?: string
}

export default function Navbar({ buyHref = '/collection' }: NavbarProps) {
  return (
    <>
      {/* ── DESKTOP NAVBAR ── */}
      <nav className="nav-desktop" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 60px', height: 72, background: 'black',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0px 3px 100px 0px rgba(252,219,133,0.55)',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <Link href="/" style={{ fontSize: 25, fontWeight: 800, background: 'linear-gradient(135deg, #ffe38d 0%, #f3c770 38%, #e7ac53 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none' }}>
          NeoZAP
        </Link>
        <Link href={buyHref}
          onClick={() => { if (typeof window !== 'undefined') sessionStorage.setItem('nz_flow', 'convert') }}
          style={{ background: 'white', borderRadius: 6, height: 33, padding: '0 20px', display: 'flex', alignItems: 'center', textDecoration: 'none', fontSize: 14, fontWeight: 500, color: 'black', whiteSpace: 'nowrap' }}>
          Explore Design Collection
        </Link>
      </nav>

      {/* ── MOBILE NAVBAR ── */}
      <nav className="nav-mobile" style={{
        display: 'none', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px', height: 60, background: 'black',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0px 3px 60px 0px rgba(252,219,133,0.4)',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <Link href="/" style={{ fontSize: 20, fontWeight: 800, background: 'linear-gradient(135deg, #ffe38d 0%, #f3c770 38%, #e7ac53 75%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none' }}>
          NeoZAP
        </Link>
        <Link href={buyHref}
          onClick={() => { if (typeof window !== 'undefined') sessionStorage.setItem('nz_flow', 'convert') }}
          style={{ background: 'white', borderRadius: 6, height: 30, padding: '0 12px', display: 'flex', alignItems: 'center', textDecoration: 'none', fontSize: 12, fontWeight: 500, color: 'black', whiteSpace: 'nowrap' }}>
          Explore Designs
        </Link>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
