import { PromotionHlBurningCare } from "@/components/promotions/promotion-hl-burning-care"
import { LocationSectionHallim } from "@/components/location-section-hallim"
import { RegistrationSectionHallim } from "@/components/registration-section-hallim"
import { FooterHallim } from "@/components/footer-hallim"

export default function HlBurningCarePage() {
  return (
    <main className="min-h-screen">
      <PromotionHlBurningCare />
      <LocationSectionHallim />
      <RegistrationSectionHallim
        title="케어 멤버십 체험 신청"
        googleSheetUrl="https://script.google.com/macros/s/AKfycbxLXeaQDRUNllYG0-FpzvIVqy5m9lKfkz0Eq5HcmZsPQ1ZWkm1K55Xv_S1-zfJRPH4j/exec"
        sheetName="한림점버닝케어"
      />
      <FooterHallim />
    </main>
  )
}
