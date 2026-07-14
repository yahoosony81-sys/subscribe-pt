"use client"

import { useState, useEffect, useCallback } from "react"
import { DayPicker } from "react-day-picker"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { User, Phone, Clock, MessageSquare, MapPin, CalendarDays, X } from "lucide-react"

function generateTimeSlots(): string[] {
  const slots: string[] = []
  for (let hour = 8; hour <= 23; hour++) {
    slots.push(`${String(hour).padStart(2, "0")}:00`)
  }
  return slots
}

const TIME_SLOTS = generateTimeSlots()

const RESERVED_SLOTS: Record<string, string[]> = {}

export function RegistrationSectionJmReset({
  title = "그룹PT 온라인 예약하기",
  branch = "리셋 중문점",
  hideTimePicker = false,
  googleSheetUrl = "", // 프롭으로 시트 URL을 받을 수 있도록 함 (추후 전달 가능)
  sheetName = "중문점그룹pt" // 프롭으로 시트 탭 이름을 받을 수 있도록 함
}: {
  title?: string;
  branch?: string;
  hideTimePicker?: boolean;
  googleSheetUrl?: string;
  sheetName?: string;
} = {}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    headcount: "1명",
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

    // 구글 시트 웹앱 URL이 없는 경우 (추후 설정 필요)
    if (!googleSheetUrl) {
      console.warn("구글 시트 URL이 설정되지 않았습니다. 데이터를 전송하지 않습니다:", formData)
      
      // 테스트 편의성을 위해 전송 안 되더라도 로컬 완료 화면은 띄워줌
      setTimeout(() => {
        setShowComplete(true)
        setFadeOut(false)
        setFormData({ name: "", phone: "", headcount: "1명", preferredTime: "", message: "", visitSource: "" })
        setSelectedDate(undefined)
        setSelectedTime("")
        setIsSubmitting(false)
      }, 800)
      return
    }

    try {
      await fetch(googleSheetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          branch: branch,
          sheetName: sheetName,
          timestamp: new Date().toISOString(),
        }),
      })

      setShowComplete(true)
      setFadeOut(false)

      setFormData({ name: "", phone: "", headcount: "1명", preferredTime: "", message: "", visitSource: "" })
      setSelectedDate(undefined)
      setSelectedTime("")
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

      <section id="contact-form" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-xl px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">{title}</h2>
            <p className="text-base text-slate-600">궁금한 점이 있으시다면 정보를 남겨주세요. 확인 후 바로 연락드리겠습니다.</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <User className="h-4 w-4 text-[#1D4ED8]" /> 성함 <span className="text-red-500">*</span>
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all placeholder:text-slate-400 focus:border-[#1D4ED8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20" placeholder="홍길동" />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Phone className="h-4 w-4 text-[#1D4ED8]" /> 연락처 <span className="text-red-500">*</span>
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all placeholder:text-slate-400 focus:border-[#1D4ED8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20" placeholder="010-1234-5678" />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <User className="h-4 w-4 text-[#1D4ED8]" /> 인원수 <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["1명", "2명", "3명", "4명"].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, headcount: num }))}
                      className={`rounded-lg border py-3 text-sm font-bold transition-all ${
                        formData.headcount === num
                          ? "border-[#1D4ED8] bg-[#1D4ED8] text-white shadow-md"
                          : "border-slate-200 bg-slate-50 text-slate-600 hover:border-[#1D4ED8]/50"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {!hideTimePicker && (
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <CalendarDays className="h-4 w-4 text-[#1D4ED8]" /> 원하는 날짜와 시간 <span className="text-red-500">*</span>
                  </label>
                  <button type="button" onClick={() => setShowPicker(true)} className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-left transition-all hover:border-[#1D4ED8] hover:bg-blue-50 focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20">
                    <span className={formData.preferredTime ? "text-slate-900 font-medium" : "text-slate-400"}>
                      {formData.preferredTime || "날짜와 시간을 선택해주세요"}
                    </span>
                    <Clock className="h-5 w-5 text-[#1D4ED8] shrink-0" />
                  </button>
                  <input type="hidden" name="preferredTime" value={formData.preferredTime} />
                </div>
              )}

              <div>
                <label htmlFor="message" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <MessageSquare className="h-4 w-4 text-[#1D4ED8]" /> 기타 문의 사항
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all placeholder:text-slate-400 focus:border-[#1D4ED8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20" placeholder="궁금하신 내용을 적어주세요" />
              </div>

              <div>
                <label htmlFor="visitSource" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <MapPin className="h-4 w-4 text-[#1D4ED8]" /> 방문 경로
                </label>
                <select id="visitSource" name="visitSource" value={formData.visitSource} onChange={handleChange} className="w-full cursor-pointer rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all focus:border-[#1D4ED8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20">
                  <option value="">선택해주세요</option>
                  <option value="블로그">블로그</option>
                  <option value="인스타그램">인스타그램</option>
                  <option value="지인추천">지인추천</option>
                  <option value="기타">기타</option>
                </select>
              </div>

              {/* Pixel CompleteRegistration tracking removed as per request */}
              <Button type="submit" disabled={isSubmitting} className="relative mt-4 w-full overflow-hidden rounded-lg bg-[#1D4ED8] py-6 text-base font-bold text-white transition-all hover:bg-blue-700 disabled:opacity-50">
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
                    "온라인 예약 신청하기"
                  )}
                </span>
              </Button>
            </div>
            <p className="mt-5 text-center text-xs text-slate-400">30초면 신청 가능합니다. 개인정보는 상담 외 목적으로 사용되지 않습니다.</p>
          </form>
        </div>
        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </section>

      {showPicker && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/50 px-4" onClick={() => setShowPicker(false)}>
          <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setShowPicker(false)} className="absolute right-3 top-3 rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700">
              <X className="h-5 w-5" />
            </button>
            <h3 className="mb-4 text-center text-lg font-bold text-slate-900">날짜와 시간 선택</h3>
            <div className="flex justify-center">
              <DayPicker mode="single" selected={selectedDate} onSelect={handleDateSelect} locale={ko} disabled={{ before: new Date() }} className="!font-sans" classNames={{ months: "flex flex-col", month: "space-y-3", month_caption: "flex justify-center items-center pt-1", caption_label: "text-base font-bold text-slate-900", nav: "flex items-center gap-1", button_previous: "absolute left-2 top-3 h-8 w-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors", button_next: "absolute right-2 top-3 h-8 w-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors", month_grid: "w-full border-collapse", weekdays: "flex", weekday: "w-10 h-10 flex items-center justify-center text-xs font-semibold text-slate-400", week: "flex", day: "w-10 h-10 flex items-center justify-center text-sm rounded-full cursor-pointer transition-colors hover:bg-blue-50 text-slate-700", day_button: "w-10 h-10 flex items-center justify-center rounded-full transition-colors", selected: "!bg-[#1D4ED8] !text-white font-bold hover:!bg-blue-700", today: "font-bold text-[#1D4ED8] ring-1 ring-blue-300 rounded-full", disabled: "text-slate-300 cursor-not-allowed hover:bg-transparent", outside: "text-slate-300" }} />
            </div>
            {selectedDate && (
              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="mb-3 text-center text-sm font-semibold text-slate-700">📅 {format(selectedDate, "M월 d일 (EEE)", { locale: ko })} 시간 선택</p>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {TIME_SLOTS.map((time) => {
                    const isReserved = reservedTimes.includes(time)
                    const isSelected = selectedTime === time
                    return (
                      <button key={time} type="button" disabled={isReserved} onClick={() => handleTimeSelect(time)} className={`relative rounded-lg border px-2 py-2.5 text-sm font-medium transition-all ${isReserved ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-300" : isSelected ? "border-[#1D4ED8] bg-[#1D4ED8] text-white shadow-md" : "border-slate-200 bg-white text-slate-700 hover:border-[#1D4ED8] hover:bg-blue-50"}`}>
                        {time}
                        {isReserved && <span className="mt-0.5 block text-[10px] font-bold text-red-400">예약완료</span>}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
            <div className="mt-5">
              <button type="button" onClick={confirmDateTime} disabled={!selectedDate || !selectedTime} className="w-full rounded-lg bg-[#1D4ED8] py-3 text-sm font-bold text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400">
                {selectedDate && selectedTime ? `${format(selectedDate, "M/d")} ${selectedTime} 선택 완료` : "날짜와 시간을 선택해주세요"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
