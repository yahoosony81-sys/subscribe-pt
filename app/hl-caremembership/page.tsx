import { PromotionHlCaremembership } from "@/components/promotions/promotion-hl-caremembership"
import { LocationSectionHallim } from "@/components/location-section-hallim"
import { RegistrationSectionHallim } from "@/components/registration-section-hallim"
import { FooterHallim } from "@/components/footer-hallim"

export default function HlCareMembershipPage() {
  return (
    <main className="min-h-screen">
      <PromotionHlCaremembership />
      <LocationSectionHallim />
      <RegistrationSectionHallim />
      <FooterHallim />
    </main>
  )
}
