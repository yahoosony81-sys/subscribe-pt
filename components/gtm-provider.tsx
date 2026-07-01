"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"
import { getPixelInfoByPath } from "@/utils/pixelConfig"

export function GtmProvider() {
  const pathname = usePathname();

  // 아직 경로를 불러오지 못했다면 렌더링하지 않음
  if (!pathname) return null;

  // 각 랜딩 페이지별 경로 확인
  const isNhLanding = pathname.startsWith('/nh-retarget-coffeelanding') || pathname.startsWith('/nh-burning-care') || pathname.startsWith('/nh-pain-membership') || pathname.startsWith('/nh-caremembership') || pathname.startsWith('/caremembership-jejusi');
  const isBodyChallenge = pathname.startsWith('/promo-bodychallenge');
  const isHallimLanding = pathname.startsWith('/hl-burning-caremember') || pathname.startsWith('/hl-caremembership') || pathname.startsWith('/hl-pain-membership');
  const isDnGroupPt = pathname.startsWith('/dn-group-pt');
  const isMyeongjiLanding = pathname.startsWith('/mg-');

  // 조건에 맞게 GTM 아이디 할당
  let gtmId = "";
  if (isNhLanding) {
    gtmId = pathname.startsWith('/nh-caremembership') ? "GTM-5VB56Q69" : "GTM-TGKR77FL";
  }
  if (isBodyChallenge) gtmId = "GTM-KQR8JJ44"; // 도남점 바디챌린지 GTM
  if (isHallimLanding) gtmId = "GTM-5VB56Q69"; // 한림점 GTM
  if (isMyeongjiLanding) gtmId = "GTM-TXNCJPBS"; // 부산명지점 GTM


  // 픽셀 ID를 utils/pixelConfig.ts 에서 자동 조회
  const pixelId = getPixelInfoByPath(pathname)?.pixelId ?? "";


  return (
    <>
      {/* ── GTM 스크립트 ── */}
      {gtmId && (
        <>
          <Script id="gtm-script" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `
          }} />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* ── 메타 픽셀 스크립트 ── */}
      {pixelId && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{
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
    </>
  )
}
