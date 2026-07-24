import { PromotionTabs } from "@/components/promotions/promotion-tabs"
import { PromotionA } from "@/components/promotions/promotion-a"
import { LocationSection } from "@/components/location-section"
import { RegistrationSection } from "@/components/registration-section"
import { Footer } from "@/components/footer"

export default function PromoAPage() {
  return (
    <main className="min-h-screen">
      <PromotionTabs activeTab="a" />
      <PromotionA />
      <LocationSection />
      <RegistrationSection />
      <Footer />
    </main>
  )
}
