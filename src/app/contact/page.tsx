import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us – NeoZAP',
  description: 'Get in touch with NeoZAP support team.',
}

const contacts = [
  {
    icon: '✉️',
    type: 'Email',
    value: 'support@neofinity.in',
    sub: 'For general inquiries and support',
    href: 'mailto:support@neofinity.in',
  },
  {
    icon: '📞',
    type: 'Phone',
    value: '+91 99712 44699',
    sub: 'Available during business hours',
    href: 'tel:+919971244699',
  },
  {
    icon: '💬',
    type: 'WhatsApp',
    value: '+91 99712 44699',
    sub: 'Quick responses via WhatsApp',
    href: 'https://wa.me/919971244699',
  },
  {
    icon: '📸',
    type: 'Instagram',
    value: '@theneofinity',
    sub: 'Follow us on Instagram',
    href: 'https://www.instagram.com/theneofinity?igsh=MXhvNDR4ZnkycTEyZA==',
  },
]

export default function ContactPage() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh', color: 'white', fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '16px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: '#080808', zIndex: 10 }}>
        <Link href="/" style={{ fontSize: 20, fontWeight: 800, background: 'linear-gradient(95.32deg,rgb(237,237,239) 3.75%,rgb(97,95,105) 95.24%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none' }}>
          NeoZAP
        </Link>
        <Link href="/" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}>← Back to Home</Link>
      </div>

      <div style={{ maxWidth: 600, margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Contact Us</h1>
        <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 40, lineHeight: '22px' }}>
          Have a question or need help with your order? We&apos;re here for you.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {contacts.map((c, i) => (
            <a key={i} href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                {c.icon}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 12, color: '#6b7280', marginBottom: 2, fontWeight: 500 }}>{c.type}</p>
                <p style={{ fontSize: 15, fontWeight: 600, color: 'white', marginBottom: 2 }}>{c.value}</p>
                <p style={{ fontSize: 12, color: '#4b5563' }}>{c.sub}</p>
              </div>
              <span style={{ color: '#4b5563', fontSize: 18 }}>→</span>
            </a>
          ))}
        </div>

        <div style={{ marginTop: 40, background: '#111', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
          <p style={{ fontSize: 13, color: '#6b7280', lineHeight: '22px' }}>
            <strong style={{ color: '#9ca3af' }}>NeoFinity Services Private Limited</strong><br />
            1094P, Oahfeo Workspaces Frappe, Sector 46,<br />
            Gurgaon, Haryana, 122001
          </p>
        </div>
      </div>
    </div>
  )
}
