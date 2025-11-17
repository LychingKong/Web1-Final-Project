const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the src directory
app.use(express.static(path.join(__dirname, 'src')));

// Your products data
const products = [
    {
        id: 1,
        name: "Eternal Diamond Necklace",
        price: 299.99,
        category: "necklace",
        "img-link": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
        review1: "Absolutely stunning! The diamond sparkles beautifully in sunlight.",
        review2: "Perfect length and the clasp is very secure. Great quality!",
        review3: "Received so many compliments. Worth every penny!",
        "product-info": "14K white gold diamond necklace with 0.5 carat center stone. Chain length: 18 inches. Comes with velvet gift box."
    },
    {
        id: 2,
        name: "Classic Silver Ring",
        price: 89.99,
        category: "ring",
        "img-link": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
        review1: "Comfortable fit and beautiful design. Perfect for daily wear.",
        review2: "The silver hasn't tarnished even after months of wear. Great quality!",
        review3: "Exactly as pictured. Shipping was fast and packaging secure.",
        "product-info": "Sterling silver band ring with intricate filigree design. Available in sizes 5-9. Hypoallergenic and nickel-free."
    },
    {
        id: 3,
        name: "Pearl Elegance Bracelet",
        price: 159.99,
        category: "bracelet",
        "img-link": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
        review1: "The pearls have such a beautiful luster. Very elegant piece.",
        review2: "Perfect gift for my mother. She loved it!",
        review3: "Comfortable to wear all day. The clasp is easy to use.",
        "product-info": "Freshwater pearl bracelet with gold-plated clasp. Pearl size: 6-7mm. Adjustable length: 7-8 inches."
    },
    {
        id: 4,
        name: "Rose Gold Infinity Necklace",
        price: 129.99,
        category: "necklace",
        "img-link": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
        review1: "Beautiful rose gold color. The infinity symbol is perfectly crafted.",
        review2: "Great everyday necklace. Goes with everything in my wardrobe.",
        review3: "Arrived quickly and was well packaged. Very happy with purchase!",
        "product-info": "Rose gold plated infinity symbol pendant on 16-inch chain. Water-resistant coating. Perfect for sensitive skin."
    },
    {
        id: 5,
        name: "Vintage Emerald Ring",
        price: 199.99,
        category: "ring",
        "img-link": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
        review1: "The emerald color is vibrant and the setting is very secure.",
        review2: "Perfect vintage look. Great for special occasions.",
        review3: "Exactly what I was looking for. The stone is stunning!",
        "product-info": "Vintage-style ring with synthetic emerald center stone and crystal accents. Silver plating with antique finish."
    }
];

// API routes
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:category', (req, res) => {
    const category = req.params.category;
    const filteredProducts = products.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
    );
    res.json(filteredProducts);
});

app.get('/api/product/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});

app.get('/api/categories', (req, res) => {
    const categories = [...new Set(products.map(product => product.category))];
    res.json(categories);
});

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/pages/index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🛍️  Jewelry Store Server running at http://localhost:${PORT}`);
    console.log(`📦 ${products.length} products loaded`);
});