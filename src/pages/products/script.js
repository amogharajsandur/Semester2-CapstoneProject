// itemCardContainer is a container where all the item cards are rendered.
let itemCardContainer = document.getElementById('item-card-container');
let cartItems = document.getElementById("cart-items");

// This line either retrieves the contents of localStorage (if present) else assigns just an empty array.
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

// cardTemplate is an arrow function that renders all the content cards.
let cardTemplate = () => {
    return (itemCardContainer.innerHTML = cardContent.map((item) => {
        // Destructuring is used, so to not keep writing as item.id, item.image, etc.
        let {id, image, alt, title, price} = item;
        let itemCheck = shoppingCart.find((item)=> item.id === id) || [];
        return `
                <div class="item-card" id="${id}">
                    <img width="100%" height="100%" src="${image}" alt="${alt} Image" draggable="false" loading="lazy">
                    <div class="item-card-details">
                        <h2>${title}</h2>
                        <div class="price-quantity">
                            <h3>₹ ${price}</h3>
                            <div class="quantity-button">
                                <img onclick="decreaseItemQuantity('${id}')" src="assets/icons/subtract-icon.svg" alt="Decrease Quantity" draggable="false" loading="lazy">
                                <div class="quantity" id="quantity-${id}"> ${itemCheck.quantity === undefined ? 0 : itemCheck.quantity} </div>
                                <img onclick="increaseItemQuantity('${id}')" src="assets/icons/add-icon.svg" alt="Increase Quantity" draggable="false" loading="lazy">
                            </div>
                        </div>
                    </div>
                </div>
        `}).join('')
    );
};
cardTemplate();

let decreaseItemQuantity = (idCapture) => {
    // itemFinder checks in the shoppingCart if that item exists. 
    let itemFinder = shoppingCart.find((itemCheck) => itemCheck.id === idCapture);
    
        /*
        if (itemFinder == undefined) {
            alert(`${idCapture} not in cart`);
        } else {
            if (itemFinder.quantity === 0) {
                shoppingCart.pop({
                    id: idCapture,
                    quantity: 0
                });
                alert(`${idCapture} not in cart`);
            } else {
                itemFinder.quantity -= 1
            }
        }
        */
    
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
    
    // console.log(shoppingCart);
    updateItemQuantity(idCapture)
};

let updateItemQuantity = (idCapture) => {
    let itemFinder = shoppingCart.find((itemCheck) => itemCheck.id === idCapture);
    // console.log(itemFinder.id);
    //dynamically updates the quantity of an item
    document.getElementById(`quantity-${idCapture}`).innerHTML = itemFinder.quantity;
    
    cartItemQuantity();
};

let cartItemQuantity = () => {
    // here, (x = previous item) & (y = current item)
    cartItems.innerHTML = shoppingCart.map((item) => item.quantity).reduce((x,y) => x + y, 0);
}
cartItemQuantity();