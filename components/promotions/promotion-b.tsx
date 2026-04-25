"use client"

/**
 * ============================================================
 * 🟢 여기서부터 프로모션 B의 디자인입니다
 * ============================================================
 * 프로모션 B: "3개월 정기관리" - 나이키(NIKE) 캠페인 스타일 레이아웃
 * 
 * 📐 디자인 특징:
 *   - 극한의 깔끔함과 여백을 강조한 미니멀리즘
 *   - 아주 굵고 강렬한 산세리프(고딕) 대문자 타이포그래피
 *   - 흑백(Black & White) 베이스에 직각(Square) 테두리 버튼
 *   - 좌우 지그재그 배치와 명확한 스텝(Step) 구조
 * 
 * 🔄 콘텐츠 교체 방법:
 *   1. 메인 카피: 영문 대문자 타이틀 및 한글 텍스트 수정
 *   2. 정보 블록: 좌우 교차되는 이미지/텍스트 블록의 리스트 항목 수정
 *   3. 4단계 스텝: 하단 스텝 영역의 텍스트 교체
 *   4. 결제 금액: 최하단 PromotionPayment의 amount props 변경 (기본 249,000원)
 * ============================================================
 */

import Image from "next/image"
import { PromotionPayment } from "./promotion-payment"

/* ─────────────────────────────────────────────
   📌 프로모션 B 텍스트 데이터 설정
   ───────────────────────────────────────────── */
const copyData = {
  heroTitle: "REAL CHANGE.",
  heroSub: "진짜 변화는 3개월부터.",
  heroDesc: "1개월로는 습관이 되지 않습니다. 3개월의 꾸준한 관리를 통해\n운동이 일상이 되고, 몸이 달라지는 것을 직접 느껴보세요.",
  
  block1Title: "1:1 PREMIUM PT",
  block1List: [
    { label: "대상", value: "건강한 변화를 원하는 누구나" },
    { label: "수업", value: "월 8회 전문 트레이너 1:1 밀착 관리" },
    { label: "목표", value: "체력 증진, 다이어트, 체형 교정 등" },
    { label: "정가", value: "월 500,000원" },
    { label: "결제", value: "월 249,000원 (50% 할인)", highlight: true },
    { label: "안내", value: "3개월 약정 상품. 매월 자동 결제 진행." },
  ],

  block2Title: "SMART CARE SYSTEM",
  block2List: [
    { label: "루틴", value: "개인별 주간 자율 운동 루틴 설계" },
    { label: "식단", value: "목표 맞춤형 식단 가이드 제공" },
    { label: "상담", value: "카카오톡 상시 밀착 코칭 및 질의응답" },
    { label: "분석", value: "매월 체성분(InBody) 분석 및 성과 피드백" },
  ],

  stepsTitle: "HOW IT WORKS",
  stepsSub: "마인드 휘트니스의 정기관리 시스템을 시작하세요.\n체계적인 4단계 프로세스로 목표 달성을 돕습니다.",
  
  darkTitle: "JUST START NOW",
  darkDesc: "매일 달라지는 나를 위한 최고의 선택.\n망설임은 변화를 늦출 뿐입니다.",
}

