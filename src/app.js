/**
 * UniClub - 대학생 동아리 선택 및 지원서 관리 플랫폼
 * Pure JavaScript Application Module
 */

// =============================================================================
// 1. Initial Mock Data & Constants
// =============================================================================

const CITY_LABELS = {
  seoul: '서울',
  gyeonggi: '경기',
  incheon: '인천',
  busan: '부산',
  daegu: '대구',
  gwangju: '광주',
  daejeon: '대전',
  ulsan: '울산',
  jeju: '제주',
  gangwon: '강원',
  chungbuk: '충북',
  chungnam: '충남',
  other: '기타'
};

const SCHOOL_LABELS = {
  snu: '서울대학교',
  cau: '중앙대학교',
  ssu: '숭실대학교',
  yonsei: '연세대학교',
  korea: '고려대학교',
  skku: '성균관대학교',
  hanyang: '한양대학교',
  khu: '경희대학교',
  other: '기타 대학교'
};

const CATEGORY_LABELS = {
  coding: '💻 코딩/IT',
  music: '🎸 음악/밴드',
  travel: '✈️ 여행/탐험',
  startup: '🚀 창업/경영',
  volunteer: '🤝 사회봉사',
  sports: '🧗 체육/레저'
};

const INITIAL_CLUBS = [
  {
    id: 'club-codetree',
    name: '코드트리 (CodeTree)',
    category: 'coding',
    categoryLabel: '코딩/IT',
    tagline: '아이디어를 현실의 서비스로 빌드하는 수도권 연합 개발 동아리',
    description: '웹 프론트엔드, 백엔드, AI 서비스 프로젝트를 실제 런칭하고 서비스 운영 경험을 쌓는 실전 소프트웨어 개발 연합 동아리입니다. 방학 해커톤 및 현업 멘토링 세션이 준비되어 있습니다.',
    activityDetails: [
      '매주 토요일 14:00~18:00 정기 개발 세미나 & 기술 스택 스터디',
      '한 학기 1개 팀 단위 프로덕트 런칭 (웹/모바일 앱 배포)',
      '현직 IT 기업(네카라쿠배) 개발자 멘토링 및 코드 리뷰',
      '여름/겨울방학 무박 2일 해커톤 개최'
    ],
    city: 'seoul',
    schoolAffiliation: '연합',
    targetSchools: ['서울대학교', '중앙대학교', '숭실대학교', '연세대학교', '고려대학교', '전체 대학교'],
    dDay: 9,
    status: '모집중',
    membersCount: 48,
    regularMeet: '매주 토요일 14:00 (신촌/강남)',
    fee: '학기당 35,000원',
    tags: ['웹개발', 'AI', '해커톤', '포트폴리오'],
    customPrompt: '가장 관심 있는 기술 분야나 개발해보고 싶은 서비스 아이디어를 적어주세요.'
  },
  {
    id: 'club-soundwave',
    name: '소리울림 (SoundWave)',
    category: 'music',
    categoryLabel: '음악/밴드',
    tagline: '마음을 울리는 멜로디, 홍대 정기 라이브 공연을 함께할 밴드 크루',
    description: '어쿠스틱, 인디 팝, 모던 락을 사랑하는 대학생들이 모인 라이브 사운드 밴드입니다. 보컬, 기타, 베이스, 드럼, 건반 세션이 조화롭게 합주하며 매 학기말 정기 단독 콘서트를 진행합니다.',
    activityDetails: [
      '주 1회 팀별 합주실 정기 연습 (합정/홍대 전문 합주실)',
      '봄/가을 대학 축제 버스킹 및 홍대 라이브 클럽 정기 공연',
      '자작곡 음원 녹음 및 스트리밍 발매 지원',
      '선후배 세션 테크닉 교류 및 잼(Jam) 세션'
    ],
    city: 'seoul',
    schoolAffiliation: '연합',
    targetSchools: ['서울대학교', '중앙대학교', '숭실대학교', '홍익대학교', '전체 대학교'],
    dDay: 4,
    status: '마감임박',
    membersCount: 32,
    regularMeet: '매주 목요일 18:30 (합정)',
    fee: '학기당 40,000원',
    tags: ['인디밴드', '정기공연', '보컬', '합주'],
    customPrompt: '지원하시는 파트(보컬, 기타, 베이스, 건반 등)와 좋아하는 아티스트를 적어주세요.'
  },
  {
    id: 'club-wanderlust',
    name: '방랑자들 (Wanderlust)',
    category: 'travel',
    categoryLabel: '여행/탐험',
    tagline: '지도 밖의 세상을 걷다! 전국 방방곡곡 트레킹 & 배낭여행 동아리',
    description: '청춘의 가장 찬란한 순간을 길 위에서 기록합니다. 국내 숨은 명소 기차여행, 백패킹 캠핑, 플로깅 여행부터 방학 시즌 아시아/유럽 배낭여행까지 함께 기획하고 실행하는 자유로운 여행 커뮤니티입니다.',
    activityDetails: [
      '월 1~2회 주말 국내 테마 여행 (강릉 바다, 지리산 트레킹, 경주 역사 탐방)',
      '친환경 클린 캠핑 & 야외 바베큐 파티',
      '방학 시즌 해외 로컬 배낭여행 원정대 구성',
      '여행 필름 사진전 및 매거진 제작'
    ],
    city: 'gyeonggi',
    schoolAffiliation: '연합',
    targetSchools: ['중앙대학교', '숭실대학교', '서울대학교', '전체 대학교'],
    dDay: 14,
    status: '모집중',
    membersCount: 65,
    regularMeet: '월 2회 격주 일요일 투어',
    fee: '학기당 20,000원',
    tags: ['배낭여행', '캠핑', '출사', '국내여행'],
    customPrompt: '지금까지 가본 여행지 중 가장 기억에 남는 장소와 그 이유를 적어주세요.'
  },
  {
    id: 'club-next',
    name: 'NEXT 벤처창업학회',
    category: 'startup',
    categoryLabel: '창업/경영',
    tagline: '문제 정의부터 시장 검증까지, 청년 창업가를 양성하는 스타트업 인큐베이팅',
    description: '아이디어를 가진 기획자, 개발자, 디자이너가 모여 실제 비즈니스 모델을 검증하고 시드 투자 및 정부지원사업(예비창업패키지 등) 수주를 목표로 몰입하는 실전 창업 학회입니다.',
    activityDetails: [
      '주간 비즈니스 모델 캔버스 분석 & 시장 인터뷰 스터디',
      '정부지원사업 사업계획서 공동 작성 및 IR 피칭 데이',
      '성공 스타트업 CEO 및 VC 심사역 초청 네트워킹',
      '실제 린 스타트업 MVP 테스트 런칭'
    ],
    city: 'seoul',
    schoolAffiliation: '교내',
    targetSchools: ['서울대학교', '중앙대학교', '숭실대학교'],
    dDay: 2,
    status: '마감임박',
    membersCount: 26,
    regularMeet: '매주 수요일 19:00 (교내 라운지)',
    fee: '학기당 25,000원',
    tags: ['스타트업', 'IR피칭', '사업계획서', 'MVP'],
    customPrompt: '해결하고 싶은 사회적/일상적 불편함이나 비즈니스 문제의식을 작성해주세요.'
  },
  {
    id: 'club-haebit',
    name: '햇빛나눔 사회봉사단',
    category: 'volunteer',
    categoryLabel: '사회봉사',
    tagline: '따뜻한 온기를 지역사회 아동 및 어르신과 나누는 가치 실천 동아리',
    description: '지역아동센터 기초학습 멘토링, 주말 독거 어르신 도시락 배달, 유기동물 보호소 정기 봉사활동을 진행하는 따뜻한 청년 봉사 단체입니다. 봉사시간 VMS/1365 인정 및 표창 추천이 가능합니다.',
    activityDetails: [
      '취약계층 청소년 1:1 진로 및 기초교과 멘토링',
      '월 2회 유기동물 보호소 산책 및 환경정화 활동',
      '겨울철 사랑의 연탄 나눔 및 연말 바자회 기획',
      '1365/VMS 봉사시간 인증 및 활동 증명서 발급'
    ],
    city: 'seoul',
    schoolAffiliation: '연합',
    targetSchools: ['서울대학교', '중앙대학교', '숭실대학교', '전체 대학교'],
    dDay: 30,
    status: '상시모집',
    membersCount: 55,
    regularMeet: '매주 토요일 10:00 (동작/영등포)',
    fee: '학기당 15,000원',
    tags: ['멘토링', '유기동물', 'VMS인증', '나눔'],
    customPrompt: '봉사활동 경험이 있거나 가장 실천해보고 싶은 봉사 분야를 알려주세요.'
  },
  {
    id: 'club-climb',
    name: '클라임하이 (Climb High)',
    category: 'sports',
    categoryLabel: '체육/레저',
    tagline: '한 걸음씩 정상으로! 수도권 대학생 볼더링 & 실내 클라이밍 크루',
    description: '볼더링의 매력에 푹 빠진 초보자부터 숙련자까지 모두 환영합니다. 주 1~2회 서울 주요 암장에서 정기 세션을 가지며 서로의 무브를 응원하고 체력과 집중력을 단련합니다.',
    activityDetails: [
      '주 2회 지정 암장 그룹 볼더링 세션 (더클라임 신림/홍대/강남)',
      '초보자를 위한 기본 발동작 및 그립법 무료 코칭',
      '분기별 자연 바위 리드 클라이밍 체험 캠프',
      '크루 전용 단체 티셔츠 및 굿즈 제작'
    ],
    city: 'seoul',
    schoolAffiliation: '연합',
    targetSchools: ['중앙대학교', '숭실대학교', '서울대학교', '전체 대학교'],
    dDay: 7,
    status: '모집중',
    membersCount: 42,
    regularMeet: '매주 화/목 19:30 & 주말 세션',
    fee: '학기당 20,000원',
    tags: ['클라이밍', '볼더링', '운동', '친목'],
    customPrompt: '현재 즐겨하는 운동이나 클라이밍 경험 유무를 자유롭게 적어주세요.'
  }
];

