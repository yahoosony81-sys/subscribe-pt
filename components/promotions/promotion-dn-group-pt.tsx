"use client"

/**
 * ============================================================
 * 🟡 프로모션 도남점 그룹PT
 * ============================================================
 */

const copyData = {
  badge: "NEW",
  heroSuper: "그룹PT OPEN Event  (상담예약 폭주중!)",
  heroTitle1: "GROUP",
  heroTitle2: "PT",
  heroTitle3: "OPEN 🔥",
  heroBoxText1: "10년차 경력자",
  heroBoxText2: "2분의 강사님",
  heroBoxText3: "직접 진행 !",

  themeBreakTitle: "혼자 운동,\n왜 항상 실패할까요?",
  themeBreakSub: "이제는 방법을 바꿔야 합니다.\n코치가 직접 이끌어주는 그룹 트레이닝으로\n혼자가 아닌 함께 운동 해보세요.",

  section1Super: "GROUP TRAINING",
  section1Title: "한번에\n다잡는\n운동",
  section1Desc:
    "💪 근력 + 유산소 + 기능성을 한번에 !\n\n⏱ 하루 딱 40분 투자\n(500칼로리 소모)\n\n🎯 다이어트, 체형개선, 라인개선까지",

  section2Super: "WHY GROUP PT",
  section2Title: "가격부담은\nDown\n효과는 Up !!",
  section2Desc:
    "1. 빠질 수 없는 환경\n2. 재미있게 몰입되는 분위기와 코치 텐션\n3. 짧은 시간, 확실한 효과\n4. 부담없는 합리적인 금액",

  finalTitle: "운동은 의지가 아니라\n환경이 바꿉니다.",
  finalSub: "인원수 12명 제한 프로그램이니\n서둘러 예약해주세요 !!",
}

