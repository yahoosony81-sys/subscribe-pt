"use client"

/**
 * ============================================================
 * 🔥 프로모션 한림점 [통증케어 멤버십]
 * ============================================================
 */

const copyData = {
  productName: "시니어 맞춤형\n[통증케어 멤버십]",
  productSub: "내 몸을 위한 월간 구독 서비스",
  targetAudience: [
    "고질적인 통증으로 일상이 불편하신 어르신",
    "근감소증이 걱정되는 시니어",
    "부모님께 건강한 하루를 선물하고 싶은 자녀"
  ],
  coreBenefits: "1:1 통증 부위 집중 관리 + 근력 유지 맞춤 운동 + 영양 식단 가이드\n(1개월 센터 무료 이용 + 5회 전문 트레이너 밀착 관리)",

  processTitle: "월 5회차\n정밀 케어 프로세스",
  processes: [
    { step: "0회차", title: "정밀 상담 & 분석", desc: "전문가 상담을 통해 통증 부위를 정확히 파악하고, 인바디 측정을 통해 체성분 및 근육 상태를 분석합니다." },
    { step: "1회차", title: "통증 완화 솔루션", desc: "통증 부위에 즉각적인 효과를 주는 자가 마사지법과 유연성을 높여주는 맞춤 스트레칭 방법을 전수합니다." },
    { step: "2회차", title: "맞춤 운동 처방 - 부위 1", desc: "첫 번째 핵심 통증 부위의 기능 회복과 통증 감소를 위해 꼭 필요한 근력 강화 운동을 안내합니다." },
    { step: "3회차", title: "맞춤 운동 처방 - 부위 2", desc: "연관된 두 번째 통증 부위까지 관리 범위를 넓혀, 전신 밸런스를 잡는 운동 루틴을 진행합니다." },
    { step: "4회차", title: "영양 관리 & 재점검", desc: "근육 유지를 위한 식단 상태를 꼼꼼히 점검하고, 앞선 근력 운동 부위의 동작을 다시 한번 정밀 교정합니다." },
    { step: "5회차", title: "최종 테스트 & 스케줄링", desc: "한 달간의 변화를 확인하는 근력 테스트를 실시하고, 지속 가능한 건강 유지를 위한 향후 운동 스케줄을 설계합니다." }
  ],

  diffTitle: "멤버십 차별화 포인트\n(Why US?)",
  diffPoints: [
    { title: "체계적인 식단 상담", desc: "단순히 운동만 하는 것이 아니라, 시니어에게 가장 중요한 '근손실 방지'를 위한 전문 식단 가이드를 제공합니다." },
    { title: "지속 가능한 관리", desc: "구독형 서비스를 통해 일회성 관리가 아닌, 건강한 생활 습관을 형성할 수 있도록 밀착 케어합니다." },
    { title: "검증된 전문가 그룹", desc: "마인드휘트니스의 노하우가 담긴 시니어 특화 커리큘럼으로 안전하게 관리해 드립니다." }
  ],

  finalTitle: "통증 없는 편안한 일상,\n지금 시작하세요!",
  finalSub: "통증 케어 멤버십으로 전문적인 관리를 받으시면,\n당신과 부모님의 하루가 달라집니다.",
}

