import Navbar from '@/components/shared/Navbar'
import ConvertHeroSection from '@/components/home/ConvertHeroSection'
import BestsellerSection from '@/components/home/BestsellerSection'
import SecurityFeaturesSection from '@/components/home/SecurityFeaturesSection'
import SecuritySection from '@/components/home/SecuritySection'
import FAQSection from '@/components/home/FAQSection'
import HomeFooter from '@/components/home/HomeFooter'
import StickyCTA from '@/components/shared/StickyCTA'
import { fetchCatalog } from '@/lib/data'

export default async function HomePage() {
  const catalog = await fetchCatalog()
  const cards = catalog?.cards ?? []

  return (
    <>
      <Navbar buyHref="/collection" />
      <main>
        <ConvertHeroSection />
        <BestsellerSection cards={cards} />
        <SecurityFeaturesSection />
        <SecuritySection />
        <FAQSection />
      </main>
      <HomeFooter />
      <StickyCTA />
    </>
  )
}
