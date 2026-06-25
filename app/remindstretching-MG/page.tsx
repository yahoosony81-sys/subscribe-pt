import type { Metadata } from 'next'
import { RemindStretchingLanding } from './remind-stretching-landing'

export const metadata: Metadata = {
  title: '리마인드스트레칭 마곡점 | 당신의 몸이 기억하는 가장 가벼운 순간',
  description: '전문적인 신체 회복과 깊은 이완, 프리미엄 웰니스 스트레칭 클리닉. 1:1 맞춤 패시브 스트레칭으로 근본적인 통증 해소와 퍼포먼스 향상을 경험하세요.',
  openGraph: {
    title: '리마인드스트레칭 마곡점 | Re-mind Stretching',
    description: '당신의 몸이 기억하는 가장 가벼운 순간, Re-mind. 프리미엄 1:1 스트레칭 케어.',
  },
}

export default function RemindStretchingMGPage() {
  return <RemindStretchingLanding />
}
