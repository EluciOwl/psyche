const STORAGE_KEY = "psyche.thoughts";

export function loadThoughts() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveThoughts(thoughts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(thoughts));
}

