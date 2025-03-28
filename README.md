# 🍺 alcoholstop ✋  
**절주온 메인페이지 클론코딩 프로젝트**

[👉 원본 사이트 바로가기](https://www.khepi.or.kr/alcoholstop)

---

## 📚 목차

- [📝 프로젝트 소개](#-프로젝트-소개)
- [👨‍👩‍👧‍👦 팀 소개](#-팀-소개)
- [👥 역할 분담 상세](#-역할-분담-상세)
- [⏳ 진행 과정](#-진행-과정)
- [📸 최종 구현 결과 비교](#-최종-구현-결과-비교)
- [🛠 Git & 협업 컨벤션](#-git--협업-컨벤션)

---

## 📝 프로젝트 소개

**'절주온(alcoholstop)' 웹사이트의 메인 페이지를 클론코딩**하며, 웹 퍼블리싱의 기본기와 반응형 웹 제작 능력을 향상시키는 데에 목적이 있습니다.

#### 🔍 실제 사이트 구성 미리보기 (구현 목표)

| 📌 팝업 버전<br/><sub>첫 접속 시 팝업 등장</sub> | 📌 일반 메인 화면<br/><sub>팝업 비활성화 상태</sub> | 📌 메뉴 확장 상태<br/><sub>드롭다운 메뉴 활성화</sub> |
|:--:|:--:|:--:|
| <img src="https://github.com/user-attachments/assets/4d079378-3e97-40b5-8347-b84e31edfc48" width="300"/> | <img src="https://github.com/user-attachments/assets/b50c3add-c7df-42a9-bdf6-97c70040952f" width="300"/> | <img src="https://github.com/user-attachments/assets/97a58fcf-c3e8-4342-971e-8ede91db158e" width="300"/> |

### 🎯 목표
- 강의에서 배운 레이아웃, 반응형, 속성에 대한 이해 및 응용
- 실제 사이트를 참고하여 구조적으로 HTML/CSS 설계하기
- 반응형 웹사이트 제작 및 미디어쿼리 적용
- 팝업, 햄버거 메뉴 등 기본 JavaScript 기능 구현

### 🛠 사용 기술
- HTML5
- CSS3
- JavaScript (Vanilla)
- 미디어쿼리 (Responsive Web)

### 🗓 제작 기간
- **2025년 3월 10일 (월) ~ 2025년 3월 28일 (금)**  
총 3주간 진행

---

## 👨‍👩‍👧‍👦 팀 소개

### 진짜 기깔난 스터디 (진기스) 
> 멋진 절주온 클론코딩 프로젝트를 함께한 팀원들을 소개합니다.
>
> 🔗 [팀 Notion](https://www.notion.so/KB-1ae8e00bf3c680589974dea284901f44) | 🔗 [팀 Github](https://github.com/JGStudy)

| 이름 | 역할 | GitHub |
|------|------|--------|
| 🥊김윤지 [팀장] | Main | [@kkamisister](https://github.com/kkamisister) |
| 🔧김하연 | Header, 팝업 | [@rlaxhfn](https://github.com/rlaxhfn) |
| 🥕사윤민 | Header | [@saym010116](https://github.com/saym010116) |
| 🦕조혜련 | Header | [@HyeEmpathyDev](https://github.com/HyeEmpathyDev) |
| 🐰김려린 | Main | [@ryeorin](https://github.com/ryeorin) |
| 🐶유상은 | Main | [@sangeune](https://github.com/sangeune) |
| 🕊️황선주 | Footer | [@seonju21](https://github.com/seonju21) |

---

## 👥 역할 분담 상세

>### 🔧김하연
**1. Header 전체 메뉴 구현**
- 전체메뉴(☰) 관련 기능
   - 전체 메뉴 Close 버튼(x) 호버 시 transform 효과 적용
   - 햄버거 버튼(☰) 클릭 시 전체 메뉴를 열거나 닫는 기능 구현
   - 전체 메뉴가 show 상태일 때, scrollFixed 클래스를 추가하여 페이지 스크롤을 막음

**2. Popup 구현**
- 팝업창 Default 관련 기능
   - 웹페이지 실행 시 팝업창이 자동으로 나타나도록 설정
   - 팝업창이 show 상태일 때, scrollFixed 클래스를 추가하여 스크롤을 고정
- 팝업창 닫기 관련 기능
   - Close 버튼(x) 호버 시 transform 효과 적용.
   - Close 버튼(x) 클릭 시 팝업창을 닫고, scrollFixed 클래스를 삭제.
   - "오늘 하루 열지 않기" 버튼 호버 시 아이콘(x)에 transform 효과 적용.
   - "오늘 하루 열지 않기" 버튼 클릭 시 쿠키를 생성.
- 웹페이지 실행 시 쿠키를 확인하여:
    - 쿠키가 있다면 팝업을 닫음.
    - 쿠키가 없다면 팝업을 열음.

- 팝업 콘텐츠 슬라이드 관련 기능
   - Swiper.js를 이용하여 팝업 콘텐츠 슬라이드 구현
   - swiper-slide, autoPlay, 슬라이드 개수(swiper-count-slide) 관련 기능 포함.

**3. Skip Navigation 구현**
- 스킵 메뉴 관련 기능
   - 네비게이션이 focus 상태일 때 나타나도록 설정.

---

>### 🥕사윤민
**1. 헤더 레이아웃 구현**
- 로고, 네비게이션 메뉴, 햄버거 버튼으로 구성된 헤더 영역을 생성

**2. 드롭다운 메뉴 기능 구현 및 스타일링**
- 상위 메뉴에 마우스를 올리면 하위 메뉴가 드롭다운으로 표시되도록 구현
- 항목에 마우스를 올릴 시 글씨 색이 흰색으로 바뀌고, 글씨 크기와 굵기가 강조되도록 처리

**3. 반응형 헤더 구현**
- 화면 너비가 1100px 이하일 경우 네비게이션 메뉴를 숨기고 로고가 축소되도록 반응형 구현

---

>### 🦕조혜련
**1. 사이트 바로가기 메뉴**
- 절주온(ON) 버튼을 클릭 시 관련 사이트 리스트가 토글되며 보여지도록 구현
- 리스트는 외부 사이트 링크로 연결하여 새창으로 열리도록 구현
- 리스트 마우스오버시 메뉴 항목 hover 효과로 색상 변화, 밑줄이 생기도록 구현

**2. 대표 SNS 영역**
- 대표 SNS 버튼 클릭 시, Facebook / Instagram / YouTube / Naver Blog 아이콘 리스트가 토글되도록 구현
- 각 SNS는 브랜드 컬러로 원형 배경 처리
- 마우스 hover 시에는 배경이 흰색으로, 테두리와 아이콘 색상은 원래 컬러로 변경되도록 구현
- 아이콘들은 모두 xeicon 사용

**3. "알콜스탑 캠페인" 버튼**
- 버튼 클릭 시 외부 사이트 링크로 연결하여 알콜스탑 인스타그램 새창으로 열리도록 함

---

>### 🐰김려린
**1. 메인 페이지 센터 구현**
   - 페이지 가운데 캐릭터 배치, 캠페인 관련 텍스트 생성

**2. 반응형 디자인 구현**
   - 미디어 쿼리 사용하여 화면 크기에 따라 요소들의 순서가 조정되도록 반응형 구현

---

>### 🥊김윤지
**1. ‘소통, 이야기를 전해요’ 섹션 레이아웃 및 디자인**  
- 절주온 메인 페이지 중 뉴스 및 소식을 다루는 핵심 콘텐츠 영역 레이아웃 설계  
- 뉴스 대표 콘텐츠 + 요약 리스트의 구조로 정보를 명확하게 전달할 수 있도록 배치
  
**2. 탭 전환 기능 구현 (Vanilla JS)**  
- `addEventListener`를 활용한 탭 전환 로직 구현  
- 각 탭 클릭 시 해당 뉴스 콘텐츠만 노출되도록 `classList.toggle` 방식으로 동적 전환  
- 활성화(active)된 탭에 따라 ‘더보기’ 버튼의 링크가 자동으로 변경되도록 제어하여 UX 향상

**3. 주요사업 영역 레이아웃 구현**  
- 절주온에서 강조하는 주요사업을 아이콘과 텍스트로 시각화  
- 모든 아이템의 크기를 통일하고, 반응형에서도 균형 잡힌 UI를 유지하도록 `flex` 기반 레이아웃 구성  
- 텍스트 줄바꿈 제어 및 hover 시 밑줄 애니메이션을 추가하여 정보 접근성 향상  

---

>### 🐶유상은
**1. 메인 레이아웃 구현**
- 메인 컨텐츠를 중심으로 페이지의 전체적인 구조 설계
- display: flex를 활용하여 요소 배치

**2. 최신 자료 영역 구현**
- 최신 자료 목록을 담는 카드 스타일의 박스를 디자인

**3. 최신 자료 리스트 스타일링**
- display: flex, flex-wrap: wrap을 사용하여 반응형 목록 정렬
- text-overflow: ellipsis를 활용해 긴 제목을 말줄임 처리

**4. 절주 전문 인력 양성과정 바로가기 스타일링**
- 배경색과 border-radius를 사용해 버튼형 UI 구현
- hover 시 화살표 아이콘 애니메이션 효과 (transform: translateX(10px)) 구현

---

>### 🕊️황선주
**1. 유연한 푸터 디자인**
   -  footer-content의 max-width와 margin: 0 auto로 중앙 정렬
   -  flex를 사용해 레이아웃이 반응형으로 잘 유지되도록 구현

**2. 링크와 인터랙션 개선**
   - 링크에 호버 시 색상과 밑줄이 생겨 클릭 가능성을 직관적으로 알 수 있도록 구현
   - 중요한 링크는 다른 색상으로 구분

**3. 웹사이트 선택 기능 구현**
   - 드롭다운 메뉴로 다양한 웹사이트로 이동되도록 구현
   - 메뉴 선택 시 자동으로 해당 사이트로 이동되도록 구현

---

## ⏳ 진행 과정

### ✅ 1차 DUE : **3월 23일**
- HTML / CSS 기본 구조 구현
- header, main, footer 파트 분배 후 각자 구현 진행

### 📸 결과

##### 📌 메인 페이지 (기본)
> 기본 메인 페이지  
<img src="https://github.com/user-attachments/assets/104855ad-dfea-4b6f-9482-cdefca0a6441" width="500"/>

##### 📌 메뉴 확장 상태
> 드롭다운 메뉴 활성화  
<img src="https://github.com/user-attachments/assets/70c4dcb9-6049-4e58-9c04-baf587cf7195" width="500"/>

---

### 🚧 2차 DUE : **3월 28일**
- 미디어쿼리 반응형 적용
- JavaScript 기능 구현
- 팝업 인터랙션 및 세부 디자인 보완  

### 📸 결과

##### 📌 기본 메인 페이지 팝업 구현
> 쿠키 확인 후 팝업 확장
<img src="https://github.com/user-attachments/assets/e29f7830-6551-4f70-bccc-ad8f7d7e3a11" width="500"/>

##### 📌 헤더 메뉴별 js 적용
> 기관 메뉴 드롭다운
<img src="https://github.com/user-attachments/assets/c855761f-a7d6-4b62-9d8d-29ae5f816152" height="350"/>

> 메인 메뉴 드롭다운
<img src="https://github.com/user-attachments/assets/846a1da4-3c7b-40be-a716-51b0277944fd" width="800"/>

> 햄버거 메뉴 확장
<img src="https://github.com/user-attachments/assets/0f050991-0ad8-461e-a150-7059b4e64236" width="500"/>

##### 📌 전체 레이아웃 반응형 구현
> 화면 너비에 따라 반응형 구현
<img src="https://github.com/user-attachments/assets/95771460-95c0-42b2-a1bb-b93df106887c" height="500"/>
<img src="https://github.com/user-attachments/assets/e10c5d37-2580-4e13-b3bc-196ce65dfe26" height="500"/>


---

## 📸 최종 구현 결과 비교

### 🔹 기본 메인 페이지 팝업 구현

| 원본 사이트 | 클론코딩 결과 |
|-------------|----------------|
| <img src="https://github.com/user-attachments/assets/d3132942-053e-4009-b2e2-023f8634df64" width="500" alt="원본 이미지"/> | <img src="https://github.com/user-attachments/assets/e29f7830-6551-4f70-bccc-ad8f7d7e3a11" width="500" alt="클론코딩 결과"/> |

### 🔹 헤더 ~ 메인 페이지

| 원본 사이트 | 클론코딩 결과 |
|-------------|----------------|
| <img src="https://github.com/user-attachments/assets/d99e20a8-fbe1-4858-a737-c7ee3b13790e" width="500" alt="원본 이미지"/> | <img src="https://github.com/user-attachments/assets/5d8669a2-f2eb-4340-a336-cb808f726e2d" width="500" alt="클론코딩 결과"/> |

### 🔹 헤더 햄버거 메뉴 open

| 원본 사이트 | 클론코딩 결과 |
|-------------|----------------|
| <img src="https://github.com/user-attachments/assets/6059c25b-314f-4482-8284-3bc498feb7ab" width="500" alt="원본 이미지"/> | <img src="https://github.com/user-attachments/assets/51f561bb-a331-45a0-b540-8b7a200c5ba9" width="500" alt="클론코딩 결과"/> |

### 🔹 헤더 메뉴 드롭다운

| 원본 사이트 | 클론코딩 결과 |
|-------------|----------------|
| <img src="https://github.com/user-attachments/assets/b74ebe39-927d-4bd1-b6e9-00b7aa074d97" width="500" alt="원본 이미지"/> | <img src="https://github.com/user-attachments/assets/f7419354-3ab0-4762-997e-27017140b6a4" width="500" alt="클론코딩 결과"/> |

### 🔹 헤더 기관 메뉴 드롭다운

| 원본 사이트 | 클론코딩 결과 |
|-------------|----------------|
| <img src="https://github.com/user-attachments/assets/1cdf7d61-6609-4f60-b344-ce98f32b1519" width="300" alt="원본 이미지"/> | <img src="https://github.com/user-attachments/assets/67d9926e-c882-40f5-bc4c-2f72fb25f5ab" width="300" alt="클론코딩 결과"/> |

### 🔹 푸터 웹사이트 바로가기 드롭다운

| 원본 사이트 | 클론코딩 결과 |
|-------------|----------------|
| <img src="https://github.com/user-attachments/assets/21a3c9e6-0816-434f-bc58-48cc145fb26f" width="300" alt="원본 이미지"/> | <img src="https://github.com/user-attachments/assets/04730065-6dfb-4a1f-b3d4-a45ff7e465f8" width="300" alt="클론코딩 결과"/> |

---

## 🛠 Git & 협업 컨벤션

### 📌 Git 협업 전략

> 원활한 협업을 위한 브랜치 동기화 및 병합 전략

1. **로컬 `feature` → 원격 `feature` 최신화**
2. **원격 `develop` → 로컬 `develop` 최신화**
3. **로컬 `develop` → 로컬 `feature` 병합 (충돌 여부 확인)**
4. **병합 및 충돌 해결 후 → 원격 `feature`에 반영**
5. **최종적으로 원격 `feature` → 원격 `develop`에 PR 생성, `develop`에 merge**

---

### 📌 Commit Message

**형식**: `키워드: 커밋 메시지 내용`
예시: 
- `Fix: 회원가입 시 비밀번호 정규식 오류 해결`

| 키워드 | 설명 |
|--------|------|
| **Feat** | 새로운 기능 추가 |
| **Fix** | 버그 수정 |
| **Refactor** | 코드 리팩토링 |
| **Design** | CSS 등 UI/UX 디자인 변경 |
| **Comment** | 주석 추가/수정 |
| **Docs** | 문서 관련 작업 (README 등) |
| **Init** | 초기 설정 및 구성 |
| **Rename** | 파일/폴더명 변경 |
| **Remove** | 파일 삭제 |

---

### 📌 Branch

**형식**: `feature/{issue-number}-{feature-name}`  
예시:  
- `feature/1-init-project`  
- `feature/2-main-layout`

---

### 📌 Pull Request Template

```
### [#이슈번호] 기능 구현 제목

## 개요
- 무엇을, 왜 수정했는지 설명해주세요.

## PR 유형
- [ ] 새로운 기능 추가
- [ ] 버그 수정
- [ ] CSS 등 사용자 UI 디자인 변경
- [ ] 코드 리팩토링
- [ ] 코드에 영향 없는 수정
- [ ] 문서 수정
- [ ] 테스트 추가/리팩토링
- [ ] 빌드/패키지 관련
- [ ] 파일/폴더명 수정
- [ ] 파일 삭제

## PR Checklist
- [ ] 커밋 메시지 컨벤션을 지켰나요?
- [ ] 기능 테스트를 완료했나요?
- [ ] develop 브랜치로 머지 요청했나요?
```

---

### 📌 Label

```
- name: '🐛 bugfix'
  color: 'd73a4a'
  description: '버그 픽스'

- name: '✨ feature'
  color: '0E8A16'
  description: '새로운 기능 추가'

- name: '🔁 refactor'
  color: 'c2e0c6'
  description: '리팩토링 작업'

- name: '📄 documentation'
  color: '0075ca'
  description: '문서 관련 작업'

- name: '💬 question'
  color: 'd876e3'
  description: '논의/질문'

- name: '🎨 design'
  color: 'ffb3c6'
  description: 'UI/UX 관련 작업'

- name: '🧪 test'
  color: 'f9d0c4'
  description: '테스트 코드 또는 테스트 관련 작업'
```

---
