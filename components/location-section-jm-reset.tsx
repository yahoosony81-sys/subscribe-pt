"use client"

import Image from "next/image"

export function LocationSectionJmReset() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            Location
          </span>
          <h2 className="mb-6 text-balance text-3xl font-bold text-foreground md:text-4xl">
            리셋중문점
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            편리한 접근성과 쾌적한 시설로 여러분을 기다립니다
          </p>
        </div>

        {/* Map and Info */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/map-location.jpg"
              alt="리셋중문점 위치"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-primary p-4 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">주소</h3>
                  <p className="text-muted-foreground mb-3">
                    제주 특별자치도 서귀포시 대포중앙로 6-8 3층, 리셋중문점
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a 
                      href="https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EB%8C%80%ED%8F%AC%EC%A4%91%EC%95%99%EB%A1%9C%206-8%203%EC%B8%B5/place/2058980846?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=%2Fhome%3FfromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607141452%26locale%3Dko%26svcName%3Dmap_pcv5%26searchText%3D%EC%A0%9C%EC%A3%BC%20%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EB%8C%80%ED%8F%AC%EC%A4%91%EC%95%99%EB%A1%9C%206-8%203%EC%B8%B5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FEE500] border border-black text-black font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#FEE500]/90 transition-colors inline-block"
                    >
                      지점 위치 보기
                    </a>
                    <a 
                      href="https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EB%8C%80%ED%8F%AC%EC%A4%91%EC%95%99%EB%A1%9C%206-8%203%EC%B8%B5/place/2058980846?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=%2Fphoto%3FfromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607141452%26locale%3Dko%26svcName%3Dmap_pcv5%26searchText%3D%EC%A0%9C%EC%A3%BC%20%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EB%8C%80%ED%8F%AC%EC%A4%91%EC%95%99%EB%A1%9C%206-8%203%EC%B8%B5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FEE500] border border-black text-black font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#FEE500]/90 transition-colors inline-block"
                    >
                      지점 내부 둘러보기
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">전화번호</h3>
                  <p className="text-muted-foreground">0507-1393-1529</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">운영시간</h3>
                  <div className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <span className="inline-block w-16 shrink-0 rounded bg-primary/10 px-2 py-0.5 text-center text-xs font-semibold text-primary">평 일</span>
                      <div>
                        <p className="font-medium text-foreground">09:00 - 20:30</p>
                        <p className="text-xs text-muted-foreground/80 mt-0.5">휴게시간: 11:00 - 17:30</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-16 shrink-0 rounded bg-muted px-2 py-0.5 text-center text-xs font-semibold text-muted-foreground">토 · 일</span>
                      <p className="font-medium text-foreground">정기휴무</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parking */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">주차안내</h3>
                  <p className="text-muted-foreground">
                    건물 주변 주차가능
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
