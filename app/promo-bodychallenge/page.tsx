import { PromotionBodychallenge } from "@/components/promotions/promotion-bodychallenge"
import { LocationSection } from "@/components/location-section"
import { RegistrationSection } from "@/components/registration-section"
import { Footer } from "@/components/footer"

export default function PromoBodychallengePage() {
  return (
    <main className="min-h-screen">
      <PromotionBodychallenge />
      <LocationSection />
      <RegistrationSection title="온라인 참가 신청하기" branch="도남점" hideTimePicker={true} />
      <Footer />
    </main>
  )
}
