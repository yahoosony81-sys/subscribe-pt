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
      <section className="w-full bg-black flex justify-center overflow-hidden">
        <div className="w-full max-w-7xl">
          {/* 모바일에서는 높이를 강제로 주어 이미지가 확대(crop)되도록 처리하여 텍스트 가독성 확보 */}
          <img
            src="/images/caremembership-burnning-hero.png"
            alt="Burning Care Membership"
            className="w-full h-[150vw] sm:h-[120vw] md:h-auto object-cover object-top block"
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [1.5] 추가 이미지 섹션 (히어로 바로 아래)
          ───────────────────────────────────────────── */}
      <section className="w-full flex flex-col items-center">
        <div className="w-full">
          <img
            src={encodeURI("/images/힉스필드수정본.png")}
            alt="힉스필드수정본"
            className="w-full h-auto block object-cover"
          />
          <img
            src={encodeURI("/images/한림상완운동녀-평온-켑컷수정본.png")}
            alt="한림상완운동녀"
            className="w-full h-auto block object-cover"
          />
          <img
            src={encodeURI("/images/한림점 허벅지날씬여-캡컷수정.png")}
            alt="한림점 허벅지날씬여"
            className="w-full h-auto block object-cover"
          />
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
                      지금 케어 멤버십 체험 신청하기
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
          📌 [4] 5월 이벤트 섹션 (추가됨)
          ───────────────────────────────────────────── */}
      <section className="w-full bg-slate-50 py-24 border-t border-slate-100 relative overflow-hidden">
        {/* 장식용 배경 요소 */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-red-600 via-red-500 to-orange-500 rounded-[2.5rem] p-8 md:p-14 shadow-2xl transform transition-transform hover:scale-[1.01] text-white relative overflow-hidden">
            {/* 내부 장식 */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-yellow-300 opacity-20 rounded-full blur-2xl"></div>

            <div className="text-center mb-12 relative z-10">
              <span className="inline-block bg-[#FACC15] text-red-900 font-black px-6 py-2.5 rounded-full text-sm md:text-base tracking-widest mb-6 shadow-xl animate-bounce">
                🎁 5월 가정의 달 특별 이벤트 🎁
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                케어 멤버십 결제 하시는 분들께<br />
                <span className="text-[#FACC15] drop-shadow-md">혜택이 쏟아집니다!</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20 text-center flex flex-col items-center hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-white text-red-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg font-black">
                  1
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3">~ 5월 15일 이전 결제 시</h3>
                <p className="text-3xl md:text-5xl font-black text-[#FACC15] drop-shadow-sm">관리 2회 추가</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20 text-center flex flex-col items-center hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-white text-red-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg font-black">
                  2
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3">5월 15일 ~ 30일 결제 시</h3>
                <p className="text-3xl md:text-5xl font-black text-[#FACC15] drop-shadow-sm">관리 1회 추가</p>
              </div>
            </div>
            
            <p className="text-center mt-10 text-white/90 font-medium text-sm md:text-base relative z-10 bg-black/10 inline-block px-6 py-3 rounded-full mx-auto flex w-max max-w-full">
              * 본 혜택은 기간 내 결제 완료 시 적용되며, 선착순 마감될 수 있습니다.
            </p>
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
            지금 케어 멤버십 체험 신청하기
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      </section>

    </div>
  )
}