const INITIAL_APPLICATIONS = [
  {
    id: 'APP-2026-001',
    clubId: 'club-codetree',
    clubName: '코드트리 (CodeTree)',
    submittedAt: '2026-09-28 14:22',
    status: 'interview_scheduled', // submitted, document_pass, document_fail, interview_scheduled, final_pass, final_fail
    interviewSchedule: '2026-10-04 (일) 15:30 온라인 Google Meet',
    adminNotes: 'GitHub 활동 및 리액트 프로젝트 경험 우수. 팀 협업 태도가 뛰어남.',
    adminRating: 5,
    name: '김민준',
    email: 'minjun.kim@cau.ac.kr',
    password: 'password123',
    phone: '010-3456-7890',
    age: 21,
    birthdate: '2005-04-12',
    gender: 'male',
    interests: ['코딩', '음악'],
    city: 'seoul',
    school: 'cau',
    major: '소프트웨어학부',
    studentGrade: '2학년',
    portfolioUrl: 'https://github.com/minjun-dev',
    customAnswer: '대학생 중고 전공책 및 강의노트 거래 웹 서비스 MVP를 배포해보고 싶습니다.',
    memo: '평소 웹 서비스 개발에 관심이 많아 React와 TypeScript로 여러 토이 프로젝트를 진행해보았습니다. 코드트리에서 다른 전공의 디자이너, 기획자 분들과 팀을 이루어 실제 수백 명이 사용하는 완성도 높은 서비스를 런칭해보고 싶습니다!'
  },
  {
    id: 'APP-2026-002',
    clubId: 'club-soundwave',
    clubName: '소리울림 (SoundWave)',
    submittedAt: '2026-09-29 09:12',
    status: 'document_pass',
    adminNotes: '어쿠스틱 기타 경력 3년. 합주 및 버스킹 열의 높음.',
    adminRating: 4,
    name: '이지은',
    email: 'jieun.lee@ssu.ac.kr',
    password: 'password123',
    phone: '010-8912-3456',
    age: 20,
    birthdate: '2006-08-23',
    gender: 'female',
    interests: ['음악', '여행'],
    city: 'seoul',
    school: 'ssu',
    major: '글로벌미디어학부',
    studentGrade: '1학년',
    portfolioUrl: 'https://youtube.com/@jieun_acoustic',
    customAnswer: '어쿠스틱 기타 / 좋아하는 아티스트는 잔나비, 혁오, Lucy 입니다.',
    memo: '고등학교 때부터 어쿠스틱 기타와 핑거스타일 연주를 독학해왔습니다. 대학에 입학한 후 혼자 연습하는 것을 넘어 다른 악기들과 합을 맞추며 멋진 사운드를 만들어보고 싶어서 소리울림에 지원하게 되었습니다.'
  },
  {
    id: 'APP-2026-003',
    clubId: 'club-wanderlust',
    clubName: '방랑자들 (Wanderlust)',
    submittedAt: '2026-09-29 17:40',
    status: 'submitted',
    name: '박서준',
    email: 'seojun.park@snu.ac.kr',
    password: 'password123',
    phone: '010-2345-6789',
    age: 23,
    birthdate: '2003-11-05',
    gender: 'male',
    interests: ['여행', '코딩'],
    city: 'gyeonggi',
    school: 'snu',
    major: '경영학과',
    studentGrade: '3학년',
    portfolioUrl: '',
    customAnswer: '작년 가을 떠난 통영 소매물도 트레킹이 가장 인상 깊었습니다. 푸른 바다와 등대길 풍경이 잊혀지지 않습니다.',
    memo: '군 전역 후 새로운 활력과 다양한 사람들과의 소통을 찾고 있었습니다. 평소 필름 카메라로 풍경을 담고 국내 기차 여행을 다니는 것을 매우 좋아합니다. 동아리원들과 함께 전국 곳곳을 누비며 잊지 못할 청춘의 추억을 쌓고 싶습니다!'
  },
  {
    id: 'APP-2026-004',
    clubId: 'club-codetree',
    clubName: '코드트리 (CodeTree)',
    submittedAt: '2026-09-30 08:35',
    status: 'submitted',
    name: '최수아',
    email: 'sua.choi@cau.ac.kr',
    password: 'password123',
    phone: '010-5678-1234',
    age: 22,
    birthdate: '2004-02-18',
    gender: 'female',
    interests: ['코딩', '여행'],
    city: 'seoul',
    school: 'cau',
    major: '인공지능학과',
    studentGrade: '2학년',
    portfolioUrl: 'https://github.com/sua-ai-lab',
    customAnswer: '캠퍼스 내 빈 강의실 실시간 조회 및 예약 도우미 서비스를 개발해보고 싶습니다.',
    memo: '데이터 분석과 백엔드 API 설계에 관심이 많은 컴퓨터공학도입니다. 혼자 공부할 때는 알기 어려웠던 협업 깃 플로우와 아키텍처 설계를 코드트리 활동을 통해 배우고 싶습니다.'
  }
];

// =============================================================================
// 2. Storage Helpers
// =============================================================================

