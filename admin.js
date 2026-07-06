// Default Products Catalog (identical to storefront for override references)
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

// Firebase Configuration & Initialization
const firebaseConfig = {
  apiKey: "AIzaSyCWPyF6pf5BudSaocXDfudXkgpKQSbggP8",
  authDomain: "shiv-shakti-sweets.firebaseapp.com",
  projectId: "shiv-shakti-sweets",
  storageBucket: "shiv-shakti-sweets.firebasestorage.app",
  messagingSenderId: "867508511153",
  appId: "1:867508511153:web:a1cc5f488ecd60f0f71d90",
  measurementId: "G-H71F01EC35"
};

// Initialize Firebase if loaded
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    window.db = firebase.firestore();
}

// Admin State
let customSweets = [];
let defaultOverrides = {};
let editingProductId = null;
let sweetImageBase64 = "";

// Initialize Admin Portal
document.addEventListener("DOMContentLoaded", () => {
    loadCustomSweets();
    loadDefaultOverrides();
    setupAdminListeners();
    loadFirebaseData(); // Load latest menu catalog from Cloud Firestore
});

// Load custom sweets and overrides from Firebase Firestore
function loadFirebaseData() {
    if (typeof window.db === 'undefined') return;
    
    window.db.collection("settings").doc("menu").get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            let updated = false;
            
            if (data.customSweets && JSON.stringify(data.customSweets) !== JSON.stringify(customSweets)) {
                customSweets = data.customSweets;
                localStorage.setItem("shiv_shakti_custom_sweets", JSON.stringify(customSweets));
                updated = true;
            }
            
            if (data.defaultOverrides && JSON.stringify(data.defaultOverrides) !== JSON.stringify(defaultOverrides)) {
                defaultOverrides = data.defaultOverrides;
                localStorage.setItem("shiv_shakti_default_overrides", JSON.stringify(defaultOverrides));
                updated = true;
            }
            
            const savedOrder = localStorage.getItem("shiv_shakti_menu_order");
            if (data.menuOrder && JSON.stringify(data.menuOrder) !== savedOrder) {
                localStorage.setItem("shiv_shakti_menu_order", JSON.stringify(data.menuOrder));
                updated = true;
            }
            
            if (updated) {
                renderAdminSweetsList();
            }
        }
    }).catch((error) => {
        console.error("Error loading menu from Firestore:", error);
    });
}

// Save all menu customizations back to Firebase Firestore
function saveFirebaseData() {
    if (typeof window.db === 'undefined') return;
    
    const savedOrder = localStorage.getItem("shiv_shakti_menu_order");
    const order = savedOrder ? JSON.parse(savedOrder) : [];
    
    // Disable submit buttons to prevent double-saving or edits during syncing
    const saveBtn = document.getElementById("save-sweet-btn");
    let originalText = "";
    if (saveBtn) {
        saveBtn.disabled = true;
        originalText = saveBtn.innerHTML;
        saveBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin" style="margin-right: 5px;"></i> Syncing to Cloud...`;
    }
    
    window.db.collection("settings").doc("menu").set({
        customSweets: customSweets,
        defaultOverrides: defaultOverrides,
        menuOrder: order
    }).then(() => {
        console.log("Menu successfully synced to Cloud Database!");
        if (saveBtn) {
            saveBtn.disabled = false;
            saveBtn.innerHTML = originalText;
        }
    }).catch((error) => {
        console.error("Error syncing to Cloud Database:", error);
        alert("Error syncing to Cloud Database: " + error.message + "\n\nThis usually happens if your total image payload size exceeds Firestore's 1MB limit. Please try clicking 'Reset Menu to Default' to clear old large images, then re-upload them using the new compressed uploader.");
        if (saveBtn) {
            saveBtn.disabled = false;
            saveBtn.innerHTML = originalText;
        }
    });
}

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

