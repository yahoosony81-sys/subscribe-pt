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
import { CheckCircle2, AlertCircle, Plus, ChevronDown, Phone, MessageSquare, Smartphone, Clock, MapPin, Eye } from "lucide-react"

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
type ZigzagItem = {
  image: string;
  tag: string;
  tagColor: string;
  title: string;
  lead: string;
  body: string;
  cta: string;
  highlight: string;
  reverse: boolean;
  objectPosition?: string;
}

const ZIGZAG_ITEMS: ZigzagItem[] = [
  {
    image: "/images/애플힙케어.png",
    objectPosition: "center bottom",
    tag: "APPLE HIP CARE",
    tagColor: "#c8a96e",
    title: "애플힙 케어\n멤버십",
    lead: "이젠 흔적만 남은 엉덩이를 위해.\n앞 허벅지가 아닌 엉덩이로\n움직이는 법부터 다시 만듭니다.",
    body: "스쿼트를 해도 앞 허벅지만 발달하시나요? 오래 앉아 있어 엉덩이 사용감이 떨어진 분들을 위해 준비했습니다. 대퇴직근·둔근 등 꼼꼼한 근육 이완부터 브릿지·힙 쓰러스트 같은 체계적인 근력 강화, 그리고 힙 힌지 연습과 고관절 스트레칭 등 일상 습관 교정까지 책임집니다.",
    cta: "옆에서 봤을 때 평평하거나 처진 엉덩이가 고민이시라면,\n지금 바로 애플힙 케어 멤버십을 시작해 보세요.",
    highlight: "엉덩이 근육 집중 케어",
    reverse: false,
  },
  {
    image: "/images/코어핏케어.png",
    objectPosition: "center bottom",
    tag: "CORE FIT CARE",
    tagColor: "#7a8fa6",
    title: "코어핏 케어\n멤버십",
    lead: "배를 덮는 외투 없이는 앉아 있기가 힘드신가요?\n복부에 힘을 주는 방법부터\n앉는 습관까지 관리해 드립니다.",
    body: "앉았을 때 유독 접히고 앞으로 밀리는 뱃살, 허리와 등이 굽는 자세가 고민이신가요? 폼롤러를 활용한 복부·대퇴직근 이완부터 90/90 호흡, 데드버그, 플랭크 등 코어 중심의 탄탄한 근력 강화 훈련을 진행합니다. 바르게 앉는 자세 교정과 활동량 늘리기 등 건강한 습관까지 함께 만들어 드립니다.",
    cta: "배를 가리는 옷 대신 당당하게!\n무너진 체형을 바로잡는 코어핏 케어 멤버십을 만나보세요.",
    highlight: "코어·복부 집중 케어",
    reverse: true,
  },
  {
    image: "/images/슬림암케어.png",
    tag: "SLIM ARM CARE",
    tagColor: "#c8a96e",
    title: "슬림암 케어\n멤버십",
    lead: "가디건 없이는 민소매 옷이 부담스럽다면?\n팔만 운동하지 않습니다.\n등과 어깨 라인까지 함께 만듭니다.",
    body: "민소매 입기가 망설여지고 둔해 보이는 상체 라인이 고민이신 분들을 위한 프로그램입니다. 흉추·광배근·삼두근 이완으로 시작해 Y/T 레이즈, 킥백, 로우 등 팔과 등, 어깨 라인을 동시에 다듬는 운동을 진행합니다. 굽은 어깨와 목을 바로잡아 숨겨진 옷맵시를 찾아드립니다.",
    cta: "올여름엔 가디건 없이 당당하게!\n매끄러운 어깨와 팔 라인을 위한 슬림암 케어 멤버십과 함께하세요.",
    highlight: "팔·어깨 라인 집중 케어",
    reverse: false,
  },
  {
    image: "/images/밸러스업케어.png",
    tag: "BALANCE UP CARE",
    tagColor: "#7a8fa6",
    title: "밸런스업 케어\n멤버십",
    lead: "자세가 바뀌면, 보이는 인상과 움직임이 달라집니다.\n굽은 등, 말린 어깨,\n앞으로 나온 목을 위한 케어",
    body: "거북목, 라운드숄더, 좌우 비대칭으로 피로감을 달고 사시나요? 흉추와 광배근 이완을 통해 굳어있는 상체를 부드럽게 풀고, 로망체어, W레이즈, 버드독 등으로 무너진 밸런스와 척추 기립근을 바로 세웁니다. 바른 무게 중심 찾기와 짝다리 방지 등 근본적인 체형 교정을 도와드립니다.",
    cta: "굽은 어깨와 목을 활짝 펴고,\n자신감 있는 자세를 되찾고 싶다면 밸런스업 케어를 시작해 보세요.",
    highlight: "체형 비대칭·자세 교정 케어",
    reverse: true,
  },
  {
    image: "/images/라이트레스케어.png",
    objectPosition: "center bottom",
    tag: "LIGHT LEG CARE",
    tagColor: "#c8a96e",
    title: "라이트레그 케어\n멤버십",
    lead: "아침엔 편했던 신발이 퇴근길 내 발을 조이고 있다면?\n발목부터 엉덩이까지,\n무겁고 답답한 하체를 위한 케어",
    body: "오후만 되면 퉁퉁 붓고 무거운 다리 때문에 퇴근길 발걸음이 무거우신가요? 둔근부터 종아리까지 꼼꼼한 이완 관리를 시작으로, 카프레이즈, 런지, 스텝업 등 하체 전반의 밸런스와 근력을 깨우는 운동을 진행합니다. 발목 펌핑과 계단 이용 등 일상 속 붓기 관리 습관 교정도 병행합니다.",
    cta: "무겁고 답답한 하체 고민,\n이제 라이트레그 케어로 가볍고 시원한 다리를 되찾으세요.",
    highlight: "하체 부종·피로 회복 케어",
    reverse: false,
  },
]

