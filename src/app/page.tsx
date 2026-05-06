import Navbar from '@/components/shared/Navbar'
import ConvertHeroSection from '@/components/home/ConvertHeroSection'
import BestsellerSection from '@/components/home/BestsellerSection'
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
      </main>
      <StickyCTA />
    </>
  )
}
