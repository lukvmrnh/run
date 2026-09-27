/* =========================================
   PRODUITS
========================================= */

const products = [

    {
        id: "nike-pegasus-41",
        brand: "Nike",
        name: "Pegasus 41",
        price: 140,
        image: "images/nike-pegasus-41.jpg",
        category: "route",
        description:
            "Une chaussure polyvalente pensée pour les entraînements quotidiens sur route.",
        longDescription:
            "La Nike Pegasus 41 est conçue pour accompagner les coureurs au quotidien. Son amorti offre un bon équilibre entre confort, dynamisme et stabilité pour les sorties sur route."
    },

    {
        id: "nike-vomero-18",
        brand: "Nike",
        name: "Vomero 18",
        price: 150,
        image: "images/nike-vomero-18.jpg",
        category: "entrainement",
        description:
            "Une chaussure orientée confort pour les longues sorties.",
        longDescription:
            "La Vomero 18 privilégie le confort et l'amorti pour les coureurs qui recherchent une sensation douce lors des entraînements et des sorties longues."
    },

    {
        id: "nike-structure-25",
        brand: "Nike",
        name: "Structure 25",
        price: 130,
        image: "images/nike-structure-25.jpg",
        category: "route",
        description:
            "Une chaussure stable destinée aux entraînements sur route.",
        longDescription:
            "La Structure 25 associe confort et stabilité pour accompagner les coureurs lors des sorties régulières sur route."
    },

    {
        id: "nike-vaporfly-4",
        brand: "Nike",
        name: "Vaporfly 4",
        price: 260,
        image: "images/nike-vaporfly-4.jpg",
        category: "competition",
        description:
            "Une chaussure de compétition conçue pour la vitesse.",
        longDescription:
            "La Vaporfly est pensée pour les efforts rapides et les compétitions sur route. Elle privilégie le dynamisme et la légèreté."
    },


    {
        id: "adidas-adizero-boston-13",
        brand: "adidas",
        name: "Adizero Boston 13",
        price: 160,
        image: "images/adidas-adizero-boston-13.jpg",
        category: "route",
        description:
            "Une chaussure dynamique pour les entraînements rapides.",
        longDescription:
            "La Boston 13 combine dynamisme et polyvalence pour les entraînements sur route et les séances rapides."
    },

    {
        id: "adidas-supernova-rise-2",
        brand: "adidas",
        name: "Supernova Rise 2",
        price: 150,
        image: "images/adidas-supernova-rise-2.jpg",
        category: "entrainement",
        description:
            "Une chaussure confortable pour les entraînements quotidiens.",
        longDescription:
            "La Supernova Rise 2 est destinée aux sorties régulières et privilégie le confort et la polyvalence."
    },

    {
        id: "adidas-terrex-agravic-3",
        brand: "adidas",
        name: "Terrex Agravic 3",
        price: 150,
        image: "images/adidas-terrex-agravic-3.jpg",
        category: "trail",
        description:
            "Une chaussure pensée pour les chemins et terrains naturels.",
        longDescription:
            "La Terrex Agravic 3 est destinée au trail et aux sorties sur chemins, sentiers et terrains accidentés."
    },

    {
        id: "adidas-adizero-adios-pro-4",
        brand: "adidas",
        name: "Adizero Adios Pro 4",
        price: 250,
        image: "images/adidas-adizero-adios-pro-4.jpg",
        category: "competition",
        description:
            "Une chaussure haute performance pour la compétition.",
        longDescription:
            "L'Adios Pro 4 est orientée performance et vitesse pour les compétitions sur route."
    },


    {
        id: "asics-gel-nimbus-27",
        brand: "ASICS",
        name: "Gel-Nimbus 27",
        price: 200,
        image: "images/asics-gel-nimbus-27.jpg",
        category: "entrainement",
        description:
            "Un modèle confortable pour les longues distances.",
        longDescription:
            "La Gel-Nimbus 27 privilégie l'amorti et le confort pour les entraînements et les sorties longues sur route."
    },

    {
        id: "asics-gel-kayano-31",
        brand: "ASICS",
        name: "Gel-Kayano 31",
        price: 200,
        image: "images/asics-gel-kayano-31.jpg",
        category: "route",
        description:
            "Une chaussure de route orientée stabilité.",
        longDescription:
            "La Gel-Kayano 31 est conçue pour apporter un niveau élevé de confort et de stabilité lors des sorties sur route."
    },

    {
        id: "asics-novablast-5",
        brand: "ASICS",
        name: "Novablast 5",
        price: 150,
        image: "images/asics-novablast-5.jpg",
        category: "route",
        description:
            "Une chaussure dynamique pour les entraînements rapides.",
        longDescription:
            "La Novablast 5 offre une sensation dynamique et polyvalente adaptée aux entraînements sur route."
    },

    {
        id: "asics-trabuco-max-4",
        brand: "ASICS",
        name: "Trabuco Max 4",
        price: 170,
        image: "images/asics-trabuco-max-4.jpg",
        category: "trail",
        description:
            "Une chaussure adaptée aux longues sorties trail.",
        longDescription:
            "La Trabuco Max 4 est conçue pour les sentiers et les longues distances en terrain naturel."
    },


    {
        id: "new-balance-1080-v14",
        brand: "New Balance",
        name: "Fresh Foam X 1080 v14",
        price: 190,
        image: "images/new-balance-1080-v14.jpg",
        category: "entrainement",
        description:
            "Une chaussure confortable pour les entraînements quotidiens.",
        longDescription:
            "La Fresh Foam X 1080 v14 privilégie l'amorti et le confort pour les sorties quotidiennes et les longues distances."
    },

    {
        id: "new-balance-860-v14",
        brand: "New Balance",
        name: "Fresh Foam X 860 v14",
        price: 160,
        image: "images/new-balance-860-v14.jpg",
        category: "route",
        description:
            "Une chaussure stable destinée à la route.",
        longDescription:
            "La Fresh Foam X 860 v14 associe confort et stabilité pour les entraînements réguliers."
    },

    {
        id: "new-balance-fresh-foam-x-hierro-v9",
        brand: "New Balance",
        name: "Fresh Foam X Hierro v9",
        price: 150,
        image: "images/new-balance-fresh-foam-x-hierro-v9.jpg",
        category: "trail",
        description:
            "Une chaussure polyvalente pour le trail.",
        longDescription:
            "La Fresh Foam X Hierro v9 est destinée aux chemins et sentiers et privilégie le confort sur les terrains naturels."
    },

    {
        id: "new-balance-sc-trainer-v3",
        brand: "New Balance",
        name: "FuelCell SuperComp Trainer v3",
        price: 220,
        image: "images/new-balance-sc-trainer-v3.jpg",
        category: "competition",
        description:
            "Une chaussure dynamique destinée aux séances rapides.",
        longDescription:
            "La SuperComp Trainer v3 est pensée pour les coureurs recherchant une chaussure dynamique pour les séances rapides et les longues distances."
    },


    {
        id: "hoka-clifton-10",
        brand: "HOKA",
        name: "Clifton 10",
        price: 160,
        image: "images/hoka-clifton-10.jpg",
        category: "route",
        description:
            "Une chaussure polyvalente et confortable pour la route.",
        longDescription:
            "La Clifton 10 est conçue pour les entraînements quotidiens sur route avec une attention particulière portée au confort."
    },

    {
        id: "hoka-bondi-9",
        brand: "HOKA",
        name: "Bondi 9",
        price: 180,
        image: "images/hoka-bondi-9.jpg",
        category: "entrainement",
        description:
            "Un modèle fortement orienté confort et amorti.",
        longDescription:
            "La Bondi 9 privilégie le confort et l'amorti pour les sorties quotidiennes et les longues distances."
    },

    {
        id: "hoka-speedgoat-6",
        brand: "HOKA",
        name: "Speedgoat 6",
        price: 160,
        image: "images/hoka-speedgoat-6.jpg",
        category: "trail",
        description:
            "Une chaussure destinée aux terrains de trail.",
        longDescription:
            "La Speedgoat 6 est pensée pour les sentiers et les terrains techniques."
    },

    {
        id: "hoka-mach-x-2",
        brand: "HOKA",
        name: "Mach X 2",
        price: 190,
        image: "images/hoka-mach-x-2.jpg",
        category: "competition",
        description:
            "Une chaussure rapide et dynamique.",
        longDescription:
            "La Mach X 2 est orientée vitesse et dynamisme pour les séances rapides et les efforts soutenus."
    },


    {
        id: "brooks-ghost-17",
        brand: "Brooks",
        name: "Ghost 17",
        price: 150,
        image: "images/brooks-ghost-17.jpg",
        category: "route",
        description:
            "Une chaussure polyvalente pour courir au quotidien.",
        longDescription:
            "La Ghost 17 est destinée aux sorties régulières sur route et privilégie une sensation confortable."
    },

    {
        id: "brooks-adrenaline-gts-25",
        brand: "Brooks",
        name: "Adrenaline GTS 25",
        price: 150,
        image: "images/brooks-adrenaline-gts-25.jpg",
        category: "entrainement",
        description:
            "Une chaussure stable pour les entraînements.",
        longDescription:
            "L'Adrenaline GTS 25 est conçue pour offrir confort et stabilité pendant les sorties quotidiennes."
    },

    {
        id: "brooks-cascadia-19",
        brand: "Brooks",
        name: "Cascadia 19",
        price: 140,
        image: "images/brooks-cascadia-19.jpg",
        category: "trail",
        description:
            "Une chaussure conçue pour les sentiers.",
        longDescription:
            "La Cascadia 19 est pensée pour les terrains naturels et les sorties trail."
    },

    {
        id: "brooks-hyperion-elite-5",
        brand: "Brooks",
        name: "Hyperion Elite 5",
        price: 250,
        image: "images/brooks-hyperion-elite-5.jpg",
        category: "competition",
        description:
            "Une chaussure orientée vitesse et compétition.",
        longDescription:
            "La Hyperion Elite 5 est destinée aux coureurs recherchant un modèle rapide pour les compétitions sur route."
    },


    {
        id: "saucony-ride-18",
        brand: "Saucony",
        name: "Ride 18",
        price: 150,
        image: "images/saucony-ride-18.jpg",
        category: "route",
        description:
            "Une chaussure polyvalente pour les sorties quotidiennes.",
        longDescription:
            "La Ride 18 est destinée aux entraînements réguliers sur route avec un bon équilibre entre confort et dynamisme."
    },

    {
        id: "saucony-triumph-22",
        brand: "Saucony",
        name: "Triumph 22",
        price: 170,
        image: "images/saucony-triumph-22.jpg",
        category: "entrainement",
        description:
            "Une chaussure confortable pour les longues sorties.",
        longDescription:
            "La Triumph 22 privilégie le confort et l'amorti pour les longues distances."
    },

    {
        id: "saucony-peregrine-15",
        brand: "Saucony",
        name: "Peregrine 15",
        price: 150,
        image: "images/saucony-peregrine-15.jpg",
        category: "trail",
        description:
            "Une chaussure polyvalente destinée au trail.",
        longDescription:
            "La Peregrine 15 est conçue pour les sentiers et terrains naturels."
    },

    {
        id: "saucony-endorphin-speed-5",
        brand: "Saucony",
        name: "Endorphin Speed 5",
        price: 200,
        image: "images/saucony-endorphin-speed-5.jpg",
        category: "competition",
        description:
            "Une chaussure dynamique pour les entraînements rapides.",
        longDescription:
            "L'Endorphin Speed 5 est orientée dynamisme et vitesse pour les séances rapides et les compétitions."
    }

];


