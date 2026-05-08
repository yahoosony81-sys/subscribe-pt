import { PromotionHlBurningCare } from "@/components/promotions/promotion-hl-burning-care"
import { LocationSectionHallim } from "@/components/location-section-hallim"
import { RegistrationSectionHallim } from "@/components/registration-section-hallim"
import { FooterHallim } from "@/components/footer-hallim"

export default function HlBurningCarePage() {
  return (
    <main className="min-h-screen">
      <PromotionHlBurningCare />
      <LocationSectionHallim />
      <RegistrationSectionHallim title="케어 멤버십 무료 상담 신청" />
      <FooterHallim />
    </main>
  )
}
