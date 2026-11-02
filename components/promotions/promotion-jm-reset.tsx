"use client"

import { useEffect, useState } from "react"
import { ContactModalJmReset } from "../contact-modal-jm-reset"

/**
 * ============================================================
 * 🟢 프로모션 리셋중문점 TEAM MIND
 * - 팀버핏(teambutfit.com) 감성 히어로 섹션
 * - 네온 그린 (#CCFF00) 강조색
 * ============================================================
 */

export function PromotionJmReset() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

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
          📌 [1] 히어로 섹션 — 이미지 배경 + 텍스트 오버레이
          ═══════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden flex items-center justify-center"
        style={{ minHeight: "100svh" }}
        aria-label="리셋중문점 메인 히어로"
      >
        {/* 배경 이미지 */}
        <img
          src="/images/리워드랜딩히어로최종사진.png"
          alt="리셋중문점 히어로"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />

        {/* 다크 그라디언트 오버레이: 바탕 사진이 맑게 보이도록 오버레이 완화 */}
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
          style={{ minHeight: "100svh", paddingTop: "80px", paddingBottom: "100px" }}
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
          <div className="animate-fadeSlideUp-4 mt-12 cursor-pointer z-20">
            <button
              onClick={() => {
                document.getElementById('weekly-program-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 sm:gap-4 px-5 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#CCFF00]/15 hover:bg-[#CCFF00]/30 border border-[#CCFF00]/50 backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="hidden sm:block text-[#CCFF00] animate-bounce">
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[#CCFF00] font-black text-[15px] min-[400px]:text-base sm:text-xl md:text-2xl tracking-wide whitespace-nowrap drop-shadow-[0_0_8px_rgba(204,255,0,0.8)]" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                리셋 중문 상시 프로그램 자세히 보기
              </span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="hidden sm:block text-[#CCFF00] animate-bounce">
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

      {/* ── Fixed Sticky CTA Button ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-black/90 backdrop-blur-md border-t border-white/10 flex justify-center items-center">
        <button
          id="sticky-cta-btn"
          onClick={scrollToForm}
          className="cta-shimmer w-full max-w-lg flex flex-col items-center justify-center py-3 px-6 rounded-xl font-black uppercase text-center cursor-pointer transition-all duration-200"
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
            className="text-base sm:text-lg md:text-xl font-black tracking-tight leading-tight"
            style={{ wordBreak: "keep-all" }}
          >
            리셋 상담(문자/전화) 연락처 보기
          </span>
          <span
            className="text-xs sm:text-sm font-bold text-black/75 mt-0.5 leading-tight tracking-normal"
            style={{ wordBreak: "keep-all" }}
          >
            (시간표, 가격, 기타 문의사항)
          </span>
        </button>
      </div>

      <ContactModalJmReset
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
