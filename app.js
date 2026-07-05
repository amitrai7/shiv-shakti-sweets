// Product Data
const PRODUCTS = [
    {
        id: 1,
        title: "Kesar Peda",
        category: "peda-barfi",
        price: 350,
        unit: "kg",
        description: "Thickened milk solid fudge flavored with rich Kashmiri saffron (kesar) and topped with a slice of pistachio. Perfect for festivals.",
        image: "assets/kaju-katli.jpg",
        badge: "Festive Pick",
        rating: 4.8,
        reviews: 135,
        ingredients: ["Fresh Milk Khoya", "Sugar", "Kashmiri Saffron (Kesar)", "Pistachio Garnish"],
        dietary: ["100% Vegetarian", "Contains Dairy", "Contains Nuts"],
        shelfLife: "8 Days (Keep refrigerated)",
        nutrition: { calories: "315 kcal", fat: "15g", sugar: "36g" }
    },
    {
        id: 2,
        title: "Mawa Barfi",
        category: "peda-barfi",
        price: 350,
        unit: "kg",
        description: "Classic milk fudge barfi cooked with fresh mawa/khoya, sweetened to perfection, and garnished with cardamom powder.",
        image: "assets/kaju-katli.jpg",
        badge: "Classic",
        rating: 4.7,
        reviews: 95,
        ingredients: ["Fresh Khoya", "Sugar", "Cardamom Powder"],
        dietary: ["100% Vegetarian", "Contains Dairy"],
        shelfLife: "7 Days (Refrigerate)",
        nutrition: { calories: "340 kcal", fat: "12g", sugar: "30g" }
    },
    {
        id: 3,
        title: "Chocolate Peda",
        category: "peda-barfi",
        price: 320,
        unit: "kg",
        description: "Unique combination of rich cocoa and traditional milk fudge, rolled into smooth round pedas that kids and adults love alike.",
        image: "assets/kaju-katli.jpg",
        badge: "Kids Favorite",
        rating: 4.8,
        reviews: 120,
        ingredients: ["Fresh Milk Solids", "Cocoa Powder", "Sugar", "Ghee"],
        dietary: ["100% Vegetarian", "Contains Dairy"],
        shelfLife: "8 Days (Keep refrigerated)",
        nutrition: { calories: "330 kcal", fat: "13g", sugar: "35g" }
    },
    {
        id: 4,
        title: "Cham Cham",
        category: "bengali",
        price: 360,
        unit: "kg",
        description: "Traditional Bengali sweet made from fresh paneer (chenna), cooked in sugar syrup, shaped oval, and coated with desiccated coconut.",
        image: "assets/rasgulla.jpg",
        badge: "Traditional",
        rating: 4.8,
        reviews: 140,
        ingredients: ["Chhena (Cottage Cheese)", "Sugar Syrup", "Desiccated Coconut", "Food Color"],
        dietary: ["100% Vegetarian", "Contains Dairy"],
        shelfLife: "4 Days (Keep refrigerated)",
        nutrition: { calories: "310 kcal", fat: "10g", sugar: "42g" }
    },
    {
        id: 5,
        title: "Angoor Rabdi",
        category: "bengali",
        price: 300,
        unit: "kg",
        description: "Tiny, spongy cottage cheese grape-sized balls (angoor) floating in a rich, thick, cardamom-infused sweetened condensed milk (rabdi).",
        image: "assets/rasgulla.jpg",
        badge: "Rich Flavor",
        rating: 4.9,
        reviews: 215,
        ingredients: ["Milk Solids", "Chhena", "Saffron", "Cardamom", "Pistachio slivers"],
        dietary: ["100% Vegetarian", "Contains Dairy", "Contains Nuts"],
        shelfLife: "3 Days (Keep refrigerated)",
        nutrition: { calories: "280 kcal", fat: "11g", sugar: "32g" }
    },
    {
        id: 6,
        title: "Rasmalai",
        category: "bengali",
        price: 300,
        unit: "kg",
        description: "Flattened spongy cottage cheese patties soaked in thickened, sweet saffron milk, garnished with almonds and pistachios.",
        image: "assets/rasgulla.jpg",
        badge: "Best Seller",
        rating: 4.9,
        reviews: 380,
        ingredients: ["Chhena", "Condensed Milk", "Saffron (Kesar)", "Almonds", "Pistachios"],
        dietary: ["100% Vegetarian", "Contains Dairy", "Contains Nuts"],
        shelfLife: "3 Days (Keep refrigerated)",
        nutrition: { calories: "290 kcal", fat: "12g", sugar: "34g" }
    },
    {
        id: 7,
        title: "American Matho",
        category: "peda-barfi",
        price: 320,
        unit: "kg",
        description: "Rich, creamy strained yogurt dessert (Shrikhand) loaded with mixed dry fruits, chocolate chips, and American nuts.",
        image: "assets/motichoor.jpg",
        badge: "Chef Special",
        rating: 4.8,
        reviews: 175,
        ingredients: ["Strained Yogurt (Chakka)", "Sugar", "Mixed Nuts", "Chocolate Chips", "Dry Fruits"],
        dietary: ["100% Vegetarian", "Contains Dairy", "Contains Nuts"],
        shelfLife: "10 Days (Keep refrigerated)",
        nutrition: { calories: "325 kcal", fat: "10g", sugar: "36g" }
    },
    {
        id: 8,
        title: "Khajur Pak",
        category: "dryfruit",
        price: 600,
        unit: "kg",
        description: "Healthy sugar-free barfi prepared with premium dates, almonds, cashews, and pistachios bound together with pure desi ghee.",
        image: "assets/kaju-katli.jpg",
        badge: "Sugar Free",
        rating: 4.9,
        reviews: 150,
        ingredients: ["Dates (Khajur)", "Almonds", "Cashews", "Pistachios", "Desi Ghee"],
        dietary: ["100% Vegetarian", "Sugar Free", "Gluten Free", "Contains Nuts"],
        shelfLife: "30 Days at room temp",
        nutrition: { calories: "295 kcal", fat: "14g", sugar: "0g (Added)" }
    },
    {
        id: 9,
        title: "Kaju Mysore Pak",
        category: "dryfruit",
        price: 700,
        unit: "kg",
        description: "Premium rich fudge made of fine gram flour, rich cashew meal, sugar, and generous amounts of pure desi ghee. Unmatched richness.",
        image: "assets/kaju-katli.jpg",
        badge: "Rich Ghee",
        rating: 4.8,
        reviews: 185,
        ingredients: ["Cashew Powder", "Gram Flour", "Pure Desi Ghee", "Sugar"],
        dietary: ["100% Vegetarian", "Contains Ghee", "Contains Nuts"],
        shelfLife: "20 Days at room temp",
        nutrition: { calories: "420 kcal", fat: "26g", sugar: "38g" }
    },
    {
        id: 10,
        title: "Besan Mysore Pak",
        category: "peda-barfi",
        price: 300,
        unit: "kg",
        description: "Traditional sweet made of chickpea flour, sugar, and pure ghee. Soft, porous, and crumbles in your mouth.",
        image: "assets/kaju-katli.jpg",
        badge: "Traditional",
        rating: 4.7,
        reviews: 142,
        ingredients: ["Chickpea Flour (Besan)", "Pure Ghee", "Sugar"],
        dietary: ["100% Vegetarian", "Contains Ghee"],
        shelfLife: "20 Days at room temp",
        nutrition: { calories: "390 kcal", fat: "22g", sugar: "40g" }
    },
    {
        id: 11,
        title: "Kalakand",
        category: "peda-barfi",
        price: 400,
        unit: "kg",
        description: "Moist, soft, granular milk cake flavored with cardamom, cooked with freshly curdled paneer and milk solids.",
        image: "assets/kaju-katli.jpg",
        badge: "Fresh",
        rating: 4.8,
        reviews: 190,
        ingredients: ["Paneer", "Milk Solids", "Sugar", "Cardamom"],
        dietary: ["100% Vegetarian", "Contains Dairy"],
        shelfLife: "5 Days (Keep refrigerated)",
        nutrition: { calories: "330 kcal", fat: "14g", sugar: "32g" }
    },
    {
        id: 12,
        title: "Kala Jamun",
        category: "bengali",
        price: 200,
        unit: "kg",
        description: "Deep-fried milk solids dumplings, fried to a deep dark color, offering a firm outer layer and soft interior soaked in cardamom sugar syrup.",
        image: "assets/gulab-jamun.jpg",
        badge: "Warm Delight",
        rating: 4.8,
        reviews: 260,
        ingredients: ["Khoya", "Paneer", "Sugar Syrup", "Cardamom", "Desi Ghee (frying)"],
        dietary: ["100% Vegetarian", "Contains Dairy"],
        shelfLife: "5 Days (Refrigerate)",
        nutrition: { calories: "325 kcal", fat: "13g", sugar: "42g" }
    },
    {
        id: 13,
        title: "Besan Ladoo",
        category: "ladoo",
        price: 320,
        unit: "kg",
        description: "Slow-roasted gram flour (besan) combined with sugar, pure desi ghee, and crunchy almond slivers, rolled into aromatic delicious balls.",
        image: "assets/motichoor.jpg",
        badge: "Traditional",
        rating: 4.8,
        reviews: 156,
        ingredients: ["Slow-roasted Gram Flour", "Desi Ghee", "Sugar", "Almond Slivers", "Cardamom Powder"],
        dietary: ["100% Vegetarian", "Contains Ghee", "Contains Nuts"],
        shelfLife: "20 Days at room temp",
        nutrition: { calories: "360 kcal", fat: "20g", sugar: "35g" }
    },
    {
        id: 14,
        title: "Paneer Jalebi",
        category: "bengali",
        price: 350,
        unit: "kg",
        description: "Crispy and soft jalebis prepared with fresh paneer (cottage cheese) batter, deep-fried to golden-brown, and soaked in cardamom syrup.",
        image: "assets/gulab-jamun.jpg",
        badge: "Chef Special",
        rating: 4.9,
        reviews: 310,
        ingredients: ["Fresh Paneer", "Refined Flour", "Ghee (frying)", "Sugar Syrup"],
        dietary: ["100% Vegetarian", "Contains Dairy"],
        shelfLife: "4 Days (Refrigerate)",
        nutrition: { calories: "335 kcal", fat: "15g", sugar: "38g" }
    },
    {
        id: 15,
        title: "Kaju Katli",
        category: "dryfruit",
        price: 900,
        unit: "kg",
        description: "Exquisite diamond-shaped melt-in-your-mouth cashew fudge decorated with premium edible silver leaf (vark). Made with select Goan cashews.",
        image: "assets/kaju-katli.jpg",
        badge: "Best Seller",
        rating: 4.9,
        reviews: 320,
        ingredients: ["Premium Cashews", "Sugar", "Pure Silver Vark", "Cardamom Infusion"],
        dietary: ["100% Vegetarian", "Gluten Free", "Contains Nuts"],
        shelfLife: "15 Days at room temp",
        nutrition: { calories: "389 kcal", fat: "18g", sugar: "32g" }
    },
    {
        id: 16,
        title: "Motichoor Ladoo",
        category: "ladoo",
        price: 420,
        unit: "kg",
        description: "Soft, golden-orange spheres made from fine chickpea flour droplets (boondi), fried in 100% pure desi ghee, and infused with saffron and cardamom.",
        image: "assets/motichoor.jpg",
        badge: "Pure Desi Ghee",
        rating: 4.8,
        reviews: 245,
        ingredients: ["Gram Flour (Besan)", "Desi Ghee", "Saffron (Kesar)", "Cardamom Powder", "Melon Seeds"],
        dietary: ["100% Vegetarian", "Contains Ghee", "Nut Free"],
        shelfLife: "7 Days at room temp",
        nutrition: { calories: "340 kcal", fat: "22g", sugar: "38g" }
    },
    {
        id: 17,
        title: "Gulab Jamun",
        category: "bengali",
        price: 400,
        unit: "kg",
        description: "Classic deep-fried milk dumplings soaked in a warm, fragrant sugar syrup spiced with rosewater, green cardamom, and saffron.",
        image: "assets/gulab-jamun.jpg",
        badge: "Served Warm",
        rating: 4.9,
        reviews: 412,
        ingredients: ["Khoya (Milk Solids)", "All-purpose Flour", "Desi Ghee (for frying)", "Sugar Syrup", "Rosewater", "Cardamom"],
        dietary: ["100% Vegetarian", "Contains Dairy"],
        shelfLife: "5 Days (Keep refrigerated)",
        nutrition: { calories: "320 kcal", fat: "14g", sugar: "45g" }
    },
    {
        id: 18,
        title: "Rasgulla",
        category: "bengali",
        price: 380,
        unit: "kg",
        description: "Soft, spongy, snow-white cottage cheese (chenna) balls cooked and immersed in a light, delicate sugar syrup. Traditional Bengali recipe.",
        image: "assets/rasgulla.jpg",
        badge: "Fresh & Spongy",
        rating: 4.7,
        reviews: 188,
        ingredients: ["Chhena (Fresh Cottage Cheese)", "Refined Sugar Syrup", "Rosewater Essence"],
        dietary: ["100% Vegetarian", "Gluten Free", "Contains Dairy"],
        shelfLife: "4 Days (Keep refrigerated)",
        nutrition: { calories: "186 kcal", fat: "4g", sugar: "34g" }
    },
    {
        id: 19,
        title: "Dry Fruit Special Barfi",
        category: "dryfruit",
        price: 1200,
        unit: "kg",
        description: "A rich sugar-free barfi packed with premium chopped almonds, pistachios, cashews, and dates, slow-cooked to sticky perfection.",
        image: "assets/kaju-katli.jpg",
        badge: "Sugar Free",
        rating: 4.9,
        reviews: 110,
        ingredients: ["Selected Dates", "Premium Almonds", "Pistachios", "Cashews", "Desi Ghee (minimal)"],
        dietary: ["100% Vegetarian", "Sugar Free", "Gluten Free", "Contains Nuts"],
        shelfLife: "30 Days at room temp",
        nutrition: { calories: "290 kcal", fat: "12g", sugar: "10g (Natural)" }
    },
    {
        id: 20,
        title: "Classic Milk Cake",
        category: "peda-barfi",
        price: 640,
        unit: "kg",
        description: "Traditional grainy milk fudge slow-roasted to a deep golden-brown core, offering a delightful caramelized taste and soft texture.",
        image: "assets/kaju-katli.jpg",
        badge: "Halwai Special",
        rating: 4.9,
        reviews: 202,
        ingredients: ["Concentrated Pure Milk", "Refined Sugar", "Desi Ghee", "Cardamom Powder", "Lemon Juice"],
        dietary: ["100% Vegetarian", "Contains Dairy"],
        shelfLife: "10 Days (Store in cool place)",
        nutrition: { calories: "355 kcal", fat: "18g", sugar: "40g" }
    }
];