export function PromotionHlPainMembership() {
  const themeColor = "bg-[#B91C1C]"       // 빨간색 (버닝 테마)
  const themeAccent = "bg-[#FACC15]"      // 노란색
  const textColorTheme = "text-[#B91C1C]"

  return (
    <div id="promo-hl-pain-membership" className="promotion-hl-container bg-white font-sans text-slate-900 tracking-tight">

      {/* ─────────────────────────────────────────────
          📌 [1] 히어로 섹션 (이미지 배경)
          ───────────────────────────────────────────── */}
      <section className="w-full bg-black flex justify-center overflow-hidden">
        <div className="w-full max-w-7xl relative">
          {/* 모바일에서는 높이를 강제로 주어 이미지가 확대(crop)되도록 처리하여 텍스트 가독성 확보 */}
          <img
            src={encodeURI("/images/통증히어로 해상도높.png")}
            alt="Pain Care Membership"
            className="w-full h-[150vw] sm:h-[120vw] md:h-auto object-cover object-top block"
          />

          {/* 하단 좌측 무료체험 해보기 버튼 */}
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-10">
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).fbq) (window as any).fbq('track', 'Lead');
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative overflow-hidden group bg-gradient-to-r from-red-600 to-orange-500 text-white font-black px-6 py-3.5 md:px-10 md:py-5 rounded-full text-lg md:text-2xl shadow-[0_10px_30px_rgba(220,38,38,0.5)] hover:shadow-[0_10px_50px_rgba(220,38,38,0.8)] hover:-translate-y-1 transition-all duration-300 ring-4 ring-white/20"
            >
              {/* 반짝이는 이펙트 */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>

              <span className="relative z-10 flex items-center gap-2">
                무료체험 후 결정하기
                <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [1.5] PAIN POINT 섹션 (무릎 & 어깨 통증)
          ───────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 space-y-20 md:space-y-32">
          
          {/* PAIN POINT 1: 무릎 */}
          <div className="flex flex-row items-center gap-4 md:gap-16">
            <div className="w-1/2 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10 pointer-events-none"></div>
              <img
                src={encodeURI("/images/무릎 통증 노년 여성1.png")}
                alt="무릎 통증"
                className="w-full h-auto aspect-square md:aspect-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center">
              <div className="max-w-md space-y-4 md:space-y-8 text-left">
                <span className="inline-block px-3 py-1 md:px-5 md:py-2 bg-red-100 text-red-600 font-black text-[10px] md:text-sm tracking-widest rounded-full shadow-sm">
                  PAIN POINT
                </span>
                <h2 className="text-lg sm:text-2xl md:text-5xl font-black text-slate-900 leading-tight break-keep">
                  왜 무릎 통증은<br />갈수록 심해질까요?
                </h2>
                <div className="space-y-2 md:space-y-4 text-slate-600 text-xs sm:text-sm md:text-xl font-medium leading-snug md:leading-relaxed break-keep text-left">
                  <p>
                    <strong className="text-slate-900">무릎 주변 근육이 약해지면</strong><br /> 관절 하중이 커져 통증이 심해집니다.
                  </p>
                  <p>
                    관절을 지탱하는 <strong className="text-red-600 bg-red-50 px-1 py-0.5 rounded-md">'주변 근육의 힘'</strong>을<br /> 길러야만 합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PAIN POINT 2: 어깨 */}
          <div className="flex flex-row-reverse items-center gap-4 md:gap-16">
            <div className="w-1/2 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tl from-black/20 to-transparent z-10 pointer-events-none"></div>
              <img
                src={encodeURI("/images/어깨통증 노년남성1.png")}
                alt="어깨 통증"
                className="w-full h-auto aspect-square md:aspect-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center">
              <div className="max-w-md space-y-4 md:space-y-8 text-left">
                <span className="inline-block px-3 py-1 md:px-5 md:py-2 bg-red-100 text-red-600 font-black text-[10px] md:text-sm tracking-widest rounded-full shadow-sm">
                  PAIN POINT
                </span>
                <h2 className="text-lg sm:text-2xl md:text-5xl font-black text-slate-900 leading-tight break-keep">
                  어깨가 굳고<br /> 결리는 진짜 이유
                </h2>
                <div className="space-y-2 md:space-y-4 text-slate-600 text-xs sm:text-sm md:text-xl font-medium leading-snug md:leading-relaxed break-keep text-left">
                  <p>
                    반복적인 사용으로 인한 <strong className="text-slate-900"><br />'회전근개 약화'</strong>가 주원인입니다.
                  </p>
                  <p>
                    <strong className="text-red-600 bg-red-50 px-1 py-0.5 rounded-md">정확한 맞춤 운동</strong>으로<br /> 어깨 가동 범위를 되찾아야 합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────
          📌 [2] 상품 개요 섹션
          ───────────────────────────────────────────── */}
      <section className="bg-white py-24 text-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="mb-12 relative w-full max-w-3xl">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-600 via-emerald-500 to-green-400 rounded-3xl blur-lg opacity-60 animate-pulse"></div>
              <div className="relative bg-white border-2 border-white rounded-3xl px-6 py-10 md:px-12 md:py-12 shadow-2xl overflow-hidden">
                <span className="text-emerald-600 font-black text-sm md:text-base tracking-widest uppercase mb-4 inline-block">{copyData.productSub}</span>
                <h3 className="relative z-10 text-3xl md:text-5xl font-[900] bg-gradient-to-r from-teal-700 to-emerald-500 bg-clip-text text-transparent mb-6 tracking-tighter break-keep leading-tight whitespace-pre-line">
                  {copyData.productName}
                </h3>
                
                <div className="bg-slate-50 rounded-2xl p-6 mt-8 border border-slate-100 text-left">
                  <p className="font-bold text-slate-900 mb-4 text-lg">💡 이런 분들께 추천합니다:</p>
                  <ul className="space-y-3">
                    {copyData.targetAudience.map((target, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-emerald-500 text-xl shrink-0">✔️</span>
                        <span className="text-slate-700 font-medium text-lg break-keep">{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 bg-teal-50 rounded-2xl p-6 border border-teal-100 text-left">
                  <p className="inline-block text-xl font-extrabold tracking-tight bg-gradient-to-r from-teal-500 to-emerald-400 text-transparent bg-clip-text mb-3 drop-shadow-sm">✨ 핵심 혜택</p>
                  <p className="text-teal-800 font-medium text-lg leading-relaxed whitespace-pre-line break-keep">
                    {copyData.coreBenefits}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [3] 정밀 케어 프로세스
          ───────────────────────────────────────────── */}
      <section className="w-full bg-slate-50 py-24 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 font-bold text-sm tracking-widest uppercase rounded-full mb-4">
              5-Step Care Process
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight whitespace-pre-line text-slate-900 break-keep">
              {copyData.processTitle}
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto break-keep">
              마인드휘트니스만의 체계적인 5단계 케어로<br className="hidden md:block" /> 확실한 변화를 경험하세요.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {copyData.processes.map((proc, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(16,185,129,0.12)] border border-slate-100/50 transition-all duration-500 hover:-translate-y-3"
              >
                {/* Background Number Accent */}
                <div className="absolute top-6 right-8 text-8xl font-black text-slate-50 group-hover:text-emerald-50 transition-colors duration-500 pointer-events-none">
                  {idx}
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl shadow-lg shadow-emerald-200 mb-8 transform group-hover:rotate-6 transition-transform duration-500">
                    <span className="text-xl font-black">{proc.step.replace('회차', '')}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                    {proc.title}
                  </h3>
                  
                  <div className="w-10 h-1 bg-slate-100 group-hover:w-20 group-hover:bg-emerald-400 transition-all duration-500 mb-6 rounded-full"></div>
                  
                  <p className="text-slate-600 leading-relaxed break-keep font-medium">
                    {proc.desc}
                  </p>
                </div>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-b-[2.5rem] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [4] 멤버십 차별화 포인트 (Why US?)
          ───────────────────────────────────────────── */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-teal-600 font-black text-sm md:text-base tracking-widest uppercase mb-4 inline-block">Why US?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-16 leading-tight whitespace-pre-line text-slate-900 break-keep">
            {copyData.diffTitle}
          </h2>

          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {copyData.diffPoints.map((point, idx) => (
              <div key={idx} className="flex-1 bg-slate-50 rounded-3xl p-10 border border-slate-100 text-left hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm font-black">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{point.title}</h3>
                <p className="text-slate-600 leading-relaxed break-keep">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [4.5] 5월 특별 이벤트 혜택
          ───────────────────────────────────────────── */}
      <section className="w-full bg-slate-900 py-24 relative overflow-hidden">
        {/* 장식용 배경 요소 */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-amber-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 rounded-[2.5rem] p-8 md:p-14 shadow-2xl transform transition-transform hover:scale-[1.01] text-white relative overflow-hidden border-4 border-amber-300/30">
            {/* 내부 장식 */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-yellow-300 opacity-20 rounded-full blur-2xl"></div>

            <div className="text-center mb-12 relative z-10">
              <span className="inline-block bg-slate-900 text-amber-400 font-black px-6 py-2.5 rounded-full text-sm md:text-base tracking-widest mb-6 shadow-xl animate-bounce">
                🎁 5월 등록 한정 혜택 🎁
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 break-keep">
                일찍 등록할수록<br />
                <span className="text-yellow-200 drop-shadow-md">케어 혜택이 커집니다!</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <div className="bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20 text-center flex flex-col items-center hover:bg-slate-900/60 transition-colors">
                <div className="inline-flex bg-amber-400 text-slate-900 font-bold px-4 py-1.5 rounded-full text-sm mb-6">
                  1차 얼리버드
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 text-white">5월 1일 ~ 5월 15일 등록 시</h3>
                <p className="text-3xl md:text-4xl font-black text-yellow-300 drop-shadow-sm break-keep">월 2회 관리 추가</p>
                <p className="mt-4 text-white/80 font-medium break-keep">기본 5회 + 2회 = 총 7회 집중 케어</p>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20 text-center flex flex-col items-center hover:bg-slate-900/60 transition-colors">
                <div className="inline-flex bg-slate-100 text-slate-900 font-bold px-4 py-1.5 rounded-full text-sm mb-6">
                  2차 혜택
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 text-white">5월 16일 ~ 5월 30일 등록 시</h3>
                <p className="text-3xl md:text-4xl font-black text-yellow-300 drop-shadow-sm break-keep">월 1회 관리 추가</p>
                <p className="mt-4 text-white/80 font-medium break-keep">기본 5회 + 1회 = 총 6회 집중 케어</p>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <p className="text-center text-white/90 font-medium text-sm md:text-base relative z-10 bg-black/20 inline-block px-6 py-3 rounded-full break-keep">
                * 조기 마감 시 혜택이 미리 종료될 수 있으니 서두르세요!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [5] Final CTA Section
          ───────────────────────────────────────────── */}
      <section className="bg-slate-900 py-24 border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 whitespace-pre-line break-keep">
            {copyData.finalTitle}
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 whitespace-pre-line break-keep">
            {copyData.finalSub}
          </p>
          <button
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).fbq) (window as any).fbq('track', 'Lead');
              document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-red-600 text-white font-black px-6 md:px-10 py-4 md:py-5 rounded-full text-base sm:text-xl md:text-2xl hover:bg-red-700 transition-all hover:scale-105 shadow-[0_10px_40px_rgba(220,38,38,0.4)] flex items-center gap-2 md:gap-3 mx-auto break-keep"
          >
            지금 무료체험 신청하기
            <svg className="w-5 h-5 md:w-6 md:h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      </section>

    </div>
  )
}
