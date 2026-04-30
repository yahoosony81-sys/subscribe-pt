"use client"

/**
 * ============================================================
 * 📋 체험 신청 폼 (Registration Section)
 * ============================================================
 * 
 * 주요 기능:
 *   1. "선택하기" 버튼 클릭 → 캘린더 팝업 표시
 *   2. 날짜 선택 → 30분 단위 시간 슬롯 표시 (10:00~21:00)
 *   3. 이미 예약된 시간대는 "예약완료" 표시 + 비활성화
 *   4. 신청 완료 시 중앙 안내창 → 3초 후 페이드아웃
 * 
 * 사용 기술: React, Tailwind CSS, react-day-picker, date-fns
 * ============================================================
 */

import { useState, useEffect, useCallback } from "react"
import { DayPicker } from "react-day-picker"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { User, Phone, Clock, MessageSquare, MapPin, CalendarDays, X, ChevronLeft, ChevronRight } from "lucide-react"

/* ─────────────────────────────────────────────
   📌 30분 단위 시간 슬롯 생성 (오전 10:00 ~ 오후 9:00)
   ───────────────────────────────────────────── */
function generateTimeSlots(): string[] {
  const slots: string[] = []
  for (let hour = 10; hour <= 20; hour++) {
    // 정시 (예: 10:00, 11:00 ...)
    slots.push(`${String(hour).padStart(2, "0")}:00`)
    // 30분 (예: 10:30, 11:30 ...)
    slots.push(`${String(hour).padStart(2, "0")}:30`)
  }
  // 마지막 21:00 추가
  slots.push("21:00")
  return slots
}

const TIME_SLOTS = generateTimeSlots()

/* ─────────────────────────────────────────────
   📌 예약 완료된(이미 선점된) 시간 데이터 (데모용)
   실제 서비스에서는 서버/DB에서 불러옵니다.
   형식: { "YYYY-MM-DD": ["HH:MM", ...] }
   ───────────────────────────────────────────── */
const RESERVED_SLOTS: Record<string, string[]> = {
  "2026-05-01": ["10:00", "10:30", "14:00", "15:30"],
  "2026-05-02": ["11:00", "13:00", "13:30", "18:00"],
  "2026-05-03": ["10:00", "16:00", "16:30", "20:00"],
  "2026-05-05": ["10:30", "11:00", "11:30", "14:00", "14:30", "19:00"],
}

/* ─────────────────────────────────────────────
   📌 메인 컴포넌트
   ───────────────────────────────────────────── */
