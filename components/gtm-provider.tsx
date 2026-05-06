"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"

export function GtmProvider() {
  const pathname = usePathname();

  // 아직 경로를 불러오지 못했다면 렌더링하지 않음
  if (!pathname) return null;

  // 각 랜딩 페이지별 경로 확인
  const isNhLanding = pathname.startsWith('/nh-retarget-coffeelanding');
  const isBodyChallenge = pathname.startsWith('/promo-bodychallenge');

  // 조건에 맞게 GTM 아이디 할당
  const gtmId = isNhLanding ? "GTM-TGKR77FL" : "GTM-5VB56Q69";
  
  // 조건에 맞게 픽셀 아이디 할당
  let pixelId = "931401023110366"; // 기본 픽셀
  if (isNhLanding) pixelId = "891686733924318"; // 노형점 픽셀
  if (isBodyChallenge) pixelId = "26658899260438637"; // 바디챌린지 픽셀

  return (
    <>
      {/* ── GTM 스크립트 (바디챌린지 제외) ── */}
      {!isBodyChallenge && (
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

      {/* ── 메타 픽셀 스크립트 (새로 추가됨) ── */}
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
  )
}
