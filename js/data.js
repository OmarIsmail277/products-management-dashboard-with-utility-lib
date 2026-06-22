// ─── data.js ──────────────────────────────────────────
// Responsible for: talking to localStorage only
import {
  saveToStorage,
  loadFromStorage,
  generateId,
  formatDate,
} from "./helpers.js";

const STORAGE_KEY = "products";

// loadProducts — read from localStorage, return array or []
export function loadProducts() {
  return loadFromStorage(STORAGE_KEY) ?? [];
}

// saveProducts — stringify and save products array
export function saveProducts(products) {
  saveToStorage(STORAGE_KEY, products ?? []);
}
