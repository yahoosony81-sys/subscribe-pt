"use client"

/**
 * ============================================================
 * 🔵 여기서부터 프로모션 C의 디자인입니다
 * ============================================================
 * 프로모션 C: "가정의 달 특별" - 유니세프(UNICEF) 랜딩페이지 스타일
 * 
 * 📐 디자인 특징:
 *   - 강력한 흑백 대비와 시그니처 시안(Cyan) 블루 컬러 포인트
 *   - 볼드하고 큼직한 고딕계열 대문자 타이포그래피 (예: FAMILY CARE -> NOW)
 *   - 화면을 꽉 채우는 다크 틴트 이미지와 솔리드 컬러 블록의 교차 배치
 *   - 높은 가독성과 임팩트를 주는 명조/고딕 텍스트 박스 조합
 * 
 * 🔄 콘텐츠 교체 방법:
 *   1. 메인 카피: 영문 대문자 타이틀 및 한글 설명 텍스트 수정
 *   2. 섹션 이미지: 각 이미지의 src 속성 교체 (현재 플레이스홀더 사용 중)
 *   3. 결제 금액: 최하단 PromotionPayment의 amount props 변경 (기본 79,000원)
 * ============================================================
 */

import Image from "next/image"
import { PromotionPayment } from "./promotion-payment"

/* ─────────────────────────────────────────────
   📌 프로모션 C 텍스트 데이터 설정
   ───────────────────────────────────────────── */
const copyData = {
  heroSuper: "마인드 휘트니스는 부모님의 건강을 지킵니다",
  heroTitle1: "FAMILY",
  heroTitle2: "CARE",
  heroTitle3: "➔ NOW",
  heroBoxText1: "부모님에게",
  heroBoxText2: "청춘은",
  heroBoxText3: "다시 돌아오지 않으니까",
  
  blueBreakTitle: "JOIN FAMILY CARE,\nNOW",
  blueBreakSub: "우리는 부모님의 건강한 내일을 만들 수 있습니다\n지금 특별한 선물을 준비하세요",
  
  section1Super: "WE ARE",
  section1Title: "CARING\nTEAM",
  section1Desc: "사랑하는 부모님을 위해,\n우리는 모였습니다\n\n마인드 휘트니스의 시니어 케어는\n나이가 들어도 건강한 삶을 영위할 수 있도록\n안전하고 전문적인 관리를 제공합니다.",
  
  section2Super: "WE ARE",
  section2Title: "UNSTOPPABLE\nHEALTH",
  section2Desc: "우리는 어떤 상황에서도\n부모님의 건강을 지킵니다\n\n근력 저하와 관절의 불편함 앞에서도\n맞춤형 운동 솔루션으로 멈추지 않고\n활기찬 일상을 되찾아 드립니다.",
  
  packageSuper: "FAMILY MONTH SPECIAL",
  packageTitle: "부모님을 지켜주시는 당신께\n특별한 혜택을 드립니다",
  packageDesc: "이번 가정의 달을 맞아,\n부모님의 건강을 챙기시는 자녀분들을 위해\n마인드 휘트니스가 1:1 맞춤 관리 패키지를 전달합니다.",
  
  priceOriginal: "500,000원",
  priceSale: "79,000",
  
  finalTitle: "부모님께 건강을\n선물해야 할 순간,\n➔ 바로 지금입니다",
}

