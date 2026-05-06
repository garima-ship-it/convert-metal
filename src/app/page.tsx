import Navbar from '@/components/shared/Navbar'
import ConvertHeroSection from '@/components/home/ConvertHeroSection'
import { fetchCatalog } from '@/lib/data'

export default async function HomePage() {
  const catalog = await fetchCatalog()

  return (
    <>
      <Navbar buyHref="/collection" />
      <main>
        <ConvertHeroSection />
      </main>
    </>
  )
}
