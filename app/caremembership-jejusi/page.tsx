import { CareMembershipJejusiLanding } from "./care-membership-jejusi-landing"
import { LocationSectionNohyeong } from "@/components/location-section-nohyeong"
import { RegistrationSectionNohyeong } from "@/components/registration-section-nohyeong"
import { FooterNohyeong } from "@/components/footer-nohyeong"

export const metadata = {
  title: "마인드휘트니스 노형점 | 케어 멤버십",
  description: "이젠 헬스/PT도 부담없는 시대. 나를 위한 변화, 마인드의 케어멤버십을 지금 시작하세요.",
  openGraph: {
    title: "마인드휘트니스 노형점 | 케어 멤버십",
    description: "이젠 헬스/PT도 부담없는 시대. 나를 위한 변화, 마인드의 케어멤버십을 지금 시작하세요.",
    images: [
      {
        url: "/images/KakaoTalk_20260422_140726985.jpg",
        width: 1200,
        height: 630,
        alt: "마인드휘트니스 노형점 케어 멤버십",
      },
    ],
  },
}

export default function CareMembershipJejusiPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <CareMembershipJejusiLanding />
      <LocationSectionNohyeong />
      <FooterNohyeong />
    </main>
  )
}
