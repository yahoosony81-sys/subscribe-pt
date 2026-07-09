"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import "./donam-july-promo.css"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { RegistrationSectionDonam } from "@/components/registration-section-donam"
import { CheckCircle2, AlertCircle, Plus, ChevronLeft, ChevronRight } from "lucide-react"

/* ─── 슬라이드쇼 이미지 목록 ─── */
const HERO_IMAGES = [
  "/images/KakaoTalk_20260429_140040742.jpg",
  "/images/KakaoTalk_20260429_140040742_01.jpg",
  "/images/KakaoTalk_20260429_140040742_02.jpg",
]

const SLIDE_DURATION = 1500

/* ─── 도남점 시설 사진 목록 ─── */
const FACILITY_IMAGES = [
  { src: "/images/KakaoTalk_20260429_140040742_01.jpg", alt: "도남점 시설 1" },
  { src: "/images/KakaoTalk_20260429_140040742_02.jpg", alt: "도남점 시설 2" },
  { src: "/images/KakaoTalk_20260429_140040742_03.jpg", alt: "도남점 시설 3" },
  { src: "/images/KakaoTalk_20260429_140040742_04.jpg", alt: "도남점 시설 4" },
  { src: "/images/KakaoTalk_20260429_140040742_05.jpg", alt: "도남점 시설 5" },
  { src: "/images/KakaoTalk_20260429_140040742.jpg", alt: "도남점 시설 6" },
  { src: "/images/도남스트레칭룸.png", alt: "도남점 스트레칭룸" },
  { src: "/images/도남시설2.png", alt: "도남점 시설" },
  { src: "/images/도남샤워실2.png", alt: "도남점 샤워실" },
]

const FACILITY_SLIDE_DURATION = 3000

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
    images: ["/images/하단브랜드지운 이미지.png"],
    tag: "PROMOTION",
    tagColor: "#f97316",
    title: "이 모든 혜택이\n연 299,000원에 가능합니다!",
    lead: "마인드 휘트니스 도남점 7월 한정 혜택",
    body: "• 24시간 운영으로 언제든 이용가능\n• 연중무휴, 주차 3시간 무료\n• 샤워실 완비\n• 웨이트존 / 유산소존 완벽 분리\n• 기구 간 간격 여유 있는 쾌적한 구조\n• 탈의실·샤워실 상시 청결 관리\n• 헬스만 등록하셔도 PT 2회 무료!",
    cta: "빠르게 7월 이벤트 혜택이 소진되고 있어요!",
    highlight: "7월 한정 연간권 특가",
    reverse: false,
    objectFit: "contain" as const,
    backgroundColor: "#fff",
    objectPosition: "center",
    btnText: "연간회원권 신청하고 PT 2회 무료로 받기",
  },
  {
    images: [
      "/images/도남그룹수업하단삭제.png",
      "/images/스크린샷 2026-07-08 144009.png"
    ],
    tag: "GX PROGRAM",
    tagColor: "#e65c00",
    title: "다양한 GX 프로그램을\n7월 무료로 체험하세요!",
    lead: "마인드 휘트니스 도남점에서는\n그룹PT, 줌바, 스피닝 등\n다양한 GX 프로그램을 운영하고 있어\n혼자 운동하는 것이 부담스러운 분들도\n즐겁게 참여하실 수 있어요!",
    body: "전문 강사와 함께하는 수업으로 올바른 운동 습관을 기를 수 있으며,\n함께 운동하는 분위기 속에서 더욱 높은 운동 효과와 꾸준한 동기부여까지 얻을 수 있습니다.\n\n체력 향상, 다이어트, 스트레스 해소까지!",
    cta: "나에게 맞는 GX 프로그램 7월 무료체험 가능하니\n이 기회를 놓치지 마세요",
    highlight: "7월 GX 무료체험",
    reverse: true,
    btnText: "그룹수업 체험 신청하기",
  },
]

