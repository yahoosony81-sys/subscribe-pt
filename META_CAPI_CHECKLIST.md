# Meta CAPI(Conversions API) 이벤트 연동 필수 체크리스트

새로운 랜딩페이지를 제작하거나 폼 제출 로직을 구현할 때, 메타(Meta) 전환 이벤트가 누락되거나 광고 성과에 집계되지 않는 현상을 방지하기 위해 다음 사항을 반드시 확인해야 합니다.

## 1. 🎯 광고 세트의 '전환 이벤트' 이름 일치 여부 확인 (가장 중요)
메타 광고 관리자(Ads Manager)에서 목표로 설정한 전환 이벤트와 실제 코드(프론트엔드/서버)에서 쏘는 이벤트 이름이 **정확히 매칭**되어야 성과가 정상적으로 집계됩니다.

* **요청 제출** ➔ `SubmitApplication`
* **잠재 고객** ➔ `Lead`
* **위치 찾기** ➔ `FindLocation`
* **등록 완료** ➔ `CompleteRegistration`
* **구매** ➔ `Purchase`

**체크포인트:**
- [ ] 메타 광고 세트에 설정된 전환 이벤트가 무엇인지(ex. 요청 제출) 사용자에게 확인했는가?
- [ ] 코드의 `fbq('track', '이벤트명')` 및 `fetch('/api/capi', { eventName: '이벤트명' })`에 들어가는 값이 위 전환 이벤트와 정확히 일치하는가?

## 2. ⚡ 픽셀(클라이언트)과 CAPI(서버) 양방향 동시 전송 (필수!)

> **🚨 모든 이벤트는 반드시 브라우저 픽셀 + 서버사이드 CAPI 양쪽 모두 전송해야 합니다!**
> iOS 14+ 사용자는 Safari가 브라우저 픽셀을 차단할 수 있어, 서버사이드 CAPI 없이는 전환이 누락됩니다.

- [ ] 브라우저 픽셀(`fbq`)과 서버사이드 이벤트(`/api/capi`) 두 가지 경로로 모두 동일한 이벤트 이름이 전송되도록 구현되었는가?
- [ ] `eventId`를 `crypto.randomUUID()`로 생성하여 **양쪽 모두에 동일한 값**을 전달하고 있는가? (중복 제거 핵심!)

### 📌 eventId 중복 제거(Deduplication) 원리
Meta는 **같은 `event_id` + 같은 `event_name`** 조합이 48시간 내에 들어오면 자동으로 **1건으로 합산**합니다.

| 상황 | 브라우저 픽셀 | 서버 CAPI | Meta 집계 |
|------|:---:|:---:|:---:|
| 일반 안드로이드/PC 사용자 | ✅ 도착 | ✅ 도착 | **1건** (eventId로 중복 제거) |
| iOS 사용자 (픽셀 차단) | ❌ 차단 | ✅ 도착 | **1건** (서버만 집계) |
| 네트워크 오류로 CAPI 실패 | ✅ 도착 | ❌ 실패 | **1건** (픽셀만 집계) |

### 📋 양방향 전송 코드 템플릿

버튼 클릭 이벤트용 (Lead, FindLocation 등):
```typescript
const handleButtonClick = () => {
  const eventId = crypto.randomUUID();

  // 1. 브라우저 픽셀
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', '이벤트명', {}, { eventID: eventId });
  }

  // 2. 서버사이드 CAPI
  fetch('/api/capi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventName: '이벤트명',
      pathname: window?.location?.pathname || '',
      eventSourceUrl: window?.location?.href || '',
      eventId,
    }),
  }).catch(err => console.error('CAPI Error:', err));
}
```

폼 제출 이벤트용 (SubmitApplication 등 — 전화번호/이름 포함):
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const eventId = crypto.randomUUID();

  // 1. 브라우저 픽셀
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'SubmitApplication', {}, { eventID: eventId });
  }

  // 2. 서버사이드 CAPI (전화번호/이름 포함 → 서버에서 SHA256 해싱)
  fetch('/api/capi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventName: 'SubmitApplication',
      pathname: window?.location?.pathname || '',
      eventSourceUrl: window?.location?.href || '',
      phone: formData.phone,
      name: formData.name,
      eventId,
    }),
  }).catch(err => console.error('CAPI Error:', err));

  // 3. 이후 구글 시트 전송 등 나머지 로직...
}
```

## 3. 🚀 이벤트 트리거 타이밍 (이탈 방지)
- [ ] 구글 시트 등 외부 API로 데이터를 전송(`await fetch(...)`)하기 직전, 혹은 '체험예약 완료 땡큐카드'가 뜨기 **전에 가장 먼저** 비동기로 이벤트 전송 로직이 실행되는가?
- [ ] 폼의 필수값이 모두 채워져 검증이 끝난 후 버튼을 클릭하는 시점에 즉시 이벤트가 트리거되는가?

## 4. 🔑 CAPI 자격 증명 확인
- [ ] `/api/capi` 엔드포인트에서 활용되는 환경변수(픽셀 ID, 액세스 토큰)가 해당 지점 또는 브랜드의 메타 비즈니스 계정과 올바르게 연결되어 있는지 확인했는가?

## 5. 📊 현재 구현된 이벤트 현황 (도남 7월 프로모션 기준)

| 버튼 | 이벤트명 | 브라우저 픽셀 | 서버 CAPI | eventId 중복제거 | 파일 |
|------|---------|:---:|:---:|:---:|------|
| 연간회원권 신청하고 PT 2회 무료로 받기 | `Lead` | ✅ | ✅ | ✅ | `donam-july-promo-landing.tsx` |
| 그룹수업 체험신청하기 | `Lead` | ✅ | ✅ | ✅ | `donam-july-promo-landing.tsx` |
| 지점위치보기 | `FindLocation` | ✅ | ✅ | ✅ | `location-section-dn-group-pt.tsx` |
| 지점 내부 둘러보기 | `FindLocation` | ✅ | ✅ | ✅ | `location-section-dn-group-pt.tsx` |
| 신청폼 제출하기 | `SubmitApplication` | ✅ | ✅ | ✅ | `registration-section-donam.tsx` |