// App State
let cart = [];
let currentCategory = "all";
let searchQuery = "";
let selectedProductId = 1; // Default to first product (Kaju Katli)
let previewWeight = 0.5; // Default weight in preview pane
let customSweets = []; // Dynamic sweets added by owner
let defaultOverrides = {}; // Overrides for default sweets (key is ID)

// WhatsApp Config
const SHOP_PHONE = "919876543210"; // Shop's WhatsApp Number

// DOM Elements
const productsGrid = document.getElementById("products-grid");
const categoryFilters = document.getElementById("category-filters");
const searchInput = document.getElementById("search-input");
const cartBtn = document.getElementById("cart-btn");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const closeCart = document.getElementById("close-cart");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const cartBadge = document.getElementById("cart-badge");
const checkoutBtn = document.getElementById("checkout-btn");
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const header = document.getElementById("header");
const navLinks = document.querySelectorAll(".nav-link");
const productPreviewPane = document.getElementById("product-preview-pane");
const previewOverlay = document.getElementById("preview-overlay");

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    loadCart();
    loadCustomSweets();
    loadDefaultOverrides();
    renderProducts();
    renderProductPreview();
    setupEventListeners();
    updateCartUI();
});

// Load custom sweets from Local Storage
function loadCustomSweets() {
    const saved = localStorage.getItem("shiv_shakti_custom_sweets");
    if (saved) {
        try {
            customSweets = JSON.parse(saved);
        } catch (e) {
            customSweets = [];
        }
    }
}

