'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { Card } from '@/types'

interface Props { card: Card }

export default function ProductClient({ card }: Props) {
  const [selectedColor, setSelectedColor] = useState(0)
  const [qty, setQty] = useState(1)

  const images = [
    card.imgCol,
    card.imgChip,
    card.imgBack,
    ...(card.colors?.map(c => c.img).filter(Boolean) ?? []),
  ].filter(Boolean) as string[]

  const mainImg = images[selectedColor] ?? images[0]
  const discPct = card.disc ?? (card.price && card.dprice
    ? Math.round((1 - card.dprice / card.price) * 100)
    : null)

  return (
    <>
      {/* ── DESKTOP ── */}
      <div className="product-desktop" style={{ display: 'flex', gap: 60, padding: '0 79px 60px' }}>
        {/* Left — image gallery */}
        <div style={{ width: 500, flexShrink: 0 }}>
          <div style={{ width: 500, height: 320, borderRadius: 16, overflow: 'hidden', background: 'linear-gradient(135deg,#1a1a2e,#16213e)', marginBottom: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mainImg} alt={card.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {images.length > 1 && (
            <div style={{ display: 'flex', gap: 10 }}>
              {images.slice(0, 5).map((img, i) => (
                <div key={i} onClick={() => setSelectedColor(i)}
                  style={{ width: 80, height: 54, borderRadius: 8, overflow: 'hidden', cursor: 'pointer', border: `2px solid ${selectedColor === i ? 'white' : 'rgba(255,255,255,0.15)'}`, flexShrink: 0 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right — product info */}
        <div style={{ flex: 1 }}>
          {card.bestseller && (
            <div style={{ display: 'inline-block', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 4, padding: '3px 10px', fontSize: 11, fontWeight: 700, color: '#f59e0b', marginBottom: 12 }}>
              ★ Bestseller
            </div>
          )}
          <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, lineHeight: '38px' }}>{card.name}</h1>
          {card.desc && <p style={{ fontSize: 15, color: '#9ca3af', marginBottom: 20, lineHeight: '24px' }}>{card.desc}</p>}

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 24 }}>
            <span style={{ fontSize: 32, fontWeight: 800 }}>₹{(card.dprice ?? card.price).toLocaleString('en-IN')}</span>
            {card.dprice && (
              <>
                <span style={{ fontSize: 18, color: '#555', position: 'relative' }}>
                  ₹{card.price.toLocaleString('en-IN')}
                  <span style={{ position: 'absolute', height: 1.5, background: '#888', width: '110%', top: '50%', left: '-5%', display: 'block' }} />
                </span>
                {discPct && <span style={{ fontSize: 14, fontWeight: 700, color: '#22c55e' }}>{discPct}% OFF</span>}
              </>
            )}
          </div>

          {/* Color swatches */}
          {card.colors && card.colors.length > 0 && (
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 13, color: '#9ca3af', marginBottom: 10 }}>Color: <strong style={{ color: 'white' }}>{card.colors[selectedColor]?.name ?? ''}</strong></p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {card.colors.map((c, i) => (
                  <div key={i} onClick={() => setSelectedColor(i)}
                    title={c.name}
                    style={{ width: 28, height: 28, borderRadius: '50%', background: c.hex, cursor: 'pointer', border: selectedColor === i ? '3px solid white' : '2px solid rgba(255,255,255,0.2)', boxSizing: 'border-box' }} />
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {card.features && card.features.length > 0 && (
            <ul style={{ marginBottom: 24, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {card.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: '#d1d5db' }}>
                  <span style={{ color: '#22c55e', flexShrink: 0, marginTop: 1 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          )}

          {/* Qty + Buy */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, overflow: 'hidden' }}>
              <button onClick={() => setQty(q => Math.max(1, q - 1))}
                style={{ width: 40, height: 48, background: 'none', border: 'none', color: 'white', fontSize: 20, cursor: 'pointer' }}>−</button>
              <span style={{ width: 40, textAlign: 'center', fontSize: 16 }}>{qty}</span>
              <button onClick={() => setQty(q => q + 1)}
                style={{ width: 40, height: 48, background: 'none', border: 'none', color: 'white', fontSize: 20, cursor: 'pointer' }}>+</button>
            </div>
            <Link href="#" style={{ flex: 1, height: 48, background: 'white', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: 16, fontWeight: 700, color: 'black' }}>
              Buy Now
            </Link>
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="product-mobile" style={{ display: 'none', paddingBottom: 100 }}>
        {/* Full width image */}
        <div style={{ width: '100%', aspectRatio: '16/10', background: 'linear-gradient(135deg,#1a1a2e,#16213e)', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mainImg} alt={card.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '12px 16px', scrollbarWidth: 'none' }}>
            {images.slice(0, 6).map((img, i) => (
              <div key={i} onClick={() => setSelectedColor(i)}
                style={{ width: 64, height: 44, borderRadius: 6, overflow: 'hidden', flexShrink: 0, border: `2px solid ${selectedColor === i ? 'white' : 'rgba(255,255,255,0.15)'}`, cursor: 'pointer' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        )}

        {/* Product info */}
        <div style={{ padding: '16px 20px 0' }}>
          {card.bestseller && (
            <div style={{ display: 'inline-block', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 4, padding: '3px 10px', fontSize: 11, fontWeight: 700, color: '#f59e0b', marginBottom: 10 }}>
              ★ Bestseller
            </div>
          )}
          <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, lineHeight: '28px' }}>{card.name}</h1>
          {card.desc && <p style={{ fontSize: 14, color: '#9ca3af', marginBottom: 16, lineHeight: '22px' }}>{card.desc}</p>}

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 20 }}>
            <span style={{ fontSize: 26, fontWeight: 800 }}>₹{(card.dprice ?? card.price).toLocaleString('en-IN')}</span>
            {card.dprice && (
              <>
                <span style={{ fontSize: 15, color: '#555', position: 'relative' }}>
                  ₹{card.price.toLocaleString('en-IN')}
                  <span style={{ position: 'absolute', height: 1.5, background: '#888', width: '110%', top: '50%', left: '-5%', display: 'block' }} />
                </span>
                {discPct && <span style={{ fontSize: 13, fontWeight: 700, color: '#22c55e' }}>{discPct}% OFF</span>}
              </>
            )}
          </div>

          {/* Color swatches */}
          {card.colors && card.colors.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 13, color: '#9ca3af', marginBottom: 10 }}>Color: <strong style={{ color: 'white' }}>{card.colors[selectedColor]?.name ?? ''}</strong></p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {card.colors.map((c, i) => (
                  <div key={i} onClick={() => setSelectedColor(i)}
                    title={c.name}
                    style={{ width: 32, height: 32, borderRadius: '50%', background: c.hex, cursor: 'pointer', border: selectedColor === i ? '3px solid white' : '2px solid rgba(255,255,255,0.2)', boxSizing: 'border-box' }} />
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {card.features && card.features.length > 0 && (
            <ul style={{ marginBottom: 20, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {card.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: '#d1d5db' }}>
                  <span style={{ color: '#22c55e', flexShrink: 0, marginTop: 1 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Fixed bottom buy bar */}
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '12px 20px', display: 'flex', gap: 12, alignItems: 'center', zIndex: 50 }}>
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, overflow: 'hidden', flexShrink: 0 }}>
            <button onClick={() => setQty(q => Math.max(1, q - 1))}
              style={{ width: 36, height: 44, background: 'none', border: 'none', color: 'white', fontSize: 20, cursor: 'pointer' }}>−</button>
            <span style={{ width: 32, textAlign: 'center', fontSize: 15 }}>{qty}</span>
            <button onClick={() => setQty(q => q + 1)}
              style={{ width: 36, height: 44, background: 'none', border: 'none', color: 'white', fontSize: 20, cursor: 'pointer' }}>+</button>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 11, color: '#9ca3af', marginBottom: 2 }}>Total</p>
            <p style={{ fontSize: 18, fontWeight: 800 }}>₹{((card.dprice ?? card.price) * qty).toLocaleString('en-IN')}</p>
          </div>
          <Link href="#" style={{ height: 44, padding: '0 28px', background: 'white', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: 15, fontWeight: 700, color: 'black', flexShrink: 0 }}>
            Buy Now
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .product-desktop { display: none !important; }
          .product-mobile { display: block !important; }
          .product-mobile ::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </>
  )
}
