const container = document.querySelector(".container");

const catalog = [
    { id: 3623, title: "Macbook Air", price: 500000, category: "Laptops" },
    { id: 123, title: "Lenovo Ideapad", price: 540000, category: "Laptops" },
    { id: 12754, title: "Iphone 13", price: 320000, category: "Smartphones" },
    { id: 2463, title: "Samsung Galaxy S23", price: 620000, category: "Smartphones" },
    { id: 456, title: "Airpods Max", price: 250000, category: "Headphones" },
    { id: 23534, title: "Samsung Galaxy Buds", price: 70000, category: "Headphones" },
];

const addToCart = productId => {
    let clickedProduct = catalog.find(item => item.id === productId);
    
    let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
    cartArray.push(clickedProduct);

    localStorage.setItem("cart", JSON.stringify(cartArray));
}

const drawCatalog = () => {
    for (const product of catalog) {
        container.innerHTML += `
            <div class="product">
                <p>${product.title}</p>
                <p>${product.category}</p>
                <p>${product.price}</p>
                <button onclick="addToCart(${product.id})">
                    Add to cart
                </button>
            </div>
        `;
    }
}

drawCatalog();