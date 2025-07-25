let headerElement = document.getElementById("navigation-bar");

let header = `
    <h1 class="logo"><a href="src/pages/landing-page/landing-page.html">OmVaibhava Store</a></h1>
    <nav>
        <ul class="pages">
            <li>Products</li>
            <a href="src/pages/about/about.html"><li>About</li></a>
        </ul>
    </nav>
    <div class="navbar-icons">
        <a href="src/pages/shopping-cart/shopping-cart.html">
            <div class="shopping-cart">
                <img draggable="false" src="assets/icons/shopping-cart-icon.svg" alt="shopping-cart-icon" loading="lazy">
                <div class="cart-items" id="cart-items">0</div>
            </div>
        </a>
        <!-- <img src="assets/icons/account-icon.svg" alt="account-icon"> -->
    </div>
`

function headerRenderer() {
    if (headerElement) {
        headerElement.innerHTML = header;
        // console.log("header inserted")
    }
}
headerRenderer();