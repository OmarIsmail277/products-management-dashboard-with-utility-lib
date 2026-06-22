// ─── events.js ────────────────────────────────────────
// Responsible for: wiring all DOM event listeners
// This is the entry point — the only file loaded by index.html
import { initProducts } from "./products.js";
import { applyFilters, setSearch, setCategory, setSort } from "./filters.js";
import { handleSubmit, openAddForm, closeForm } from "./form.js";
import {
  deleteWithUndo,
  undoDelete,
  toggleDarkMode,
  loadDarkMode,
  exportJSON,
} from "./bonus.js";
import { renderStats } from "./ui.js";

// ─── DOM References ───────────────────────────────────
const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");
const sortSelect = document.getElementById("sortSelect");
const btnSubmit = document.getElementById("btnSubmit");
const btnCancel = document.getElementById("btnCancel");
const darkModeToggle = document.getElementById("darkModeToggle");
const btnExport = document.getElementById("btnExport");
const toastUndo = document.getElementById("toastUndo");
const tableBody = document.getElementById("tableBody");

// init — called once on DOMContentLoaded
function init() {
  // 1. load dark mode preference
  loadDarkMode();
  // 2. load products from localStorage
  initProducts();
  // 3. render initial state
  applyFilters();
  // 4. wire all listeners below
  wireListeners();
}

function wireListeners() {
  // ── Filters ─────────────────────────────────────────
  searchInput.addEventListener("input", (e) => setSearch(e.target.value));
  filterCategory.addEventListener("change", (e) => setCategory(e.target.value));
  sortSelect.addEventListener("change", (e) => setSort(e.target.value));

  // ── Form ────────────────────────────────────────────
  btnSubmit.addEventListener("click", handleSubmit);
  btnCancel.addEventListener("click", resetForm);

  // ── Bonus ────────────────────────────────────────────
  darkModeToggle.addEventListener("click", toggleDarkMode);
  btnExport.addEventListener("click", exportJSON);
  toastUndo.addEventListener("click", undoDelete);

  // ── Table — event delegation ─────────────────────────
  // buttons are injected dynamically so we listen on the parent
  tableBody.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (!id) return; // clicked somewhere else in the table

    if (e.target.classList.contains("btn--edit")) {
      populateForm(id);
    }

    if (e.target.classList.contains("btn--delete")) {
      deleteWithUndo(id);
    }
  });
}

// ─── Listeners ────────────────────────────────────────

// search input       → oninput  → setSearch
// category select    → onchange → setCategory
// sort select        → onchange → setSort
// submit button      → onclick  → handleSubmit
// cancel button      → onclick  → closeForm
// dark mode toggle   → onclick  → toggleDarkMode
// export button      → onclick  → exportJSON
// toast undo button  → onclick  → undoDelete

// table → onclick (event delegation)
//   if edit button clicked  → openEditForm(id)
//   if delete button clicked → deleteWithUndo(id)

document.addEventListener("DOMContentLoaded", init);