function loadClubs() {
  try {
    const raw = localStorage.getItem('uniclub_clubs_v2');
    if (!raw) {
      localStorage.setItem('uniclub_clubs_v2', JSON.stringify(INITIAL_CLUBS));
      return INITIAL_CLUBS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return INITIAL_CLUBS;
  }
}

function saveClubs(clubs) {
  localStorage.setItem('uniclub_clubs_v2', JSON.stringify(clubs));
}

function loadApplications() {
  try {
    const raw = localStorage.getItem('uniclub_apps_v2');
    if (!raw) {
      localStorage.setItem('uniclub_apps_v2', JSON.stringify(INITIAL_APPLICATIONS));
      return INITIAL_APPLICATIONS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return INITIAL_APPLICATIONS;
  }
}

function saveApplications(apps) {
  localStorage.setItem('uniclub_apps_v2', JSON.stringify(apps));
}

// Current App State
let state = {
  clubs: loadClubs(),
  applications: loadApplications(),
  activeTab: 'tab-explore',
  activeCategory: 'all',
  searchQuery: '',
  cityFilter: 'all',
  schoolFilter: 'all',
  adminSelectedClub: 'club-codetree',
  adminStatusFilter: 'all',
  adminSearchQuery: '',
  selectedApplicantForReview: null,
  activeUserEmail: localStorage.getItem('uniclub_user_email') || 'minjun.kim@cau.ac.kr'
};

// =============================================================================
// 3. UI Helpers & Toast Notification
// =============================================================================

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : type === 'danger' ? '⚠️' : 'ℹ️'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function formatPhoneInput(value) {
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
}

function getStatusBadgeHtml(status) {
  switch (status) {
    case 'submitted':
      return `<span class="badge badge-info">서류접수 완료</span>`;
    case 'document_pass':
      return `<span class="badge badge-success">서류 합격</span>`;
    case 'document_fail':
      return `<span class="badge badge-danger">서류 불합격</span>`;
    case 'interview_scheduled':
      return `<span class="badge badge-purple">면접 일정 확정</span>`;
    case 'final_pass':
      return `<span class="badge badge-success">최종 합격 🎉</span>`;
    case 'final_fail':
      return `<span class="badge" style="background:#f1f5f9; color:#475569;">최종 불합격</span>`;
    default:
      return `<span class="badge badge-info">접수 대기</span>`;
  }
}

// =============================================================================
// 4. Tab Navigation Logic
// =============================================================================

function switchTab(tabId) {
  state.activeTab = tabId;

  // Nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  // Tab panes
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === tabId);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Tab specific refreshes
  if (tabId === 'tab-explore') {
    renderClubs();
  } else if (tabId === 'tab-my-apps') {
    renderMyApplications();
  } else if (tabId === 'tab-admin') {
    renderAdminDashboard();
  }
}

// =============================================================================
// 5. Explore Tab: Club Rendering & Filters
// =============================================================================

function updateHeroStats() {
  const totalClubsEl = document.getElementById('statTotalClubs');
  const recruitingClubsEl = document.getElementById('statRecruitingClubs');
  const totalApplicantsEl = document.getElementById('statTotalApplicants');
  const myAppsBadge = document.getElementById('myAppsBadge');

  if (totalClubsEl) totalClubsEl.textContent = state.clubs.length;
  if (recruitingClubsEl) {
    const recruiting = state.clubs.filter(c => c.status !== '모집마감').length;
    recruitingClubsEl.textContent = recruiting;
  }
  if (totalApplicantsEl) totalApplicantsEl.textContent = state.applications.length;

  if (myAppsBadge) {
    const userApps = state.applications.filter(a => a.email.toLowerCase() === state.activeUserEmail.toLowerCase());
    myAppsBadge.textContent = userApps.length;
  }
}

function renderClubs() {
  updateHeroStats();

  const grid = document.getElementById('clubsGrid');
  const countEl = document.getElementById('clubsCount');
  const emptyNotice = document.getElementById('noClubsNotice');

  if (!grid) return;

  const query = state.searchQuery.toLowerCase().trim();

  const filtered = state.clubs.filter(club => {
    // Category match
    if (state.activeCategory !== 'all' && club.category !== state.activeCategory) {
      return false;
    }
    // City match
    if (state.cityFilter !== 'all' && club.city !== state.cityFilter) {
      return false;
    }
    // School match
    if (state.schoolFilter !== 'all') {
      const schoolName = SCHOOL_LABELS[state.schoolFilter];
      if (state.schoolFilter === 'all-uni') {
        if (club.schoolAffiliation !== '연합') return false;
      } else if (schoolName) {
        const matches = (club.targetSchools || []).some(s => s.includes(schoolName) || s.includes('전체 대학교'));
        if (!matches) return false;
      }
    }
    // Search query match
    if (query) {
      const targetStr = `${club.name} ${club.tagline} ${club.description} ${(club.tags || []).join(' ')}`.toLowerCase();
      if (!targetStr.includes(query)) return false;
    }
    return true;
  });

  if (countEl) countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyNotice) emptyNotice.style.display = 'block';
    return;
  }

  if (emptyNotice) emptyNotice.style.display = 'none';

  grid.innerHTML = filtered.map(club => {
    const cityLabel = CITY_LABELS[club.city] || '전국';
    const isUrgent = club.dDay <= 5;
    const dDayClass = isUrgent ? 'urgent' : 'normal';

    return `
      <div class="club-card" data-club-id="${club.id}">
        <div class="club-card-header">
          <div class="club-card-top">
            <span class="badge badge-primary">${CATEGORY_LABELS[club.category] || club.categoryLabel}</span>
            <span class="club-dday-badge ${dDayClass}">D-${club.dDay} ${club.status}</span>
          </div>
          <h3 class="club-card-title">${club.name}</h3>
          <p class="club-card-tagline">${club.tagline}</p>
        </div>

        <div class="club-card-body">
          <div class="club-meta-list">
            <div class="club-meta-item">
              <span class="club-meta-icon">📍</span>
              <span><strong>지역:</strong> ${cityLabel} (${club.schoolAffiliation} 동아리)</span>
            </div>
            <div class="club-meta-item">
              <span class="club-meta-icon">📅</span>
              <span><strong>정기모임:</strong> ${club.regularMeet}</span>
            </div>
            <div class="club-meta-item">
              <span class="club-meta-icon">💰</span>
              <span><strong>회비:</strong> ${club.fee}</span>
            </div>
          </div>

          <div class="club-tags">
            ${(club.tags || []).map(tag => `<span class="club-tag">#${tag}</span>`).join('')}
          </div>
        </div>

        <div class="club-card-footer">
          <span class="club-footer-info">활동 부원 ${club.membersCount}명</span>
          <div class="club-footer-actions">
            <button class="btn btn-secondary btn-detail" data-club-id="${club.id}">상세보기</button>
            <button class="btn btn-primary btn-apply-direct" data-club-id="${club.id}">지원하기 ✍️</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Add click events to cards
  grid.querySelectorAll('.club-card').forEach(card => {
    const clubId = card.dataset.clubId;
    card.addEventListener('click', (e) => {
      // If clicked on buttons, let their event handlers handle it
      if (e.target.closest('.btn-detail')) {
        openClubDetailModal(clubId);
      } else if (e.target.closest('.btn-apply-direct')) {
        prepareApplicationForClub(clubId);
      } else {
        openClubDetailModal(clubId);
      }
    });
  });
}

// Open Club Detail Modal
function openClubDetailModal(clubId) {
  const club = state.clubs.find(c => c.id === clubId);
  if (!club) return;

  const modal = document.getElementById('clubDetailModal');
  const catEl = document.getElementById('modalClubCategory');
  const nameEl = document.getElementById('modalClubName');
  const bodyEl = document.getElementById('modalClubBody');
  const applyBtn = document.getElementById('btnApplyFromModal');

  if (!modal || !bodyEl) return;

  catEl.textContent = CATEGORY_LABELS[club.category] || club.categoryLabel;
  nameEl.textContent = club.name;

  bodyEl.innerHTML = `
    <div class="detail-section">
      <div style="background: var(--primary-light); padding: 16px; border-radius: var(--radius-md); margin-bottom: 16px;">
        <h3 style="color: var(--primary); font-size: 1.1rem; margin-bottom: 6px;">💡 ${club.tagline}</h3>
        <p style="color: var(--text-sub); font-size: 0.9rem; line-height: 1.6;">${club.description}</p>
      </div>
    </div>

    <div class="detail-section">
      <h4>📌 주요 정기 활동</h4>
      <ul class="detail-list">
        ${(club.activityDetails || []).map(act => `<li>${act}</li>`).join('')}
      </ul>
    </div>

    <div class="detail-section">
      <h4>🎯 모집 개요</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; font-size: 0.875rem;">
        <div style="background: var(--bg-main); padding: 10px; border-radius: 6px;">
          <strong>모집 기한:</strong> D-${club.dDay} (${club.status})
        </div>
        <div style="background: var(--bg-main); padding: 10px; border-radius: 6px;">
          <strong>정기 모임:</strong> ${club.regularMeet}
        </div>
        <div style="background: var(--bg-main); padding: 10px; border-radius: 6px;">
          <strong>활동 지역:</strong> ${CITY_LABELS[club.city] || '전국'} (${club.schoolAffiliation})
        </div>
        <div style="background: var(--bg-main); padding: 10px; border-radius: 6px;">
          <strong>동아리 회비:</strong> ${club.fee}
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h4>📋 선발 전형 단계</h4>
      <p style="font-size: 0.85rem; color: var(--text-muted);">
        온라인 서류 지원 → 1차 서류 심사 → 면접 전형(대면/비대면) → 최종 합격 및 신입생 OT
      </p>
    </div>
  `;

  applyBtn.onclick = () => {
    modal.style.display = 'none';
    prepareApplicationForClub(club.id);
  };

  modal.style.display = 'flex';
}

function closeClubDetailModal() {
  const modal = document.getElementById('clubDetailModal');
  if (modal) modal.style.display = 'none';
}

// =============================================================================
// 6. Application Form Tab: Logic, Custom Inputs, and Validations
// =============================================================================

function populateApplyClubDropdown() {
  const select = document.getElementById('applyClubSelect');
  if (!select) return;

  select.innerHTML = state.clubs.map(club => `
    <option value="${club.id}">${club.name} [${CATEGORY_LABELS[club.category] || club.categoryLabel}]</option>
  `).join('');

  select.onchange = () => {
    onSelectClubToApply(select.value);
  };
}

function onSelectClubToApply(clubId) {
  const club = state.clubs.find(c => c.id === clubId);
  if (!club) return;

  document.getElementById('formClubId').value = club.id;
  document.getElementById('formClubName').value = club.name;

  const bannerCat = document.getElementById('bannerClubCat');
  const bannerName = document.getElementById('bannerClubName');
  const bannerDesc = document.getElementById('bannerClubDesc');

  if (bannerCat) bannerCat.textContent = CATEGORY_LABELS[club.category] || club.categoryLabel;
  if (bannerName) bannerName.textContent = club.name;
  if (bannerDesc) bannerDesc.textContent = club.tagline;

  const customQuestionLabel = document.getElementById('customQuestionLabel');
  if (customQuestionLabel) {
    customQuestionLabel.textContent = club.customPrompt || '동아리에서 가장 펼치고 싶은 프로젝트나 활동을 적어주세요.';
  }

  // Restore draft if any
  const draft = getDraftForClub(club.id);
  if (draft) {
    fillFormFields(draft);
  }
}

function prepareApplicationForClub(clubId) {
  populateApplyClubDropdown();
  const select = document.getElementById('applyClubSelect');
  if (select) select.value = clubId;
  onSelectClubToApply(clubId);
  switchTab('tab-apply');
}

function getDraftForClub(clubId) {
  try {
    const raw = localStorage.getItem(`uniclub_draft_${clubId}`);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function saveDraftForClub(clubId) {
  const formData = getFormDataObject();
  localStorage.setItem(`uniclub_draft_${clubId}`, JSON.stringify(formData));
  showToast('지원서 내용이 브라우저에 임시저장되었습니다.', 'success');
}

function clearDraftForClub(clubId) {
  localStorage.removeItem(`uniclub_draft_${clubId}`);
}

function getFormDataObject() {
  const form = document.getElementById('clubApplicationForm');
  if (!form) return {};

  const interests = [];
  form.querySelectorAll('input[name="interests"]:checked').forEach(cb => {
    interests.push(cb.value);
  });

  const genderEl = form.querySelector('input[name="gender"]:checked');

  return {
    clubId: form.querySelector('#formClubId').value,
    clubName: form.querySelector('#formClubName').value,
    name: form.querySelector('#name').value.trim(),
    email: form.querySelector('#email').value.trim(),
    password: form.querySelector('#password').value,
    phone: form.querySelector('#phone').value.trim(),
    age: parseInt(form.querySelector('#age').value, 10) || '',
    birthdate: form.querySelector('#birthdate').value,
    gender: genderEl ? genderEl.value : 'male',
    interests: interests,
    city: form.querySelector('#city').value,
    school: form.querySelector('#school').value,
    major: form.querySelector('#major').value.trim(),
    studentGrade: form.querySelector('#studentGrade').value,
    portfolioUrl: form.querySelector('#portfolioUrl').value.trim(),
    customAnswer: form.querySelector('#customAnswer').value.trim(),
    memo: form.querySelector('#memo').value.trim()
  };
}

function fillFormFields(data) {
  const form = document.getElementById('clubApplicationForm');
  if (!form || !data) return;

  if (data.name !== undefined) form.querySelector('#name').value = data.name;
  if (data.email !== undefined) form.querySelector('#email').value = data.email;
  if (data.password !== undefined) form.querySelector('#password').value = data.password;
  if (data.phone !== undefined) form.querySelector('#phone').value = data.phone;
  if (data.age !== undefined) form.querySelector('#age').value = data.age;
  if (data.birthdate !== undefined) form.querySelector('#birthdate').value = data.birthdate;
  if (data.city !== undefined) form.querySelector('#city').value = data.city;
  if (data.school !== undefined) form.querySelector('#school').value = data.school;
  if (data.major !== undefined) form.querySelector('#major').value = data.major;
  if (data.studentGrade !== undefined) form.querySelector('#studentGrade').value = data.studentGrade;
  if (data.portfolioUrl !== undefined) form.querySelector('#portfolioUrl').value = data.portfolioUrl;
  if (data.customAnswer !== undefined) form.querySelector('#customAnswer').value = data.customAnswer;
  if (data.memo !== undefined) {
    form.querySelector('#memo').value = data.memo;
    updateMemoCharCount();
  }

  // Gender radio
  if (data.gender) {
    const radio = form.querySelector(`input[name="gender"][value="${data.gender}"]`);
    if (radio) radio.checked = true;
  }

  // Interests checkboxes
  if (Array.isArray(data.interests)) {
    form.querySelectorAll('input[name="interests"]').forEach(cb => {
      cb.checked = data.interests.includes(cb.value);
    });
  }
}

function updateMemoCharCount() {
  const memoEl = document.getElementById('memo');
  const countEl = document.getElementById('memoCharCount');
  if (memoEl && countEl) {
    const len = memoEl.value.length;
    countEl.textContent = `${len} / 500자`;
    if (len > 450) {
      countEl.style.color = 'var(--danger)';
    } else {
      countEl.style.color = 'var(--text-muted)';
    }
  }
}

// Form Submission with Strict Validation matching User's HTML constraints
function handleApplicationSubmit(e) {
  e.preventDefault();

  const data = getFormDataObject();

  // Basic validation checks
  if (!data.name) {
    showToast('성명(Name)을 입력해주세요.', 'danger');
    document.getElementById('name').focus();
    return;
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    showToast('유효한 이메일 형식(예: name@domain.com)을 입력해주세요.', 'danger');
    document.getElementById('email').focus();
    return;
  }

  // Password check
  if (!data.password || data.password.length < 4) {
    showToast('지원서 조회/수정용 비밀번호를 4자리 이상 입력해주세요.', 'danger');
    document.getElementById('password').focus();
    return;
  }

  // Phone check
  if (!data.phone || data.phone.length < 10) {
    showToast('연락처(Phone)를 정확히 입력해주세요.', 'danger');
    document.getElementById('phone').focus();
    return;
  }

  // Age check (min 1, max 120)
  if (!data.age || data.age < 1 || data.age > 120) {
    showToast('나이(Age)는 1세 이상 120세 이하 숫자로 입력해주세요.', 'danger');
    document.getElementById('age').focus();
    return;
  }

  // Birthdate check
  if (!data.birthdate) {
    showToast('생년월일(Birth Date)을 선택해주세요.', 'danger');
    document.getElementById('birthdate').focus();
    return;
  }

  // City check
  if (!data.city) {
    showToast('활동/거주 지역(City)을 선택해주세요.', 'danger');
    document.getElementById('city').focus();
    return;
  }

  // School check
  if (!data.school) {
    showToast('소속 대학교(School)를 선택해주세요.', 'danger');
    document.getElementById('school').focus();
    return;
  }

  // Memo check
  if (!data.memo || data.memo.length < 10) {
    showToast('하고싶은 말(지원 동기)을 10자 이상 성실히 작성해주세요.', 'danger');
    document.getElementById('memo').focus();
    return;
  }

  // Generate unique application ID
  const nextNumber = String(state.applications.length + 1).padStart(3, '0');
  const appId = `APP-2026-${nextNumber}`;

  const newApp = {
    ...data,
    id: appId,
    submittedAt: new Date().toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }),
    status: 'submitted'
  };

  // Prepend to applications
  state.applications.unshift(newApp);
  saveApplications(state.applications);

  // Store user email for lookup
  state.activeUserEmail = data.email;
  localStorage.setItem('uniclub_user_email', data.email);

  // Clear draft
  clearDraftForClub(data.clubId);

  // Reset form
  document.getElementById('clubApplicationForm').reset();
  updateMemoCharCount();

  showToast(`[${data.clubName}] 지원서가 성공적으로 접수되었습니다! (접수번호: ${appId})`, 'success');

  // Switch to My Applications view
  switchTab('tab-my-apps');
}

// Auto-fill Demo Data for Instant Review
function fillDemoData() {
  fillFormFields({
    name: '강태양',
    email: 'taeyang.kang@cau.ac.kr',
    password: 'password123',
    phone: '010-9876-5432',
    age: 22,
    birthdate: '2004-07-15',
    gender: 'male',
    interests: ['코딩', '창업', '음악'],
    city: 'seoul',
    school: 'cau',
    major: '경영학부 / 소프트웨어 융합',
    studentGrade: '2학년',
    portfolioUrl: 'https://github.com/taeyang-sun',
    customAnswer: '팀원들과 함께 기획부터 프론트엔드 배포까지 완주하는 해커톤 프로젝트를 꼭 해보고 싶습니다.',
    memo: '평소 새로운 기술을 학습하고 실제 서비스를 기획하는 일에 깊은 흥미를 느껴왔습니다. 코드트리의 체계적인 커리큘럼과 열정 넘치는 동료들과 함께 시너지를 내며 크게 성장하고 싶습니다. 약속 시간을 철저히 지키며 끝까지 책임감 있게 활동하겠습니다!'
  });
  showToast('예시 데이터가 지원서 입력란에 채워졌습니다.', 'info');
}

// =============================================================================
// 7. My Applications Tab: Tracking, Status, and Cancel
// =============================================================================

function renderMyApplications() {
  const container = document.getElementById('myAppsList');
  const emptyNotice = document.getElementById('noMyAppsNotice');
  if (!container) return;

  const lookupEmailInput = document.getElementById('lookupEmail');
  if (lookupEmailInput && !lookupEmailInput.value) {
    lookupEmailInput.value = state.activeUserEmail || '';
  }

  const currentEmail = (lookupEmailInput ? lookupEmailInput.value : state.activeUserEmail).toLowerCase().trim();

  // Filter apps matching email
  const userApps = state.applications.filter(app => {
    return app.email.toLowerCase() === currentEmail;
  });

  const badge = document.getElementById('myAppsBadge');
  if (badge) badge.textContent = userApps.length;

  if (userApps.length === 0) {
    container.innerHTML = '';
    if (emptyNotice) emptyNotice.style.display = 'block';
    return;
  }

  if (emptyNotice) emptyNotice.style.display = 'none';

  container.innerHTML = userApps.map(app => {
    const schoolName = SCHOOL_LABELS[app.school] || app.school;
    const cityLabel = CITY_LABELS[app.city] || app.city;

    // Determine steps progress
    // Step 1: 서류 접수
    // Step 2: 서류 심사 (document_pass, document_fail)
    // Step 3: 면접 진행 (interview_scheduled)
    // Step 4: 최종 발표 (final_pass, final_fail)
    let s1 = 'done', s2 = '', s3 = '', s4 = '';

    if (app.status === 'submitted') {
      s2 = 'active';
    } else if (app.status === 'document_pass') {
      s2 = 'done';
      s3 = 'active';
    } else if (app.status === 'document_fail') {
      s2 = 'fail';
    } else if (app.status === 'interview_scheduled') {
      s2 = 'done';
      s3 = 'active';
    } else if (app.status === 'final_pass') {
      s2 = 'done';
      s3 = 'done';
      s4 = 'done';
    } else if (app.status === 'final_fail') {
      s2 = 'done';
      s3 = 'done';
      s4 = 'fail';
    }

    return `
      <div class="my-app-card" data-app-id="${app.id}">
        <div class="my-app-card-header">
          <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
              <span class="badge badge-info">${app.id}</span>
              ${getStatusBadgeHtml(app.status)}
            </div>
            <h3 class="my-app-club-name">${app.clubName}</h3>
            <div class="my-app-meta">
              지원자: ${app.name} (${schoolName} ${app.major || ''}) | 접수일시: ${app.submittedAt}
            </div>
          </div>
          <div>
            <button class="btn btn-outline btn-view-app" data-app-id="${app.id}">지원서 원본 보기</button>
            ${app.status === 'submitted' ? `<button class="btn btn-secondary btn-cancel-app" data-app-id="${app.id}" style="color:var(--danger);">지원 취소</button>` : ''}
          </div>
        </div>

        <!-- 선발 진행 단계 스테퍼 -->
        <div class="stepper-container">
          <div class="step-item">
            <div class="step-circle ${s1}">✓</div>
            <div class="step-title">서류 접수</div>
          </div>
          <div class="step-line ${s1 === 'done' && s2 ? 'done' : ''}"></div>

          <div class="step-item">
            <div class="step-circle ${s2}">${s2 === 'fail' ? '✕' : s2 === 'done' ? '✓' : '2'}</div>
            <div class="step-title ${s2 ? 'active' : ''}">${s2 === 'fail' ? '서류 탈락' : '서류 심사'}</div>
          </div>
          <div class="step-line ${s2 === 'done' && s3 ? 'done' : ''}"></div>

          <div class="step-item">
            <div class="step-circle ${s3}">${s3 === 'fail' ? '✕' : s3 === 'done' ? '✓' : '3'}</div>
            <div class="step-title ${s3 ? 'active' : ''}">면접 전형</div>
          </div>
          <div class="step-line ${s3 === 'done' && s4 ? 'done' : ''}"></div>

          <div class="step-item">
            <div class="step-circle ${s4}">${s4 === 'fail' ? '✕' : s4 === 'done' ? '🎉' : '4'}</div>
            <div class="step-title ${s4 ? 'active' : ''}">${s4 === 'fail' ? '최종 불합격' : '최종 합격'}</div>
          </div>
        </div>

        ${app.interviewSchedule ? `
          <div class="interview-alert">
            <span>📅</span>
            <div>
              <strong>면접 안내:</strong> ${app.interviewSchedule}
            </div>
          </div>
        ` : ''}

        <div class="my-app-card-footer">
          <div>
            <strong>연락처:</strong> ${app.phone} | <strong>관심분야:</strong> ${(app.interests || []).join(', ')}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">
            ※ 심사 결과 문의는 동아리 운영진에게 문의해주세요.
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach buttons
  container.querySelectorAll('.btn-view-app').forEach(btn => {
    btn.onclick = () => {
      openApplicantReviewModal(btn.dataset.appId, false);
    };
  });

  container.querySelectorAll('.btn-cancel-app').forEach(btn => {
    btn.onclick = () => {
      cancelApplication(btn.dataset.appId);
    };
  });
}

function cancelApplication(appId) {
  if (!confirm('정말 이 동아리 지원서를 취소하시겠습니까? 취소 후에는 복구할 수 없습니다.')) {
    return;
  }

  state.applications = state.applications.filter(a => a.id !== appId);
  saveApplications(state.applications);
  showToast('지원서가 성공적으로 취소되었습니다.', 'info');
  renderMyApplications();
  updateHeroStats();
}

// =============================================================================
// 8. Admin Dashboard Tab: Recruitment Management, Status Changing & CSV
// =============================================================================

function populateAdminClubSelect() {
  const select = document.getElementById('adminClubSelect');
  if (!select) return;

  select.innerHTML = state.clubs.map(club => `
    <option value="${club.id}">${club.name}</option>
  `).join('');

  select.value = state.adminSelectedClub;
  select.onchange = () => {
    state.adminSelectedClub = select.value;
    renderAdminDashboard();
  };
}

function renderAdminDashboard() {
  populateAdminClubSelect();

  const clubId = state.adminSelectedClub;
  const club = state.clubs.find(c => c.id === clubId);

  // Applications for this club
  const clubApps = state.applications.filter(a => a.clubId === clubId);

  // Update stat cards
  const total = clubApps.length;
  const submitted = clubApps.filter(a => a.status === 'submitted').length;
  const interview = clubApps.filter(a => a.status === 'interview_scheduled').length;
  const passed = clubApps.filter(a => a.status === 'final_pass').length;

  document.getElementById('adminStatTotal').textContent = total;
  document.getElementById('adminStatSubmitted').textContent = submitted;
  document.getElementById('adminStatInterview').textContent = interview;
  document.getElementById('adminStatPassed').textContent = passed;

  // Filter table
  const query = (state.adminSearchQuery || '').toLowerCase().trim();
  const statusFilter = state.adminStatusFilter;

  const filtered = clubApps.filter(app => {
    if (statusFilter !== 'all') {
      if (statusFilter === 'fail') {
        if (app.status !== 'document_fail' && app.status !== 'final_fail') return false;
      } else if (app.status !== statusFilter) {
        return false;
      }
    }

    if (query) {
      const schoolName = SCHOOL_LABELS[app.school] || app.school;
      const targetStr = `${app.name} ${app.id} ${schoolName} ${app.major || ''} ${app.email}`.toLowerCase();
      if (!targetStr.includes(query)) return false;
    }
    return true;
  });

  const tbody = document.getElementById('adminTableBody');
  const emptyNotice = document.getElementById('adminEmptyNotice');

  if (!tbody) return;

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    if (emptyNotice) emptyNotice.style.display = 'block';
    return;
  }

  if (emptyNotice) emptyNotice.style.display = 'none';

  tbody.innerHTML = filtered.map(app => {
    const schoolName = SCHOOL_LABELS[app.school] || app.school;
    const genderLabel = app.gender === 'male' ? '남' : '여';

    return `
      <tr>
        <td><code>${app.id}</code></td>
        <td>
          <strong>${app.name}</strong>
          <span style="font-size:0.75rem; color:var(--text-muted); margin-left:4px;">(${genderLabel}/${app.age}세)</span>
        </td>
        <td>${schoolName} ${app.major ? `<br><small style="color:var(--text-muted);">${app.major}</small>` : ''}</td>
        <td>
          <div style="font-size:0.85rem;">${app.phone}</div>
          <small style="color:var(--text-muted);">${app.email}</small>
        </td>
        <td>
          ${(app.interests || []).map(i => `<span class="club-tag" style="font-size:0.7rem; padding:1px 5px;">${i}</span>`).join(' ')}
        </td>
        <td><small>${app.submittedAt}</small></td>
        <td>${getStatusBadgeHtml(app.status)}</td>
        <td>
          <button class="btn btn-outline btn-review-applicant" data-app-id="${app.id}" style="padding:4px 10px; font-size:0.8rem;">
            🔍 심사하기
          </button>
        </td>
      </tr>
    `;
  }).join('');

  tbody.querySelectorAll('.btn-review-applicant').forEach(btn => {
    btn.onclick = () => {
      openApplicantReviewModal(btn.dataset.appId, true);
    };
  });
}

// Applicant Review & Evaluation Modal
function openApplicantReviewModal(appId, isAdmin = true) {
  const app = state.applications.find(a => a.id === appId);
  if (!app) return;

  state.selectedApplicantForReview = app;

  const modal = document.getElementById('applicantReviewModal');
  const modalIdEl = document.getElementById('revModalAppId');
  const modalNameEl = document.getElementById('revModalApplicantName');
  const modalBodyEl = document.getElementById('revModalBody');
  const saveBtn = document.getElementById('btnSaveApplicantEvaluation');

  if (!modal || !modalBodyEl) return;

  modalIdEl.textContent = app.id;
  modalNameEl.textContent = `${app.name} 지원서 (${app.clubName})`;

  const schoolName = SCHOOL_LABELS[app.school] || app.school;
  const cityLabel = CITY_LABELS[app.city] || app.city;
  const genderLabel = app.gender === 'male' ? '남성 (Male)' : '여성 (Female)';

  modalBodyEl.innerHTML = `
    <!-- 기본 인적사항 섹션 -->
    <div style="background:var(--bg-main); padding:16px; border-radius:var(--radius-md); margin-bottom:20px; border:1px solid var(--border-color);">
      <h3 style="font-size:1rem; font-weight:700; color:var(--text-main); margin-bottom:12px; display:flex; align-items:center; justify-content:space-between;">
        <span>👤 지원자 기본 정보</span>
        <span>${getStatusBadgeHtml(app.status)}</span>
      </h3>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px; font-size:0.875rem;">
        <div><strong>성명:</strong> ${app.name} (${genderLabel})</div>
        <div><strong>나이/생년월일:</strong> 만 ${app.age}세 (${app.birthdate})</div>
        <div><strong>연락처:</strong> <a href="tel:${app.phone}" style="color:var(--primary); font-weight:600;">${app.phone}</a></div>
        <div><strong>이메일:</strong> <a href="mailto:${app.email}" style="color:var(--primary);">${app.email}</a></div>
        <div><strong>소속 학교:</strong> ${schoolName} (${app.major || '전공 미입력'})</div>
        <div><strong>학년/학적:</strong> ${app.studentGrade || '2학년'}</div>
        <div><strong>거주 지역:</strong> ${cityLabel}</div>
        <div><strong>관심 분야:</strong> ${(app.interests || []).join(', ') || '없음'}</div>
      </div>
      ${app.portfolioUrl ? `
        <div style="margin-top:10px; font-size:0.85rem;">
          <strong>포트폴리오:</strong> <a href="${app.portfolioUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--primary); text-decoration:underline;">${app.portfolioUrl}</a>
        </div>
      ` : ''}
    </div>

    <!-- 동아리 맞춤 질문 답변 -->
    ${app.customAnswer ? `
      <div style="margin-bottom:20px;">
        <h4 style="font-size:0.95rem; font-weight:700; color:var(--text-main); margin-bottom:6px;">
          ★ 동아리 특별 질문 답변
        </h4>
        <div style="background:#fff; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:12px; font-size:0.875rem; color:var(--text-sub); line-height:1.6;">
          ${app.customAnswer}
        </div>
      </div>
    ` : ''}

    <!-- 하고싶은 말 / 지원동기 (Textarea 내용) -->
    <div style="margin-bottom:20px;">
      <h4 style="font-size:0.95rem; font-weight:700; color:var(--text-main); margin-bottom:6px;">
        📝 하고싶은 말 (지원 동기 및 각오)
      </h4>
      <div style="background:#fff; border:1px solid var(--border-color); border-radius:var(--radius-md); padding:14px; font-size:0.9rem; line-height:1.7; white-space:pre-wrap; color:var(--text-main);">
        ${app.memo}
      </div>
    </div>

    <!-- 관리자 심사 및 상태 변경 섹션 (관리자일 때만 표시) -->
    ${isAdmin ? `
      <div style="background:var(--primary-light); border:1px solid var(--primary-border); border-radius:var(--radius-md); padding:18px;">
        <h4 style="font-size:1rem; font-weight:700; color:var(--primary); margin-bottom:12px;">
          🛡️ 운영진 심사 및 합격 처리
        </h4>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:12px; margin-bottom:12px;">
          <div class="form-group">
            <label for="evalStatus" style="font-weight:700;">전형 진행 상태 변경:</label>
            <select id="evalStatus" class="form-select">
              <option value="submitted" ${app.status === 'submitted' ? 'selected' : ''}>1단계: 서류접수 대기</option>
              <option value="document_pass" ${app.status === 'document_pass' ? 'selected' : ''}>2단계: 서류 합격</option>
              <option value="document_fail" ${app.status === 'document_fail' ? 'selected' : ''}>서류 탈락 (불합격)</option>
              <option value="interview_scheduled" ${app.status === 'interview_scheduled' ? 'selected' : ''}>3단계: 면접 일정 확정</option>
              <option value="final_pass" ${app.status === 'final_pass' ? 'selected' : ''}>4단계: 최종 합격 🎉</option>
              <option value="final_fail" ${app.status === 'final_fail' ? 'selected' : ''}>최종 불합격</option>
            </select>
          </div>

          <div class="form-group">
            <label for="evalSchedule" style="font-weight:700;">면접 일시/장소 안내:</label>
            <input type="text" id="evalSchedule" value="${app.interviewSchedule || ''}" placeholder="예: 2026-10-04 (일) 15:00 비대면 Google Meet" />
          </div>
        </div>

        <div class="form-group">
          <label for="evalNotes" style="font-weight:700;">운영진 심사 평가 메모:</label>
          <textarea id="evalNotes" rows="2" placeholder="지원자에 대한 서류/면접 피드백, 강점 및 특이사항을 기록하세요.">${app.adminNotes || ''}</textarea>
        </div>
      </div>
    ` : ''}
  `;

  if (saveBtn) {
    saveBtn.style.display = isAdmin ? 'inline-flex' : 'none';
    saveBtn.onclick = () => saveApplicantEvaluation(app.id);
  }

  // Print button
  const printBtn = document.getElementById('btnPrintApplication');
  if (printBtn) {
    printBtn.onclick = () => window.print();
  }

  modal.style.display = 'flex';
}

function saveApplicantEvaluation(appId) {
  const statusEl = document.getElementById('evalStatus');
  const scheduleEl = document.getElementById('evalSchedule');
  const notesEl = document.getElementById('evalNotes');

  if (!statusEl) return;

  const newStatus = statusEl.value;
  const newSchedule = scheduleEl ? scheduleEl.value.trim() : '';
  const newNotes = notesEl ? notesEl.value.trim() : '';

  const targetApp = state.applications.find(a => a.id === appId);
  if (targetApp) {
    targetApp.status = newStatus;
    targetApp.interviewSchedule = newSchedule;
    targetApp.adminNotes = newNotes;
    targetApp.statusUpdatedAt = new Date().toLocaleString('ko-KR');

    saveApplications(state.applications);
    showToast(`[${targetApp.name}] 지원자의 심사 상태가 업데이트되었습니다.`, 'success');
  }

  closeApplicantReviewModal();
  renderAdminDashboard();
  updateHeroStats();
}

function closeApplicantReviewModal() {
  const modal = document.getElementById('applicantReviewModal');
  if (modal) modal.style.display = 'none';
}

// CSV Export
function exportClubApplicantsToCsv() {
  const clubId = state.adminSelectedClub;
  const club = state.clubs.find(c => c.id === clubId);
  const clubName = club ? club.name : '동아리';

  const apps = state.applications.filter(a => a.clubId === clubId);

  if (apps.length === 0) {
    showToast('내보낼 지원자 명단이 없습니다.', 'warning');
    return;
  }

  const headers = [
    '지원번호',
    '성명',
    '성별',
    '나이',
    '생년월일',
    '연락처',
    '이메일',
    '거주지역',
    '소속학교',
    '학과/전공',
    '학년',
    '관심분야',
    '진행상태',
    '면접일정',
    '지원일시',
    '하고싶은말(메모)'
  ];

  const rows = apps.map(a => [
    a.id,
    a.name,
    a.gender === 'male' ? '남성' : '여성',
    a.age,
    a.birthdate,
    a.phone,
    a.email,
    CITY_LABELS[a.city] || a.city,
    SCHOOL_LABELS[a.school] || a.school,
    a.major || '-',
    a.studentGrade || '-',
    (a.interests || []).join('; '),
    a.status,
    `"${(a.interviewSchedule || '').replace(/"/g, '""')}"`,
    a.submittedAt,
    `"${(a.memo || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`
  ]);

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${clubName}_지원자명단_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast(`${clubName} 지원자 명단 CSV가 다운로드되었습니다.`, 'success');
}