export function PromotionC() {
  const blueColor = "bg-[#00AEEF]" // 유니세프 느낌의 쨍한 시안 블루
  const textColorBlue = "text-[#00AEEF]"

  return (
    <div className="promotion-c-container bg-white font-sans text-slate-900 tracking-tight">
      
      {/* ─────────────────────────────────────────────
          📌 [C-1] 히어로 섹션 (Dark & Bold)
          ───────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] w-full bg-black flex flex-col justify-between">
        {/* Background Image (Darkened) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg" // 부모님 운동 또는 가족 이미지로 교체 권장
            alt="Family Care Hero"
            fill
            className="object-cover object-center opacity-60 grayscale"
            priority
          />
          {/* 어두운 그라데이션 (밝기 조정) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </div>

        {/* Top Text Content */}
        <div className="relative z-10 w-full px-6 pt-24 md:px-12 md:pt-32 max-w-7xl mx-auto">
          <p className="mb-6 text-sm md:text-base font-bold text-white tracking-widest">
            {copyData.heroSuper}
          </p>
          <h1 className="text-7xl md:text-[9rem] lg:text-[11rem] font-black text-white leading-[0.85] tracking-tighter uppercase">
            <div>{copyData.heroTitle1}</div>
            <div>{copyData.heroTitle2}</div>
            <div className="flex items-center gap-2 md:gap-4">
              <span>{copyData.heroTitle3}</span>
            </div>
          </h1>
        </div>

        {/* Bottom Floating Box */}
        <div className="relative z-10 w-full px-6 pb-24 md:px-12 md:pb-32 max-w-7xl mx-auto flex justify-end">
          <div className="bg-black/80 backdrop-blur-sm border-l-4 border-[#00AEEF] p-6 md:p-10 max-w-sm">
            <div className="flex gap-1 mb-4">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl font-bold text-white leading-tight">
              {copyData.heroBoxText1}<br />
              {copyData.heroBoxText2}<br />
              {copyData.heroBoxText3}
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [C-2] Solid Blue Break (메시지 강조)
          ───────────────────────────────────────────── */}
      <section className={`${blueColor} py-20 md:py-32`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter whitespace-pre-line mb-10">
            {copyData.blueBreakTitle}
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-4 text-white">
            <svg className="w-10 h-10 md:w-12 md:h-12 transform rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <p className="text-lg md:text-2xl font-bold whitespace-pre-line text-left">
              {copyData.blueBreakSub}
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [C-3] Image Rows (교차 레이아웃)
          ───────────────────────────────────────────── */}
      <section className="bg-black w-full">
        {/* Row 1 */}
        <div className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20260419_111452400_03-4xJlb82fBIXQcs2HivF8Polbcz9HXm.png"
              alt="Caring Team"
              fill
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20">
            <p className="text-white font-bold text-xl mb-2 tracking-wider">{copyData.section1Super}</p>
            <div className="bg-white inline-block px-4 md:px-6 py-2 md:py-3 mb-6">
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-[0.9] tracking-tighter whitespace-pre-line uppercase">
                {copyData.section1Title}
              </h3>
            </div>
            <p className="text-white text-lg md:text-xl font-medium whitespace-pre-line leading-relaxed max-w-md">
              {copyData.section1Desc}
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative min-h-[70vh] flex items-center bg-[#1a1a1a]">
          <div className="absolute inset-0 w-full h-full">
             <Image
              src="/images/gym-interior.jpg"
              alt="Unstoppable Health"
              fill
              className="object-cover opacity-30 grayscale"
            />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 flex justify-end">
            <div className="max-w-lg">
              <p className="text-white font-bold text-xl mb-2 tracking-wider">{copyData.section2Super}</p>
              <div className="bg-white inline-block px-4 md:px-6 py-2 md:py-3 mb-6">
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-[0.9] tracking-tighter whitespace-pre-line uppercase">
                  {copyData.section2Title}
                </h3>
              </div>
              <p className="text-white text-lg md:text-xl font-medium whitespace-pre-line leading-relaxed">
                {copyData.section2Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [C-4] 패키지 상세 소개 (White Background)
          ───────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 w-full">
            <div className="aspect-square relative w-full max-w-md mx-auto overflow-hidden rounded-full border border-slate-100 shadow-2xl">
              {/* 상품 이미지 영역 (선물 상자나 케어 패키지 등) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 text-slate-300">
                <span className="text-6xl mb-4">🎁</span>
                <span className="font-bold tracking-widest text-[#00AEEF]">FAMILY PACKAGE</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full text-center md:text-left">
            <p className={`${textColorBlue} font-bold tracking-widest mb-4`}>{copyData.packageSuper}</p>
            <h3 className="text-3xl md:text-5xl font-black text-black leading-tight mb-8 whitespace-pre-line">
              {copyData.packageTitle}
            </h3>
            <p className="text-slate-600 text-lg font-medium whitespace-pre-line mb-10 leading-relaxed">
              {copyData.packageDesc}
            </p>
            <button 
              onClick={() => document.getElementById('payment-section-c')?.scrollIntoView({ behavior: 'smooth' })}
              className={`${blueColor} text-white font-bold px-8 py-4 flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 w-full md:w-auto`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              가정의 달 패키지 선물하기
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [C-5] Impact / Pricing Section (Light Gray + Bold Text)
          ───────────────────────────────────────────── */}
      <section className="bg-[#f0f0f0] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-[0.9] tracking-tighter uppercase mb-6">
              PROTECTS<br/>THE HEALTH<br/>OF PARENTS
            </h2>
            <div className="flex items-center gap-4 text-slate-800">
              <svg className="w-6 h-6 transform rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <p className="text-xl md:text-2xl font-bold">마인드 휘트니스는<br/>부모님의 지금을 지킵니다</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
             <div className="bg-white p-10 flex flex-col justify-center shadow-lg">
                <p className="text-slate-500 font-bold mb-2">기존가 {copyData.priceOriginal}</p>
                <h4 className="text-5xl md:text-7xl font-black text-[#00AEEF] mb-6">
                  {copyData.priceSale}<span className="text-3xl md:text-4xl text-black">원</span>
                </h4>
                <p className="text-slate-600 font-medium leading-relaxed">
                  * 5월 한정 특가입니다. 자동 갱신 없는 1회 결제 상품입니다.<br/>
                  * 1:1 맞춤 체형 분석 및 PT 4회 + 한 달 시설 이용권 포함
                </p>
             </div>
             <div className="bg-black p-10 text-white flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-4">참여 방법</h4>
                <ul className="space-y-4 font-medium text-white/80">
                  <li className="flex gap-3">
                    <span className={`${textColorBlue}`}>1</span>
                    <span>하단의 결제 버튼을 통해 선물을 결제합니다.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className={`${textColorBlue}`}>2</span>
                    <span>상담원이 전화를 드려 부모님의 방문 일정을 조율합니다.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className={`${textColorBlue}`}>3</span>
                    <span>부모님 체형에 맞춘 안전한 트레이닝이 시작됩니다.</span>
                  </li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [C-6] 결제 섹션 (Final CTA)
          ───────────────────────────────────────────── */}
      <section id="payment-section-c" className="bg-[#e2e8f0] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.1] tracking-tighter whitespace-pre-line mb-6">
              {copyData.finalTitle}
            </h3>
          </div>
          
          <div className="w-full max-w-sm rounded-none bg-white p-8 shadow-2xl border-t-8 border-[#00AEEF]">
             <h4 className="mb-6 text-center text-xl font-bold text-slate-900">가정의 달 특별 패키지 결제</h4>
             <PromotionPayment
              amount={79000}
              orderName="가정의 달 부모님 선물 패키지"
              buttonLabel="79,000원 결제하기"
              buttonColor={`${blueColor} hover:bg-sky-600 text-white font-black py-5 rounded-none`}
            />
          </div>
        </div>
      </section>

      {/* ─── 프로모션 C 끝 ─── */}
    </div>
  )
}
