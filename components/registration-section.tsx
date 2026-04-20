"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { User, Phone, Clock, MessageSquare, MapPin } from "lucide-react"

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredTime: "",
    message: "",
    visitSource: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // 3초 후 자동으로 폼으로 돌아가기
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isSubmitted])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbzfAMUkKIeoSrv8sIDZMO6SoviFwEbaS9ma4TxVsRE6v9Ej-rBDEFEK6hGAraLmenDe/exec"

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          branch: "한림점",
          timestamp: new Date().toISOString()
        })
      })

      setIsSubmitted(true)
      setFormData({
        name: "",
        phone: "",
        preferredTime: "",
        message: "",
        visitSource: ""
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("신청 중 오류가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact-form" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-slate-900">
              신청이 완료되었습니다!
            </h3>
            <p className="mb-6 text-slate-600">
              빠른 시일 내에 연락드리겠습니다.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="rounded-lg border-2 border-orange-500 px-6 py-2 font-semibold text-orange-500 hover:bg-orange-50"
            >
              추가 신청하기
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-form" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-xl px-4">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            빠른 상담 신청
          </h2>
          <p className="text-base text-slate-600">
            궁금한 점이 있으시다면 정보를 남겨주세요. 확인 후 바로 연락드리겠습니다.
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-sm">
          <div className="space-y-5">
            {/* 1. Name */}
            <div>
              <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <User className="h-4 w-4 text-orange-500" />
                성함 <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                placeholder="홍길동"
              />
            </div>

            {/* 2. Phone */}
            <div>
              <label htmlFor="phone" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Phone className="h-4 w-4 text-orange-500" />
                연락처 <span className="text-orange-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                placeholder="010-1234-5678"
              />
            </div>

            {/* 3. Preferred Time */}
            <div>
              <label htmlFor="preferredTime" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Clock className="h-4 w-4 text-orange-500" />
                상담 희망 시간
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full cursor-pointer rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              >
                <option value="">연락 가능한 시간을 선택해주세요</option>
                <option value="오전 (09:00~12:00)">오전 (09:00~12:00)</option>
                <option value="오후 (12:00~18:00)">오후 (12:00~18:00)</option>
                <option value="저녁 (18:00~21:00)">저녁 (18:00~21:00)</option>
                <option value="언제든 가능">언제든 가능</option>
              </select>
            </div>

            {/* 4. Message/Inquiry */}
            <div>
              <label htmlFor="message" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <MessageSquare className="h-4 w-4 text-orange-500" />
                문의 사항
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                placeholder="궁금하신 내용을 적어주세요"
              />
            </div>

            {/* 5. Visit Source */}
            <div>
              <label htmlFor="visitSource" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <MapPin className="h-4 w-4 text-orange-500" />
                방문 경로
              </label>
              <select
                id="visitSource"
                name="visitSource"
                value={formData.visitSource}
                onChange={handleChange}
                className="w-full cursor-pointer rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              >
                <option value="">선택해주세요</option>
                <option value="블로그">블로그</option>
                <option value="인스타그램">인스타그램</option>
                <option value="지인추천">지인추천</option>
                <option value="기타">기타</option>
              </select>
            </div>

            {/* Submit Button with Shimmer */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="relative mt-4 w-full overflow-hidden rounded-lg bg-orange-500 py-6 text-base font-bold text-white transition-all hover:bg-orange-600 disabled:opacity-50"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative">
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="h-5 w-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
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

      {/* Shimmer animation keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  )
}
