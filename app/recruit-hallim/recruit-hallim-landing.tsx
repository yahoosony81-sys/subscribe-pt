"use client"

import { useState } from "react"
import "./recruit-hallim.css"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Phone, MessageSquare, Mail, Clock, ChevronDown, MapPin } from "lucide-react"

/* ═══ 채용 포지션 데이터 ═══ */
const POSITIONS = [
  {
    emoji: "🏋️",
    title: "퍼스널 트레이너 (PT 코치)",
    tags: ["정규직 / 계약직", "경력 무관"],
    description: "회원의 체형, 건강 상태, 목표에 맞춘 맞춤형 운동 프로그램을 설계하고, 1:1 또는 그룹 코칭을 통해 체계적인 변화를 이끕니다.",
    commission: [
      { label: "영업지원금", value: "최대 200만원" },
      { label: "수업료", value: "최대 60% 지급" },
    ],
    requirements: [
      "생활스포츠지도사 2급 이상 보유 (또는 취득 예정)",
      "체육 관련 학과 전공 우대",
      "고객과의 소통 능력 및 서비스 마인드",
      "건강운동관리사 자격증 보유 시 우대",
    ],
    tasks: [
      "1:1 퍼스널 트레이닝 세션 진행",
      "케어멤버십 회원 관리 및 운동 루틴 설계",
      "회원 체성분 분석 및 목표 관리",
      "운동 일지 작성 및 피드백 제공",
    ],
    preferred: [
      "IFGA, NSCA, ACSM 등 관련 자격증 보유자",
      "재활 운동 또는 교정 운동 경험자",
      "피트니스 센터 근무 경험 1년 이상",
    ],
  },
  {
    emoji: "🧘",
    title: "FC 선생님 (피트니스 카운슬러)",
    tags: ["정규직 / 계약직", "경력 무관"],
    description: "회원 상담 및 등록을 담당하며, 회원의 운동 목표와 니즈를 파악하여 최적의 프로그램을 제안합니다.",
    commission: [
      { label: "영업지원금", value: "140 ~ 240만원" },
      { label: "추가 커미션", value: "한도 없음" },
    ],
    requirements: [
      "밝고 적극적인 커뮤니케이션 역량",
      "영업 및 상담 경험 우대",
      "그룹 및 개인 수업 운영 가능",
    ],
    tasks: [
      "신규 회원 상담 및 프로그램 안내",
      "회원 등록 및 계약 관리",
      "회원 만족도 관리 및 재등록 유도",
      "프로모션 기획 및 운영 보조",
    ],
    preferred: [
      "피트니스 업종 상담 경험자",
      "목표 지향적이고 성과를 즐기는 분",
      "밝고 긍정적인 에너지를 가진 분",
    ],
  },
  {
    emoji: "💼",
    title: "부서관리자 (팀장)",
    tags: ["정규직", "경력 우대"],
    description: "FC팀 또는 PT팀을 총괄하며, 팀원 육성과 매출 관리, 운영 프로세스 개선을 리드합니다.",
    commission: [
      { label: "FC팀장 영업지원금", value: "175 ~ 290만원 + 추가커미션 한도 없음" },
      { label: "PT팀장 영업지원금", value: "110 ~ 150만원 + 수업료 최대 52%" },
      { label: "팀 프로모션비", value: "추가 지급" },
    ],
    requirements: [
      "피트니스 업종 근무 경험 2년 이상",
      "팀 리더십 및 매니지먼트 역량",
      "매출 관리 및 성과 분석 능력",
    ],
    tasks: [
      "팀원 채용, 교육 및 성과 관리",
      "팀 매출 목표 설정 및 달성 전략 수립",
      "운영 프로세스 개선 및 품질 관리",
      "본사 협업 및 리포팅",
    ],
    preferred: [
      "피트니스 센터 팀장/매니저 경험자",
      "데이터 기반 의사결정 역량 보유자",
      "팀 빌딩 및 조직 문화 구축 경험",
    ],
  },
]

