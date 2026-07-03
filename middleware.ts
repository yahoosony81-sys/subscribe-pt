/**
 * ============================================================
 *  Next.js Middleware — 메타 CAPI PageView 자동 발사
 * ============================================================
 *
 * 동작 방식:
 *  1. 사용자가 지점별 랜딩페이지에 접속 (브라우저 HTML 요청)
 *  2. 미들웨어가 pathname을 감지 → getBranchConfig()로 지점 자동 판별
 *  3. 고유 event_id 생성 → 메타 CAPI 서버로 PageView 신호 전송
 *  4. 응답은 즉시 통과시켜 사용자 로딩 속도에 영향을 주지 않음
 *
 * 새 지점 추가 시:
 *  - lib/meta-capi.ts 의 BRANCH_CONFIG 에 지점 정보 추가
 *  - 아래 matcher 배열에 '/신규경로-:path*' 형식으로 추가
 * ============================================================
 */

import { NextRequest, NextResponse } from 'next/server';
import { getBranchConfig, sendPageViewCAPI } from '@/lib/meta-capi';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // ── 브라우저의 실제 페이지 요청(HTML 탐색)인지 확인 ──
  // Next.js의 JS 청크, 이미지 등 내부 요청은 제외합니다.
  const acceptHeader = request.headers.get('accept') || '';
  const isPageNavigation = acceptHeader.includes('text/html');

  if (!isPageNavigation) {
    return NextResponse.next();
  }

  // ── 지점 설정 자동 판별 ──
  const config = getBranchConfig(pathname);

  if (config) {
    // 고유 event_id 생성 (Web Crypto API — Edge Runtime 호환)
    const eventId = crypto.randomUUID();

    // 사용자 IP 추출 (Vercel 환경에서는 x-forwarded-for 헤더 사용)
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      '';
    const userAgent = request.headers.get('user-agent') || '';

    // 이벤트 소스 URL (전체 URL)
    const eventSourceUrl = request.url;

    // 메타 픽셀 쿠키 (fbp, fbc) 추출
    const fbp = request.cookies.get('_fbp')?.value || '';
    const fbc = request.cookies.get('_fbc')?.value || '';

    // CAPI 전송 (비동기 — 응답 지연 없음)
    // Vercel Edge Runtime은 응답 후에도 pending Promise를 완료시킵니다.
    sendPageViewCAPI({
      config,
      eventSourceUrl,
      clientIp,
      userAgent,
      eventId,
      fbp,
      fbc,
    }).catch((err) =>
      console.error('[CAPI] 미들웨어에서 전송 오류:', err)
    );
  }

  return NextResponse.next();
}

// ──────────────────────────────────────────────────────────────
//  matcher: 미들웨어를 실행할 경로 패턴
//  새 지점 추가 시 여기에도 패턴을 추가하세요.
// ──────────────────────────────────────────────────────────────
export const config = {
  matcher: [
    // 한림점 랜딩
    '/hl-:path*',
    // 노형점 랜딩
    '/nh-:path*',
    // 제주 노형 케어멤버십 랜딩
    '/caremembership-jejusi:path*',
    // 한림 케어멤버십 랜딩
    '/caremembership-hallim:path*',
    // 도남점 랜딩
    '/dn-:path*',
    // 도남점 바디챌린지
    '/promo-bodychallenge:path*',
    // 부산명지점 랜딩
    '/mg-:path*',
    // 천곡점 랜딩 (새 지점 — 픽셀 ID는 .env의 CG_PIXEL_ID 설정 후 활성화)
    '/cg-:path*',
    // 리마인드스트레칭 마곡점
    '/remindstretching-MG:path*',
  ],
};
