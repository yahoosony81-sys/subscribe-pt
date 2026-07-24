import { Metadata } from "next"
import { PromotionDnTeamMind } from "@/components/promotions/promotion-dn-teammind"
import { LocationSectionDnGroupPt } from "@/components/location-section-dn-group-pt"
import { RegistrationSectionDnGroupPt } from "@/components/registration-section-dn-group-pt"
import { FooterDnGroupPt } from "@/components/footer-dn-group-pt"

export const metadata: Metadata = {
  title: "마인드휘트니스 도남점 | TEAM MIND 그룹PT",
  description:
    "도남점 Team Mind 그룹PT — 첫 방문 무료 체험 예약. 10년차 전문 강사 2인이 직접 이끄는 40분 그룹 트레이닝. 12명 선착순 마감.",
  openGraph: {
    title: "마인드휘트니스 도남점 | TEAM MIND 그룹PT",
    description:
      "도남점 Team Mind 그룹PT — 첫 방문 무료 체험 예약. 10년차 전문 강사 2인이 직접 이끄는 40분 그룹 트레이닝.",
  },
}

export default function DnTeamMindPage() {
  return (
    <main className="min-h-screen bg-black">
      <PromotionDnTeamMind />
      <LocationSectionDnGroupPt />
      <RegistrationSectionDnGroupPt
        title="첫 방문 무료 체험 예약하기"
        branch="도남점"
        hideTimePicker={false}
      />
      <FooterDnGroupPt />
    </main>
  )
}
