const container = document.querySelector(".container");
let cartArray = JSON.parse(localStorage.getItem("cart")) || [];

const drawCatalog = () => {
    for (const product of cartArray) {
        container.innerHTML += `
            <div class="product">
                <p>${product.title}</p>
                <p>${product.category}</p>
                <p>${product.price}</p>
                <button onclick="removeFromCart(${product.id})">
                    Remove
                </button>
            </div>
        `;
    }
}

drawCatalog();

const removeFromCart = productId => {
    const index = cartArray.findIndex(product => product.id === productId);
    
    if (index !== -1) {
      cartArray.splice(index, 1);
    }
    
    container.innerHTML = "";
    
    drawCatalog();
  }
  const deleteCarts = () => {
    cartArray = [];
    
    container.innerHTML = "";
    
    drawCatalog();
  }