// Save custom sweets to Local Storage
function saveCustomSweets() {
    localStorage.setItem("shiv_shakti_custom_sweets", JSON.stringify(customSweets));
}

// Load default overrides from Local Storage
function loadDefaultOverrides() {
    const saved = localStorage.getItem("shiv_shakti_default_overrides");
    if (saved) {
        try {
            defaultOverrides = JSON.parse(saved);
        } catch (e) {
            defaultOverrides = {};
        }
    }
}

// Save default overrides to Local Storage
function saveDefaultOverrides() {
    localStorage.setItem("shiv_shakti_default_overrides", JSON.stringify(defaultOverrides));
}

// Get menu order (list of IDs) from Local Storage, ensuring it's in sync with current products
function getMenuOrder(currentIds) {
    const saved = localStorage.getItem("shiv_shakti_menu_order");
    let order = [];
    if (saved) {
        try {
            order = JSON.parse(saved);
        } catch (e) {
            order = [];
        }
    }
    
    // Ensure all current IDs exist in the order array
    let updated = false;
    currentIds.forEach(id => {
        if (!order.includes(id)) {
            order.push(id);
            updated = true;
        }
    });
    
    // Remove IDs that are no longer present
    const validOrder = order.filter(id => currentIds.includes(id));
    if (validOrder.length !== order.length) {
        order = validOrder;
        updated = true;
    }
    
    if (updated || !saved) {
        localStorage.setItem("shiv_shakti_menu_order", JSON.stringify(order));
    }
    return order;
}

