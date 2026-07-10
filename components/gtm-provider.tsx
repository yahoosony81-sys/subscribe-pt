"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"

export function GtmProvider() {
  const pathname = usePathname();

  // 아직 경로를 불러오지 못했다면 렌더링하지 않음
  if (!pathname) return null;

  // 각 랜딩 페이지별 경로 확인
  const isNhLanding = pathname.startsWith('/nh-retarget-coffeelanding') || pathname.startsWith('/nh-burning-care') || pathname.startsWith('/nh-pain-membership') || pathname.startsWith('/nh-caremembership') || pathname.startsWith('/caremembership-jejusi');
  const isDnLanding = pathname.startsWith('/dn-') || pathname.startsWith('/promo-bodychallenge') || pathname.startsWith('/donam-july-promo');
  const isHallimLanding = pathname.startsWith('/hl-burning-caremember') || pathname.startsWith('/hl-caremembership') || pathname.startsWith('/hl-pain-membership') || pathname.startsWith('/caremembership-hallim');
  const isMyeongjiLanding = pathname.startsWith('/mg-');

  // 조건에 맞게 GTM 아이디 할당
  let gtmId = "";
  if (isNhLanding) {
    gtmId = pathname.startsWith('/nh-caremembership') ? "GTM-5VB56Q69" : "GTM-TGKR77FL";
  }
  if (isDnLanding) gtmId = "GTM-KQR8JJ44"; // 도남점 GTM
  if (isHallimLanding) gtmId = "GTM-5VB56Q69"; // 한림점 GTM
  if (isMyeongjiLanding) gtmId = "GTM-TXNCJPBS"; // 부산명지점 GTM

  // ※ 메타 픽셀은 각 프로모션 컴포넌트 내부에서 직접 관리합니다.
  //    (GtmProvider에서 중복 로드하면 Duplicate Pixel ID 에러 발생)

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
    </>
  )
}

