// js/products-api.js
class ProductAPI {
    static async getAllProducts() {
        try {
            console.log('📡 Fetching products from API...');
            const response = await fetch('/api/products');
            if (!response.ok) {
                throw new Error(`API responded with status: ${response.status}`);
            }
            const products = await response.json();
            console.log('✅ Products loaded successfully:', products);
            return products;
        } catch (error) {
            console.error('❌ Error fetching products:', error);
            throw error;
        }
    }
}

// Replace static content with dynamic data
async function populateHomepage() {
    try {
        console.log('🚀 Starting to populate homepage...');
        const products = await ProductAPI.getAllProducts();
        
        if (products && products.length > 0) {
            // Update Best Sellers section - CREATE elements from scratch
            createBestSellers(products.slice(0, 5));
            
            // Update Featured Collections section - CREATE elements from scratch
            createFeaturedCollections(products);
            
            console.log('🎉 Homepage populated successfully!');
        } else {
            console.warn('⚠️ No products found in API response');
            // Show fallback content
            showFallbackContent();
        }
        
    } catch (error) {
        console.error('💥 Error loading products:', error);
        // Show fallback content if API fails
        showFallbackContent();
    }
}

// CREATE Best Sellers elements from scratch
function createBestSellers(bestSellers) {
    console.log('🔄 Creating best sellers with:', bestSellers);
    
    const bestSellersContainer = document.querySelector('#best-sellers .grid');
    if (!bestSellersContainer) {
        console.error('❌ Best sellers container not found');
        return;
    }
    
    // Clear any existing content
    bestSellersContainer.innerHTML = '';
    
    // Create product cards for each best seller
    bestSellers.forEach((product) => {
        const productCard = createProductCard(product);
        bestSellersContainer.appendChild(productCard);
        console.log(`✅ Created product card for: ${product.name}`);
    });
}

// CREATE a single product card
function createProductCard(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'text-center group';
    
    productDiv.innerHTML = `
        <div class="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
            <img src="${product['img-link']}" alt="${product.name}" class="w-full h-32 object-contain">
            <h4 class="mt-3 font-medium text-gray-900">${product.name}</h4>
            <p class="mt-1 text-amber-700 font-bold">$${product.price}</p>
        </div>
        <button onclick="addToWishlist(${product.id})" class="mt-3 text-sm text-gray-600 hover:text-amber-700">
            Add to Wishlist
        </button>
    `;
    
    return productDiv;
}

// CREATE Featured Collections from scratch
function createFeaturedCollections(products) {
    console.log('🔄 Creating featured collections...');
    
    const collectionsContainer = document.getElementById('featured-collections');
    if (!collectionsContainer) {
        console.error('❌ Featured collections container not found');
        return;
    }
    
    // Clear any existing content
    collectionsContainer.innerHTML = '';
    
    // Get one product from each category for the featured collections
    const necklace = products.find(p => p.category === 'necklace');
    const ring = products.find(p => p.category === 'ring');
    const bracelet = products.find(p => p.category === 'bracelet');
    
    console.log('📦 Category products found:', { necklace, ring, bracelet });
    
    // Create collection cards
    if (ring) {
        const ringCard = createCollectionCard(
            ring, 
            'Engagement Rings', 
            'Timeless symbols of love and commitment.', 
            'ring-listing.html'
        );
        collectionsContainer.appendChild(ringCard);
    }
    
    if (necklace) {
        const necklaceCard = createCollectionCard(
            necklace, 
            'Signature Necklaces', 
            'Elegant pieces to elevate your everyday look.', 
            'necklace-listing.html'
        );
        collectionsContainer.appendChild(necklaceCard);
    }
    
    if (bracelet) {
        const braceletCard = createCollectionCard(
            bracelet, 
            'Diamond Bracelets', 
            'Classic, versatile, and forever in style.', 
            'bracelet-listing.html'
        );
        collectionsContainer.appendChild(braceletCard);
    }
    
    // If no products found, show fallback collections
    if (!ring && !necklace && !bracelet) {
        createFallbackCollections(collectionsContainer);
    }
}

// CREATE a single collection card
function createCollectionCard(product, title, description, link) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition';
    
    cardDiv.innerHTML = `
        <img src="${product['img-link']}" alt="${title}" class="w-full h-56 object-cover">
        <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900">${title}</h3>
            <p class="mt-2 text-gray-600">${description}</p>
            <a href="${link}" class="mt-4 inline-block text-amber-700 font-medium hover:text-amber-800">Explore →</a>
        </div>
    `;
    
    console.log(`✅ Created collection card: ${title}`);
    return cardDiv;
}

