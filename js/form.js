// ─── form.js ──────────────────────────────────────────
// Responsible for: form open, close, validate, submit
import { deepClone } from "../utils/index.js";
import { isRequired, isPositiveNumber, isNonNegativeInteger } from "./helpers.js";
import { addProduct, editProduct, findById } from "./products.js";
import { applyFilters } from "./filters.js";

let editingId = null; // null = adding, string = editing

// openAddForm — clear fields, reset editingId, set button to "Add Product"
export function openAddForm() {}

// openEditForm — populate fields with product data, set editingId
export function openEditForm(id) {}

// closeForm — clear fields, reset editingId, hide cancel button
export function closeForm() {}

// validateForm — check all fields, return { valid, errors }
export function validateForm(data) {}

// handleSubmit — collect values, validate, add or edit, re-render
export function handleSubmit() {}

// showErrors — inject error messages into DOM
function showErrors(errors) {}

// clearErrors — clear all error messages
function clearErrors() {}
