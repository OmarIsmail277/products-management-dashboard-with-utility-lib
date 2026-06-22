// ─── helpers.js ───────────────────────────────────────
// Project-specific utility functions for the dashboard
// These complement the imported utilities from assignment 1

// ─── generateId ───────────────────────────────────────
// generates a unique id for each product
// uses Date.now() + random string to avoid collisions
export function generateId() {
  return (
    "prod_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6)
  );
}

// ─── formatDate ───────────────────────────────────────
// formats a date string into a readable format
// "2024-01-15T10:30:00.000Z" → "Jan 15, 2024, 10:30 AM"
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ─── formatCurrency ───────────────────────────────────
// formats a number as a currency string
// 1299.9 → "$1,299.90"
export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

// ─── isRequired ───────────────────────────────────────
// checks if a value is not empty
// returns true if valid, false if empty
export function isRequired(value) {
  return value !== null && value !== undefined && String(value).trim() !== "";
}

// ─── isPositiveNumber ─────────────────────────────────
// checks if a value is a number greater than 0
export function isPositiveNumber(value) {
  return !isNaN(value) && Number(value) > 0;
}

// ─── isNonNegativeInteger ─────────────────────────────
// checks if a value is a whole number >= 0 (for stock)
export function isNonNegativeInteger(value) {
  return !isNaN(value) && Number(value) >= 0 && Number.isInteger(Number(value));
}

// ─── saveToStorage ────────────────────────────────────
// saves any value to localStorage under the given key
// automatically JSON stringifies the value
export function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving to storage:", error);
  }
}

// ─── loadFromStorage ──────────────────────────────────
// loads and parses a value from localStorage
// returns null if the key doesn't exist
export function loadFromStorage(key) {
  try {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Error loading from storage:", error);
    return null;
  }
}
