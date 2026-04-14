'use client'
import Link from 'next/link'
import { useState } from 'react'

interface NavbarProps {
  buyHref?: string
}

export default function Navbar({ buyHref = '/collection' }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ── DESKTOP NAVBAR ── */}
      <nav className="navbar nav-desktop">
        <Link href="/" className="nav-logo">NeoZAP</Link>
        <Link href="/collection" className="nav-link">Collection</Link>
        <Link href={buyHref} className="nav-buy-btn">Buy Now</Link>
      </nav>

      {/* ── MOBILE NAVBAR ── */}
      <nav className="nav-mobile-bar" style={{ display: 'none', position: 'sticky', top: 0, zIndex: 100, background: '#040404', borderBottom: '0.3px solid rgba(255,255,255,0.06)', height: 60, alignItems: 'center', padding: '0 20px' }}>
        {/* Hamburger — left */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', flexDirection: 'column', gap: 5 }}
          aria-label="Menu">
          <div style={{ width: 22, height: 2, background: 'white', borderRadius: 2 }} />
          <div style={{ width: 22, height: 2, background: 'white', borderRadius: 2 }} />
          <div style={{ width: 22, height: 2, background: 'white', borderRadius: 2 }} />
        </button>

        {/* NeoZAP — center */}
        <Link href="/" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontSize: 20, fontWeight: 700, background: 'linear-gradient(95.32deg,rgb(237,237,239) 3.75%,rgb(97,95,105) 95.24%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none' }}>
          NeoZAP
        </Link>

        {/* Explore Now — right */}
        <Link href={buyHref} style={{ marginLeft: 'auto', background: 'white', borderRadius: 6, height: 30, padding: '0 14px', display: 'flex', alignItems: 'center', textDecoration: 'none', fontSize: 12, fontWeight: 600, color: 'black', whiteSpace: 'nowrap' }}>
          Explore Now
        </Link>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 60, zIndex: 99 }}
          className="nav-mobile-menu">
          <Link href="/collection" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: 15 }}
            onClick={() => setMenuOpen(false)}>Collection</Link>
          <Link href={buyHref} style={{ color: '#d1d5db', textDecoration: 'none', fontSize: 15 }}
            onClick={() => setMenuOpen(false)}>Explore Now</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-bar { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-bar { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  )
}