/* ═══ 슬라이더 이미지 데이터 ═══ */
const SLIDER_IMAGES = [
  { src: "/images/06_중문점_시설사진 (47).JPG", alt: "마인드휘트니스 중문점 시설사진" },
  { src: "/images/운동티칭.jpg", alt: "마인드휘트니스 코칭 장면" },
  { src: "/images/08_울산송정점_시설사진 (34).jpg", alt: "마인드휘트니스 울산송정점 시설사진" },
  { src: "/images/2024 경상지사_신년회 (2).jpg", alt: "마인드휘트니스 경상지사 신년회" },
]


export function RecruitHallimLanding() {
  const [openPosition, setOpenPosition] = useState<number | null>(null)
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)
  const [sliderIndex, setSliderIndex] = useState(0)

  const handleTogglePosition = (index: number) => {
    setOpenPosition(openPosition === index ? null : index)
  }

  const handleSliderPrev = () => {
    setSliderIndex(Math.max(0, sliderIndex - 1))
  }

  const handleSliderNext = () => {
    setSliderIndex(Math.min(SLIDER_IMAGES.length - 1, sliderIndex + 1))
  }

  return (
    <div className="rc-page">

      {/* ═══ HEADER / NAV BAR ═══ */}
      <header className="rc-header">
        <div className="rc-header__inner">
          <a href="#" className="rc-header__logo">
            {/* 로고 이미지 자리 - 나중에 교체 */}
            <span className="rc-header__logo-text">마인드휘트니스</span>
          </a>

          {/* Desktop Nav */}
          <nav className="rc-header__nav">
            <a href="#" className="rc-header__nav-item">회사소개</a>
            <a href="#" className="rc-header__nav-item">조직문화</a>
            <a href="#" className="rc-header__nav-item">채용</a>
            <a href="#" className="rc-header__nav-item">멤버소개</a>
            <a href="#" className="rc-header__nav-item">뉴스</a>
            <a href="#" className="rc-header__nav-item rc-header__nav-item--accent">공식 홈페이지↗</a>
          </nav>

          {/* Mobile Menu Button */}
          <button type="button" className="rc-header__mobile-btn" aria-label="메뉴">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
              <path clipRule="evenodd" d="M3 5.5H21V7.5H3V5.5ZM3 11H21V13H3V11ZM21 16.5H3V18.5H21V16.5Z" fill="#222222" fillRule="evenodd" />
            </svg>
          </button>
        </div>
      </header>
      <div className="rc-header-blank" />


      {/* ═══ SECTION 1: HERO (Dark bg + background image + center text) ═══ */}
      <section className="rc-hero" aria-label="채용 히어로">
        <div className="rc-hero__bg">
          <img src="/images/채용페이지가로긴이미지.png" alt="마인드휘트니스 채용 히어로" />
        </div>
        <div className="rc-hero__overlay" />
        <div className="rc-hero__content">
          <div className="rc-spacer-60" />
          <p className="rc-hero__sub"><strong>마인드휘트니스 코치 채용</strong></p>
          <h1 className="rc-hero__title">
            마음이 진심이 되어 전심이 되는<br />
            <span className="rc-accent">역량 있는 코치</span>님을 모십니다.
          </h1>
          <div className="rc-spacer-60" />
        </div>
      </section>


      {/* ═══ SECTION 2: IMAGE SLIDER ═══ */}
      <section className="rc-slider-section" aria-label="시설 사진 슬라이더">
        <div className="rc-spacer-40" />
        <div className="rc-slider__track">
          {SLIDER_IMAGES.map((img, i) => (
            <div key={i} className="rc-slider__card">
              <div className="rc-slider__card-img">
                <img src={img.src} alt={img.alt} />
              </div>
            </div>
          ))}
        </div>
        <div className="rc-slider__controls">
          <button type="button" className="rc-slider__btn" onClick={handleSliderPrev} aria-label="이전">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M13.94 5.65a.5.5 0 01.71 0l.7.7a.5.5 0 010 .71L10.41 12l4.94 4.94a.5.5 0 010 .7l-.7.71a.5.5 0 01-.71 0l-6-6a.5.5 0 010-.71l6-6z" fill="currentColor"/></svg>
          </button>
          <span className="rc-slider__counter">{sliderIndex + 1} / {SLIDER_IMAGES.length}</span>
          <button type="button" className="rc-slider__btn" onClick={handleSliderNext} aria-label="다음">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M10.06 18.35a.5.5 0 01-.7 0l-.71-.7a.5.5 0 010-.71L13.59 12 8.65 7.06a.5.5 0 010-.7l.7-.71a.5.5 0 01.71 0l6 6a.5.5 0 010 .71l-6 6z" fill="currentColor"/></svg>
          </button>
        </div>
      </section>


      {/* ═══ SECTION 3: 문제 제기 (White bg, centered text) ═══ */}
      <section className="rc-text-section rc-text-section--white">
        <div className="rc-inner">
          <div className="rc-spacer-40" />
          <h2 className="rc-text-section__heading">
            유능한 코치님들이 제대로<br />성장할 환경이 없었습니다.
          </h2>
          <p className="rc-text-section__body">
            {`

대한민국 피트니스 업계에
코치님들의 성장과 동기부여를 위한
환경이 부족했던 것이 현실입니다.

코치님들의 커리어와 보상 체계를
진심으로 고민하는 회사가 전무했고,
수업 외 역량을 새롭게
시도해 볼 수 있는 조직이 없었으며,

이로 인해, 많은 코치님들이
본인만의 커리어를 만들 수 없었습니다.`}
          </p>
          <div className="rc-spacer-60" />
        </div>
      </section>


      {/* ═══ SECTION 4: 비전 (Dark bg + image + text) ═══ */}
      <section className="rc-text-section rc-text-section--dark">
        <div className="rc-inner">
          <div className="rc-spacer-60" />
          <h2 className="rc-text-section__heading">
            우리는 이 시장의<br />
            마인드휘트니스 마피아를 꿈꿉니다.
          </h2>

          {/* Full width image placeholder */}
          <div className="rc-spacer-20" />
          <div className="rc-img-placeholder rc-img-placeholder--dark rc-img-placeholder--landscape" style={{ borderRadius: '4px' }}>
            <img src="/images/메인리더_단체사진 (17).jpg" alt="마인드휘트니스 비전 리더 단체사진" />
          </div>
          <div className="rc-spacer-40" />

          <p className="rc-text-section__body">
            {`마인드휘트니스 출신 멤버들이 성장하여
국내외 피트니스 업계를 리드할
훌륭한 인재로 성장하기를 바랍니다.

어딜 가도, 마인드휘트니스 출신이라고 하면
업계 최고 코치, 리더를 연상시키고 싶습니다.`}
          </p>
          <div className="rc-spacer-60" />
        </div>
      </section>


      {/* ═══ SECTION 5: WHY MINDFITNESS (White bg, zigzag) ═══ */}
      <section className="rc-text-section rc-text-section--white">
        <div className="rc-inner">
          <div className="rc-spacer-60" />
          <p className="rc-text-section__body" style={{ color: '#b5940a', fontWeight: 700, fontSize: '16px' }}>
            <strong>WHY MIND FITNESS</strong>
          </p>
          <h2 className="rc-text-section__heading">
            마인드휘트니스와 함께면<br />반드시 성장하는 이유
          </h2>
          <div className="rc-spacer-40" />

          {/* 이유 1: text(left) + image(right) */}
          <div className="rc-split">
            <div className="rc-split__text">
              <p className="rc-split__label"><strong>📌 이유1: 과학적 케어 시스템</strong></p>
              <h3 className="rc-split__title">
                <span className="rc-accent">PT | 필라테스 | 재활 운동</span><br />
                다양한 트레이닝 티칭 경험을 쌓을 수 있습니다.
              </h3>
              <div className="rc-split__divider" />
              <p className="rc-split__desc">
                마인드휘트니스는 케어멤버십 시스템을 통해 회원별 맞춤 운동 프로그램, 습관 형성 관리, 루틴 설정, 피드백 제공 등 체계적인 관리 시스템을 운영합니다. 코치님들은 단순 PT를 넘어 전인적 케어 역량을 키울 수 있습니다.
              </p>
            </div>
            <div className="rc-split__image">
              <div className="rc-img-placeholder rc-img-placeholder--landscape">
                <img src="/images/다양한티칭.jpg" alt="다양한 트레이닝 티칭" />
              </div>
            </div>
          </div>

          <div className="rc-spacer-40" />

          {/* Full width image placeholder */}
          <div className="rc-img-placeholder rc-img-placeholder--landscape" style={{ borderRadius: '4px' }}>
            <img src="/images/자격증그룹.jpg" alt="자격증 및 교육 커리큘럼 인포그래픽" />
          </div>

          <div className="rc-spacer-40" />

          {/* 이유 2: image(left) + text(right) - reverse */}
          <div className="rc-split rc-split--reverse">
            <div className="rc-split__text">
              <p className="rc-split__label"><strong>📌 이유2 : 성장이 보장된 커리어 로드맵</strong></p>
              <h3 className="rc-split__title">
                <span className="rc-accent">코치 ▶ 시니어 코치 ▶ 팀 리더 ▶ 지점 매니저</span><br />
                역량에 따라 빠른 권한과 역할 확장
              </h3>
              <div className="rc-split__divider" />
              <p className="rc-split__desc">
                마인드휘트니스는 개인의 역량과 열정에 따라 다양한 권한과 역할을 경험할 수 있는 열린 조직입니다. 커리어 패스가 명확하게 구성되어 있어, 각자의 강점에 따라 성장 가능성은 무한대입니다.
              </p>
            </div>
            <div className="rc-split__image">
              <div className="rc-img-placeholder rc-img-placeholder--landscape">
                <span>📷 커리어 로드맵 이미지<br/>권장: 480 × 320</span>
              </div>
            </div>
          </div>

          <div className="rc-spacer-40" />

          {/* 이유 3: text(left) + image(right) */}
          <div className="rc-split">
            <div className="rc-split__text">
              <p className="rc-split__label"><strong>📌 이유3: 최고의 교육 시스템</strong></p>
              <h3 className="rc-split__title">
                <span className="rc-accent">이 곳이 바로 피트니스 코치 사관 학교,</span><br />
                모든 것은 교육과 매뉴얼에서부터 출발합니다.
              </h3>
              <div className="rc-split__divider" />
              <p className="rc-split__desc">
                경희대 체육학/스포츠의학 석사 출신 교육이사의 직접 교육을 통해 과학적이고 체계적인 운동 지도 역량을 키울 수 있습니다. 입사와 동시에 전문성을 위한 교육은 물론, 회사와 브랜드에 대한 이해 등 체계적인 교육이 진행됩니다.
              </p>
            </div>
            <div className="rc-split__image">
              <div className="rc-img-placeholder rc-img-placeholder--landscape">
                <span>📷 교육 세션 장면<br/>권장: 480 × 320</span>
              </div>
            </div>
          </div>

          <div className="rc-spacer-40" />

          {/* Full width image */}
          <div className="rc-img-placeholder rc-img-placeholder--landscape" style={{ borderRadius: '4px' }}>
            <span>📷 팀 활동 / 워크숍 장면<br/>권장: 960 × 400</span>
          </div>

          <div className="rc-spacer-40" />

          {/* 이유 4: image(left) + text(right) */}
          <div className="rc-split rc-split--reverse">
            <div className="rc-split__text">
              <p className="rc-split__label"><strong>📌 이유4 : 진심을 담은 팀 문화</strong></p>
              <h3 className="rc-split__title">
                <span className="rc-accent">&ldquo;마음이 진심이 되어 전심이 되는&rdquo;</span><br />
                함께 성장하는 동료가 여기 있습니다.
              </h3>
              <div className="rc-split__divider" />
              <p className="rc-split__desc">
                마인드휘트니스는 서로를 존중하고 응원하는 팀 문화를 만들어갑니다. 정기 미팅과 워크숍을 통해 더 나은 서비스를 함께 고민하고, 회원의 변화가 곧 우리의 보람이 됩니다.
              </p>
            </div>
            <div className="rc-split__image">
              <div className="rc-img-placeholder rc-img-placeholder--landscape">
                <span>📷 팀 문화 사진<br/>권장: 480 × 320</span>
              </div>
            </div>
          </div>

          <div className="rc-spacer-60" />
        </div>
      </section>


      {/* ═══ SECTION 6: 코치님들의 스토리 (Dark bg) ═══ */}
      <section className="rc-text-section rc-text-section--dark">
        <div className="rc-inner">
          <div className="rc-spacer-60" />
          <p className="rc-text-section__body" style={{ color: 'var(--rc-yellow)', fontWeight: 700, fontSize: '16px' }}>
            <strong>COACH STORY</strong>
          </p>
          <p className="rc-text-section__body" style={{ fontSize: '16px', opacity: 0.7 }}>
            회사와 동반 성장한 그들의 이야기
          </p>
          <h2 className="rc-text-section__heading">
            마인드휘트니스와 함께 성장해 온<br />코치님들의 스토리
          </h2>
          <div className="rc-spacer-40" />

          {/* 코치 스토리 카드 그리드 */}
          <div className="rc-coach-grid">
            {[
              { name: "코치명을 입력하세요", role: "PT 코치", years: "0년차", placeholder: "📷 코치 프로필 사진\n권장: 400 × 500" },
              { name: "코치명을 입력하세요", role: "필라테스 강사", years: "0년차", placeholder: "📷 코치 프로필 사진\n권장: 400 × 500" },
              { name: "코치명을 입력하세요", role: "PT 코치", years: "0년차", placeholder: "📷 코치 프로필 사진\n권장: 400 × 500" },
            ].map((coach, i) => (
              <div key={i} className="rc-coach-card">
                <div className="rc-coach-card__img">
                  <div className="rc-img-placeholder rc-img-placeholder--dark" style={{ paddingBottom: '125%' }}>
                    <span style={{ whiteSpace: 'pre-line' }}>{coach.placeholder}</span>
                  </div>
                </div>
                <div className="rc-coach-card__info">
                  <span className="rc-coach-card__years">{coach.years}</span>
                  <h4 className="rc-coach-card__name">{coach.name}</h4>
                  <p className="rc-coach-card__role">{coach.role}</p>
                </div>
                <div className="rc-coach-card__quote">
                  <p>&ldquo;이 곳에 코치님의 성장 스토리를 입력해 주세요. 마인드휘트니스에서의 경험과 성장 이야기를 들려주세요.&rdquo;</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rc-spacer-60" />
          <h2 className="rc-text-section__heading">
            이토록 멋진 분들과 함께<br />꿈을 꾸고 있습니다.
          </h2>
          <div className="rc-spacer-60" />
        </div>
      </section>


      {/* ═══ SECTION 7: 복지 & 혜택 (White bg, card grid) ═══ */}
      <section className="rc-text-section rc-text-section--white">
        <div className="rc-inner">
          <div className="rc-spacer-60" />
          <p className="rc-text-section__body" style={{ color: '#b5940a', fontWeight: 700, fontSize: '16px' }}>
            <strong>BENEFITS</strong>
          </p>
          <h2 className="rc-text-section__heading">
            마인드휘트니스의 복지 & 혜택
          </h2>
          <div className="rc-spacer-40" />

          <div className="rc-card-grid rc-card-grid--3">
            {[
              { icon: "🏃", title: "자기 운동 시간 보장", desc: "근무 시간 내 자기 운동 시간을 보장하여 건강한 라이프스타일을 유지할 수 있습니다." },
              { icon: "📚", title: "역량 강화 교육 지원", desc: "교육이사 직접 교육, 외부 세미나 참가비 지원 등 전문성 성장을 지원합니다." },
              { icon: "💰", title: "인센티브 제도", desc: "성과에 따른 인센티브를 지급하여 노력에 합당한 보상을 제공합니다." },
              { icon: "🛡️", title: "4대 보험 가입", desc: "국민연금, 건강보험, 고용보험, 산재보험 4대 보험을 완비합니다." },
              { icon: "🍽️", title: "식비 지원", desc: "근무일 식비를 지원하여 편안하게 근무에 집중할 수 있습니다." },
              { icon: "🎉", title: "경조사 지원", desc: "가족 같은 팀 문화 속에서 경조사 휴가 및 경조금을 지원합니다." },
              { icon: "🏝️", title: "정착지원금 150만원", desc: "부럽다, 제주살이! 제주살이 로망 실현, 마인드와 함께 하세요. 정착지원금 150만원을 드립니다." },
              { icon: "📈", title: "커미션 한도 없음", desc: "영업지원금 + 추가 커미션 제도로 역량에 따라 수입의 한계가 없습니다." },
              { icon: "🎓", title: "수업료 최대 60% 지급", desc: "PT 코치님은 수업료의 최대 60%를 지급받으며, 성과에 따른 추가 보상이 있습니다." },
            ].map((b, i) => (
              <div key={i} className="rc-card rc-card--light">
                <div style={{ fontSize: '32px' }}>{b.icon}</div>
                <h4 className="rc-card__title">{b.title}</h4>
                <p className="rc-card__desc">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="rc-spacer-60" />
        </div>
      </section>


      {/* ═══ SECTION 8: 채용 프로세스 (Dark bg) ═══ */}
      <section className="rc-text-section rc-text-section--dark">
        <div className="rc-inner">
          <div className="rc-spacer-60" />
          <p className="rc-text-section__body" style={{ color: 'var(--rc-yellow)', fontWeight: 700, fontSize: '16px' }}>
            <strong>HIRING PROCESS</strong>
          </p>
          <h2 className="rc-text-section__heading">채용 프로세스</h2>
          <div className="rc-spacer-40" />

          <div className="rc-process-grid">
            {[
              { num: 1, title: "서류 접수", desc: "이력서 및\n자기소개서 제출" },
              { num: 2, title: "1차 면접", desc: "인성 및\n직무 역량 면접" },
              { num: 3, title: "실기 테스트", desc: "코칭 역량\n실기 평가" },
              { num: 4, title: "2차 면접", desc: "대표 면접 및\n처우 협의" },
              { num: 5, title: "최종 합격", desc: "합격 통보 및\n입사 안내" },
              { num: 6, title: "온보딩", desc: "교육 및\n현장 투입" },
            ].map((s, i) => (
              <div key={i} className="rc-process-step">
                <div className="rc-process-step__num">{s.num}</div>
                <p className="rc-process-step__title" style={{ color: 'var(--rc-black)' }}>{s.title}</p>
                <p className="rc-process-step__desc" style={{ color: 'var(--rc-gray-600)' }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="rc-spacer-60" />
        </div>
      </section>


      {/* ═══ SECTION 9: 채용 포지션 (White bg, accordion) ═══ */}
      <section className="rc-text-section rc-text-section--white" id="rc-positions">
        <div className="rc-inner">
          <div className="rc-spacer-60" />
          <p className="rc-text-section__body" style={{ color: '#b5940a', fontWeight: 700, fontSize: '16px' }}>
            <strong>OPEN POSITIONS</strong>
          </p>
          <h2 className="rc-text-section__heading">
            함께할 포지션을 소개합니다
          </h2>
          <p className="rc-text-section__body" style={{ fontSize: '16px', opacity: 0.7 }}>
            마인드휘트니스 한림점에서 함께 성장할 인재를 모집합니다
          </p>
          <div className="rc-spacer-40" />

          {POSITIONS.map((pos, idx) => (
            <div key={idx} className="rc-position">
              <div className="rc-position__header" onClick={() => handleTogglePosition(idx)}>
                <div className="rc-position__left">
                  <div className="rc-position__emoji">{pos.emoji}</div>
                  <div>
                    <h3 className="rc-position__name">{pos.title}</h3>
                    <div className="rc-position__tags">
                      {pos.tags.map((tag, i) => (
                        <span key={i} className={`rc-position__tag ${i === 0 ? 'rc-position__tag--yellow' : 'rc-position__tag--gray'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <button type="button"
                  className={`rc-position__toggle ${openPosition === idx ? 'rc-position__toggle--open' : ''}`}
                  aria-expanded={openPosition === idx}
                >
                  상세보기
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className={`rc-position__body ${openPosition === idx ? 'rc-position__body--open' : ''}`}>
                <div className="rc-position__content">
                  <div className="rc-position__section">
                    <p style={{ fontSize: '15px', color: 'var(--rc-gray-600)', lineHeight: 1.7, margin: 0 }}>{pos.description}</p>
                  </div>
                  {pos.commission && (
                    <div className="rc-position__section">
                      <h5>💵 급여 & 커미션</h5>
                      <div className="rc-commission-box">
                        {pos.commission.map((c: { label: string; value: string }, i: number) => (
                          <div key={i} className="rc-commission-row">
                            <span className="rc-commission-label">{c.label}</span>
                            <span className="rc-commission-value">{c.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="rc-position__section">
                    <h5>📋 주요 업무</h5>
                    <ul>{pos.tasks.map((t, i) => <li key={i}>{t}</li>)}</ul>
                  </div>
                  <div className="rc-position__section">
                    <h5>✅ 자격 요건</h5>
                    <ul>{pos.requirements.map((r, i) => <li key={i}>{r}</li>)}</ul>
                  </div>
                  <div className="rc-position__section">
                    <h5>⭐ 우대 사항</h5>
                    <ul>{pos.preferred.map((p, i) => <li key={i}>{p}</li>)}</ul>
                  </div>
                  <button type="button" className="rc-position__apply-btn"
                    onClick={(e) => { e.stopPropagation(); setIsApplyModalOpen(true) }}
                  >
                    이 포지션 지원하기 →
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="rc-spacer-40" />

          {/* CTA Button */}
          <div className="rc-cta-wrap">
            <button type="button" className="rc-cta-btn" onClick={() => setIsApplyModalOpen(true)}>
              마인드휘트니스에 지원하기 →
            </button>
          </div>

          <div className="rc-spacer-60" />
        </div>
      </section>


      {/* ═══ SECTION 10: 근무지 안내 (Dark bg) ═══ */}
      <section className="rc-text-section rc-text-section--dark">
        <div className="rc-inner">
          <div className="rc-spacer-60" />
          <p className="rc-text-section__body" style={{ color: 'var(--rc-yellow)', fontWeight: 700, fontSize: '16px' }}>
            <strong>LOCATION</strong>
          </p>
          <h2 className="rc-text-section__heading">마인드휘트니스 한림점</h2>
          <p className="rc-text-section__body" style={{ fontSize: '16px', opacity: 0.7 }}>
            편리한 접근성과 쾌적한 시설로 여러분을 기다립니다
          </p>
          <div className="rc-spacer-40" />

          <div className="rc-split">
            <div className="rc-split__image">
              <div className="rc-img-placeholder rc-img-placeholder--landscape">
                <span>📷 한림점 시설 / 지도 이미지<br/>권장: 480 × 320</span>
              </div>
            </div>
            <div className="rc-split__text">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* 주소 */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <MapPin style={{ width: 20, height: 20, color: '#b5940a', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontWeight: 700, margin: '0 0 4px', color: 'var(--rc-black)' }}>주소</p>
                    <p style={{ margin: 0, color: 'var(--rc-gray-600)', fontSize: 14, lineHeight: 1.5 }}>
                      제주 제주시 한림읍 한림남1길 3<br/>상두거리 몽돌스테이 3층
                    </p>
                  </div>
                </div>
                {/* 전화 */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Phone style={{ width: 20, height: 20, color: '#b5940a', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontWeight: 700, margin: '0 0 4px', color: 'var(--rc-black)' }}>전화번호</p>
                    <p style={{ margin: 0, color: 'var(--rc-gray-600)', fontSize: 14 }}>0507-1320-2245</p>
                  </div>
                </div>
                {/* 운영시간 */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Clock style={{ width: 20, height: 20, color: '#b5940a', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontWeight: 700, margin: '0 0 4px', color: 'var(--rc-black)' }}>운영시간</p>
                    <p style={{ margin: 0, color: 'var(--rc-gray-600)', fontSize: 14, lineHeight: 1.6 }}>
                      평일 06:00 ~ 24:00<br/>토요일 08:00 ~ 20:00<br/>일요일/공휴일 10:00 ~ 18:00
                    </p>
                  </div>
                </div>
                {/* 주차 */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b5940a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>
                  </svg>
                  <div>
                    <p style={{ fontWeight: 700, margin: '0 0 4px', color: 'var(--rc-black)' }}>주차안내</p>
                    <p style={{ margin: 0, color: 'var(--rc-gray-600)', fontSize: 14 }}>건물 외부 주변 주차 가능 (30대)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rc-spacer-60" />
        </div>
      </section>


      {/* ═══ APPLICATION MODAL ═══ */}
      <Dialog open={isApplyModalOpen} onOpenChange={setIsApplyModalOpen}>
        <DialogContent className="bg-[#171717] border border-[#333] text-white sm:max-w-md p-6 sm:p-8 rounded-3xl shadow-2xl">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ border: '1px solid #FFD72E', color: '#FFD72E', padding: '4px 16px', borderRadius: '100px', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', marginBottom: '16px' }}>
              APPLICATION
            </div>

            <DialogTitle className="text-2xl font-bold text-white mb-2">지원 안내</DialogTitle>
            <DialogDescription className="text-gray-400 text-sm mb-6 text-center">
              아래 연락처로 이력서를 보내주시거나 전화 상담을 신청해 주세요.
            </DialogDescription>

            <div style={{ width: '100%', background: '#202020', borderRadius: '16px', padding: '24px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '20px' }}>
              <p style={{ fontSize: '12px', color: '#757575', marginBottom: '8px' }}>채용 문의 전화번호</p>
              <p style={{ fontSize: '28px', fontWeight: 900, color: '#FFD72E', letterSpacing: '2px', marginBottom: '4px' }}>0507-1320-2245</p>
              <p style={{ fontSize: '14px', color: '#9E9E9E' }}>
                <Mail className="w-3.5 h-3.5 inline mr-1" />mindfitness@naver.com
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
              <a href="tel:0507-1320-2245" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', borderRadius: '14px', fontSize: '14px', fontWeight: 700, background: '#FFD72E', color: '#0A0913', textDecoration: 'none' }}>
                <Phone className="w-4 h-4" /> 전화 문의
              </a>
              <a href="mailto:mindfitness@naver.com?subject=[채용지원] 마인드휘트니스 한림점" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', borderRadius: '14px', fontSize: '14px', fontWeight: 700, background: 'transparent', color: '#fff', border: '1px solid #616161', textDecoration: 'none' }}>
                <Mail className="w-4 h-4" /> 이메일 지원
              </a>
            </div>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', marginTop: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#9E9E9E' }}>
                <Clock className="w-4 h-4" style={{ color: '#FFD72E' }} />
                <span>상담가능시간</span>
              </div>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>평일 09:00 ~ 21:00</span>
            </div>

            <a href="sms:0507-1320-2245" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', borderRadius: '14px', fontSize: '14px', fontWeight: 700, background: 'transparent', color: '#fff', border: '1px solid #616161', textDecoration: 'none', marginTop: '12px' }}>
              <MessageSquare className="w-4 h-4" /> 문자 문의하기
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
