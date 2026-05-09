"use client"

/**
 * ============================================================
 * 🔥 프로모션 한림점 [버닝 케어 멤버십]
 * ============================================================
 */

const copyData = {
  badge: "DIET RESET",
  heroSuper: "죽어도 안 빠지는 팔뚝살·허벅지살, 이유가 있습니다!",
  heroTitle1: "BURNING",
  heroTitle2: "CARE",
  heroTitle3: "MEMBERSHIP",
  heroBoxText1: "다이어트 전,",
  heroBoxText2: "고민 부위에 미리",
  heroBoxText3: "불을 지펴야 합니다!",
  heroHook: "다이어트만 하면 얼굴과 가슴 살만 빠지나요?\n고민 부위는 그대로인 이유, '순서'가 잘못되었기 때문입니다.",

  painTitle: "왜 내 고민 부위는\n그대로일까요?",
  painSub: "팔뚝과 허벅지는 조직이 단단하고 순환이 어려워\n가장 나중에 빠지는 부위입니다.\n무작정 하는 다이어트는 얼굴과 가슴 볼륨만 앗아갑니다.",

  solutionTitle: "본격 감량 전,\n'리셋'이 필요합니다",
  solutionDesc: "핵심은 '순서'입니다.\n\n🔥 감량 1~2달 전부터 해당 부위의 순환을 늘리고\n💪 근육을 자극하여 살이 빠질 수 있는 상태로 만듭니다.\n🎯 미리 관리된 부위는 다이어트 시 함께 연소됩니다.",

  offerTitle: "마인드 휘트니스\n[케어 멤버십]",
  offerPrice: "월 99,000원",
  offerBenefit: [
    "1. 한 달 총 5회 체계적 밀착 관리",
    "2. 회당 25분 집중 타겟팅 수업",
    "3. 기구 사용법 및 올바른 자세 교정",
    "4. 맞춤 운동량 & 식단 & 향후 플랜 상담"
  ],

  finalTitle: "딱 2달만 먼저 관리하세요!",
  finalSub: "케어 멤버십으로 고민 부위를 예열하면,\n당신이 원하던 부위부터 빠지는 신기한 결과를 얻을 수 있습니다.",
}

