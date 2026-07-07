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
import { CheckCircle2, AlertCircle, Plus } from "lucide-react"

/* ─── 슬라이드쇼 이미지 목록 ─── */
const HERO_IMAGES = [
  "/images/KakaoTalk_20260429_140040742.jpg",
  "/images/KakaoTalk_20260429_140040742_01.jpg",
  "/images/KakaoTalk_20260429_140040742_02.jpg",
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
    image: "/images/KakaoTalk_20260429_140040742_03.jpg",
    tag: "FACILITY",
    tagColor: "#c8a96e",
    title: "웨이트존 / 유산소존 분리\n기구 간 간격 여유 있는 구조",
    lead: "쾌적한 환경에서 운동에만 집중하실 수 있도록 구성했습니다.",
    body: "마인드 휘트니스 도남점은 웨이트존과 유산소존을 효율적으로 분리하고, 기구 간 간격도 넉넉하게 배치하였습니다. 또한 스트레칭 존이 넓게 구비되어있고 유산소, 웨이트 존 둘 다 정수기와 개수대가 구비되어있습니다!",
    cta: "회원님의 건강한 일상을 위해 항상 최선을 다하고 있습니다.",
    highlight: "최적의 운동 환경 제공",
    reverse: false,
  },
  {
    image: "/images/KakaoTalk_20260429_140040742_04.jpg",
    tag: "CLEAN",
    tagColor: "#7a8fa6",
    title: "탈의실·샤워실 상시 청결 관리\n칸막이 샤워실 완비",
    lead: "물이 튀거나 눈치 보지 않고 편안하게!",
    body: "칸막이와 개인 샤워 공간 확보로 인해 다른 사람들의 눈치를 보지 않고 사용 할 수 있어 많은 회원님들의 만족도가 높습니다 :)",
    cta: "프라이빗한 공간에서 개운하게 마무리하세요.",
    highlight: "프라이빗 샤워 시설",
    reverse: true,
  },
  {
    image: "/images/caremembership-jejusi/hf_20260701_061740_bc567781-5781-4a7c-9793-356ae3dd8d4f.png",
    tag: "TARGET CARE",
    tagColor: "#c8a96e",
    title: "원하는 부위만 쏙!\n타겟 집중 케어",
    lead: "\"전신 케어PT 말고,\n내가 원하는 부위만\n집중 케어 받으세요.\"",
    body: "정체되고 안 빠지는 부위(허벅지/팔뚝)는 다이어트 전 미리 예열하는 기간이 반드시 필요합니다. 1~2달 미리 예열 후 본격적으로 전신 운동시 허벅지, 팔뚝살이 함께 빠지는 놀라운 경험을 하실거예요!! 비싼 PT도 좋지만, 매달 합리적인 가격으로 헬스장 이용은 기본, 빼고 싶은 부위만 1:1 집중 케어하는 케어 멤버십.",
    cta: "마인드휘트니스 노형점의 집중 관리 케어 멤버십으로 매달 고민되는 부위를 집중적으로 관리하세요.",
    highlight: "헬스장 이용권 + 케어 PT 결합",
    reverse: false,
    objectPosition: "center 60%",
  },
]

export function DonamJulyPromoLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

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
          <h1 className="cm-hero__title" style={{ marginBottom: "16px" }}>DONAM<br />PROMO</h1>
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

        {/* 지그재그 아이템 */}
        {ZIGZAG_ITEMS.map((item, idx) => {
          const { ref, visible } = secRefs[idx]
          return (
            <div
              key={idx}
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
                  {/* 자세히보기 버튼 추가 */}
                  <button className="cm-target-row__detail-btn" onClick={() => setIsDetailsOpen(true)} type="button" aria-label="멤버십 상세 보기">
                    <Plus className="w-4 h-4" />
                    <span>자세히 보기</span>
                  </button>
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
      <section aria-label="왜 케어 멤버십인가">
        <Image
          src="/images/caremembership-jejusi/주황색 핑크색 및 노란색 세련된 패션 인스타그램 게시물(45) (1).png"
          alt="왜 케어 멤버십인가 안내"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
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
      {(!isDetailsOpen && !isFormOpen) && (
        <div className="cm-sticky-cta-wrap">
          <button className="cm-sticky-cta" type="button" onClick={handleCtaClick}>
            <span>지금 7월 프로모션 신청하기 &rarr;</span>
            <span className="cm-sticky-cta__sub">빠르게 7월 혜택을 선점하세요</span>
          </button>
        </div>
      )}

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