// Merge default products and overrides, filtering out hidden items, sorted by custom menu order
function getAllProducts() {
    const mergedDefaults = PRODUCTS.map(product => {
        if (defaultOverrides[product.id]) {
            return { ...product, ...defaultOverrides[product.id] };
        }
        return product;
    }).filter(product => !product.hidden);
    
    const all = [...mergedDefaults, ...customSweets];
    const order = getMenuOrder(all.map(p => p.id));
    
    return all.sort((a, b) => {
        const indexA = order.indexOf(a.id);
        const indexB = order.indexOf(b.id);
        return indexA - indexB;
    });
}

// Load cart from Local Storage
function loadCart() {
    const savedCart = localStorage.getItem("shiv_shakti_cart");
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            cart = [];
        }
    }
}

// Save cart to Local Storage
function saveCart() {
    localStorage.setItem("shiv_shakti_cart", JSON.stringify(cart));
}

// Render Products Grid
function renderProducts() {
    const allProducts = getAllProducts();
    // Filter logic
    const filtered = allProducts.filter(product => {
        const matchesCategory = currentCategory === "all" || product.category === currentCategory;
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Clear grid
    productsGrid.innerHTML = "";

    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fa-regular fa-face-frown" style="font-size: 2.5rem; margin-bottom: 15px; display: block; color: var(--secondary);"></i>
                <p>No sweets found matching your selection.</p>
            </div>
        `;
        return;
    }

    // Build grid elements
    filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = `product-card${product.id === selectedProductId ? ' active' : ''}`;
        
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <span class="product-category">${product.category.replace("-", " ")}</span>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">₹${product.price} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">/ ${product.unit}</span></span>
                </div>
            </div>
        `;

        // Card selection handler
        card.addEventListener("click", () => {
            selectProduct(product.id);
        });

        productsGrid.appendChild(card);
    });
}

