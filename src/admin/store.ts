// Simple localStorage-backed store. Swap for a real API later.

export type GalleryItem = { id: string; title: string; category: string; src: string };
export type FacultyItem = { id: string; name: string; designation: string; qualification: string; photo: string; type: "teaching" | "non-teaching" };
export type Notice = { id: string; title: string; date: string; body: string };

const KEYS = { gallery: "rcn_gallery", faculty: "rcn_faculty", notices: "rcn_notices" };

export function load<T>(key: keyof typeof KEYS, fallback: T[]): T[] {
  try {
    const raw = localStorage.getItem(KEYS[key]);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function save<T>(key: keyof typeof KEYS, data: T[]) {
  localStorage.setItem(KEYS[key], JSON.stringify(data));
}

export const uid = () => Math.random().toString(36).slice(2, 10);