export function PromotionHlBurningCare() {
  const themeColor = "bg-[#B91C1C]"       // 빨간색 (버닝 테마)
  const themeAccent = "bg-[#FACC15]"      // 노란색
  const textColorTheme = "text-[#B91C1C]"
  
  return (
    <div id="promo-hl-burning-care" className="promotion-hl-container bg-white font-sans text-slate-900 tracking-tight">

      {/* ─────────────────────────────────────────────
          📌 [1] 히어로 섹션 (이미지 배경)
          ───────────────────────────────────────────── */}
      <section className="relative w-full min-h-[600px] md:min-h-[850px] flex items-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hl-hero-burning.png"
            alt="Burning Care Membership"
            className="w-full h-full object-cover object-center md:object-right-top opacity-80"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent md:from-black/80 md:via-black/30 md:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#7F1D1D]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full py-20">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
            <div className="w-full text-center md:text-left">
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-3">
                <span className="bg-[#FACC15] text-black font-black text-xs px-4 py-1.5 rounded-full tracking-widest uppercase shadow-lg shadow-yellow-500/20">
                  {copyData.badge}
                </span>
                <p className="text-sm md:text-base font-bold text-white/90 tracking-widest drop-shadow-md">
                  MIND FITNESS HALLIM
                </p>
              </div>
              <h1 className="text-6xl md:text-[8rem] lg:text-[9.5rem] font-black leading-[0.8] tracking-tighter uppercase mb-8 drop-shadow-2xl text-white">
                <div>{copyData.heroTitle1}</div>
                <div className="text-[#FACC15]">{copyData.heroTitle2}</div>
                <div className="text-4xl md:text-6xl lg:text-7xl mt-4 opacity-90">
                  {copyData.heroTitle3}
                </div>
              </h1>
              <p className="text-xl md:text-3xl font-black text-white max-w-2xl leading-tight mb-10 drop-shadow-lg">
                {copyData.heroSuper}
              </p>
              <div className="text-lg md:text-xl text-white/90 font-bold leading-relaxed whitespace-pre-line border-l-4 border-[#FACC15] pl-6 py-3 bg-black/20 backdrop-blur-sm rounded-r-xl inline-block text-left">
                {copyData.heroHook}
              </div>
            </div>

            {/* Info Box Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 w-full max-w-sm rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#FACC15]"></div>
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                <div className="w-3 h-3 bg-[#FACC15] rounded-full"></div>
              </div>
              <p className="text-2xl md:text-3xl font-black text-white leading-tight mb-8">
                {copyData.heroBoxText1}<br />
                <span className="text-[#FACC15] underline decoration-4 underline-offset-8">{copyData.heroBoxText2}</span><br />
                {copyData.heroBoxText3}
              </p>
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-[#FACC15] transition-all transform group-hover:scale-105"
              >
                상담 예약하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [2] Pain Point 섹션
          ───────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-black text-white text-xs font-black px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
                Pain Point
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-[1.1] mb-8 whitespace-pre-line">
                {copyData.painTitle}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                {copyData.painSub}
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/hl-thigh-care.png"
                alt="고민 부위 분석"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [3] Solution 섹션
          ───────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/hl-arm-care.png"
                alt="해결책 제안"
                className="w-full h-auto"
              />
            </div>
            <div>
              <div className="inline-block bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
                The Solution
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-[1.1] mb-8 whitespace-pre-line">
                {copyData.solutionTitle}
              </h2>
              <p className="text-lg md:text-xl text-slate-700 font-bold leading-relaxed whitespace-pre-line">
                {copyData.solutionDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [3-2] Why Sequence Matters (순서의 중요성)
          ───────────────────────────────────────────── */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">왜 '순서'가 중요할까요?</h2>
            <p className="text-slate-400 text-lg">무작정 굶는 다이어트는 실패할 확률이 높습니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "부위별 리셋", desc: "순환이 정체된 팔뚝, 허벅지 조직을 부드럽게 이완하고 자극합니다." },
              { step: "02", title: "에너지 활성", desc: "해당 부위의 근육을 활성화하여 지방이 연소되기 쉬운 상태로 만듭니다." },
              { step: "03", title: "본격 다이어트", desc: "예열된 고민 부위는 전신 감량 시 가장 먼저 반응하기 시작합니다." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all group">
                <div className="text-red-500 text-6xl font-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity italic">
                  {item.step}
                </div>
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-24 text-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-600 font-black text-sm tracking-widest uppercase mb-4 inline-block">Best Investment</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              {copyData.offerTitle}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white border border-slate-200 rounded-[2rem] p-8 md:p-16 shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-5 gap-12 items-center">
                  <div className="md:col-span-3 space-y-8">
                    <div className="space-y-4">
                      {copyData.offerBenefit.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors">
                          <span className="text-2xl mt-1">🔥</span>
                          <div>
                            <p className="text-xl font-black text-slate-900">{benefit.split('. ')[1]}</p>
                            <p className="text-slate-500 text-sm mt-1">체계적인 케어로 고민부위를 확실하게 해결해 드립니다.</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2 text-center md:text-right border-t md:border-t-0 md:border-l border-slate-100 pt-10 md:pt-0 md:pl-10 flex flex-col justify-center h-full">
                    <p className="text-slate-500 font-bold mb-2">PT 비용 부담 ZERO</p>
                    <div className="text-5xl md:text-6xl font-[1000] text-red-600 mb-6">
                      {copyData.offerPrice.split(' ')[1]}
                      <span className="text-xl text-slate-400 font-bold ml-1">/ {copyData.offerPrice.split(' ')[0]}</span>
                    </div>
                    <button
                      onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-black text-white font-black py-5 rounded-2xl text-lg hover:bg-red-600 transition-all shadow-xl"
                    >
                      지금 신청하기
                    </button>
                    <p className="mt-4 text-xs text-slate-400 font-medium">* 1:1 상담 후 개인별 맞춤 플랜이 구성됩니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [5] Final CTA Section
          ───────────────────────────────────────────── */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-black leading-tight mb-8">
            {copyData.finalTitle}
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-medium mb-12 whitespace-pre-line">
            {copyData.finalSub}
          </p>
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-600 text-white font-black px-10 py-5 rounded-full text-xl md:text-2xl hover:bg-red-700 transition-all hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto"
          >
            지금 바로 무료 상담 예약하기
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      </section>

    </div>
  )
}
