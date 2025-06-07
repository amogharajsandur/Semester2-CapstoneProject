// selecting item card
let itemCardContainer = document.getElementById('item-card-container');
// console.log(itemCardContainer);

// content array for card templates
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
        id: "greenchilli",
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

// defining arrow function (card template)
let cardTemplate = () => {
    return (itemCardContainer.innerHTML = cardContent.map((item) => {
        // destructuring so that to not right as item.id, item.image, etc.
        let {id, image, alt, title, price} = item;
        return `
                    <div class="item-card">
                        <img width="100%" height="100%" src="${image}" alt="${alt} Image">
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
                                    <img src="assets/icons/subtract-icon.svg" alt="Decrease Quantity">
                                    <div class="quantity">0 </div>
                                    <img src="assets/icons/add-icon.svg" alt="Increase Quantity">
                                </div>
                            </div>
                        </div>
                    </div>
                `}).join('')
            );
};

cardTemplate();