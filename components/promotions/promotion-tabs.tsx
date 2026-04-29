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

import Link from "next/link"

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
  { id: "d", label: "무료체험신청", badge: "FREE" },
]

export function PromotionTabs({ activeTab }: { activeTab: string }) {
  return (
    <section className="bg-white">
      {/* ─────────────────────────────────────────────
          📌 탭 메뉴 영역 (고정 공통 메뉴)
          - 탭 디자인을 바꾸고 싶으면 이 부분만 수정하세요
          ───────────────────────────────────────────── */}
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto w-full max-w-4xl px-2 sm:px-4">
          <div className="flex w-full items-center justify-between gap-1 py-2 sm:justify-center sm:gap-2 sm:py-3">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={`/promo-${tab.id}`}
                className={`
                  relative flex flex-1 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-[11px] font-bold leading-tight tracking-tight
                  transition-all duration-300 xs:flex-row xs:text-xs sm:flex-none sm:gap-1.5 sm:rounded-xl sm:px-6 sm:py-3 sm:text-base
                  ${
                    activeTab === tab.id
                      ? "bg-[#FF5C00] text-white shadow-lg shadow-orange-500/25"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700"
                  }
                `}
              >
                <span className="whitespace-nowrap">{tab.label}</span>
                {/* 뱃지 표시 */}
                {tab.badge && (
                  <span
                    className={`
                      rounded-full px-1.5 py-0.5 text-[9px] sm:text-[10px] font-black leading-none sm:ml-1
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
                  <span className="absolute -bottom-[9px] left-1/2 h-1 w-6 sm:w-8 -translate-x-1/2 rounded-full bg-[#FF5C00] sm:-bottom-[11px]" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
