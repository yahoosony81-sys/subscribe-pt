import { PromotionTabs } from "@/components/promotions/promotion-tabs"
import { PromotionC } from "@/components/promotions/promotion-c"
import { LocationSection } from "@/components/location-section"
import { RegistrationSection } from "@/components/registration-section"
import { Footer } from "@/components/footer"

export default function PromoCPage() {
  return (
    <main className="min-h-screen">
      <PromotionTabs activeTab="c" />
      <PromotionC />
      <LocationSection />
      <RegistrationSection />
      <Footer />
    </main>
  )
}
