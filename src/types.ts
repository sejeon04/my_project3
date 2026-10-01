export type ClubCategory =
  | 'coding'
  | 'music'
  | 'travel'
  | 'art'
  | 'volunteer'
  | 'sports'
  | 'startup'
  | 'study';

export interface Club {
  id: string;
  name: string;
  category: ClubCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  activityDetails: string[];
  city: string;
  schoolAffiliation: '연합' | '교내';
  targetSchools: string[];
  recruitmentPeriod: {
    start: string;
    end: string;
    dDay: number;
    status: '모집중' | '마감임박' | '상시모집' | '모집마감';
  };
  membersCount: number;
  establishedYear: number;
  regularMeetSchedule: string;
  location: string;
  membershipFee: string;
  recruitmentProcess: string[];
  coverGradient: string;
  accentColor: string;
  iconName: string;
  tags: string[];
  idealCandidate: string[];
  customQuestionPrompt?: string;
}

export type ApplicationStatus =
  | 'submitted'
  | 'document_pass'
  | 'document_fail'
  | 'interview_scheduled'
  | 'final_pass'
  | 'final_fail';

export interface Application {
  id: string;
  clubId: string;
  clubName: string;
  clubCategory: ClubCategory;
  submittedAt: string;
  status: ApplicationStatus;
  statusUpdatedAt?: string;
  adminRating?: number; // 1-5
  adminNotes?: string;
  interviewSchedule?: string;

  // Form Fields based on User's HTML specification:
  name: string; // <input type="text" id="name">
  email: string; // <input type="email" id="email">
  password?: string; // <input type="password" id="password">
  phone: string; // <input type="tel" id="phone">
  age: number; // <input type="number" id="age" min="1" max="120">
  birthdate: string; // <input type="date" id="birthdate">
  gender: 'male' | 'female'; // <input type="radio" name="gender">
  interests: string[]; // <input type="checkbox" name="interests"> (코딩, 음악, 여행, etc.)
  city: string; // <select id="city">
  school: string; // <select id="school">
  
  // Extended fields for college applications
  major?: string;
  studentGrade?: string; // 1학년, 2학년, 3학년, 4학년, 휴학 등
  portfolioUrl?: string;
  memo: string; // <textarea id="memo" name="memo">
  customAnswer?: string;
}

export interface CityOption {
  value: string;
  label: string;
}

export interface SchoolOption {
  value: string;
  label: string;
}
