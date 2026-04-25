"use client"

/**
 * ============================================================
 * 🔷 공통 탭 컴포넌트 (PromotionTabs)
 * ============================================================
 * - 이 파일은 상단에 고정되는 '공통 탭 메뉴'입니다.
 * - 어떤 프로모션 디자인이 들어오더라도 탭의 위치와 기능은 유지됩니다.
 * - 탭을 추가/삭제하려면 아래 tabs 배열만 수정하면 됩니다.
 * ============================================================
 */

import { useState } from "react"
import { PromotionA } from "./promotion-a"
import { PromotionB } from "./promotion-b"
import { PromotionC } from "./promotion-c"

/* ─────────────────────────────────────────────
   📌 탭 설정 배열
   - 새 프로모션을 추가하려면 이 배열에 항목을 추가하세요
   - id: 고유 식별자
   - label: 탭에 표시될 텍스트
   - badge: 탭 옆에 표시될 뱃지 (선택 사항)
   ───────────────────────────────────────────── */
const tabs = [
  { id: "a", label: "1개월 집중 패스", badge: "BEST" },
  { id: "b", label: "3개월 정기관리", badge: "NEW" },
  { id: "c", label: "가정의 달 특별", badge: "EVENT" },
]

export function PromotionTabs() {
  const [activeTab, setActiveTab] = useState("a")

  return (
    <section className="bg-white">
      {/* ─────────────────────────────────────────────
          📌 탭 메뉴 영역 (고정 공통 메뉴)
          - 탭 디자인을 바꾸고 싶으면 이 부분만 수정하세요
          ───────────────────────────────────────────── */}
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center justify-start gap-2 overflow-x-auto py-3 scrollbar-hide sm:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex shrink-0 items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold
                  transition-all duration-300 sm:px-6 sm:py-3 sm:text-base
                  ${
                    activeTab === tab.id
                      ? "bg-[#FF5C00] text-white shadow-lg shadow-orange-500/25"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700"
                  }
                `}
              >
                {tab.label}
                {/* 뱃지 표시 */}
                {tab.badge && (
                  <span
                    className={`
                      ml-1 rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none
                      ${
                        activeTab === tab.id
                          ? "bg-white/25 text-white"
                          : "bg-orange-100 text-orange-600"
                      }
                    `}
                  >
                    {tab.badge}
                  </span>
                )}
                {/* 활성 탭 하단 인디케이터 */}
                {activeTab === tab.id && (
                  <span className="absolute -bottom-[11px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-[#FF5C00]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          📌 프로모션 콘텐츠 영역
          - 각 탭에 연결된 독립적인 컨테이너가 렌더링됩니다
          - 새로운 프로모션을 추가하면 아래 조건문도 추가하세요
          ───────────────────────────────────────────── */}
      <div className="promotion-content-area">
        {/* 프로모션 A 컨테이너 */}
        {activeTab === "a" && <PromotionA />}

        {/* 프로모션 B 컨테이너 */}
        {activeTab === "b" && <PromotionB />}

        {/* 프로모션 C 컨테이너 */}
        {activeTab === "c" && <PromotionC />}
      </div>
    </section>
  )
}
