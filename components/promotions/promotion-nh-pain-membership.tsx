"use client"



/**
 * ============================================================
 * 🔥 프로모션 노형점 [버닝 케어 멤버십]
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

export function PromotionNhPainMembership() {
  const themeColor = "bg-[#B91C1C]"       // 빨간색 (버닝 테마)
  const themeAccent = "bg-[#FACC15]"      // 노란색
  const textColorTheme = "text-[#B91C1C]"

  return (
    <div id="promo-nh-pain-membership" className="promotion-nh-container bg-white font-sans text-slate-900 tracking-tight">

      

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
