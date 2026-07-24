"use client"

import Script from "next/script"
import { getPixelId } from "@/utils/pixelConfig"

/**
 * ============================================================
 * 🔥 프로모션 노형점 [케어 멤버십]
 * ============================================================
 */

const copyData = {
  offerTitle: "마인드휘트니스 노형점\n월 구독형 [케어 멤버십]",
  offerBenefit: [
    "1. 부담 없는 월 5회, 하루 딱 25분 밀착 관리",
    "2. 헬스 기구의 정확한 사용법과 올바른 자세 티칭",
    "3. 정밀한 체성분 분석과 나에게 딱 맞춘 1:1 맞춤 식단",
    "4. 내 편이 되어주는 담당 트레이너와 즐겁게 운동"
  ],
  finalTitle: "고민은 끝!\n월 5회 25분 구독형 케어 멤버십 오픈",
  finalSub: "망설이면 선착순 마감, 지금 신청서 작성하고 혜택 받기",
}

export function PromotionNhCaremembership() {
  const pixelId = getPixelId("nohyeong");

  return (
    <div id="promo-nh-caremembership" className="promotion-nh-container bg-white font-sans text-slate-900 tracking-tight">
      {/* Script Tags (same as nohyeong) */}
      <Script id="gtm-nh-caremembership" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TGKR77FL');
        `
      }} />
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TGKR77FL"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>

      {pixelId && (
        <>
          <Script id="meta-pixel-nh-caremembership" strategy="afterInteractive" dangerouslySetInnerHTML={{
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

      

    </div>
  )
}
