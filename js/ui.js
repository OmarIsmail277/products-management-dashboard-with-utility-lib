// ─── ui.js ────────────────────────────────────────────
// Responsible for: reading data and writing to DOM only
import { customMap, customReduce, groupBy } from "../utils/index.js";
import { formatCurrency, formatDate } from "./helpers.js";
import { getProducts } from "./products.js";

// renderTable — receive filtered array, inject rows into tbody
export function renderTable(filtered) {}

// renderStats — always uses full unfiltered products array
export function renderStats() {}

// renderEmptyState — show "No Products Found" row
export function renderEmptyState() {}
