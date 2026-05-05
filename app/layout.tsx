import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { GtmProvider } from '@/components/gtm-provider'
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: '마인드 휘트니스 노형점 | 5월 가정의 달 프로모션',
  description: '어머니 아버님께 근육을 선물하세요! 마인드 휘트니스 노형점 5월 가정의 달 특별 프로모션',
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
      </head>
      <body className={`${notoSansKr.variable} font-sans antialiased`}>
        <GtmProvider />

        {children}
        <Analytics />
      </body>
    </html>
  )
}
