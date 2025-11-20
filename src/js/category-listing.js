// src/js/category-listing.js

// Create a product card HTML string for listing pages
function createListingCard(product) {
  const image = product["img-link"] || "https://via.placeholder.com/400x400?text=Product";
  const price = typeof product.price === "number" ? product.price.toFixed(2) : product.price;

  return `
    <div class="bg-white shadow-sm rounded-xl p-4 hover:shadow-lg transition text-center">
      <a href="/product-page?id=${product.id}" class="block">
        <img src="${image}"
             alt="${product.name}"
             class="h-48 w-full object-contain mx-auto mb-3" />
        <h3 class="mt-1 font-semibold text-gray-900">${product.name}</h3>
        <p class="text-amber-700 font-bold">$${price}</p>
      </a>
    </div>
  `;
}

// Load sample data from sample-data.js (reuses window.sampleProducts if already loaded)
function loadListingSampleData() {
  return new Promise((resolve) => {
    if (window.sampleProducts && window.sampleProducts.length > 0) {
      resolve(window.sampleProducts);
      return;
    }

    const script = document.createElement("script");
    script.src = "../js/sample-data.js";
    script.onload = () => {
      if (window.sampleProducts) {
        resolve(window.sampleProducts);
      } else {
        console.error("sampleProducts not found on window after loading sample-data.js");
        resolve([]);
      }
    };
    script.onerror = () => {
      console.error("Failed to load sample-data.js for category listings");
      resolve([]);
    };
    document.head.appendChild(script);
  });
}

async function populateCategoryGrid(category, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const products = await loadListingSampleData();
    const filtered = products.filter(p => p && p.category === category);

    if (!filtered.length) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12 text-gray-500">
          No ${category}s available right now.
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(createListingCard).join("");
  } catch (err) {
    console.error("Error populating category listing", category, err);
  }
}

// Auto-detect which listing page we're on and populate the appropriate grid
document.addEventListener("DOMContentLoaded", () => {
  const necklaceGrid = document.getElementById("necklace-grid");
  const ringGrid = document.getElementById("ring-grid");
  const braceletGrid = document.getElementById("bracelet-grid");

  if (!necklaceGrid && !ringGrid && !braceletGrid) return;

  if (necklaceGrid) populateCategoryGrid("necklace", "necklace-grid");
  if (ringGrid) populateCategoryGrid("ring", "ring-grid");
  if (braceletGrid) populateCategoryGrid("bracelet", "bracelet-grid");
});
