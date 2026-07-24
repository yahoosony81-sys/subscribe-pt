"use client"

import Script from "next/script"
import { getPixelId } from "@/utils/pixelConfig"

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
  
  const pixelId = getPixelId("donam");

  return (
    <div id="promo-dn-group-pt" className="promotion-dn-container bg-white font-sans text-slate-900 tracking-tight">
      <Script id="gtm-dn-group-pt" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KQR8JJ44');
        `
      }} />
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQR8JJ44"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>
      {pixelId && (
        <>
          <Script id="meta-pixel-dn-group-pt" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `
          }} />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      

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
