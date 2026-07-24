"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { RegistrationSectionJmReset } from "./registration-section-jm-reset"

function useScrollReveal(threshold = 0.18) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

const ZIGZAG_ITEMS = [
  {
    image: "/images/KakaoTalk_20260714_152432447_03.png",
    tag: "RECOVERY & GROWTH",
    tagColor: "#CCFF00",
    title: "기본 건강 회복,\n지속적으로 성장",
    lead: "체력, 근력, 근지구력, 심폐지구력,\n기능성 움직임을 훈련합니다.",
    body: "리셋은 단순한 운동 프로그램이 아닙니다. 기본 건강을 회복하고 꾸준히 성장하는 구조로 설계되어 있습니다. 매주 반복되는 훈련 속에서 내 몸이 변화하는 것을 직접 확인할 수 있습니다.",
    cta: "일주일이면 전신을 빠짐없이 훈련할 수 있습니다.",
    highlight: "전신 균형 트레이닝",
    reverse: false,
  },
  {
    image: "/images/KakaoTalk_20260714_152432447_07.png",
    tag: "YOUR OWN PACE",
    tagColor: "#CCFF00",
    title: "나만의 속도로,\n함께 운동합니다",
    lead: "초보자부터 숙련자까지\n같은 공간에서 각자의 속도로.",
    body: "운동 경험이 없어도 괜찮습니다. 같은 운동이라도 무게와 강도를 개인에 맞게 조절합니다. 처음 시작하는 분도, 오래 해온 분도 같은 공간에서 각자의 목표에 맞게 운동할 수 있습니다.",
    cta: "누구나 시작할 수 있고, 누구나 성장할 수 있습니다.",
    highlight: "개인 맞춤 강도 조절",
    reverse: true,
    objectPosition: "center 30%",
  },
  {
    image: "/images/심박계.png",
    tag: "HEART RATE MONITORING",
    tagColor: "#CCFF00",
    title: "심박계로\n안전하고 효율적으로",
    lead: "모든 회원이 심박계를 착용하고\n실시간으로 내 몸 상태를 확인합니다.",
    body: "초보자는 무리하지 않고 안전하게, 숙련자는 목표 심박 구간을 유지하며 효율적으로 운동할 수 있습니다. 심박수를 통해 내 몸 상태를 실시간으로 확인하며 내 페이스대로 운동합니다.",
    cta: "막연히 운동했다는 느낌이 아니라 숫자로 증명되는 성장입니다.",
    highlight: "실시간 심박 모니터링",
    reverse: false,
  },
]

const WEEKLY_PROGRAMS = [
  { day: "MON", label: "하체 근력 +유산소운동", desc: "하체 메인 운동 2가지 + 보조 운동 2가지", icon: "🦵" },
  { day: "TUE", label: "상체 당기기 +유산소운동", desc: "당기기 메인 운동 2가지 + 보조 운동 2가지", icon: "🏋️" },
  { day: "WED", label: "상체 밀기 +유산소운동", desc: "밀기 메인 운동 2가지 + 보조 운동 2가지", icon: "💪" },
  { day: "THU", label: "근지구력 +유산소운동", desc: "지치지 않는 몸을 만드는 지구력 중심 훈련", icon: "⚡" },
  { day: "FRI", label: "전신 운동", desc: "한 주를 마무리하는 전신 복합 훈련", icon: "🔥" },
]

