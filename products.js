// ============================================
// IM LIFESTYLE - PRODUCT DATABASE
// ============================================

const productsDatabase = [
    // SNEAKERS
    {
        id: 'sneaker-001',
        name: 'Premium Baggy Sneakers',
        category: 'sneakers',
        gender: 'men',
        price: 849,
        originalPrice: 1199,
        rating: 4.8,
        reviews: 245,
        image: 'images/first_prefer_sneakers/sneaker_7.jpg',
        colors: ['Black', 'White', 'Blue'],
        sizes: [7, 8, 9, 10],
        description: 'Trendy baggy sneakers with premium cushioning. Perfect for casual wear and street style.',
        specifications: {
            material: 'Premium Canvas + Rubber Sole',
            waterResistant: true,
            cushioning: 'Enhanced Memory Foam',
            weight: 'Light'
        },
        inStock: true,
        featured: true,
        new: true
    },
    {
        id: 'sneaker-002',
        name: 'Gen-Z Street Style Sneakers',
        category: 'sneakers',
        gender: 'unisex',
        price: 649,
        originalPrice: 999,
        rating: 4.7,
        reviews: 189,
        image: 'images/first_prefer_sneakers/sneaker_13.jpg',
        colors: ['White', 'Black', 'Gray', 'Red'],
        sizes: [6, 7, 8, 9, 10],
        description: 'Latest Gen-Z inspired sneaker design with modern silhouette. Available in multiple trendy colors.',
        specifications: {
            material: 'Synthetic + Rubber',
            waterResistant: true,
            cushioning: 'Standard',
            weight: 'Light'
        },
        inStock: true,
        featured: true,
        new: true
    },
    {
        id: 'sneaker-003',
        name: 'Urban City Sneakers',
        category: 'sneakers',
        gender: 'women',
        price: 799,
        originalPrice: 1199,
        rating: 4.6,
        reviews: 156,
        image: 'images/first_prefer_sneakers/sneaker_10.jpg',
        colors: ['Pink', 'White', 'Purple'],
        sizes: [5, 6, 7, 8, 9],
        description: 'Stylish urban sneakers designed for city walks. Comfortable for all-day wear.',
        specifications: {
            material: 'Premium Synthetic',
            waterResistant: true,
            cushioning: 'Enhanced',
            weight: 'Light'
        },
        inStock: true,
        featured: false,
        new: false
    },
    {
        id: 'sneaker-004',
        name: 'High-Performance Running Sneakers',
        category: 'sneakers',
        gender: 'men',
        price: 999,
        originalPrice: 1499,
        rating: 4.9,
        reviews: 312,
        image: 'images/first_prefer_sneakers/sneaker_14.jpg',
        colors: ['Black', 'Red', 'Yellow'],
        sizes: [7, 8, 9, 10],
        description: 'Advanced running sneakers with superior grip and arch support.',
        specifications: {
            material: 'Mesh + Rubber',
            waterResistant: true,
            cushioning: 'Premium EVA',
            weight: 'Ultra Light'
        },
        inStock: true,
        featured: true,
        new: false
    },
    {
        id: 'sneaker-005',
        name: 'Classic White Court Sneakers',
        category: 'sneakers',
        gender: 'unisex',
        price: 549,
        originalPrice: 899,
        rating: 4.5,
        reviews: 203,
        image: 'images/first_prefer_sneakers/sneaker_8.jpg',
        colors: ['White', 'Black', 'Beige'],
        sizes: [5, 6, 7, 8, 9, 10],
        description: 'Timeless white court sneakers that go with everything. Premium quality construction.',
        specifications: {
            material: 'Canvas + Rubber',
            waterResistant: false,
            cushioning: 'Standard',
            weight: 'Light'
        },
        inStock: true,
        featured: false,
        new: false
    },

    // CROCKS
    {
        id: 'crock-001',
        name: 'Lite Ride Premium Crocks',
        category: 'crocks',
        gender: 'unisex',
        price: 499,
        originalPrice: 799,
        rating: 4.8,
        reviews: 456,
        image: 'images/first_prefer_crocks/crock_6.jpg',
        colors: ['Black', 'Navy', 'White', 'Gray'],
        sizes: [7, 8, 9, 10],
        description: 'Ultra-comfortable Lite Ride crocks with superior cushioning. Perfect for daily wear.',
        specifications: {
            material: 'Premium EVA',
            waterResistant: true,
            cushioning: 'Advanced Comfort Technology',
            weight: 'Ultra Light'
        },
        inStock: true,
        featured: true,
        new: true
    },
    {
        id: 'crock-002',
        name: 'Classico Crocks',
        category: 'crocks',
        gender: 'unisex',
        price: 399,
        originalPrice: 649,
        rating: 4.6,
        reviews: 334,
        image: 'images/first_prefer_crocks/crock_5.jpg',
        colors: ['Black', 'Red', 'Blue', 'Green'],
        sizes: [6, 7, 8, 9, 10],
        description: 'The original classic crocks design. Durable and comfortable for all occasions.',
        specifications: {
            material: 'Standard EVA',
            waterResistant: true,
            cushioning: 'Standard',
            weight: 'Light'
        },
        inStock: true,
        featured: true,
        new: false
    },
    {
        id: 'crock-003',
        name: 'Garden Work Crocks',
        category: 'crocks',
        gender: 'unisex',
        price: 349,
        originalPrice: 549,
        rating: 4.4,
        reviews: 189,
        image: 'images/first_prefer_crocks/crock_1.jpg',
        colors: ['Khaki', 'Green', 'Brown'],
        sizes: [7, 8, 9, 10],
        description: 'Heavy-duty crocks designed for outdoor work and garden activities.',
        specifications: {
            material: 'Reinforced EVA',
            waterResistant: true,
            cushioning: 'Standard',
            weight: 'Medium'
        },
        inStock: true,
        featured: false,
        new: false
    },
    {
        id: 'crock-004',
        name: 'Kids Colorful Crocks',
        category: 'crocks',
        gender: 'kids',
        price: 299,
        originalPrice: 499,
        rating: 4.7,
        reviews: 267,
        image: 'images/first_prefer_crocks/crock_2.jpg',
        colors: ['Pink', 'Blue', 'Purple', 'Yellow'],
        sizes: [5, 6, 7, 8],
        description: 'Bright and fun crocks designed specifically for kids. Safe and comfortable.',
        specifications: {
            material: 'Premium EVA',
            waterResistant: true,
            cushioning: 'Kids Comfort',
            weight: 'Very Light'
        },
        inStock: true,
        featured: false,
        new: true
    },

    // SLIDES & FLIP FLOPS
    {
        id: 'slide-001',
        name: 'Premium Cushion Slides',
        category: 'slides',
        gender: 'unisex',
        price: 599,
        originalPrice: 999,
        rating: 4.7,
        reviews: 398,
        image: 'images/first_prefer_slides/slide_13.jpg',
        colors: ['Black', 'White', 'Gray', 'Navy'],
        sizes: [7, 8, 9, 10],
        description: 'Ultra-soft premium slides with maximum cushioning. Perfect for relaxation.',
        specifications: {
            material: 'Memory Foam + Rubber',
            waterResistant: true,
            cushioning: 'Premium Memory Foam',
            weight: 'Light'
        },
        inStock: true,
        featured: true,
        new: true
    },
    {
        id: 'slide-002',
        name: 'Everyday Comfort Slides',
        category: 'slides',
        gender: 'unisex',
        price: 449,
        originalPrice: 749,
        rating: 4.5,
        reviews: 276,
        image: 'images/first_prefer_slides/slide_12.jpg',
        colors: ['Black', 'Brown', 'Beige'],
        sizes: [6, 7, 8, 9, 10],
        description: 'Comfortable slides for everyday wear. Great for home and casual outings.',
        specifications: {
            material: 'Soft EVA + Rubber',
            waterResistant: true,
            cushioning: 'Standard',
            weight: 'Light'
        },
        inStock: true,
        featured: false,
        new: false
    },
    {
        id: 'slide-003',
        name: 'Fashion Slider Flops',
        category: 'slides',
        gender: 'women',
        price: 549,
        originalPrice: 899,
        rating: 4.6,
        reviews: 215,
        image: 'images/first_prefer_slides/slide_4.jpg',
        colors: ['Rose', 'Black', 'Gold', 'Silver'],
        sizes: [5, 6, 7, 8, 9],
        description: 'Stylish slider flops with modern design. Perfect for trendy looks.',
        specifications: {
            material: 'Premium Synthetic',
            waterResistant: true,
            cushioning: 'Enhanced',
            weight: 'Very Light'
        },
        inStock: true,
        featured: true,
        new: false
    },
    {
        id: 'slide-004',
        name: 'Flip Flops New Model',
        category: 'slides',
        gender: 'girls',
        price: 399,
        originalPrice: 649,
        rating: 4.5,
        reviews: 142,
        image: 'images/first_prefer_slides/slide_2.jpg',
        colors: ['Pink', 'Purple', 'Turquoise'],
        sizes: [5, 6, 7, 8],
        description: 'Trendy new model flip flops for young girls. Available in vibrant colors.',
        specifications: {
            material: 'Soft EVA',
            waterResistant: true,
            cushioning: 'Standard',
            weight: 'Very Light'
        },
        inStock: true,
        featured: false,
        new: true
    },
    {
        id: 'slide-005',
        name: 'Beach Resort Slides',
        category: 'slides',
        gender: 'unisex',
        price: 399,
        originalPrice: 649,
        rating: 4.4,
        reviews: 189,
        image: 'images/first_prefer_slides/slide_1.jpg',
        colors: ['Blue', 'White', 'Orange'],
        sizes: [7, 8, 9, 10],
        description: 'Perfect slides for beach and resort wear. Water-friendly design.',
        specifications: {
            material: 'EVA + Rubber',
            waterResistant: true,
            cushioning: 'Standard',
            weight: 'Light'
        },
        inStock: true,
        featured: false,
        new: false
    },

    // LADIES FOOTWEAR
    {
        id: 'ladies-001',
        name: 'Soft Cushion Comfort Shoes',
        category: 'ladies',
        gender: 'women',
        price: 699,
        originalPrice: 1099,
        rating: 4.8,
        reviews: 512,
        image: 'images/first_prefer_Ladies/ladies_28.jpg',
        colors: ['White', 'Black', 'Beige', 'Pink'],
        sizes: [5, 6, 7, 8, 9],
        description: 'Premium soft cushioned shoes for girls and ladies. Maximum comfort all day long.',
        specifications: {
            material: 'Premium Leather + EVA',
            waterResistant: true,
            cushioning: 'Premium Memory Foam',
            weight: 'Light'
        },
        inStock: true,
        featured: true,
        new: true
    },
    {
        id: 'ladies-002',
        name: 'Casual Walking Shoes',
        category: 'ladies',
        gender: 'women',
        price: 599,
        originalPrice: 899,
        rating: 4.6,
        reviews: 289,
        image: 'images/first_prefer_Ladies/ladies_24.jpg',
        colors: ['Brown', 'Gray', 'Navy'],
        sizes: [5, 6, 7, 8, 9],
        description: 'Stylish casual shoes perfect for walks and shopping. Breathable and lightweight.',
        specifications: {
            material: 'Synthetic + Rubber',
            waterResistant: false,
            cushioning: 'Enhanced',
            weight: 'Light'
        },
        inStock: true,
        featured: false,
        new: false
    },
    {
        id: 'ladies-003',
        name: 'Fashion Flats for Ladies',
        category: 'ladies',
        gender: 'women',
        price: 549,
        originalPrice: 799,
        rating: 4.5,
        reviews: 167,
        image: 'images/first_prefer_Ladies/ladies_1.jpg',
        colors: ['Black', 'White', 'Red'],
        sizes: [5, 6, 7, 8, 9],
        description: 'Elegant fashion flats suitable for casual and semi-formal occasions.',
        specifications: {
            material: 'Premium Synthetic',
            waterResistant: false,
            cushioning: 'Standard',
            weight: 'Very Light'
        },
        inStock: true,
        featured: false,
        new: false
    },
    {
        id: 'ladies-004',
        name: 'Sport Active Shoes for Women',
        category: 'ladies',
        gender: 'women',
        price: 749,
        originalPrice: 1099,
        rating: 4.7,
        reviews: 334,
        image: 'images/first_prefer_Ladies/ladies_2.jpg',
        colors: ['Black', 'White', 'Purple', 'Pink'],
        sizes: [5, 6, 7, 8, 9],
        description: 'Active sports shoes for gym and workout. Supportive and lightweight design.',
        specifications: {
            material: 'Mesh + Rubber',
            waterResistant: true,
            cushioning: 'Premium EVA',
            weight: 'Light'
        },
        inStock: true,
        featured: true,
        new: true
    },

    // MEN'S & BOYS FOOTWEAR
    {
        id: 'mensboys-001',
        name: 'Premium V-Strap Sandals',
        category: 'mensboys',
        gender: 'men',
        price: 549,
        originalPrice: 799,
        rating: 4.7,
        reviews: 423,
        image: 'images/first_prefer_Mens&Boys/mensboys_18.jpg',
        colors: ['Black', 'Brown', 'Blue'],
        sizes: [7, 8, 9, 10],
        description: 'Premium quality v-strap sandals with water-resistant design. Perfect for casual wear.',
        specifications: {
            material: 'PU Leather + Rubber Sole',
            waterResistant: true,
            cushioning: 'Standard',
            weight: 'Medium'
        },
        inStock: true,
        featured: true,
        new: false
    },
    {
        id: 'mensboys-002',
        name: 'Boys Regular Use Chappals',
        category: 'mensboys',
        gender: 'kids',
        price: 349,
        originalPrice: 549,
        rating: 4.5,
        reviews: 198,
        image: 'images/first_prefer_Mens&Boys/mensboys_4.jpg',
        colors: ['Black', 'Blue', 'Green'],
        sizes: [5, 6, 7, 8],
        description: 'Durable chappals designed for boys regular daily use. Water-resistant and affordable.',
        specifications: {
            material: 'Rubber + EVA',
            waterResistant: true,
            cushioning: 'Standard',
            weight: 'Medium'
        },
        inStock: true,
        featured: false,
        new: false
    },
    {
        id: 'mensboys-003',
        name: 'Ultra Cushion Sport Shoes',
        category: 'mensboys',
        gender: 'men',
        price: 899,
        originalPrice: 1299,
        rating: 4.8,
        reviews: 356,
        image: 'images/first_prefer_Mens&Boys/mensboys_21.jpg',
        colors: ['Black', 'White', 'Red'],
        sizes: [7, 8, 9, 10],
        description: 'Ultra-cushioned sport shoes with superior arch support. Perfect for athletic activities.',
        specifications: {
            material: 'Mesh + Premium Rubber',
            waterResistant: true,
            cushioning: 'Premium Memory Foam',
            weight: 'Light'
        },
        inStock: true,
        featured: true,
        new: true
    },
    {
        id: 'mensboys-005',
        name: 'Urban Gen-Z Style Shoes',
        category: 'mensboys',
        gender: 'men',
        price: 699,
        originalPrice: 999,
        rating: 4.7,
        reviews: 289,
        image: 'images/first_prefer_Mens&Boys/mensboys_14.jpg',
        colors: ['White', 'Black', 'Gray', 'Blue'],
        sizes: [7, 8, 9, 10],
        description: 'Trendy Gen-Z inspired shoes with modern streetwear aesthetic.',
        specifications: {
            material: 'Synthetic + Rubber',
            waterResistant: true,
            cushioning: 'Standard',
            weight: 'Light'
        },
        inStock: true,
        featured: false,
        new: true
    },

    // FORMALS
    {
        id: 'formal-001',
        name: 'Executive Leather Formal Shoes',
        category: 'formals',
        gender: 'men',
        price: 799,
        originalPrice: 1199,
        rating: 4.8,
        reviews: 145,
        image: 'images/first_prefer_formals/formal_5.jpg',
        colors: ['Black', 'Brown'],
        sizes: [7, 8, 9, 10],
        description: 'Executive leather formal shoes designed to match your formal outfit perfectly. Hand-crafted comfort.',
        specifications: {
            material: 'Premium Leather',
            waterResistant: false,
            cushioning: 'Double Padded Sole',
            weight: 'Medium'
        },
        inStock: true,
        featured: true,
        new: true
    },
    {
        id: 'formal-002',
        name: 'Premium Formal Loafers',
        category: 'formals',
        gender: 'men',
        price: 899,
        originalPrice: 1299,
        rating: 4.9,
        reviews: 189,
        image: 'images/first_prefer_formals/formal_4.jpg',
        colors: ['Tan', 'Black', 'Cherry'],
        sizes: [7, 8, 9, 10],
        description: 'Premium stylish formal loafers. Perfect choice to elevate your dress style with ultimate comfort.',
        specifications: {
            material: 'Split Leather + EVA',
            waterResistant: false,
            cushioning: 'Memory Foam',
            weight: 'Light'
        },
        inStock: true,
        featured: true,
        new: true
    },
    {
        id: 'formal-003',
        name: 'Casual Dress Loafers',
        category: 'formals',
        gender: 'men',
        price: 699,
        originalPrice: 999,
        rating: 4.7,
        reviews: 120,
        image: 'images/first_prefer_formals/formal_1.jpg',
        colors: ['Brown', 'Gray'],
        sizes: [7, 8, 9, 10],
        description: 'Comfortable casual loafers designed for everyday formal and semi-formal wear.',
        specifications: {
            material: 'Suede Leather',
            waterResistant: false,
            cushioning: 'Standard Cushioning',
            weight: 'Light'
        },
        inStock: true,
        featured: false,
        new: true
    },
    {
        id: 'formal-004',
        name: 'Formal Office Shoes',
        category: 'formals',
        gender: 'men',
        price: 799,
        originalPrice: 1199,
        rating: 4.6,
        reviews: 267,
        image: 'images/first_prefer_formals/formal_6.jpg',
        colors: ['Black', 'Brown', 'Tan'],
        sizes: [7, 8, 9, 10],
        description: 'Professional formal office shoes with sleek design. Comfortable for long hours.',
        specifications: {
            material: 'Premium Leather',
            waterResistant: false,
            cushioning: 'Enhanced',
            weight: 'Medium'
        },
        inStock: true,
        featured: false,
        new: false
    }
];

