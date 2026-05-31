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
        googleSheetUrl="https://script.google.com/macros/s/AKfycbwU7KLOJ8lko7i0KE8KLXY3X1CEGXeB4ONf9-8uYTGL3YrM_4oPIbcOD4IgyFdp_MJ4/exec"
        sheetName="한림점 버닝케어" // 구글 시트 하단의 실제 탭(페이지) 이름과 동일하게 변경해주세요!
      />
      <FooterHallim />
    </main>
  )
}
