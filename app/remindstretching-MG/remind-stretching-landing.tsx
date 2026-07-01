"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, addMonths, subMonths, isBefore, startOfDay, isSameDay } from "date-fns"
import { ko } from "date-fns/locale"
import "./remindstretching.css"

/* ─── Scroll Reveal Hook ─── */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

/* ─── 네비게이션 링크 데이터 ─── */
const navLinks = [
  { label: "홈", href: "#rs-hero" },
  { label: "추천 대상", href: "#rs-philosophy" },
  { label: "프로그램", href: "#rs-programs" },
  { label: "예약하기", href: "#rs-booking" },
]

/* ─── 프로그램 데이터 (리마인드 스트레칭 4개) ─── */
const programs = [
  {
    id: "balance",
    title: "리스타트 밸런스 케어",
    en: "Restart Balance Care",
    quote: "꾸준히 관리했지만 자꾸 한쪽만 아프고 골반이 틀어지는 느낌이 든다면",
    desc: "1:1 정밀 신체 평가를 통해 좌우 비대칭, 척추와 골반의 불균형을 분석하고, 닫혀 있던 관절의 가동 범위를 열어 몸의 올바른 정렬(Alignment)을 기억나게 해주는 근본적인 교정 스트레칭입니다.",
    target: "좌우 비대칭, 골반 틀어짐, 체형 불균형이 신경 쓰이시는 분",
    duration: "약 50분 / 1:1 맞춤 세션",
    effect: "골반·척추 정렬 개선, 관절 가동 범위 확대, 자세 교정",
    image: "/images/remindstretching/card-balance.png",
  },
  {
    id: "office",
    title: "디-프레시 오피스 케어",
    en: "De-Fresh Office Care",
    quote: "뻣뻣한 목, 딱딱한 어깨… 매일 무겁게 내려앉는 피로가 당연한 숙명 같을 때",
    desc: "오랜 좌식 생활과 스트레스로 단축된 목, 어깨, 견갑골 주변의 속근육을 집중적으로 이완합니다. 단순 마사지와 달리 신경과 근육을 동시에 자극하여 즉각적인 통증 완화와 가벼움을 선사합니다.",
    target: "장시간 데스크 워크로 목·어깨·등이 항상 무거우신 분",
    duration: "약 50분 / 1:1 맞춤 세션",
    effect: "목·어깨 통증 즉각 완화, 거북목 교정, 업무 집중력 향상",
    image: "/images/remindstretching/card-office.png",
  },
  {
    id: "athlete",
    title: "고-퍼포먼스 애슬릿 케어",
    en: "Go-Performance Athlete Care",
    quote: "헬스, 요가, 골프를 할 때 몸이 타이트해서 가동 범위가 안 나오고 정체기를 겪고 있다면",
    desc: "근육의 수축·이완 능력을 정상화하여 신체의 퍼포먼스를 극대화합니다. 관절 부상을 방지하고 회복 속도를 앞당겨 더 안전하고 폭발적인 운동 능력을 발휘할 수 있도록 돕는 스포츠 전문 컨디셔닝 루틴입니다.",
    target: "운동 퍼포먼스 정체기, 부상 예방이 필요한 스포츠인",
    duration: "약 60분 / 1:1 맞춤 세션",
    effect: "유연성·가동범위 극대화, 부상 예방, 운동 퍼포먼스 향상",
    image: "/images/remindstretching/card-athlete.png",
  },
  {
    id: "recovery",
    title: "시그니처 패시브 리커버리",
    en: "Signature Passive Recovery",
    quote: "전신 마사지 참 좋죠… 하지만 자고 일어나면 똑같이 굳어버려 오래가는 진짜 회복을 원할 때",
    desc: "리마인드 스트레칭만의 독자적인 기술이 집약된 전신 패시브 스트레칭입니다. 고객은 가만히 누워 깊은 호흡만 유지하고, 전문 코치가 호흡에 맞춰 전신의 근막을 길게 늘려주어 극상의 리프레시를 제공합니다.",
    target: "전신 피로, 수면의 질 저하, 깊은 회복이 필요하신 분",
    duration: "약 60분 / 1:1 맞춤 세션",
    effect: "전신 근막 이완, 숙면 효과, 깊은 피로 회복",
    image: "/images/remindstretching/card-recovery.png",
  },
]


