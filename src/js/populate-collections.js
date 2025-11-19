// Function to create product card HTML
function createProductCard(product) {
    return `
    <div class="bg-white shadow-sm rounded-xl p-4 hover:shadow-lg transition text-center">
        <a href="/product-page?id=${product.id}">
            <img src="${product['img-link'] || 'https://via.placeholder.com/300'}"
                 class="h-48 w-full object-contain mx-auto mb-3"
                 alt="${product.name}">
            <h3 class="font-medium text-gray-900">${product.name}</h3>
            <p class="text-amber-700 font-bold">$${product.price.toFixed(2)}</p>
        </a>
    </div>`;
}

// Function to populate a category section
function populateCategory(products, category, containerId) {
    const container = document.getElementById(containerId);
    if (!container || !products) return;
    
    try {
        // Filter products by category and take first 5
        const categoryProducts = products
            .filter(p => p && p.category === category)
            .slice(0, 5);
        
        // Generate HTML for each product
        if (categoryProducts.length > 0) {
            container.innerHTML = categoryProducts.map(createProductCard).join('');
        }
    } catch (error) {
        console.error(`Error populating ${category}:`, error);
    }
}

// Sample data - this will be replaced by the actual data from sample-data.js
const sampleProducts = [
    // This will be populated by the data from sample-data.js
];

// Load sample data from a script tag
function loadSampleData() {
    return new Promise((resolve) => {
        // Check if sampleProducts is already defined (in case the script was loaded already)
        if (window.sampleProducts && window.sampleProducts.length > 0) {
            resolve(window.sampleProducts);
            return;
        }

        // Create a script tag to load the sample data
        const script = document.createElement('script');
        script.src = '../js/sample-data.js';
        script.onload = () => {
            if (window.sampleProducts) {
                resolve(window.sampleProducts);
            } else {
                console.error('Sample data not loaded correctly');
                resolve([]);
            }
        };
        script.onerror = () => {
            console.error('Failed to load sample data');
            resolve([]);
        };
        document.head.appendChild(script);
    });
}

// Main function to populate all categories
async function populateCollections() {
    const ringsContainer = document.getElementById('rings-container');
    const necklacesContainer = document.getElementById('necklaces-container');
    const braceletsContainer = document.getElementById('bracelets-container');
    
    // Check if any container exists on the page
    if (!ringsContainer && !necklacesContainer && !braceletsContainer) {
        return; // Exit if not on collections page
    }
    
    try {
        // Load the sample data
        const products = await loadSampleData();
        
        // Populate each category if its container exists
        if (ringsContainer) {
            populateCategory(products, 'ring', 'rings-container');
        }
        if (necklacesContainer) {
            populateCategory(products, 'necklace', 'necklaces-container');
        }
        if (braceletsContainer) {
            populateCategory(products, 'bracelet', 'bracelets-container');
        }
    } catch (error) {
        console.error('Error in populateCollections:', error);
    }
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', populateCollections);
