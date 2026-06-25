import { getPixelInfoByPath } from '@/utils/pixelConfig';

export type BranchConfig = {
  pixelId: string;
  accessToken: string;
  branchName: string;
};

// ──────────────────────────────────────────────────────────────
//  지점별 액세스 토큰 매핑 테이블
//  픽셀 ID는 utils/pixelConfig.ts 에서 중앙 관리합니다.
//
//  새 지점 추가 시:
//    1. utils/pixelConfig.ts BRANCH_PIXELS 에 픽셀 정보 추가
//    2. .env 에 XX_ACCESS_TOKEN=... 추가
//    3. 아래 TOKEN_MAP 에 urlPrefix → envKey 추가
//    4. proxy.ts matcher 배열에 경로 추가
// ──────────────────────────────────────────────────────────────
const TOKEN_MAP: Array<{ prefixes: string[]; tokenEnvKey: string; name: string }> = [
  { prefixes: ['/hl-'],                         tokenEnvKey: 'HL_ACCESS_TOKEN', name: '한림점' },
  { prefixes: ['/nh-'],                         tokenEnvKey: 'NH_ACCESS_TOKEN', name: '노형점' },
  { prefixes: ['/dn-', '/promo-bodychallenge'], tokenEnvKey: 'DN_ACCESS_TOKEN', name: '도남점' },
  { prefixes: ['/mg-'],                         tokenEnvKey: 'MG_ACCESS_TOKEN', name: '부산명지점' },
  { prefixes: ['/cg-'],                         tokenEnvKey: 'CG_ACCESS_TOKEN', name: '천곡점' },
  { prefixes: ['/remindstretching-MG'],         tokenEnvKey: 'RM_ACCESS_TOKEN', name: '리마인드스트레칭 마곡점' },
];


/**
 * URL pathname을 기반으로 지점 설정을 반환합니다.
 * 픽셀 ID는 utils/pixelConfig.ts, 액세스 토큰은 .env에서 가져옵니다.
 * 매핑되지 않는 경로는 null을 반환합니다.
 */
export function getBranchConfig(pathname: string): BranchConfig | null {
  // 픽셀 ID 조회 (utils/pixelConfig.ts 중앙 관리)
  const pixelInfo = getPixelInfoByPath(pathname);
  if (!pixelInfo) return null;

  // 액세스 토큰 조회 (TOKEN_MAP → .env)
  const tokenEntry = TOKEN_MAP.find((entry) =>
    entry.prefixes.some((prefix) => pathname.startsWith(prefix))
  );
  if (!tokenEntry) return null;

  const accessToken = process.env[tokenEntry.tokenEnvKey] || '';
  if (!accessToken) {
    console.warn(`[CAPI] ${tokenEntry.name}: 액세스 토큰(${tokenEntry.tokenEnvKey})이 .env에 없습니다.`);
    return null;
  }

  return {
    pixelId: pixelInfo.pixelId,
    accessToken,
    branchName: pixelInfo.nameKo,
  };
}


/**
 * 메타 CAPI를 통해 PageView 이벤트를 서버에서 직접 전송합니다.
 *
 * @param config      - getBranchConfig()로 얻은 지점 설정
 * @param eventSourceUrl - 사용자가 실제로 접근한 전체 URL
 * @param clientIp    - 사용자 IP (헤더에서 추출)
 * @param userAgent   - 사용자 브라우저 UA
 * @param eventId     - GTM 픽셀과 중복 제거를 위한 고유 이벤트 ID
 *                      브라우저 픽셀 측에도 동일한 event_id를 실어야 dedup 됩니다.
 */
export async function sendPageViewCAPI({
  config,
  eventSourceUrl,
  clientIp,
  userAgent,
  eventId,
}: {
  config: BranchConfig;
  eventSourceUrl: string;
  clientIp?: string;
  userAgent?: string;
  eventId: string;
}): Promise<void> {
  const { pixelId, accessToken, branchName } = config;

  const payload = {
    data: [
      {
        event_name: 'PageView',
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: eventSourceUrl,
        action_source: 'website',
        user_data: {
          // IP와 UA를 포함하면 메타의 매칭 품질이 향상됩니다.
          client_ip_address: clientIp || '',
          client_user_agent: userAgent || '',
        },
      },
    ],
  };

  const apiUrl = `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[CAPI] PageView 전송 실패 (${branchName}) [HTTP ${response.status}]:`, errorText);
    } else {
      console.log(`[CAPI] ✅ PageView 전송 성공 | 지점: ${branchName} | event_id: ${eventId}`);
    }
  } catch (err) {
    console.error(`[CAPI] 네트워크 오류 (${branchName}):`, err);
  }
}
