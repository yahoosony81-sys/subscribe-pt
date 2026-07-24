import { PromotionMgPromtion } from "@/components/promotions/promotion-mg-promtion"
import { LocationSectionMyeongji } from "@/components/location-section-myeongji"
import { RegistrationSectionMyeongji } from "@/components/registration-section-myeongji"
import { FooterMyeongji } from "@/components/footer-myeongji"

export default function MgPromotionPage() {
  return (
    <main className="min-h-screen">
      <PromotionMgPromtion />
      <LocationSectionMyeongji />
      <RegistrationSectionMyeongji title="무료체험 신청하기" />
      <FooterMyeongji />
    </main>
  )
}
