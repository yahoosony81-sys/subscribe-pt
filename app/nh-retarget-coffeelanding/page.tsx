import { PromotionNhRetargetCoffee } from "@/components/promotions/promotion-nh-retarget-coffee"
import { LocationSection } from "@/components/location-section"
import { RegistrationSection } from "@/components/registration-section"
import { Footer } from "@/components/footer"

export default function NhRetargetCoffeeLandingPage() {
  return (
    <main className="min-h-screen">
      {/* 지점 전용 랜딩 — 탭 네비게이션 없음 (다른 지점 페이지 접근 불가) */}
      <PromotionNhRetargetCoffee />
      <LocationSection />
      <RegistrationSection />
      <Footer />
    </main>
  )
}
