"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { User, Phone, MessageSquare, ClipboardList } from "lucide-react"

export function RegistrationSectionNohyeong({
  title = "무료체험 신청하기",
  branch = "노형점",
  googleSheetUrl,
  sheetName,
  isModal = false,
  onSuccess
}: {
  title?: string;
  branch?: string;
  hideTimePicker?: boolean; // kept for backward compatibility if any parent passes it
  googleSheetUrl?: string;
  sheetName?: string;
  isModal?: boolean;
  onSuccess?: () => void;
} = {}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    careMembership: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showComplete, setShowComplete] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const submitUrl = googleSheetUrl || "https://script.google.com/macros/s/AKfycbxVhINsDHa7tyKQjEes8DQ_Kyri3umEV5A1wjS9MxmC5mV5zxVCUFi9ZYUXJV4jzrAH/exec"

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
      setFormData({ name: "", phone: "", careMembership: "", message: "" })
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
            <p className="text-sm text-slate-600 leading-relaxed">센터 이용 시 월 2만원의<br />추가 혜택이 제공됩니다.</p>
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

              <div>
                <label htmlFor="careMembership" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <ClipboardList className="h-4 w-4 text-orange-500" />
                  케어 멤버십 선택 <span className="text-orange-500">*</span>
                </label>
                <select
                  id="careMembership" name="careMembership"
                  value={formData.careMembership} onChange={handleChange} required
                  className="w-full cursor-pointer rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                >
                  <option value="">선택해주세요</option>
                  <option value="1개월 케어 멤버십(19만원/월)">1개월 케어 멤버십(19만원/월)</option>
                  <option value="3개월 케어 멤버십(15만원/월)">3개월 케어 멤버십(15만원/월)</option>
                  <option value="6개월 케어 멤버십(11만5천원/월)">6개월 케어 멤버십(11만5천원/월)</option>
                </select>
              </div>

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

              <Button
                type="submit"
                disabled={isSubmitting}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).fbq) (window as any).fbq('track', 'SubmitApplication');
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
    </>
  )
}
