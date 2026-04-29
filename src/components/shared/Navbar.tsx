'use client'
import Link from 'next/link'

interface NavbarProps {
  buyHref?: string
}

export default function Navbar({ buyHref = '/collection' }: NavbarProps) {
  return (
    <>
      {/* ── DESKTOP NAVBAR ── */}
      <nav className="navbar nav-desktop" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 60px', height: 70, background: '#040404',
        borderBottom: '0.3px solid rgba(255,255,255,0.06)',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <Link href="/" style={{ fontSize: 22, fontWeight: 800, background: 'linear-gradient(95.32deg,rgb(237,237,239) 3.75%,rgb(97,95,105) 95.24%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none' }}>
          NeoZAP
        </Link>
        <Link href={buyHref}
          onClick={() => { if (typeof window !== 'undefined') sessionStorage.setItem('nz_flow', 'neozap') }}
          style={{ background: 'white', borderRadius: 8, height: 40, padding: '0 20px', display: 'flex', alignItems: 'center', textDecoration: 'none', fontSize: 14, fontWeight: 600, color: 'black', whiteSpace: 'nowrap' }}>
          Explore Design Collection
        </Link>
      </nav>

      {/* ── MOBILE NAVBAR ── */}
      <nav className="nav-mobile-bar" style={{
        display: 'none', position: 'sticky', top: 0, zIndex: 100,
        background: '#040404', borderBottom: '0.3px solid rgba(255,255,255,0.06)',
        height: 60, alignItems: 'center', justifyContent: 'space-between', padding: '0 20px',
      }}>
        <Link href="/" style={{ fontSize: 20, fontWeight: 700, background: 'linear-gradient(95.32deg,rgb(237,237,239) 3.75%,rgb(97,95,105) 95.24%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none' }}>
          NeoZAP
        </Link>
        <Link href={buyHref}
          onClick={() => { if (typeof window !== 'undefined') sessionStorage.setItem('nz_flow', 'neozap') }}
          style={{ background: 'white', borderRadius: 6, height: 32, padding: '0 14px', display: 'flex', alignItems: 'center', textDecoration: 'none', fontSize: 12, fontWeight: 600, color: 'black', whiteSpace: 'nowrap' }}>
          Explore Design Collection
        </Link>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-bar { display: flex !important; }
        }
      `}</style>
    </>
  )
}
