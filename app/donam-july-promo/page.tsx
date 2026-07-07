import { DonamJulyPromoLanding } from "./donam-july-promo-landing"
import { LocationSectionDonamGroupPt } from "@/components/location-section-dn-group-pt"
import { FooterDonamGroupPt } from "@/components/footer-dn-group-pt"

export const metadata = {
  title: "마인드휘트니스 도남점 | 7월 이벤트",
  description: "이번 여름, 더 건강하고 자신감 있는 변화를 마인드 휘트니스 도남점에서 함께 시작해 보세요!",
  openGraph: {
    title: "마인드휘트니스 도남점 | 7월 이벤트",
    description: "이번 여름, 더 건강하고 자신감 있는 변화를 마인드 휘트니스 도남점에서 함께 시작해 보세요!",
    images: [
      {
        url: "/images/KakaoTalk_20260429_140040742.jpg",
        width: 1200,
        height: 630,
        alt: "마인드휘트니스 도남점 7월 이벤트",
      },
    ],
  },
}

export default function DonamJulyPromoPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <DonamJulyPromoLanding />
      <LocationSectionDonamGroupPt />
      <FooterDonamGroupPt />
    </main>
  )
}