// Fallback content if API fails or no products
function showFallbackContent() {
    console.log('🔄 Showing fallback content...');
    
    // Create fallback best sellers
    const bestSellersContainer = document.querySelector('#best-sellers .grid');
    if (bestSellersContainer) {
        bestSellersContainer.innerHTML = `
            <div class="text-center group">
                <div class="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
                    <img src="https://images.unsplash.com/photo-1605348532760-67e32d9c4b60?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80" alt="Necklace" class="w-full h-32 object-contain">
                    <h4 class="mt-3 font-medium text-gray-900">Celestial Pendant</h4>
                    <p class="mt-1 text-amber-700 font-bold">$299</p>
                </div>
                <button class="mt-3 text-sm text-gray-600 hover:text-amber-700">Add to Wishlist</button>
            </div>
            <div class="text-center group">
                <div class="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
                    <img src="https://images.unsplash.com/photo-1599646688950-1f076c3c8a6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80" alt="Ring" class="w-full h-32 object-contain">
                    <h4 class="mt-3 font-medium text-gray-900">Solitaire Ring</h4>
                    <p class="mt-1 text-amber-700 font-bold">$1,299</p>
                </div>
                <button class="mt-3 text-sm text-gray-600 hover:text-amber-700">Add to Wishlist</button>
            </div>
            <div class="text-center group">
                <div class="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
                    <img src="https://images.unsplash.com/photo-1608228088998-57828365d480?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80" alt="Earrings" class="w-full h-32 object-contain">
                    <h4 class="mt-3 font-medium text-gray-900">Diamond Studs</h4>
                    <p class="mt-1 text-amber-700 font-bold">$499</p>
                </div>
                <button class="mt-3 text-sm text-gray-600 hover:text-amber-700">Add to Wishlist</button>
            </div>
        `;
    }
    
    // Create fallback collections
    createFallbackCollections(document.getElementById('featured-collections'));
}

// CREATE fallback collections
function createFallbackCollections(container) {
    if (!container) return;
    
    container.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
            <img src="https://images.unsplash.com/photo-1599646688950-1f076c3c8a6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Engagement Rings" class="w-full h-56 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900">Engagement Rings</h3>
                <p class="mt-2 text-gray-600">Timeless symbols of love and commitment.</p>
                <a href="ring-listing.html" class="mt-4 inline-block text-amber-700 font-medium hover:text-amber-800">Explore →</a>
            </div>
        </div>
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
            <img src="https://images.unsplash.com/photo-1605348532760-67e32d9c4b60?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Necklaces" class="w-full h-56 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900">Signature Necklaces</h3>
                <p class="mt-2 text-gray-600">Elegant pieces to elevate your everyday look.</p>
                <a href="necklace-listing.html" class="mt-4 inline-block text-amber-700 font-medium hover:text-amber-800">Explore →</a>
            </div>
        </div>
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
            <img src="https://images.unsplash.com/photo-1608228088998-57828365d480?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Diamond Studs" class="w-full h-56 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900">Diamond Bracelets</h3>
                <p class="mt-2 text-gray-600">Classic, versatile, and forever in style.</p>
                <a href="bracelet-listing.html" class="mt-4 inline-block text-amber-700 font-medium hover:text-amber-800">Explore →</a>
            </div>
        </div>
    `;
}

// CREATE Best Sellers elements from scratch
function createBestSellers(bestSellers) {
    console.log('🔄 Creating best sellers with:', bestSellers);
    
    const bestSellersContainer = document.querySelector('#best-sellers .grid');
    if (!bestSellersContainer) {
        console.error('❌ Best sellers container not found');
        return;
    }
    
    // Clear any existing content
    bestSellersContainer.innerHTML = '';
    
    // Create product cards for each best seller
    bestSellers.forEach((product) => {
        const productCard = createProductCard(product);
        bestSellersContainer.appendChild(productCard);
        console.log(`✅ Created product card for: ${product.name}`);
    });
}

// CREATE a single product card
function createProductCard(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'text-center group';
    
    productDiv.innerHTML = `
        <div class="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition h-72">
            <div class="h-40 flex items-center justify-center mb-3">
                <img src="${product['img-link']}" alt="${product.name}" class="h-32 w-full object-contain">
            </div>
            <h4 class="font-medium text-gray-900 line-clamp-2">${product.name}</h4>
            <p class="mt-1 text-amber-700 font-bold">$${product.price}</p>
        </div>
        <button onclick="addToWishlist(${product.id})" class="mt-3 text-sm text-gray-600 hover:text-amber-700">
            Add to Wishlist
        </button>
    `;
    
    return productDiv;
}

// Update the main populate function to use createBestSellers
async function populateHomepage() {
    try {
        console.log('🚀 Starting to populate homepage...');
        const products = await ProductAPI.getAllProducts();
        
        if (products && products.length > 0) {
            // Update Best Sellers section with first 5 products
            createBestSellers(products.slice(0, 5));
            
            // Update Featured Collections section
            createFeaturedCollections(products);
            
            console.log('🎉 Homepage populated successfully!');
        } else {
            console.warn('⚠️ No products found in API response');
            showFallbackContent();
        }
        
    } catch (error) {
        console.error('💥 Error loading products:', error);
        showFallbackContent();
    }
}

// Wishlist function
function addToWishlist(productId) {
    alert(`Product ${productId} added to wishlist!`);
    // You can implement actual wishlist functionality here
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🏠 DOM loaded, starting to populate homepage...');
    populateHomepage();
});

// Test function you can call from browser console
window.debugProducts = async function() {
    console.log('🐛 Debug mode activated');
    const products = await ProductAPI.getAllProducts();
    console.log('📊 All products:', products);
    return products;
};

