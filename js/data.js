// ─── data.js ──────────────────────────────────────────
// Responsible for: talking to localStorage only
import { saveToStorage, loadFromStorage, generateId, formatDate } from "./helpers.js";

const STORAGE_KEY = "products";

// loadProducts — read from localStorage, return array or []
export function loadProducts() {}

// saveProducts — stringify and save products array
export function saveProducts(products) {}

// seedProducts — if localStorage empty, seed with 3 dummy products
export function seedProducts() {}
