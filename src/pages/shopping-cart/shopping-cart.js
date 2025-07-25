let cartItems = document.getElementById("cart-items");
// cartTools will contain useful cart information/metrics, cart manupulation buttons, etc.
let cartTools = document.getElementById("cart-tools");
let cartToolsExtended = document.getElementById("cart-tools-extended");
// cartItemsContainer will be the place where render the cart items will be rendered.
let cartItemsContainer = document.getElementById("cart-items-container");

// This line either retrieves the contents of localStorage (if present) else assigns just an empty array.
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

// shoppingCartTemplate is an arrow function that renders all the content cards.
let shoppingCartTemplate = () => {
    if (shoppingCart.length !== 0) {
        return (cartItemsContainer.innerHTML = shoppingCart.map((item) => {
        let {id, quantity} = item;
        let itemCheck = cardContent.find((item)=> item.id === id) || [];
        let {title, price, image, alt} = itemCheck;
        return `
            <div class="cart-item-card" id="${id}">
                <div class="cart-item-card-details">
                    <h2>${title}, (₹${price} each)</h2>
                    <div class="price-quantity">
                        <h3>Price: ₹${price * quantity}</h3>
                        <div class="quantity-button">
                            <img class="cart-item-card-buttons btn-decrease" onclick="decreaseItemQuantity('${id}')" src="../../../assets/icons/subtract-icon.svg" alt="Decrease Quantity" draggable="false" loading="lazy">
                            <div class="quantity" id="quantity-${id}"> ${quantity} </div>
                            <img class="cart-item-card-buttons btn-increase" onclick="increaseItemQuantity('${id}')" src="../../../assets/icons/add-icon.svg" alt="Increase Quantity" draggable="false" loading="lazy">
                        </div>
                        <img class="cart-item-card-buttons remove-item-btn" onclick="removeCartItem('${id}')" src="../../../assets/icons/remove-icon.svg" alt="Remove item from cart" draggable="false" loading="lazy">
                    </div>
                </div>
                <img width="100%" height="100%" src="../../../${image}" alt="${alt} Image" draggable="false" loading="lazy">
            </div>
        `
        }).join(""));
    } else {
        cartItemsContainer.innerHTML = ``;
        cartTools.innerHTML = `
        <h1>Your Shopping Cart is empty.</h1>
        <p>To add items, please visit the <a href="../../../index.html"><button type="button" class="button-component redirect-button">Products</button></a> page.</p>
        `;
        cartToolsExtended.innerHTML = ``
    }
};
shoppingCartTemplate();

let totalPrice = () => {
    if (shoppingCart.length !== 0) {
        let price = shoppingCart.map((itm) => {
            let {quantity, id} = itm;
            let itemCheck = cardContent.find((x)=> x.id === id) || [];
            return (quantity * itemCheck.price);
        }).reduce((x,y) => x+y);
        cartTools.innerHTML = `
        <h2>Total Cart Value: ₹${price}<h2>
        `;
        cartToolsExtended.innerHTML = `
        <p>To add more items, please visit the <a href="../../../index.html"><button type="button" class="button-component redirect-button">Products</button></a> page.</p>
        <button onclick="completePurchase()" type="button" class="button-component complete-purchase-button">Complete purchase</button>
        <button onclick="clearShoppingCart()" type="button" class="button-component clear-cart-button">Clear Shopping Cart</button>
        `
    }
    else return;
};
totalPrice();

let decreaseItemQuantity = (idCapture) => {
    // itemFinder checks in the shoppingCart if that item exists. 
    let itemFinder = shoppingCart.find((itemCheck) => itemCheck.id === idCapture);
    
    if(itemFinder === undefined) return;
    else if (itemFinder.quantity === 0) { 
        return alert(`${itemFinder.id} not in cart`);
    } else {
        itemFinder.quantity -= 1;
    }
   
    // console.log(shoppingCart);
    updateItemQuantity(idCapture);

    shoppingCart = shoppingCart.filter((x) => x.quantity !== 0);

    
    // saves a key "shoppingCart" with the values of shoppingCart array. JSON.stringify converts the objects into an understandable format
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    
    // Rerendering the entire cart post cart filtering.
    shoppingCartTemplate();
};

let increaseItemQuantity = (idCapture) => {
    let itemFinder = shoppingCart.find((itemCheck) => itemCheck.id === idCapture);
    
    if (itemFinder == undefined) {
        shoppingCart.push({
            id: idCapture,
            quantity: 1
        });
    } else {
        itemFinder.quantity += 1
    }

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    
    // Rerendering the entire cart post cart filtering.
    shoppingCartTemplate();

    updateItemQuantity(idCapture)
};

let updateItemQuantity = (idCapture) => {
    let itemFinder = shoppingCart.find((itemCheck) => itemCheck.id === idCapture);
    // console.log(itemFinder.id);
    //dynamically updates the quantity of an item
    document.getElementById(`quantity-${idCapture}`).innerHTML = itemFinder.quantity;
    
    cartItemQuantity();
    totalPrice();
};

let removeCartItem = (idCapture) => {
    shoppingCart = shoppingCart.filter((item)=> item.id !== idCapture);
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    shoppingCartTemplate();
    totalPrice();
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    cartItemQuantity();
};

let clearShoppingCart = () => {
    shoppingCart = []
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    shoppingCartTemplate();
    cartItemQuantity();
};

let cartItemQuantity = () => {
    // here, (x = previous item) & (y = current item)
    cartItems.innerHTML = shoppingCart.map((item) => item.quantity).reduce((x,y) => x + y, 0);
    shoppingCartTemplate();
}
cartItemQuantity();

let completePurchase = () => {
    alert("Shopping Cart items purchased, thank you! 🙏");
    alert("By clicking OK, the shopping cart will be cleared.")
    clearShoppingCart();
}