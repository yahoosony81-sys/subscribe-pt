import { PromotionBodychallenge } from "@/components/promotions/promotion-bodychallenge"
import { LocationSectionBodychallenge } from "@/components/location-section-bodychallenge"
import { RegistrationSection } from "@/components/registration-section"
import { FooterBodychallenge } from "@/components/footer-bodychallenge"

export default function PromoBodychallengePage() {
  return (
    <main className="min-h-screen">
      <PromotionBodychallenge />
      <LocationSectionBodychallenge />
      <RegistrationSection title="온라인 참가 신청하기" branch="도남점" hideTimePicker={true} />
      <FooterBodychallenge />
    </main>
  )
}
