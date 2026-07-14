"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

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
    image: "/images/group-training-1.jpg",
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
    image: "/images/group-training-2.jpg",
    tag: "YOUR OWN PACE",
    tagColor: "#CCFF00",
    title: "나만의 속도로,\n함께 운동합니다",
    lead: "초보자부터 숙련자까지\n같은 공간에서 각자의 속도로.",
    body: "운동 경험이 없어도 괜찮습니다. 같은 운동이라도 무게와 강도를 개인에 맞게 조절합니다. 처음 시작하는 분도, 오래 해온 분도 같은 공간에서 각자의 목표에 맞게 운동할 수 있습니다.",
    cta: "누구나 시작할 수 있고, 누구나 성장할 수 있습니다.",
    highlight: "개인 맞춤 강도 조절",
    reverse: true,
  },
  {
    image: "/images/group-training-3.jpg",
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
  { day: "MON", label: "하체 근력", desc: "하체 메인 운동 2가지 + 보조 운동 2가지", icon: "🦵" },
  { day: "TUE", label: "상체 당기기", desc: "당기기 메인 운동 2가지 + 보조 운동 2가지", icon: "🏋️" },
  { day: "WED", label: "상체 밀기", desc: "밀기 메인 운동 2가지 + 보조 운동 2가지", icon: "💪" },
  { day: "THU", label: "근지구력", desc: "지치지 않는 몸을 만드는 지구력 중심 훈련", icon: "⚡" },
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
                  style={{ objectFit: "cover", objectPosition: "center" }}
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
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", color: item.tagColor, textTransform: "uppercase", marginBottom: 16 }}>
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
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "clamp(14px,1.5vw,16px)", color: item.tagColor, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                  {item.highlight}
                </span>
              </div>
            </div>
          </div>
        )
      })}

      {/* ═══ 주간 프로그램 — 짙은 배경 ═══ */}
      <section style={{ background: "#111111", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", color: "#CCFF00", textTransform: "uppercase", marginBottom: 16 }}>Weekly Schedule</p>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2.2rem,6vw,5rem)", letterSpacing: "-0.02em", color: "#fff", textTransform: "uppercase", marginBottom: 16 }}>
              주간 프로그램 <span style={{ color: "#CCFF00" }}>구성</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15 }}>일주일이면 전신을 빠짐없이 훈련할 수 있습니다</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
            {WEEKLY_PROGRAMS.map((p) => (
              <div key={p.day} className="jm-week-card" style={{ background: "#1a1a1a", borderColor: "rgba(255,255,255,0.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 13, letterSpacing: "0.2em", color: "#CCFF00", textTransform: "uppercase" }}>{p.day}</span>
                  <span style={{ fontSize: "1.6rem" }}>{p.icon}</span>
                </div>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(1.2rem,2vw,1.5rem)", color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 8 }}>{p.label}</h3>
                <div style={{ width: 28, height: 2, background: "linear-gradient(90deg,#CCFF00,transparent)", marginBottom: 10 }} />
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 수업 구조 — 밝은 배경 ═══ */}
      <section style={{ background: "#f9f9f7", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 64, gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", color: "#888", textTransform: "uppercase", marginBottom: 16 }}>Class Structure</p>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(2rem,5vw,4.5rem)", color: "#111", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 0.95, marginBottom: 20 }}>
              수업<br /><span style={{ color: "#CCFF00", WebkitTextStroke: "1px #aad400" }}>구조</span>
            </h2>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 40 }}>
              총 <strong style={{ color: "#111" }}>40~50분</strong> 안에 <strong style={{ color: "#111" }}>8가지 운동</strong>이 완료됩니다.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {[
                { step: "01", label: "시범 & 스트레칭", sub: "워밍업", desc: "동작 시범과 워밍업 스트레칭으로 부상 없이 준비합니다." },
                { step: "02", label: "근력 존", sub: "메인 2 + 보조 2 · 각 4분 3세트", desc: "메인 운동 2가지, 보조 운동 2가지를 순서대로 진행합니다." },
                { step: "03", label: "유산소 존", sub: "러닝 · 로잉 · 스키에르그 · 각 4분", desc: "러닝 → 로잉 → 러닝 → 스키에르그 순서로 순환합니다." },
                { step: "04", label: "쿨다운", sub: "마무리 스트레칭", desc: "정리 스트레칭으로 회복을 돕습니다." },
              ].map((s) => (
                <div key={s.step} className="jm-class-step">
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
                    <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 11, letterSpacing: "0.2em", color: "#CCFF00" }}>{s.step}</span>
                    <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(1rem,1.8vw,1.3rem)", color: "#111", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.label}</span>
                  </div>
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#aad400", textTransform: "uppercase", marginBottom: 4 }}>{s.sub}</p>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { zone: "WARM-UP", label: "준비 & 시범", duration: "5 min", bg: "#f0f0ee", accent: "#888" },
              { zone: "STRENGTH", label: "근력 존", duration: "20 min", bg: "#111", accent: "#CCFF00" },
              { zone: "CARDIO", label: "유산소 존", duration: "16 min", bg: "#1a1a1a", accent: "rgba(204,255,0,0.7)" },
              { zone: "COOL-DOWN", label: "쿨다운", duration: "5 min", bg: "#f0f0ee", accent: "#888" },
            ].map((b) => (
              <div key={b.zone} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: b.bg, borderRadius: 14, padding: "20px 28px" }}>
                <div>
                  <span style={{ display: "block", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 10, letterSpacing: "0.25em", color: b.accent, textTransform: "uppercase", marginBottom: 4 }}>{b.zone}</span>
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(1.1rem,2.5vw,1.4rem)", color: b.bg === "#f0f0ee" ? "#111" : "#fff", textTransform: "uppercase", letterSpacing: "0.03em" }}>{b.label}</span>
                </div>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 14, letterSpacing: "0.1em", color: b.accent, background: `${b.accent}15`, border: `1px solid ${b.accent}30`, borderRadius: 999, padding: "6px 18px" }}>{b.duration}</span>
              </div>
            ))}
            <div style={{ background: "#CCFF00", borderRadius: 14, padding: "18px 28px", textAlign: "center" }}>
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "clamp(1rem,2vw,1.25rem)", color: "#000", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Total 40–50 min · 8 Exercises
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