// Save custom sweets to Local Storage and sync to Cloud
function saveCustomSweets() {
    localStorage.setItem("shiv_shakti_custom_sweets", JSON.stringify(customSweets));
    saveFirebaseData();
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

// Save default overrides to Local Storage and sync to Cloud
function saveDefaultOverrides() {
    localStorage.setItem("shiv_shakti_default_overrides", JSON.stringify(defaultOverrides));
    saveFirebaseData();
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

// Merge default products and overrides, filtering out hidden items if requested, sorted by menu order
function getAllProducts(includeHidden = false) {
    const mergedDefaults = PRODUCTS.map(product => {
        if (defaultOverrides[product.id]) {
            return { ...product, ...defaultOverrides[product.id] };
        }
        return product;
    });
    
    const filteredDefaults = includeHidden ? mergedDefaults : mergedDefaults.filter(p => !p.hidden);
    const all = [...filteredDefaults, ...customSweets];
    const order = getMenuOrder(all.map(p => p.id));
    
    return all.sort((a, b) => {
        const indexA = order.indexOf(a.id);
        const indexB = order.indexOf(b.id);
        return indexA - indexB;
    });
}

// Set up Owner Portal functionality
function setupAdminListeners() {
    const loginSubmit = document.getElementById("admin-login-submit");
    const passwordInput = document.getElementById("admin-password");
    const cancelEditBtn = document.getElementById("cancel-edit-btn");
    const resetMenuBtn = document.getElementById("reset-menu-btn");
    
    // Submit Password
    if (loginSubmit) {
        loginSubmit.addEventListener("click", verifyAdminPassword);
    }
    if (passwordInput) {
        passwordInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") verifyAdminPassword();
        });
        passwordInput.focus();
    }

    // Cancel Edit Button
    if (cancelEditBtn) {
        cancelEditBtn.addEventListener("click", cancelEditMode);
    }

    // Reset Menu Button
    if (resetMenuBtn) {
        resetMenuBtn.addEventListener("click", resetMenuToFactoryDefault);
    }

    // Tab buttons switching
    const tabBtns = document.querySelectorAll(".admin-tab-btn");
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const tabId = btn.getAttribute("data-tab");
            document.getElementById("tab-add-sweet").style.display = tabId === "add-sweet" ? "block" : "none";
            document.getElementById("tab-manage-sweets").style.display = tabId === "manage-sweets" ? "block" : "none";
            document.getElementById("tab-manage-reviews").style.display = tabId === "manage-reviews" ? "block" : "none";
            
            if (tabId === "manage-sweets") {
                renderAdminSweetsList();
            } else if (tabId === "manage-reviews") {
                loadAdminReviews();
            }
        });
    });

// Compress image to fit within database storage limits (Max 500px, JPEG quality 0.7) with error handling
function compressImage(file, callback, errorCallback) {
    const reader = new FileReader();
    reader.onerror = () => {
        if (errorCallback) errorCallback();
    };
    reader.onload = (event) => {
        const img = new Image();
        img.onerror = () => {
            if (errorCallback) errorCallback();
        };
        img.src = event.target.result;
        img.onload = () => {
            try {
                const canvas = document.createElement("canvas");
                const MAX_WIDTH = 500;
                const MAX_HEIGHT = 500;
                let width = img.width;
                let height = img.height;
                
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                
                canvas.width = width;
                canvas.height = height;
                
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);
                
                const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);
                callback(compressedBase64);
            } catch (e) {
                if (errorCallback) errorCallback(e);
            }
        };
    };
    reader.readAsDataURL(file);
}

    // Handle Image Upload File Selection with Compression and Error Handling
    const fileInput = document.getElementById("sweet-image");
    const fileNameDisplay = document.getElementById("file-name-display");
    if (fileInput) {
        fileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                fileNameDisplay.textContent = "Compressing image...";
                compressImage(file, (compressedBase64) => {
                    sweetImageBase64 = compressedBase64;
                    fileNameDisplay.textContent = `${file.name} (Ready)`;
                }, (err) => {
                    console.error("Compression error:", err);
                    alert("Unable to upload this file type. Please make sure you are selecting a standard image file (JPG, PNG, or WebP) instead of iPhone HEIC/RAW files.");
                    fileNameDisplay.textContent = "Upload failed. Use JPG/PNG.";
                    fileInput.value = ""; // Clear file
                    sweetImageBase64 = "";
                });
            } else {
                fileNameDisplay.textContent = editingProductId ? "Using current image..." : "No file chosen";
                sweetImageBase64 = "";
            }
        });
    }

    // Form Submission: Save or Update Sweet
    const addSweetForm = document.getElementById("add-sweet-form");
    if (addSweetForm) {
        addSweetForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (editingProductId !== null) {
                updateExistingSweet();
            } else {
                saveNewCustomSweet();
            }
        });
    }
}

