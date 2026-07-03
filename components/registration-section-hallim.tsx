"use client"

import { useState, useEffect, useCallback } from "react"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { User, Phone, Clock, MessageSquare, MapPin, CalendarDays, X, ChevronLeft, ChevronRight } from "lucide-react"

function generateTimeSlots(): string[] {
  const slots: string[] = []
  for (let hour = 10; hour <= 20; hour++) {
    slots.push(`${String(hour).padStart(2, "0")}:00`)
    slots.push(`${String(hour).padStart(2, "0")}:30`)
  }
  slots.push("21:00")
  return slots
}

const TIME_SLOTS = generateTimeSlots()

const RESERVED_SLOTS: Record<string, string[]> = {
  "2026-05-01": ["10:00", "10:30", "14:00", "15:30"],
  "2026-05-02": ["11:00", "13:00", "13:30", "18:00"],
}

export function RegistrationSectionHallim({
  title = "무료체험 신청하기",
  branch = "한림점",
  hideTimePicker = false,
  googleSheetUrl,
  sheetName,
  isModal = false,
  onSuccess
}: {
  title?: string;
  branch?: string;
  hideTimePicker?: boolean;
  googleSheetUrl?: string;
  sheetName?: string;
  isModal?: boolean;
  onSuccess?: () => void;
} = {}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredTime: "",
    message: "",
    visitSource: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPicker, setShowPicker] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [showComplete, setShowComplete] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    setSelectedTime("")
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const confirmDateTime = useCallback(() => {
    if (selectedDate && selectedTime) {
      const displayStr = `${format(selectedDate, "yyyy년 M월 d일 (EEE)", { locale: ko })} ${selectedTime}`
      setFormData(prev => ({ ...prev, preferredTime: displayStr }))
      setShowPicker(false)
    }
  }, [selectedDate, selectedTime])

  const getReservedTimes = (): string[] => {
    if (!selectedDate) return []
    const key = format(selectedDate, "yyyy-MM-dd")
    return RESERVED_SLOTS[key] || []
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const submitUrl = googleSheetUrl || "https://script.google.com/macros/s/AKfycbwJJ9exLHsiL3-QvOk7RmOhqqo2sqaeBZ9rju4j04AWolAHVLDPCM7eeh3sUXVe4FKo/exec"

    try {
      await fetch(submitUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          branch: branch,
          sheetName: sheetName || branch,
          timestamp: new Date().toISOString(),
        }),
      })

      setShowComplete(true)
      setFadeOut(false)
      setFormData({ name: "", phone: "", preferredTime: "", message: "", visitSource: "" })
      setSelectedDate(undefined)
      setSelectedTime("")
      if (onSuccess) {
        setTimeout(onSuccess, 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("신청 중 오류가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (!showComplete) return
    const fadeTimer = setTimeout(() => setFadeOut(true), 2300)
    const removeTimer = setTimeout(() => {
      setShowComplete(false)
      setFadeOut(false)
    }, 3000)
    return () => { clearTimeout(fadeTimer); clearTimeout(removeTimer) }
  }, [showComplete])

  const reservedTimes = getReservedTimes()

  return (
    <>
      {showComplete && (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 transition-opacity duration-700 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
          <div className={`w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl transition-all duration-700 ${fadeOut ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}>
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900">신청이 완료되었습니다</h3>
            <p className="text-sm text-slate-600 leading-relaxed">지점에서 예약 확인 문자를<br />보내드리겠습니다</p>
          </div>
        </div>
      )}

      <section id="contact-form" className={isModal ? "p-0 bg-transparent" : "bg-slate-50 py-20"}>
        <div className={isModal ? "w-full" : "mx-auto max-w-xl px-4"}>
          {!isModal && (
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-2xl font-bold text-slate-900">{title}</h2>
              <p className="text-base text-slate-600">신청 완료 후 지점에서 안내 문자를 발송해 드립니다.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className={isModal ? "w-full p-0 shadow-none bg-transparent" : "rounded-2xl bg-white p-8 shadow-sm"}>
            <div className="space-y-5">
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

              {!hideTimePicker && (
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Clock className="h-4 w-4 text-orange-500" />
                    체험 희망 날짜와 시간
                  </label>
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
                  <input type="hidden" name="preferredTime" value={formData.preferredTime} />
                </div>
              )}

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

              <Button
                type="submit"
                disabled={isSubmitting}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('track', 'SubmitApplication');
                  }
                  // 서버 CAPI 전송 (비동기)
                  fetch('/api/capi', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      eventName: 'SubmitApplication',
                      pathname: window?.location?.pathname || '',
                      eventSourceUrl: window?.location?.href || '',
                      phone: formData.phone,
                    })
                  }).catch(err => console.error('CAPI 연동 에러:', err));
                }}
                className="relative mt-4 w-full overflow-hidden rounded-lg bg-orange-500 py-6 text-base font-bold text-white transition-all hover:bg-orange-600 disabled:opacity-50"
              >
                <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative">
                  {isSubmitting ? "신청 중..." : "신청 완료하기"}
                </span>
              </Button>
            </div>
            <p className="mt-5 text-center text-xs text-slate-400">30초면 신청 가능합니다. 개인정보는 상담 외 목적으로 사용되지 않습니다.</p>
          </form>
        </div>
        <style jsx>{`@keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }`}</style>
      </section>

      {showPicker && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/50 px-4" onClick={() => setShowPicker(false)}>
          <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setShowPicker(false)} className="absolute right-3 top-3 rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700">
              <X className="h-5 w-5" />
            </button>
            <h3 className="mb-4 text-center text-lg font-bold text-slate-900">날짜와 시간 선택</h3>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                locale={ko}
                disabled={{ before: new Date() }}
                className="rounded-xl border border-slate-100 shadow-sm p-2"
              />
            </div>
            {selectedDate && (
              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="mb-3 text-center text-sm font-semibold text-slate-700">📅 {format(selectedDate, "M월 d일 (EEE)", { locale: ko })} 시간 선택</p>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {TIME_SLOTS.map((time) => {
                    const isReserved = reservedTimes.includes(time)
                    const isSelected = selectedTime === time
                    return (
                      <button
                        key={time} type="button" disabled={isReserved}
                        onClick={() => handleTimeSelect(time)}
                        className={`relative rounded-lg border px-2 py-2.5 text-sm font-medium transition-all ${isReserved ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-300" : isSelected ? "border-orange-500 bg-orange-500 text-white shadow-md" : "border-slate-200 bg-white text-slate-700 hover:border-orange-400 hover:bg-orange-50"}`}
                      >
                        {time}
                        {isReserved && <span className="mt-0.5 block text-[10px] font-bold text-red-400">예약완료</span>}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
            <div className="mt-5">
              <button
                type="button" onClick={confirmDateTime} disabled={!selectedDate || !selectedTime}
                className="w-full rounded-lg bg-orange-500 py-3 text-sm font-bold text-white transition-all hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
              >
                {selectedDate && selectedTime ? `${format(selectedDate, "M/d")} ${selectedTime} 선택 완료` : "날짜와 시간을 선택해주세요"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