/* ─── 지그재그 이미지 슬라이더 컴포넌트 ─── */
function ZigzagImageSlider({
  images,
  alt,
  objectFit = "cover",
  objectPosition = "center top",
  backgroundColor = "transparent",
  tag,
  tagColor,
  btnText,
  onCtaClick,
}: {
  images: string[]
  alt: string
  objectFit?: "cover" | "contain"
  objectPosition?: string
  backgroundColor?: string
  tag: string
  tagColor: string
  btnText: string
  onCtaClick: () => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const next = useCallback(() => {
    if (transitioning || images.length <= 1) return
    setTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setTimeout(() => setTransitioning(false), 500)
  }, [transitioning, images.length])

  const prev = useCallback(() => {
    if (transitioning || images.length <= 1) return
    setTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setTimeout(() => setTransitioning(false), 500)
  }, [transitioning, images.length])

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next, images.length])

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* 슬라이드 컨테이너 */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        }}
      >
        {images.map((img, idx) => {
          const isSchedule = img.includes("스크린샷") || img.includes("schedule")
          const currentFit = isSchedule ? "contain" : objectFit
          const currentBg = isSchedule ? "#ffffff" : backgroundColor
          return (
            <div key={idx} className="relative h-full" style={{ width: `${100 / images.length}%`, flexShrink: 0, backgroundColor: currentBg }}>
              <Image
                src={img}
                alt={`${alt} 슬라이드 ${idx + 1}`}
                fill
                style={{ objectFit: currentFit, objectPosition, backgroundColor: currentBg }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx === 0}
              />
            </div>
          )
        })}
      </div>

      {/* 이미지 위 태그 배지 */}
      <div className="cm-target-row__image-tag" style={{ borderColor: tagColor, color: tagColor }}>
        {tag}
      </div>

      {/* 좌우 내비게이션 화살표 */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="cm-zigzag-slider__arrow cm-zigzag-slider__arrow--prev"
            aria-label="이전 이미지"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="cm-zigzag-slider__arrow cm-zigzag-slider__arrow--next"
            aria-label="다음 이미지"
          >
            <ChevronRight size={20} />
          </button>

          {/* 페이지네이션 도트 */}
          <div className="cm-zigzag-slider__dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentIndex(idx)
                }}
                className={`cm-zigzag-slider__dot ${idx === currentIndex ? "cm-zigzag-slider__dot--active" : ""}`}
                aria-label={`이미지 ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* 자세히보기/CTA 버튼 */}
      <button className="cm-target-row__detail-btn" onClick={onCtaClick} type="button" aria-label="멤버십 상세 보기">
        <Plus className="w-4 h-4" />
        <span>{btnText || "자세히 보기"}</span>
      </button>
    </div>
  )
}

export function DonamJulyPromoLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  /* ─── 시설 슬라이더 상태 ─── */
  const [facilitySlide, setFacilitySlide] = useState(0)
  const [facilityPrev, setFacilityPrev] = useState<number | null>(null)
  const [facilityTransitioning, setFacilityTransitioning] = useState(false)
  const [facilityDirection, setFacilityDirection] = useState<1 | -1>(1) // 1=forward(→), -1=backward(←)

  const sec1 = useScrollReveal()
  const sec2 = useScrollReveal()
  const secFacility = useScrollReveal(0.1)
  const secRefs = [sec1, sec2]

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

  /* ─── 시설 슬라이더 자동 전환 ─── */
  const goToFacilitySlide = useCallback(
    (index: number, dir: 1 | -1 = 1) => {
      if (facilityTransitioning) return
      setFacilityDirection(dir)
      setFacilityTransitioning(true)
      setFacilityPrev(facilitySlide)
      setFacilitySlide(index)
      setTimeout(() => { setFacilityPrev(null); setFacilityTransitioning(false) }, 600)
    },
    [facilitySlide, facilityTransitioning]
  )

  const nextFacilitySlide = useCallback(() => {
    goToFacilitySlide((facilitySlide + 1) % FACILITY_IMAGES.length, 1)
  }, [facilitySlide, goToFacilitySlide])

  const prevFacilitySlide = useCallback(() => {
    goToFacilitySlide((facilitySlide - 1 + FACILITY_IMAGES.length) % FACILITY_IMAGES.length, -1)
  }, [facilitySlide, goToFacilitySlide])

  useEffect(() => {
    const timer = setInterval(nextFacilitySlide, FACILITY_SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [nextFacilitySlide])

  const handleCtaClick = () => {
    setIsFormOpen(true)
  }

  const handleOpenRegistrationFromDetails = () => {
    setIsDetailsOpen(false)
    setTimeout(() => setIsFormOpen(true), 300)
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
          <p className="cm-hero__subtitle">대구북구헬스 7월 이벤트</p>
          <h1 className="cm-hero__title" style={{ marginBottom: "16px", fontSize: "clamp(38px, 9.5vw, 110px)" }}>MINDFITNESS<br />DONAM</h1>
          <p className="cm-hero__branch">도남점</p>
          <div className="cm-hero__divider">
            <span className="cm-hero__divider-line" />
            <span className="cm-hero__divider-text">FITNESS &amp; WELLNESS</span>
            <span className="cm-hero__divider-line" />
          </div>
          <p className="cm-hero__desc">
            이번 여름, 더 건강하고 자신감 있는 변화를<br />
            마인드 휘트니스 <span className="cm-hero__desc-highlight">도남점</span>에서 함께 시작해 보세요!
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
          <p className="cm-targets__header-en">WHY DONAM</p>
          <h2 className="cm-targets__header-title">
            도남점에서 시작하는<br />
            <span>완벽한 첫걸음</span>
          </h2>
          <div className="cm-targets__header-line" />
        </div>

        {/* ═══ 도남점 시설 사진 슬라이더 ═══ */}
        <div
          ref={secFacility.ref}
          className={`cm-facility-slider ${secFacility.visible ? "cm-facility-slider--visible" : ""}`}
        >
          <div className={`cm-facility-slider__viewport ${facilityDirection === 1 ? "cm-facility-slider__viewport--fwd" : "cm-facility-slider__viewport--bwd"}`}>
            {/* 이전 슬라이드 (왼쪽으로 슬라이드아웃) */}
            {facilityPrev !== null && (
              <div className="cm-facility-slider__slide cm-facility-slider__slide--exit" key={`fac-prev-${facilityPrev}`}>
                <Image
                  src={FACILITY_IMAGES[facilityPrev].src}
                  alt={FACILITY_IMAGES[facilityPrev].alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
            )}
            {/* 현재 슬라이드 (오른쪽에서 슬라이드인) */}
            <div className="cm-facility-slider__slide cm-facility-slider__slide--active" key={`fac-cur-${facilitySlide}`}>
              <Image
                src={FACILITY_IMAGES[facilitySlide].src}
                alt={FACILITY_IMAGES[facilitySlide].alt}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 900px"
                priority
              />
            </div>

            {/* 좌우 화살표 */}
            <button className="cm-facility-slider__arrow cm-facility-slider__arrow--prev" onClick={prevFacilitySlide} aria-label="이전 시설 사진">
              <ChevronLeft size={22} />
            </button>
            <button className="cm-facility-slider__arrow cm-facility-slider__arrow--next" onClick={nextFacilitySlide} aria-label="다음 시설 사진">
              <ChevronRight size={22} />
            </button>
          </div>

          {/* 도트 인디케이터 */}
          <div className="cm-facility-slider__dots">
            {FACILITY_IMAGES.map((_, i) => (
              <button
                key={i}
                className={`cm-facility-slider__dot ${i === facilitySlide ? "cm-facility-slider__dot--active" : ""}`}
                onClick={() => goToFacilitySlide(i, i > facilitySlide ? 1 : -1)}
                aria-label={`시설 사진 ${i + 1}`}
              />
            ))}
          </div>

          {/* 캡션 */}
          <p className="cm-facility-slider__caption">
            {FACILITY_IMAGES[facilitySlide].alt}
          </p>
        </div>

        {/* 지그재그 아이템 */}
        {ZIGZAG_ITEMS.map((item, idx) => {
          const { ref, visible } = secRefs[idx]
          return (
            <div
              key={idx}
              ref={ref}
              className={[
                "cm-target-row",
                `cm-target-row--${idx}`,
                item.reverse ? "cm-target-row--reverse" : "",
                visible ? "cm-target-row--visible" : "",
              ].join(" ")}
            >
              {/* 이미지 패널 */}
              <div className="cm-target-row__image-wrap">
                <div className="cm-target-row__image-inner">
                  {item.images && item.images.length > 1 ? (
                    <ZigzagImageSlider
                      images={item.images}
                      alt={item.title.replace(/\n/g, " ")}
                      objectFit={(item as any).objectFit || "cover"}
                      objectPosition={(item as any).objectPosition || "center top"}
                      backgroundColor={(item as any).backgroundColor || "transparent"}
                      tag={item.tag}
                      tagColor={item.tagColor}
                      btnText={(item as any).btnText}
                      onCtaClick={() => setIsFormOpen(true)}
                    />
                  ) : (
                    <>
                      <Image
                        src={item.images ? item.images[0] : (item as any).image}
                        alt={item.title.replace(/\n/g, " ")}
                        fill
                        style={{ 
                          objectFit: ((item as any).objectFit as "cover" | "contain") || "cover", 
                          objectPosition: (item as any).objectPosition || "center top",
                          backgroundColor: (item as any).backgroundColor || "transparent" 
                        }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* 이미지 위 태그 배지 */}
                      <div className="cm-target-row__image-tag" style={{ borderColor: item.tagColor, color: item.tagColor }}>
                        {item.tag}
                      </div>
                       {/* 자세히보기 버튼 추가 */}
                      <button className="cm-target-row__detail-btn" onClick={() => setIsFormOpen(true)} type="button" aria-label="멤버십 상세 보기">
                        <Plus className="w-4 h-4" />
                        <span>{(item as any).btnText || "자세히 보기"}</span>
                      </button>
                    </>
                  )}
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
                <p className="cm-target-row__body">
                  {item.body.split("\n").map((line, i) => (
                    <span key={i}>{line}{i < item.body.split("\n").length - 1 && <br />}</span>
                  ))}
                </p>
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



      {/* ═══ REGISTRATION MODAL ═══ */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto bg-white sm:max-w-lg p-6 rounded-2xl">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl font-bold text-slate-900 text-center">
              도남점 7월 프로모션 신청
            </DialogTitle>
            <DialogDescription className="text-center text-sm mt-2 flex flex-col gap-1">
              <span className="font-medium text-orange-500">7월 이벤트 혜택을 놓치지 마세요!</span>
              <span className="font-normal text-slate-600">신청 확인 후 지점에서 순차적으로 안내 드리겠습니다.</span>
            </DialogDescription>
          </DialogHeader>
          <RegistrationSectionDonam
            isModal={true}
            onSuccess={() => setIsFormOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* ═══ DETAILS MODAL ═══ */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto bg-white sm:max-w-2xl p-0 rounded-2xl border-0 shadow-2xl z-[100]">
          <div className="bg-slate-50 p-6 sm:p-8 rounded-t-2xl border-b border-slate-100 relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-2">대구도남점 7월 프로모션 안내</h2>
            <p className="text-center text-slate-600 font-medium">여름맞이 특별 혜택을 경험하세요</p>
          </div>
          
          <div className="p-6 sm:p-8 space-y-8 bg-white">
            {/* 프로모션 내용 Placeholder */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-[#c8a96e] text-white py-3 px-5 font-bold text-lg flex items-center justify-between">
                <span>7월 한정 이벤트 혜택</span>
              </div>
              <div className="p-4 sm:p-5 space-y-4">
                <div className="mt-4 bg-slate-50 p-3 rounded-lg flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-relaxed break-keep">상세 가격 정보 업데이트 예정 (요청 시 즉각 수정)</p>
                </div>
              </div>
            </div>

            {/* 유의사항 */}
            <div className="text-xs text-slate-500 bg-slate-50 p-4 rounded-lg break-keep leading-relaxed space-y-1">
              <p>· 본 프로모션은 대구도남점 전용입니다.</p>
              <p>· 이벤트 혜택은 조기 소진될 수 있습니다.</p>
            </div>
          </div>
          
          {/* 하단 고정 액션 버튼 */}
          <div className="sticky bottom-0 bg-white border-t border-slate-200 p-4 sm:p-6 rounded-b-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
            <button 
              type="button"
              onClick={handleOpenRegistrationFromDetails}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
            >
              지금 7월 프로모션 신청하기 &rarr;
            </button>
            <p className="text-center text-xs text-slate-400 mt-3 font-medium">빠르게 상담 신청을 남겨주세요!</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
