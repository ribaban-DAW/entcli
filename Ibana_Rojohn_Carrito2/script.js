
// Variables y referencias al DOM necesarias
const cartIcon = document.getElementById("cart-icon");
const cartDropdown = document.getElementById("cart-dropdown");
const cartCount = document.getElementById("cart-count");
const cartItemsList = document.getElementById("cart-items");
const productList = document.getElementById("product-list");

let cart = [];

// Cargar productos desde el JSON

const jsonString = `
[
 { "id": 1, "name": "Producto A", "price": 10 },
    { "id": 2, "name": "Producto BBB", "price": 15 },
    { "id": 3, "name": "Producto C", "price": 20 },
    { "id": 4, "name": "Producto D", "price": 12 },
    { "id": 5, "name": "Producto E", "price": 18 },
    { "id": 6, "name": "Producto F", "price": 25 },
    { "id": 7, "name": "Producto G", "price": 30 },
    { "id": 8, "name": "Producto H", "price": 22 },
    { "id": 9, "name": "Producto I", "price": 19 },
    { "id": 10, "name": "Producto J", "price": 35 },
    { "id": 11, "name": "Producto K", "price": 40 },
    { "id": 12, "name": "Producto L", "price": 50 },
    { "id": 13, "name": "Producto M", "price": 5 },
    { "id": 14, "name": "Producto N", "price": 28 },
    { "id": 15, "name": "Producto O", "price": 14 },
    { "id": 16, "name": "Producto P", "price": 23 },
    { "id": 17, "name": "Producto Q", "price": 16 },
    { "id": 18, "name": "Producto R", "price": 45 },
    { "id": 19, "name": "Producto S", "price": 37 },
    { "id": 20, "name": "Producto T", "price": 12 },
    { "id": 21, "name": "Producto U", "price": 24 },
    { "id": 22, "name": "Producto V", "price": 32 },
    { "id": 23, "name": "Producto W", "price": 29 },
    { "id": 24, "name": "Producto X", "price": 27 },
    { "id": 25, "name": "Producto Y", "price": 33 },
    { "id": 26, "name": "Producto Z", "price": 10 },
    { "id": 27, "name": "Producto AA", "price": 42 },
    { "id": 28, "name": "Producto BB", "price": 38 },
    { "id": 29, "name": "Producto CC", "price": 11 },
    { "id": 30, "name": "Producto DD", "price": 48 },
    { "id": 31, "name": "Producto EE", "price": 19 },
    { "id": 32, "name": "Producto FF", "price": 15 }
]
`;

const productos = JSON.parse(jsonString);

function updateCartCount() {
    cartCount.textContent = cart.reduce((accumulator, p) => accumulator + p.cantidad, 0);
}

function removeCartItem(cartItem) {
    const index = cart.findIndex((p) => p.id == cartItem.dataset.id);
    if (index > -1) {
        cart.splice(index, 1);
    }
    cartItem.parentNode.removeChild(cartItem);
    updateCartCount();
}

function fillCartItem(itemElement, producto, cantidad = 1) {
    itemElement.textContent = "";
    
    const nameElement = document.createElement("span");
    nameElement.textContent = `${producto.name}`;
    itemElement.appendChild(nameElement);

    const cantidadElement = document.createElement("span");
    cantidadElement.textContent = `x ${cantidad}`;
    itemElement.appendChild(cantidadElement);

    const priceElement = document.createElement("span");
    priceElement.textContent = `$${producto.price.toFixed(2)}`;
    itemElement.appendChild(priceElement);

    const deleteElement = document.createElement("button");
    deleteElement.textContent = "X";

    itemElement.appendChild(deleteElement);
}

function addCartItem(producto) {
    const index = cart.findIndex((p) => p.id === producto.id);
    if (index !== -1) {
        cart[index].cantidad++;
        // NOTA: Considero que asignar un id al producto en el carrito simplificaría el obtener el elemento
        // ya que solo habría que hacer un document.getElementById(`cartItem${producto.id}`);
        const itemElements = [...document.querySelectorAll("#cart-items > li[data-id]")];
        const itemElement = itemElements.filter(itemElement => itemElement.dataset.id == producto.id)[0];
        fillCartItem(itemElement, producto, cart[index].cantidad);
    } else {
        cart.push({...producto, cantidad: 1});
        const itemElement = document.createElement("li");
        itemElement.dataset.id = producto.id;
        itemElement.classList.add("producto-carrito");
        fillCartItem(itemElement, producto);
        cartItemsList.appendChild(itemElement);
    }

    updateCartCount();
}

function createProductElement(producto) {
    const productoElement = document.createElement("article");

    const productTitleElement = document.createElement("h3");
    productTitleElement.textContent = producto.name;
    productoElement.appendChild(productTitleElement);
    
    const productPriceElement = document.createElement("p");
    productPriceElement.textContent = `Precio: $${producto.price}`;
    productoElement.appendChild(productPriceElement);

    const addElement = document.createElement("button");
    addElement.textContent = "Añadir al Carrito";
    productoElement.appendChild(addElement);
    
    productoElement.classList.add("product-item");
    productoElement.dataset.id = producto.id;

    return productoElement;
}

function fillProductList(productos) {
    productos.forEach((producto) => {
        productList.appendChild(createProductElement(producto))
    })

}

cartIcon.addEventListener("click", (e) => {
    cartDropdown.style.display = cartDropdown.style.display === "" ? "block" : "";
})

document.body.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const buttonParent = e.target.parentNode;

        if (buttonParent.closest("#cart-items")) {
            removeCartItem(buttonParent);
        } else if (buttonParent.closest("#product-list")) {
            const currentProductIndex = buttonParent.dataset.id - 1;
            addCartItem(productos[currentProductIndex]);
        }
    }
})

fillProductList(productos);
