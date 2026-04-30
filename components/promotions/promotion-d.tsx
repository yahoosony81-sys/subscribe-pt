"use client"

/**
 * ============================================================
 * 🟣 여기서부터 프로모션 D의 디자인입니다
 * ============================================================
 * 프로모션 D: "무료체험신청" - 나이키(NIKE) 캠페인 스타일 레이아웃 (B 참조)
 * 
 * 📐 디자인 특징:
 *   - 프로모션 B (3개월 정기관리)의 레이아웃 구조를 그대로 차용
 *   - 극한의 깔끔함과 여백을 강조한 미니멀리즘
 *   - 아주 굵고 강렬한 산세리프(고딕) 대문자 타이포그래피
 *   - 흑백(Black & White) 베이스에 직각(Square) 테두리 버튼
 *   - 좌우 지그재그 배치와 명확한 스텝(Step) 구조
 * 
 * 🔄 콘텐츠 교체 방법:
 *   1. 메인 카피: 영문 대문자 타이틀 및 한글 텍스트 수정
 *   2. 정보 블록: 좌우 교차되는 이미지/텍스트 블록의 리스트 항목 수정
 *   3. 4단계 스텝: 하단 스텝 영역의 텍스트 교체
 *   4. 결제 금액: 무료체험이므로 0원 (안내 텍스트만 표시)
 * ============================================================
 */

import Image from "next/image"
import { PromotionPayment } from "./promotion-payment"

/* ─────────────────────────────────────────────
   📌 프로모션 D 텍스트 데이터 설정
   ───────────────────────────────────────────── */
const copyData = {
  heroTitle: "TRY FREE.",
  heroSub: "월구독 PT상품 \n 무료로 먼저 체험해 보세요.",
  heroDesc: "결제 부담 없이, 전문 트레이너와 \n 함께하는 1회 무료 PT 체험.\n직접 경험해 보고 결정하세요. \n S 마인드 휘트니스의 차이를 느껴보실 수 있습니다.",

  block1Title: "FREE TRIAL PT",
  block1List: [
    { label: "대상", value: "피트니스에 관심 있는 누구나" },
    { label: "수업", value: "1회 전문 트레이너 1:1 체험 레슨" },
    { label: "시간", value: "약 30분 (상담 포함)" },
    { label: "비용", value: "완전 무료 (0원)", highlight: true },
    { label: "준비물", value: "편한 운동복 & 실내화" },
  ],

  block2Title: "WHAT YOU GET",
  block2List: [
    { label: "체형분석", value: "전문 장비를 활용한 체형·자세 분석" },
    { label: "맞춤운동", value: "개인 목표에 맞춘 체험 운동 프로그램" },
    { label: "상담", value: "운동 목표 및 라이프스타일 1:1 상담" },
    { label: "플랜", value: "체험 후 맞춤형 운동 플랜 제안" },
  ],

  stepsTitle: "HOW TO START",
  stepsSub: "무료체험 신청은 간단합니다.\n아래 4단계만 따라오시면 됩니다.",

  darkTitle: "NOTHING TO LOSE",
  darkDesc: "무료체험은 부담 없이 시작할 수 있는 첫걸음.\n지금 바로 신청하세요.",
}