// Category definitions with images
const categories = [
    {
        name: 'Sneakers',
        key: 'sneakers',
        image: 'images/first_prefer_sneakers/sneaker_10.jpg',
        icon: '👟',
        description: 'Trendy and comfortable sneakers'
    },
    {
        name: 'Crocks',
        key: 'crocks',
        image: 'images/first_prefer_crocks/crock_6.jpg',
        icon: '🩴',
        description: 'Ultra-comfortable crocks'
    },
    {
        name: 'Slides & Flops',
        key: 'slides',
        image: 'images/first_prefer_slides/slide_4.jpg',
        icon: '🩱',
        description: 'Easy-wear slides and flip flops'
    },
    {
        name: 'Ladies',
        key: 'ladies',
        image: 'images/first_prefer_Ladies/ladies_28.jpg',
        icon: '👠',
        description: 'Premium footwear for women'
    },
    {
        name: 'Men & Boys',
        key: 'mensboys',
        image: 'images/first_prefer_Mens&Boys/mensboys_14.jpg',
        icon: '👞',
        description: 'Wide range for men and boys'
    },
    {
        name: 'Formals',
        key: 'formals',
        image: 'images/first_prefer_formals/formal_6.jpg',
        icon: '👞',
        description: 'Elegant formal shoes & loafers'
    }
];

