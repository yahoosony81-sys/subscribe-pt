"use client"

import { useState } from "react"
import { Phone, Copy, Check, Clock, Coffee, X, MapPin, Eye } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface ContactModalJmResetProps {
  isOpen: boolean
  onClose: () => void
}

const JUNGMUN_LOCATION_URL =
  "https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EB%8C%80%ED%8F%AC%EC%A4%91%EC%95%99%EB%A1%9C%206-8%203%EC%B8%B5/place/2058980846?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=%2Fhome%3FfromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607141452%26locale%3Dko%26svcName%3Dmap_pcv5%26searchText%3D%EC%A0%9C%EC%A3%BC%20%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EB%8C%80%ED%8F%AC%EC%A4%91%EC%95%99%EB%A1%9C%206-8%203%EC%B8%B5"

const JUNGMUN_PHOTO_URL =
  "https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EB%8C%80%ED%8F%AC%EC%A4%91%EC%95%99%EB%A1%9C%206-8%203%EC%B8%B5/place/2058980846?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=%2Fphoto%3FfromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607141452%26locale%3Dko%26svcName%3Dmap_pcv5%26searchText%3D%EC%A0%9C%EC%A3%BC%20%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EB%8C%80%ED%8F%AC%EC%A4%91%EC%95%99%EB%A1%9C%206-8%203%EC%B8%B5"

export function ContactModalJmReset({ isOpen, onClose }: ContactModalJmResetProps) {
  const [copied, setCopied] = useState(false)
  const phoneNumber = "010-7526-0792"

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(phoneNumber)
      } else {
        const textArea = document.createElement("textarea")
        textArea.value = phoneNumber
        textArea.style.position = "fixed"
        textArea.style.left = "-999999px"
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand("copy")
        textArea.remove()
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("복사 실패:", err)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="max-w-md p-0 bg-transparent border-none max-h-[90vh] overflow-y-auto outline-none">
        <div className="relative bg-[#111111] border border-[#CCFF00]/40 text-white rounded-2xl p-6 sm:p-7 shadow-2xl overflow-hidden font-sans">
          
          {/* Top/Bottom subtle neon glow */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#CCFF00]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#CCFF00]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>

          <div>
            {/* Modal Header */}
            <div className="text-center mb-6 pt-2">
              <span className="inline-block px-3 py-1 bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] text-[11px] font-bold rounded-full tracking-wider uppercase mb-2">
                CONSULTATION CONTACT
              </span>
              <DialogTitle className="text-2xl font-black text-white tracking-tight">
                상담 가능 연락처
              </DialogTitle>
              <DialogDescription className="text-xs text-white/60 mt-1">
                전화 연결 및 번호 복사를 쉽게 이용하실 수 있습니다.
              </DialogDescription>
            </div>

            {/* Phone Card */}
            <div className="bg-[#1C1C1E] border border-white/10 rounded-xl p-5 mb-5 text-center space-y-4">
              <p className="text-xs text-white/50 font-medium tracking-wide">상담 가능 전화번호</p>
              <div className="text-2xl sm:text-3xl font-black text-[#CCFF00] tracking-wider font-mono">
                {phoneNumber}
              </div>

              {/* Mobile Direct Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {/* Call / Save Contact Link */}
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#CCFF00] text-black font-extrabold text-sm hover:bg-white transition-all shadow-md active:scale-95 cursor-pointer no-underline"
                >
                  <Phone className="w-4 h-4 fill-black" />
                  <span>전화 연결</span>
                </a>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white font-extrabold text-sm transition-all active:scale-95 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#CCFF00]" />
                      <span className="text-[#CCFF00]">복사 완료!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>번호 복사</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-white/40 font-medium">
                📱 모바일에서는 [전화 연결]을 누르면 즉시 통화 및 연락처 저장이 가능합니다.
              </p>
            </div>

            {/* Hours Card */}
            <div className="bg-[#1C1C1E]/80 border border-white/10 rounded-xl p-4 space-y-3 mb-5 text-xs sm:text-sm">
              <div className="flex items-center justify-between py-1 border-b border-white/10">
                <div className="flex items-center gap-2 text-white/70 font-medium">
                  <Clock className="w-4 h-4 text-[#CCFF00]" />
                  <span>상담가능시간</span>
                </div>
                <span className="font-bold text-white">평일 09:00 ~ 20:30</span>
              </div>

              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2 text-white/70 font-medium">
                  <Coffee className="w-4 h-4 text-amber-400" />
                  <span>휴게시간</span>
                </div>
                <span className="font-bold text-white/80">11:00 ~ 17:30</span>
              </div>
            </div>

            {/* Location & Interior Tour Buttons */}
            <div className="space-y-2.5 pt-1">
              <p className="text-[11px] text-white/50 font-medium px-1">📍 리셋중문점 지도 및 시설 안내</p>
              <div className="flex flex-wrap sm:flex-nowrap gap-2">
                <a
                  href={JUNGMUN_LOCATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-[#FEE500] border border-black text-black font-bold text-xs sm:text-sm px-3.5 py-2.5 rounded-lg hover:bg-[#FEE500]/90 transition-colors no-underline text-center cursor-pointer shadow-sm"
                >
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>지점위치 보기</span>
                </a>
                <a
                  href={JUNGMUN_PHOTO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-[#FEE500] border border-black text-black font-bold text-xs sm:text-sm px-3.5 py-2.5 rounded-lg hover:bg-[#FEE500]/90 transition-colors no-underline text-center cursor-pointer shadow-sm"
                >
                  <Eye className="w-4 h-4 shrink-0" />
                  <span>센터내부 둘러보기</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
