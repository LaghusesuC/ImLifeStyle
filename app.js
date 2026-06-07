// ============================================
// IM LIFESTYLE - APPLICATION LOGIC
// ============================================

// State Management
let cart = [];
let currentFilters = {};
let currentModal = null;
let currentProduct = null;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    loadCartFromStorage();
    renderCategories();
    renderProductsGrid(productsDatabase);
    setupEventListeners();
    updateCartUI();
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Cart
    document.getElementById('cartBtn').addEventListener('click', openCart);

    // Mobile navbar toggle
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            navbarToggle.classList.toggle('active');
            navbarMenu.classList.toggle('active');
        });

        // Close menu when clicking nav links
        navbarMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function () {
                navbarToggle.classList.remove('active');
                navbarMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!event.target.closest('.navbar')) {
                navbarToggle.classList.remove('active');
                navbarMenu.classList.remove('active');
            }
        });
    }

    // Search
    document.getElementById('searchInput').addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Close modals on click outside
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.classList.remove('show');
        }
    });

    // Responsive menu
    document.addEventListener('click', function (e) {
        if (e.target.closest('.nav-link')) {
            // Close any open modals
            document.querySelectorAll('.modal.show').forEach(modal => {
                modal.classList.remove('show');
            });
        }
    });
}

// ============================================
// CATEGORIES
// ============================================

function renderCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    categoriesGrid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="filterByCategory('${cat.key}')" style="background-image: url('${cat.image}');">
            <div>
                <div class="category-card-name">${cat.name}</div>
                <div class="category-card-desc">${cat.description || ''}</div>
            </div>
        </div>
    `).join('');
}

function filterByCategory(categoryKey) {
    document.getElementById('categoryFilter').value = categoryKey;
    applyFilters();
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// PRODUCTS RENDERING
// ============================================

function renderProductsGrid(products) {
    const productsGrid = document.getElementById('productsGrid');

    if (products.length === 0) {
        productsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem;"><p style="font-size: 1.1rem; color: #999;">No products found. Try adjusting your filters.</p></div>';
        return;
    }

    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">${renderProductImage(product.image)}</div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price-section">
                    ${product.originalPrice ? `<span class="product-original-price">₹${product.originalPrice}</span>` : ''}
                    <span class="product-offer-price">₹${product.price}</span>
                    ${product.originalPrice ? `<span class="product-discount">${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>` : ''}
                </div>
                <div class="product-rating">★★★★★ ${product.rating} (${product.reviews})</div>
                <div class="product-actions">
                    <button class="action-btn" onclick="openQuickView('${product.id}')">👁 Quick View</button>
                    <button class="action-btn primary" onclick="addToCart('${product.id}')">🛒 Add</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProductImage(imageSrc) {
    // Check if it's an emoji (short text) or file path
    if (imageSrc && imageSrc.length < 3 && /\p{Emoji}/u.test(imageSrc)) {
        // It's an emoji
        return imageSrc;
    } else if (imageSrc && (imageSrc.includes('.jpg') || imageSrc.includes('.png') || imageSrc.includes('.webp'))) {
        // It's an image file
        return `<img src="${imageSrc}" alt="Product" onerror="this.replaceWith(document.createTextNode('📷'))">`;
    } else {
        // Fallback
        return '📦';
    }
}

// ============================================
// SEARCH & FILTERS
// ============================================

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value;
    const filtered = filterProducts({ search: searchTerm });
    const sorted = sortProducts(filtered, document.getElementById('sortBy').value);
    renderProductsGrid(sorted);
}

function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const gender = document.getElementById('genderFilter').value;
    const price = document.getElementById('priceFilter').value;
    const size = document.getElementById('sizeFilter').value;
    const sortBy = document.getElementById('sortBy').value;

    const criteria = {};

    if (category) criteria.category = category;
    if (gender) criteria.gender = gender;
    if (size) criteria.size = size;

    if (price) {
        const [min, max] = price.split('-');
        if (min) criteria.minPrice = parseInt(min);
        if (max && max !== '+') criteria.maxPrice = parseInt(max);
    }

    let filtered = filterProducts(criteria);
    filtered = sortProducts(filtered, sortBy);
    renderProductsGrid(filtered);
}

function resetFilters() {
    document.getElementById('categoryFilter').value = '';
    document.getElementById('genderFilter').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('sizeFilter').value = '';
    document.getElementById('sortBy').value = 'newest';
    document.getElementById('searchInput').value = '';
    renderProductsGrid(productsDatabase);
}

// ============================================
// QUICK VIEW MODAL
// ============================================

function openQuickView(productId) {
    currentProduct = getProductById(productId);
    if (!currentProduct) return;

    const modal = document.getElementById('quickViewModal');
    const modalImage = document.getElementById('modalProductImage');

    // Populate modal with proper image handling
    modalImage.innerHTML = '';
    modalImage.style.fontSize = 'inherit';
    modalImage.style.display = 'block';

    if (currentProduct.image && currentProduct.image.length < 3 && /\p{Emoji}/u.test(currentProduct.image)) {
        // Emoji
        modalImage.textContent = currentProduct.image;
        modalImage.style.fontSize = '6rem';
        modalImage.style.display = 'flex';
        modalImage.style.alignItems = 'center';
        modalImage.style.justifyContent = 'center';
        modalImage.style.height = '300px';
    } else if (currentProduct.image && (currentProduct.image.includes('.jpg') || currentProduct.image.includes('.png') || currentProduct.image.includes('.webp'))) {
        // Image file
        const img = document.createElement('img');
        img.src = currentProduct.image;
        img.alt = currentProduct.name;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.borderRadius = 'var(--border-radius)';
        img.onerror = function () {
            this.style.display = 'none';
            modalImage.textContent = '📷';
            modalImage.style.fontSize = '3rem';
        };
        modalImage.appendChild(img);
    } else {
        // Fallback
        modalImage.textContent = '📦';
        modalImage.style.fontSize = '3rem';
        modalImage.style.display = 'flex';
        modalImage.style.alignItems = 'center';
        modalImage.style.justifyContent = 'center';
        modalImage.style.height = '300px';
    }

    document.getElementById('modalProductName').textContent = currentProduct.name;
    document.getElementById('modalProductRating').textContent = '★'.repeat(Math.floor(currentProduct.rating)) + '☆'.repeat(5 - Math.floor(currentProduct.rating));
    document.getElementById('modalProductReviews').textContent = `(${currentProduct.reviews} reviews)`;
    document.getElementById('modalOriginalPrice').textContent = `₹${currentProduct.originalPrice}`;
    document.getElementById('modalOfferPrice').textContent = `₹${currentProduct.price}`;
    document.getElementById('modalDiscount').textContent = `${Math.round((1 - currentProduct.price / currentProduct.originalPrice) * 100)}% OFF`;
    document.getElementById('modalProductDescription').textContent = currentProduct.description;

    // Populate sizes
    const sizeSelector = document.getElementById('modalSizeSelector');
    sizeSelector.innerHTML = currentProduct.sizes.map(size => `
        <button class="size-btn" onclick="selectSize(${size})">${size}</button>
    `).join('');

    // Populate colors
    const colorSelector = document.getElementById('modalColorSelector');
    colorSelector.innerHTML = currentProduct.colors.map((color, idx) => `
        <button class="color-btn" onclick="selectColor('${color}')" style="background-color: ${getColorCode(color)}; border: 2px solid #ccc;" title="${color}"></button>
    `).join('');

    document.getElementById('modalQuantity').value = 1;
    document.getElementById('modalStockStatus').textContent = currentProduct.inStock ? 'In Stock' : 'Out of Stock';
    document.getElementById('modalStockStatus').classList.toggle('out-of-stock', !currentProduct.inStock);

    modal.classList.add('show');
}

function closeQuickView() {
    document.getElementById('quickViewModal').classList.remove('show');
    currentProduct = null;
}

function selectSize(size) {
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function selectColor(color) {
    document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function getColorCode(colorName) {
    const colorMap = {
        'Black': '#000000',
        'White': '#FFFFFF',
        'Red': '#FF0000',
        'Blue': '#0000FF',
        'Green': '#008000',
        'Yellow': '#FFFF00',
        'Pink': '#FFC0CB',
        'Purple': '#800080',
        'Brown': '#8B4513',
        'Gray': '#808080',
        'Navy': '#000080',
        'Beige': '#F5F5DC',
        'Gold': '#FFD700',
        'Silver': '#C0C0C0',
        'Rose': '#FF007F',
        'Turquoise': '#40E0D0',
        'Orange': '#FFA500',
        'Tan': '#D2B48C',
        'Khaki': '#F0E68C'
    };
    return colorMap[colorName] || '#CCCCCC';
}

function increaseQuantity() {
    const input = document.getElementById('modalQuantity');
    input.value = parseInt(input.value) + 1;
}

function decreaseQuantity() {
    const input = document.getElementById('modalQuantity');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function addToCartFromModal() {
    if (!currentProduct) return;

    const quantity = parseInt(document.getElementById('modalQuantity').value);
    const selectedSize = document.querySelector('.size-btn.active');
    const selectedColor = document.querySelector('.color-btn.active');

    if (!selectedSize) {
        alert('Please select a size');
        return;
    }

    addToCart(currentProduct.id, quantity, selectedSize.textContent, selectedColor?.title);
    closeQuickView();
}

function buyNowFromModal() {
    addToCartFromModal();
    openCart();
    proceedToCheckout();
}

// ============================================
// CART MANAGEMENT
// ============================================

function addToCart(productId, quantity = 1, size = '8', color = 'Black') {
    const product = getProductById(productId);
    if (!product) return;

    // Check if product already in cart with same size and color
    const existingItem = cart.find(item =>
        item.id === productId &&
        item.size === (size || '8') &&
        item.color === (color || 'Black')
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity,
            size: size || '8',
            color: color || 'Black',
            cartItemId: Date.now() // Unique ID for cart item
        });
    }

    saveCartToStorage();
    updateCartUI();

    // Show feedback
    showNotification(`✓ ${product.name} added to cart!`);
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    saveCartToStorage();
    updateCartUI();
}

function updateQuantity(cartItemId, quantity) {
    const item = cart.find(item => item.cartItemId === cartItemId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCartToStorage();
        updateCartUI();
    }
}

function updateCartUI() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = cartCount;

    const cartItemsContainer = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => {
            let imageHTML = '';
            if (item.image && item.image.length < 3 && /\p{Emoji}/u.test(item.image)) {
                // Emoji
                imageHTML = `<div class="cart-item-image" style="font-size: 2rem; display: flex; align-items: center; justify-content: center;">${item.image}</div>`;
            } else if (item.image && (item.image.includes('.jpg') || item.image.includes('.png') || item.image.includes('.webp'))) {
                // Image file
                imageHTML = `<div class="cart-item-image"><img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px;" onerror="this.replaceWith(document.createTextNode('📷'))"></div>`;
            } else {
                // Fallback
                imageHTML = `<div class="cart-item-image" style="font-size: 1.5rem; display: flex; align-items: center; justify-content: center;">📦</div>`;
            }

            return `
                <div class="cart-item">
                    ${imageHTML}
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">₹${item.price}</div>
                        <div style="font-size: 0.8rem; color: #999;">Size: ${item.size} | ${item.color}</div>
                        <div class="cart-item-quantity">
                            <button onclick="updateQuantity(${item.cartItemId}, ${item.quantity - 1})">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity(${item.cartItemId}, ${item.quantity + 1})">+</button>
                        </div>
                    </div>
                    <div class="cart-item-remove" onclick="removeFromCart(${item.cartItemId})">×</div>
                </div>
            `;
        }).join('');
    }

    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = cart.reduce((sum, item) => {
        const originalPrice = item.originalPrice || item.price;
        return sum + ((originalPrice - item.price) * item.quantity);
    }, 0);
    const total = subtotal;

    document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(0)}`;
    document.getElementById('discount').textContent = `-₹${discount.toFixed(0)}`;
    document.getElementById('cartTotal').textContent = `₹${total.toFixed(0)}`;
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('open');
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
}

// ============================================
// COUPON & CHECKOUT
// ============================================

function applyCoupon() {
    const couponCode = document.getElementById('couponCode').value.toUpperCase();
    const coupon = coupons[couponCode];

    if (!coupon) {
        alert('Invalid coupon code');
        return;
    }

    let discount = 0;
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (coupon.type === 'percentage') {
        discount = (subtotal * coupon.discount) / 100;
    } else {
        discount = coupon.discount;
    }

    const total = Math.max(0, subtotal - discount);
    document.getElementById('cartTotal').textContent = `₹${total.toFixed(0)}`;

    showNotification(`✓ Coupon applied! You saved ₹${discount.toFixed(0)}`);
}

let lastPlacedOrder = null;

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }

    closeCart();
    renderCheckoutSummary();
    document.getElementById('checkoutModal').classList.add('show');
}

function renderCheckoutSummary() {
    const summaryItems = document.getElementById('checkoutSummaryItems');
    const subtotalEl = document.getElementById('checkoutSubtotal');
    const totalEl = document.getElementById('checkoutTotal');

    if (!summaryItems || !subtotalEl || !totalEl) return;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartTotalText = document.getElementById('cartTotal').textContent; // Get the total from the cart UI (handles coupon codes if any)

    summaryItems.innerHTML = cart.map(item => {
        let imageSrc = item.image;
        let imageHTML = '';
        if (imageSrc && imageSrc.length < 3 && /\p{Emoji}/u.test(imageSrc)) {
            imageHTML = `<span style="font-size: 1.5rem;">${imageSrc}</span>`;
        } else if (imageSrc && (imageSrc.includes('.jpg') || imageSrc.includes('.png') || imageSrc.includes('.webp'))) {
            imageHTML = `<img src="${imageSrc}" alt="${item.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px;">`;
        } else {
            imageHTML = `<span>📦</span>`;
        }

        return `
            <div class="checkout-summary-item" style="display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid #f0f0f0;">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    ${imageHTML}
                    <div>
                        <div style="font-weight: 600; font-size: 0.9rem; color: var(--primary-color);">${item.name}</div>
                        <div style="font-size: 0.75rem; color: #777;">Size: ${item.size} | Qty: ${item.quantity}</div>
                    </div>
                </div>
                <div style="font-weight: 600; font-size: 0.9rem; color: var(--primary-color);">₹${(item.price * item.quantity).toFixed(0)}</div>
            </div>
        `;
    }).join('');

    subtotalEl.textContent = `₹${subtotal.toFixed(0)}`;
    totalEl.textContent = cartTotalText;
}

function updatePaymentCardStyles() {
    document.querySelectorAll('.payment-card').forEach(card => {
        const input = card.querySelector('input');
        if (input.checked) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('show');
}

function handleCheckout(event) {
    event.preventDefault();

    const name = document.getElementById('checkoutName').value;
    const email = document.getElementById('checkoutEmail').value;
    const phone = document.getElementById('checkoutPhone').value;
    const address = document.getElementById('checkoutAddress').value;
    const city = document.getElementById('checkoutCity').value;
    const state = document.getElementById('checkoutState').value;
    const pincode = document.getElementById('checkoutPincode').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    if (!name || !email || !phone || !address || !city || !state || !pincode) {
        alert('Please fill all required fields');
        return;
    }

    const orderTotal = parseFloat(document.getElementById('checkoutTotal').textContent.replace('₹', '')) || cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const orderDetails = {
        orderId: 'IM' + Date.now().toString().slice(-6),
        customer: { name, email, phone, address, city, state, pincode },
        items: cart,
        total: orderTotal,
        paymentMethod: paymentMethod
    };

    if (paymentMethod === 'whatsapp') {
        orderViaWhatsAppCheckout(orderDetails);
        completeOrder(orderDetails);
    } else {
        completeOrder(orderDetails);
    }
}

function completeOrder(orderDetails) {
    lastPlacedOrder = orderDetails;
    showNotification('✓ Order registered!');

    // Save order
    localStorage.setItem('lastOrder', JSON.stringify(orderDetails));

    // Clear cart
    cart = [];
    saveCartToStorage();
    updateCartUI();

    // Close modal
    closeCheckout();

    // Reset form
    document.querySelector('.checkout-form-section form')?.reset();

    // Show success modal with modern design
    showOrderSuccessModal(orderDetails);
}

function showOrderSuccessModal(orderDetails) {
    document.getElementById('successOrderId').textContent = orderDetails.orderId;
    document.getElementById('successOrderTotal').textContent = `₹${orderDetails.total.toFixed(0)}`;
    document.getElementById('successCustomerName').textContent = orderDetails.customer.name;

    document.getElementById('orderSuccessModal').classList.add('show');
}

function closeSuccessModal() {
    document.getElementById('orderSuccessModal').classList.remove('show');
}

function closeSuccessAndContinue() {
    closeSuccessModal();
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

function trackOrderOnWhatsApp() {
    if (!lastPlacedOrder) return;

    let message = `Hi IM Lifestyle! I just placed an order. Please confirm and share tracking details:\n\n`;
    message += `Order ID: ${lastPlacedOrder.orderId}\n`;
    message += `Name: ${lastPlacedOrder.customer.name}\n`;
    message += `Total: ${document.getElementById('successOrderTotal').textContent}\n\n`;
    message += `Thank you!`;

    const whatsappUrl = `https://wa.me/919944380045?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// ============================================
