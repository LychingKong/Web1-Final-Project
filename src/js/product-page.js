// src/js/product-page.js

// Get query parameter by name
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// Load all products from sample-data.js (same approach as populate-collections.js)
function loadProductData() {
  return new Promise((resolve) => {
    if (window.sampleProducts && window.sampleProducts.length > 0) {
      resolve(window.sampleProducts);
      return;
    }

    const script = document.createElement('script');
    script.src = '../js/sample-data.js';
    script.onload = () => {
      if (window.sampleProducts) {
        resolve(window.sampleProducts);
      } else {
        console.error('sampleProducts not found on window after loading sample-data.js');
        resolve([]);
      }
    };
    script.onerror = () => {
      console.error('Failed to load sample-data.js for product page');
      resolve([]);
    };
    document.head.appendChild(script);
  });
}

function renderProduct(product) {
  const imgEl = document.getElementById('product-image');
  const titleEl = document.getElementById('product-title');
  const descEl = document.getElementById('product-description');
  const reviewsList = document.getElementById('product-reviews');

  if (!product) {
    if (titleEl) titleEl.textContent = 'Product not found';
    if (descEl) descEl.textContent = 'We could not find a product with this ID.';
    return;
  }

  if (imgEl) {
    imgEl.src = product['img-link'] || 'https://via.placeholder.com/400x400?text=Product';
    imgEl.alt = product.name;
  }

  if (titleEl) titleEl.textContent = product.name;
  if (descEl) descEl.textContent = product['product-info'] || '';

  if (reviewsList) {
    reviewsList.innerHTML = '';
    const reviewers = ['Virakpoung', 'Kimyou', 'Monyroth'];
    ['review1', 'review2', 'review3'].forEach((key, index) => {
      const text = product[key];
      if (text) {
        const li = document.createElement('li');
        li.className = 'bg-gray-50 border border-gray-200 rounded-xl p-4';
        li.innerHTML = `
          <p class="text-gray-700 italic mb-2">"${text}"</p>
          <p class="text-sm font-semibold text-gray-900">— ${reviewers[index] || 'Customer'}</p>
        `;
        reviewsList.appendChild(li);
      }
    });
  }
}

async function initProductPage() {
  const id = getQueryParam('id');
  if (!id) {
    renderProduct(null);
    return;
  }

  const products = await loadProductData();
  const numericId = Number(id);
  const product = products.find(p => p && p.id === numericId);
  renderProduct(product || null);
}

document.addEventListener('DOMContentLoaded', initProductPage);
