// src/js/sample-data.js
// src/js/sample-data.js
const sampleProducts = [
    // Original items
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
    },

    // Additional Necklaces
    {
        id: 6,
        name: "Moonstone Pendant Necklace",
        price: 149.99,
        category: "necklace",
        "img-link": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
        review1: "The moonstone has such a magical glow. Absolutely beautiful!",
        review2: "Perfect for spiritual wear. The energy feels amazing.",
        review3: "Great craftsmanship and the chain is very durable.",
        "product-info": "925 Sterling silver necklace with genuine moonstone pendant. Chain length: 18 inches. Stone size: 12mm."
    },
    {
        id: 7,
        name: "Personalized Name Necklace",
        price: 79.99,
        category: "necklace",
        "img-link": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
        review1: "Perfect gift! The engraving is clear and beautiful.",
        review2: "My daughter loved her personalized necklace. Great quality!",
        review3: "Fast delivery and exactly as described. Will order again!",
        "product-info": "Custom engraved name necklace in gold or silver plating. Up to 10 characters. 16-inch adjustable chain."
    },
    {
        id: 8,
        name: "Sapphire Drop Necklace",
        price: 249.99,
        category: "necklace",
        "img-link": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
        review1: "The sapphire color is breathtaking! So elegant.",
        review2: "Perfect for formal events. Received many compliments.",
        review3: "The drop length is perfect and the stone is secure.",
        "product-info": "Blue sapphire drop pendant in 14K white gold. Chain length: 18 inches. Sapphire weight: 0.75 carats."
    },
    {
        id: 9,
        name: "Layered Choker Set",
        price: 89.99,
        category: "necklace",
        "img-link": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
        review1: "Love the layered look! So trendy and versatile.",
        review2: "Perfect for stacking. Each chain is adjustable.",
        review3: "Great value for three necklaces. Wear them daily!",
        "product-info": "Set of three gold-plated choker necklaces in varying lengths. Adjustable clasps. Hypoallergenic material."
    },
    {
        id: 10,
        name: "Diamond Heart Locket",
        price: 199.99,
        category: "necklace",
        "img-link": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
        review1: "Beautiful locket! Perfect for keeping precious memories.",
        review2: "The diamond accent makes it extra special. Love it!",
        review3: "Great quality and the heart opens smoothly.",
        "product-info": "Silver heart-shaped locket with diamond accent. Opens to store photos. 18-inch chain with secure clasp."
    },

    // Additional Rings
    {
        id: 11,
        name: "Celestial Moon Ring",
        price: 69.99,
        category: "ring",
        "img-link": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
        review1: "Love the celestial design! So unique and beautiful.",
        review2: "Perfect for my astrology-loving friend. She adored it!",
        review3: "Comfortable to wear and the detail is amazing.",
        "product-info": "Sterling silver ring with moon and star design. Available in sizes 4-10. Adjustable sizing available."
    },
    {
        id: 12,
        name: "Stackable Diamond Band",
        price: 179.99,
        category: "ring",
        "img-link": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
        review1: "Perfect for stacking with my engagement ring!",
        review2: "The diamonds sparkle beautifully. Great quality.",
        review3: "Exactly what I wanted. Fits perfectly with other rings.",
        "product-info": "14K white gold band with channel-set diamonds. Total diamond weight: 0.25 carats. Width: 2mm."
    },
    {
        id: 13,
        name: "Art Deco Statement Ring",
        price: 129.99,
        category: "ring",
        "img-link": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
        review1: "Stunning Art Deco design! Makes a bold statement.",
        review2: "Perfect for special occasions. The craftsmanship is excellent.",
        review3: "Love the vintage vibe. Great conversation piece!",
        "product-info": "Vintage-inspired Art Deco ring with geometric design. Gold plating with crystal accents. Statement size."
    },
    {
        id: 14,
        name: "Minimalist Gold Band",
        price: 49.99,
        category: "ring",
        "img-link": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
        review1: "Simple and elegant. Perfect for everyday wear.",
        review2: "Great quality for the price. Doesn't tarnish easily.",
        review3: "Bought multiple for stacking. Love the minimalist look!",
        "product-info": "Thin gold-plated band ring. Width: 1.5mm. Available in sizes 3-11. Hypoallergenic and tarnish-resistant."
    },
    {
        id: 15,
        name: "Pearl Cluster Ring",
        price: 89.99,
        category: "ring",
        "img-link": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
        review1: "The pearl cluster is so feminine and elegant!",
        review2: "Perfect for weddings and formal events.",
        review3: "The pearls are well-set and secure. Beautiful piece!",
        "product-info": "Cluster ring featuring multiple freshwater pearls. Silver setting. Pearl sizes: 4-6mm. Delicate design."
    },

    // Additional Bracelets
    {
        id: 16,
        name: "Charm Bracelet Collection",
        price: 119.99,
        category: "bracelet",
        "img-link": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
        review1: "Love collecting charms for special moments!",
        review2: "The bracelet is sturdy and the charms are detailed.",
        review3: "Perfect gift that keeps growing with memories.",
        "product-info": "Silver charm bracelet with starter charms. Additional charms sold separately. Adjustable length 7-8 inches."
    },
    {
        id: 17,
        name: "Tennis Diamond Bracelet",
        price: 399.99,
        category: "bracelet",
        "img-link": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
        review1: "Absolutely luxurious! The diamonds sparkle endlessly.",
        review2: "Perfect for formal events. Makes any outfit elegant.",
        review3: "Worth the investment. Timeless piece I'll wear forever.",
        "product-info": "Classic tennis bracelet with round-cut diamonds. 14K white gold. Total carat weight: 1.0 carat. Length: 7 inches."
    },
    {
        id: 18,
        name: "Beaded Stretch Bracelet",
        price: 39.99,
        category: "bracelet",
        "img-link": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
        review1: "So easy to wear! The stretch fit is comfortable.",
        review2: "Love the colorful beads. Great for casual wear.",
        review3: "Stack multiple for a boho look. Great value!",
        "product-info": "Stretch bracelet with assorted gemstone beads. One-size fits most. Natural stone variations."
    },
    {
        id: 19,
        name: "Cuff Bangle Bracelet",
        price: 79.99,
        category: "bracelet",
        "img-link": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
        review1: "Love the hammered texture! Very artisan look.",
        review2: "Sturdy and well-made. Doesn't bend out of shape.",
        review3: "Perfect statement piece. Goes with everything!",
        "product-info": "Hammered metal cuff bracelet in gold or silver finish. Width: 1 inch. Adjustable fit for most wrists."
    },
    {
        id: 20,
        name: "Personalized ID Bracelet",
        price: 69.99,
        category: "bracelet",
        "img-link": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
        review1: "Perfect personalized gift! The engraving is crisp.",
        review2: "Love wearing my name. Great conversation starter.",
        review3: "Comfortable chain and the plate doesn't flip over.",
        "product-info": "Custom engraved ID bracelet in sterling silver. Up to 15 characters. Adjustable chain 7-8.5 inches."
    }
];

// Expose to global scope for direct script loading
window.sampleProducts = sampleProducts;

// For CommonJS compatibility
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sampleProducts };
}
