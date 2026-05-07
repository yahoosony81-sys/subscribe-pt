import { Metadata } from "next"
import { PromotionBodychallenge } from "@/components/promotions/promotion-bodychallenge"
import { LocationSectionBodychallenge } from "@/components/location-section-bodychallenge"
import { RegistrationSectionBodychallenge } from "@/components/registration-section-bodychallenge"
import { FooterBodychallenge } from "@/components/footer-bodychallenge"

export const metadata: Metadata = {
  title: "마인드휘트니스 프로모션",
  description: "건강한 변화의 시작, 마인드휘트니스 바디챌린지 특별 프로모션을 확인해보세요.",
  openGraph: {
    title: "마인드휘트니스 프로모션",
    description: "건강한 변화의 시작, 마인드휘트니스 바디챌린지 특별 프로모션을 확인해보세요.",
  }
}

export default function PromoBodychallengePage() {
  return (
    <main className="min-h-screen">
      <PromotionBodychallenge />
      <LocationSectionBodychallenge />
      <RegistrationSectionBodychallenge title="온라인 참가 신청하기" branch="도남점" hideTimePicker={true} />
      <FooterBodychallenge />
    </main>
  )
}
