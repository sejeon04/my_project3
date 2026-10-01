import { ApplicationStatus } from '../types';

export function getStatusBadge(status: ApplicationStatus): {
  label: string;
  bg: string;
  text: string;
  border: string;
  step: number;
} {
  switch (status) {
    case 'submitted':
      return {
        label: '서류접수 완료',
        bg: 'bg-blue-50 text-blue-700',
        text: 'text-blue-700',
        border: 'border-blue-200',
        step: 1
      };
    case 'document_pass':
      return {
        label: '서류 합격',
        bg: 'bg-emerald-50 text-emerald-700',
        text: 'text-emerald-700',
        border: 'border-emerald-200',
        step: 2
      };
    case 'document_fail':
      return {
        label: '서류 불합격',
        bg: 'bg-rose-50 text-rose-700',
        text: 'text-rose-700',
        border: 'border-rose-200',
        step: 2
      };
    case 'interview_scheduled':
      return {
        label: '면접 일정 확정',
        bg: 'bg-purple-50 text-purple-700',
        text: 'text-purple-700',
        border: 'border-purple-200',
        step: 3
      };
    case 'final_pass':
      return {
        label: '최종 합격 🎉',
        bg: 'bg-green-100 text-green-800 font-bold',
        text: 'text-green-800',
        border: 'border-green-300',
        step: 4
      };
    case 'final_fail':
      return {
        label: '최종 불합격',
        bg: 'bg-gray-100 text-gray-700',
        text: 'text-gray-700',
        border: 'border-gray-300',
        step: 4
      };
    default:
      return {
        label: '검토 중',
        bg: 'bg-slate-100 text-slate-700',
        text: 'text-slate-700',
        border: 'border-slate-200',
        step: 1
      };
  }
}

export function formatPhoneNumber(val: string): string {
  const digits = val.replace(/\D/g, '');
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
}

export function exportApplicationsToCSV(applications: any[], clubName: string) {
  const headers = [
    '지원번호',
    '이름',
    '성별',
    '나이',
    '생년월일',
    '연락처',
    '이메일',
    '지역',
    '대학교',
    '학과',
    '관심분야',
    '지원일시',
    '진행상태',
    '하고싶은 말(메모)'
  ];

  const rows = applications.map(app => [
    app.id,
    app.name,
    app.gender === 'male' ? '남성' : '여성',
    app.age,
    app.birthdate,
    app.phone,
    app.email,
    app.city,
    app.school,
    app.major || '-',
    (app.interests || []).join('; '),
    app.submittedAt,
    getStatusBadge(app.status).label,
    `"${(app.memo || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`
  ]);

  const csvContent =
    '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute(
    'download',
    `${clubName}_지원자명단_${new Date().toISOString().slice(0, 10)}.csv`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