export function ProgramSectionJmReset() {
  const refs = [useScrollReveal(), useScrollReveal(), useScrollReveal()]

  return (
    <div id="program-section" style={{ fontFamily: "'Noto Sans KR', 'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Inter:wght@400;500;600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

        .jm-zz-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 560px;
          overflow: hidden;
          opacity: 0;
        }
        .jm-zz-row--reverse { direction: rtl; }
        .jm-zz-row--reverse > * { direction: ltr; }

        .jm-zz-img { position: relative; overflow: hidden; }
        .jm-zz-img img { transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
        .jm-zz-img:hover img { transform: scale(1.04); }

        .jm-zz-img-badge {
          position: absolute; top: 24px; left: 24px; z-index: 2;
          font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase;
          border: 1px solid; border-radius: 999px; padding: 5px 16px;
          background: rgba(0,0,0,0.35); backdrop-filter: blur(4px);
        }

        .jm-zz-text {
          display: flex; flex-direction: column; justify-content: center;
          padding: 72px 60px;
          opacity: 0; transform: translateX(60px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.12s,
                      transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.12s;
        }
        .jm-zz-row--reverse .jm-zz-text { transform: translateX(-60px); }
        .jm-zz-img-wrap-inner {
          opacity: 0; transform: translateX(-60px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1),
                      transform 0.8s cubic-bezier(0.16,1,0.3,1);
          position: absolute; inset: 0;
        }
        .jm-zz-row--reverse .jm-zz-img-wrap-inner { transform: translateX(60px); }

        .jm-zz-row--visible { opacity: 1; }
        .jm-zz-row--visible .jm-zz-text,
        .jm-zz-row--visible .jm-zz-img-wrap-inner {
          opacity: 1; transform: translateX(0) !important;
        }

        .jm-zz-lead {
          font-size: clamp(14px,1.6vw,16px); font-weight: 500; line-height: 1.8;
          color: #333; margin-bottom: 18px; font-style: italic;
          border-left: 3px solid #CCFF00; padding-left: 14px;
        }
        .jm-zz-body {
          font-size: clamp(13px,1.4vw,15px); font-weight: 400; line-height: 1.95;
          color: #555; margin-bottom: 28px; word-break: keep-all;
        }
        .jm-zz-cta-box { border-top: 1px solid #e8e8e8; padding-top: 24px; }
        .jm-zz-cta-text {
          font-size: clamp(13px,1.3vw,14px); line-height: 1.8; color: #444;
          margin-bottom: 8px; word-break: keep-all;
        }

        /* Weekly cards */
        .jm-week-card {
          border: 1px solid #e8e8e8; border-radius: 16px;
          background: #fff; padding: 28px 24px;
          transition: all 0.3s ease;
        }
        .jm-week-card:hover {
          border-color: #CCFF00; box-shadow: 0 8px 32px rgba(204,255,0,0.12);
          transform: translateY(-3px);
        }

        /* Class timeline */
        .jm-class-step {
          border-left: 2px solid #e8e8e8; padding-left: 20px;
          transition: border-color 0.3s ease;
        }
        .jm-class-step:hover { border-left-color: #CCFF00; }

        @media (max-width: 768px) {
          .jm-zz-row {
            grid-template-columns: 1fr; direction: ltr !important; min-height: unset;
          }
          .jm-zz-img { height: 300px; position: relative; }
          .jm-zz-text { padding: 44px 28px; transform: translateY(40px) !important; }
          .jm-zz-img-wrap-inner { transform: translateY(40px) !important; }
          .jm-zz-row--visible .jm-zz-text,
          .jm-zz-row--visible .jm-zz-img-wrap-inner { transform: translateY(0) !important; }
          .jm-zz-row--reverse .jm-zz-text { order: 2; }
        }
      `}</style>

      {/* ═══ 섹션 헤더 — 밝은 배경 ═══ */}
      <section style={{ background: "#f9f9f7", padding: "80px 24px 64px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Inter','Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", color: "#888", textTransform: "uppercase", marginBottom: 20 }}>
            About Reset
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed','Inter',sans-serif", fontWeight: 900, fontSize: "clamp(2.6rem,7vw,5.5rem)", letterSpacing: "-0.02em", lineHeight: 0.95, color: "#111", textTransform: "uppercase", marginBottom: 20 }}>
            리셋<span style={{ color: "#CCFF00", WebkitTextStroke: "1px #aad400" }}>이란</span>?
          </h2>
          <div style={{ width: 48, height: 3, background: "#CCFF00", margin: "0 auto 24px" }} />
          <p style={{ fontSize: "clamp(15px,2vw,18px)", color: "#555", lineHeight: 1.8, maxWidth: 640, margin: "0 auto", wordBreak: "keep-all" }}>
            기본 건강을 회복하고 지속적으로 성장하는 운동 프로그램.<br />
            초보자부터 숙련자까지 같은 공간에서, 각자의 속도로.
          </p>
        </div>
      </section>

      {/* ═══ 지그재그 섹션들 ═══ */}
      {ZIGZAG_ITEMS.map((item, idx) => {
        const { ref, visible } = refs[idx]
        // 배경: 홀수=흰색, 짝수=연한 크림
        const textBg = idx % 2 === 0 ? "#ffffff" : "#f7f5f2"
        return (
          <div
            key={idx}
            ref={ref}
            className={`jm-zz-row${item.reverse ? " jm-zz-row--reverse" : ""}${visible ? " jm-zz-row--visible" : ""}`}
          >
            {/* 이미지 패널 */}
            <div className="jm-zz-img">
              <div className="jm-zz-img-wrap-inner">
                <Image
                  src={item.image}
                  alt={item.title.replace(/\n/g, " ")}
                  fill
                  style={{ objectFit: "cover", objectPosition: item.objectPosition || "center" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    // 이미지 없으면 그라디언트 폴백
                    const target = e.currentTarget as HTMLImageElement
                    target.style.display = "none"
                    const parent = target.parentElement
                    if (parent) parent.style.background = "linear-gradient(135deg, #111 0%, #1a1a1a 50%, #0a0a0a 100%)"
                  }}
                />
                {/* 이미지 없을 때 폴백 콘텐츠 */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, #0d0d0d 0%, #1c1c1c 60%, #111 100%)",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12,
                  zIndex: -1
                }}>
                  <span style={{ fontSize: "4rem" }}>{["🏋️‍♀️", "👥", "❤️"][idx]}</span>
                  <span style={{ color: "#CCFF00", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(1.2rem,3vw,2rem)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="jm-zz-img-badge" style={{ borderColor: item.tagColor, color: item.tagColor }}>
                {item.tag}
              </div>
            </div>

            {/* 텍스트 패널 */}
            <div className="jm-zz-text" style={{ background: textBg }}>
              <p style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.25em",
                color: item.tagColor,
                textTransform: "uppercase",
                marginBottom: 16,
                background: "rgba(17, 17, 17, 0.9)",
                padding: "4px 10px",
                borderRadius: "4px",
                width: "fit-content",
                display: "inline-block"
              }}>
                {item.tag}
              </p>
              <h3 style={{ fontFamily: "'Barlow Condensed','Noto Sans KR',sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem,3vw,2.8rem)", lineHeight: 1.2, color: "#111", marginBottom: 24, letterSpacing: "-0.01em", textTransform: "uppercase" }}>
                {item.title.split("\n").map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </h3>
              <p className="jm-zz-lead">
                {item.lead.split("\n").map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </p>
              <p className="jm-zz-body">{item.body}</p>
              <div className="jm-zz-cta-box">
                <p className="jm-zz-cta-text">{item.cta}</p>
                <span style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(13px,1.4vw,15px)",
                  color: item.tagColor,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  background: "rgba(17, 17, 17, 0.9)",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  display: "inline-block"
                }}>
                  {item.highlight}
                </span>
              </div>
            </div>
          </div>
        )
      })}

      {/* ═══ 주간 프로그램 — 밝은 배경 (이미지 디자인) ═══ */}
      <style>{`
        .jm-weekly-section {
          background: #f0f2f5;
          padding: 96px 24px;
        }
        .jm-weekly-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 16px;
        }
        .jm-weekly-grid-bottom {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: calc(66.666% + 8px);
        }
        .jm-weekly-card-light {
          background: #ffffff;
          border-radius: 20px;
          padding: 28px 24px 24px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .jm-weekly-card-light:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.10);
        }
        .jm-weekly-card-light .jm-card-day {
          font-family: 'Inter', 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #6b7280;
          text-transform: uppercase;
        }
        .jm-weekly-card-light .jm-card-icon {
          font-size: 1.8rem;
          line-height: 1;
        }
        .jm-weekly-card-light .jm-card-title {
          font-family: 'Noto Sans KR', 'Inter', sans-serif;
          font-weight: 700;
          font-size: clamp(1.3rem, 2.2vw, 1.6rem);
          color: #111;
          margin: 10px 0 0;
          letter-spacing: -0.01em;
          word-break: keep-all;
        }
        .jm-weekly-card-light .jm-card-divider {
          width: 32px;
          height: 2.5px;
          background: #c8f000;
          border-radius: 2px;
          margin: 12px 0;
        }
        .jm-weekly-card-light .jm-card-desc {
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 14px;
          color: #6b7280;
          line-height: 1.65;
          word-break: keep-all;
        }
        @media (max-width: 768px) {
          .jm-weekly-grid {
            grid-template-columns: 1fr !important;
          }
          .jm-weekly-grid-bottom {
            grid-template-columns: 1fr !important;
            max-width: 100% !important;
          }
        }
        @media (min-width: 769px) and (max-width: 900px) {
          .jm-weekly-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .jm-weekly-grid-bottom {
            grid-template-columns: repeat(2, 1fr) !important;
            max-width: 100% !important;
          }
        }
      `}</style>
      <section className="jm-weekly-section">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* 헤더 */}
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.3em",
              color: "#9ca3af",
              textTransform: "uppercase",
              marginBottom: 14,
            }}>Weekly Schedule</p>
            <h2 style={{
              fontFamily: "'Noto Sans KR', 'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 6vw, 3.6rem)",
              letterSpacing: "-0.02em",
              color: "#111",
              marginBottom: 14,
              lineHeight: 1.1,
              wordBreak: "keep-all",
            }}>
              주간 프로그램 <span style={{ color: "#7ba600" }}>구성</span>
            </h2>
            <p style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: "clamp(14px, 1.8vw, 16px)",
              color: "#6b7280",
              lineHeight: 1.7,
            }}>일주일이면 전신을 빠짐없이 훈련할 수 있습니다</p>
          </div>

          {/* 카드 3열 */}
          <div className="jm-weekly-grid">
            {WEEKLY_PROGRAMS.slice(0, 3).map((p) => (
              <div key={p.day} className="jm-weekly-card-light">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span className="jm-card-day">{p.day}</span>
                  <span className="jm-card-icon">{p.icon}</span>
                </div>
                <h3 className="jm-card-title">{p.label}</h3>
                <div className="jm-card-divider" />
                <p className="jm-card-desc">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* 카드 2열 (하단) */}
          <div className="jm-weekly-grid-bottom">
            {WEEKLY_PROGRAMS.slice(3).map((p) => (
              <div key={p.day} className="jm-weekly-card-light">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span className="jm-card-day">{p.day}</span>
                  <span className="jm-card-icon">{p.icon}</span>
                </div>
                <h3 className="jm-card-title">{p.label}</h3>
                <div className="jm-card-divider" />
                <p className="jm-card-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          📌 [3] 하단 CTA 섹션
          ═══════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: "#CCFF00" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p
            style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase", fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", color: "rgba(0,0,0,0.5)", marginBottom: 16 }}
          >
            Limited Spots — 12명 선착순
          </p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', 'Oswald', 'Noto Sans KR', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 10vw, 8.5rem)",
              letterSpacing: "-0.025em",
              lineHeight: 0.9,
              color: "#000000",
              textTransform: "uppercase",
              margin: 0
            }}
          >
            JOIN
            <br />
            TEAM RESET
          </h2>
          <p style={{ marginTop: 24, fontSize: "clamp(15px, 2vw, 18px)", fontWeight: 700, color: "rgba(0,0,0,0.7)", lineHeight: 1.6, wordBreak: "keep-all" }}>
            인원수 12명 제한 프로그램 — 지금 바로 서둘러 예약해주세요!
          </p>
        </div>
      </section>

      {/* ═══ 수업 구조 — 이미지 디자인과 동일한 다크 스타일 ═══ */}
      <section style={{
        background: "radial-gradient(ellipse at 20% 50%, #1a2a0a 0%, #0d0d0d 50%, #000 100%)",
        padding: "0",
        position: "relative",
        overflow: "hidden",
      }}>
        <style>{`
          @keyframes jm-glow-border {
            0%, 100% { box-shadow: 0 0 0 0 rgba(204,255,0,0); border-color: #CCFF00; }
            50% { box-shadow: 0 0 24px 4px rgba(204,255,0,0.25); border-color: #CCFF00; }
          }
          .jm-strength-card {
            animation: jm-glow-border 3s ease-in-out infinite;
          }
          .jm-class-card {
            border: 1.5px solid rgba(255,255,255,0.1);
            border-radius: 16px;
            background: rgba(255,255,255,0.04);
            padding: 28px 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            transition: border-color 0.3s ease, background 0.3s ease;
          }
          .jm-class-card:hover {
            border-color: rgba(204,255,0,0.4);
            background: rgba(204,255,0,0.04);
          }
          @media (max-width: 900px) {
            .jm-class-structure-grid { grid-template-columns: 1fr !important; }
            .jm-class-title-col { text-align: center !important; }
          }
          @media (max-width: 600px) {
            .jm-class-card { padding: 20px 20px; }
          }
        `}</style>

        {/* 배경 장식 그라디언트 */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 80% at 15% 60%, rgba(100,180,0,0.07) 0%, transparent 70%)",
        }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 24px 0" }}>
          {/* 2컬럼 그리드 */}
          <div className="jm-class-structure-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "64px", alignItems: "center" }}>

            {/* 왼쪽: 타이틀 */}
            <div className="jm-class-title-col">
              <p style={{ fontFamily: "'Barlow Condensed','Inter',sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.3em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 12 }}>
                CLASS STRUCTURE
              </p>
              <h2 style={{
                fontFamily: "'Noto Sans KR','Barlow Condensed',sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem,4vw,3.2rem)",
                lineHeight: 1.1,
                color: "#fff",
                letterSpacing: "-0.02em",
                marginBottom: 28,
                whiteSpace: "nowrap",
              }}>
                수업 구조
              </h2>
              <p style={{
                fontFamily: "'Noto Sans KR',sans-serif",
                fontSize: "clamp(15px,2vw,18px)",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.75,
                wordBreak: "keep-all",
              }}>
                총 40~50분 안에 8가지<br />운동이 완료됩니다.
              </p>
            </div>

            {/* 오른쪽: 카드 4개 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {/* WARM-UP */}
              <div className="jm-class-card">
                <div>
                  <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.25em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 4 }}>WARM-UP</p>
                  <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#CCFF00", letterSpacing: "0.02em", marginBottom: 4 }}>10 min</p>
                  <p style={{ fontFamily: "'Noto Sans KR',sans-serif", fontWeight: 700, fontSize: "clamp(1.1rem,2vw,1.5rem)", color: "#fff" }}>준비 및 시범</p>
                </div>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ flexShrink: 0, opacity: 0.7 }}>
                  <circle cx="24" cy="10" r="5" stroke="#CCFF00" strokeWidth="2" fill="none"/>
                  <line x1="24" y1="15" x2="24" y2="30" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="24" y1="22" x2="16" y2="18" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="24" y1="22" x2="32" y2="28" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="24" y1="30" x2="19" y2="42" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="24" y1="30" x2="29" y2="42" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              {/* STRENGTH — 강조 카드 */}
              <div className="jm-class-card jm-strength-card" style={{ borderColor: "#CCFF00", background: "rgba(204,255,0,0.06)" }}>
                <div>
                  <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.25em", color: "rgba(204,255,0,0.6)", textTransform: "uppercase", marginBottom: 4 }}>STRENGTH</p>
                  <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#CCFF00", letterSpacing: "0.02em", marginBottom: 4 }}>18 min</p>
                  <p style={{ fontFamily: "'Noto Sans KR',sans-serif", fontWeight: 700, fontSize: "clamp(1.1rem,2vw,1.5rem)", color: "#fff" }}>근력존</p>
                </div>
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ flexShrink: 0, opacity: 0.9 }}>
                  <rect x="4" y="22" width="8" height="8" rx="2" stroke="#CCFF00" strokeWidth="2" fill="none"/>
                  <rect x="40" y="22" width="8" height="8" rx="2" stroke="#CCFF00" strokeWidth="2" fill="none"/>
                  <line x1="12" y1="26" x2="18" y2="26" stroke="#CCFF00" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="34" y1="26" x2="40" y2="26" stroke="#CCFF00" strokeWidth="2.5" strokeLinecap="round"/>
                  <rect x="18" y="18" width="16" height="16" rx="3" stroke="#CCFF00" strokeWidth="2" fill="rgba(204,255,0,0.1)"/>
                </svg>
              </div>

              {/* CARDIO */}
              <div className="jm-class-card">
                <div>
                  <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.25em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 4 }}>CARDIO</p>
                  <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#CCFF00", letterSpacing: "0.02em", marginBottom: 4 }}>18 min</p>
                  <p style={{ fontFamily: "'Noto Sans KR',sans-serif", fontWeight: 700, fontSize: "clamp(1.1rem,2vw,1.5rem)", color: "#fff" }}>유산소존</p>
                </div>
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ flexShrink: 0, opacity: 0.7 }}>
                  <circle cx="16" cy="10" r="5" stroke="#CCFF00" strokeWidth="2" fill="none"/>
                  <path d="M16 15 L14 25 L22 28 L28 38" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <line x1="14" y1="25" x2="8" y2="32" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="38" cy="40" r="5" stroke="#CCFF00" strokeWidth="2" fill="none"/>
                  <circle cx="28" cy="40" r="5" stroke="#CCFF00" strokeWidth="2" fill="none"/>
                </svg>
              </div>

              {/* COOL-DOWN */}
              <div className="jm-class-card">
                <div>
                  <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.25em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 4 }}>COOL-DOWN</p>
                  <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#CCFF00", letterSpacing: "0.02em", marginBottom: 4 }}>5 min</p>
                  <p style={{ fontFamily: "'Noto Sans KR',sans-serif", fontWeight: 700, fontSize: "clamp(1.1rem,2vw,1.5rem)", color: "#fff" }}>쿨다운</p>
                </div>
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ flexShrink: 0, opacity: 0.7 }}>
                  <circle cx="26" cy="8" r="5" stroke="#CCFF00" strokeWidth="2" fill="none"/>
                  <path d="M26 13 L26 28" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M18 20 Q26 16 34 20" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <path d="M20 28 Q26 40 32 28" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <line x1="20" y1="44" x2="32" y2="44" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 TOTAL 바 */}
        <div style={{ marginTop: 56, background: "#CCFF00", padding: "22px 24px", textAlign: "center" }}>
          <span style={{
            fontFamily: "'Barlow Condensed','Inter',sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1.2rem,3.5vw,2rem)",
            letterSpacing: "0.1em",
            color: "#000",
            textTransform: "uppercase",
          }}>
            TOTAL 40-50 MIN · 8 EXERCISES
          </span>
        </div>
      </section>
    </div>
  )
}

