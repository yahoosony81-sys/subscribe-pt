"use client"

import Image from "next/image"

export function LocationSectionHallim() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            Location
          </span>
          <h2 className="mb-6 text-balance text-3xl font-bold text-foreground md:text-4xl">
            마인드 휘트니스 한림점
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            편리한 접근성과 쾌적한 시설로<br /> 여러분을 기다립니다
          </p>
        </div>

        {/* Map and Info */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/map-location.jpg"
              alt="마인드 휘트니스 한림점 위치"
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
                    제주 제주시 한림읍 한림남1길 3
                    <br />
                    상두거리 몽돌스테이 3층
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://map.naver.com/p/search/%EB%A7%88%EC%9D%B8%EB%93%9C%ED%9C%98%ED%8A%B8%EB%8B%88%EC%8A%A4/place/1549272067?c=15.00,0,0,0,dh&placePath=/home?bk_query=%EB%A7%88%EC%9D%B8%EB%93%9C%ED%9C%98%ED%8A%B8%EB%8B%88%EC%8A%A4&entry=bmp&from=map&fromPanelNum=2&timestamp=202605201651&locale=ko&svcName=map_pcv5&searchText=%EB%A7%88%EC%9D%B8%EB%93%9C%ED%9C%98%ED%8A%B8%EB%8B%88%EC%8A%A4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FEE500] border-2 border-black text-black font-black text-sm px-4 py-2.5 rounded-lg hover:bg-[#FACC15] transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      지점위치 보기
                    </a>
                    <a 
                      href="https://map.naver.com/p/search/%EB%A7%88%EC%9D%B8%EB%93%9C%ED%9C%98%ED%8A%B8%EB%8B%88%EC%8A%A4/place/1549272067?c=15.00,0,0,0,dh&placePath=/photo?bk_query=%EB%A7%88%EC%9D%B8%EB%93%9C%ED%9C%98%ED%8A%B8%EB%8B%88%EC%8A%A4&entry=bmp&fromPanelNum=2&timestamp=202605201651&locale=ko&svcName=map_pcv5&searchText=%EB%A7%88%EC%9D%B8%EB%93%9C%ED%9C%98%ED%8A%B8%EB%8B%88%EC%8A%A4&entry=bmp&from=map&fromPanelNum=2&timestamp=202605201651&locale=ko&svcName=map_pcv5&searchText=%EB%A7%88%EC%9D%B8%EB%93%9C%ED%9C%98%ED%8A%B8%EB%8B%88%EC%8A%A4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FEE500] border-2 border-black text-black font-black text-sm px-4 py-2.5 rounded-lg hover:bg-[#FACC15] transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                      센터 내부 둘러보기
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
                  <p className="text-muted-foreground">0507-1320-2245</p>
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
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="inline-block w-24 rounded bg-primary/10 px-2 py-0.5 text-center text-xs font-medium text-primary">평일</span>
                      <span>06:00 ~ 24:00</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="inline-block w-24 rounded bg-primary/10 px-2 py-0.5 text-center text-xs font-medium text-primary">토요일</span>
                      <span>08:00 ~ 20:00</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="inline-block w-24 rounded bg-primary/10 px-2 py-0.5 text-center text-xs font-medium text-primary">일요일/공휴일</span>
                      <span>10:00 ~ 18:00</span>
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
                    건물 외부 주변 주차 가능 (30대)
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
