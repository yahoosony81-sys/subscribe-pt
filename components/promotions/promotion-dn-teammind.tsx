"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import { getPixelId } from "@/utils/pixelConfig"

/**
 * ============================================================
 * 🟢 프로모션 도남점 TEAM MIND
 * - 팀버핏(teambutfit.com) 감성 히어로 섹션
 * - 배경: 그룹PT 운동 영상 (루프)
 * - 텍스트: PERFECT WORKOUT / WE ARE TEAM MIND
 * - 네온 그린 (#CCFF00) 강조색
 * ============================================================
 */

export function PromotionDnTeamMind() {
  const pixelId = getPixelId("donam")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div id="promo-dn-teammind" className="bg-black font-sans text-white">
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

      {/* ── GTM ── */}
      <Script
        id="gtm-dn-teammind"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KQR8JJ44');`,
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KQR8JJ44"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* ── Meta Pixel ── */}
      {pixelId && (
        <>
          <Script
            id="meta-pixel-dn-teammind"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${pixelId}');fbq('track','PageView');`,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

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
              Mind Fitness 도남점
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

          {/* 라인 2: WE ARE TEAM MIND */}
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
            <span className="neon-green">MIND</span>
          </h2>

          {/* 구분선 */}
          <div
            className="animate-fadeSlideUp-3 mt-10 mb-10 w-20 h-0.5"
            style={{ background: "linear-gradient(90deg, transparent, #CCFF00, transparent)" }}
          />

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
            첫 방문 무료 체험 예약하기
          </button>
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
      <section className="bg-black py-20 md:py-28 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p
            className="text-[#CCFF00] text-xs tracking-[0.35em] font-bold mb-6 uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Why Team Mind
          </p>
          <h2
            className="font-black uppercase leading-tight text-white"
            style={{
              fontFamily: "'Barlow Condensed', 'Oswald', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              letterSpacing: "-0.01em",
            }}
          >
            운동은 의지가 아니라
            <br />
            <span style={{ color: "#CCFF00" }}>환경</span>이 바꿉니다.
          </h2>
          <p className="mt-8 text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            혼자서는 3일도 못 가는 운동,{" "}
            <span className="text-white font-bold">팀 마인드</span>와 함께하면 달라집니다.
            <br />
            10년차 전문 강사 2인이 직접 이끌어드리는{" "}
            <span className="text-[#CCFF00] font-bold">그룹 트레이닝</span>을 경험해보세요.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "💪",
                label: "STRENGTH",
                title: "근력 + 유산소 + 기능성",
                desc: "하루 딱 40분, 500칼로리 소모",
              },
              {
                icon: "🔥",
                label: "INTENSITY",
                title: "빠질 수 없는 환경",
                desc: "함께하는 분위기와 코치 텐션이 만드는 몰입",
              },
              {
                icon: "🎯",
                label: "RESULT",
                title: "확실한 체형 변화",
                desc: "다이어트 · 체형개선 · 라인개선까지",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-white/10 bg-white/5 p-8 text-left transition-all duration-300 hover:border-[#CCFF00]/50 hover:bg-white/10 group"
                style={{ backdropFilter: "blur(8px)" }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <p
                  className="text-[#CCFF00] text-xs tracking-[0.25em] font-bold mb-2 uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {item.label}
                </p>
                <h3
                  className="text-white font-black text-xl mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
                >
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          📌 [3] 하단 CTA 섹션
          ═══════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: "#CCFF00" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-black/50 text-xs tracking-[0.35em] font-bold mb-4 uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Limited Spots — 12명 선착순
          </p>
          <h2
            className="text-black font-black uppercase leading-none"
            style={{
              fontFamily: "'Barlow Condensed', 'Oswald', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 10vw, 8.5rem)",
              letterSpacing: "-0.025em",
              lineHeight: 0.9,
            }}
          >
            JOIN
            <br />
            TEAM MIND
          </h2>
          <p className="mt-6 text-black/70 text-base md:text-lg font-bold leading-relaxed">
            인원수 12명 제한 프로그램 — 지금 바로 서둘러 예약해주세요!
          </p>
          <button
            id="bottom-cta-btn"
            onClick={scrollToForm}
            className="mt-10 font-black uppercase tracking-widest transition-all duration-200 active:scale-95 hover:scale-105"
            style={{
              fontFamily: "'Barlow Condensed', 'Oswald', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              letterSpacing: "0.15em",
              background: "#000000",
              color: "#CCFF00",
              padding: "1.1rem 2.8rem",
              border: "3px solid #000",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#111111"
              e.currentTarget.style.color = "#FFFFFF"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#000000"
              e.currentTarget.style.color = "#CCFF00"
            }}
          >
            첫 방문 무료 체험 예약하기
          </button>
        </div>
      </section>
    </div>
  )
}
