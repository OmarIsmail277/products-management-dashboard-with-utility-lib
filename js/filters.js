// ─── filters.js ───────────────────────────────────────
// Responsible for: filter state + applyFilters logic
import { customFilter } from "../utils/index.js";
import { getProducts } from "./products.js";
import { renderTable, renderStats } from "./ui.js";

// filter state
let searchTerm       = "";
let selectedCategory = "all";
let selectedSort     = "default";

// setters — update state then re-apply
export function setSearch(value) {}
export function setCategory(value) {}
export function setSort(value) {}

// applyFilters — the core function
// step 1: start with all products
// step 2: apply search (customFilter, case insensitive)
// step 3: apply category (customFilter)
// step 4: apply sort (price asc/desc, date newest/oldest)
// step 5: renderTable(result) + renderStats()
export function applyFilters() {}
