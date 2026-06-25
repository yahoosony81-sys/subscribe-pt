# 📊 마인드휘트니스 구글 시트 연결 정보 (Apps Script URL)

각 지점 및 프로모션 랜딩페이지별로 연결된 구글 시트(Apps Script Web App URL) 목록과 연결 방법 매뉴얼입니다.

---

## ✅ 현재 연결 현황 (최종 확정)

| 랜딩페이지 URL | 구글 시트 탭 이름 | 웹앱 URL (끝 6자리) |
|:---|:---|:---|
| `/hl-caremembership` | `한림점케어멤버십` | `...R_UE/exec` |
| `/hl-burning-caremember` | `한림점버닝케어` | `...PH4j/exec` |
| `/nh-caremembership` | `노형점케어멤버십` | `...Q238/exec` |
| `/nh-burning-care` | `노형점버닝케어` | `...YH5p/exec` |
| `/nh-pain-membership` | `노형점통증케어` | `...qxy-/exec` |
| `/promo-bodychallenge` | `도남점바디챌린지` | `...ya9W/exec` |
| `/dn-group-pt` | `도남점그룹pt` | `...beG/exec` |
| `/remindstretching-MG` | `리마인드스트레칭마곡점` | `...WDLw/exec` |

---

## 🤖 새 랜딩페이지 구글 시트 연결 자동화 절차

> 새 랜딩페이지를 만든 후, AI에게 아래 정보만 알려주면 즉시 코드를 수정해 드립니다.

### AI에게 알려줄 정보 (2가지만!)
```
1. 랜딩페이지 주소: mindfitness.com/[페이지명]
2. 연결할 구글 시트 탭 이름: [탭이름] (띄어쓰기 포함 정확하게)
3. 웹앱 URL: https://script.google.com/macros/s/.../exec
```

### AI가 자동으로 처리하는 내용
해당 `app/[페이지명]/page.tsx` 파일에서 `<RegistrationSection... />` 컴포넌트에
`googleSheetUrl`과 `sheetName` 두 속성을 자동으로 추가합니다.

**적용 결과 예시 (한림점 계열):**
```tsx
<RegistrationSectionHallim
  googleSheetUrl="https://script.google.com/macros/s/.../exec"
  sheetName="구글시트탭이름"   // 기존에 만들어둔 탭 이름과 정확히 일치해야 함
/>
```

**적용 결과 예시 (노형점 계열):**
```tsx
<RegistrationSectionNohyeong
  googleSheetUrl="https://script.google.com/macros/s/.../exec"
  sheetName="구글시트탭이름"
/>
```

---

## 🛠️ 구글 시트 웹앱 URL 신규 발급 방법

> 새 구글 시트를 연결해야 할 때 1회만 진행하는 작업입니다.

1. 연결할 **구글 시트를 먼저 열고** (기존 시트여도 무방)
2. 상단 메뉴 **[확장 프로그램] → [Apps Script]** 클릭
3. 기존 코드 전부 지우고 아래 **`doPost` 코드** 붙여넣기 후 저장(Ctrl+S)
4. **[배포] → [새 배포]** 클릭 → 톱니바퀴 → **'웹 앱'** 선택
5. **필수 설정:**
   - 다음 사용자로서 실행: **나 (본인 계정)**
   - 액세스 권한: **모든 사용자 (Anyone)**
6. [배포] 클릭 → 표시되는 **웹 앱 URL** 복사

### 📝 Apps Script 표준 코드 (항상 이 코드를 사용할 것!)
```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var timestamp = data.timestamp || new Date().toISOString();
    var branch = data.branch || '';

    // 프론트엔드에서 보낸 sheetName으로 기존 탭을 찾아서 데이터를 넣음
    var targetSheetName = data.sheetName || branch || '시트1';

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName(targetSheetName);

    // 해당 이름의 탭이 없을 경우에만 새로 생성 (있으면 기존 탭 사용)
    if (!sheet) {
      sheet = spreadsheet.insertSheet(targetSheetName);
      sheet.appendRow(["접수시간", "지점명", "이름", "연락처", "희망방문시간", "문의사항", "방문경로"]);
    }

    var name = data.name || '';
    var phone = data.phone || '';
    var preferredTime = data.preferredTime || '';
    var message = data.message || '';
    var visitSource = data.visitSource || '';

    sheet.appendRow([timestamp, branch, name, phone, preferredTime, message, visitSource]);

    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "data": data }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## 📋 지점별 신청폼 컴포넌트 파일 위치

| 지점 | 신청폼 컴포넌트 파일 |
|:---|:---|
| 한림점 | `components/registration-section-hallim.tsx` |
| 노형점 | `components/registration-section-nohyeong.tsx` |
| 명지점 | `components/registration-section-myeongji.tsx` |
| 도남점 그룹PT | `components/registration-section-dn-group-pt.tsx` |
| 도남점 바디챌린지 | `components/registration-section-bodychallenge.tsx` |
