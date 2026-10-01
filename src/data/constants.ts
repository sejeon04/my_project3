import { CityOption, SchoolOption } from '../types';

export const CITY_OPTIONS: CityOption[] = [
  { value: 'seoul', label: '서울' },
  { value: 'gyeonggi', label: '경기' },
  { value: 'incheon', label: '인천' },
  { value: 'busan', label: '부산' },
  { value: 'daegu', label: '대구' },
  { value: 'gwangju', label: '광주' },
  { value: 'daejeon', label: '대전' },
  { value: 'ulsan', label: '울산' },
  { value: 'jeju', label: '제주' },
  { value: 'gangwon', label: '강원' },
  { value: 'chungbuk', label: '충북' },
  { value: 'chungnam', label: '충남' },
];

export const SCHOOL_OPTIONS: SchoolOption[] = [
  { value: 'snu', label: '서울대학교' },
  { value: 'cau', label: '중앙대학교' },
  { value: 'ssu', label: '숭실대학교' },
  { value: 'yonsei', label: '연세대학교' },
  { value: 'korea', label: '고려대학교' },
  { value: 'skku', label: '성균관대학교' },
  { value: 'hanyang', label: '한양대학교' },
  { value: 'khu', label: '경희대학교' },
  { value: 'kmu', label: '국민대학교' },
  { value: 'uos', label: '서울시립대학교' },
  { value: 'kaist', label: 'KAIST' },
  { value: 'other', label: '기타 대학교' },
];

export const INTEREST_OPTIONS = [
  { id: 'coding', label: '코딩 (Coding)', icon: 'Code', desc: '웹, 앱, AI, 알고리즘' },
  { id: 'music', label: '음악 (Music)', icon: 'Music', desc: '밴드, 보컬, 악기, 작곡' },
  { id: 'travel', label: '여행 (Travel)', icon: 'Compass', desc: '국내/해외 배낭여행, 캠핑' },
  { id: 'startup', label: '창업/경영', icon: 'Briefcase', desc: '비즈니스 모델, IR, 해커톤' },
  { id: 'volunteer', label: '사회봉사', icon: 'Heart', desc: '교육 봉사, 유기동물, 환경' },
  { id: 'sports', label: '체육/레저', icon: 'Activity', desc: '축구, 클라이밍, 러닝 크루' },
  { id: 'art', label: '디자인/미디어', icon: 'Palette', desc: 'UI/UX, 일러스트, 영상 제작' },
  { id: 'study', label: '학술/토론', icon: 'BookOpen', desc: '외국어, 시사 토론, 독서' },
];

export const GENDER_OPTIONS = [
  { value: 'male', label: '남성 (Male)' },
  { value: 'female', label: '여성 (Female)' },
];
