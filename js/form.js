// ─── form.js ──────────────────────────────────────────
// Responsible for: form open, close, validate, submit
import { deepClone } from "../utils/index.js";
import {
  isNotEmpty,
  isPositiveNumber,
  isNonNegativeInteger,
} from "./helpers.js";
import { addProduct, editProduct, findById } from "./products.js";
import { applyFilters } from "./filters.js";

let editingId = null; // null = adding, string = editing

// ─── DOM References ───────────────────────────────────
const inputTitle = document.getElementById("inputTitle");
const inputPrice = document.getElementById("inputPrice");
const inputCategory = document.getElementById("inputCategory");
const inputStock = document.getElementById("inputStock");
const errorTitle = document.getElementById("errorTitle");
const errorPrice = document.getElementById("errorPrice");
const errorCategory = document.getElementById("errorCategory");
const errorStock = document.getElementById("errorStock");
const btnSubmit = document.getElementById("btnSubmit");
const btnCancel = document.getElementById("btnCancel");
const formTitle = document.getElementById("formTitle");

// resetForm — clear inputs, reset editingId, button back to "Add Product"
export function resetForm() {
  editingId = null;

  inputTitle.value = "";
  inputPrice.value = "";
  inputCategory.value = "";
  inputStock.value = "";

  clearErrors();

  formTitle.textContent = "Add Product";
  btnSubmit.textContent = "Add Product";
  btnCancel.style.display = "none";
}

// openEditForm — populate fields with product data, set editingId
export function populateForm(id) {
  const product = deepClone(findById(id));

  if (!product) return;

  editingId = id;

  inputTitle.value = product.title;
  inputPrice.value = product.price;
  inputCategory.value = product.category;
  inputStock.value = product.stock;

  formTitle.textContent = "Edit Product";
  btnSubmit.textContent = "Save Changes";
  btnCancel.style.display = "inline-block";

  // scroll to form so user sees it
  formTitle.scrollIntoView({ behavior: "smooth" });
}

// validateForm — check all fields, return { valid, errors }
export function validateForm(data) {
  const errors = {};

  if (!isNotEmpty(data.title)) {
    errors.title = "Title is required";
  } else if (data.title.trim().length < 3) {
    errors.title = "Title must be at least 3 characters";
  }

  if (!isNotEmpty(data.price)) {
    errors.price = "Price is required";
  } else if (!isPositiveNumber(data.price)) {
    errors.price = "Price must be a positive number";
  }

  if (!isNotEmpty(data.category)) {
    errors.category = "Please select a category";
  }

  if (!isNotEmpty(data.stock)) {
    errors.stock = "Stock is required";
  } else if (!isNonNegativeInteger(data.stock)) {
    errors.stock = "Stock must be a whole number (0 or more)";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

// handleSubmit — collect values, validate, add or edit, re-render
export function handleSubmit() {
  const data = {
    title: inputTitle.value.trim(),
    price: inputPrice.value.trim(),
    category: inputCategory.value,
    stock: inputStock.value.trim(),
  };

  const { valid, errors } = validateForm(data);

  if (!valid) {
    showErrors(errors);
    return;
  }

  // convert after validation, before saving
  data.price = parseFloat(data.price);
  data.stock = parseInt(data.stock);

  if (editingId) {
    editProduct(editingId, data);
  } else {
    addProduct(data);
  }

  resetForm();
  applyFilters();
}

// showErrors — inject error messages into DOM
function showErrors(errors) {
  clearErrors();
  if (errors.title) errorTitle.textContent = errors.title;
  if (errors.price) errorPrice.textContent = errors.price;
  if (errors.category) errorCategory.textContent = errors.category;
  if (errors.stock) errorStock.textContent = errors.stock;
}

// clearErrors — clear all error messages
function clearErrors() {
  errorTitle.textContent = "";
  errorPrice.textContent = "";
  errorCategory.textContent = "";
  errorStock.textContent = "";
}
