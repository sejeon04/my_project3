# 🎓 UniClub - 대학생 동아리 선택 및 지원서 관리 플랫폼

전국 대학생 동아리 탐색, 표준 온라인 지원서 작성, 실시간 합격 관리 및 운영진 대시보드를 제공하는 올인원 동아리 플랫폼입니다.

---

## 📌 주요 기능

### 1. 🔍 동아리 탐색 (Explore Clubs)
- **다양한 필터링**: 카테고리(코딩, 음악, 여행, 창업, 봉사, 체육), 지역(서울, 경기, 부산 등), 학교별 맞춤 필터링
- **실시간 검색**: 동아리명 및 활동 키워드 검색
- **동아리 상세 정보 모달**: 활동 내용, 모집 일정, 회비, 혜택, 활동 사진 확인 및 즉시 지원

### 2. ✍️ 동아리 입부 지원서 작성 (Application Form)
- **표준 HTML 폼 입력**:
  - **텍스트 입력**: 성명, 이메일, 조회용 비밀번호, 연락처(자동 하이픈)
  - **숫자 및 날짜**: 나이 제한(`min`, `max`), 생년월일 달력 피커
  - **선택 입력**: 성별(Radio), 관심 분야(Checkbox 복수선택), 지역/대학교/학년(Select)
  - **동아리 맞춤 질문**: 동아리별 특별 질문 답변 작성
  - **장문 입력**: 지원 동기 및 각오(500자 제한, 글자 수 카운팅)
- **편의 기능**: 임시저장, 예시 데이터 1초 자동 완성, 입력 유효성 검사

### 3. 📋 내 지원서 관리 (My Applications)
- 이메일과 비밀번호로 본인의 지원서 조회
- 심사 진행 상태 실시간 확인 (`서류 접수` ➔ `서류 합격` ➔ `면접 확정` ➔ `최종 합격`)
- 지원서 열람, 수정 및 접수 취소 가능

### 4. 🛡️ 동아리 운영진 관리자 센터 (Admin Dashboard)
- 동아리별 지원자 현황 통계 (총 지원자, 서류 대기, 면접 진행, 최종 선발)
- 지원자 검색 및 상태별 필터링
- 지원서 심사 및 평가 점수/메모 입력, 실시간 상태 변경
- 지원자 명단 CSV 엑셀 다운로드 및 지원서 인쇄 기능
- 신규 동아리 개설 및 모집 공고 등록

---

## 🛠️ 기술 스택

- **Frontend**: Vanilla JavaScript (ES Module), HTML5, CSS3
- **Design & Typography**: Pretendard Font, 모던 반응형 UI
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 로컬 실행 방법

### 1. 패키지 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:3000`으로 접속합니다.

### 3. 프로덕션 빌드 및 미리보기
```bash
npm run build
npm run preview
```

---

## 🌐 Vercel 배포 가이드

1. **GitHub에 코드 푸시**
   ```bash
   git add .
   git commit -m "feat: setup vercel deployment"
   git push -u origin main
   ```

2. **[Vercel](https://vercel.com/) 대시보드에서 배포**
   - Vercel 로그인 후 **"Add New Project"** 클릭
   - 방금 푸시한 GitHub 리포지토리 선택
   - **Framework Preset**: `Vite` (자동 감지됨)
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`
   - **Deploy** 버튼 클릭 ➔ 약 30초 내에 배포 완료!
