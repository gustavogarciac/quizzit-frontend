import { FeaturesSection } from './_components/features-section'
import { Footer } from './_components/footer/footer'
import { HeroSection } from './_components/hero-section'

export default function Home() {
  return (
    <main className="border-bottom px-1.5 sm:px-4">
      {/* Hero Section */}
      <HeroSection />

      <FeaturesSection />

      <Footer />
    </main>
  )
}
