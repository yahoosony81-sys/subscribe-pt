"use client"

import { useEffect, useRef, useState } from "react"
<<<<<<< HEAD
import { ContactModalJmReset } from "../contact-modal-jm-reset"
=======
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { RegistrationSectionJmReset } from "../registration-section-jm-reset"
>>>>>>> 0b9882fb7a65ebd41e4e5044349ab09babd210ff

/**
 * ============================================================
 * 🟢 프로모션 리셋중문점 TEAM MIND
 * - 팀버핏(teambutfit.com) 감성 히어로 섹션
 * - 배경: 그룹PT 운동 영상 (루프)
 * - 텍스트: PERFECT WORKOUT / WE ARE TEAM MIND
 * - 네온 그린 (#CCFF00) 강조색
 * ============================================================
 */

export function PromotionJmReset() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false)

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
      <section
        className="relative w-full overflow-hidden flex items-center justify-center"
        style={{ minHeight: "100svh" }}
      >
        {/* 배경 영상 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/videos/mindaction-video2.mp4" type="video/mp4" />
        </video>

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

          {/* 구분선 */}
          <div
            className="animate-fadeSlideUp-3 mt-10 mb-10 w-20 h-0.5"
            style={{ background: "linear-gradient(90deg, transparent, #CCFF00, transparent)" }}
          />
<<<<<<< HEAD
=======

          {/* CTA 버튼 */}
          <button
            id="hero-cta-btn"
            onClick={scrollToForm}
            className="animate-fadeSlideUp-4 cta-shimmer font-black uppercase"
            style={{
              fontFamily: "'Barlow Condensed', 'Oswald', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1rem, 2.8vw, 1.3rem)",
              letterSpacing: "0.12em",
              background: "#CCFF00",
              color: "#000000",
              padding: "1.1rem 2.8rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 0 3px #CCFF00, 0 8px 40px rgba(204,255,0,0.35)",
              transition: "background 0.18s, box-shadow 0.18s, transform 0.1s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.background = "#FFFFFF"
              el.style.boxShadow = "0 0 0 3px #FFFFFF, 0 8px 50px rgba(204,255,0,0.55)"
              el.style.transform = "scale(1.03)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.background = "#CCFF00"
              el.style.boxShadow = "0 0 0 3px #CCFF00, 0 8px 40px rgba(204,255,0,0.35)"
              el.style.transform = "scale(1)"
            }}
            onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.97)" }}
            onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1.03)" }}
          >
            리셋 무료 체험 신청하기
          </button>
>>>>>>> 0b9882fb7a65ebd41e4e5044349ab09babd210ff
        </div>

        {/* 스크롤 힌트 */}
        <div
          className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          style={{ zIndex: 10 }}
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
          📌 [2] 브랜드 메시지 — Why Team Mind
          ═══════════════════════════════════════════════ */}
<<<<<<< HEAD
      <section className="bg-black py-20 md:py-28 border-t border-white/10 pb-32">
=======
      <section className="bg-black py-20 md:py-28 border-t border-white/10">
>>>>>>> 0b9882fb7a65ebd41e4e5044349ab09babd210ff
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
<<<<<<< HEAD
            전문강사가 직접 이끌어 드리는
=======
            10년차 전문강사가 직접 이끌어 드리는
>>>>>>> 0b9882fb7a65ebd41e4e5044349ab09babd210ff
            <br className="md:hidden" />{" "}
            <span className="text-[#CCFF00] font-bold">100일 그룹 트레이닝</span>을 경험해보세요.
          </p>

        </div>
      </section>

<<<<<<< HEAD
      {/* ── Fixed Sticky CTA Button ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-black/85 backdrop-blur-md border-t border-white/10 flex justify-center items-center">
        <button
          id="sticky-cta-btn"
          onClick={scrollToForm}
          className="cta-shimmer w-full max-w-lg flex flex-col items-center justify-center py-3 px-6 rounded-xl font-black uppercase text-center cursor-pointer"
          style={{
            fontFamily: "'Barlow Condensed', 'Oswald', 'Noto Sans KR', sans-serif",
            background: "#CCFF00",
            color: "#000000",
            border: "none",
            boxShadow: "0 0 0 2px #CCFF00, 0 8px 30px rgba(204,255,0,0.4)",
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
            el.style.boxShadow = "0 0 0 2px #CCFF00, 0 8px 30px rgba(204,255,0,0.4)"
            el.style.transform = "scale(1)"
          }}
          onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.98)" }}
          onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1.02)" }}
        >
          <span
            style={{
              fontSize: "clamp(1.1rem, 3.2vw, 1.35rem)",
              fontWeight: 900,
              letterSpacing: "0.03em",
              lineHeight: 1.2,
            }}
          >
            리셋 상담 가능한 연락처 보기
          </span>
          <span
            style={{
              fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
              fontWeight: 700,
              letterSpacing: "0.02em",
              color: "rgba(0, 0, 0, 0.75)",
              marginTop: "2px",
              textTransform: "none",
            }}
          >
            (프로그램 시간표, 가격, 기타 문의사항)
          </span>
        </button>
      </div>

      <ContactModalJmReset
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
=======


      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-xl p-0 bg-transparent border-none max-h-[90vh] overflow-y-auto">
          <RegistrationSectionJmReset
            title="리셋 무료 체험 신청하기"
            branch="리셋 중문점"
            hideTimePicker={false}
            isModal={true}
            onClose={() => setIsModalOpen(false)}
          />
        </DialogContent>
      </Dialog>
>>>>>>> 0b9882fb7a65ebd41e4e5044349ab09babd210ff
    </div>
  )
}
