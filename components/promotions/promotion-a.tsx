"use client"

/**
 * ============================================================
 * 🟠 여기서부터 프로모션 A의 내용입니다
 * ============================================================
 * 프로모션 A: "1개월 집중 패스" - 이미지 중심 레이아웃
 * 
 * 📐 디자인 특징:
 *   - 풀 와이드 히어로 이미지 배경
 *   - 대형 타이포그래피 중심의 가격 표시
 *   - 이미지 그리드 (2x2)
 *   - 하단에 결제 위젯 포함
 * 
 * 🔄 콘텐츠 교체 방법:
 *   1. 히어로 이미지: heroImage 변수의 src를 변경
 *   2. 메인 카피: mainCopy 객체의 값을 변경  
 *   3. 상세 설명: description 변수 수정
 *   4. 이미지 그리드: gridImages 배열 수정
 *   5. 결제 금액: PromotionPayment의 amount props 변경
 * ============================================================
 */

import Image from "next/image"
import { Check } from "lucide-react"
import { PromotionPayment } from "./promotion-payment"

/* ─────────────────────────────────────────────
   📌 프로모션 A 콘텐츠 설정
   - 여기의 값들을 변경하면 프로모션 A의 내용이 바뀝니다
   ───────────────────────────────────────────── */

// 메인 카피 설정
const mainCopy = {
  badge: "한림점 ONLY 특별 프로그램",
  subtitle: "이젠 PT도 관리 받는 시대",
  title: "1개월 집중 패스",
  originalPrice: "500,000원",
  salePrice: "99,000",
  currency: "원",
  message: "\"월 구독 가격으로 1개월만 먼저 관리 받아보세요\"",
  notice: "* 본 상품은 자동 결제 걱정 없는 1회성 단건 결제 상품입니다.",
}

// 대상 고객 체크리스트
const painPoints = [
  "혼자 운동하는게 지루하고 싫으신 분",
  "누군가 옆에서 응원하며 함께해주길 바라는 분",
  "지속적인 밀착관리가 있어야 움직이시는 분",
  "운동의 필요성은 알지만 헬스장 발걸음이 무거우신 분",
  "막상 헬스장에 가도 무엇부터 시작할지 막막하신 분",
  "일반 PT의 높은 비용이 부담스러우신 분",
]

// 이미지 그리드
const gridImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20260419_111452400_03-4xJlb82fBIXQcs2HivF8Polbcz9HXm.png",
    alt: "혹시 당신의 이야기인가요?",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20260419_111452400_04-Wtg4A8iJQ1igZmWGrNIlslHDoUFFIb.png",
    alt: "나의 건강관리를 잘하고 싶은분들에게 최적화된 합리적인 선택",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20260419_111452400_06-W2Wpid8w00OuuOZ6DeukcAmd772UGv.png",
    alt: "제주도 최초 퍼스널 케어 센터 건강관리프로그램 도입",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20260419_111452400_05-m2O9loveDt32tUYFtpfp0YPxn2OgyC.png",
    alt: "당신의 운동에 내 편이 생깁니다",
  },
]

// 신뢰 지표
const trustIndicators = ["전문 트레이너 상주", "1:1 맞춤 관리", "합리적인 가격"]

export function PromotionA() {
  return (
    <div id="promo-a" className="promotion-a-container">
      {/* ─────────────────────────────────────────────
          📌 [A-1] 히어로 섹션 - 메인 비주얼 & 가격
          ───────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="커피한잔 - PT 트레이닝 전문 관리"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* 히어로 콘텐츠 */}
        <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
          {/* 뱃지 */}
          <div className="mb-8 rounded-full bg-orange-500/90 px-6 py-2.5 backdrop-blur-sm">
            <span className="text-sm font-semibold tracking-wide text-white">
              {mainCopy.badge}
            </span>
          </div>

          {/* 메인 타이틀 & 가격 */}
          <h2 className="mb-4 max-w-4xl text-balance font-extrabold leading-tight tracking-tight text-white">
            <p className="text-xl font-black md:text-3xl lg:text-4xl">
              {mainCopy.subtitle}
            </p>
            <p className="mt-8 text-4xl font-black md:text-5xl lg:text-6xl">
              {mainCopy.title}
            </p>
            <p className="mt-1 text-lg font-semibold text-white/60 line-through md:text-2xl">
              {mainCopy.originalPrice}
            </p>
            <p className="text-5xl font-black text-yellow-400 md:text-6xl lg:text-7xl">
              {mainCopy.salePrice}
              <span className="text-3xl md:text-4xl">{mainCopy.currency}</span>
            </p>

            <div className="mt-8 border-y border-white/20 py-6">
              <p className="text-xl font-bold text-white/90 md:text-2xl lg:text-3xl">
                {mainCopy.message}
              </p>
              <p className="mt-3 text-sm font-medium text-white/50">
                {mainCopy.notice}
              </p>
            </div>
          </h2>

          {/* 신뢰 지표 */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            {trustIndicators.map((indicator, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [A-2] 대상 고객 섹션 - 체크리스트
          ───────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold text-slate-900 md:text-4xl">
              혹시 <span className="text-[#FF5C00]">당신의 이야기</span>인가요?
            </h3>
          </div>

          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#FF5C00]/50 hover:shadow-md"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF5C00] text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                <p className="text-sm font-medium leading-snug text-slate-700 md:text-base">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* 가격 프로모션 */}
          <div className="mb-12 text-center">
            <p className="mb-2 text-lg font-medium text-slate-600 md:text-xl">
              PT를 구독하는 시대, 제대로 관리 받다
            </p>
            <p className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">한달에</p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl font-medium text-slate-400 line-through md:text-3xl">
                {mainCopy.originalPrice}
              </span>
              <span className="text-4xl font-extrabold text-[#FF5C00] md:text-6xl">
                {mainCopy.salePrice}{mainCopy.currency}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [A-3] 이미지 그리드 섹션
          ───────────────────────────────────────────── */}
      <section className="bg-slate-50 pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {gridImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* 클로징 메시지 */}
          <div className="mt-12 text-center">
            <p className="mb-2 text-base text-slate-500 md:text-lg">건강을 위한 쉬어감</p>
            <p className="mb-2 text-base text-slate-500 md:text-lg">꾸준한 운동을 위한 시작</p>
            <p className="mb-6 text-base text-slate-500 md:text-lg">마인드에서 증거가 되겠습니다.</p>
            <p className="text-3xl font-bold text-slate-900 md:text-4xl">
              역시, <span className="text-[#FF5C00]">마인드</span>
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [A-4] 결제 섹션
          - amount: 결제 금액을 변경하려면 이 숫자만 수정하세요
          - orderName: 결제 상품명을 변경하려면 이 문자열만 수정하세요
          ───────────────────────────────────────────── */}
      <section id="payment-section-a" className="bg-white py-16">
        <div className="mx-auto max-w-xl px-4">
          <div className="mb-8 text-center">
            <h3 className="mb-3 text-2xl font-bold text-slate-900">
              1개월 집중 패스 결제하기
            </h3>
            <p className="text-base text-slate-600">
              원하시는 결제 수단을 선택하고 빠르고 안전하게 결제하세요.
            </p>
          </div>
          <PromotionPayment
            amount={99000}
            orderName="1개월 집중 패스"
            buttonLabel="99,000원 결제하기"
            buttonColor="bg-[#FF5C00] hover:bg-orange-600"
          />
        </div>
      </section>

      {/* ─── 프로모션 A 끝 ─── */}
    </div>
  )
}
