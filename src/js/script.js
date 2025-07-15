// itemCardContainer is a container where all the item cards are rendered.
let itemCardContainer = document.getElementById('item-card-container');
let cartItems = document.getElementById("cart-items");

// This line either retrieves the contents of localStorage (if present) else assigns just an empty array.
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

// cardContent is an array holding all the information about an item.
let cardContent = [
    {
        id: "apple",
        image: "assets/images/fruits/apple.jpeg",
        alt: "Apple",
        title: "Apple",
        price: 22.00
    },
    {
        id: "banana",
        image: "assets/images/fruits/banana.jpeg",
        alt: "Banana",
        title: "Banana",
        price: 12.00
    },
    {
        id: "dragonfruit",
        image: "assets/images/fruits/DragonFruit.jpeg",
        alt: "Dragon Fruit",
        title: "Dragon Fruit",
        price: 40.00
    },
    {
        id: "litchi",
        image: "assets/images/fruits/litchi.jpeg",
        alt: "Litchi",
        title: "Litchi",
        price: 30.00
    },
    {
        id: "mango",
        image: "assets/images/fruits/mango.jpeg",
        alt: "Mango",
        title: "Mango",
        price: 20.00
    },
    {
        id: "muskmelon",
        image: "assets/images/fruits/muskmelon.jpeg",
        alt: "Muskmelon",
        title: "Muskmelon",
        price: 28.00
    },
    {
        id: "orange",
        image: "assets/images/fruits/orange.jpeg",
        alt: "Orange",
        title: "Orange",
        price: 15.00
    },
    {
        id: "papaya",
        image: "assets/images/fruits/papaya.jpeg",
        alt: "Papaya",
        title: "Papaya",
        price: 18.00
    },
    {
        id: "strawberry",
        image: "assets/images/fruits/strawberry.jpeg",
        alt: "Strawberry",
        title: "Strawberry",
        price: 35.00
    },
    {
        id: "watermelon",
        image: "assets/images/fruits/watermelon.jpeg",
        alt: "Watermelon",
        title: "Watermelon",
        price: 25.00
    },
    {
        id: "carrot",
        image: "assets/images/vegetables/carrot.jpeg",
        alt: "Carrot",
        title: "Carrot",
        price: 10.00
    },
    {
        id: "cucumber",
        image: "assets/images/vegetables/cucumber.jpeg",
        alt: "Cucumber",
        title: "Cucumber",
        price: 8.00
    },
    {
        id: "green-chilli",
        image: "assets/images/vegetables/green-chilli.jpeg",
        alt: "Green Chilli",
        title: "Green Chilli",
        price: 15.00
    },
    {
        id: "onion",
        image: "assets/images/vegetables/onion.jpeg",
        alt: "Onion",
        title: "Onion",
        price: 12.00
    },
    {
        id: "peas",
        image: "assets/images/vegetables/peas.jpeg",
        alt: "Peas",
        title: "Peas",
        price: 10.00
    },
    {
        id: "potato",
        image: "assets/images/vegetables/potato.jpeg",
        alt: "Potato",
        title: "Potato",
        price: 10.00
    },
    {
        id: "radish",
        image: "assets/images/vegetables/radish.jpeg",
        alt: "Radish",
        title: "Radish",
        price: 12.00
    },
    {
        id: "pumpkin",
        image: "assets/images/vegetables/pumpkin.jpeg",
        alt: "Pumpkin",
        title: "Pumpkin",
        price: 20.00
    },
    {
        id: "tomato",
        image: "assets/images/vegetables/tomato.jpeg",
        alt: "Tomato",
        title: "Tomato",
        price: 15.00
    }
];

// cardTemplate is an arrow function that renders all the content cards.
let cardTemplate = () => {
    return (itemCardContainer.innerHTML = cardContent.map((item) => {
        // Destructuring is used, so to not keep writing as item.id, item.image, etc.
        let {id, image, alt, title, price} = item;
        let itemCheck = shoppingCart.find((item)=> item.id === id) || [];
        return `
                <div class="item-card" id="${id}">
                    <img width="100%" height="100%" src="${image}" alt="${alt} Image" draggable="false">
                    <div class="item-card-details">
                        <h3>${title}</h3>
                        <!-- <div class="item-title">
                            Banana
                            <div class="item-action">
                                <img src="assets/icons/like-icon.svg" alt="Like Item">
                                <img src="assets/icons/share-icon.svg" alt="Share Item">
                            </div>
                        </div> -->
                        <div class="price-quantity">
                            <h2>₹ ${price}</h2>
                            <div class="quantity-button">
                                <img onclick="decreaseItemQuantity('${id}')" src="assets/icons/subtract-icon.svg" alt="Decrease Quantity" draggable="false">
                                <div class="quantity" id="quantity-${id}"> ${itemCheck.quantity === undefined ? 0 : itemCheck.quantity} </div>
                                <img onclick="increaseItemQuantity('${id}')" src="assets/icons/add-icon.svg" alt="Increase Quantity" draggable="false">
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