/* =========================================
   RÉCUPÉRER LE PRODUIT
========================================= */

const params =
    new URLSearchParams(window.location.search);

const productId =
    params.get("id");

const product =
    products.find(item => item.id === productId);


/* =========================================
   SI PRODUIT TROUVÉ
========================================= */

if (product) {

    document.title =
        `${product.brand} ${product.name} — RUN.`;


    document.getElementById("productImage").src =
        product.image;

    document.getElementById("productImage").alt =
        product.name;


    document.getElementById("productBrand")
        .textContent =
        product.brand;


    document.getElementById("productName")
        .textContent =
        product.name;


    document.getElementById("productPrice")
        .textContent =
        `${product.price} €`;


    document.getElementById("productDescription")
        .textContent =
        product.description;


    document.getElementById("longDescription")
        .textContent =
        product.longDescription;

}


/* =========================================
   POINTURES
========================================= */

const sizeButtons =
    document.querySelectorAll(".sizes button");

let selectedSize = null;


sizeButtons.forEach(button => {

    button.addEventListener("click", () => {

        sizeButtons.forEach(btn => {

            btn.classList.remove("selected");

        });


        button.classList.add("selected");

        selectedSize =
            button.textContent;

    });

});


/* =========================================
   AJOUT PANIER
========================================= */

const addToCart =
    document.getElementById("addToCart");


if (addToCart) {

    addToCart.addEventListener("click", () => {

        if (!selectedSize) {

            alert(
                "Choisis une pointure avant d'ajouter la paire au panier."
            );

            return;

        }


        let cart =
            JSON.parse(
                localStorage.getItem("sole-cart")
            ) || [];


        const existing =
            cart.find(item =>
                item.id === product.id &&
                item.size === selectedSize
            );


        if (existing) {

            existing.quantity++;

        } else {

            cart.push({

                id: product.id,
                brand: product.brand,
                name: product.name,
                price: product.price,
                image: product.image,
                size: selectedSize,
                quantity: 1

            });

        }


        localStorage.setItem(
            "sole-cart",
            JSON.stringify(cart)
        );


        updateCartCount();


        addToCart.innerHTML =
            "Ajouté au panier ✓";


        setTimeout(() => {

            addToCart.innerHTML =
                'Ajouter au panier <span>→</span>';

        }, 1500);

    });

}


/* =========================================
   COMPTEUR PANIER
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
            (sum, item) =>
                sum + item.quantity,
            0
        );


    cartCount.textContent =
        total;

}


updateCartCount();