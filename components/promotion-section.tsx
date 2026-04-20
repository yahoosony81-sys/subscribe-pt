"use client"

import Image from "next/image"

export function PromotionSection() {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "1:1 맞춤 PT",
      description: "시니어 전문 트레이너의 개인 맞춤 운동 프로그램"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      ),
      title: "3개월 등록시 1개월 무료",
      description: "가정의 달 한정 특별 혜택으로 더 알뜰하게"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      ),
      title: "건강 체크업 제공",
      description: "체성분 분석 및 건강 상담 무료 제공"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20v-6M6 20V10M18 20V4"/>
        </svg>
      ),
      title: "체계적인 운동 관리",
      description: "주간 운동 일지 및 진행 상황 리포트 제공"
    }
  ]

  return (
    <section className="relative py-24">
      {/* Background with Gym Interior */}
      <div className="absolute inset-0">
        <Image
          src="/images/gym-interior.jpg"
          alt="마인드 휘트니스 헬스장 내부"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/85 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-amber-400">
            Special Promotion
          </span>
          <h2 className="mb-6 text-balance text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            5월 한정 특별 혜택
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-white/80">
            부모님의 건강한 삶을 위해 마인드 휘트니스가 준비한
            <br className="hidden md:block" />
            가정의 달 특별 프로모션을 만나보세요
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-amber-400/30 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-xl bg-amber-400/20 p-3 text-amber-400">
                {benefit.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="leading-relaxed text-white/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Promotion Period */}
        <div className="mt-12 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-6 text-center backdrop-blur-md">
          <p className="text-lg font-medium text-white">
            <span className="text-amber-400">프로모션 기간:</span> 2026년 5월 1일 ~ 5월 31일
          </p>
          <p className="mt-2 text-sm text-white/70">
            사전 신청 시 추가 할인 혜택 제공
          </p>
        </div>
      </div>
    </section>
  )
}
