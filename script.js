/* =========================================
   PRODUITS
========================================= */

const products = [

    /* =========================
       NIKE
    ========================== */

    {
        id: "nike-pegasus-41",
        brand: "Nike",
        name: "Pegasus 41",
        price: 140,
        image: "images/nike-pegasus-41.jpg",
        category: "route",
        type: "Entraînement"
    },

    {
        id: "nike-vomero-18",
        brand: "Nike",
        name: "Vomero 18",
        price: 150,
        image: "images/nike-vomero-18.jpg",
        category: "entrainement",
        type: "Confort"
    },

    {
        id: "nike-structure-25",
        brand: "Nike",
        name: "Structure 25",
        price: 130,
        image: "images/nike-structure-25.jpg",
        category: "route",
        type: "Stabilité"
    },

    {
        id: "nike-vaporfly-4",
        brand: "Nike",
        name: "Vaporfly 4",
        price: 260,
        image: "images/nike-vaporfly-4.jpg",
        category: "competition",
        type: "Performance"
    },


    /* =========================
       ADIDAS
    ========================== */

    {
        id: "adidas-adizero-boston-13",
        brand: "adidas",
        name: "Adizero Boston 13",
        price: 160,
        image: "images/adidas-adizero-boston-13.jpg",
        category: "route",
        type: "Performance"
    },

    {
        id: "adidas-supernova-rise-2",
        brand: "adidas",
        name: "Supernova Rise 2",
        price: 150,
        image: "images/adidas-supernova-rise-2.jpg",
        category: "entrainement",
        type: "Quotidien"
    },

    {
        id: "adidas-terrex-agravic-3",
        brand: "adidas",
        name: "Terrex Agravic 3",
        price: 150,
        image: "images/adidas-terrex-agravic-3.jpg",
        category: "trail",
        type: "Trail"
    },

    {
        id: "adidas-adizero-adios-pro-4",
        brand: "adidas",
        name: "Adizero Adios Pro 4",
        price: 250,
        image: "images/adidas-adizero-adios-pro-4.jpg",
        category: "competition",
        type: "Performance"
    },


    /* =========================
       ASICS
    ========================== */

    {
        id: "asics-gel-nimbus-27",
        brand: "ASICS",
        name: "Gel-Nimbus 27",
        price: 200,
        image: "images/asics-gel-nimbus-27.jpg",
        category: "entrainement",
        type: "Amorti"
    },

    {
        id: "asics-gel-kayano-31",
        brand: "ASICS",
        name: "Gel-Kayano 31",
        price: 200,
        image: "images/asics-gel-kayano-31.jpg",
        category: "route",
        type: "Stabilité"
    },

    {
        id: "asics-novablast-5",
        brand: "ASICS",
        name: "Novablast 5",
        price: 150,
        image: "images/asics-novablast-5.jpg",
        category: "route",
        type: "Dynamique"
    },

    {
        id: "asics-trabuco-max-4",
        brand: "ASICS",
        name: "Trabuco Max 4",
        price: 170,
        image: "images/asics-trabuco-max-4.jpg",
        category: "trail",
        type: "Trail"
    },


    /* =========================
       NEW BALANCE
    ========================== */

    {
        id: "new-balance-1080-v14",
        brand: "New Balance",
        name: "Fresh Foam X 1080 v14",
        price: 190,
        image: "images/new-balance-1080-v14.jpg",
        category: "entrainement",
        type: "Amorti"
    },

    {
        id: "new-balance-860-v14",
        brand: "New Balance",
        name: "Fresh Foam X 860 v14",
        price: 160,
        image: "images/new-balance-860-v14.jpg",
        category: "route",
        type: "Stabilité"
    },

    {
        id: "new-balance-fresh-foam-x-hierro-v9",
        brand: "New Balance",
        name: "Fresh Foam X Hierro v9",
        price: 150,
        image: "images/new-balance-fresh-foam-x-hierro-v9.jpg",
        category: "trail",
        type: "Trail"
    },

    {
        id: "new-balance-sc-trainer-v3",
        brand: "New Balance",
        name: "FuelCell SuperComp Trainer v3",
        price: 220,
        image: "images/new-balance-sc-trainer-v3.jpg",
        category: "competition",
        type: "Performance"
    },


    /* =========================
       HOKA
    ========================== */

    {
        id: "hoka-clifton-10",
        brand: "HOKA",
        name: "Clifton 10",
        price: 160,
        image: "images/hoka-clifton-10.jpg",
        category: "route",
        type: "Quotidien"
    },

    {
        id: "hoka-bondi-9",
        brand: "HOKA",
        name: "Bondi 9",
        price: 180,
        image: "images/hoka-bondi-9.jpg",
        category: "entrainement",
        type: "Amorti"
    },

    {
        id: "hoka-speedgoat-6",
        brand: "HOKA",
        name: "Speedgoat 6",
        price: 160,
        image: "images/hoka-speedgoat-6.jpg",
        category: "trail",
        type: "Trail"
    },

    {
        id: "hoka-mach-x-2",
        brand: "HOKA",
        name: "Mach X 2",
        price: 190,
        image: "images/hoka-mach-x-2.jpg",
        category: "competition",
        type: "Performance"
    },


    /* =========================
       BROOKS
    ========================== */

    {
        id: "brooks-ghost-17",
        brand: "Brooks",
        name: "Ghost 17",
        price: 150,
        image: "images/brooks-ghost-17.jpg",
        category: "route",
        type: "Quotidien"
    },

    {
        id: "brooks-adrenaline-gts-25",
        brand: "Brooks",
        name: "Adrenaline GTS 25",
        price: 150,
        image: "images/brooks-adrenaline-gts-25.jpg",
        category: "entrainement",
        type: "Stabilité"
    },

    {
        id: "brooks-cascadia-19",
        brand: "Brooks",
        name: "Cascadia 19",
        price: 140,
        image: "images/brooks-cascadia-19.jpg",
        category: "trail",
        type: "Trail"
    },

    {
        id: "brooks-hyperion-elite-5",
        brand: "Brooks",
        name: "Hyperion Elite 5",
        price: 250,
        image: "images/brooks-hyperion-elite-5.jpg",
        category: "competition",
        type: "Performance"
    },


    /* =========================
       SAUCONY
    ========================== */

    {
        id: "saucony-ride-18",
        brand: "Saucony",
        name: "Ride 18",
        price: 150,
        image: "images/saucony-ride-18.jpg",
        category: "route",
        type: "Quotidien"
    },

    {
        id: "saucony-triumph-22",
        brand: "Saucony",
        name: "Triumph 22",
        price: 170,
        image: "images/saucony-triumph-22.jpg",
        category: "entrainement",
        type: "Amorti"
    },

    {
        id: "saucony-peregrine-15",
        brand: "Saucony",
        name: "Peregrine 15",
        price: 150,
        image: "images/saucony-peregrine-15.jpg",
        category: "trail",
        type: "Trail"
    },

    {
        id: "saucony-endorphin-speed-5",
        brand: "Saucony",
        name: "Endorphin Speed 5",
        price: 200,
        image: "images/saucony-endorphin-speed-5.jpg",
        category: "competition",
        type: "Performance"
    }

];


