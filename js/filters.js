// ─── filters.js ───────────────────────────────────────
// Responsible for: filter state + applyFilters logic
import { customFilter } from "../utils/index.js";
import { getProducts } from "./products.js";
import { renderTable, renderStats } from "./ui.js";

// filter state
let searchTerm = "";
let selectedCategory = "all";
let selectedSort = "default";

// setters — update state then re-apply
export function setSearch(value) {
  searchTerm = value;
  applyFilters();
}

export function setCategory(value) {
  selectedCategory = value;
  applyFilters();
}

export function setSort(value) {
  selectedSort = value;
  applyFilters();
}

// applyFilters — the core function
// step 1: start with all products
// step 2: apply search (customFilter, case insensitive)
// step 3: apply category (customFilter)
// step 4: apply sort (price asc/desc, date newest/oldest)
// step 5: renderTable(result) + renderStats()
export function applyFilters() {
  const allProducts = getProducts();

  let result = [...allProducts];

  // search
  if (searchTerm) {
    const cleanSearch = searchTerm.toLowerCase();
    result = customFilter(result, (p) =>
      p.title.toLowerCase().includes(cleanSearch),
    );
  }

  if (selectedCategory !== "all") {
    result = customFilter(result, (p) => p.category === selectedCategory);
  }

  if (selectedSort === "price-asc") {
    result.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "price-desc") {
    result.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "newest") {
    result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (selectedSort === "oldest") {
    result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }

  renderTable(result);
  renderStats();
}
