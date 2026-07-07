"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import "./care-membership-hallim.css"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { RegistrationSectionHallim } from "@/components/registration-section-hallim"

/* ─── 슬라이드쇼 이미지 목록 ─── */
const HERO_IMAGES = [
  "/images/22호점_한림점_시설사진 (11).jpg",
  "/images/22호점_한림점_시설사진 (15).jpg",
  "/images/한림점_시설사진 (2).jpg",
  "/images/한림점_시설사진.jpg",
]

const SLIDE_DURATION = 1500

/* ─── Scroll Reveal Hook ─── */
function useScrollReveal(threshold = 0.18) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

/* ─── 지그재그 섹션 데이터 ─── */
const ZIGZAG_ITEMS = [
  {
    id: "woman",
    image: "/images/caremembership-jejusi/section-urbanfield.jpg",
    tag: "FOR WOMEN",
    tagColor: "#c8a96e",
    title: "\"누구 엄마\" 말고,\n나를 위한 시간",
    lead: "아이 챙기느라, 남편 챙기느라\n정작 내 몸은 가장 나중으로\n미뤄두지 않으셨나요?",
    body: "체력은 떨어지고 교복 입은 아이 옆에 서기가 문득 부끄러워졌다면, 이제는 나를 위한 투자를 시작해야 할 때입니다.",
    cta: "\"누구 엄마\" 말고, 다시 여자로 불리던 시절로 —\n당당해질 주부들을 위한 3개월 집중 프로젝트",
    highlight: "1:1 맞춤형 케어 멤버십",
    reverse: false,
  },
  {
    id: "suit-fit",
    image: "/images/caremembership-jejusi/section-man-suit.jpg",
    tag: "FOR MEN",
    tagColor: "#7a8fa6",
    title: "수트 핏,\n다시 찾아드립니다",
    lead: "\"숨을 참아야 겨우 잠기는\n셔츠 단추, 언제까지\n외면하실 건가요?\"",
    body: "단순히 체중만 줄이는 다이어트가 아닙니다. 굽은 등과 어깨를 펴고 늘어난 뱃살을 저격하여, 남자의 잃어버린 수트 핏을 완벽하게 되찾아 드립니다.",
    cta: "3개월 헬스 + 1:1 체형/웨이트 케어 PT 15회로\n핏을 다시 세우세요.",
    highlight: "수트 핏 프로젝트",
    reverse: true,
  },
  {
    id: "target-care",
    image: "/images/caremembership-jejusi/hf_20260701_061740_bc567781-5781-4a7c-9793-356ae3dd8d4f.png",
    tag: "TARGET CARE",
    tagColor: "#c8a96e",
    title: "원하는 부위만 쏙!\n타겟 집중 케어",
    lead: "\"전신 케어PT 말고,\n내가 원하는 부위만\n집중 케어 받으세요.\"",
    body: "정체되고 안 빠지는 부위(허벅지/팔뚝)는 다이어트 전 미리 예열하는 기간이 반드시 필요합니다. 1~2달 미리 예열 후 본격적으로 전신 운동시 허벅지, 팔뚝살이 함께 빠지는 놀라운 경험을 하실거예요!! 비싼 PT도 좋지만, 매달 합리적인 가격으로 헬스장 이용은 기본, 빼고 싶은 부위만 1:1 집중 케어하는 케어 멤버십.",
    cta: "마인드휘트니스 한림점의 집중 관리 케어 멤버십으로 매달 고민되는 부위를 집중적으로 관리하세요.",
    highlight: "헬스장 이용권 + 케어 PT 결합",
    reverse: false,
    objectPosition: "center 60%",
  },
]