export function PromotionDnGroupPt() {
  const themeColor = "bg-[#1D4ED8]"       // 파란색
  const themeAccent = "bg-[#FACC15]"      // 노란색
  const textColorTheme = "text-[#1D4ED8]"
  const textColorAccent = "text-[#FACC15]"

  return (
    <div id="promo-dn-group-pt" className="promotion-dn-container bg-white font-sans text-slate-900 tracking-tight">

      {/* ─────────────────────────────────────────────
          📌 [1] 히어로 이미지 섹션 (이미지 전체 표시)
          ───────────────────────────────────────────── */}
      <section className="w-full bg-black flex justify-center overflow-hidden">
        <div className="w-full max-w-7xl overflow-hidden">
          <img
            src="/%EB%8F%84%EB%82%A8%EC%A0%90%20%EA%B7%B8%EB%A3%B9PT%EC%82%AC%EC%A7%841.png"
            alt="마인드휘트니스 도남점 그룹PT"
            className="w-full h-auto block"
            style={{ marginBottom: '-20.1%' }}
          />
        </div>
      </section>



      {/* ─────────────────────────────────────────────
          📌 [2] 이미지 섹션 - 혼자 운동 왜 실패할까
          ───────────────────────────────────────────── */}
      <section className="w-full bg-black flex justify-center">
        <img
          src="/%EC%99%9C%ED%98%BC%EC%9E%90%EC%8B%A4%ED%8C%A8%EC%88%98%EC%A0%95%EC%9D%B4%EB%AF%B8%EC%A7%80.png"
          alt="혼자 운동, 왜 항상 실패할까요?"
          className="w-full max-w-7xl h-auto block"
        />
      </section>

      {/* ─────────────────────────────────────────────
          📌 [3] 특징 섹션 - 어두운 배경
          ───────────────────────────────────────────── */}
      <section className="w-full">
        {/* Row 1 - 그룹PT 특징 */}
        <div className="flex flex-col w-full">
          <div className="w-full bg-black flex justify-center">
            <img
              src="/grouppt2.png"
              alt="GROUP TRAINING - 한번에 다잡는 운동"
              className="w-full max-w-7xl h-auto block"
            />
          </div>
        </div>

        {/* Row 2 - WHY GROUP PT */}
        <div className="flex flex-col w-full">
          <div className="w-full bg-black flex justify-center">
            <img
              src="/grouppt3.png"
              alt="WHY GROUP PT - 가격부담은 DOWN 효과는 UP"
              className="w-full max-w-7xl h-auto block"
            />
          </div>
        </div>

      </section>


      {/* ─────────────────────────────────────────────
          📌 [4] 5월 가정의 달 혜택 섹션
          ───────────────────────────────────────────── */}
      <section className="w-full bg-white py-20 md:py-28 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-500 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full mb-4 tracking-tighter animate-bounce">
              MAY EVENT ❤️
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              5월 가정의 달<br />
              <span className="text-[#1D4ED8]">등록 시 특별 혜택!</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="relative bg-slate-50 rounded-3xl p-8 md:p-10 border-2 border-slate-100 flex flex-col items-center text-center group hover:border-[#1D4ED8] transition-all duration-300">
              <div className="w-20 h-20 bg-[#1D4ED8] text-white rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                🎁
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">그룹PT 무료체험</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                부담 없이 먼저 경험해보세요.<br />
                직접 겪어보시면 왜 다른지 알게 됩니다.
              </p>
              <div className="absolute -top-3 -right-3 bg-[#FACC15] text-black text-xs font-black px-4 py-2 rounded-lg shadow-md transform rotate-12">
                FREE
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="relative bg-slate-50 rounded-3xl p-8 md:p-10 border-2 border-slate-100 flex flex-col items-center text-center group hover:border-[#1D4ED8] transition-all duration-300">
              <div className="w-20 h-20 bg-[#FACC15] text-black rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg shadow-yellow-100 group-hover:scale-110 transition-transform">
                🏷️
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">10% 추가 할인</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                체험 후 당일 등록 시<br />
                수강료 <span className="text-red-500 font-black">10% 즉시 할인</span> 혜택!
              </p>
              <div className="absolute -top-3 -right-3 bg-[#1D4ED8] text-white text-xs font-black px-4 py-2 rounded-lg shadow-md transform rotate-12">
                OFF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [5] 그룹 PT 체험 신청하는 방법 (이미지 재현 및 카드 축소)
          ───────────────────────────────────────────── */}
      <section className="bg-[#0B1221] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              <span className="text-[#FACC15]">그룹 PT 체험</span><br />
              <span className="text-white">신청하는 방법</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              { num: "01", icon: "👥", title: "그룹PT 인원수 정하기", desc: "함께 운동할 인원수를 결정하세요." },
              { num: "02", icon: "📅", title: "PT 날짜와 시간대 정하기", desc: "원하는 운동 기간과 시간대를 선택하세요." },
              { num: "03", icon: "📝", title: "아래 온라인 신청서에 작성하기", desc: "온라인 신청서를 빠짐없이 작성해주세요." },
              { num: "04", icon: "📱", title: "지점 연락 기다리기", desc: "신청 완료 후 지점에서 연락이 올 것입니다." },
            ].map((item) => (
              <div key={item.num} className="bg-[#CFE2FF] border-[3px] border-[#FACC15] rounded-2xl p-5 md:p-7 shadow-lg flex flex-col items-start text-left h-full transition-transform hover:scale-[1.02]">
                <span className="text-2xl font-black text-slate-900 mb-1">{item.num}</span>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base md:text-lg font-black text-slate-900 mb-2 leading-tight">{item.title}</h3>
                <p className="text-slate-700 text-xs md:text-sm font-medium leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          📌 [6] Impact / CTA Section
          ───────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-[0.9] tracking-tighter uppercase mb-6">
              JOIN<br />GROUP<br /><span className="text-[#1D4ED8]">PT NOW</span>
            </h2>
            <div className="flex items-center gap-4 text-slate-800">
              <svg className="w-6 h-6 transform rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <p className="text-xl md:text-2xl font-bold">마인드휘트니스 도남점에서<br />함께 시작해 보아요!</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-10 flex flex-col justify-center shadow-lg rounded-xl border-t-4 border-[#FACC15]">
              <div className="mb-6">
                <span className="inline-block bg-[#FACC15] text-black text-xs font-black px-3 py-1 rounded-full mb-4 tracking-widest">OPEN EVENT</span>
                <p className="text-slate-500 font-bold mb-2">그룹PT 상담 예약</p>
                <h4 className="text-3xl md:text-4xl font-black text-[#1D4ED8] mb-2">
                  인원 제한
                </h4>
                <p className="text-2xl font-black text-slate-900">12명 선착순 마감 🚨</p>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed text-sm">
                * 인원 한정 프로그램으로 조기 마감될 수 있습니다.<br />
                * 아래 신청 폼으로 빠르게 상담 예약해 주세요.
              </p>
            </div>
            <div className="bg-[#0F172A] p-10 text-white flex flex-col justify-center rounded-xl">
              <h4 className="text-2xl font-bold mb-4 text-[#FACC15]">운동은 의지가 아니라 🏋️</h4>
              <p className="text-2xl font-black text-white mb-6">환경이 바꿉니다.</p>
              <ul className="space-y-4 font-medium text-white/80">
                <li className="flex gap-3">
                  <span className="text-[#FACC15] font-black">✓</span>
                  <span>혼자서는 3일도 못가는 운동, 함께하면 달라집니다</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#FACC15] font-black">✓</span>
                  <span>10년차 전문 강사 2인이 직접 이끌어드립니다</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#FACC15] font-black">✓</span>
                  <span>인원수 12명 제한 — 지금 바로 서둘러 예약해주세요!</span>
                </li>
              </ul>
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 bg-[#FACC15] text-black font-black px-6 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                지금 바로 그룹 PT 체험 신청하기
              </button>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}