export function CareMembershipHallimLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const sec1 = useScrollReveal()
  const sec2 = useScrollReveal()
  const sec3 = useScrollReveal()
  const sec4 = useScrollReveal()
  const sec5 = useScrollReveal()
  const secPackages = useScrollReveal()
  const secRefs = [sec1, sec2, sec3, sec4, sec5]

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
          <p className="cm-hero__subtitle">마인드의 케어멤버십</p>
          <h1 className="cm-hero__title" style={{ marginBottom: "16px" }}>CARE<br />MEMBERSHIP</h1>
          <p className="cm-hero__branch">한림점</p>
          <div className="cm-hero__divider">
            <span className="cm-hero__divider-line" />
            <span className="cm-hero__divider-text">FITNESS &amp; WELLNESS</span>
            <span className="cm-hero__divider-line" />
          </div>
          <button 
            type="button"
            onClick={() => {
              document.getElementById('care-membership-targets')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center justify-center gap-3 sm:gap-5 md:gap-8 mt-10 px-6 py-5 sm:px-12 sm:py-6 md:px-24 md:py-8 bg-black/50 backdrop-blur-md rounded-full border border-[#c8a96e]/50 shadow-[0_4px_24px_rgba(200,169,110,0.3)] w-fit mx-auto cursor-pointer transition-all duration-300 hover:bg-[#c8a96e] hover:scale-105 hover:shadow-[0_8px_32px_rgba(200,169,110,0.6)]"
          >
            <ChevronDown className="animate-bounce w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-[#c8a96e] group-hover:text-white transition-colors duration-300" />
            <span className="text-lg sm:text-2xl md:text-4xl whitespace-nowrap font-bold tracking-wide text-white drop-shadow-lg group-hover:text-white transition-colors duration-300">
              맞춤 케어멤버십 자세히보기
            </span>
            <ChevronDown className="animate-bounce w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-[#c8a96e] group-hover:text-white transition-colors duration-300" />
          </button>
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
      <section id="care-membership-targets" className="cm-targets" aria-label="케어 멤버십 대상">
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
                  <div className="cm-target-row__image-tag" style={{ 
                    borderColor: item.tagColor, 
                    color: item.tagColor === "#7a8fa6" ? "#ffffff" : item.tagColor,
                    backgroundColor: "rgba(0,0,0,0.4)",
                    textShadow: "0 2px 4px rgba(0,0,0,0.8)"
                  }}>
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

      {/* ═══ EXPERT PROFILE SECTION ═══ */}
      <section className="cm-expert" aria-label="프로그램 개발 및 교육 책임자">
        <div className="cm-expert__container">
          <div className="cm-expert__header">
            <p className="cm-expert__header-en">EXPERT PROFILE</p>
            <h2 className="cm-expert__title">
              케어 멤버십 프로그램 개발 및<br/>
              <span>교육 총괄 책임코치</span>
            </h2>
            <div className="cm-expert__line" />
          </div>

          <div className="cm-expert__content">
            <div className="cm-expert__image">
              <Image 
                src="/images/이서진이사님사진.jpg" 
                alt="이서진 교육 이사" 
                fill 
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>

            <div className="cm-expert__info">
              <h3 className="cm-expert__name">이서진 <span>이사</span></h3>
              
              <div className="cm-expert__career">
                <div className="cm-expert__group">
                  <h4>주요 직책 및 경력</h4>
                  <ul>
                    <li>마인드휘트니스 '케어멤버십 프로그램' 개발 및 교육 총괄 책임코치</li>
                    <li>마인드피트니스 교육이사</li>
                    <li>IFGA 교육이사</li>
                    <li>대한예방운동협회 자문위원</li>
                    <li>전) 네이버 지식iN 하이닥 운동전문 상담위원</li>
                    <li>전) KBS 스포츠예술과학원 스포츠예술학부 외래교수</li>
                  </ul>
                </div>

                <div className="cm-expert__group">
                  <h4>학력 사항</h4>
                  <ul>
                    <li>경희대학교 체육학과/스포츠의학과 졸업</li>
                    <li>경희대학교 일반대학원 운동생리학 석사 졸업</li>
                  </ul>
                </div>

                <div className="cm-expert__group">
                  <h4>보유 자격</h4>
                  <ul>
                    <li>건강운동관리사 (문화체육관광부)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
      {(!isDetailsOpen && !isFormOpen) && (
        <div className="cm-sticky-cta-wrap">
          <button className="cm-sticky-cta" type="button" onClick={handleCtaClick}>
            <span>케어멤버십 전화/문자 상담 가능한 연락처 보기 &rarr;</span>
            <span className="cm-sticky-cta__sub">8월말까지 신청시 2만원 혜택추가</span>
          </button>
        </div>
      )}

      {/* ═══ CONSULTATION CONTACT MODAL ═══ */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="bg-[#171717] border border-[#333] text-white sm:max-w-md p-6 sm:p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col items-center">
            {/* 뱃지 */}
            <div className="border border-[#c8a96e] text-[#c8a96e] px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-wider">
              CONSULTATION CONTACT
            </div>
            
            {/* 제목 */}
            <DialogTitle className="text-2xl font-bold text-white mb-2">
              상담 가능 연락처
            </DialogTitle>
            <DialogDescription className="text-gray-400 text-sm mb-6 text-center">
              전화 연결 및 문자 상담을 바로 이용하실 수 있습니다.
            </DialogDescription>
            
            {/* 전화번호 박스 */}
            <div className="w-full bg-[#202020] rounded-2xl p-5 mb-6 flex flex-col items-center border border-white/5">
              <span className="text-gray-400 text-xs mb-2">상담 가능 전화번호</span>
              <span className="text-[#c8a96e] text-3xl font-extrabold tracking-widest mb-5">
                010-8849-7050
              </span>
              
              <div className="flex w-full gap-3 mb-4">
                <a href="tel:010-8849-7050" className="flex-1 bg-[#c8a96e] text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#b59863] transition-colors">
                  <Phone className="w-4 h-4" /> 전화 연결
                </a>
                <a href="sms:010-8849-7050" className="flex-1 bg-transparent border border-gray-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                  <MessageSquare className="w-4 h-4" /> 문자 상담하기
                </a>
              </div>
              <p className="text-[11px] text-gray-500 text-center break-keep flex items-start gap-1 justify-center">
                <Smartphone className="w-3.5 h-3.5 text-[#00b4d8] shrink-0" />
                <span>모바일 환경에서는 버튼 선택 시 통화 또는 문자 전송 화면으로 바로 연결됩니다.</span>
              </p>
            </div>

            {/* 상담가능시간 */}
            <div className="w-full bg-transparent border border-white/10 rounded-2xl p-4 mb-6 flex justify-between items-center">
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4 text-[#c8a96e]" />
                <span className="text-sm font-medium">상담가능시간</span>
              </div>
              <span className="font-bold text-white">평일 09:00 ~ 21:00</span>
            </div>
            
            {/* 하단 링크 */}
            <div className="w-full flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-1">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                마인드휘트니스 한림점 지도 및 시설 안내
              </div>
              <div className="flex w-full gap-3">
                <a 
                  href="https://map.naver.com/p/search/%EB%A7%88%EC%9D%B8%EB%93%9C%ED%9C%98%ED%8A%B8%EB%8B%88%EC%8A%A4/place/1549272067?c=15.00,0,0,0,dh&placePath=/home?bk_query=%EB%A7%88%EC%9D%B8%EB%93%9C%ED%9C%98%ED%8A%B8%EB%8B%88%EC%8A%A4" 
                  target="_blank" rel="noreferrer"
                  className="flex-1 bg-[#c8a96e] text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#b59863] transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4" /> 지점위치 보기
                </a>
                <a 
                  href="https://map.naver.com/p/search/%EB%A7%88%EC%9D%B8%EB%93%9C%ED%9C%98%ED%8A%B8%EB%8B%88%EC%8A%A4/place/1549272067?c=15.00,0,0,0,dh&placePath=/photo?bk_query=%EB%A7%88%EC%9D%B8%EB%93%9C%ED%9C%98%ED%8A%B8%EB%8B%88%EC%8A%A4" 
                  target="_blank" rel="noreferrer"
                  className="flex-1 bg-[#c8a96e] text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#b59863] transition-colors text-sm"
                >
                  <Eye className="w-4 h-4" /> 센터내부 둘러보기
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* ═══ DETAILS MODAL ═══ */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto bg-white sm:max-w-2xl p-0 rounded-2xl border-0 shadow-2xl z-[100]">
          <div className="bg-slate-50 p-6 sm:p-8 rounded-t-2xl border-b border-slate-100 relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-2">케어 멤버십 패키지 안내</h2>
            <p className="text-center text-slate-600 font-medium">합리적인 가격으로 프리미엄 케어를 경험하세요</p>
          </div>
          
          <div className="p-6 sm:p-8 space-y-8 bg-white">
            {/* 멤버십 회원권 */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-[#c8a96e] text-white py-3 px-5 font-bold text-lg flex items-center justify-between">
                <span>케어 멤버십 회원권</span>
                <span className="text-xs sm:text-sm font-medium bg-white/20 px-2 py-1 rounded">정기 결제</span>
              </div>
              <div className="p-4 sm:p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-3 gap-1">
                  <span className="font-semibold text-slate-800 text-base">1개월 케어 멤버십</span>
                  <div className="text-left sm:text-right">
                    <div className="font-bold text-[#c8a96e] text-lg">총 190,000원</div>
                    <div className="text-sm text-slate-500 font-medium">월 190,000원</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-3 gap-1">
                  <span className="font-semibold text-slate-800 text-base">3개월 케어 멤버십</span>
                  <div className="text-left sm:text-right">
                    <div className="font-bold text-[#c8a96e] text-lg">총 450,000원</div>
                    <div className="text-sm text-slate-500 font-medium">월 150,000원</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="font-semibold text-slate-800 text-base">6개월 케어 멤버십</span>
                  <div className="text-left sm:text-right">
                    <div className="font-bold text-[#c8a96e] text-lg">총 690,000원</div>
                    <div className="text-sm text-slate-500 font-medium">월 115,000원</div>
                  </div>
                </div>
                <div className="mt-4 bg-slate-50 p-3 rounded-lg flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-relaxed break-keep">매월 헬스장 이용권 기본 제공 + 월 5회 (회당 25분) 1:1 케어 PT 포함</p>
                </div>
              </div>
            </div>

            {/* 충전권 */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-slate-800 text-white py-3 px-5 font-bold text-lg flex items-center justify-between">
                <span>케어 PT 충전권</span>
                <span className="text-xs sm:text-sm font-medium bg-white/20 px-2 py-1 rounded">멤버십 회원 전용</span>
              </div>
              <div className="p-4 sm:p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-3 gap-1">
                  <span className="font-semibold text-slate-800 text-base">10회 충전권</span>
                  <span className="font-bold text-slate-700 text-lg">330,000원</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-3 gap-1">
                  <span className="font-semibold text-slate-800 text-base">20회 충전권</span>
                  <span className="font-bold text-slate-700 text-lg">550,000원</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="font-semibold text-slate-800 text-base">30회 충전권</span>
                  <span className="font-bold text-slate-700 text-lg">770,000원</span>
                </div>
                <div className="mt-4 bg-orange-50 p-3 rounded-lg flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 leading-relaxed break-keep">위 충전권은 <strong>케어 멤버십 회원에 한하여</strong> 저렴하게 추가 구매 가능한 상품입니다.</p>
                </div>
              </div>
            </div>

            {/* 유의사항 */}
            <div className="text-xs text-slate-500 bg-slate-50 p-4 rounded-lg break-keep leading-relaxed space-y-1">
              <p>· 본 케어 멤버십은 노형점/한림점 전용 상품으로 타 지점에서는 이용이 불가합니다.</p>
              <p>· 특별 할인가 상품으로 휴회 및 양도가 불가하오니 이 점 양해 부탁드립니다.</p>
            </div>
          </div>
          
          {/* 하단 고정 액션 버튼 */}
          <div className="sticky bottom-0 bg-white border-t border-slate-200 p-4 sm:p-6 rounded-b-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
            <button 
              type="button"
              onClick={handleOpenRegistrationFromDetails}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
            >
              케어멤버십 전화/문자 상담 가능한 연락처 보기 &rarr;
            </button>
            <p className="text-center text-xs text-slate-400 mt-3 font-medium">8월말까지 신청시 2만원 혜택추가</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
