/* =========================================
   PANIER
========================================= */

const cartContent =
    document.getElementById("cartContent");


function getCart() {

    return JSON.parse(
        localStorage.getItem("sole-cart")
    ) || [];

}


function saveCart(cart) {

    localStorage.setItem(
        "sole-cart",
        JSON.stringify(cart)
    );

}


/* =========================================
   AFFICHER LE PANIER
========================================= */

function renderCart() {

    const cart =
        getCart();


    const cartCount =
        document.getElementById("cartCount");


    const totalQuantity =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    cartCount.textContent =
        totalQuantity;


    /* PANIER VIDE */

    if (cart.length === 0) {

        cartContent.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h2>
                    Ton panier est vide.
                </h2>

                <p>
                    Découvre notre collection
                    et trouve ta prochaine paire.
                </p>

                <a href="index.html#collection"
                   class="hero-button">

                    Découvrir les chaussures
                    <span>→</span>

                </a>

            </div>

        `;

        return;

    }


    /* =========================================
       CALCUL TOTAL
    ========================================== */

    let subtotal = 0;


    cart.forEach(item => {

        subtotal +=
            item.price * item.quantity;

    });


    const shipping =
        subtotal >= 100 ? 0 : 6.90;


    const total =
        subtotal + shipping;


    /* =========================================
       HTML
    ========================================== */

    cartContent.innerHTML = `

        <div class="cart-layout">


            <div class="cart-items">

                ${cart.map((item, index) => `

                    <div class="cart-item">

                        <div class="cart-item-image">

                            <img
                                src="${item.image}"
                                alt="${item.name}"
                            >

                        </div>


                        <div class="cart-item-info">

                            <p>
                                ${item.brand}
                            </p>

                            <h3>
                                ${item.name}
                            </h3>

                            <span>
                                Pointure ${item.size}
                            </span>

                            <strong>
                                ${item.price} €
                            </strong>

                        </div>


                        <div class="cart-item-actions">


                            <div class="quantity">

                                <button
                                    onclick="changeQuantity(${index}, -1)">
                                    −
                                </button>

                                <span>
                                    ${item.quantity}
                                </span>

                                <button
                                    onclick="changeQuantity(${index}, 1)">
                                    +
                                </button>

                            </div>


                            <button
                                class="delete-button"
                                onclick="removeItem(${index})">

                                Supprimer

                            </button>

                        </div>

                    </div>

                `).join("")}

            </div>


            <aside class="cart-summary">

                <p class="section-label">
                    RÉCAPITULATIF
                </p>

                <h2>
                    Ton panier
                </h2>


                <div class="summary-line">

                    <span>
                        Sous-total
                    </span>

                    <strong>
                        ${subtotal.toFixed(2)} €
                    </strong>

                </div>


                <div class="summary-line">

                    <span>
                        Livraison
                    </span>

                    <strong>
                        ${shipping === 0
                            ? "Offerte"
                            : shipping.toFixed(2) + " €"}
                    </strong>

                </div>


                <div class="summary-total">

                    <span>
                        Total
                    </span>

                    <strong>
                        ${total.toFixed(2)} €
                    </strong>

                </div>


                <button
                    class="checkout-button"
                    onclick="checkout()">

                    Passer la commande
                    <span>→</span>

                </button>


                <button
                    class="clear-cart"
                    onclick="clearCart()">

                    Vider le panier

                </button>

            </aside>

        </div>

    `;

}


/* =========================================
   QUANTITÉ
========================================= */

function changeQuantity(index, amount) {

    const cart =
        getCart();


    cart[index].quantity += amount;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    saveCart(cart);

    renderCart();

}


/* =========================================
   SUPPRIMER
========================================= */

function removeItem(index) {

    const cart =
        getCart();


    cart.splice(index, 1);


    saveCart(cart);

    renderCart();

}


/* =========================================
   VIDER
========================================= */

function clearCart() {

    localStorage.removeItem(
        "sole-cart"
    );

    renderCart();

}


/* =========================================
   COMMANDE
========================================= */

function checkout() {

    alert(
        "Cette étape est actuellement une démonstration. Un système de paiement pourra être ajouté ensuite."
    );

}


/* =========================================
   INIT
========================================= */

renderCart();