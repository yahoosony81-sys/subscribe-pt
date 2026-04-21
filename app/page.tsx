import { HeroSection } from "@/components/hero-section"
import { TargetSection } from "@/components/target-section"
import { LocationSection } from "@/components/location-section"
import { RegistrationSection } from "@/components/registration-section"
import { PaymentSection } from "@/components/payment-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TargetSection />
      <section className="relative w-full overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20260419_111452400_07-Thl14H4NyLuq4UiwOzHgo4LKjkL8zT.png"
          alt="건강을 위한 첫걸음을 구준한 운동을 위한 시작 마인드에서 함께 하겠습니다"
          className="h-auto w-full object-cover"
        />
      </section>
      <LocationSection />
      <RegistrationSection />
      <PaymentSection />
      <Footer />
    </main>
  )
}