// WHATSAPP INTEGRATION
// ============================================

function orderViaWhatsApp() {
    if (!currentProduct) return;

    const quantity = parseInt(document.getElementById('modalQuantity').value);
    const size = document.querySelector('.size-btn.active')?.textContent || '8';

    const message = `Hi IM Lifestyle! I'm interested in ordering:\n\n${currentProduct.name}\nPrice: ₹${currentProduct.price}\nQuantity: ${quantity}\nSize: ${size}\n\nPlease provide more details and proceed with the order.`;

    const whatsappUrl = `https://wa.me/919944380045text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function orderViaWhatsAppCart() {
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }

    let message = 'Hi IM Lifestyle! I want to place an order for the following items:\n\n';

    cart.forEach((item, idx) => {
        message += `${idx + 1}. ${item.name}\n   Price: ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}\n   Size: ${item.size}\n\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `Total: ₹${total}\n\nPlease confirm the order and provide payment details.`;

    const whatsappUrl = `https://wa.me/919944380045?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function orderViaWhatsAppCheckout(orderDetails) {
    let message = `Hi IM Lifestyle! Here are my order details:\n\n`;
    message += `Name: ${orderDetails.customer.name}\n`;
    message += `Phone: ${orderDetails.customer.phone}\n`;
    message += `Email: ${orderDetails.customer.email}\n`;
    message += `Address: ${orderDetails.customer.address}, ${orderDetails.customer.city}, ${orderDetails.customer.state} - ${orderDetails.customer.pincode}\n\n`;
    message += `Items:\n`;

    orderDetails.items.forEach((item, idx) => {
        message += `${idx + 1}. ${item.name} (Size: ${item.size}) x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });

    message += `\nTotal: ₹${orderDetails.total}\nPayment Method: ${orderDetails.paymentMethod}\n\nPlease confirm this order.`;

    const whatsappUrl = `https://wa.me/919944380045?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function openWhatsApp() {
    window.open('https://wa.me/919944380045?text=Hi%20IM%20Lifestyle!%20I%20would%20like%20to%20know%20more%20about%20your%20products.', '_blank');
}

// ============================================
// CONTACT FORM
// ============================================

function handleContactForm(event) {
    event.preventDefault();

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const message = document.getElementById('contactMessage').value;

    // In a real application, this would be sent to a backend
    const contactDetails = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

    // Send via WhatsApp as backup
    const whatsappUrl = `https://wa.me/919944380045?text=${encodeURIComponent('New Contact Form Inquiry:\n\n' + contactDetails)}`;
    window.open(whatsappUrl, '_blank');

    showNotification('✓ Thank you! We\'ll get back to you soon.');

    // Reset form
    event.target.reset();
}

// ============================================
// STORAGE
// ============================================

function saveCartToStorage() {
    localStorage.setItem('imlifestyleCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('imlifestyleCart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
        } catch (e) {
            cart = [];
        }
    }
}

// ============================================
// UTILITIES
// ============================================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #000;
        color: #fff;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInLeft 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// ADDITIONAL FEATURES
// ============================================

// Sticky cart button for mobile
if (window.innerWidth <= 768) {
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            body {
                padding-bottom: 80px;
            }
            
            .cart-btn {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 100;
            }
        }
    `;
    document.head.appendChild(style);
}

// Lazy load animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .feature-card, .testimonial-card').forEach(el => {
    observer.observe(el);
});

console.log('IM Lifestyle - Premium Footwear Store Loaded ✓');
