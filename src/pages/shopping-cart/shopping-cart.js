let cartItems = document.getElementById("cart-items");
// cartTools will contain useful cart information/metrics, cart manupulation buttons, etc.
let cartTools = document.getElementById("cart-tools");
// cartItemsContainer will be the place where render the cart items will be rendered.
let cartItemsContainer = document.getElementById("cart-items-container");

// This line either retrieves the contents of localStorage (if present) else assigns just an empty array.
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

// shoppingCartTemplate is an arrow function that renders all the content cards.
let shoppingCartTemplate = () => {
    if (shoppingCart.length !== 0) {

    } else {
        cartTools.innerHTML = `
        <h1>Your Shopping Cart is empty.</h1>
        <p>To add items, please visit the <a href="../../../index.html"><button type="button" class="redirect-button">Products</button></a> page.</p>
        `
    }
};
shoppingCartTemplate();

let cartItemQuantity = () => {
    // here, (x = previous item) & (y = current item)
    cartItems.innerHTML = shoppingCart.map((item) => item.quantity).reduce((x,y) => x + y, 0);
}
cartItemQuantity();