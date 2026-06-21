// ─── events.js ────────────────────────────────────────
// Responsible for: wiring all DOM event listeners
// This is the entry point — the only file loaded by index.html
import { initProducts } from "./products.js";
import { applyFilters, setSearch, setCategory, setSort } from "./filters.js";
import { handleSubmit, openAddForm, closeForm } from "./form.js";
import { deleteWithUndo, undoDelete, toggleDarkMode, loadDarkMode, exportJSON } from "./bonus.js";
import { renderStats } from "./ui.js";

// init — called once on DOMContentLoaded
function init() {
  // 1. load dark mode preference
  // 2. load products from localStorage
  // 3. render initial state
  // 4. wire all listeners below
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
