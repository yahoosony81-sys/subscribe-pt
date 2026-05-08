import { Metadata } from "next"
import { PromotionDnGroupPt } from "@/components/promotions/promotion-dn-group-pt"
import { LocationSectionDnGroupPt } from "@/components/location-section-dn-group-pt"
import { RegistrationSectionDnGroupPt } from "@/components/registration-section-dn-group-pt"
import { FooterDnGroupPt } from "@/components/footer-dn-group-pt"

export const metadata: Metadata = {
  title: "마인드휘트니스 도남점 그룹PT OPEN",
  description: "10년차 경력 강사 2인이 진행하는 그룹PT! 근력+유산소+기능성을 40분에 한번에. 12명 선착순 마감, 지금 바로 예약하세요.",
  openGraph: {
    title: "마인드휘트니스 도남점 그룹PT OPEN",
    description: "10년차 경력 강사 2인이 진행하는 그룹PT! 근력+유산소+기능성을 40분에 한번에. 12명 선착순 마감, 지금 바로 예약하세요.",
  }
}

export default function DnGroupPtPage() {
  return (
    <main className="min-h-screen">
      <PromotionDnGroupPt />
      <LocationSectionDnGroupPt />
      <RegistrationSectionDnGroupPt title="무료 상담 예약하기" branch="도남점" hideTimePicker={true} />
      <FooterDnGroupPt />
    </main>
  )
}
