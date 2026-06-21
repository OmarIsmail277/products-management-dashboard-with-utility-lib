// ─── bonus.js ─────────────────────────────────────────
// Responsible for: undo delete, dark mode, export JSON
import { customMap } from "../utils/index.js";
import { loadFromStorage, saveToStorage } from "./helpers.js";
import { restoreProduct, getProducts } from "./products.js";
import { applyFilters } from "./filters.js";

let lastDeleted  = null;
let undoTimer    = null;

// deleteWithUndo — delete product, store it, show toast with countdown
export function deleteWithUndo(id) {}

// undoDelete — restore lastDeleted, re-render, hide toast
export function undoDelete() {}

// showToast — show toast with message
function showToast(message) {}

// hideToast — hide toast
function hideToast() {}

// toggleDarkMode — toggle data-theme on body, persist to localStorage
export function toggleDarkMode() {}

// loadDarkMode — on page load apply saved theme
export function loadDarkMode() {}

// exportJSON — shape products with customMap, download as .json file
export function exportJSON() {}
