// ─── products.js ──────────────────────────────────────
// Responsible for: managing the in-memory products array
import { deepClone } from "../utils/index.js";
import { generateId, formatDate, saveToStorage } from "./helpers.js";
import { loadProducts, saveProducts } from "./data.js";

let products = [];

// getProducts — return current products array
export function getProducts() {}

// initProducts — load from localStorage on startup
export function initProducts() {}

// addProduct — receive form data, create product, push, save
export function addProduct(data) {}

// editProduct — find by id, update fields, save
export function editProduct(id, data) {}

// deleteProduct — remove by id, save, return deleted product
export function deleteProduct(id) {}

// findById — return product matching id or null
export function findById(id) {}

// restoreProduct — re-insert a previously deleted product (undo)
export function restoreProduct(product) {}
