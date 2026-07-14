"use client"

import Image from "next/image"

export function InstructorSectionJmReset() {
  return (
    <section
      style={{
        background: "#f9f9f7",
        padding: "96px 24px",
        fontFamily: "'Noto Sans KR', 'Inter', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Inter:wght@400;500;600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

        .jm-instructor-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }

        @media (max-width: 768px) {
          .jm-instructor-img-wrap {
            border-radius: 12px;
          }
        }
      `}</style>

      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* 섹션 헤더 */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.3em",
              color: "#9ca3af",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Instructor Introduction
          </p>
          <h2
            style={{
              fontFamily: "'Noto Sans KR', 'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              letterSpacing: "-0.02em",
              color: "#111",
              marginBottom: 14,
              lineHeight: 1.1,
              wordBreak: "keep-all",
            }}
          >
            리셋 프로그램{" "}
            <span style={{ color: "#a8cc00" }}>강사소개</span>
          </h2>
          <div
            style={{
              width: 48,
              height: 3,
              background: "#CCFF00",
              margin: "0 auto",
              borderRadius: 2,
            }}
          />
        </div>

        {/* 강사 이미지 */}
        <div className="jm-instructor-img-wrap">
          <Image
            src="/images/KakaoTalk_20260714_143738611.png"
            alt="리셋 프로그램 강사 박세훈 코치 소개"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 768px) 100vw, 960px"
            priority
          />
        </div>
      </div>
    </section>
  )
}
