// ─── ui.js ────────────────────────────────────────────
// Responsible for: reading data and writing to DOM only
import { customMap, customReduce, groupBy } from "../utils/index.js";
import { formatCurrency, formatDate, sanitize } from "./helpers.js";
import { getProducts } from "./products.js";

const tableBody = document.getElementById("tableBody");
const statTotal = document.getElementById("statTotal");
const statValue = document.getElementById("statValue");
const statExpensive = document.getElementById("statExpensive");

// renderTable — receive filtered array, inject rows into tbody
export function renderTable(filtered) {
  if (!filtered || filtered.length === 0) {
    renderEmptyState();
    return;
  }

  const rows = customMap(
    filtered,
    (product) => `
    <tr>
      <td>${sanitize(product.title)}</td>
      <td class="price">${formatCurrency(product.price)}</td>
      <td><span class="badge">${sanitize(product.category)}</span></td>
      <td>${product.stock}</td>
      <td>${formatDate(product.createdAt)}</td>
      <td class="actions">
        <button class="btn--edit"  data-id="${product.id}">Edit</button>
        <button class="btn--delete" data-id="${product.id}">Delete</button>
      </td>
    </tr>
  `,
  );

  tableBody.innerHTML = rows.join("");
}

// renderStats — always uses full unfiltered products array
export function renderStats() {
  const products = getProducts();

  statTotal.textContent = products.length;

  const totalValue = customReduce(
    products,
    (acc, p) => acc + p.price * p.stock,
    0,
  );
  statValue.textContent = formatCurrency(totalValue);

  let mostExpensive = null;
  for (let i = 0; i < products.length; i++) {
    if (!mostExpensive || products[i].price > mostExpensive.price) {
      mostExpensive = products[i];
    }
  }

  statExpensive.textContent = mostExpensive
    ? sanitize(mostExpensive.title)
    : "-";
}

// renderEmptyState — show "No Products Found" row
export function renderEmptyState() {
  tableBody.innerHTML = `
    <tr>
        <td colspan="6" class="empty-state"> No Products Found</td>
    </tr>
    `;
}
