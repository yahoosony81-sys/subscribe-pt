import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: '마인드 휘트니스 한림점 | 5월 가정의 달 프로모션',
  description: '어머니 아버님께 근육을 선물하세요! 마인드 휘트니스 한림점 5월 가정의 달 특별 프로모션',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        {/* --- [1] GTM 헤드 코드 삽입 시작 --- */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5VB56Q69');
          `}
        </Script>
        {/* --- GTM 헤드 코드 삽입 끝 --- */}
      </head>
      <body className={`${notoSansKr.variable} font-sans antialiased`}>
        {/* --- [2] GTM 바디 코드(noscript) 삽입 시작 --- */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VB56Q69"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* --- GTM 바디 코드 삽입 끝 --- */}

        {children}
        <Analytics />
      </body>
    </html>
  )
}