// =============================================================================
// 9. New Club Creation Modal
// =============================================================================

function setupNewClubModal() {
  const modal = document.getElementById('newClubModal');
  const openBtn = document.getElementById('btnOpenNewClubModal');
  const closeBtn = document.getElementById('btnCloseNewClubModal');
  const cancelBtn = document.getElementById('btnCancelNewClub');
  const form = document.getElementById('newClubForm');

  if (openBtn) openBtn.onclick = () => modal.style.display = 'flex';
  if (closeBtn) closeBtn.onclick = () => modal.style.display = 'none';
  if (cancelBtn) cancelBtn.onclick = () => modal.style.display = 'none';

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById('newClubName').value.trim();
      const category = document.getElementById('newClubCategory').value;
      const city = document.getElementById('newClubCity').value;
      const tagline = document.getElementById('newClubTagline').value.trim();
      const desc = document.getElementById('newClubDesc').value.trim();

      const newClub = {
        id: `club-custom-${Date.now()}`,
        name,
        category,
        categoryLabel: CATEGORY_LABELS[category] || category,
        tagline,
        description: desc,
        activityDetails: ['정기 주간 세미나 및 스터디', '팀 단위 자율 프로젝트 및 네트워킹'],
        city,
        schoolAffiliation: '연합',
        targetSchools: ['전체 대학교'],
        dDay: 14,
        status: '모집중',
        membersCount: 1,
        regularMeet: '매주 토요일 14:00',
        fee: '학기당 20,000원',
        tags: ['신규동아리', '열정', '동아리원모집'],
        customPrompt: '동아리에서 가장 하고 싶은 활동이나 기대사항을 적어주세요.'
      };

      state.clubs.unshift(newClub);
      saveClubs(state.clubs);
      form.reset();
      modal.style.display = 'none';

      showToast(`[${name}] 신규 동아리 모집 공고가 등록되었습니다!`, 'success');
      renderClubs();
      populateApplyClubDropdown();
      populateAdminClubSelect();
    };
  }
}