// Verify Owner Portal Password
function verifyAdminPassword() {
    const passwordInput = document.getElementById("admin-password");
    const errorMsg = document.getElementById("login-error-msg");
    const loginView = document.getElementById("admin-login-view");
    const dashboardView = document.getElementById("admin-dashboard-view");

    if (passwordInput.value === "shivshakti84") {
        loginView.style.display = "none";
        dashboardView.style.display = "grid"; // Show grid layout
        errorMsg.textContent = "";
        
        // Load default tab
        document.getElementById("tab-add-btn").click();
    } else {
        errorMsg.textContent = "Incorrect password. Please try again.";
        passwordInput.select();
    }
}

// Get fallback category image
function getDefaultCategoryImg(category) {
    if (category === "ladoo") return "assets/motichoor.jpg";
    if (category === "bengali") return "assets/gulab-jamun.jpg";
    if (category === "snacks") return "assets/kaju-katli.jpg";
    return "assets/kaju-katli.jpg";
}

// Save sweet form data (Add Mode)
function saveNewCustomSweet() {
    const nameInput = document.getElementById("sweet-name");
    const categorySelect = document.getElementById("sweet-category");
    const priceInput = document.getElementById("sweet-price");
    const unitSelect = document.getElementById("sweet-unit");
    const badgeInput = document.getElementById("sweet-badge");
    const descInput = document.getElementById("sweet-desc");
    
    const newSweet = {
        id: Date.now(), // Generate a unique numeric ID
        title: nameInput.value,
        category: categorySelect.value,
        price: parseFloat(priceInput.value),
        unit: unitSelect.value,
        description: descInput.value,
        image: sweetImageBase64 || getDefaultCategoryImg(categorySelect.value),
        badge: badgeInput.value,
        rating: 4.8,
        reviews: 1,
        ingredients: ["Fresh Milk", "Premium Sugar", "Desi Ghee"],
        dietary: ["100% Vegetarian"],
        shelfLife: "7 Days (Keep refrigerated)",
        nutrition: { calories: "320 kcal", fat: "12g", sugar: "35g" },
        isCustom: true
    };

    customSweets.push(newSweet);
    saveCustomSweets();
    
    // Reset Form
    document.getElementById("add-sweet-form").reset();
    document.getElementById("file-name-display").textContent = "No file chosen";
    sweetImageBase64 = "";

    // Go to list tab to see it
    document.getElementById("tab-manage-btn").click();
    alert(`"${newSweet.title}" has been successfully added to the menu storefront!`);
}

// Start editing sweet: populate form fields and switch tabs
window.startEditSweet = (productId) => {
    editingProductId = productId;
    const allProducts = getAllProducts(true); // Include hidden items in case they edit them
    const sweet = allProducts.find(s => s.id === productId);
    if (!sweet) return;

    // Fill form inputs
    document.getElementById("sweet-name").value = sweet.title;
    document.getElementById("sweet-category").value = sweet.category;
    document.getElementById("sweet-price").value = sweet.price;
    document.getElementById("sweet-unit").value = sweet.unit || "kg";
    document.getElementById("sweet-badge").value = sweet.badge || "";
    document.getElementById("sweet-desc").value = sweet.description;
    document.getElementById("file-name-display").textContent = "Using current image...";
    sweetImageBase64 = ""; // Reset base64 until file upload occurs

    // Update UI headers
    document.getElementById("form-mode-title").innerHTML = `<i class="fa-solid fa-pencil" style="color: var(--primary);"></i> Edit Sweet: ${sweet.title}`;
    const saveBtn = document.getElementById("save-sweet-btn");
    saveBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Update Sweet`;
    document.getElementById("cancel-edit-btn").style.display = "block";

    // Switch to Form Tab
    document.getElementById("tab-add-btn").click();
};

// Cancel Edit Mode and restore Form back to Add mode
function cancelEditMode() {
    editingProductId = null;
    sweetImageBase64 = "";
    
    // Reset form elements
    const form = document.getElementById("add-sweet-form");
    if (form) form.reset();
    
    const fileNameDisplay = document.getElementById("file-name-display");
    if (fileNameDisplay) fileNameDisplay.textContent = "No file chosen";

    // Restore buttons and title
    const modeTitle = document.getElementById("form-mode-title");
    if (modeTitle) modeTitle.innerHTML = `<i class="fa-solid fa-circle-plus" style="color: var(--primary);"></i> Add New Sweet`;
    
    const saveBtn = document.getElementById("save-sweet-btn");
    if (saveBtn) saveBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Save Sweet to Menu`;
    
    const cancelBtn = document.getElementById("cancel-edit-btn");
    if (cancelBtn) cancelBtn.style.display = "none";
}