// Coupon codes
const coupons = {
    'SAVE10': { discount: 10, type: 'percentage' },
    'SAVE50': { discount: 50, type: 'flat' },
    'WELCOME': { discount: 15, type: 'percentage' },
    'FIRST': { discount: 100, type: 'flat' },
};

// Helper function to get product by ID
function getProductById(id) {
    return productsDatabase.find(p => p.id === id);
}

// Helper function to filter products
function filterProducts(criteria) {
    let filtered = productsDatabase;

    if (criteria.category) {
        filtered = filtered.filter(p => p.category === criteria.category);
    }

    if (criteria.gender) {
        filtered = filtered.filter(p => p.gender === criteria.gender);
    }

    if (criteria.minPrice !== undefined) {
        filtered = filtered.filter(p => p.price >= criteria.minPrice);
    }

    if (criteria.maxPrice !== undefined) {
        filtered = filtered.filter(p => p.price <= criteria.maxPrice);
    }

    if (criteria.size) {
        filtered = filtered.filter(p => p.sizes.includes(parseInt(criteria.size)));
    }

    if (criteria.search) {
        const searchTerm = criteria.search.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm)
        );
    }

    return filtered;
}

// Helper function to sort products
function sortProducts(products, sortBy) {
    const sorted = [...products];

    switch(sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'popular':
            return sorted.sort((a, b) => b.reviews - a.reviews);
        case 'newest':
        default:
            return sorted.sort((a, b) => b.new - a.new);
    }
}

// Get featured products
function getFeaturedProducts() {
    return productsDatabase.filter(p => p.featured).slice(0, 6);
}

// Get new arrivals
function getNewArrivals() {
    return productsDatabase.filter(p => p.new).slice(0, 8);
}

// Get best sellers
function getBestSellers() {
    return productsDatabase.sort((a, b) => b.reviews - a.reviews).slice(0, 8);
}