/* =========================================
   VARIABLES
========================================= */

const productGrid =
    document.getElementById("productGrid");

const resultCount =
    document.getElementById("resultCount");

let currentBrand = "all";
let currentCategory = "all";


/* =========================================
   AFFICHER LES PRODUITS
========================================= */

function displayProducts() {

    if (!productGrid) return;

    productGrid.innerHTML = "";

    let filteredProducts = products.filter(product => {

        const brandMatch =
            currentBrand === "all" ||
            product.brand === currentBrand;

        const categoryMatch =
            currentCategory === "all" ||
            product.category === currentCategory;

        return brandMatch && categoryMatch;

    });


    filteredProducts.forEach(product => {

        const card = document.createElement("a");

        card.href =
            `produit.html?id=${product.id}`;

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="product-arrow">
                    →
                </span>

            </div>


            <div class="product-info">

                <div>

                    <p>
                        ${product.brand}
                    </p>

                    <h3>
                        ${product.name}
                    </h3>

                </div>

                <strong>
                    ${product.price} €
                </strong>

            </div>


            <span class="product-type">
                ${product.type}
            </span>

        `;


        productGrid.appendChild(card);

    });


    if (resultCount) {

        resultCount.textContent =
            `${filteredProducts.length} modèles`;

    }

}


/* =========================================
   FILTRE MARQUE
========================================= */

function filterBrand(brand) {

    currentBrand = brand;

    displayProducts();

    document
        .getElementById("collection")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   FILTRE CATÉGORIE
========================================= */

function filterCategory(category) {

    currentCategory = category;

    displayProducts();

    document
        .getElementById("collection")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   NEWSLETTER
========================================= */

function subscribe(event) {

    event.preventDefault();

    const email =
        document.getElementById("newsletterEmail").value;

    if (!email) return;

    alert(
        `Merci ! ${email} est maintenant inscrit.`
    );

}


/* =========================================
   PANIER — COMPTEUR
========================================= */

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");

    if (!cartCount) return;

    const cart =
        JSON.parse(
            localStorage.getItem("sole-cart")
        ) || [];

    const total =
        cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );

    cartCount.textContent = total;

}


/* =========================================
   INIT
========================================= */

displayProducts();

updateCartCount();