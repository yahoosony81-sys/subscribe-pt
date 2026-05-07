import { PromotionBodychallenge } from "@/components/promotions/promotion-bodychallenge"
import { LocationSectionBodychallenge } from "@/components/location-section-bodychallenge"
import { RegistrationSectionBodychallenge } from "@/components/registration-section-bodychallenge"
import { FooterBodychallenge } from "@/components/footer-bodychallenge"

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
