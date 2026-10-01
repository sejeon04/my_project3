import { Application, Club } from '../types';
import { INITIAL_CLUBS } from '../data/mockClubs';
import { INITIAL_APPLICATIONS } from '../data/mockApplications';

const CLUBS_KEY = 'uniclub_clubs_v1';
const APPLICATIONS_KEY = 'uniclub_applications_v1';
const BOOKMARKS_KEY = 'uniclub_bookmarks_v1';
const DRAFT_PREFIX = 'uniclub_draft_';

export function getStoredClubs(): Club[] {
  try {
    const raw = localStorage.getItem(CLUBS_KEY);
    if (!raw) {
      localStorage.setItem(CLUBS_KEY, JSON.stringify(INITIAL_CLUBS));
      return INITIAL_CLUBS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_CLUBS;
  }
}

export function saveStoredClubs(clubs: Club[]): void {
  localStorage.setItem(CLUBS_KEY, JSON.stringify(clubs));
}

export function getStoredApplications(): Application[] {
  try {
    const raw = localStorage.getItem(APPLICATIONS_KEY);
    if (!raw) {
      localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(INITIAL_APPLICATIONS));
      return INITIAL_APPLICATIONS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_APPLICATIONS;
  }
}

export function saveStoredApplications(apps: Application[]): void {
  localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(apps));
}

export function addApplication(app: Application): void {
  const current = getStoredApplications();
  const updated = [app, ...current];
  saveStoredApplications(updated);
}

export function updateApplicationStatus(
  appId: string,
  newStatus: Application['status'],
  notes?: string,
  interviewSchedule?: string,
  rating?: number
): Application[] {
  const current = getStoredApplications();
  const updated = current.map(item => {
    if (item.id === appId) {
      return {
        ...item,
        status: newStatus,
        statusUpdatedAt: new Date().toLocaleString('ko-KR'),
        ...(notes !== undefined ? { adminNotes: notes } : {}),
        ...(interviewSchedule !== undefined ? { interviewSchedule } : {}),
        ...(rating !== undefined ? { adminRating: rating } : {})
      };
    }
    return item;
  });
  saveStoredApplications(updated);
  return updated;
}

export function deleteApplication(appId: string): Application[] {
  const current = getStoredApplications();
  const updated = current.filter(item => item.id !== appId);
  saveStoredApplications(updated);
  return updated;
}

export function getBookmarks(): string[] {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleBookmark(clubId: string): string[] {
  const current = getBookmarks();
  let updated: string[];
  if (current.includes(clubId)) {
    updated = current.filter(id => id !== clubId);
  } else {
    updated = [...current, clubId];
  }
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
  return updated;
}

export function saveDraftForm(clubId: string, data: Record<string, any>): void {
  localStorage.setItem(`${DRAFT_PREFIX}${clubId}`, JSON.stringify(data));
}

export function getDraftForm(clubId: string): Record<string, any> | null {
  try {
    const raw = localStorage.getItem(`${DRAFT_PREFIX}${clubId}`);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearDraftForm(clubId: string): void {
  localStorage.removeItem(`${DRAFT_PREFIX}${clubId}`);
}
