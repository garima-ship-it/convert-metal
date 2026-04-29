import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions – NeoZAP',
  description: 'Terms and Conditions for NeoFinity Metal Card service.',
}

const sections = [
  {
    title: '1. Nature of Service',
    content: `NeoFinity provides a platform to allow customers to convert their existing debit card, credit card, or prepaid card into a metal card. NeoFinity is not a bank, card issuer, financial institution, or payment system provider. NeoFinity only acts as a marketing, distribution, and customer onboarding partner for the metal card conversion service. The manufacturing, customization, chip transfer (if applicable), and delivery of the metal card are handled by Carbon Craft. The metal card is linked to your existing card account; NeoFinity does not issue any new card or credit line.`,
  },
  {
    title: '2. Customer Responsibility',
    content: `You confirm that you are the authorized holder of the card submitted for metal conversion. You are responsible for ensuring that the card submitted is active and valid. You are solely responsible for the usage of the metal card after delivery. You agree that the details provided by you (name, card design, shipping address, etc.) are accurate. NeoFinity and Carbon Craft are not responsible for any issues arising due to incorrect information provided by you.`,
  },
  {
    title: '3. Limitation of Liability',
    content: `NeoFinity shall not be responsible for any transaction failure, decline, or authorization issue on the metal card; any banking, payment network, or POS machine related issue; any fraud, misuse, or illegal use of the card after delivery; or any delay caused by manufacturing or logistics partners. NeoFinity's liability is limited strictly to facilitating the order and customer support coordination. Carbon Craft is responsible only for the manufacturing quality and physical delivery of the metal card. Under no circumstances shall NeoFinity be liable for any indirect, incidental, or consequential damages.`,
  },
  {
    title: '4. Fees, Payments & Refunds',
    content: `The metal card conversion fee must be paid in advance. Once the order is placed and the conversion process has started, the order cannot be cancelled and the amount is non-refundable. Prices are subject to change without prior notice. Any taxes, shipping charges, or customization charges shall be charged additionally where applicable. NeoFinity is not responsible for payment failures caused by payment gateways, banks, or network issues.`,
  },
  {
    title: '5. Shipping & Delivery',
    content: `Delivery timelines are indicative and may vary. NeoFinity is not responsible for delays caused by logistics partners or manufacturing delays. Risk of loss or damage passes to the customer upon dispatch of the product.`,
  },
  {
    title: '6. Use of Metal Card',
    content: `The metal card is a converted version of your existing card and works on the same underlying bank account/credit/prepaid account. Some POS machines may not support metal cards due to terminal limitations; NeoFinity and Carbon Craft are not responsible for such compatibility issues. You must comply with your bank's terms and conditions regarding card usage. Any damage caused to POS machines due to improper use of metal cards shall be the responsibility of the user.`,
  },
  {
    title: '7. Third-Party Services',
    content: `This service involves third-party partners including Carbon Craft (manufacturing & fulfillment partner), logistics providers, and payment gateways. NeoFinity shall not be responsible for the actions, errors, delays, or deficiencies of third-party service providers.`,
  },
  {
    title: '8. Intellectual Property',
    content: `Any design, logo, artwork, or content submitted by you remains your property. By submitting content/design, you grant NeoFinity and Carbon Craft a limited right to use it only for the purpose of manufacturing and delivering your metal card. You are responsible for ensuring that submitted designs do not violate any copyright, trademark, or third-party rights.`,
  },
  {
    title: '9. Disclaimer',
    content: `NeoFinity is not affiliated with any bank, card network, or government authority. NeoFinity does not issue credit cards, debit cards, or prepaid cards. The metal card is only a converted form of an existing card and NeoFinity does not provide any banking or financial services through this product. NeoFinity shall not be responsible for any financial transactions carried out using the metal card.`,
  },
  {
    title: '10. Accuracy of Information',
    content: `NeoFinity does not guarantee that the information on the website is accurate, complete, or current. We reserve the right to correct any errors without prior notice.`,
  },
  {
    title: '11. Indemnification',
    content: `You agree to indemnify and hold harmless NeoFinity and Carbon Craft from any claims, damages, losses, liabilities, or expenses arising out of misuse of the metal card, incorrect information provided by you, violation of any law or third-party rights, or unauthorized use of any card submitted for conversion.`,
  },
  {
    title: '12. Termination',
    content: `We reserve the right to refuse or cancel any order if we suspect fraud, unauthorized usage, or incorrect information.`,
  },
  {
    title: '13. Governing Law & Jurisdiction',
    content: `These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts located in Gurugram.`,
  },
  {
    title: '14. Changes to Terms',
    content: `NeoFinity reserves the right to update or modify these Terms at any time without prior notice. Updated Terms will be posted on the website.`,
  },
  {
    title: '15. Contact Information',
    content: `For any queries regarding these Terms, please contact NeoFinity Services Private Limited at support@neofinity.in or visit https://metal.neofinity.in/`,
  },
]

export default function TermsPage() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh', color: 'white', fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '16px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: '#080808', zIndex: 10 }}>
        <Link href="/" style={{ fontSize: 20, fontWeight: 800, background: 'linear-gradient(95.32deg,rgb(237,237,239) 3.75%,rgb(97,95,105) 95.24%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none' }}>
          NeoZAP
        </Link>
        <Link href="/" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}>← Back to Home</Link>
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Terms &amp; Conditions</h1>
        <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 8 }}>NeoFinity Metal Card Service</p>
        <p style={{ fontSize: 13, color: '#4b5563', marginBottom: 40 }}>
          For the purpose of these Terms, "NeoFinity", "we", "us", "our" refer to NeoFinity Services Private Limited, registered at 1094P, Oahfeo Workspaces Frappe, Sector 46, Gurgaon, Haryana, 122001.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {sections.map((s, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 32 }}>
              <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: 'white' }}>{s.title}</h2>
              <p style={{ fontSize: 14, color: '#9ca3af', lineHeight: '24px' }}>{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
