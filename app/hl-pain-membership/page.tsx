import { PromotionHlPainMembership } from "@/components/promotions/promotion-hl-pain-membership"
import { LocationSectionHallim } from "@/components/location-section-hallim"
import { RegistrationSectionHallim } from "@/components/registration-section-hallim"
import { FooterHallim } from "@/components/footer-hallim"

export default function HlPainMembershipPage() {
  return (
    <main className="min-h-screen">
      <PromotionHlPainMembership />
      <LocationSectionHallim />
      <RegistrationSectionHallim title="통증 케어 멤버십 체험 신청" />
      <FooterHallim />
    </main>
  )
}