export function PromotionB() {
  const nikeButtonStyle = "inline-flex w-full sm:w-auto items-center justify-center border-2 border-black bg-white px-8 py-3 text-sm font-bold text-black transition-colors hover:bg-black hover:text-white uppercase tracking-wider"

  return (
    <div className="promotion-b-container bg-white font-sans text-black">
      
      {/* ─────────────────────────────────────────────
          📌 [B-1] 풀와이드 히어로 이미지
          ───────────────────────────────────────────── */}
      <section className="relative w-full h-[50vh] md:h-[70vh] bg-slate-100">
        <Image
          src="/images/hero-bg.jpg" // 역동적인 달리기나 크로스핏 이미지 권장
          alt="Campaign Hero"
          fill
          className="object-cover object-center grayscale opacity-80"
          priority
        />
      </section>

      {/* ─────────────────────────────────────────────
          📌 [B-2] 중앙 정렬 타이틀 (CHOOSE GO 스타일)
          ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-4 text-center">
        <h2 className="mb-4 text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter break-keep">
          {copyData.heroTitle} <br className="md:hidden" />
          <span className="text-3xl sm:text-4xl md:text-6xl">{copyData.heroSub}</span>
        </h2>
        <p className="mb-10 text-base md:text-xl font-medium text-slate-700 whitespace-pre-line leading-relaxed break-keep px-2">
          {copyData.heroDesc}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm mx-auto sm:max-w-none">
          <button 
            onClick={() => document.getElementById('payment-section-b')?.scrollIntoView({ behavior: 'smooth' })}
            className={nikeButtonStyle}
          >
            정기관리 신청
          </button>
          <button className={nikeButtonStyle}>
            프로그램 상세
          </button>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [B-3] 지그재그 정보 블록 1 (Left Image, Right Text)
          ───────────────────────────────────────────── */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 aspect-[4/3] relative bg-slate-200">
            <Image
              src="/images/gym-interior.jpg" // 흑백 트레이닝 이미지 권장
              alt="1:1 PT"
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
                onClick={() => document.getElementById('payment-section-b')?.scrollIntoView({ behavior: 'smooth' })}
                className={nikeButtonStyle}
              >
                참여 신청
              </button>
              <button className={nikeButtonStyle}>
                상세 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [B-4] 지그재그 정보 블록 2 (Left Text, Right Image)
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
              <button className={nikeButtonStyle}>
                자세히 보기
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 aspect-[4/3] relative bg-slate-200">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20260419_111452400_03-4xJlb82fBIXQcs2HivF8Polbcz9HXm.png"
              alt="Smart Care"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [B-5] 4-Step 프로세스 영역
          ───────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter">
            {copyData.stepsTitle}
          </h2>
          <p className="mb-12 md:mb-16 text-base md:text-lg font-medium text-slate-600 whitespace-pre-line break-keep px-2">
            {copyData.stepsSub}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { step: "STEP 1", title: "온라인 결제", desc: "사이트에서 정기관리 신청" },
              { step: "STEP 2", title: "상담 및 예약", desc: "해피콜을 통한 첫 방문 예약" },
              { step: "STEP 3", title: "정밀 분석", desc: "InBody 측정 및 체형 평가" },
              { step: "STEP 4", title: "관리 시작", desc: "1:1 PT 및 맞춤형 루틴 진행" }
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <h4 className="text-2xl font-black mb-4">{s.step}</h4>
                <div className="w-full aspect-square bg-slate-200 mb-6 relative">
                  {/* 스텝별 아이콘이나 이미지 자리 */}
                  <div className="absolute inset-0 flex items-center justify-center text-4xl text-slate-400">
                    {i === 0 ? "💳" : i === 1 ? "📞" : i === 2 ? "📊" : "🏃‍♂️"}
                  </div>
                </div>
                <h5 className="font-bold text-lg mb-2">{s.title}</h5>
                <p className="text-sm text-slate-500">{s.desc}</p>
                {i === 0 && (
                  <button 
                    onClick={() => document.getElementById('payment-section-b')?.scrollIntoView({ behavior: 'smooth' })}
                    className="mt-6 border border-black bg-white px-4 py-2 text-xs font-bold hover:bg-black hover:text-white"
                  >
                    참가 신청
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [B-6] Dark Contrast Block (JUST DO IT 스타일)
          ───────────────────────────────────────────── */}
      <section className="relative w-full h-[60vh] bg-black flex items-center">
        {/* Background Image (Dark) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Just Start Now"
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
            onClick={() => document.getElementById('payment-section-b')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white bg-transparent px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-black uppercase tracking-wider"
          >
            참여하기
          </button>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [B-7] 하단 결제 영역 (미니멀 스타일)
          ───────────────────────────────────────────── */}
      <section id="payment-section-b" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xl font-bold mb-8">새로운 변화를 시작할 준비가 되셨나요? 지금 참여해 보세요.</p>
          <div className="border border-slate-200 p-8 shadow-sm">
            <PromotionPayment
              amount={249000}
              orderName="3개월 정기관리 (월 결제)"
              buttonLabel="249,000원 정기결제 등록"
              buttonColor="bg-black hover:bg-slate-800 text-white font-bold rounded-none uppercase tracking-wider w-full py-4 text-lg"
            />
          </div>
          
          <div className="mt-20 pt-10 border-t border-slate-200 text-sm font-bold text-slate-500">
            <p>마인드 휘트니스 운영 사무국</p>
            <p className="mt-2 text-black">TEL : 010-XXXX-XXXX</p>
            <p className="mt-1 text-black">E-MAIL : MINDFITNESS@EXAMPLE.COM</p>
          </div>
        </div>
      </section>

      {/* ─── 프로모션 B 끝 ─── */}
    </div>
  )
}
