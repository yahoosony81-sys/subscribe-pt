import { PromotionTabs } from "@/components/promotions/promotion-tabs"
import { PromotionB } from "@/components/promotions/promotion-b"
import { LocationSection } from "@/components/location-section"
import { RegistrationSection } from "@/components/registration-section"
import { Footer } from "@/components/footer"

export default function PromoBPage() {
  return (
    <main className="min-h-screen">
      <PromotionTabs activeTab="b" />
      <PromotionB />
      <LocationSection />
      <RegistrationSection />
      <Footer />
    </main>
  )
}
