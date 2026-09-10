import { RecruitHallimLanding } from "./recruit-hallim-landing"
import { FooterHallim } from "@/components/footer-hallim"

export const metadata = {
  title: "마인드휘트니스 ㅣ 채용공고",
  description: "마인드휘트니스에서 함께할 핵심인재를 모집합니다.",
  openGraph: {
    title: "마인드휘트니스 ㅣ 채용공고",
    description: "마인드휘트니스에서 함께할 핵심인재를 모집합니다.",
    images: [
      {
        url: "/images/KakaoTalk_20260422_140726985.jpg",
        width: 1200,
        height: 630,
        alt: "마인드휘트니스 채용공고",
      },
    ],
  },
  keywords: "마인드휘트니스, 채용, PT코치, 트레이너, 필라테스강사, 제주 채용, 한림점, 피트니스 채용",
}

export default function RecruitHallimPage() {
  return (
    <main className="min-h-screen" style={{ background: "#FFFFFF" }}>
      <RecruitHallimLanding />
      <FooterHallim />
    </main>
  )
}
