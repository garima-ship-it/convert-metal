export default function RewardsSection() {
  return (
    <section style={{ background: '#080808', width: '100%' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/home/rewardsBanner.png"
        alt="Most Rewarding Payment Card"
        className="rewards-desktop"
        style={{ width: '100%', display: 'block' }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/home/rewardsBgMobile.png"
        alt="Most Rewarding Payment Card"
        className="rewards-mobile"
        style={{ width: '100%', display: 'block' }}
      />
      <style>{`
        @media (min-width: 769px) {
          .rewards-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          .rewards-desktop { display: none !important; }
        }
      `}</style>
    </section>
  )
}
