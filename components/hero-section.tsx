"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image

          src="/images/hero-bg.jpg"
          alt="커피한잔 - PT 트레이닝 전문 관리"

         
          

          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        {/* Badge */}
        <div className="mb-8 rounded-full bg-orange-500/90 px-6 py-2.5 backdrop-blur-sm">
          <span className="text-sm font-semibold tracking-wide text-white">
            한림점 ONLY 특별 프로그램
          </span>
        </div>

        {/* Main Title */}
        <h1 className="mb-4 max-w-4xl text-balance font-extrabold leading-tight tracking-tight text-white">
          <p className="font-[family-name:var(--font-nanum)] text-xl font-black md:text-3xl lg:text-4xl">
            PT도 구독하는 시대<br />제대로 관리 받자
          </p>
          <p className="mt-8 text-4xl font-black md:text-5xl lg:text-6xl">
            한달에
          </p>
          <p className="mt-1 text-lg font-semibold text-white/60 line-through md:text-2xl">
            500,000원
          </p>
          <p className="text-5xl font-black text-yellow-400 md:text-6xl lg:text-7xl">
            99,000<span className="text-3xl md:text-4xl">원</span>
          </p>
          <p className="mt-4 text-base font-medium text-white/90 md:text-lg lg:text-xl">
            월 구독 가격으로 1개월만 관리 받아 보세요
          </p>
        </h1>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span>전문 트레이너 상주</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span>1:1 맞춤 관리</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span>합리적인 가격</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}
