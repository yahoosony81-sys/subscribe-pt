"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import "../remindstretching.css"

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

const navLinks = [
  { label: "홈", href: "/remindstretching-MG" },
  { label: "리마인드 스트레칭이란?", href: "/remindstretching-MG/about" },
  { label: "소개", href: "/remindstretching-MG#rs-about" },
  { label: "프로그램", href: "/remindstretching-MG#rs-programs" },
  { label: "예약하기", href: "/remindstretching-MG#rs-booking" },
]

export default function RemindStretchingAbout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const aboutAnim = useScrollReveal(0.12)
  const philosophyAnim = useScrollReveal(0.12)
  const promiseAnim = useScrollReveal(0.12)
  const principleAnim1 = useScrollReveal(0.12)
  const principleAnim2 = useScrollReveal(0.12)
  const principleAnim3 = useScrollReveal(0.12)

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    window.location.href = href
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

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

      {/* ═══ NAV DRAWER ═══ */}
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

      {/* ═══ 1. ABOUT HERO / CONCEPT ═══ */}
      <section className="rs-about" style={{ paddingTop: '160px' }}>
        <div className="rs-about__bg-left">
          <Image src="/images/remindstretching/hero-bg.png" alt="" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="rs-about__bg-right">
          <Image src="/images/REMINDMIDDLE.png" alt="" fill style={{ objectFit: 'cover' }} />
        </div>

        <div ref={aboutAnim.ref} className="rs-about__inner">
          <div className={`rs-about__image-wrap rs-anim-left ${aboutAnim.isVisible ? 'rs-in' : ''}`}>
            <div className="rs-about__image">
              <Image
                src="/images/REMINDMIDDLE.png"
                alt="리마인드 스트레칭 케어"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className={`rs-about__text rs-anim ${aboutAnim.isVisible ? 'rs-in' : ''}`}>
            <h2>
              겉만 만지는 휴식은 끝났습니다.<br />
              인체 구조를 아는 전문가의<br />
              진짜 리커버리
            </h2>
            <div className="rs-about__text-block">
              <p>
                <strong>일반 마사지</strong><br />
                피부 표면의 겉 근육만<br />
                일시적으로 강하게 누르고 두드려,<br />
                자고 일어나면 다시 제자리로 돌아갑니다.
              </p>
            </div>
            <div className="rs-about__text-block">
              <p>
                <strong>리커버리 스트레칭</strong><br />
                인체해부학에 기반하여 통증을 유발하는<br />
                깊은 속근육과 짧아진 근막을 직접 늘려주어<br />
                몸의 기능을 되살립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 1.5. CORE PRINCIPLE ═══ */}
      <section className="rs-core-principle">
        <div className="rs-core-principle__inner">
          <div ref={principleAnim1.ref} className={`rs-core-principle__questions rs-anim ${principleAnim1.isVisible ? 'rs-in' : ''}`}>
            <h2>
              "유튜브 보고 따라 하는 스트레칭은<br />
              왜 시원하기보다 아프기만 할까요?"<br />
              <br />
              "마사지를 세게 받아도 왜 다음 날이면<br />
              똑같이 목과 어깨가 딱딱해질까요?"
            </h2>
          </div>
          
          <div ref={principleAnim2.ref} className={`rs-core-principle__theory rs-anim rs-anim-delay-1 ${principleAnim2.isVisible ? 'rs-in' : ''}`}>
            <h3 className="rs-core-principle__subtitle">핵심 원리</h3>
            <p>
              우리 몸의 근육은 여러 겹으로 복잡하게 얽혀 있으며,<br />
              관절과 뼈를 보호하기 위해 스스로를 지키려는<br />
              <strong>'방어 기전'</strong>을 가지고 있습니다.<br />
              <br />
              해부학을 모른 채 무작정 몸을 찢거나<br />
              겉 근육만 강하게 누르면,<br />
              오히려 근육이 긴장하여 <strong>더 단단하게 굳어버립니다.</strong>
            </p>
          </div>

          <div ref={principleAnim3.ref} className={`rs-core-principle__diff rs-anim rs-anim-delay-2 ${principleAnim3.isVisible ? 'rs-in' : ''}`}>
            <h3 className="rs-core-principle__subtitle">리마인드 스트레칭만의 차별점</h3>
            <div className="rs-core-principle__grid">
              <div className="rs-core-principle__card">
                <span className="rs-core-principle__num">01</span>
                <h4>100% 수동형(Passive) 케어</h4>
                <p>당신은 가만히 힘을 빼고<br />누워만 계세요.</p>
              </div>
              <div className="rs-core-principle__card">
                <span className="rs-core-principle__num">02</span>
                <h4>인체해부학적 정밀 이완</h4>
                <p>근육의 결, 관절의 가동 범위,<br />그리고 신경의 흐름까지 완벽하게 이해한<br />스트레칭 전문가가 당신의 호흡에 맞춰<br />속근육을 안전하게 늘려줍니다.</p>
              </div>
              <div className="rs-core-principle__card">
                <span className="rs-core-principle__num">03</span>
                <h4>지속 가능한 회복</h4>
                <p>일시적으로 통증만 가리는 것이 아니라,<br />무너진 체형의 밸런스를<br />근본부터 바로잡아 줍니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. PHILOSOPHY ═══ */}
      <section className="rs-philosophy">
        <div className="rs-philosophy__bg">
          <Image
            src="/images/remindstretching/intro-nature-bg.png"
            alt="자연 배경"
            fill
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
                특정 관절과 근육이 심하게 단단해져<br />
                집중 케어가 필요하신 분
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
            <p>
              철저한 신체 평가를 통해<br />당신의 뼈와 근육 구조에 딱 맞는 가동 범위를 찾아드립니다.<br />
              <br />
              억지로 아프게 찢지 않기에 안전하며,<br />관리 직후 마법처럼 가벼워진 전신을 눈으로 직접 확인하실 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
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
    </div>
  )
}
