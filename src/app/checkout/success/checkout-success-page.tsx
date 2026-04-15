'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function SuccessPage() {
  const [order, setOrder] = useState<any>(null)

  useEffect(() => {
    try {
      const o = sessionStorage.getItem('nz_last_order')
      if (o) setOrder(JSON.parse(o))
    } catch {}
  }, [])

  return (
    <div style={{ background: '#080808', minHeight: '100vh', color: 'white', fontFamily: 'Inter, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ maxWidth: 420, width: '100%', textAlign: 'center' }}>

        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(34,197,94,0.12)', border: '2px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 36 }}>
          ✓
        </div>

        <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>Order Placed! 🎉</h1>
        <p style={{ fontSize: 14, color: '#9ca3af', marginBottom: 28, lineHeight: '22px' }}>
          Thanks{order?.user?.name ? `, ${order.user.name}` : ''}! We'll send updates to +91 {order?.user?.phone}.
        </p>

        {order && (
          <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 20, marginBottom: 24, textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
              <span style={{ fontSize: 11, color: '#6b7280', fontWeight: 600, letterSpacing: 0.5 }}>ORDER ID</span>
              <span style={{ fontSize: 11, color: '#9ca3af', fontFamily: 'monospace' }}>{order.id}</span>
            </div>
            {[
              { label: 'Product', value: order.product?.name },
              { label: 'Service', value: order.flow === 'convert' ? '🔄 Convert to Metal' : '✨ New NeoZAP Card' },
              { label: 'Payment', value: order.payment === 'cod' ? '💵 Cash on Delivery' : '💳 Online' },
              { label: 'Deliver to', value: `${order.delivery?.city}, ${order.delivery?.pincode}` },
            ].map(row => (
              <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, gap: 12 }}>
                <span style={{ fontSize: 13, color: '#6b7280', flexShrink: 0 }}>{row.label}</span>
                <span style={{ fontSize: 13, fontWeight: 500, textAlign: 'right' }}>{row.value}</span>
              </div>
            ))}
            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '12px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 15, fontWeight: 700 }}>Total</span>
              <span style={{ fontSize: 15, fontWeight: 800, color: '#22c55e' }}>₹{order.total?.toLocaleString('en-IN')}</span>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Link href="/collection" style={{ height: 50, background: 'white', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: 15, fontWeight: 700, color: 'black' }}>
            Continue Shopping
          </Link>
          <Link href="/" style={{ height: 44, background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: 14, color: '#9ca3af' }}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
