import { Metadata } from "next"
import { PromotionJmReset } from "@/components/promotions/promotion-jm-reset"
import { ProgramSectionJmReset } from "@/components/program-section-jm-reset"
import { LocationSectionJmReset } from "@/components/location-section-jm-reset"
import { InstructorSectionJmReset } from "@/components/instructor-section-jm-reset"
import { FooterJmReset } from "@/components/footer-jm-reset"

export const metadata: Metadata = {
  title: "리셋중문점 | TEAM MIND 그룹PT",
  description:
    "리셋중문점 Team Mind 그룹PT — 첫 방문 무료 체험 예약. 10년차 전문 강사 2인이 직접 이끄는 40분 그룹 트레이닝. 16명 선착순 마감.",
  openGraph: {
    title: "리셋중문점 | TEAM MIND 그룹PT",
    description:
      "리셋중문점 Team Mind 그룹PT — 첫 방문 무료 체험 예약. 10년차 전문 강사 2인이 직접 이끄는 40분 그룹 트레이닝.",
  },
}

export default function JmResetPage() {
  return (
    <main className="jm-reset-page min-h-screen bg-black">
      <style>{`
        .jm-reset-page h1, .jm-reset-page h2, .jm-reset-page h3, .jm-reset-page h4,
        .jm-reset-page h5, .jm-reset-page p, .jm-reset-page li, .jm-reset-page span,
        .jm-reset-page a, .jm-reset-page button, .jm-reset-page label {
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .jm-reset-page h1, .jm-reset-page h2, .jm-reset-page h3, .jm-reset-page h4 {
          text-wrap: balance;
        }
        .jm-reset-page p, .jm-reset-page li {
          text-wrap: pretty;
        }
      `}</style>
      <PromotionJmReset />
      <ProgramSectionJmReset />
      <InstructorSectionJmReset />
      <LocationSectionJmReset />
      <FooterJmReset />
    </main>
  )
}
