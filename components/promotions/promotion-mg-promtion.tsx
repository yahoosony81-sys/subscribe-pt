"use client"

/**
 * ============================================================
 * 🔥 프로모션 부산명지점 [케어 멤버십]
 * ============================================================
 */

const copyData = {
  offerTitle: "마인드휘트니스 부산명지점\n월 구독형 [케어 멤버십]",
  offerBenefit: [
    "1. 부담 없는 월 5회, 하루 딱 25분 밀착 관리",
    "2. 헬스 기구의 정확한 사용법과 올바른 자세 티칭",
    "3. 정밀한 체성분 분석과 나에게 딱 맞춘 1:1 맞춤 식단",
    "4. 내 편이 되어주는 담당 트레이너와 즐겁게 운동"
  ],
  finalTitle: "고민은 끝!\n월 5회 25분 구독형 케어 멤버십 오픈",
  finalSub: "망설이면 선착순 마감, 지금 신청서 작성하고 혜택 받기",
}

export function PromotionMgPromtion() {
  return (
    <div id="promo-mg-promtion" className="promotion-mg-container bg-white font-sans text-slate-900 tracking-tight">

      {/* ─────────────────────────────────────────────
          📌 [1] 히어로 섹션
          ───────────────────────────────────────────── */}
      <section className="w-full bg-black flex justify-center overflow-hidden">
        <div className="w-full max-w-7xl">
          <img
            src={encodeURI("/images/케어멤버십히어로이미지최종.png")}
            alt="케어 멤버십 히어로"
            className="w-full h-auto object-cover object-top block"
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [1.5] 공감 이미지 지그재그 섹션
          ───────────────────────────────────────────── */}
      <section className="w-full bg-slate-50 py-16 md:py-32 px-4 md:px-6 overflow-hidden border-b border-slate-200">
        <div className="max-w-5xl mx-auto flex flex-col gap-12 md:gap-28">
          
          {/* 첫 번째: 혼자 꾸준히 (모바일에서도 지그재그: 이미지 왼쪽) */}
          <div className="flex flex-row items-center gap-4 md:gap-16 group">
            <div className="w-1/2 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl transform transition-transform group-hover:scale-[1.02]">
              <img src={encodeURI("/images/혼자꾸준히운동자신없아.png")} alt="혼자 꾸준히 운동할 자신이 없는 분" className="w-full h-auto object-cover" />
            </div>
            <div className="w-1/2 flex items-center justify-start text-left px-1 md:px-2">
              <p className="text-xl sm:text-3xl md:text-5xl font-[900] text-black break-keep leading-[1.3] md:leading-[1.4]">
                혼자 꾸준히<br /> <span>운동할 자신이<br /> 없는 분</span>
              </p>
            </div>
          </div>

          {/* 구분선 */}
          <div className="w-full h-px bg-slate-200 rounded-full"></div>

          {/* 두 번째: 맨날 런닝머신 (모바일에서도 지그재그: 이미지 오른쪽) */}
          <div className="flex flex-row-reverse items-center gap-4 md:gap-16 group">
            <div className="w-1/2 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl transform transition-transform group-hover:scale-[1.02]">
              <img src={encodeURI("/images/맨날 런닝머신 copy.png")} alt="맨날 런닝머신만 하다가 끝나시는 분" className="w-full h-auto object-cover" />
            </div>
            <div className="w-1/2 flex items-center justify-end text-right px-1 md:px-2">
              <p className="text-xl sm:text-3xl md:text-5xl font-[900] text-black break-keep leading-[1.3] md:leading-[1.4]">
                맨날 런닝머신만<br /> <span>하다가<br /> 끝나시는 분</span>
              </p>
            </div>
          </div>

          {/* 구분선 */}
          <div className="w-full h-px bg-slate-200 rounded-full"></div>

          {/* 세 번째: 비싼 PT (모바일에서도 지그재그: 이미지 왼쪽) */}
          <div className="flex flex-row items-center gap-4 md:gap-16 group">
            <div className="w-1/2 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl transform transition-transform group-hover:scale-[1.02]">
              <img src={encodeURI("/images/비싼pt겁나다.png")} alt="비싼 PT 신청할까봐 겁나시는 분" className="w-full h-auto object-cover" />
            </div>
            <div className="w-1/2 flex items-center justify-start text-left px-1 md:px-2">
              <p className="text-xl sm:text-3xl md:text-5xl font-[900] text-black break-keep leading-[1.3] md:leading-[1.4]">
                비싼 PT<br /> <span>신청할까봐<br /> 겁나시는 분</span>
              </p>
            </div>
          </div>
          
        </div>
      </section>



      {/* ─────────────────────────────────────────────
          📌 [2] 공감 및 솔루션 섹션
          ───────────────────────────────────────────── */}
      <section className="bg-white py-24 text-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 flex flex-col items-center">



            <div className="mt-2">
              <span className="text-indigo-600 font-black text-sm md:text-base tracking-widest uppercase mb-4 inline-block">Best Choice</span>
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight whitespace-pre-line">
                {copyData.offerTitle}
              </h2>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative bg-white border border-slate-200 rounded-[2rem] p-8 md:p-16 shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-5 gap-12 items-center">
                  <div className="md:col-span-3 space-y-6">
                    <div className="space-y-4">
                      {copyData.offerBenefit.map((benefit, idx) => {
                        const icon = idx === 0 ? "⏰" : idx === 1 ? "💪" : idx === 2 ? "📊" : "🤝";
                        return (
                          <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors">
                            <span className="text-2xl mt-1">{icon}</span>
                            <div>
                              <p className="text-lg md:text-xl font-black text-slate-900 break-keep">{benefit.substring(3)}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="md:col-span-2 text-center md:text-right border-t md:border-t-0 md:border-l border-slate-100 pt-10 md:pt-0 md:pl-10 flex flex-col justify-center h-full">
                    <p className="text-slate-500 font-bold mb-2">PT 비용 부담 ZERO</p>
                    <div className="text-3xl md:text-4xl font-[900] text-indigo-600 mb-6 break-keep">
                      월 5회 25분 밀착 관리
                    </div>
                    <button
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).fbq) (window as any).fbq('track', 'Lead');
                        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="w-full bg-black text-white font-black py-4 md:py-5 rounded-2xl text-base sm:text-lg hover:bg-indigo-600 transition-all shadow-xl break-keep"
                    >
                      지금 케어 멤버십 <span className="text-[2em] text-yellow-400">체험 신청하기</span>
                    </button>
                    <p className="mt-4 text-xs text-slate-400 font-medium break-keep">* 1:1 상담 후 개인별 맞춤 플랜이 구성됩니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [3] 가정의달 특별 혜택 섹션
          ───────────────────────────────────────────── */}
      <section className="w-full bg-slate-50 py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              케어 멤버십 특별 혜택
            </h2>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden transform transition hover:scale-[1.02]">
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-300 opacity-20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="inline-block bg-yellow-400 text-slate-900 font-black px-6 py-2 rounded-full text-sm md:text-base tracking-widest mb-6 animate-bounce shadow-lg">
                🎁 케어 멤버십 특별 혜택 🎁
              </span>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 break-keep leading-tight">
                가정의 달 5월 특별 이벤트!
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-white/90 mb-8 break-keep">
                5월 중 멤버십 신청 시
              </p>
              
              <div className="bg-white rounded-2xl p-6 md:p-8 w-full max-w-lg shadow-xl border-4 border-yellow-400 mb-8 md:mb-10">
                <p className="text-indigo-600 font-black text-xl md:text-2xl mb-2">프리미엄 밀착 케어</p>
                <p className="text-4xl md:text-5xl font-[900] text-slate-900 break-keep">
                  관리 <span className="text-pink-600">2회 추가</span> 증정!
                </p>
              </div>

              <button
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).fbq) (window as any).fbq('track', 'Lead');
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="relative overflow-hidden w-full max-w-lg bg-yellow-400 text-slate-900 font-black py-5 md:py-6 rounded-2xl text-xl md:text-2xl lg:text-3xl hover:bg-yellow-300 hover:-translate-y-1 transition-all shadow-[0_0_40px_rgba(250,204,21,0.6)] flex items-center justify-center gap-2 md:gap-3 group"
              >
                {/* Shine effect overlay */}
                <div className="absolute inset-0 -translate-x-full bg-white/40 group-hover:animate-[shimmer_1.5s_infinite] skew-x-12"></div>
                
                지금 체험신청 하기
                <svg className="w-6 h-6 md:w-8 md:h-8 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