// =============================================================================
// 10. Initialization & Event Binding
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Navigation tabs
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  const navLogo = document.getElementById('navLogo');
  if (navLogo) navLogo.onclick = () => switchTab('tab-explore');

  const btnGoToExplore = document.getElementById('btnGoToExplore');
  if (btnGoToExplore) btnGoToExplore.onclick = () => switchTab('tab-explore');

  // Search input & filters
  const searchInput = document.getElementById('clubSearchInput');
  const searchClear = document.getElementById('clubSearchClear');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (searchClear) searchClear.style.display = e.target.value ? 'block' : 'none';
      renderClubs();
    });
  }
  if (searchClear) {
    searchClear.onclick = () => {
      searchInput.value = '';
      state.searchQuery = '';
      searchClear.style.display = 'none';
      renderClubs();
    };
  }

  // Category filter dropdown & chips
  const filterCategory = document.getElementById('filterCategory');
  if (filterCategory) {
    filterCategory.addEventListener('change', (e) => {
      state.activeCategory = e.target.value;
      updateCategoryChips(e.target.value);
      renderClubs();
    });
  }

  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const cat = chip.dataset.category;
      state.activeCategory = cat;
      if (filterCategory) filterCategory.value = cat;
      updateCategoryChips(cat);
      renderClubs();
    });
  });

  function updateCategoryChips(cat) {
    document.querySelectorAll('.chip').forEach(c => {
      c.classList.toggle('active', c.dataset.category === cat);
    });
  }

  const filterCity = document.getElementById('filterCity');
  if (filterCity) {
    filterCity.addEventListener('change', (e) => {
      state.cityFilter = e.target.value;
      renderClubs();
    });
  }

  const filterSchool = document.getElementById('filterSchool');
  if (filterSchool) {
    filterSchool.addEventListener('change', (e) => {
      state.schoolFilter = e.target.value;
      renderClubs();
    });
  }

  const btnResetFilters = document.getElementById('btnResetFilters');
  const btnResetSearch = document.getElementById('btnResetSearch');
  const resetFiltersFn = () => {
    state.searchQuery = '';
    state.activeCategory = 'all';
    state.cityFilter = 'all';
    state.schoolFilter = 'all';
    if (searchInput) searchInput.value = '';
    if (searchClear) searchClear.style.display = 'none';
    if (filterCategory) filterCategory.value = 'all';
    if (filterCity) filterCity.value = 'all';
    if (filterSchool) filterSchool.value = 'all';
    updateCategoryChips('all');
    renderClubs();
  };
  if (btnResetFilters) btnResetFilters.onclick = resetFiltersFn;
  if (btnResetSearch) btnResetSearch.onclick = resetFiltersFn;

  // Phone input formatting
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      e.target.value = formatPhoneInput(e.target.value);
    });
  }

  // Password visibility toggle
  const btnTogglePw = document.getElementById('btnTogglePassword');
  const pwInput = document.getElementById('password');
  if (btnTogglePw && pwInput) {
    btnTogglePw.onclick = () => {
      const isPw = pwInput.type === 'password';
      pwInput.type = isPw ? 'text' : 'password';
      btnTogglePw.textContent = isPw ? '🔒' : '👁️';
    };
  }

  // Memo character count listener
  const memoEl = document.getElementById('memo');
  if (memoEl) {
    memoEl.addEventListener('input', updateMemoCharCount);
  }

  // Form actions
  const form = document.getElementById('clubApplicationForm');
  if (form) {
    form.addEventListener('submit', handleApplicationSubmit);
    form.addEventListener('reset', () => {
      setTimeout(updateMemoCharCount, 50);
      showToast('지원서 입력 내용이 초기화되었습니다.', 'info');
    });
  }

  const btnSaveDraft = document.getElementById('btnSaveDraft');
  if (btnSaveDraft) {
    btnSaveDraft.onclick = () => {
      const clubId = document.getElementById('formClubId').value;
      saveDraftForClub(clubId);
    };
  }

  const btnFillDemoData = document.getElementById('btnFillDemoData');
  if (btnFillDemoData) {
    btnFillDemoData.onclick = fillDemoData;
  }

  // My Applications Email Lookup
  const btnLookupApps = document.getElementById('btnLookupApps');
  if (btnLookupApps) {
    btnLookupApps.onclick = () => {
      const email = document.getElementById('lookupEmail').value.trim();
      if (!email) {
        showToast('조회할 이메일을 입력해주세요.', 'warning');
        return;
      }
      state.activeUserEmail = email;
      localStorage.setItem('uniclub_user_email', email);
      renderMyApplications();
      showToast(`${email} 이메일 지원서가 조회되었습니다.`, 'info');
    };
  }

  // Admin controls
  const adminSearch = document.getElementById('adminSearchInput');
  if (adminSearch) {
    adminSearch.addEventListener('input', (e) => {
      state.adminSearchQuery = e.target.value;
      renderAdminDashboard();
    });
  }

  document.querySelectorAll('.status-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.status-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.adminStatusFilter = btn.dataset.status;
      renderAdminDashboard();
    });
  });

  const btnExportCsv = document.getElementById('btnExportCsv');
  if (btnExportCsv) {
    btnExportCsv.onclick = exportClubApplicantsToCsv;
  }

  // Modals closing
  const btnCloseClubModal = document.getElementById('btnCloseClubModal');
  const btnCloseClubModal2 = document.getElementById('btnCloseClubModal2');
  if (btnCloseClubModal) btnCloseClubModal.onclick = closeClubDetailModal;
  if (btnCloseClubModal2) btnCloseClubModal2.onclick = closeClubDetailModal;

  const btnCloseReviewModal = document.getElementById('btnCloseReviewModal');
  const btnCloseReviewModal2 = document.getElementById('btnCloseReviewModal2');
  if (btnCloseReviewModal) btnCloseReviewModal.onclick = closeApplicantReviewModal;
  if (btnCloseReviewModal2) btnCloseReviewModal2.onclick = closeApplicantReviewModal;

  // HTML Form Guide Modal
  const btnHtmlGuide = document.getElementById('btnHtmlGuide');
  const htmlGuideModal = document.getElementById('htmlGuideModal');
  const btnCloseHtmlGuide = document.getElementById('btnCloseHtmlGuide');
  const btnCloseHtmlGuide2 = document.getElementById('btnCloseHtmlGuide2');

  if (btnHtmlGuide && htmlGuideModal) {
    btnHtmlGuide.onclick = () => htmlGuideModal.style.display = 'flex';
  }
  if (btnCloseHtmlGuide && htmlGuideModal) {
    btnCloseHtmlGuide.onclick = () => htmlGuideModal.style.display = 'none';
  }
  if (btnCloseHtmlGuide2 && htmlGuideModal) {
    btnCloseHtmlGuide2.onclick = () => htmlGuideModal.style.display = 'none';
  }

  // Outside click to close modal
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      e.target.style.display = 'none';
    }
  });

  // Setup new club modal
  setupNewClubModal();

  // Initial populate
  populateApplyClubDropdown();
  renderClubs();
  renderMyApplications();
  renderAdminDashboard();
  updateMemoCharCount();
});