// Update existing sweet (Save changes from Edit Mode)
function updateExistingSweet() {
    if (editingProductId === null) return;

    const nameInput = document.getElementById("sweet-name").value;
    const categorySelect = document.getElementById("sweet-category").value;
    const priceInput = parseFloat(document.getElementById("sweet-price").value);
    const unitInput = document.getElementById("sweet-unit").value;
    const badgeInput = document.getElementById("sweet-badge").value;
    const descInput = document.getElementById("sweet-desc").value;

    const isCustom = editingProductId >= 1000;

    if (isCustom) {
        // Edit Custom sweet
        const sweetIndex = customSweets.findIndex(s => s.id === editingProductId);
        if (sweetIndex !== -1) {
            customSweets[sweetIndex].title = nameInput;
            customSweets[sweetIndex].category = categorySelect;
            customSweets[sweetIndex].price = priceInput;
            customSweets[sweetIndex].unit = unitInput;
            customSweets[sweetIndex].badge = badgeInput;
            customSweets[sweetIndex].description = descInput;
            if (sweetImageBase64) {
                customSweets[sweetIndex].image = sweetImageBase64;
            }
            saveCustomSweets();
        }
    } else {
        // Edit Default sweet (Save changes to defaultOverrides)
        if (!defaultOverrides[editingProductId]) {
            defaultOverrides[editingProductId] = {};
        }
        
        defaultOverrides[editingProductId].title = nameInput;
        defaultOverrides[editingProductId].category = categorySelect;
        defaultOverrides[editingProductId].price = priceInput;
        defaultOverrides[editingProductId].unit = unitInput;
        defaultOverrides[editingProductId].badge = badgeInput;
        defaultOverrides[editingProductId].description = descInput;
        if (sweetImageBase64) {
            defaultOverrides[editingProductId].image = sweetImageBase64;
        }
        saveDefaultOverrides();
    }

    cancelEditMode();
    alert("Sweet item has been successfully updated!");
    
    // Switch back to management tab
    document.getElementById("tab-manage-btn").click();
}

// Delete custom sweet or toggle default sweet hidden status
window.handleSweetDeleteToggle = (sweetId, isHidden) => {
    const isDefault = sweetId < 1000;
    
    if (isDefault) {
        if (isHidden) {
            // Unhide: remove hidden status from overrides
            if (defaultOverrides[sweetId]) {
                delete defaultOverrides[sweetId].hidden;
                // Clean override container if empty
                if (Object.keys(defaultOverrides[sweetId]).length === 0) {
                    delete defaultOverrides[sweetId];
                }
            }
            saveDefaultOverrides();
        } else {
            // Hide: set hidden flag in overrides
            if (!defaultOverrides[sweetId]) {
                defaultOverrides[sweetId] = {};
            }
            defaultOverrides[sweetId].hidden = true;
            saveDefaultOverrides();
        }
    } else {
        // Custom sweet: Permanent delete
        const confirmDelete = confirm("Are you sure you want to permanently delete this custom sweet item?");
        if (!confirmDelete) return;

        customSweets = customSweets.filter(sweet => sweet.id !== sweetId);
        saveCustomSweets();
    }

    renderAdminSweetsList();
};

