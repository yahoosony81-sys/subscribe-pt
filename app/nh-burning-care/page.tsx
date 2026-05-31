import { PromotionNhBurningCare } from "@/components/promotions/promotion-nh-burning-care"
import { LocationSectionNohyeong } from "@/components/location-section-nohyeong"
import { RegistrationSectionNohyeong } from "@/components/registration-section-nohyeong"
import { FooterNohyeong } from "@/components/footer-nohyeong"

export default function NhBurningCarePage() {
  return (
    <main className="min-h-screen">
      <PromotionNhBurningCare />
      <LocationSectionNohyeong />
      <RegistrationSectionNohyeong 
        title="케어 멤버십 체험 신청" 
        googleSheetUrl="https://script.google.com/macros/s/AKfycbzYNXHxm0LbD-w60SKZgIFce4IGxvlhhFnS-wcc8GXj7d5H2ehZ2WwDRHV0ChqMYH5p/exec"
      />
      <FooterNohyeong />
    </main>
  )
}
