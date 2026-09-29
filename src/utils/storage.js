export const KEYS = {
  thoughts: "psyche.thoughts",
  emotions: "psyche.customEmotions",
};

export function load(key, fallback) {
  const raw = localStorage.getItem(key);
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
