"use client"

/**
 * ============================================================
 * 🔴 프로모션 바디챌린지
 * ============================================================
 */

import Image from "next/image"
import { PromotionPayment } from "./promotion-payment"

const copyData = {
  heroSuper: "2026 마인드 바디챌린지 6기 모집 시작🔥",
  heroTitle1: "BODY",
  heroTitle2: "CHALLENGE",
  heroTitle3: "➔ 6TH",
  heroBoxText1: "명품 몸 만들고,",
  heroBoxText2: "진짜 명품백",
  heroBoxText3: "받아갈 기회",
  
  themeBreakTitle: "10주의 기적\n바디챌린지 6기",
  themeBreakSub: "단순 다이어트 아닌,\n결과로 증명하는 10주의 기적 프로젝트 !!",
  
  section1Super: "CHALLENGE INFO",
  section1Title: "일정 및\n참가안내",
  section1Desc: "📅 챌린지 기간\n2026.05.11 ~ 2026.07.24\n(참가비 : 5만원)\n\n[모집 기간]\n2026.05.04. ~ 2026.05.31.",
  
  section2Super: "EVALUATION",
  section2Title: "명확한\n측정방식",
  section2Desc: "🎯 인바디 = 100%\n(ex: 20% ➔ 18% = 2% 감소 / 24% ➔ 18% = 6% 감소)\n\n인바디 체지방률(%) 측정 / 동일시,\n근육량 +1kg 증가 = 2점\n체지방량 1kg 감소 = 1점",
  
  packageSuper: "TOTAL PRIZES 13,000,000 KRW",
  packageTitle: "총 1300만원 상당의\n역대급 상품 증정 🎁",
  packageDesc: "1등 루이비통 백\n2등 스타일러\n3등 스탠바이미\n4등 PT 20회\n5등 코드제로 청소기\n6등 퓨리케어 공기청정기\n7~8등 연간회원권\n9~11등 회원권 6개월\n12~13등 회원권 3개월",
  
  priceSale: "50,000",
  
  finalTitle: "도전해야 할 순간,\n➔ 바로 지금입니다",
}

