import { PromotionTabs } from "@/components/promotions/promotion-tabs"
import { PromotionD } from "@/components/promotions/promotion-d"
import { LocationSection } from "@/components/location-section"
import { RegistrationSection } from "@/components/registration-section"
import { Footer } from "@/components/footer"

export default function PromoDPage() {
  return (
    <main className="min-h-screen">
      <PromotionTabs activeTab="d" />
      <PromotionD />
      <LocationSection />
      <RegistrationSection />
      <Footer />
    </main>
  )
}
