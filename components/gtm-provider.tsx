"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"

export function GtmProvider() {
  const pathname = usePathname();
  
  // 아직 경로를 불러오지 못했다면 렌더링하지 않음
  if (!pathname) return null;

  // 노형점 랜딩인지 확인
  const isNhLanding = pathname.startsWith('/nh-retarget-coffeelanding');
  
  // 조건에 맞게 GTM 아이디 할당
  const gtmId = isNhLanding ? "GTM-TGKR77FL" : "GTM-5VB56Q69";

  return (
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
  )
}
