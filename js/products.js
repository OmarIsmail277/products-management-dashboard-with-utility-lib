// ─── products.js ──────────────────────────────────────
// Responsible for: managing the in-memory products array
import { customFilter, deepClone } from "../utils/index.js";
import { generateId, formatDate, saveToStorage } from "./helpers.js";
import { loadProducts, saveProducts } from "./data.js";
import { generateId } from "./helpers.js";

let products = [];

// getProducts — return current products array
export function getProducts() {
  return [...products];
}

// initProducts — load from localStorage on startup
export function initProducts() {
  products = loadProducts();
}

// addProduct — receive form data, create product, push, save
export function addProduct(data) {
  const newProduct = {
    id: generateId(),
    title: data.title,
    price: parseFloat(data.price),
    category: data.category,
    stock: parseInt(data.stock),
    createdAt: new Date().toISOString(),
  };

  products.push(newProduct);
  saveProducts(products); // ← sync to localStorage
  return newProduct;
}

// editProduct — find by id, update fields, save
export function editProduct(id, data) {
  const product = findById(id);

  if (!product) {
    return { success: false, error: "Product not found" };
  }

  product.title = data.title;
  product.price = parseFloat(data.price);
  product.category = data.category;
  product.stock = parseInt(data.stock);

  saveProducts(products);

  return { success: true, data: product };
}

// deleteProduct — remove by id, save, return deleted product
export function deleteProduct(id) {
  const deleted = findById(id);

  if (!deleted) return null;

  products = customFilter(products, (product) => product.id !== id);

  saveProducts(products);
  return deleted;
}

// findById — return product matching id or null
export function findById(id) {
  for (const product of products) if (product.id === id) return product;
  return null;
}

// restoreProduct — re-insert a previously deleted product (undo)
export function restoreProduct(product) {
  if (!product || !product.id) {
    return { success: false, error: "Invalid product data provided." };
  }

  for (const existingProduct of products) {
    if (findById(product.id)) {
      return { success: false, error: "Product already exists in the list." };
    }
  }

  products.push(product);

  saveProducts(products);

  return { success: true, data: product };
}
