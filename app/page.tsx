/**
 * ============================================================
 * 📄 메인 랜딩 페이지 (page.tsx)
 * ============================================================
 * 
 * 📐 페이지 구조:
 *   1. PromotionTabs - 탭 메뉴 + 프로모션 A/B/C 컨테이너
 *   2. LocationSection - 매장 위치 (공통, 모든 탭에서 보임)
 *   3. RegistrationSection - 상담 신청 폼 (공통, 모든 탭에서 보임)
 *   4. Footer - 하단 푸터 (공통, 모든 탭에서 보임)
 * 
 * 🔄 콘텐츠 교체 방법:
 *   - 프로모션 탭 내용 수정: components/promotions/ 폴더의 각 파일 수정
 *   - 탭 추가/삭제: components/promotions/promotion-tabs.tsx 의 tabs 배열 수정
 *   - 공통 섹션 수정: 각 컴포넌트 파일 직접 수정
 * ============================================================
 */

import { redirect } from "next/navigation"

export default function Home() {
  // 사용자가 메인 도메인으로 접속하면 자동으로 리마인드스트레칭 마곡점으로 이동시킵니다.
  redirect("/remindstretching-MG")
}