// Select product and open preview
function selectProduct(productId) {
    selectedProductId = productId;
    previewWeight = 0.5; // Reset selected weight in preview pane
    renderProducts();
    renderProductPreview();
    
    // On mobile / tablet, open as slide-in drawer
    if (window.innerWidth <= 992) {
        togglePreviewDrawer(true);
    }
}

// Toggle mobile preview drawer
function togglePreviewDrawer(isOpen) {
    if (isOpen) {
        productPreviewPane.classList.add("open");
        previewOverlay.classList.add("open");
        document.body.style.overflow = "hidden"; // Prevent scrolling behind overlay
    } else {
        productPreviewPane.classList.remove("open");
        previewOverlay.classList.remove("open");
        // Restore scroll if cart drawer is also closed
        if (!cartDrawer.classList.contains("open")) {
            document.body.style.overflow = "auto";
        }
    }
}

// Generate stars HTML based on rating
function getRatingStars(rating) {
    let starsHtml = "";
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHtml += '<i class="fa-solid fa-star"></i>';
        } else if (i === fullStars && hasHalf) {
            starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
        } else {
            starsHtml += '<i class="fa-regular fa-star"></i>';
        }
    }
    return starsHtml;
}

// Update weight and price display in preview pane
function updatePreviewQuantityUI(price) {
    const qtyVal = document.getElementById("preview-qty-value");
    const addBtn = document.getElementById("preview-add-btn");
    if (qtyVal) qtyVal.textContent = `${previewWeight} kg`;
    if (addBtn) {
        addBtn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> Add ₹${(price * previewWeight).toFixed(0)} to Bag`;
    }
}

// Add product to cart with custom weight
function addProductWithWeight(productId, weight) {
    const product = getAllProducts().find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.product.id === productId);

    if (existingItem) {
        existingItem.quantity += weight;
    } else {
        cart.push({
            product: product,
            quantity: weight
        });
    }

    saveCart();
    updateCartUI();
    triggerCartBadgeAnimation();
    toggleCart(true); // Open the cart drawer
}

// Render dynamic preview pane contents
function renderProductPreview() {
    const allProducts = getAllProducts();
    const product = allProducts.find(p => p.id === selectedProductId);
    
    if (!product) {
        productPreviewPane.innerHTML = `
            <div class="preview-empty-state">
                <i class="fa-solid fa-cookie-bite preview-empty-icon"></i>
                <p>Select a sweet to view details, ingredients, and nutritional specifications.</p>
            </div>
        `;
        return;
    }

    productPreviewPane.innerHTML = `
        <button class="preview-close-btn" id="close-preview" aria-label="Close Preview">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="preview-img-wrapper">
            <img src="${product.image}" alt="${product.title}" class="preview-img">
            ${product.badge ? `<span class="preview-badge">${product.badge}</span>` : ''}
        </div>
        <div class="preview-content preview-fade-in">
            <div class="preview-meta">
                <span class="preview-category">${product.category.replace("-", " ")}</span>
                <h3 class="preview-title">${product.title}</h3>
                <div class="preview-rating-row">
                    <div class="preview-stars">
                        ${getRatingStars(product.rating)}
                    </div>
                    <span>${product.rating.toFixed(1)} (${product.reviews} reviews)</span>
                </div>
            </div>

            <div class="preview-price-row">
                <span class="preview-price">₹${product.price} <span class="preview-price-unit">/ ${product.unit}</span></span>
            </div>

            <p class="preview-desc">${product.description}</p>

            <div class="preview-tags">
                ${product.dietary.map(tag => {
                    let tagClass = "veg";
                    let icon = "fa-leaf";
                    if (tag.toLowerCase().includes("nut")) { tagClass = "nuts"; icon = "fa-cubes"; }
                    else if (tag.toLowerCase().includes("gluten")) { tagClass = "gluten-free"; icon = "fa-wheat-awn-circle-exclamation"; }
                    else if (tag.toLowerCase().includes("dairy")) { tagClass = "dairy"; icon = "fa-glass-water"; }
                    else if (tag.toLowerCase().includes("sugar")) { tagClass = "sugar-free"; icon = "fa-check"; }
                    else if (tag.toLowerCase().includes("ghee")) { tagClass = "nuts"; icon = "fa-bowl-food"; }
                    return `<span class="dietary-tag ${tagClass}"><i class="fa-solid ${icon}"></i> ${tag}</span>`;
                }).join("")}
            </div>

            <div>
                <h4 class="preview-section-title">Ingredients</h4>
                <ul class="preview-ingredients-list">
                    ${product.ingredients.map(ing => `<li>${ing}</li>`).join("")}
                </ul>
            </div>

            <div>
                <h4 class="preview-section-title">Details</h4>
                <div class="preview-info-row">
                    <span class="preview-info-label">Shelf Life</span>
                    <span class="preview-info-value">${product.shelfLife}</span>
                </div>
                <div class="preview-info-row">
                    <span class="preview-info-label">Calories</span>
                    <span class="preview-info-value">${product.nutrition.calories}</span>
                </div>
                <div class="preview-info-row">
                    <span class="preview-info-label">Fat / Sugar</span>
                    <span class="preview-info-value">${product.nutrition.fat} fat, ${product.nutrition.sugar} sugar</span>
                </div>
            </div>
        </div>
        <div class="preview-actions">
            <div class="in-store-notice">
                <i class="fa-solid fa-store"></i>
                <div>
                    <strong>Available In-Store Only</strong>
                    <p>Visit our shop in Kopar Khairane to purchase fresh sweets.</p>
                </div>
            </div>
            <a href="#contact" class="preview-add-btn" id="preview-location-btn" style="text-align: center;">
                <i class="fa-solid fa-map-location-dot"></i> View Shop Location
            </a>
        </div>
    `;

    // Attach local preview interactive listeners
    const closePreviewBtn = document.getElementById("close-preview");
    if (closePreviewBtn) {
        closePreviewBtn.addEventListener("click", () => togglePreviewDrawer(false));
    }

    const locationBtn = document.getElementById("preview-location-btn");
    if (locationBtn) {
        locationBtn.addEventListener("click", () => {
            // Close mobile drawer if on mobile
            if (window.innerWidth <= 992) {
                togglePreviewDrawer(false);
            }
        });
    }
}

// Add Item to Cart
function addToCart(productId) {
    const product = getAllProducts().find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.product.id === productId);

    if (existingItem) {
        existingItem.quantity += 0.5; // Increment by 0.5 kg (standard sweet measurement)
    } else {
        cart.push({
            product: product,
            quantity: 0.5 // Default starting weight is 0.5 kg
        });
    }

    saveCart();
    updateCartUI();
    triggerCartBadgeAnimation();
}

// Update Cart Item Quantity
function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.product.id === productId);
    if (!item) return;

    // Minimum limit is 0.5 kg, decrement by 0.5 kg
    item.quantity = parseFloat(quantity);
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
}

// Remove Item from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    saveCart();
    updateCartUI();
}

// Update Cart Sidebar UI
function updateCartUI() {
    // Update badge count
    const totalCount = cart.reduce((acc, item) => acc + (item.quantity * 2), 0); // Convert to number of units (0.5kg steps)
    if (cart.length > 0) {
        cartBadge.textContent = cart.length;
        cartBadge.classList.add("active");
    } else {
        cartBadge.textContent = "0";
        cartBadge.classList.remove("active");
    }

    // Render items
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty-message">
                <i class="fa-solid fa-bag-shopping cart-empty-icon"></i>
                <p>Your bag is currently empty.</p>
                <button class="btn btn-primary" style="margin-top: 15px; padding: 10px 20px; font-size: 0.85rem;" onclick="toggleCart(false)">Browse Menu</button>
            </div>
        `;
        cartTotalElement.textContent = "₹0";
        checkoutBtn.style.opacity = "0.6";
        checkoutBtn.style.pointerEvents = "none";
        return;
    }

    checkoutBtn.style.opacity = "1";
    checkoutBtn.style.pointerEvents = "auto";

    let grandTotal = 0;

    cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        grandTotal += itemTotal;

        const cartItemEl = document.createElement("div");
        cartItemEl.className = "cart-item";
        cartItemEl.innerHTML = `
            <img src="${item.product.image}" alt="${item.product.title}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.product.title}</h4>
                <div class="cart-item-price">₹${itemTotal.toFixed(0)} <span style="font-size: 0.75rem; font-weight: normal; color: var(--text-muted);">(${item.quantity} ${item.product.unit})</span></div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="adjustQty(${item.product.id}, -0.5)"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-num">${item.quantity} ${item.product.unit}</span>
                    <button class="qty-btn" onclick="adjustQty(${item.product.id}, 0.5)"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeProduct(${item.product.id})" aria-label="Remove ${item.product.title}">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });

    cartTotalElement.textContent = `₹${grandTotal.toFixed(0)}`;
}

// Global functions for inline HTML calls
window.adjustQty = (id, delta) => {
    const item = cart.find(item => item.product.id === id);
    if (item) {
        updateQuantity(id, item.quantity + delta);
    }
};

window.removeProduct = (id) => {
    removeFromCart(id);
};

// Toggle Cart Sidebar
function toggleCart(open) {
    if (open) {
        cartDrawer.classList.add("open");
        cartOverlay.classList.add("open");
        document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
        cartDrawer.classList.remove("open");
        cartOverlay.classList.remove("open");
        document.body.style.overflow = "auto";
    }
}

// Animation on adding to cart
function triggerCartBadgeAnimation() {
    cartBadge.classList.add("shake");
    setTimeout(() => {
        cartBadge.classList.remove("shake");
    }, 400);
}

// Handle Order Checkout (generate WhatsApp link)
function checkoutCart() {
    if (cart.length === 0) return;

    let total = 0;
    let itemsText = "";

    cart.forEach((item, index) => {
        const itemTotal = item.product.price * item.quantity;
        total += itemTotal;
        itemsText += `${index + 1}. ${item.product.title} - ${item.quantity} ${item.product.unit} (₹${itemTotal.toFixed(0)})\n`;
    });

    const greeting = `*Shiv Shakti Sweets - New Order Request*\n`;
    const line = `----------------------------------------\n`;
    const detailsHeader = `*Order Details:*\n`;
    const totalText = `\n*Grand Total: ₹${total.toFixed(0)}*\n`;
    const promptDetails = `\n*Customer Details:*\n• *Name:* \n• *Phone:* \n• *Type:* (Pickup / Home Delivery)\n• *Delivery Address:* `;
    const closing = `\n\n_Note: Please fill in your details above and press send. We will confirm your order and share payment details shortly._`;

    const message = greeting + line + detailsHeader + itemsText + totalText + line + promptDetails + closing;
    const encodedMessage = encodeURIComponent(message);
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${SHOP_PHONE}?text=${encodedMessage}`, "_blank");
}

// Setup Event Listeners
function setupEventListeners() {
    // Open/Close Cart
    cartBtn.addEventListener("click", () => toggleCart(true));
    closeCart.addEventListener("click", () => toggleCart(false));
    cartOverlay.addEventListener("click", () => toggleCart(false));

    // Close preview overlay handler (for mobile preview drawer)
    previewOverlay.addEventListener("click", () => togglePreviewDrawer(false));

    // Checkout
    checkoutBtn.addEventListener("click", checkoutCart);

    // Mobile Menu Toggle
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        const icon = menuToggle.querySelector("i");
        if (navMenu.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars";
        }
    });

    // Close mobile menu when nav-link clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            const icon = menuToggle.querySelector("i");
            icon.className = "fa-solid fa-bars";
        });
    });

    // Scroll active link highlight & header shrink
    window.addEventListener("scroll", () => {
        // Header shrink
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Active link indicator
        let currentSection = "";
        const sections = document.querySelectorAll("section");
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // Category Filtering
    const filterButtons = categoryFilters.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.getAttribute("data-category");
            renderProducts();
        });
    });

    // Search Input
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });
}