/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
export function RemindStretchingLanding() {
  const heroAnim = useScrollReveal(0.1)
  const introAnim = useScrollReveal(0.15)
  const aboutAnim = useScrollReveal(0.12)
  const philosophyAnim = useScrollReveal(0.12)
  const promiseAnim = useScrollReveal(0.12)
  const principleAnim1 = useScrollReveal(0.12)
  const principleAnim2 = useScrollReveal(0.12)
  const principleAnim3 = useScrollReveal(0.12)
  const programAnim = useScrollReveal(0.1)
  const curiosityAnim = useScrollReveal(0.2)
  const bookingAnim = useScrollReveal(0.2)

  /* ─── 1) 햄버거 메뉴 상태 ─── */
  const [menuOpen, setMenuOpen] = useState(false)

  /* ─── 2) 프로그램 상세 모달 상태 ─── */
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null)

  /* ─── 3) 신청폼 모달 상태 ─── */
  const [formOpen, setFormOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', bodyArea: '', time: '' })
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [calMonth, setCalMonth] = useState(new Date())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showComplete, setShowComplete] = useState(false)

  const openForm = () => { setFormOpen(true) }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  /* 한국 공휴일 (2025–2026) */
  const HOLIDAYS = [
    '2025-01-01','2025-01-28','2025-01-29','2025-01-30','2025-03-01',
    '2025-05-05','2025-05-06','2025-06-06','2025-08-15','2025-10-03',
    '2025-10-05','2025-10-06','2025-10-07','2025-10-09','2025-12-25',
    '2026-01-01','2026-02-16','2026-02-17','2026-02-18','2026-03-01',
    '2026-05-05','2026-05-24','2026-06-06','2026-08-15','2026-09-24',
    '2026-09-25','2026-09-26','2026-10-03','2026-10-09','2026-12-25',
  ]

  const isHoliday = (date: Date) => HOLIDAYS.includes(format(date, 'yyyy-MM-dd'))
  const isWeekend = (date: Date) => { const d = getDay(date); return d === 0 || d === 6 }
  const isWeekendOrHoliday = (date: Date) => isWeekend(date) || isHoliday(date)

  /* 날짜 선택 시 시간 초기화 */
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setFormData(prev => ({ ...prev, time: '' }))
  }

  /* 선택된 날짜에 따른 시간 슬롯 */
  const getTimeSlots = () => {
    if (!selectedDate) return []
    const endHour = isWeekendOrHoliday(selectedDate) ? 17 : 21
    const slots: string[] = []
    for (let h = 10; h < endHour; h++) {
      slots.push(`${String(h).padStart(2, '0')}:00`)
    }
    return slots
  }

  /* 달력 데이터 생성 */
  const getCalendarDays = () => {
    const monthStart = startOfMonth(calMonth)
    const monthEnd = endOfMonth(calMonth)
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd })
    const startDayOfWeek = getDay(monthStart)
    return { days, startDayOfWeek }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const dateStr = selectedDate ? format(selectedDate, 'yyyy년 M월 d일 (EEE)', { locale: ko }) : ''

    // 메타 CAPI 및 fbq 이벤트 전송 (버튼 클릭 시 즉시 비동기 전송하여 이탈 방지)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'CompleteRegistration')
    }
    fetch('/api/capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName: 'CompleteRegistration',
        pathname: window.location.pathname,
        eventSourceUrl: window.location.href,
        phone: formData.phone,
      }),
    }).catch(capiErr => console.error('CAPI Error:', capiErr))

    try {
      await fetch('https://script.google.com/macros/s/AKfycbyCZFMF4ssh5Zfkm3VeBV7UB3UcK8xQao2D_tbZ_12vejN6p-t9jXfFKTgg9d5aWDLw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: `개선부위: ${formData.bodyArea} / 희망날짜: ${dateStr} ${formData.time}`,
          preferredTime: `${dateStr} ${formData.time}`,
          branch: '리마인드스트레칭마곡점',
          sheetName: '리마인드스트레칭마곡점',
          timestamp: new Date().toISOString(),
        }),
      })

      setShowComplete(true)
      setFormData({ name: '', phone: '', bodyArea: '', time: '' })
      setSelectedDate(null)
      setTimeout(() => { setShowComplete(false); setFormOpen(false) }, 3000)
    } catch (error) {
      console.error('Error:', error)
      alert('신청 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  /* 메뉴/모달 열릴 때 body 스크롤 잠금 */
  useEffect(() => {
    if (menuOpen || selectedProgram || formOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, selectedProgram, formOpen])

  /* 앵커 이동 시 부드러운 스크롤 + 메뉴 닫기 */
  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    if (href.startsWith('/')) {
      window.location.href = href
      return
    }
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="rs-landing">

      {/* ═══ HEADER ═══ */}
      <header className="rs-header">
        <a href="/remindstretching-MG" className="rs-header__logo">
          <span className="rs-header__logo-mark">Rm</span>
          <span>Remind<br/>Stretching</span>
        </a>
        <button
          className={`rs-header__menu-btn ${menuOpen ? 'rs-header__menu-btn--open' : ''}`}
          aria-label="메뉴"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </header>


      {/* ═══ 사이드 네비게이션 드로어 ═══ */}
      <div className={`rs-nav-overlay ${menuOpen ? 'rs-nav-overlay--open' : ''}`} onClick={() => setMenuOpen(false)} />
      <nav className={`rs-nav-drawer ${menuOpen ? 'rs-nav-drawer--open' : ''}`}>
        <div className="rs-nav-drawer__header">
          <span className="rs-nav-drawer__logo">Rm</span>
          <span className="rs-nav-drawer__brand">Remind Stretching</span>
        </div>
        <ul className="rs-nav-drawer__list">
          {navLinks.map((link, i) => (
            <li key={i} className="rs-nav-drawer__item" style={{ transitionDelay: menuOpen ? `${0.05 * (i + 1)}s` : '0s' }}>
              <button onClick={() => handleNavClick(link.href)} className="rs-nav-drawer__link">
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="rs-nav-drawer__footer">
          <a
            href="https://open.kakao.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rs-nav-drawer__cta"
          >
            카카오톡 상담하기
          </a>
          <p className="rs-nav-drawer__info">
            서울 강서구 마곡중앙3로 16<br />
            VL르웨스트 B2 VL웰니스클럽 B226호<br />
            상담 010-4017-1000
          </p>
        </div>
      </nav>


      {/* ═══ 1. HERO ═══ */}
      <section className="rs-core-principle rs-hero-dark" id="rs-hero" style={{ paddingTop: '160px', paddingBottom: '120px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 1, zIndex: 0, pointerEvents: 'none' }}>
          <Image
            src="/images/image copy 3.png"
            alt="히어로 배경"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="rs-core-principle__inner" style={{ position: 'relative', zIndex: 1 }}>
          <div ref={heroAnim.ref} className={`rs-anim ${heroAnim.isVisible ? 'rs-in' : ''}`}>
            <h1 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--rs-white)', marginBottom: '80px', letterSpacing: '-0.02em', wordBreak: 'keep-all', textShadow: '0 4px 24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8)' }}>
              왜 <span style={{ color: 'var(--rs-accent-gold)', textShadow: '0 4px 24px rgba(0,0,0,0.9)' }}>리마인드 스트레칭</span>일까?
            </h1>
          </div>
          <div ref={principleAnim1.ref} className={`rs-core-principle__questions rs-anim ${principleAnim1.isVisible ? 'rs-in' : ''}`}>
            <h2 style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8)', wordBreak: 'keep-all' }}>
              "유튜브 보고 따라 하는<br />
              스트레칭은 왜 시원하기보다<br />
              아프기만 할까요?"<br />
              <br />
              "마사지를 세게 받아도<br />
              왜 다음 날이면 똑같이<br />
              목과 어깨가 딱딱해질까요?"
            </h2>
          </div>
          
          <div ref={principleAnim2.ref} className={`rs-core-principle__theory rs-anim rs-anim-delay-1 ${principleAnim2.isVisible ? 'rs-in' : ''}`}>
            <h3 className="rs-core-principle__subtitle">핵심 원리</h3>
            <p style={{ wordBreak: 'keep-all', lineHeight: '1.8' }}>
              우리 몸의 근육은 여러 겹으로<br />
              복잡하게 얽혀 있으며,<br />
              <br />
              관절과 뼈를 보호하기 위해<br />
              스스로를 지키려는<br />
              <strong>'방어 기전'</strong>을 가지고 있습니다.<br />
              <br />
              해부학을 모른 채<br />
              무작정 몸을 찢거나<br />
              겉 근육만 강하게 누르면,<br />
              <br />
              오히려 근육이 긴장하여<br />
              <strong>더 단단하게 굳어버립니다.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 2. PHILOSOPHY ═══ */}
      <section className="rs-philosophy" id="rs-philosophy">
        <div className="rs-philosophy__bg">
          <Image
            src="/images/remindstretching/intro-nature-bg.png"
            alt="자연 배경"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="rs-philosophy__inner">
          <h2 ref={philosophyAnim.ref} className={`rs-philosophy__title rs-anim ${philosophyAnim.isVisible ? 'rs-in' : ''}`}>
            이런 분들에게<br />
            전문가의 손길이<br />
            절대적으로 필요합니다.
          </h2>

          <div className="rs-philosophy__grid">
            <div className={`rs-philosophy__item rs-anim-scale rs-anim-delay-1 ${philosophyAnim.isVisible ? 'rs-in' : ''}`}>
              <div className="rs-philosophy__item-en">Flexibility</div>
              <h3 className="rs-philosophy__item-title">굳어버린 몸</h3>
              <p className="rs-philosophy__item-desc">
                유연성이 너무 부족해<br />
                혼자서는 올바른 스트레칭 자세가<br />
                전혀 안 나오시는 분
              </p>
            </div>
            
            <div className={`rs-philosophy__item rs-anim-scale rs-anim-delay-2 ${philosophyAnim.isVisible ? 'rs-in' : ''}`}>
              <div className="rs-philosophy__item-en">Intensive Care</div>
              <h3 className="rs-philosophy__item-title">단단해진 근육</h3>
              <p className="rs-philosophy__item-desc">
                거북목, 라운드숄더 등으로<br />
                특정 관절과 단단해진 근육 집중 케어가 필요하신 분
              </p>
            </div>
            
            <div className={`rs-philosophy__item rs-anim-scale rs-anim-delay-3 ${philosophyAnim.isVisible ? 'rs-in' : ''}`}>
              <div className="rs-philosophy__item-en">Performance</div>
              <h3 className="rs-philosophy__item-title">운동 가동범위 제한</h3>
              <p className="rs-philosophy__item-desc">
                운동 가동 범위가 나오지 않아<br />
                부상 위험을 느끼거나<br />
                정체기를 겪고 계신 분
              </p>
            </div>
          </div>

          <div ref={promiseAnim.ref} className={`rs-philosophy__promise rs-anim ${promiseAnim.isVisible ? 'rs-in' : ''}`}>
            <h3>전문가가 약속하는 변화</h3>
            <p style={{ wordBreak: 'keep-all' }}>
              철저한 신체 평가를 통해<br />
              당신의 뼈와 근육 구조에 딱 맞는<br />
              가동 범위를 찾아드립니다.<br />
              <br />
              억지로 아프게 찢지 않기에 안전하며,<br />
              관리 직후 마법처럼 가벼워진 전신을<br />
              눈으로 직접 확인하실 수 있습니다.<br />
              <br />
              <strong>100% 수동형(Passive) 케어</strong>로<br />
              전문가의 손길을 느껴보세요.<br />
              당신은 가만히 힘을 빼고 누워만 계시면<br />
              내 몸이 가벼워지는 것을 느끼실 수 있습니다.
            </p>
          </div>
        </div>
      </section>


      {/* ═══ 4. PROGRAM — 카드 클릭 시 상세 모달 ═══ */}
      <section className="rs-programs" id="rs-programs">
        <div ref={programAnim.ref} className={`rs-programs__header rs-anim ${programAnim.isVisible ? 'rs-in' : ''}`}>
          <div>
            <h2 className="rs-programs__title">PROGRAM</h2>
            <p className="rs-programs__subtitle">
              기능적 회복을 넘어 삶의 질을 높이는 케어<br />
              리마인드 그 이상을 생각하는 <strong>당신을 위한 프리미엄 프로그램</strong>
            </p>
          </div>
          <div className="rs-programs__logo">
            <span className="rs-programs__logo-mark">Rm</span>
            <span>Remind<br/>Stretching</span>
          </div>
        </div>

        <div className="rs-programs__grid">
          {programs.map((p, i) => (
            <div
              key={i}
              className={`rs-program-card rs-anim-scale rs-anim-delay-${i + 1} ${programAnim.isVisible ? 'rs-in' : ''}`}
              onClick={() => setSelectedProgram(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedProgram(p) }}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="rs-program-card__overlay">
                <span className="rs-program-card__name">{p.title}</span>
                <span className="rs-program-card__view-btn">자세히 보기 &rarr;</span>
              </div>
              <div className="rs-program-card__detail">
                <div className="rs-program-card__detail-title">{p.title}</div>
                <div className="rs-program-card__detail-quote">&ldquo;{p.quote}&rdquo;</div>
                <div className="rs-program-card__detail-desc">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ═══ 프로그램 상세 모달 ═══ */}
      {selectedProgram && (
        <div className="rs-modal-overlay" onClick={() => setSelectedProgram(null)}>
          <div className="rs-modal" onClick={(e) => e.stopPropagation()}>
            <button className="rs-modal__close" onClick={() => setSelectedProgram(null)} aria-label="닫기">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="rs-modal__image">
              <Image
                src={selectedProgram.image}
                alt={selectedProgram.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="rs-modal__image-overlay">
                <span className="rs-modal__en">{selectedProgram.en}</span>
              </div>
            </div>

            <div className="rs-modal__content">
              <h2 className="rs-modal__title">{selectedProgram.title}</h2>
              <blockquote className="rs-modal__quote">
                &ldquo;{selectedProgram.quote}&rdquo;
              </blockquote>
              <p className="rs-modal__desc">{selectedProgram.desc}</p>

              <div className="rs-modal__info-grid">
                <div className="rs-modal__info-item">
                  <span className="rs-modal__info-label">대상</span>
                  <span className="rs-modal__info-value">{selectedProgram.target}</span>
                </div>
                <div className="rs-modal__info-item">
                  <span className="rs-modal__info-label">소요시간</span>
                  <span className="rs-modal__info-value">{selectedProgram.duration}</span>
                </div>
                <div className="rs-modal__info-item">
                  <span className="rs-modal__info-label">기대효과</span>
                  <span className="rs-modal__info-value">{selectedProgram.effect}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => { setSelectedProgram(null); openForm() }}
                className="rs-modal__cta"
              >
                이 프로그램 체험 신청하기
              </button>
            </div>
          </div>
        </div>
      )}


      {/* ═══ 5. CURIOSITY / CTA ═══ */}
      <section className="rs-curiosity" id="rs-curiosity">
        <div className="rs-curiosity__circle rs-curiosity__circle--1" />
        <div className="rs-curiosity__circle rs-curiosity__circle--2" />
        <div className="rs-curiosity__circle rs-curiosity__circle--3" />

        <div ref={curiosityAnim.ref} className="rs-curiosity__content">
          <p className={`rs-curiosity__small rs-anim ${curiosityAnim.isVisible ? 'rs-in' : ''}`}>
            그 변화가
          </p>
          <p className={`rs-curiosity__big rs-anim rs-anim-delay-1 ${curiosityAnim.isVisible ? 'rs-in' : ''}`}>
            궁금하신가요?
          </p>
        </div>
      </section>


      {/* ═══ 6. BOOKING CTA ═══ */}
      <section className="rs-booking" id="rs-booking">
        <div ref={bookingAnim.ref}>
          <p className={`rs-booking__title rs-anim ${bookingAnim.isVisible ? 'rs-in' : ''}`}>
            지금 온라인으로 <strong>체험 신청하기</strong>
          </p>
          <button
            type="button"
            onClick={openForm}
            className={`rs-booking__btn rs-anim rs-anim-delay-1 ${bookingAnim.isVisible ? 'rs-in' : ''}`}
          >
            지금 체험 신청하기
          </button>
        </div>
      </section>


      {/* ═══ 신청폼 모달 ═══ */}
      {formOpen && (
        <div className="rs-modal-overlay" onClick={() => setFormOpen(false)}>
          <div className="rs-modal rs-form-modal" onClick={(e) => e.stopPropagation()}>
            <button className="rs-modal__close" onClick={() => setFormOpen(false)} aria-label="닫기">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {showComplete ? (
              <div className="rs-form-complete">
                <div className="rs-form-complete__icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3>체험접수가 완료되었습니다</h3>
                <p>신청확인 후 순차적으로 안내 드리겠습니다</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="rs-form">
                <div className="rs-form__header">
                  <p className="rs-form__notice">온라인 신청폼 작성시 체험이 가능합니다</p>
                  <h2 className="rs-form__title">체험 예약 신청</h2>
                  <p style={{ fontSize: '0.85rem', color: '#ff4d4f', fontWeight: 'bold', marginTop: '10px', textAlign: 'center', wordBreak: 'keep-all' }}>
                    체험은 최소 2일 전에 신청해 주시기 바랍니다
                  </p>
                </div>

                <div className="rs-form__body">
                  {/* 이름 */}
                  <div className="rs-form__field">
                    <label className="rs-form__label">이름 <span>*</span></label>
                    <input
                      type="text" name="name" required
                      value={formData.name} onChange={handleFormChange}
                      className="rs-form__input"
                      placeholder="홍길동"
                    />
                  </div>

                  {/* 연락처 */}
                  <div className="rs-form__field">
                    <label className="rs-form__label">연락처 <span>*</span></label>
                    <input
                      type="tel" name="phone" required
                      value={formData.phone} onChange={handleFormChange}
                      className="rs-form__input"
                      placeholder="010-1234-5678"
                    />
                  </div>

                  {/* 개선 부위 */}
                  <div className="rs-form__field">
                    <label className="rs-form__label">개선하고 싶은 부위 <span>*</span></label>
                    <select
                      name="bodyArea" required
                      value={formData.bodyArea} onChange={handleFormChange}
                      className="rs-form__select"
                    >
                      <option value="">선택해주세요</option>
                      <option value="목">목</option>
                      <option value="어깨">어깨</option>
                      <option value="등·허리">등·허리</option>
                      <option value="골반·고관절">골반·고관절</option>
                      <option value="무릎·하체">무릎·하체</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>

                  {/* 체험 가능 날짜 (달력) */}
                  <div className="rs-form__field">
                    <label className="rs-form__label">체험 가능 날짜 <span>*</span></label>

                    {/* 선택된 날짜 표시 */}
                    {selectedDate && (
                      <p className="rs-form__date-display">
                        📅 {format(selectedDate, 'yyyy년 M월 d일 (EEE)', { locale: ko })}
                        {isWeekendOrHoliday(selectedDate)
                          ? <span className="rs-form__date-tag rs-form__date-tag--weekend">주말/공휴일</span>
                          : <span className="rs-form__date-tag">평일</span>
                        }
                      </p>
                    )}

                    {/* 달력 */}
                    <div className="rs-cal">
                      <div className="rs-cal__nav">
                        <button type="button" onClick={() => setCalMonth(subMonths(calMonth, 1))} className="rs-cal__nav-btn">&lt;</button>
                        <span className="rs-cal__month">{format(calMonth, 'yyyy년 M월', { locale: ko })}</span>
                        <button type="button" onClick={() => setCalMonth(addMonths(calMonth, 1))} className="rs-cal__nav-btn">&gt;</button>
                      </div>
                      <div className="rs-cal__weekdays">
                        {['일','월','화','수','목','금','토'].map(d => <span key={d} className={d === '일' || d === '토' ? 'rs-cal__weekday--weekend' : ''}>{d}</span>)}
                      </div>
                      <div className="rs-cal__grid">
                        {Array.from({ length: getCalendarDays().startDayOfWeek }).map((_, i) => (
                          <span key={`empty-${i}`} className="rs-cal__day rs-cal__day--empty" />
                        ))}
                        {getCalendarDays().days.map(day => {
                          const isPast = isBefore(day, startOfDay(new Date()))
                          const isSelected = selectedDate ? isSameDay(day, selectedDate) : false
                          const isHol = isHoliday(day)
                          const isSun = getDay(day) === 0
                          const isSat = getDay(day) === 6
                          return (
                            <button
                              key={day.toISOString()}
                              type="button"
                              disabled={isPast}
                              className={[
                                'rs-cal__day',
                                isPast ? 'rs-cal__day--past' : '',
                                isSelected ? 'rs-cal__day--selected' : '',
                                isHol || isSun ? 'rs-cal__day--holiday' : '',
                                isSat ? 'rs-cal__day--saturday' : '',
                              ].join(' ')}
                              onClick={() => handleDateSelect(day)}
                            >
                              {format(day, 'd')}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* 체험 시간 — 날짜 선택 후 표시 */}
                  {selectedDate && (
                    <div className="rs-form__field">
                      <label className="rs-form__label">
                        체험 가능 시간 <span>*</span>
                        <span className="rs-form__label-sub">
                          {isWeekendOrHoliday(selectedDate) ? '(10:00 ~ 17:00)' : '(10:00 ~ 21:00)'}
                        </span>
                      </label>
                      <div className="rs-form__time-grid">
                        {getTimeSlots().map(slot => (
                          <button
                            key={slot}
                            type="button"
                            className={`rs-form__time-btn ${formData.time === slot ? 'rs-form__time-btn--active' : ''}`}
                            onClick={() => setFormData(prev => ({ ...prev, time: slot }))}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="rs-form__footer">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.phone || !formData.bodyArea || !selectedDate || !formData.time}
                    className="rs-form__submit"
                  >
                    {isSubmitting ? '신청 중...' : '체험 예약 신청 완료'}
                  </button>
                  <p className="rs-form__privacy">개인정보는 상담 목적 외 사용되지 않습니다.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}


      {/* ═══ 7. FOOTER ═══ */}
      <footer className="rs-footer">
        <div className="rs-footer__inner">
          <div className="rs-footer__brand">
            <span className="rs-footer__brand-logo">Rm</span>
            <span className="rs-footer__brand-name">REMIND<br/>STRETCHING</span>
          </div>
          <div className="rs-footer__info">
            사업자 등록번호 492-22-00929 &nbsp;대표 엠비지<br />
            주소 서울 강서구 마곡중앙3로 16 VL르웨스트 B2 VL웰니스클럽 B226호<br />
            상담 <a href="tel:010-4017-1000" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>010-4017-1000</a>
          </div>
        </div>
        <div className="rs-footer__copy">
          © {new Date().getFullYear()} REMIND STRETCHING. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {/* ═══ 8. FLOATING CTA ═══ */}
      <button 
        className="rs-floating-cta"
        onClick={openForm}
        aria-label="지금 체험 신청하기"
      >
        지금 체험 신청하기
      </button>

    </div>
  )
}
