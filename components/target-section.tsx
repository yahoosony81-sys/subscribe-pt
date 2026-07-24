"use client"

import { Check } from "lucide-react"

const painPoints = [
  "혼자 운동하는게 지루하고 싫으신 분",
  "누군가 옆에서 응원해며 함께해주길 바라는 분",
  "지속적인 밀착관리가 있어야 움직이시는 분",
  "운동의 필요성은 알지만 헬스장 발걸음이 무거우신 분",
  "막상 헬스장에 가도 무엇부터 시작할지 막막하신 분",
  "작심삼일 운동을 우환범복증이신 분",
  "일반 PT의 높은 비용이 부담스러우신 분",
]

export function TargetSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form")
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        
        {/* Section 1: Question */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            혹시 <span className="text-[#FF5C00]">당신의 이야기</span>인가요?
          </h2>
        </div>

        {/* Section 2 & 3: Pain Points */}
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#FF5C00]/50 hover:shadow-md"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF5C00] text-white">
                <Check className="h-4 w-4" strokeWidth={3} />
              </div>
              <p className="text-sm font-medium leading-snug text-slate-700 md:text-base">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Section 4: Price Promotion */}
        <div className="mb-20 text-center">
          <p className="mb-2 text-lg font-medium text-slate-600 md:text-xl">
            PT를 구독하는 시대, 제대로 관리 받다
          </p>
          <p className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">
            한달에
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl font-medium text-slate-400 line-through md:text-3xl">
              500,000원
            </span>
            <span className="text-4xl font-extrabold text-[#FF5C00] md:text-6xl">
              99,000원
            </span>
          </div>
        </div>

        {/* Section 5: Value Proposition */}
        <div className="mb-12 rounded-2xl bg-slate-900 p-10 text-center md:p-14">
          <p className="mb-4 text-lg text-slate-300 md:text-xl">
            나의 건강관리를 지키고 싶은 분께
          </p>
          <p className="text-2xl font-bold text-white md:text-4xl">
            최적화된 <span className="text-[#FF5C00]">합리적인 선택</span>
          </p>
        </div>

        {/* Image Grid - 2x2 Layout */}
        <div className="mb-16 grid grid-cols-2 gap-3 md:gap-4">
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20260419_111452400_03-4xJlb82fBIXQcs2HivF8Polbcz9HXm.png"
              alt="혹시 당신의 이야기인가요?"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20260419_111452400_04-Wtg4A8iJQ1igZmWGrNIlslHDoUFFIb.png"
              alt="나의 건강관리를 잘하고 싶은분들에게 최적화된 합리적인 선택"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20260419_111452400_06-W2Wpid8w00OuuOZ6DeukcAmd772UGv.png"
              alt="제주도 최초 퍼스널 케어 센터 건강관리프로그램 도입"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20260419_111452400_05-m2O9loveDt32tUYFtpfp0YPxn2OgyC.png"
              alt="당신의 운동에 내 편이 생깁니다"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Section 8: Closing Message */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-base text-slate-500 md:text-lg">
            건강을 위한 쉬어감
          </p>
          <p className="mb-4 text-base text-slate-500 md:text-lg">
            꾸준한 운동을 위한 시작
          </p>
          <p className="mb-6 text-base text-slate-500 md:text-lg">
            마인드에서 증거가 되겠습니다.
          </p>
          <p className="text-3xl font-bold text-slate-900 md:text-4xl">
            역시, <span className="text-[#FF5C00]">마인드</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center text-center">
          <button
            onClick={scrollToForm}
            className="group relative w-full overflow-hidden rounded-lg bg-[#FF5C00] px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg sm:w-auto"
          >
            <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative">지금 상담신청 하기</span>
          </button>
          
          <p className="mt-3 text-xs text-gray-400">
            30초면 신청 가능합니다
          </p>
        </div>
      </div>

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
