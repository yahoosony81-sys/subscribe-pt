"use client"

import { useEffect, useRef, useState } from "react"
import { ContactModalJmReset } from "../contact-modal-jm-reset"

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
        {/* 배경 이미지 (기존 영상 임시 교체) */}
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

          {/* 환급 프로그램 바로가기 버튼 */}
          <div className="animate-fadeSlideUp-4 mt-12 cursor-pointer z-20">
            <button
              onClick={() => {
                document.getElementById('reward-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-4 px-8 py-4 rounded-full bg-[#CCFF00]/15 hover:bg-[#CCFF00]/30 border border-[#CCFF00]/50 backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.6)]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#CCFF00] animate-bounce">
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[#CCFF00] font-black text-xl md:text-2xl tracking-wide drop-shadow-[0_0_8px_rgba(204,255,0,0.8)]" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                리셋 중문 9월 환급 프로그램 자세히 보기
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
          📌 [새로운 섹션] 리셋 프로그램 리워드 및 제공 상품
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
              <span className="neon-green">9월 환급 프로그램</span> 혜택
            </h2>
          </div>

          {/* 1. 리셋 프로그램 무료제공 상품 (이미지 좌, 텍스트 우) */}
          <div className="flex flex-col md:flex-row items-stretch gap-10 mb-20 md:mb-32">
            {/* 사진 영역 */}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(204,255,0,0.15)] transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/images/환급3명엉덩이.png"
                alt="100% 환급프로그램"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
            {/* 텍스트 영역 */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-2 md:px-8">
              <div
                className="text-[#CCFF00] font-bold text-xs tracking-[0.2em] mb-4 uppercase inline-block border border-[#CCFF00] rounded-full px-4 py-1"
                style={{ fontFamily: "'Inter', sans-serif", width: "fit-content" }}
              >
                100% CASHBACK
              </div>
              <h3
                className="text-3xl md:text-4xl font-black mb-2 leading-tight"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", wordBreak: "keep-all" }}
              >
                100% 환급프로그램
              </h3>
              <p
                className="text-white/80 font-medium text-sm md:text-base mb-8"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", wordBreak: "keep-all" }}
              >
                (한 달 동안 운동도 하고, 돈도 받고)
              </p>
              
              <ul className="space-y-6">
                <li className="flex flex-col border-l-[3px] border-[#CCFF00] pl-5">
                  <span className="text-xl font-bold mb-1">🔥 출석률 90% 달성 시 전액 환급</span>
                  <span className="text-white/60 text-sm md:text-base leading-relaxed word-break-keep">
                    한 달 동안 오직 출석만 90% 완료하면 수업료를 100% 환급해 드립니다. 운동을 시작하고, 지속하는 습관을 만드는 프로그램입니다.
                  </span>
                </li>
                <li className="flex flex-col border-l-[3px] border-[#CCFF00] pl-5">
                  <span className="text-xl font-bold mb-1">🏃 코치의 밀착 출석 관리</span>
                  <span className="text-white/60 text-sm md:text-base leading-relaxed word-break-keep">
                    코치의 출석 관리 및 독려가 이루어집니다. <span className="text-[#CCFF00] font-bold">(선착순 3명 모집)</span> 20일 기준 18일 출석!
                  </span>
                </li>
                <li className="flex flex-col border-l-[3px] border-[#CCFF00] pl-5">
                  <span className="text-xl font-bold mb-1">💰 19만원 결제 후 19만원 페이백</span>
                  <span className="text-white/60 text-sm md:text-base leading-relaxed word-break-keep">
                    1개월권 19만원 결제 후 출석 완료 시 19만원을 환급해 드립니다. (추후 환급 또는 회원권 등록 금액에서 19만원 차감 형태로 진행)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. 일반 등록 회원 혜택 (텍스트 좌, 이미지 우) */}
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-10">
            {/* 사진 영역 */}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(204,255,0,0.15)] transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/images/코치님만세.png"
                alt="일반 등록 회원 혜택"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
            {/* 텍스트 영역 */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-2 md:px-8">
              <div
                className="text-[#CCFF00] font-bold text-xs tracking-[0.2em] mb-4 uppercase inline-block border border-[#CCFF00] rounded-full px-4 py-1"
                style={{ fontFamily: "'Inter', sans-serif", width: "fit-content" }}
              >
                MEMBER BENEFITS
              </div>
              <h3
                className="text-3xl md:text-4xl font-black mb-2 leading-tight"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", wordBreak: "keep-all" }}
              >
                일반 등록 회원 혜택
              </h3>
              <p
                className="text-white/80 font-medium text-sm md:text-base mb-8"
                style={{ fontFamily: "'Noto Sans KR', sans-serif", wordBreak: "keep-all" }}
              >
                (선착순 제외자)
              </p>
              
              <ul className="space-y-8">
                <li className="flex flex-col border-l-[3px] border-[#CCFF00] pl-5">
                  <span className="text-xl font-bold mb-1">🎁 웰컴 패키지 <span className="text-[#CCFF00] font-bold text-lg">(2개 제공)</span></span>
                  <span className="text-white/60 text-sm md:text-base leading-relaxed word-break-keep">
                    한달 체중변화 기록지, 체중계 2가지를 모두 받아보실 수 있습니다.
                  </span>
                </li>
                
                <li className="flex flex-col border-l-[3px] border-[#CCFF00] pl-5">
                  <span className="text-[#CCFF00] font-bold text-xs tracking-[0.1em] mb-2 uppercase inline-block border border-[#CCFF00] rounded-md px-2 py-0.5 w-fit">
                    SPECIAL OFFER
                  </span>
                  <div className="mt-1 mb-2 flex items-center flex-wrap gap-x-3 gap-y-2">
                    <span className="text-2xl md:text-3xl font-black">🔥 3개월 등록 회원 특별 혜택</span>
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <span className="text-white/50 line-through text-xl md:text-2xl font-bold">57만원</span>
                      <span className="text-white/50 text-xl font-bold">→</span>
                      <span className="text-[#CCFF00] text-3xl md:text-4xl font-black tracking-tight">45만원(20%할인)</span>
                    </div>
                  </div>
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
            리셋 상담(문자/전화) 가능한 연락처 보기
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
    </div>
  )
}