export function PromotionD() {
  const nikeButtonStyle = "inline-flex w-full sm:w-auto items-center justify-center border-2 border-black bg-white px-8 py-3 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white uppercase tracking-wider"

  return (
    <div id="promo-d" className="promotion-d-container bg-white font-sans text-black">

      {/* ─────────────────────────────────────────────
          📌 [D-1] 풀와이드 히어로 이미지
          ───────────────────────────────────────────── */}
      {/* 히어로 섹션 (배경이미지 + 텍스트) */}
      <section className="relative w-full h-[50vh] md:h-[70vh] bg-slate-100 overflow-hidden">
        {/* 배경 이미지 */}
        <Image
          src="/체험신청히어로이미지.png" // 파일명을 실제 사용 중인 이미지 경로로 확인하세요
          alt="월구독 PT 체험 환영 히어로"
          fill
          className="object-cover object-center" // 원본 이미지 색감을 위해 opacity는 뺐습니다. 필요하면 opacity-90 추가
          priority
        />

        {/* [핵심] 모델의 양손 사이에 위치하는 텍스트 영역 */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-[10vh] md:pb-[15vh] px-4">
          {/* 반투명 배경 박스 */}
          <div className="text-center w-auto max-w-[95%] mx-auto bg-white/40 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/30 shadow-lg">
            {/* 블랙 테두리가 적용된 골드 텍스트 */}
            <h1 className="text-2xl sm:text-3xl md:text-7xl font-black tracking-tight whitespace-nowrap"
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                color: "#D4AF37",
                letterSpacing: '-0.05em',
                /* 블랙 테두리 효과 추가 */
                textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
              }}>
              월구독 PT 체험을 환영합니다
            </h1>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [D-2] 중앙 정렬 타이틀 (CHOOSE GO 스타일)
          ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-4 text-center">
        <div className="flex flex-col items-center mb-6">
          {/* 노란색 TRY FREE 박스 */}
          <div className="inline-block bg-yellow-400 border-2 border-black px-4 py-1 mb-4">
            <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-black">
              {copyData.heroTitle}
            </span>
          </div>

          {/* 메인 타이틀 (줄바꿈 적용됨) */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black whitespace-pre-line leading-tight text-center">
            {copyData.heroSub}
          </h2>
        </div>
        <p className="mb-10 text-base md:text-xl font-medium text-slate-700 whitespace-pre-line leading-relaxed break-keep px-2">
          {copyData.heroDesc}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm mx-auto sm:max-w-none">
          <button
            onClick={() => document.getElementById('payment-section-d')?.scrollIntoView({ behavior: 'smooth' })}
            className={nikeButtonStyle}
          >
            무료체험 신청
          </button>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [D-3] 지그재그 정보 블록 1 (Left Image, Right Text)
          ───────────────────────────────────────────── */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 aspect-[4/3] relative bg-slate-200">
            <Image
              src="/images/gym-interior.jpg"
              alt="Free Trial PT"
              fill
              className="object-cover grayscale"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 md:mb-8">
              {copyData.block1Title}
            </h3>
            <ul className="space-y-4 mb-8 md:mb-10 text-sm md:text-base">
              {copyData.block1List.map((item, idx) => (
                <li key={idx} className="flex flex-col sm:flex-row sm:items-start border-b border-slate-200 pb-4">
                  <span className="w-20 font-bold text-slate-900 flex-shrink-0 mb-1 sm:mb-0">{item.label}</span>
                  <span className={`font-medium break-keep leading-snug ${item.highlight ? 'text-blue-600 font-bold' : 'text-slate-600'}`}>
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.getElementById('payment-section-d')?.scrollIntoView({ behavior: 'smooth' })}
                className={nikeButtonStyle}
              >
                체험 신청
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [D-4] 지그재그 정보 블록 2 (Left Text, Right Image)
          ───────────────────────────────────────────── */}
      <section className="py-12 px-4 max-w-7xl mx-auto mb-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 md:mb-8 break-keep">
              {copyData.block2Title}
            </h3>
            <ul className="space-y-4 mb-8 md:mb-10 text-sm md:text-base">
              {copyData.block2List.map((item, idx) => (
                <li key={idx} className="flex flex-col sm:flex-row sm:items-start border-b border-slate-200 pb-4">
                  <span className="w-20 font-bold text-slate-900 flex-shrink-0 mb-1 sm:mb-0">{item.label}</span>
                  <span className="font-medium text-slate-600 break-keep leading-snug">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
            <div className="w-full sm:w-auto">

            </div>
          </div>
          <div className="w-full md:w-1/2 aspect-[4/3] relative bg-slate-200">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20260419_111452400_03-4xJlb82fBIXQcs2HivF8Polbcz9HXm.png"
              alt="What You Get"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [D-5] 4-Step 프로세스 영역
          ───────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter">
            {copyData.stepsTitle}
          </h2>
          <p className="mb-12 md:mb-16 text-base md:text-lg font-medium text-slate-600 whitespace-pre-line break-keep px-2">
            {copyData.stepsSub}
          </p>

          <div className="grid grid-cols-4 gap-2 sm:gap-6 md:gap-8">
            {[
              { step: "STEP 1", title: "무료체험 신청", desc: "사이트에서 간편 신청" },
              { step: "STEP 2", title: "예약확인 문자수령", desc: "해피콜을 통한 방문 일정 확정" },
              { step: "STEP 3", title: "방문 체험", desc: "1:1 트레이너와 체험 레슨" },
              { step: "STEP 4", title: "맞춤 플랜", desc: "체험 후 나만의 플랜 제안" }
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <h4 className="text-[11px] sm:text-lg md:text-2xl font-black mb-2 sm:mb-4">{s.step}</h4>
                <div className="w-full aspect-square bg-slate-200 mb-2 sm:mb-6 relative rounded-sm sm:rounded-none">
                  {/* 스텝별 아이콘이나 이미지 자리 */}
                  <div className="absolute inset-0 flex items-center justify-center text-lg sm:text-3xl md:text-4xl text-slate-400">
                    {i === 0 ? "📝" : i === 1 ? "📞" : i === 2 ? "🏋️" : "📋"}
                  </div>
                </div>
                <h5 className="font-bold text-[10px] sm:text-base md:text-lg mb-1 sm:mb-2 text-center leading-tight break-keep">{s.title}</h5>
                <p className="hidden sm:block text-[9px] sm:text-sm text-slate-500 text-center break-keep leading-snug">{s.desc}</p>
                {i === 0 && (
                  <button
                    onClick={() => document.getElementById('payment-section-d')?.scrollIntoView({ behavior: 'smooth' })}
                    className="mt-2 sm:mt-6 border border-black bg-white px-2 py-1 sm:px-4 sm:py-2 text-[9px] sm:text-xs font-bold hover:bg-black hover:text-white"
                  >
                    지금 신청
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [D-6] Dark Contrast Block (JUST DO IT 스타일)
          ───────────────────────────────────────────── */}
      <section className="relative w-full h-[60vh] bg-black flex items-center">
        {/* Background Image (Dark) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Nothing To Lose"
            fill
            className="object-cover opacity-40 grayscale"
          />
        </div>
        <div className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto w-full text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4 italic">
            {copyData.darkTitle}
          </h2>
          <p className="text-base sm:text-lg md:text-2xl font-bold text-white/90 whitespace-pre-line mb-8 break-keep">
            {copyData.darkDesc}
          </p>
          <button
            onClick={() => document.getElementById('payment-section-d')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white bg-transparent px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-black uppercase tracking-wider"
          >
            무료체험 신청
          </button>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [D-7] 하단 결제 영역 (미니멀 스타일)
          ───────────────────────────────────────────── */}
      <section id="payment-section-d" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xl font-bold mb-8">부담 없이 무료로 체험해 보세요. <br /> 지금 바로 신청하세요.</p>
          <div className="border border-slate-200 p-8 shadow-sm">
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black hover:bg-slate-800 text-white font-bold rounded-none uppercase tracking-wider w-full py-4 text-lg transition-colors"
            >
              무료체험 시간 예약하기
            </button>
          </div>


        </div>
      </section>

      {/* ─── 프로모션 D 끝 ─── */}
    </div>
  )
}
