import { PromotionNhPainMembership } from "@/components/promotions/promotion-nh-pain-membership"
import { LocationSectionNohyeong } from "@/components/location-section-nohyeong"
import { RegistrationSectionNohyeong } from "@/components/registration-section-nohyeong"
import { FooterNohyeong } from "@/components/footer-nohyeong"

export default function NhPainMembershipPage() {
  return (
    <main className="min-h-screen">
      <PromotionNhPainMembership />
      <LocationSectionNohyeong />
      <RegistrationSectionNohyeong title="통증 케어 멤버십 체험 신청" />
      <FooterNohyeong />
    </main>
  )
}