export function RegistrationSection() {
  // ── 폼 데이터 상태 ──
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredTime: "",   // "YYYY-MM-DD HH:MM" 형태로 저장
    message: "",
    visitSource: "",
  })

  // ── UI 상태 ──
  const [isSubmitting, setIsSubmitting] = useState(false)

  // ── 캘린더/시간 선택 팝업 관련 ──
  const [showPicker, setShowPicker] = useState(false)     // 팝업 표시 여부
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string>("")

  // ── 완료 메시지 관련 ──
  const [showComplete, setShowComplete] = useState(false)  // 완료 메시지 표시
  const [fadeOut, setFadeOut] = useState(false)             // 페이드아웃 애니메이션

  /* ── 폼 입력 핸들러 ── */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  /* ── 날짜 선택 시 호출 ── */
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    setSelectedTime("")  // 날짜가 바뀌면 시간 초기화
  }

  /* ── 시간 선택 시 호출 ── */
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  /* ── 날짜+시간 확정 (팝업 닫기) ── */
  const confirmDateTime = useCallback(() => {
    if (selectedDate && selectedTime) {
      const dateStr = format(selectedDate, "yyyy-MM-dd")
      const displayStr = `${format(selectedDate, "yyyy년 M월 d일 (EEE)", { locale: ko })} ${selectedTime}`
      setFormData(prev => ({ ...prev, preferredTime: displayStr }))
      setShowPicker(false)
    }
  }, [selectedDate, selectedTime])

  /* ── 선택한 날짜에 해당하는 예약된 시간 목록 ── */
  const getReservedTimes = (): string[] => {
    if (!selectedDate) return []
    const key = format(selectedDate, "yyyy-MM-dd")
    return RESERVED_SLOTS[key] || []
  }

  /* ── 폼 제출 핸들러 ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Google Sheets 연동 URL (기존 코드 유지)
    const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbzfAMUkKIeoSrv8sIDZMO6SoviFwEbaS9ma4TxVsRE6v9Ej-rBDEFEK6hGAraLmenDe/exec"

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          branch: "한림점",
          timestamp: new Date().toISOString(),
        }),
      })

      // ── 완료 메시지 표시 + 3초 후 페이드아웃 ──
      setShowComplete(true)
      setFadeOut(false)

      // 폼 초기화
      setFormData({ name: "", phone: "", preferredTime: "", message: "", visitSource: "" })
      setSelectedDate(undefined)
      setSelectedTime("")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("신청 중 오류가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  /* ── 완료 메시지: 3초 뒤 페이드아웃 시작 → 애니메이션 후 제거 ── */
  useEffect(() => {
    if (!showComplete) return
    // 2.3초 후 페이드아웃 애니메이션 시작
    const fadeTimer = setTimeout(() => setFadeOut(true), 2300)
    // 3초 후 완전히 제거
    const removeTimer = setTimeout(() => {
      setShowComplete(false)
      setFadeOut(false)
    }, 3000)
    return () => { clearTimeout(fadeTimer); clearTimeout(removeTimer) }
  }, [showComplete])

  /* ── 예약된 시간 목록 ── */
  const reservedTimes = getReservedTimes()

  return (
    <>
      {/* ─────────────────────────────────────────
          📌 완료 안내 오버레이 (화면 중앙, 페이드아웃)
          ───────────────────────────────────────── */}
      {showComplete && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 transition-opacity duration-700 ${fadeOut ? "opacity-0" : "opacity-100"}`}
        >
          <div
            className={`w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl transition-all duration-700 ${fadeOut ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}
          >
            {/* ✅ 체크 아이콘 */}
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900">
              신청이 완료되었습니다
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              지점에서 예약 확인 문자를<br />보내드리겠습니다
            </p>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────
          📌 메인 폼 섹션
          ───────────────────────────────────────── */}
      <section id="contact-form" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-xl px-4">
          {/* 섹션 헤더 */}
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">빠른 상담 신청</h2>
            <p className="text-base text-slate-600">
              궁금한 점이 있으시다면 정보를 남겨주세요. 확인 후 바로 연락드리겠습니다.
            </p>
          </div>

          {/* ── 신청 폼 ── */}
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="space-y-5">

              {/* 1. 성함 */}
              <div>
                <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <User className="h-4 w-4 text-orange-500" />
                  성함 <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange} required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  placeholder="홍길동"
                />
              </div>

              {/* 2. 연락처 */}
              <div>
                <label htmlFor="phone" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Phone className="h-4 w-4 text-orange-500" />
                  연락처 <span className="text-orange-500">*</span>
                </label>
                <input
                  type="tel" id="phone" name="phone"
                  value={formData.phone} onChange={handleChange} required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  placeholder="010-1234-5678"
                />
              </div>

              {/* ─────────────────────────────────────
                  3. 체험 희망 날짜와 시간 (★ 고도화 영역)
                  ───────────────────────────────────── */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Clock className="h-4 w-4 text-orange-500" />
                  체험 희망 날짜와 시간
                </label>

                {/* 선택된 값 표시 또는 "선택하기" 버튼 */}
                <button
                  type="button"
                  onClick={() => setShowPicker(true)}
                  className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-left transition-all hover:border-orange-400 hover:bg-orange-50 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                >
                  <span className={formData.preferredTime ? "text-slate-900 font-medium" : "text-slate-400"}>
                    {formData.preferredTime || "날짜와 시간을 선택해주세요"}
                  </span>
                  <CalendarDays className="h-5 w-5 text-orange-500 shrink-0" />
                </button>

                {/* 숨겨진 input (폼 데이터 전송용) */}
                <input type="hidden" name="preferredTime" value={formData.preferredTime} />
              </div>

              {/* 4. 기타 문의 사항 */}
              <div>
                <label htmlFor="message" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <MessageSquare className="h-4 w-4 text-orange-500" />
                  기타 문의 사항(선택)
                </label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange} rows={3}
                  className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  placeholder="궁금하신 내용을 적어주세요"
                />
              </div>

              {/* 5. 방문 경로 */}
              <div>
                <label htmlFor="visitSource" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <MapPin className="h-4 w-4 text-orange-500" />
                  방문 경로
                </label>
                <select
                  id="visitSource" name="visitSource"
                  value={formData.visitSource} onChange={handleChange}
                  className="w-full cursor-pointer rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                >
                  <option value="">선택해주세요</option>
                  <option value="블로그">블로그</option>
                  <option value="인스타그램">인스타그램</option>
                  <option value="지인추천">지인추천</option>
                  <option value="기타">기타</option>
                </select>
              </div>

              {/* 신청 버튼 (Shimmer 효과) */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="relative mt-4 w-full overflow-hidden rounded-lg bg-orange-500 py-6 text-base font-bold text-white transition-all hover:bg-orange-600 disabled:opacity-50"
              >
                <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      신청 중...
                    </span>
                  ) : (
                    "신청 완료하기"
                  )}
                </span>
              </Button>
            </div>

            <p className="mt-5 text-center text-xs text-slate-400">
              30초면 신청 가능합니다. 개인정보는 상담 외 목적으로 사용되지 않습니다.
            </p>
          </form>
        </div>

        {/* Shimmer 키프레임 */}
        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </section>

      {/* ─────────────────────────────────────────
          📌 캘린더 + 시간 선택 팝업 (모달)
          ───────────────────────────────────────── */}
      {showPicker && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/50 px-4" onClick={() => setShowPicker(false)}>
          <div
            className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              type="button"
              onClick={() => setShowPicker(false)}
              className="absolute right-3 top-3 rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="mb-4 text-center text-lg font-bold text-slate-900">
              날짜와 시간 선택
            </h3>

            {/* ── 캘린더 ── */}
            <div className="flex justify-center">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                locale={ko}
                disabled={{ before: new Date() }}
                className="!font-sans"
                classNames={{
                  months: "flex flex-col",
                  month: "space-y-3",
                  month_caption: "flex justify-center items-center pt-1",
                  caption_label: "text-base font-bold text-slate-900",
                  nav: "flex items-center gap-1",
                  button_previous: "absolute left-2 top-3 h-8 w-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors",
                  button_next: "absolute right-2 top-3 h-8 w-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors",
                  month_grid: "w-full border-collapse",
                  weekdays: "flex",
                  weekday: "w-10 h-10 flex items-center justify-center text-xs font-semibold text-slate-400",
                  week: "flex",
                  day: "w-10 h-10 flex items-center justify-center text-sm rounded-full cursor-pointer transition-colors hover:bg-orange-50 text-slate-700",
                  day_button: "w-10 h-10 flex items-center justify-center rounded-full transition-colors",
                  selected: "!bg-orange-500 !text-white font-bold hover:!bg-orange-600",
                  today: "font-bold text-orange-500 ring-1 ring-orange-300 rounded-full",
                  disabled: "text-slate-300 cursor-not-allowed hover:bg-transparent",
                  outside: "text-slate-300",
                }}
              />
            </div>

            {/* ── 시간 슬롯 리스트 (날짜 선택 후 표시) ── */}
            {selectedDate && (
              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="mb-3 text-center text-sm font-semibold text-slate-700">
                  📅 {format(selectedDate, "M월 d일 (EEE)", { locale: ko })} 시간 선택
                </p>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {TIME_SLOTS.map((time) => {
                    const isReserved = reservedTimes.includes(time)
                    const isSelected = selectedTime === time

                    return (
                      <button
                        key={time}
                        type="button"
                        disabled={isReserved}
                        onClick={() => handleTimeSelect(time)}
                        className={`
                          relative rounded-lg border px-2 py-2.5 text-sm font-medium transition-all
                          ${isReserved
                            ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-300"
                            : isSelected
                              ? "border-orange-500 bg-orange-500 text-white shadow-md"
                              : "border-slate-200 bg-white text-slate-700 hover:border-orange-400 hover:bg-orange-50"
                          }
                        `}
                      >
                        {time}
                        {/* 예약완료 뱃지 */}
                        {isReserved && (
                          <span className="mt-0.5 block text-[10px] font-bold text-red-400">
                            예약완료
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* ── 확인 버튼 ── */}
            <div className="mt-5">
              <button
                type="button"
                onClick={confirmDateTime}
                disabled={!selectedDate || !selectedTime}
                className="w-full rounded-lg bg-orange-500 py-3 text-sm font-bold text-white transition-all hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
              >
                {selectedDate && selectedTime
                  ? `${format(selectedDate, "M/d")} ${selectedTime} 선택 완료`
                  : "날짜와 시간을 선택해주세요"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
