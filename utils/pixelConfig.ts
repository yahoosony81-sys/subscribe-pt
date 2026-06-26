/**
 * ============================================================
 *  지점별 메타 픽셀 ID 통합 관리 파일
 * ============================================================
 *
 *  이 파일 하나에서 모든 지점의 픽셀 ID를 관리합니다.
 *  - gtm-provider.tsx (브라우저 픽셀)
 *  - lib/meta-capi.ts (서버 사이드 CAPI)
 *  두 곳 모두 이 파일에서 값을 가져옵니다.
 *
 *  새 지점 추가 방법:
 *   1. BRANCH_PIXELS 에 지점 정보 1개 추가
 *   2. .env 에 XX_ACCESS_TOKEN=... 추가
 *   3. lib/meta-capi.ts BRANCH_CONFIG 에 tokenEnvKey 연결
 *   4. proxy.ts matcher 배열에 경로 추가
 * ============================================================
 */

// ──────────────────────────────────────────────────────────────
//  지점별 픽셀 정보 정의
// ──────────────────────────────────────────────────────────────
export type BranchPixelInfo = {
  /** 메타 픽셀 고유 ID */
  pixelId: string;
  /** 지점 한글 이름 */
  nameKo: string;
  /** 지점 영문 코드 (URL prefix와 동일) */
  code: string;
  /** 해당 지점 랜딩페이지 URL prefix 목록 */
  urlPrefixes: string[];
};

export const BRANCH_PIXELS: BranchPixelInfo[] = [
  {
    pixelId: '931401023110366',
    nameKo: '한림점',
    code: 'hl',
    urlPrefixes: ['/hl-'],
  },
  {
    pixelId: '891686733924318',
    nameKo: '노형점',
    code: 'nh',
    urlPrefixes: ['/nh-'],
  },
  {
    pixelId: '26658899260438637',
    nameKo: '도남점',
    code: 'dn',
    urlPrefixes: ['/dn-', '/promo-bodychallenge'],
  },
  {
    pixelId: '1496854795228095',
    nameKo: '부산명지점',
    code: 'mg',
    urlPrefixes: ['/mg-'],
  },

  {
    pixelId: '2040091883572538',
    nameKo: '리마인드스트레칭 마곡점',
    code: 'rm',
    urlPrefixes: ['/remindstretching-MG'],
  },
];

// ──────────────────────────────────────────────────────────────
//  픽셀 조회 헬퍼 함수
// ──────────────────────────────────────────────────────────────

/**
 * URL pathname 기반으로 지점 픽셀 정보를 반환합니다.
 * @example getPixelInfoByPath('/hl-caremembership') → { pixelId: '931401023110366', ... }
 */
export function getPixelInfoByPath(pathname: string): BranchPixelInfo | undefined {
  return BRANCH_PIXELS.find((branch) =>
    branch.urlPrefixes.some((prefix) => pathname.startsWith(prefix))
  );
}

/**
 * 지점 영문 코드로 픽셀 정보를 반환합니다.
 * @example getPixelInfoByCode('hl') → { pixelId: '931401023110366', ... }
 */
export function getPixelInfoByCode(code: string): BranchPixelInfo | undefined {
  return BRANCH_PIXELS.find((branch) => branch.code === code.toLowerCase());
}

/**
 * 지점 영문 코드로 픽셀 ID만 반환합니다. (하위 호환용)
 * @example getPixelId('hl') → '931401023110366'
 */
export function getPixelId(code: string): string | undefined {
  return getPixelInfoByCode(code)?.pixelId;
}

// ──────────────────────────────────────────────────────────────
//  빠른 참조용 요약 (코드에서 직접 사용 가능)
// ──────────────────────────────────────────────────────────────
//
//  지점명        | 영문코드 | 픽셀 ID
//  -------------|---------|------------------
//  한림점        | hl      | 931401023110366
//  노형점        | nh      | 891686733924318
//  도남점        | dn      | 26658899260438637
//  부산명지점    | mg      | 1496854795228095

//  리마인드마곡  | rm      | 2040091883572538
//
