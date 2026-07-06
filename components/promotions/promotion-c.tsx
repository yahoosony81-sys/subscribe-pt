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
    <div id="promo-c" className="promotion-c-container bg-white font-sans text-slate-900 tracking-tight">
      
      

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