export function PromotionBodychallenge() {
  const themeColor = "bg-[#FF3B30]" // 바디챌린지에 어울리는 열정적인 레드
  const textColorTheme = "text-[#FF3B30]"

  return (
    <div id="promo-bodychallenge" className="promotion-c-container bg-white font-sans text-slate-900 tracking-tight">
      
      {/* ─────────────────────────────────────────────
          📌 [1] 히어로 섹션 (이미지와 텍스트 분리)
          ───────────────────────────────────────────── */}
      {/* 1-1. 히어로 이미지 영역 */}
      <section className="w-full bg-black flex justify-center">
        <img
          src="/challeng2.png"
          alt="Body Challenge Hero"
          className="w-full max-w-7xl h-auto block"
        />
      </section>

      {/* 1-2. 히어로 텍스트 영역 */}
      <section className="w-full bg-gradient-to-b from-[#111111] to-black py-16 md:py-24">
        <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="w-full">
            <p className="mb-4 text-sm md:text-base font-bold text-slate-400 tracking-widest">
              {copyData.heroSuper}
            </p>
            <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black text-white leading-[0.85] tracking-tighter uppercase">
              <div>{copyData.heroTitle1}</div>
              <div>{copyData.heroTitle2}</div>
              <div className="flex items-center gap-2 md:gap-4 text-[#FF3B30]">
                <span>{copyData.heroTitle3}</span>
              </div>
            </h1>
          </div>
          
          <div className="bg-[#1a1a1a] border-t-4 border-[#FF3B30] p-6 md:p-10 w-full max-w-sm rounded-lg shadow-2xl">
            <div className="flex gap-1 mb-4">
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-[#FF3B30] rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl font-bold text-white leading-tight">
              {copyData.heroBoxText1}<br />
              {copyData.heroBoxText2}<br />
              <span className="text-[#FF3B30]">{copyData.heroBoxText3}</span>
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [2] Solid Break (메시지 강조)
          ───────────────────────────────────────────── */}
      <section className={`${themeColor} py-20 md:py-32`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.2] tracking-tighter whitespace-pre-line mb-10">
            {copyData.themeBreakTitle}
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-4 text-white">
            <svg className="w-10 h-10 md:w-12 md:h-12 transform rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <p className="text-lg md:text-2xl font-bold whitespace-pre-line text-left">
              {copyData.themeBreakSub}
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [3] Image Rows (텍스트와 이미지 분리형)
          ───────────────────────────────────────────── */}
      <section className="w-full">
        {/* Row 1 */}
        <div className="flex flex-col w-full">
          <div className="w-full bg-black flex justify-center">
            <img
              src="/challeng1.png"
              alt="Challenge Info"
              className="w-full max-w-7xl h-auto block"
            />
          </div>
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#111111] py-16 md:py-24">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
              <p className="text-[#FF3B30] font-bold text-xl mb-4 tracking-wider">{copyData.section1Super}</p>
              <div className="bg-[#FF3B30] inline-block px-4 md:px-6 py-2 md:py-3 mb-6 rounded-sm shadow-lg">
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.2] tracking-tighter whitespace-pre-line uppercase">
                  {copyData.section1Title}
                </h3>
              </div>
              <p className="text-slate-300 text-lg md:text-xl font-medium whitespace-pre-line leading-relaxed max-w-md">
                {copyData.section1Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col w-full">
          <div className="w-full bg-black flex justify-center">
             <img
              src="/challeng3.png"
              alt="Evaluation"
              className="w-full max-w-7xl h-auto block"
            />
          </div>
          <div className="bg-gradient-to-b from-[#111111] to-black py-16 md:py-24">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-end">
              <div className="max-w-lg text-right">
                <p className="text-[#FF3B30] font-bold text-xl mb-4 tracking-wider">{copyData.section2Super}</p>
                <div className="bg-[#FF3B30] inline-block px-4 md:px-6 py-2 md:py-3 mb-6 rounded-sm shadow-lg text-left">
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.2] tracking-tighter whitespace-pre-line uppercase">
                    {copyData.section2Title}
                  </h3>
                </div>
                <p className="text-slate-300 text-lg md:text-xl font-medium whitespace-pre-line leading-relaxed">
                  {copyData.section2Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [4] 패키지 상세 소개 (White Background)
          ───────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 w-full">
            <div className="mb-6 text-center md:text-left">
              <h4 className={`text-2xl md:text-3xl font-black ${textColorTheme} tracking-tight`}>
                바디챌린지 6기<br className="hidden md:block" /> 스페셜 경품 라인업
              </h4>
              <p className="text-slate-500 mt-2 font-medium mb-6">총 1300만원 상당의 역대급 혜택!</p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md mx-auto md:mx-0">
              <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-square flex items-center justify-center bg-slate-50">
                <img src="/KakaoTalk_20260427_153639093.png" alt="스페셜 경품 1" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-square flex items-center justify-center bg-slate-50">
                <img src="/KakaoTalk_20260427_153639093_01.png" alt="스페셜 경품 2" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-square flex items-center justify-center bg-slate-50">
                <img src="/KakaoTalk_20260427_153639093_02.png" alt="스페셜 경품 3" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-square flex items-center justify-center bg-slate-50">
                <img src="/KakaoTalk_20260427_153639093_03.png" alt="스페셜 경품 4" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="flex-1 w-full text-center md:text-left">
            <p className={`${textColorTheme} font-bold tracking-widest mb-4`}>{copyData.packageSuper}</p>
            <h3 className="text-3xl md:text-5xl font-black text-black leading-tight mb-8 whitespace-pre-line">
              {copyData.packageTitle}
            </h3>
            <p className="text-slate-600 text-lg font-medium whitespace-pre-line mb-10 leading-relaxed">
              {copyData.packageDesc}
            </p>
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className={`${themeColor} text-white font-bold px-8 py-4 flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 w-full md:w-auto`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              온라인 참가 신청하기
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [5] Impact / Pricing Section
          ───────────────────────────────────────────── */}
      <section className="bg-[#f0f0f0] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-[0.9] tracking-tighter uppercase mb-6">
              YOUR<br/>SUMMER<br/>BEGINS NOW
            </h2>
            <div className="flex items-center gap-4 text-slate-800">
              <svg className="w-6 h-6 transform rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <p className="text-xl md:text-2xl font-bold">마인드휘트니스 도남점에서<br/>함께 시작해 보아요!</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
             <div className="bg-white p-10 flex flex-col justify-center shadow-lg">
                <p className="text-slate-500 font-bold mb-2">바디챌린지 참가비</p>
                <h4 className={`text-5xl md:text-7xl font-black ${textColorTheme} mb-6`}>
                  {copyData.priceSale}<span className="text-3xl md:text-4xl text-black">원</span>
                </h4>
                <p className="text-slate-600 font-medium leading-relaxed">
                  * 신청 및 문의 : 마인드휘트니스 도남점 인포 🏋️‍♀️🏋️<br/>
                  * 결제 후 환불이 불가할 수 있으니 신중하게 결정해 주세요.
                </p>
             </div>
             <div className="bg-black p-10 text-white flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-4">여름을 준비하세요 🌊🩱🪂</h4>
                <ul className="space-y-4 font-medium text-white/80">
                  <li className="flex gap-3">
                    <span className={`${textColorTheme}`}>1</span>
                    <span>지난번 많은 회원님들이 지원해주셨습니다! 올해 6기 모집 역시 반응이 정말 뜨겁습니다!!</span>
                  </li>
                  <li className="flex gap-3">
                    <span className={`${textColorTheme}`}>2</span>
                    <span>곧 있으면 다가올 여름, 바디챌린지를 목표로 잡고 한번 도전해 보시는건 어떠실까요~?</span>
                  </li>
                  <li className="flex gap-3">
                    <span className={`${textColorTheme}`}>3</span>
                    <span>경품도 받고, 건강도 지키고! 자존감 뿜뿜하는 올 여름을 만들어보세요.</span>
                  </li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [6] 결제 섹션 (Final CTA) - 임시 숨김 처리
          ───────────────────────────────────────────── */}
      {false && (
        <section id="payment-section-c" className="bg-[#e2e8f0] py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.3] tracking-tighter whitespace-pre-line mb-6">
                {copyData.finalTitle}
              </h3>
            </div>
            
            <div className={`w-full max-w-sm rounded-none bg-white p-8 shadow-2xl border-t-8 border-[#FF3B30]`}>
               <h4 className="mb-6 text-center text-xl font-bold text-slate-900">바디챌린지 6기 참가비 결제</h4>
               <PromotionPayment
                amount={50000}
                orderName="바디챌린지 6기 참가비"
                buttonLabel="50,000원 결제하기"
                buttonColor={`${themeColor} hover:bg-red-600 text-white font-black py-5 rounded-none`}
              />
            </div>
          </div>
        </section>
      )}

    </div>
  )
}
