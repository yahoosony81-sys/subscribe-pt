"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ContactModalJmReset } from "../contact-modal-jm-reset"

/**
 * ============================================================
 * 🟢 프로모션 리셋중문점 TEAM MIND
 * - 팀버핏(teambutfit.com) 감성 히어로 섹션
 * - 히어로 슬라이더 (기존 히어로 + 자세 관리 특별 클래스)
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
    }, 5000)
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
          📌 [1] 히어로 섹션 — 영상 배경 + 텍스트 오버레이
          ═══════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════
          📌 [1] 히어로 섹션 — 자동 좌우 슬라이더
             - 슬라이드 1: 기존 히어로 (PERFECT WORKOUT / WE ARE TEAM RESET)
             - 슬라이드 2: 자세 관리 특별 클래스 (척추 건강을 위한 교정 운동)
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
          {/* ══════ [슬라이드 1] 현재 이미지 & 기존 히어로 콘텐츠 ══════ */}
          <div
            className="relative min-w-full w-full shrink-0 flex items-center justify-center overflow-hidden"
            style={{ minHeight: "100svh" }}
            role="group"
            aria-roledescription="slide"
            aria-label="슬라이드 1: TEAM RESET 소개"
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
                  "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.80) 100%)",
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
                }}
              >
                <span className="text-white">WE ARE TEAM </span>
                <span className="neon-green">RESET</span>
              </h2>

              {/* 상시 프로그램 바로가기 버튼 */}
              <div className="animate-fadeSlideUp-4 mt-12 cursor-pointer z-20">
                <button
                  onClick={() => {
                    document.getElementById('weekly-program-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center gap-4 px-8 py-4 rounded-full bg-[#CCFF00]/15 hover:bg-[#CCFF00]/30 border border-[#CCFF00]/50 backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] cursor-pointer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#CCFF00] animate-bounce">
                    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#CCFF00] font-black text-xl md:text-2xl tracking-wide drop-shadow-[0_0_8px_rgba(204,255,0,0.8)]" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                    리셋 중문 상시 프로그램 자세히 보기
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#CCFF00] animate-bounce">
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

          {/* ══════ [슬라이드 2] 추가 이미지 & 좌측 텍스트 (자세 관리 특별 클래스) ══════ */}
          <div
            className="relative min-w-full w-full shrink-0 flex items-center overflow-hidden"
            style={{ minHeight: "100svh" }}
            role="group"
            aria-roledescription="slide"
            aria-label="슬라이드 2: 리셋 중문점- 자세 관리 특별 클래스"
          >
            {/* 배경 이미지: 강사가 우측에 위치한 특별 클래스 16:9 고화질 이미지 */}
            <img
              src="/images/16대9선명이미지1.png"
              alt="리셋 중문점- 자세 관리 특별 클래스 - 척추 건강을 위한 교정 운동"
              className="absolute inset-0 w-full h-full object-cover object-[75%_center] sm:object-[72%_center] md:object-[75%_center]"
              style={{ zIndex: 0 }}
            />

            {/* PC 데스크톱 다크 그라디언트: 좌측 텍스트 영역을 집중적으로 어둡게 처리하여 시인성 극대화, 우측 인물은 자연스럽게 노출 */}
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.82) 42%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.12) 100%)",
                zIndex: 1,
              }}
            />

            {/* 모바일 다크 그라디언트: 상하 및 전체적인 텍스트 가독성 확보 */}
            <div
              className="absolute inset-0 block md:hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.68) 50%, rgba(0,0,0,0.95) 100%)",
                zIndex: 1,
              }}
            />

            {/* 상하단 경계 부드러운 페이드 오버레이 */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, transparent 18%, transparent 80%, rgba(0,0,0,0.85) 100%)",
                zIndex: 2,
              }}
            />

            {/* 좌측 텍스트 콘텐츠 영역 */}
            <div
              className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col items-start justify-center text-left"
              style={{ minHeight: "100svh", paddingTop: "80px", paddingBottom: "110px" }}
            >
              {/* 특별 클래스 배지 */}
              <div
                className="mb-5 sm:mb-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#CCFF00]/50 bg-[#CCFF00]/10 backdrop-blur-md shadow-[0_0_15px_rgba(204,255,0,0.2)]"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-pulse"
                  style={{ boxShadow: "0 0 10px #CCFF00" }}
                />
                <span
                  className="text-[#CCFF00] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  SPECIAL CLASS · 리셋중문점
                </span>
              </div>

              {/* 메인 타이틀: 리셋 중문점- 자세 관리 특별 클래스 */}
              <h2
                className="text-white font-black tracking-tight mb-3 sm:mb-4"
                style={{
                  fontFamily: "'Noto Sans KR', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 4.2rem)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  wordBreak: "keep-all",
                }}
              >
                <span className="text-white">리셋 중문점 -</span>{" "}
                <span className="neon-green">자세 관리 특별 클래스</span>
              </h2>

              {/* 서브 타이틀: 척추 건강을 위한 교정 운동 */}
              <div
                className="flex items-center gap-3 mb-6"
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                <span className="hidden sm:inline-block w-8 h-[3px] bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
                <p
                  className="text-[#CCFF00] font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight leading-snug drop-shadow-[0_0_12px_rgba(204,255,0,0.5)]"
                  style={{ wordBreak: "keep-all" }}
                >
                  척추 건강을 위한 교정 운동
                </p>
              </div>

              {/* 강사 안내 문구 */}
              <div
                className="max-w-xl mb-8 leading-relaxed"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", wordBreak: "keep-all" }}
              >
                <p className="text-white/90 text-base sm:text-lg md:text-xl font-semibold">
                  SNPE 협회 인증강사 / 바른자세 운동 지도사 <span className="text-[#CCFF00] font-bold">&lsquo;김윤진&rsquo; 강사</span>
                </p>
              </div>

              {/* 액션 버튼 */}
              <div className="w-full sm:w-auto">
                <button
                  onClick={() => {
                    document.getElementById('reward-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="cta-shimmer flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#CCFF00] hover:bg-white text-black font-black text-base sm:text-lg tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(204,255,0,0.5)] hover:shadow-[0_0_35px_rgba(255,255,255,0.7)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                  <span>특별 클래스 자세히 보기</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </button>
              </div>
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
          className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 bg-black/50 px-4 py-2 rounded-full border border-white/15 backdrop-blur-md"
          role="tablist"
          aria-label="히어로 슬라이드 선택"
        >
          <button
            onClick={() => goToSlide(0)}
            role="tab"
            aria-selected={currentSlide === 0}
            aria-label="1번 슬라이드: PERFECT WORKOUT"
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
            aria-label="2번 슬라이드: 리셋 중문점- 자세 관리 특별 클래스"
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
          📌 [새로운 섹션] 10월 특별 클래스 혜택
          ═══════════════════════════════════════════════ */}
      <section id="reward-section" className="bg-black py-20 md:py-28 border-t border-white/10 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2
              className="font-black uppercase leading-tight text-white"
              style={{
                fontFamily: "'Barlow Condensed', 'Oswald', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.01em",
              }}
            >
              <span className="neon-green">10월 특별 클래스</span> 혜택
            </h2>
          </div>

          {/* 1. 10.31 RE:SET 교정운동 스페셜 클래스 (이미지 좌, 텍스트 우) */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-20 md:mb-32">
            {/* 사진 영역 */}
            <div className="w-full lg:w-[45%] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(204,255,0,0.15)] border border-white/10 lg:sticky lg:top-24">
              <img
                src="/images/김윤진텍스트1.png"
                alt="우리 아이 구부정한 자세 더 늦기전에 교정하세요! - 바른자세 전문강사 김윤진"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '1/1' }}
              />
            </div>

            {/* 텍스트 영역 */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center">
              {/* 타겟 & 일정 & 교육장소 배지 */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
                <span
                  className="text-[#CCFF00] font-black text-sm sm:text-base md:text-lg border-2 border-[#CCFF00] bg-[#CCFF00]/15 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 shadow-[0_0_20px_rgba(204,255,0,0.3)] flex items-center gap-2"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  <span>📅</span>
                  <span>10월 31일 오전 9시 / 10시 스페셜 클래스</span>
                </span>

                {/* 교육장소 : 리셋중문점 (네이버 지도 바로가기 버튼) */}
                <a
                  href="https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EB%8C%80%ED%8F%AC%EC%A4%91%EC%95%99%EB%A1%9C%206-8%203%EC%B8%B5/place/2058980846?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=%2Fhome%3FfromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607141452%26locale%3Dko%26svcName%3Dmap_pcv5%26searchText%3D%EC%A0%9C%EC%A3%BC%20%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EB%8C%80%ED%8F%AC%EC%A4%91%EC%95%99%EB%A1%9C%206-8%203%EC%B8%B5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/10 hover:bg-[#CCFF00] border border-[#CCFF00]/50 hover:border-[#CCFF00] text-white hover:text-black font-bold text-xs sm:text-sm md:text-base transition-all duration-300 shadow-[0_0_15px_rgba(204,255,0,0.2)] hover:shadow-[0_0_25px_rgba(204,255,0,0.5)] hover:scale-105 active:scale-95 cursor-pointer no-underline"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  <span className="text-white/70 group-hover:text-black/80 font-medium">📍 교육장소 :</span>
                  <span className="text-[#CCFF00] group-hover:text-black font-black underline underline-offset-2">리셋중문점</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#CCFF00] group-hover:text-black ml-0.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>

                <span
                  className="text-white/90 font-bold text-xs sm:text-sm border border-white/25 bg-white/10 rounded-full px-3.5 py-2"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  학부모 &amp; 자녀 추천
                </span>
              </div>

              {/* 학부모 공감 유도 박스 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.05] border border-white/10 mb-8 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <p className="text-white text-base sm:text-lg font-bold leading-relaxed" style={{ wordBreak: "keep-all" }}>
                  &ldquo;우리 아이 자세가 안 좋은데 한번 배워보게 할까?&rdquo;<br />
                  &ldquo;내가 직접 배워서 집에서 매일 바르게 알려줘야겠다!&rdquo;
                </p>
                <p className="text-white/60 text-xs sm:text-sm mt-3 font-normal leading-relaxed" style={{ wordBreak: "keep-all" }}>
                  단순한 일회성 운동 체험이 아닌, 부모와 아이가 평생 활용할 수 있는 바른 자세 습관을 심어드립니다.
                </p>
              </div>

              {/* 3대 핵심 혜택 리스트 (제목만 유지) */}
              <div className="space-y-3.5 mb-2">
                {/* 혜택 1 */}
                <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-white/[0.04] border-l-[4px] border-l-[#CCFF00] border-y border-r border-white/10">
                  <span className="text-xs font-black px-2 py-0.5 rounded bg-[#CCFF00] text-black shrink-0">
                    혜택 01
                  </span>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-white">
                    50분에 배우는 교정운동 핵심 노하우
                  </h4>
                </div>

                {/* 혜택 2 */}
                <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-white/[0.04] border-l-[4px] border-l-[#CCFF00] border-y border-r border-white/10">
                  <span className="text-xs font-black px-2 py-0.5 rounded bg-[#CCFF00] text-black shrink-0">
                    혜택 02
                  </span>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-white">
                    집에서도 실천 가능한 운동 가이드북 무료 제공
                  </h4>
                </div>

                {/* 혜택 3 */}
                <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-white/[0.04] border-l-[4px] border-l-[#CCFF00] border-y border-r border-white/10">
                  <span className="text-xs font-black px-2 py-0.5 rounded bg-[#CCFF00] text-black shrink-0 self-start sm:self-center mt-0.5 sm:mt-0">
                    혜택 03
                  </span>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-white flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span>할인 혜택 파격 참가비</span>
                    <span className="inline-flex items-baseline gap-1.5 whitespace-nowrap">
                      <span className="line-through text-white/45 text-sm sm:text-base font-medium">50,000원</span>
                      <span className="text-[#CCFF00] font-bold text-sm sm:text-base">→</span>
                      <span className="text-[#CCFF00] text-xl sm:text-2xl md:text-3xl font-black drop-shadow-[0_0_12px_rgba(204,255,0,0.5)]">
                        20,000원
                      </span>
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 특별 클래스 혜택 2 (텍스트 좌, 이미지 우) */}
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-10">
            {/* 사진 영역 */}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(204,255,0,0.15)] border border-white/10 transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/images/김윤진텍스트2.png"
                alt="근본적인 척추 건강 바른자세 교정운동으로 개선해보세요! - 리셋 중문점 10월 특별 클래스"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '1/1' }}
              />
            </div>
            {/* 텍스트 영역 (공간 확보) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-2 md:px-8">
              <div
                className="text-[#CCFF00] font-bold text-xs tracking-[0.2em] mb-4 uppercase inline-block border border-[#CCFF00] rounded-full px-4 py-1"
                style={{ fontFamily: "'Inter', sans-serif", width: "fit-content" }}
              >
                SPECIAL BENEFIT 02
              </div>
              <h3
                className="text-3xl md:text-4xl font-black mb-2 leading-tight text-white"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", wordBreak: "keep-all" }}
              >
                10월 특별 클래스 혜택 02
              </h3>
              <p
                className="text-white/60 font-medium text-sm md:text-base mb-8"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", wordBreak: "keep-all" }}
              >
                (상세 안내 문구가 들어갈 영역입니다)
              </p>
              
              <ul className="space-y-6">
                <li className="flex flex-col border-l-[3px] border-[#CCFF00] pl-5">
                  <span className="text-xl font-bold mb-1 text-white">🎁 수강 회원 특별 혜택</span>
                  <span className="text-white/60 text-sm md:text-base leading-relaxed word-break-keep">
                    여기에 상세 혜택 및 제공 상품 안내 텍스트가 입력될 예정입니다.
                  </span>
                </li>
                <li className="flex flex-col border-l-[3px] border-[#CCFF00] pl-5">
                  <span className="text-xl font-bold mb-1 text-white">🔥 특별 프로모션 지원</span>
                  <span className="text-white/60 text-sm md:text-base leading-relaxed word-break-keep">
                    여기에 상세 혜택 및 제공 상품 안내 텍스트가 입력될 예정입니다.
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          📌 [2] 브랜드 메시지 — Why Team Mind
          ═══════════════════════════════════════════════ */}
      <section className="bg-black py-20 md:py-28 border-t border-white/10 pb-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p
            className="text-[#CCFF00] text-xs tracking-[0.35em] font-bold mb-6 uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Why Team Reset
          </p>
          <h2
            className="font-black uppercase leading-tight text-white"
            style={{
              fontFamily: "'Barlow Condensed', 'Oswald', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5.6vw, 4.8rem)",
              letterSpacing: "-0.01em",
            }}
          >
            운동은 의지가 아니라
            <br />
            <span style={{ color: "#CCFF00" }}>환경</span>이 바꿉니다.
          </h2>
          <p className="mt-8 text-white/60 text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-medium" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
            혼자서는 3일도 못 가는 운동,
            <br className="md:hidden" />{" "}
            <span className="text-white font-bold">팀 리셋</span>과 함께하면 달라집니다.
            <br />
            전문강사가 직접 이끌어 드리는
            <br className="md:hidden" />{" "}
            <span className="text-[#CCFF00] font-bold">100일 그룹 트레이닝</span>을 경험해보세요.
          </p>

        </div>
      </section>

      {/* ── Fixed Sticky Dual CTA Buttons ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-3.5 bg-black/90 backdrop-blur-md border-t border-white/10 flex justify-center items-center">
        <div className="w-full max-w-4xl grid grid-cols-2 gap-2 sm:gap-3.5">
          {/* 1. 10/31 스페셜 클래스 신청하기 버튼 */}
          <button
            id="sticky-special-class-btn"
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
              10/31 스페셜 클래스 신청하기
            </span>
            <span
              className="text-[9.5px] min-[400px]:text-[10.5px] sm:text-xs font-bold text-black/75 mt-0.5 leading-tight tracking-normal"
              style={{ wordBreak: "keep-all" }}
            >
              (바른자세 교정운동 한정 특별가)
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
