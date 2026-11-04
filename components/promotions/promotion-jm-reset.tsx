"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ContactModalJmReset } from "../contact-modal-jm-reset"

/**
 * ============================================================
 * 🟢 프로모션 리셋중문점 TEAM MIND
 * - 팀버핏(teambutfit.com) 감성 히어로 섹션
 * - 히어로 슬라이더 (4주 식단 개선 프로그램 + PERFECT WORKOUT)
 * - 네온 그린 (#CCFF00) 강조색
 * ============================================================
 */

export function PromotionJmReset() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const SLIDE_COUNT = 2

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDE_COUNT)
  }, [SLIDE_COUNT])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDE_COUNT) % SLIDE_COUNT)
  }, [SLIDE_COUNT])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      nextSlide()
    }, 2000)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchEndX.current = null
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return
    const diff = touchStartX.current - touchEndX.current
    if (diff > 45) {
      nextSlide()
    } else if (diff < -45) {
      prevSlide()
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  const scrollToForm = () => {
    setIsModalOpen(true)
  }

  const scrollToDietSection = () => {
    document.getElementById('diet-program-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="promo-jm-reset" className="bg-black font-sans text-white">
      {/* ── Google Fonts + Keyframes ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,900;1,900&family=Oswald:wght@700&display=swap');

        @keyframes fadeSlideUp {
          0%   { opacity: 0; transform: translateY(60px); }
          100% { opacity: 1; transform: translateY(0px); }
        }

        @keyframes pulseNeon {
          0%, 100% { text-shadow: 0 0 20px rgba(204,255,0,0.5), 0 0 40px rgba(204,255,0,0.25); }
          50%       { text-shadow: 0 0 35px rgba(204,255,0,0.85), 0 0 70px rgba(204,255,0,0.45); }
        }

        @keyframes shimmerBtn {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }

        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50%       { transform: translateY(8px); opacity: 1; }
        }

        .animate-fadeSlideUp-1 {
          opacity: 0;
          animation: fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
        }
        .animate-fadeSlideUp-2 {
          opacity: 0;
          animation: fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }
        .animate-fadeSlideUp-3 {
          opacity: 0;
          animation: fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both;
        }
        .animate-fadeSlideUp-4 {
          opacity: 0;
          animation: fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.85s both;
        }

        .neon-green {
          color: #CCFF00;
          animation: pulseNeon 3s ease-in-out infinite;
        }

        .cta-shimmer {
          position: relative;
          overflow: hidden;
        }
        .cta-shimmer::after {
          content: '';
          position: absolute;
          top: 0; left: -60%;
          width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmerBtn 2.8s ease-in-out infinite;
        }

        .scroll-hint {
          animation: scrollBounce 1.8s ease-in-out infinite;
        }
      `}</style>

      {/* GTM & Pixel tracking removed as per request */}

      {/* ═══════════════════════════════════════════════
          📌 [1] 히어로 섹션 — 자동 좌우 슬라이더 (2초 간격)
             - 슬라이드 1: 4주 식단 개선 프로그램 (11월 특별 프로그램)
             - 슬라이드 2: 기존 PERFECT WORKOUT / WE ARE TEAM RESET
          ═══════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "100svh" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-label="리셋중문점 메인 히어로 슬라이더"
      >
        {/* ── 슬라이드 트랙 (좌우 슬라이드 모션) ── */}
        <div
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            minHeight: "100svh",
          }}
        >
          {/* ══════ [슬라이드 1] 4주 식단 개선 프로그램 ══════ */}
          <div
            className="relative min-w-full w-full shrink-0 flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0d140e] to-black"
            style={{ minHeight: "100svh" }}
            role="group"
            aria-roledescription="slide"
            aria-label="슬라이드 1: RE:SET 4주 식단 개선 프로그램"
          >
            {/* 배경 은은한 앰비언트 글로우 (모바일에서 어둡게 덮지 않도록 최소화) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#CCFF00]/10 rounded-full blur-[140px] pointer-events-none" />

            {/* 슬라이드 1 콘텐츠 컨테이너 */}
            <div
              className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-10 md:px-12 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 lg:gap-12"
              style={{ minHeight: "100svh", paddingTop: "80px", paddingBottom: "115px" }}
            >
              {/* 텍스트 콘텐츠 영역 */}
              <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* 11월 특별 프로그램 배지 */}
                <div className="mb-3 sm:mb-5 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#CCFF00]/50 bg-[#CCFF00]/10 backdrop-blur-md shadow-[0_0_15px_rgba(204,255,0,0.2)]">
                  <span
                    className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-pulse"
                    style={{ boxShadow: "0 0 10px #CCFF00" }}
                  />
                  <span
                    className="text-[#CCFF00] text-xs sm:text-sm font-bold tracking-[0.22em] uppercase"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    11월 특별 프로그램 · 리셋중문점
                  </span>
                </div>

                {/* 메인 타이틀 */}
                <h2
                  className="text-white font-black tracking-tight mb-3 sm:mb-4"
                  style={{
                    fontFamily: "'Noto Sans KR', sans-serif",
                    fontSize: "clamp(2rem, 5.2vw, 4.2rem)",
                    lineHeight: 1.18,
                    letterSpacing: "-0.02em",
                    wordBreak: "keep-all",
                    textShadow: "0 2px 14px rgba(0,0,0,0.9)",
                  }}
                >
                  <span className="text-white">지금, </span>
                  <span className="neon-green">4주만</span>
                  <br />
                  달라져보세요.
                </h2>

                {/* 서브 카피 */}
                <div
                  className="max-w-xl mb-6 sm:mb-8 leading-relaxed"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif", wordBreak: "keep-all" }}
                >
                  <p className="text-white/90 text-sm sm:text-base md:text-xl font-medium">
                    내 몸을 관찰하고, 기록하며, 느끼는 지속 가능한 식습관.
                  </p>
                  <p className="text-[#CCFF00] text-xs sm:text-sm font-bold mt-1.5">
                    🥗 무조건 굶는 다이어트가 아닌, 평생 내 몸에 맞는 맞춤 식사법
                  </p>
                </div>

                {/* 버튼: 4주 식단개선 프로그램 자세히 보기 */}
                <div className="w-full sm:w-auto">
                  <button
                    onClick={scrollToDietSection}
                    className="cta-shimmer w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-8 py-3 sm:py-4 rounded-full bg-[#CCFF00] hover:bg-white text-black font-black text-[13px] min-[360px]:text-[14.5px] min-[400px]:text-base sm:text-lg tracking-tight sm:tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(204,255,0,0.45)] hover:shadow-[0_0_35px_rgba(255,255,255,0.7)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                  >
                    <span className="flex items-center justify-center flex-wrap gap-x-1.5 leading-tight text-center">
                      <span className="inline-block whitespace-nowrap">4주 식단개선 프로그램</span>
                      <span className="inline-block whitespace-nowrap">자세히 보기</span>
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 animate-bounce"
                    >
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* 포스터 이미지 원본 카드 영역 (모바일에서도 잘림 없이 온전하게 노출) */}
              <div className="w-full max-w-[280px] min-[400px]:max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] flex justify-center shrink-0">
                <div
                  onClick={scrollToDietSection}
                  className="group relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#CCFF00]/40 hover:border-[#CCFF00] shadow-[0_12px_45px_rgba(0,0,0,0.8),0_0_30px_rgba(204,255,0,0.3)] transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-[#111]"
                >
                  <img
                    src="/images/diet-hero.png"
                    alt="RE:SET 식단 개선 프로그램 - 지금 4주만 달라져보세요"
                    className="w-full h-auto object-contain block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-end justify-center p-4">
                    <span className="text-[#CCFF00] font-black text-xs sm:text-sm bg-black/80 px-3.5 py-1.5 rounded-full border border-[#CCFF00]/60">
                      클릭하여 상세 내용 보기 &darr;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ══════ [슬라이드 2] 기존 PERFECT WORKOUT 히어로 ══════ */}
          <div
            className="relative min-w-full w-full shrink-0 flex items-center justify-center overflow-hidden"
            style={{ minHeight: "100svh" }}
            role="group"
            aria-roledescription="slide"
            aria-label="슬라이드 2: TEAM RESET 소개"
          >
            {/* 배경 이미지 */}
            <img
              src="/images/리워드랜딩히어로최종사진.png"
              alt="리셋중문점 히어로"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 0 }}
            />

            {/* 다크 그라디언트 오버레이 */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.60) 100%)",
                zIndex: 1,
              }}
            />

            {/* 콘텐츠 래퍼 */}
            <div
              className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full"
              style={{ minHeight: "100svh", paddingTop: "80px", paddingBottom: "110px" }}
            >
              {/* 서브 배지 */}
              <div
                className="animate-fadeSlideUp-1 mb-8 inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#CCFF00]/40 bg-[#CCFF00]/10"
                style={{ backdropFilter: "blur(10px)" }}
              >
                <span
                  className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse"
                  style={{ boxShadow: "0 0 8px #CCFF00" }}
                />
                <span
                  className="text-[#CCFF00] text-xs font-bold tracking-[0.25em] uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  리셋중문점
                </span>
              </div>

              {/* 라인 1: PERFECT WORKOUT */}
              <h1
                className="animate-fadeSlideUp-2 leading-none uppercase text-white"
                style={{
                  fontFamily: "'Barlow Condensed', 'Oswald', 'Noto Sans KR', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(3.8rem, 13vw, 11rem)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.01em",
                  textShadow: "0 2px 16px rgba(0,0,0,0.9)",
                }}
              >
                <span className="neon-green">PERFECT</span>
                {" "}
                <span className="text-white">WORKOUT</span>
              </h1>

              {/* 라인 2: WE ARE TEAM RESET */}
              <h2
                className="animate-fadeSlideUp-3 leading-none uppercase mt-4"
                style={{
                  fontFamily: "'Barlow Condensed', 'Oswald', 'Noto Sans KR', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 7.5vw, 6.5rem)",
                  lineHeight: 1.0,
                  letterSpacing: "0.05em",
                  textShadow: "0 2px 14px rgba(0,0,0,0.9)",
                }}
              >
                <span className="text-white">WE ARE TEAM </span>
                <span className="neon-green">RESET</span>
              </h2>

              {/* 상시 프로그램 바로가기 버튼 */}
              <div className="animate-fadeSlideUp-4 mt-10 sm:mt-12 cursor-pointer z-20 w-full sm:w-auto px-4 sm:px-0">
                <button
                  onClick={() => {
                    document.getElementById('weekly-program-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#CCFF00]/15 hover:bg-[#CCFF00]/30 border border-[#CCFF00]/50 backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] cursor-pointer"
                >
                  <span
                    className="flex items-center justify-center flex-wrap gap-x-1.5 leading-tight text-center text-[#CCFF00] font-black text-[13px] min-[360px]:text-[14.5px] min-[400px]:text-base sm:text-xl md:text-2xl tracking-tight sm:tracking-wide drop-shadow-[0_0_8px_rgba(204,255,0,0.8)]"
                    style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                  >
                    <span className="inline-block whitespace-nowrap">리셋 중문 상시 프로그램</span>
                    <span className="inline-block whitespace-nowrap">자세히 보기</span>
                  </span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#CCFF00] animate-bounce">
                    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* 구분선 */}
              <div
                className="animate-fadeSlideUp-4 mt-10 mb-10 w-20 h-0.5"
                style={{ background: "linear-gradient(90deg, transparent, #CCFF00, transparent)" }}
              />
            </div>
          </div>
        </div>

        {/* ── 좌우 네비게이션 화살표 ── */}
        <button
          onClick={prevSlide}
          aria-label="이전 슬라이드"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-14 md:h-14 rounded-full bg-black/55 hover:bg-[#CCFF00] text-white hover:text-black border border-white/20 hover:border-[#CCFF00] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          aria-label="다음 슬라이드"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-14 md:h-14 rounded-full bg-black/55 hover:bg-[#CCFF00] text-white hover:text-black border border-white/20 hover:border-[#CCFF00] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* ── 슬라이드 인디케이터 (도트 + 페이지 번호) ── */}
        <div
          className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 bg-black/60 px-4 py-2 rounded-full border border-white/15 backdrop-blur-md"
          role="tablist"
          aria-label="히어로 슬라이드 선택"
        >
          <button
            onClick={() => goToSlide(0)}
            role="tab"
            aria-selected={currentSlide === 0}
            aria-label="1번 슬라이드: 4주 식단 개선 프로그램"
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentSlide === 0
                ? "w-8 h-2.5 bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/80"
            }`}
          />
          <button
            onClick={() => goToSlide(1)}
            role="tab"
            aria-selected={currentSlide === 1}
            aria-label="2번 슬라이드: PERFECT WORKOUT"
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentSlide === 1
                ? "w-8 h-2.5 bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/80"
            }`}
          />
          <span className="text-[11px] font-bold text-white/70 ml-1 tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {currentSlide + 1} / 2
          </span>
        </div>

        {/* ── 스크롤 힌트 ── */}
        <div
          className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
          style={{ zIndex: 20 }}
        >
          <span
            className="text-white/40 text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
          >
            Scroll
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path
              d="M8 0v16M2 10l6 6 6-6"
              stroke="#CCFF00"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.6"
            />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          📌 [신규 섹션] 🌿 RE:SET 11월 특별 프로그램: 4주 식단 개선 프로그램
          ═══════════════════════════════════════════════ */}
      <section
        id="diet-program-section"
        className="relative bg-gradient-to-b from-black via-[#0d140e] to-black py-20 md:py-28 border-t border-white/10 text-white overflow-hidden"
      >
        {/* 배경 은은한 빛 효과 */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#CCFF00]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* 섹션 상단 헤더 */}
          <div className="text-center mb-14 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CCFF00]/40 bg-[#CCFF00]/10 text-[#CCFF00] font-bold text-xs sm:text-sm tracking-wider uppercase mb-4">
              <span>🌿</span>
              <span>RE:SET 11월 특별 프로그램 OPEN!</span>
            </div>
            <h2
              className="text-white font-black tracking-tight leading-tight mb-4"
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)",
                wordBreak: "keep-all",
              }}
            >
              매일 먹는 음식, <br className="sm:hidden" />
              <span className="text-[#CCFF00]">내 몸에는 정말 잘 맞을까요?</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ wordBreak: "keep-all" }}>
              우리는 수많은 식단 정보를 알고 있지만, 정작 내가 먹은 음식에 몸이 어떻게 반응하는지는 잘 모르는 경우가 많습니다.
            </p>
          </div>

          {/* 1. 이미지(두 번째 사진) + 고민 체크리스트 & 프로그램 소개 (좌우 2컬럼) */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 mb-20 md:mb-28">
            {/* 사진 영역 (두 번째 사진: 왜 내 몸은 아직도 피곤할까요?) */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#CCFF00]/30 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(204,255,0,0.15)] group max-w-md w-full">
                <img
                  src="/images/diet-tired.png"
                  alt="왜 내 몸은 아직도 피곤할까요? - RE:SET 식단 개선 프로그램"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* 텍스트 설명 영역 */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              {/* 혹시 이런 고민 있으신가요? */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10 mb-8 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🤔</span>
                  <h3 className="text-lg sm:text-xl font-black text-white" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                    혹시 이런 고민 있으신가요?
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-lg shrink-0">😴</span>
                    <span className="text-sm sm:text-base font-semibold text-white/90">
                      점심만 먹으면 쏟아지는 식곤증
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-lg shrink-0">🤧</span>
                    <span className="text-sm sm:text-base font-semibold text-white/90">
                      감기에 자주 걸려 걱정이신 분
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-lg shrink-0">😮‍💨</span>
                    <span className="text-sm sm:text-base font-semibold text-white/90">
                      충분히 쉬어도 회복되지 않는 컨디션
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-lg shrink-0">⚖️</span>
                    <span className="text-sm sm:text-base font-semibold text-white/90">
                      체지방 관리와 식습관 개선이 필요하신 분
                    </span>
                  </li>
                </ul>
              </div>

              {/* 그래서 RE:SET이 준비했습니다! */}
              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#CCFF00]/15 to-[#CCFF00]/5 border-2 border-[#CCFF00]/40 shadow-[0_0_25px_rgba(204,255,0,0.1)]">
                <span className="text-xs sm:text-sm font-bold text-[#CCFF00] uppercase tracking-wider block mb-1">
                  SOLUTION
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white mb-3" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                  그래서 RE:SET이 준비했습니다! <br />
                  <span className="text-[#CCFF00]">🥗 4주 식단 개선 프로그램</span>
                </h4>
                <div className="text-white/85 text-sm sm:text-base leading-relaxed space-y-2" style={{ wordBreak: "keep-all" }}>
                  <p className="font-bold text-white">
                    무조건 적게 먹거나 참는 다이어트가 아닙니다.
                  </p>
                  <p className="text-white/70">
                    4주 동안 나의 식사와 몸의 변화를 직접 관찰하고 기록하며, <span className="text-[#CCFF00] font-bold">나에게 딱 맞는 평생 식습관</span>을 찾아가는 프로그램입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. ✨ 이런 변화를 기대할 수 있어요! (4개 카드) */}
          <div className="mb-20 md:mb-28">
            <div className="text-center mb-10">
              <span className="text-[#CCFF00] font-bold text-xs uppercase tracking-widest block mb-2">EXPECTED BENEFITS</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                ✨ 이런 변화를 기대할 수 있어요!
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* 혜택 1 */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#CCFF00]/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-[#CCFF00]/15 flex items-center justify-center text-[#CCFF00] font-black text-lg mb-4">
                  01
                </div>
                <h5 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  식후 졸음과 <br />
                  컨디션 변화 이해
                </h5>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed" style={{ wordBreak: "keep-all" }}>
                  혈당 스파이크와 음식 반응을 파악하여 식후 쏟아지는 피로를 극복합니다.
                </p>
              </div>

              {/* 혜택 2 */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#CCFF00]/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-[#CCFF00]/15 flex items-center justify-center text-[#CCFF00] font-black text-lg mb-4">
                  02
                </div>
                <h5 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  체지방 관리에 <br />
                  도움되는 식사 습관
                </h5>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed" style={{ wordBreak: "keep-all" }}>
                  굶지 않고 영양을 충분히 채우며 건강하게 지방을 연소하는 식습관을 만듭니다.
                </p>
              </div>

              {/* 혜택 3 */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#CCFF00]/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-[#CCFF00]/15 flex items-center justify-center text-[#CCFF00] font-black text-lg mb-4">
                  03
                </div>
                <h5 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  균형 잡힌 영양과 <br />
                  면역 건강 관리
                </h5>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed" style={{ wordBreak: "keep-all" }}>
                  내 몸의 대사와 면역력을 깨워 쉽게 지치지 않는 활력 있는 몸을 완성합니다.
                </p>
              </div>

              {/* 혜택 4 */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#CCFF00]/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-[#CCFF00]/15 flex items-center justify-center text-[#CCFF00] font-black text-lg mb-4">
                  04
                </div>
                <h5 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  스스로 식단을 <br />
                  관리하는 자립 능력
                </h5>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed" style={{ wordBreak: "keep-all" }}>
                  프로그램이 끝난 후에도 평생 스스로 유지할 수 있는 식습관 기준을 세웁니다.
                </p>
              </div>
            </div>
          </div>

          {/* 3. 📢 프로그램 참여 안내 & 신청 CTA 박스 */}
          <div className="rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-2 border-[#CCFF00]/40 p-7 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center">
            <span className="inline-block px-3.5 py-1 bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] text-xs font-bold rounded-full tracking-wider uppercase mb-4">
              PROGRAM INFORMATION
            </span>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-8"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              📢 프로그램 참여 안내
            </h3>

            {/* 안내 4개 박스 그리드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-8">
              <div className="p-4 sm:p-5 rounded-xl bg-black/60 border border-white/10 text-center">
                <div className="text-xs text-white/50 font-bold mb-1">📅 모집 기간</div>
                <div className="text-sm sm:text-base font-black text-[#CCFF00]">지금부터 신청 가능</div>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-black/60 border border-white/10 text-center">
                <div className="text-xs text-white/50 font-bold mb-1">🗓 시작 일정</div>
                <div className="text-sm sm:text-base font-black text-white">2026년 12월 1일</div>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-black/60 border border-white/10 text-center">
                <div className="text-xs text-white/50 font-bold mb-1">⏰ 진행 기간</div>
                <div className="text-sm sm:text-base font-black text-white">4주 코스</div>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-black/60 border border-white/10 text-center">
                <div className="text-xs text-white/50 font-bold mb-1">💰 참가비</div>
                <div className="text-base sm:text-lg font-black text-[#CCFF00]">100,000원</div>
              </div>
            </div>

            {/* 마무리 메시지 & 신청 버튼 */}
            <p className="text-white/80 text-base sm:text-lg font-bold mb-7 leading-relaxed" style={{ wordBreak: "keep-all" }}>
              평생 먹어야 할 음식, 이제는 내 몸에 맞게 선택해 보세요!
            </p>

            <button
              onClick={scrollToForm}
              className="cta-shimmer inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-[#CCFF00] hover:bg-white text-black font-black text-base sm:text-xl tracking-tight transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] hover:scale-105 active:scale-95 cursor-pointer"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <span>💚 RE:SET 4주 식단 개선 프로그램, 지금 신청하세요!</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── Fixed Sticky Dual CTA Buttons ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-3.5 bg-black/90 backdrop-blur-md border-t border-white/10 flex justify-center items-center">
        <div className="w-full max-w-4xl grid grid-cols-2 gap-2 sm:gap-3.5">
          {/* 1. 4주 식단개선 프로그램 신청하기 버튼 */}
          <button
            id="sticky-diet-program-btn"
            onClick={scrollToForm}
            className="cta-shimmer flex flex-col items-center justify-center py-2.5 sm:py-3.5 px-2 sm:px-4 rounded-xl font-black uppercase text-center cursor-pointer transition-all duration-200"
            style={{
              fontFamily: "'Barlow Condensed', 'Oswald', 'Noto Sans KR', sans-serif",
              background: "#CCFF00",
              color: "#000000",
              border: "none",
              boxShadow: "0 0 0 2px #CCFF00, 0 8px 30px rgba(204,255,0,0.35)",
              transition: "background 0.18s, box-shadow 0.18s, transform 0.1s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.background = "#FFFFFF"
              el.style.boxShadow = "0 0 0 2px #FFFFFF, 0 8px 40px rgba(204,255,0,0.6)"
              el.style.transform = "scale(1.02)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.background = "#CCFF00"
              el.style.boxShadow = "0 0 0 2px #CCFF00, 0 8px 30px rgba(204,255,0,0.35)"
              el.style.transform = "scale(1)"
            }}
            onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.98)" }}
            onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1.02)" }}
          >
            <span
              className="text-[12px] min-[400px]:text-[13.5px] sm:text-base md:text-lg font-black tracking-tight leading-tight"
              style={{ wordBreak: "keep-all" }}
            >
              4주 식단개선 프로그램 신청하기
            </span>
            <span
              className="text-[9.5px] min-[400px]:text-[10.5px] sm:text-xs font-bold text-black/75 mt-0.5 leading-tight tracking-normal"
              style={{ wordBreak: "keep-all" }}
            >
              (12월 1일 시작 · 선착순 접수)
            </span>
          </button>

          {/* 2. 리셋 상담 연락처 보기 버튼 */}
          <button
            id="sticky-cta-btn"
            onClick={scrollToForm}
            className="cta-shimmer flex flex-col items-center justify-center py-2.5 sm:py-3.5 px-2 sm:px-4 rounded-xl font-black uppercase text-center cursor-pointer transition-all duration-200"
            style={{
              fontFamily: "'Barlow Condensed', 'Oswald', 'Noto Sans KR', sans-serif",
              background: "#CCFF00",
              color: "#000000",
              border: "none",
              boxShadow: "0 0 0 2px #CCFF00, 0 8px 30px rgba(204,255,0,0.35)",
              transition: "background 0.18s, box-shadow 0.18s, transform 0.1s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.background = "#FFFFFF"
              el.style.boxShadow = "0 0 0 2px #FFFFFF, 0 8px 40px rgba(204,255,0,0.6)"
              el.style.transform = "scale(1.02)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.background = "#CCFF00"
              el.style.boxShadow = "0 0 0 2px #CCFF00, 0 8px 30px rgba(204,255,0,0.35)"
              el.style.transform = "scale(1)"
            }}
            onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.98)" }}
            onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1.02)" }}
          >
            <span
              className="text-[12px] min-[400px]:text-[13.5px] sm:text-base md:text-lg font-black tracking-tight leading-tight"
              style={{ wordBreak: "keep-all" }}
            >
              리셋 상담(문자/전화) 연락처 보기
            </span>
            <span
              className="text-[9.5px] min-[400px]:text-[10.5px] sm:text-xs font-bold text-black/75 mt-0.5 leading-tight tracking-normal"
              style={{ wordBreak: "keep-all" }}
            >
              (시간표, 가격, 기타 문의사항)
            </span>
          </button>
        </div>
      </div>

      <ContactModalJmReset
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