// Reset all customizations and restore default hardcoded menu list
function resetMenuToFactoryDefault() {
    const confirmReset = confirm("WARNING: This will permanently delete all custom sweets and restore original prices and default items. Are you sure you want to proceed?");
    if (!confirmReset) return;

    customSweets = [];
    defaultOverrides = {};
    localStorage.removeItem("shiv_shakti_menu_order"); // Clear custom ordering
    
    saveCustomSweets();
    saveDefaultOverrides();
    // saveFirebaseData is implicitly called by saveCustomSweets and saveDefaultOverrides

    cancelEditMode();
    renderAdminSweetsList();
    alert("Storefront catalog reset successfully to factory defaults!");
}

// Move sweet up or down in the catalog sequence order
window.moveSweet = (sweetId, direction) => {
    const allProducts = getAllProducts(true);
    const order = getMenuOrder(allProducts.map(p => p.id));
    
    const index = order.indexOf(sweetId);
    if (index === -1) return;
    
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= order.length) return;
    
    // Swap IDs in the order array
    const temp = order[index];
    order[index] = order[targetIndex];
    order[targetIndex] = temp;
    
    localStorage.setItem("shiv_shakti_menu_order", JSON.stringify(order));
    saveFirebaseData(); // Sync updated ordering sequence to Cloud Firestore
    
    renderAdminSweetsList();
};

// Render the list of custom/default sweets in "Manage Menu" tab
function renderAdminSweetsList() {
    const listContainer = document.getElementById("admin-sweets-list");
    if (!listContainer) return;
    
    listContainer.innerHTML = "";
    const allProducts = getAllProducts(true); // Include hidden items to let the owner restore them

    allProducts.forEach(sweet => {
        const isDefault = sweet.id < 1000;
        const badgeClass = isDefault ? "default" : "custom";
        const badgeText = isDefault ? "Default" : "Custom";
        const isHidden = sweet.hidden;
        
        const item = document.createElement("div");
        item.className = "admin-sweet-list-item";
        if (isHidden) {
            item.style.opacity = "0.6";
        }
        
        const isFirst = allProducts.indexOf(sweet) === 0;
        const isLast = allProducts.indexOf(sweet) === allProducts.length - 1;
        
        item.innerHTML = `
            <div class="admin-sweet-info">
                <img src="${sweet.image}" alt="${sweet.title}" class="admin-sweet-thumbnail">
                <div class="admin-sweet-details">
                    <h5>${sweet.title} <span class="admin-sweet-badge ${badgeClass}">${badgeText}</span> ${isHidden ? '<span class="admin-sweet-badge" style="background:#FFCDD2; color:var(--accent-red);">Hidden</span>' : ''}</h5>
                    <span>₹${sweet.price} / ${sweet.unit}</span>
                </div>
            </div>
            <div class="admin-sweet-actions">
                <button class="admin-sweet-move-btn" onclick="moveSweet(${sweet.id}, -1)" ${isFirst ? 'disabled' : ''} aria-label="Move Up">
                    <i class="fa-solid fa-arrow-up" style="font-size: 0.8rem;"></i>
                </button>
                <button class="admin-sweet-move-btn" onclick="moveSweet(${sweet.id}, 1)" ${isLast ? 'disabled' : ''} aria-label="Move Down">
                    <i class="fa-solid fa-arrow-down" style="font-size: 0.8rem;"></i>
                </button>
                ${!isHidden ? `
                    <button class="admin-sweet-edit-btn" onclick="startEditSweet(${sweet.id})" aria-label="Edit ${sweet.title}">
                        <i class="fa-solid fa-pencil" style="font-size: 0.85rem;"></i>
                    </button>
                ` : ''}
                <button class="admin-sweet-delete-btn" onclick="handleSweetDeleteToggle(${sweet.id}, ${isHidden})" style="${isHidden ? 'background:#E6F4EA; color:#137333; border-color:#CEEAD6;' : ''}" aria-label="${isHidden ? 'Unhide' : 'Hide'} ${sweet.title}">
                    <i class="fa-solid ${isHidden ? 'fa-eye' : 'fa-trash-can'}"></i>
                </button>
            </div>
        `;
        listContainer.appendChild(item);
    });
}

