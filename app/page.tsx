import { HeroSection } from "@/components/hero-section"
import { BiographySection } from "@/components/biography-section"
import { PascalLanguageSection } from "@/components/pascal-language-section"
import { TimelineSection } from "@/components/timeline-section"
import { LegacySection } from "@/components/legacy-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BiographySection />
      <TimelineSection />
      <PascalLanguageSection />
      <LegacySection />
      <Footer />
    </main>
  )
}
