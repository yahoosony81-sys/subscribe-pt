import { PromotionNhCaremembership } from "@/components/promotions/promotion-nh-caremembership"
import { Footer } from "@/components/footer"
import { RegistrationSectionNohyeong } from "@/components/registration-section-nohyeong"
import { LocationSectionNohyeong } from "@/components/location-section-nohyeong"

export const metadata = {
  title: "마인드휘트니스 노형점 | 월 구독형 케어 멤버십",
  description: "헬스장 등록을 망설이게 만들던 고민 해결! 월 5회 25분 구독형 케어 멤버십",
  openGraph: {
    title: "마인드휘트니스 노형점 | 구독형 케어 멤버십",
    description: "헬스장 등록을 망설이게 만들던 고민 해결! 월 5회 25분 구독형 케어 멤버십",
    images: [
      {
        url: "/images/힉스필드수정본.png",
        width: 1200,
        height: 630,
        alt: "마인드휘트니스 노형점 구독형 케어 멤버십",
      },
    ],
  },
}

export default function NhCareMembershipPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PromotionNhCaremembership />
      <LocationSectionNohyeong />
      <RegistrationSectionNohyeong 
        googleSheetUrl="https://script.google.com/macros/s/AKfycbzbEE1tfamHU4n_rnz0XMiw-YA-GGCq8PkHRL6pekDkW6haGG7OaCjHvcLelm5vQ238/exec"
        sheetName="노형점케어멤버십"
      />
      <Footer />
    </main>
  )
}
