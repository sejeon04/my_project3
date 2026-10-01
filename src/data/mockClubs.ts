import { Club } from '../types';

export const INITIAL_CLUBS: Club[] = [
  {
    id: 'club-codetree',
    name: '코드트리 (CodeTree)',
    category: 'coding',
    categoryLabel: '코딩/IT',
    tagline: '아이디어를 현실의 서비스로 빌드하는 수도권 연합 개발 동아리',
    description: '웹 프론트엔드, 백엔드, 모바일 앱, AI 서비스 프로젝트를 실제 런칭하고 서비스 운영 경험을 쌓는 실전 소프트웨어 개발 연합 동아리입니다. 방학 해커톤 및 현업 멘토링 세션이 준비되어 있습니다.',
    activityDetails: [
      '매주 토요일 정기 개발 세미나 & 기술 스택 스터디',
      '한 학기 1개 팀 단위 프로덕트 런칭 (웹/앱 스토어 배포)',
      '현직 IT 기업(네카라쿠배) 개발자 멘토링 및 코드 리뷰',
      '여름/겨울방학 무박 2일 해커톤 개최'
    ],
    city: 'seoul',
    schoolAffiliation: '연합',
    targetSchools: ['서울대학교', '중앙대학교', '숭실대학교', '연세대학교', '고려대학교', '전체 대학교'],
    recruitmentPeriod: {
      start: '2026-09-15',
      end: '2026-10-10',
      dDay: 9,
      status: '모집중'
    },
    membersCount: 48,
    establishedYear: 2019,
    regularMeetSchedule: '매주 토요일 14:00 ~ 18:00 (강남/신촌 스터디룸)',
    location: '서울 강남구 / 마포구 신촌',
    membershipFee: '학기당 35,000원 (대관료 및 서버비 지원)',
    recruitmentProcess: ['서류 접수', '1차 서류 심사 발표', '온라인 비대면 면접', '최종 합격자 OT'],
    coverGradient: 'from-blue-600 via-indigo-600 to-violet-700',
    accentColor: 'indigo',
    iconName: 'Code',
    tags: ['웹개발', 'AI', '해커톤', '포트폴리오', '스프린트'],
    idealCandidate: [
      '새로운 기술 스택에 호기심이 많고 끝까지 구현해보려는 분',
      '팀원과의 의사소통 및 협업 태도가 긍정적인 분',
      '정기 모임 및 프로젝트 스프린트에 성실히 참여 가능한 분'
    ],
    customQuestionPrompt: '가장 관심 있는 기술 분야나 개발해보고 싶은 서비스 아이디어를 적어주세요.'
  },
  {
    id: 'club-soundwave',
    name: '소리울림 (SoundWave)',
    category: 'music',
    categoryLabel: '음악/밴드',
    tagline: '마음을 울리는 멜로디, 홍대 정기 라이브 공연을 함께할 밴드 크루',
    description: '어쿠스틱, 인디 팝, 모던 락을 사랑하는 대학생들이 모인 라이브 사운드 밴드입니다. 보컬, 일렉기타, 베이스, 드럼, 건반, 어쿠스틱 세션이 조화롭게 합주하며 매 학기말 정기 단독 콘서트를 진행합니다.',
    activityDetails: [
      '주 1회 팀별 합주실 정기 연습 (합정/홍대 전문 합주실)',
      '봄/가을 대학 버스킹 및 홍대 클럽 라이브 정기 공연',
      '자작곡 음원 녹음 및 스트리밍 발매 지원',
      '선후배 악기 테크닉 교류 및 잼(Jam) 세션'
    ],
    city: 'seoul',
    schoolAffiliation: '연합',
    targetSchools: ['서울대학교', '중앙대학교', '숭실대학교', '홍익대학교', '전체 대학교'],
    recruitmentPeriod: {
      start: '2026-09-20',
      end: '2026-10-05',
      dDay: 4,
      status: '마감임박'
    },
    membersCount: 32,
    establishedYear: 2016,
    regularMeetSchedule: '매주 목요일 18:30 ~ 21:00 (합정 합주실)',
    location: '서울 마포구 서교동',
    membershipFee: '학기당 40,000원 (합주실 대여비 분담)',
    recruitmentProcess: ['서류 접수', '자유곡 연주/보컬 오디션 면접', '최종 합격'],
    coverGradient: 'from-amber-500 via-rose-500 to-pink-600',
    accentColor: 'rose',
    iconName: 'Music',
    tags: ['인디밴드', '정기공연', '보컬', '합주', '버스킹'],
    idealCandidate: [
      '자신의 악기 연주나 노래에 열정이 넘치는 분',
      '합주 약속 시간을 엄격히 지키고 배려할 줄 아는 분',
      '홍대 라이브 클럽 무대 위에서 추억을 만들고 싶은 분'
    ],
    customQuestionPrompt: '지원하시는 파트(보컬, 기타, 베이스, 드럼, 건반 등)와 가장 좋아하는 아티스트를 적어주세요.'
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
    targetSchools: ['중앙대학교', '숭실대학교', '서울대학교', '인하대학교', '전체 대학교'],
    recruitmentPeriod: {
      start: '2026-09-01',
      end: '2026-10-15',
      dDay: 14,
      status: '모집중'
    },
    membersCount: 65,
    establishedYear: 2018,
    regularMeetSchedule: '월 2회 격주 일요일 정기 모임 및 투어',
    location: '서울/경기 수도권 중심',
    membershipFee: '학기당 20,000원 (투어 교통/숙소 실비 개별정산)',
    recruitmentProcess: ['온라인 서류 접수', '비대면 티타임 인터뷰', '첫 출사 환영회'],
    coverGradient: 'from-emerald-500 via-teal-600 to-cyan-700',
    accentColor: 'teal',
    iconName: 'Compass',
    tags: ['배낭여행', '캠핑', '출사', '국내여행', '힐링'],
    idealCandidate: [
      '새로운 사람들과 진솔하게 이야기 나누며 떠나는 걸 좋아하는 분',
      '체력과 열정을 갖추고 야외 액티비티를 즐기는 분',
      '안전 수칙을 준수하고 책임감 있는 분'
    ],
    customQuestionPrompt: '지금까지 가본 여행지 중 가장 기억에 남는 장소와 그 이유를 짧게 들려주세요.'
  },
  {
    id: 'club-next-startup',
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
    recruitmentPeriod: {
      start: '2026-09-10',
      end: '2026-10-03',
      dDay: 2,
      status: '마감임박'
    },
    membersCount: 26,
    establishedYear: 2020,
    regularMeetSchedule: '매주 수요일 19:00 ~ 22:00 (교내 스타트업 라운지)',
    location: '서울 관악구 / 동작구',
    membershipFee: '학기당 25,000원',
    recruitmentProcess: ['서류 전형', '심층 문제해결 면접', '최종 합격'],
    coverGradient: 'from-purple-600 via-indigo-700 to-blue-800',
    accentColor: 'purple',
    iconName: 'Briefcase',
    tags: ['스타트업', 'IR피칭', '사업계획서', 'MVP', '네트워킹'],
    idealCandidate: [
      '세상의 불편한 문제를 기술과 비즈니스로 풀고 싶은 분',
      '도전 정신과 실패를 두려워하지 않는 회복탄력성이 있는 분'
    ],
    customQuestionPrompt: '해결하고 싶은 사회적/일상적 불편함이나 비즈니스 문제의식이 있다면 작성해주세요.'
  },
  {
    id: 'club-haebit-volunteer',
    name: '햇빛나눔 사회봉사단',
    category: 'volunteer',
    categoryLabel: '사회봉사',
    tagline: '따뜻한 온기를 지역사회 아동 및 어르신과 나누는 가치 실천 동아리',
    description: '지역아동센터 기초학습 멘토링, 주말 독거 어르신 도시락 배달, 유기동물 보호소 정기 봉사활동을 진행하는 따뜻한 청년 봉사 단체입니다. 봉사시간 VMS/1365 인정 및 우수봉사 표창 추천이 가능합니다.',
    activityDetails: [
      '취약계층 청소년 1:1 진로 및 기초교과 멘토링',
      '월 2회 유기동물 보호소 산책 및 환경정화 활동',
      '겨울철 사랑의 연탄 나눔 및 연말 바자회 기획',
      '1365/VMS 봉사시간 인증 및 활동 증명서 발급'
    ],
    city: 'seoul',
    schoolAffiliation: '연합',
    targetSchools: ['서울대학교', '중앙대학교', '숭실대학교', '전체 대학교'],
    recruitmentPeriod: {
      start: '2026-09-01',
      end: '2026-10-31',
      dDay: 30,
      status: '상시모집'
    },
    membersCount: 55,
    establishedYear: 2015,
    regularMeetSchedule: '매주 토요일 오전 10:00 ~ 13:00',
    location: '서울 동작구 / 영등포구 일대',
    membershipFee: '학기당 15,000원 (봉사 물품 및 간식비)',
    recruitmentProcess: ['온라인 신청서 접수', '전화 면담', '활동 시작'],
    coverGradient: 'from-orange-500 via-amber-500 to-yellow-500',
    accentColor: 'amber',
    iconName: 'Heart',
    tags: ['멘토링', '유기동물', 'VMS인증', '나눔', '선한영향력'],
    idealCandidate: [
      '아이들과 동물을 사랑하고 약속을 끝까지 지키는 분',
      '진심 어린 마음으로 사회에 긍정적 변화를 만들고자 하는 분'
    ],
    customQuestionPrompt: '봉사활동 경험이 있거나 햇빛나눔에서 가장 실천해보고 싶은 봉사 분야를 알려주세요.'
  },
  {
    id: 'club-peak-climbing',
    name: '클라임하이 (Climb High)',
    category: 'sports',
    categoryLabel: '체육/레저',
    tagline: '한 걸음씩 정상으로! 수도권 대학생 볼더링 & 실내 클라이밍 크루',
    description: '볼더링의 매력에 푹 빠진 초보자부터 숙련자까지 모두 환영합니다. 주 1~2회 서울 주요 암장에서 정기 세션을 가지며 서로의 홀드 무브를 응원하고 체력과 집중력을 단련합니다.',
    activityDetails: [
      '주 2회 지정 암장 그룹 볼더링 세션 (더클라임 신림/홍대/강남)',
      '초보자를 위한 그립법 및 기본 발동작 무료 코칭',
      '분기별 자연 바위 리드 클라이밍 체험 캠프',
      '크루 전용 단체 티셔츠 및 굿즈 제작'
    ],
    city: 'seoul',
    schoolAffiliation: '연합',
    targetSchools: ['중앙대학교', '숭실대학교', '서울대학교', '전체 대학교'],
    recruitmentPeriod: {
      start: '2026-09-18',
      end: '2026-10-08',
      dDay: 7,
      status: '모집중'
    },
    membersCount: 42,
    establishedYear: 2021,
    regularMeetSchedule: '매주 화/목 19:30 (자율 참석) & 주말 정기세션',
    location: '서울 마포/관악/강남',
    membershipFee: '학기당 20,000원 (암장 이용권은 개별 결제)',
    recruitmentProcess: ['신청서 접수', '단톡방 초대 및 첫 세션 참가'],
    coverGradient: 'from-lime-600 via-emerald-600 to-teal-700',
    accentColor: 'lime',
    iconName: 'Activity',
    tags: ['클라이밍', '볼더링', '운동', '건강', '친목'],
    idealCandidate: [
      '클라이밍을 처음 시작하거나 꾸준히 운동 습관을 만들고 싶은 분',
      '안전 수칙을 준수하고 서로를 격려해주는 밝은 성격의 소유자'
    ],
    customQuestionPrompt: '현재 즐겨하는 운동이나 클라이밍 경험 유무를 자유롭게 적어주세요.'
  }
];
