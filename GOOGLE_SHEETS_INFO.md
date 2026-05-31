# 📊 마인드휘트니스 구글 시트 연결 정보 (Apps Script URL)

각 지점 및 프로모션 랜딩페이지별로 연결된 구글 시트(Apps Script Web App URL) 목록과 연결 방법 매뉴얼입니다.

---

## 🔗 현재 연결된 구글 시트 URL 목록

### 📍 한림점 (Hallim)
* **한림점 공통 (기본)**
  * URL: `https://script.google.com/macros/s/AKfycbwJJ9exLHsiL3-QvOk7RmOhqqo2sqaeBZ9rju4j04AWolAHVLDPCM7eeh3sUXVe4FKo/exec`
  * 위치: `components/registration-section-hallim.tsx`
* **버닝 케어 전용 (`hl-burning-caremember`)**
  * URL: `https://script.google.com/macros/s/AKfycbwU7KLOJ8lko7i0KE8KLXY3X1CEGXeB4ONf9-8uYTGL3YrM_4oPIbcOD4IgyFdp_MJ4/exec`
  * 위치: `app/hl-burning-caremember/page.tsx` (`googleSheetUrl` 속성으로 분리)

### 📍 노형점 (Nohyeong)
* **노형점 공통 (기본)**
  * URL: `https://script.google.com/macros/s/AKfycbxVhINsDHa7tyKQjEes8DQ_Kyri3umEV5A1wjS9MxmC5mV5zxVCUFi9ZYUXJV4jzrAH/exec`
  * 위치: `components/registration-section-nohyeong.tsx`

### 📍 부산명지점 (Myeongji)
* **명지점 공통 (기본)**
  * ⚠️ *현재 한림점 공통 주소와 동일하게 세팅되어 있으니 추후 분리가 필요합니다.*
  * URL: `https://script.google.com/macros/s/AKfycbwJJ9exLHsiL3-QvOk7RmOhqqo2sqaeBZ9rju4j04AWolAHVLDPCM7eeh3sUXVe4FKo/exec`
  * 위치: `components/registration-section-myeongji.tsx`

### 📍 도남점 (Donam)
* **그룹PT 오픈 프로모션**
  * URL: `https://script.google.com/macros/s/AKfycbyWfEcYQ3euuDwj2aSHjpND-ZdWTPLkEQviN4bqi_CypJCHMSsuWzXU2ron9CSFFEsh/exec`
  * 위치: `components/registration-section-dn-group-pt.tsx`

### 📍 통합/기타 프로모션
* **바디챌린지**
  * URL: `https://script.google.com/macros/s/AKfycbwz_HpGHEDD3D0rK3dAqf5QupFf1bCpmnCT_YcJV8JP7GdN8IIRrRdBun3in-13aX2r/exec`
  * 위치: `components/registration-section-bodychallenge.tsx`
* **기타/테스트용 공통**
  * URL: `https://script.google.com/macros/s/AKfycbzfAMUkKIeoSrv8sIDZMO6SoviFwEbaS9ma4TxVsRE6v9Ej-rBDEFEK6hGAraLmenDe/exec`
  * 위치: `components/registration-section.tsx`

---

## 🛠️ 새로운 구글 시트 연결 매뉴얼 (직접 수정하는 법)

### 1단계: 새로운 구글 시트 URL 발급받기
1. 새로 데이터를 받을 **구글 시트를 새로 생성**합니다.
2. 상단 메뉴에서 **[확장 프로그램] -> [Apps Script]**를 클릭합니다.
3. 기존 코드를 지우고 아래의 **`doPost` 코드**를 붙여넣고 저장(Ctrl+S)합니다.
4. 우측 상단 **[배포] -> [새 배포]**를 클릭합니다.
5. 톱니바퀴 아이콘을 눌러 **'웹 앱'**을 선택합니다.
6. **[중요 설정]**
   * 다음 사용자로서 실행: **나 (본인 계정)**
   * 액세스 권한이 있는 사용자: **모든 사용자 (Anyone)**
7. [배포] 버튼을 누르고 나타나는 **'웹 앱 URL'**을 복사합니다.

#### 📝 Apps Script (doPost) 코드
```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var timestamp = data.timestamp || new Date().toISOString();
    var branch = data.branch || '';
    
    // 프론트엔드에서 보낸 탭 이름(sheetName)이 있으면 사용, 없으면 branch 이름, 둘 다 없으면 '시트1' 사용
    var targetSheetName = data.sheetName || branch || '시트1';
    
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName(targetSheetName);
    
    // 만약 해당 이름의 탭(시트)이 존재하지 않으면 새로 생성합니다.
    if (!sheet) {
      sheet = spreadsheet.insertSheet(targetSheetName);
      // (선택) 새 탭이 만들어질 때 첫 번째 줄에 헤더(제목) 자동 추가
      sheet.appendRow(["접수시간", "지점명", "이름", "연락처", "희망방문시간", "문의사항", "방문경로"]);
    }
    
    var name = data.name || '';
    var phone = data.phone || '';
    var preferredTime = data.preferredTime || '';
    var message = data.message || '';
    var visitSource = data.visitSource || '';
    
    // 선택된 탭(시트)에 새 행으로 데이터 추가
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
```

### 2단계: 코드(VS Code)에 복사한 주소 적용하기

원하는 목적에 따라 두 가지 방법 중 하나를 선택하세요.

**A. 특정 랜딩페이지만 별도의 시트로 분리할 때 (추천)**
분리하고 싶은 페이지의 `page.tsx` 파일(예: `app/hl-burning-caremember/page.tsx`)을 열고 `<RegistrationSection... />` 컴포넌트에 `googleSheetUrl` 속성을 추가합니다.
```tsx
<RegistrationSectionHallim 
  title="케어 멤버십 체험 신청" 
  googleSheetUrl="새로_발급받은_웹앱_URL"
/>
```

**B. 지점 전체의 기본 시트 주소를 교체할 때**
`components` 폴더 안의 폼 컴포넌트 파일(예: `registration-section-nohyeong.tsx`)을 열고, 코드 내의 `GOOGLE_SHEETS_URL` 변수를 찾아 교체합니다.
```typescript
const GOOGLE_SHEETS_URL = "새로_발급받은_웹앱_URL" 
```