// Fetch reviews list, update stats headers, and render table rows
function loadAdminReviews() {
    if (typeof window.db === 'undefined') return;
    
    window.db.collection("feedback")
        .orderBy("timestamp", "desc")
        .onSnapshot((querySnapshot) => {
            const tbody = document.getElementById("admin-reviews-list-tbody");
            if (!tbody) return;
            
            let total = 0;
            let approved = 0;
            let pending = 0;
            
            if (querySnapshot.empty) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="6" style="padding: 30px; text-align: center; color: var(--text-muted);">
                            <i class="fa-regular fa-comments" style="font-size: 1.8rem; margin-bottom: 8px; display: block; color: var(--primary);"></i>
                            No reviews found.
                        </td>
                    </tr>
                `;
                document.getElementById("reviews-count-total").textContent = "0";
                document.getElementById("reviews-count-approved").textContent = "0";
                document.getElementById("reviews-count-pending").textContent = "0";
                return;
            }
            
            tbody.innerHTML = "";
            querySnapshot.forEach((doc) => {
                const review = doc.data();
                const docId = doc.id;
                
                total++;
                if (review.approved) approved++;
                else pending++;
                
                const dateStr = new Date(review.timestamp).toLocaleDateString("en-IN", {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });
                
                // Stars HTML
                let starsHtml = "";
                for (let i = 1; i <= 5; i++) {
                    if (i <= review.rating) {
                        starsHtml += `<i class="fa-solid fa-star" style="color: #fbbf24; margin-right: 2px;"></i>`;
                    } else {
                        starsHtml += `<i class="fa-regular fa-star" style="color: #ddd; margin-right: 2px;"></i>`;
                    }
                }
                
                const statusBadge = review.approved 
                    ? `<span class="status-badge approved">Approved</span>`
                    : `<span class="status-badge pending">Pending</span>`;
                    
                const actionBtn = review.approved
                    ? `<button class="admin-action-btn reject-btn" onclick="toggleReviewApproval('${docId}', true)"><i class="fa-solid fa-ban"></i> Reject</button>`
                    : `<button class="admin-action-btn approve-btn" onclick="toggleReviewApproval('${docId}', false)"><i class="fa-solid fa-check"></i> Approve</button>`;
                
                const row = document.createElement("tr");
                row.style.borderBottom = "1px solid var(--border-color)";
                row.innerHTML = `
                    <td style="padding: 12px 15px; color: var(--text-muted); font-size: 0.8rem; white-space: nowrap;">${dateStr}</td>
                    <td style="padding: 12px 15px; font-weight: 600; color: var(--text-dark);">${review.name}</td>
                    <td style="padding: 12px 15px; white-space: nowrap;">${starsHtml}</td>
                    <td style="padding: 12px 15px; max-width: 300px; word-wrap: break-word; color: var(--text-muted);">${review.comment}</td>
                    <td style="padding: 12px 15px; text-align: center;">${statusBadge}</td>
                    <td style="padding: 12px 15px; text-align: right; white-space: nowrap; display: flex; gap: 6px; justify-content: flex-end; align-items: center; min-height: 48px;">
                        ${actionBtn}
                        <button class="admin-action-btn delete-btn" onclick="deleteReview('${docId}')" aria-label="Delete Review"><i class="fa-solid fa-trash-can"></i></button>
                    </td>
                `;
                tbody.appendChild(row);
            });
            
            document.getElementById("reviews-count-total").textContent = total;
            document.getElementById("reviews-count-approved").textContent = approved;
            document.getElementById("reviews-count-pending").textContent = pending;
        }, (error) => {
            console.error("Error loading reviews for admin:", error);
        });
}

// Toggle review approval status
window.toggleReviewApproval = (docId, currentStatus) => {
    if (typeof window.db === 'undefined') return;
    
    window.db.collection("feedback").doc(docId).update({
        approved: !currentStatus
    }).then(() => {
        console.log(`Review ${docId} approval status updated to ${!currentStatus}`);
    }).catch((error) => {
        console.error("Error updating review status:", error);
        alert("Error updating review status: " + error.message);
    });
};

// Delete review from database
window.deleteReview = (docId) => {
    if (typeof window.db === 'undefined') return;
    
    if (confirm("Are you sure you want to permanently delete this customer review? This action cannot be undone.")) {
        window.db.collection("feedback").doc(docId).delete().then(() => {
            console.log(`Review ${docId} deleted successfully.`);
        }).catch((error) => {
            console.error("Error deleting review:", error);
            alert("Error deleting review: " + error.message);
        });
    }
};
