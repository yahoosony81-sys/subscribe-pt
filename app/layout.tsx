import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: '마인드휘트니스 프로모션',
  description: '마인드휘트니스에서 준비한 특별한 프로모션을 확인해보세요!',
  openGraph: {
    title: '마인드휘트니스 프로모션',
    description: '마인드휘트니스에서 준비한 특별한 프로모션을 확인해보세요!',
  },
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


        {children}
        <Analytics />
      </body>
    </html>
  )
}