export function CareMembershipHallimLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false)

  const sec1 = useScrollReveal()
  const sec2 = useScrollReveal()
  const sec3 = useScrollReveal()
  const secPackages = useScrollReveal()
  const secWhy = useScrollReveal()
  const secRefs = [sec1, sec2, sec3]

  /* ─── 슬라이드 이동 ─── */
  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setPrevSlide(currentSlide)
      setCurrentSlide(index)
      setTimeout(() => { setPrevSlide(null); setIsTransitioning(false) }, 1000)
    },
    [currentSlide, isTransitioning]
  )

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % HERO_IMAGES.length)
  }, [currentSlide, goToSlide])

  const prevSlideBtn = useCallback(() => {
    goToSlide((currentSlide - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [nextSlide])

  useEffect(() => {
    const t = setTimeout(() => setTextVisible(true), 300)
    return () => clearTimeout(t)
  }, [])

  // 해시 앵커 스크롤 처리 (광고 URL로 직접 유입 시)
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash
      const element = document.querySelector(hash)
      if (element) {
        // 이미지가 로드될 시간을 약간 주고 스크롤
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 500)
      }
    }
  }, [])

  const handleCtaClick = () => {
    setIsFormOpen(true)
  }

  return (
    <div className="cm-landing">

      {/* ═══ HERO SECTION ═══ */}
      <section className="cm-hero" aria-label="메인 히어로 섹션">
        <div className="cm-hero__slides">
          {prevSlide !== null && (
            <div className="cm-hero__slide cm-hero__slide--exit" key={`prev-${prevSlide}`}>
              <Image src={HERO_IMAGES[prevSlide]} alt={`슬라이드 배경 ${prevSlide + 1}`} fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
            </div>
          )}
          <div className="cm-hero__slide cm-hero__slide--active" key={`current-${currentSlide}`}>
            <Image src={HERO_IMAGES[currentSlide]} alt={`슬라이드 배경 ${currentSlide + 1}`} fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
          </div>
        </div>

        <div className="cm-hero__overlay" />

        <button className="cm-hero__arrow cm-hero__arrow--prev" onClick={prevSlideBtn} aria-label="이전 슬라이드">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button className="cm-hero__arrow cm-hero__arrow--next" onClick={nextSlide} aria-label="다음 슬라이드">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>

        <div className={`cm-hero__content ${textVisible ? "cm-hero__content--visible" : ""}`}>
          <div className="cm-hero__badge"><span>MIND FITNESS</span></div>
          <p className="cm-hero__subtitle">마인드의 케어멤버십</p>
          <h1 className="cm-hero__title" style={{ marginBottom: "16px" }}>CARE<br />MEMBERSHIP</h1>
          <p className="cm-hero__branch">한림점</p>
          <div className="cm-hero__divider">
            <span className="cm-hero__divider-line" />
            <span className="cm-hero__divider-text">FITNESS &amp; WELLNESS</span>
            <span className="cm-hero__divider-line" />
          </div>
          <p className="cm-hero__desc">
            이젠 헬스/PT도 부담없는 시대,<br />
            나를 위한 변화! 지금 케어멤버십을 시작하세요
          </p>
        </div>

        <div className="cm-hero__dots" role="tablist" aria-label="슬라이드 인디케이터">
          {HERO_IMAGES.map((_, i) => (
            <button key={i} className={`cm-hero__dot ${i === currentSlide ? "cm-hero__dot--active" : ""}`} onClick={() => goToSlide(i)} aria-label={`슬라이드 ${i + 1}`} role="tab" aria-selected={i === currentSlide} />
          ))}
        </div>

        <div className="cm-hero__scroll-indicator" aria-hidden="true">
          <div className="cm-hero__scroll-mouse"><div className="cm-hero__scroll-wheel" /></div>
          <span>SCROLL</span>
        </div>
      </section>


      {/* ═══ ZIGZAG TARGET SECTION ═══ */}
      <section className="cm-targets" aria-label="케어 멤버십 대상">
        {/* 섹션 헤더 */}
        <div className="cm-targets__header">
          <p className="cm-targets__header-en">WHO IS IT FOR</p>
          <h2 className="cm-targets__header-title">
            당신을 위한<br />
            <span>맞춤 케어 멤버십</span>
          </h2>
          <div className="cm-targets__header-line" />
        </div>

        {/* 지그재그 아이템 */}
        {ZIGZAG_ITEMS.map((item, idx) => {
          const { ref, visible } = secRefs[idx]
          return (
            <div
              key={idx}
              id={item.id}
              ref={ref}
              className={[
                "cm-target-row",
                item.reverse ? "cm-target-row--reverse" : "",
                visible ? "cm-target-row--visible" : "",
              ].join(" ")}
            >
              {/* 이미지 패널 */}
              <div className="cm-target-row__image-wrap">
                <div className="cm-target-row__image-inner">
                  <Image
                    src={item.image}
                    alt={item.title.replace(/\n/g, " ")}
                    fill
                    style={{ objectFit: "cover", objectPosition: item.objectPosition || "center top" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* 이미지 위 태그 배지 */}
                  <div className="cm-target-row__image-tag" style={{ borderColor: item.tagColor, color: item.tagColor }}>
                    {item.tag}
                  </div>
                </div>
              </div>

              {/* 텍스트 패널 */}
              <div className="cm-target-row__text">
                <p className="cm-target-row__tag" style={{ color: item.tagColor }}>{item.tag}</p>
                <h3 className="cm-target-row__title">
                  {item.title.split("\n").map((line, i) => (
                    <span key={i}>{line}{i < item.title.split("\n").length - 1 && <br />}</span>
                  ))}
                </h3>
                <p className="cm-target-row__lead">
                  {item.lead.split("\n").map((line, i) => (
                    <span key={i}>{line}{i < item.lead.split("\n").length - 1 && <br />}</span>
                  ))}
                </p>
                <p className="cm-target-row__body">{item.body}</p>
                <div className="cm-target-row__cta-box">
                  <p className="cm-target-row__cta-text">
                    {item.cta.split("\n").map((line, i) => (
                      <span key={i}>{line}{i < item.cta.split("\n").length - 1 && <br />}</span>
                    ))}
                  </p>
                  <span className="cm-target-row__highlight" style={{ color: item.tagColor }}>
                    {item.highlight}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* ═══ WHY CARE MEMBERSHIP SECTION ═══ */}
      <section aria-label="왜 케어 멤버십인가" className="relative">
        <Image
          src="/images/caremembership-jejusi/케어멤버십설명.png"
          alt="왜 케어 멤버십인가 안내"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-full max-w-[280px]">
          <button 
            onClick={() => setIsPriceModalOpen(true)}
            className="w-full bg-slate-900/90 backdrop-blur-sm text-white font-bold py-4 px-6 rounded-full shadow-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 border border-white/20"
          >
            패키지 자세히 보기 <span>&rarr;</span>
          </button>
        </div>
      </section>

      {/* ═══ MEMBERSHIP PACKAGES SECTION ═══ */}
      <section
        ref={secPackages.ref}
        className={`cm-packages ${secPackages.visible ? "cm-packages--visible" : ""}`}
        aria-label="케어 멤버십 패키지 안내"
      >
        <div className="cm-packages__container">
          <div className="cm-packages__image-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Image
              src="/images/caremembership-jejusi/케어pt.png"
              alt="케어 멤버십 회원권 안내"
              width={1200}
              height={1200}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
            <Image
              src="/images/caremembership-jejusi/2.png"
              alt="케어 PT 충전권 안내"
              width={1200}
              height={1200}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
          <div className="cm-packages__notice">
            <p className="cm-packages__notice-text">
              * <strong>&quot;케어 멤버십 회원&quot;</strong>에 한하여 저렴한 <strong>&quot;케어 PT 충전권&quot;</strong> 구매가 가능합니다.
            </p>
            <p className="cm-packages__notice-text" style={{ fontSize: "clamp(12px, 1.4vw, 13px)", color: "#888", fontWeight: 400 }}>
              * 케어 멤버십 상품은 노형점/한림점 전용 상품으로 타 지점에서는 이용이 불가한 점 양해 부탁드립니다. 더불어 휴회와 양도가 불가함도 알려드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ STICKY BOTTOM CTA BUTTON ═══ */}
      <div className="cm-sticky-cta-wrap" style={{ zIndex: 9999, pointerEvents: 'auto' }}>
        <button className="cm-sticky-cta" type="button" onClick={() => {
          setIsPriceModalOpen(false)
          handleCtaClick()
        }}>
          <span>지금 케어 멤버십 온라인 신청하기 &rarr;</span>
          <span className="cm-sticky-cta__sub">온라인 신청시 월 2만원 혜택 추가</span>
        </button>
      </div>

      {/* ═══ REGISTRATION MODAL ═══ */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto bg-white sm:max-w-lg p-6 rounded-2xl">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl font-bold text-slate-900 text-center">
              케어 멤버십 온라인 신청
            </DialogTitle>
            <DialogDescription className="text-center text-sm mt-2 flex flex-col gap-1">
              <span className="font-medium text-orange-500">온라인 신청시 월 2만원의 혜택이 추가로 제공됩니다</span>
              <span className="font-normal text-slate-600">신청 확인 후 지점에서 순차적으로 안내 드리겠습니다.</span>
            </DialogDescription>
          </DialogHeader>
          <RegistrationSectionHallim
            googleSheetUrl="https://script.google.com/macros/s/AKfycbyNmVek0v-6H65jnlLpM_TQyOqKA9MEZJ0CqVEO5nvOY1Z1Y8yBvtE40sqv3mQ3iQqP/exec"
            sheetName="한림점케어멤버십"
            isModal={true}
            onSuccess={() => setIsFormOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* ═══ PRICE MODAL ═══ */}
      <Dialog open={isPriceModalOpen} onOpenChange={setIsPriceModalOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto bg-slate-50 sm:max-w-lg p-0 border-0 rounded-2xl">
          <DialogHeader className="p-5 bg-white sticky top-0 z-10 border-b shadow-sm">
            <DialogTitle className="text-xl font-bold text-slate-900 text-center">
              케어 멤버십 패키지 안내
            </DialogTitle>
          </DialogHeader>
          <div className="p-4 flex flex-col gap-4 pb-32">
            <Image
              src="/images/caremembership-jejusi/케어pt.png"
              alt="케어 멤버십 회원권 안내"
              width={1200}
              height={1200}
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
            />
            <Image
              src="/images/caremembership-jejusi/2.png"
              alt="케어 PT 충전권 안내"
              width={1200}
              height={1200}
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
            />
          </div>
        </DialogContent>
      </Dialog>

    </div>
  )
}
