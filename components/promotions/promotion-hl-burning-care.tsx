"use client"

import Script from "next/script"
import { getPixelId } from "@/utils/pixelConfig"

/**
 * ============================================================
 * 🔥 프로모션 한림점 [버닝 케어 멤버십]
 * ============================================================
 */

const copyData = {
  badge: "DIET RESET",
  heroSuper: "죽어도 안 빠지는 팔뚝살·허벅지살, 이유가 있습니다!",
  heroTitle1: "BURNING",
  heroTitle2: "CARE",
  heroTitle3: "MEMBERSHIP",
  heroBoxText1: "다이어트 전,",
  heroBoxText2: "고민 부위에 미리",
  heroBoxText3: "불을 지펴야 합니다!",
  heroHook: "다이어트만 하면 얼굴과 가슴 살만 빠지나요?\n고민 부위는 그대로인 이유, '순서'가 잘못되었기 때문입니다.",

  painTitle: "왜 내 고민 부위는\n그대로일까요?",
  painSub: "팔뚝과 허벅지는 조직이 단단하고 순환이 어려워\n가장 나중에 빠지는 부위입니다.\n무작정 하는 다이어트는 얼굴과 가슴 볼륨만 앗아갑니다.",

  solutionTitle: "본격 감량 전,\n'리셋'이 필요합니다",
  solutionDesc: "핵심은 '순서'입니다.\n\n🔥 감량 1~2달 전부터 해당 부위의 순환을 늘리고\n💪 근육을 자극하여 살이 빠질 수 있는 상태로 만듭니다.\n🎯 미리 관리된 부위는 다이어트 시 함께 연소됩니다.",

  offerTitle: "마인드 휘트니스\n[케어 멤버십]",
  offerPrice: "월 99,000원",
  offerBenefit: [
    "1. 한 달 총 5회 체계적 밀착 관리",
    "2. 회당 25분 집중 타겟팅 수업",
    "3. 기구 사용법 및 올바른 자세 교정",
    "4. 맞춤 운동량 & 식단 & 향후 플랜 상담"
  ],

  finalTitle: "딱 2달만\n먼저 관리하세요!",
  finalSub: "케어 멤버십으로 고민 부위를 예열하면,\n당신이 원하던 부위부터 빠지는 신기한 결과를 얻을 수 있습니다.",
}

export function PromotionHlBurningCare() {
  const themeColor = "bg-[#B91C1C]"       // 빨간색 (버닝 테마)
  const themeAccent = "bg-[#FACC15]"      // 노란색
  const textColorTheme = "text-[#B91C1C]"

  const pixelId = getPixelId("hallim");

  return (
    <div id="promo-hl-burning-care" className="promotion-hl-container bg-white font-sans text-slate-900 tracking-tight">
      {pixelId && (
        <>
          <Script id="meta-pixel-hl-burning-care" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `
          }} />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      

      {/* ─────────────────────────────────────────────
          📌 [5] Final CTA Section
          ───────────────────────────────────────────── */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-black leading-tight mb-8 whitespace-pre-line">
            {copyData.finalTitle}
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-medium mb-12 whitespace-pre-line">
            {copyData.finalSub}
          </p>
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-600 text-white font-black px-6 md:px-10 py-4 md:py-5 rounded-full text-base sm:text-xl md:text-2xl hover:bg-red-700 transition-all hover:scale-105 shadow-2xl flex items-center gap-2 md:gap-3 mx-auto break-keep"
          >
            지금 케어 멤버십 체험 신청하기
            <svg className="w-5 h-5 md:w-6 md:h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      </section>

    </div>
  )
}
