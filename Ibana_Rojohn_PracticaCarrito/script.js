
const jsonString = `
[
    { "id": 1, "name": "Producto A", "price": 10 },
    { "id": 2, "name": "Producto BBB", "price": 15 },
    { "id": 3, "name": "Producto C", "price": 20 }
]
`;

const productos = JSON.parse(jsonString);
const cart = [];

function updateTotalPrice(cart) {
    const totalPriceElement = document.getElementById("total-price");
    const totalPrice = cart.reduce((accumulator, p) => accumulator + p.price * p.cantidad, 0);
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function fillItemCart(itemElement, producto, cantidad = 1) {
    itemElement.textContent = "";
    
    const nameElement = document.createElement("span");
    nameElement.textContent = `${producto.name}`;
    itemElement.appendChild(nameElement);

    const priceElement = document.createElement("span");
    priceElement.textContent = `$${producto.price}`;
    itemElement.appendChild(priceElement);

    const cantidadElement = document.createElement("span");
    cantidadElement.textContent = `x${cantidad}`;
    itemElement.appendChild(cantidadElement);

    const deleteElement = document.createElement("button");
    deleteElement.textContent = "Eliminar";
    deleteElement.addEventListener("click", (e) => {
        const cartItems = document.getElementById("cart-items");
        cartItems.removeChild(itemElement);
        const index = cart.findIndex((p) => p.id === producto.id);
        if (index > -1) {
            cart.splice(index, 1);
        }
        updateTotalPrice(cart);
    });

    itemElement.appendChild(deleteElement);
}

function addProductToCart(producto) {
    const cartItems = document.getElementById("cart-items");

    const index = cart.findIndex((p) => p.id === producto.id);
    if (index !== -1) {
        cart[index].cantidad++;
        const itemElement = document.getElementById(`cartItem${producto.id}`);
        fillItemCart(itemElement, producto, cart[index].cantidad);
    } else {
        cart.push({...producto, cantidad: 1});
        const itemElement = document.createElement("li");
        itemElement.id = `cartItem${producto.id}`;
        fillItemCart(itemElement, producto);
        cartItems.appendChild(itemElement);
    }
    updateTotalPrice(cart);
}

function createProductElement(producto) {
    const productoElement = document.createElement("article");

    const pElement = document.createElement("p");
    pElement.textContent = `${producto.name} - $${producto.price}`;
    const addElement = document.createElement("button");
    addElement.textContent = "Añadir al Carrito";
    addElement.addEventListener("click", (e) => {
        addProductToCart(producto);
    })

    productoElement.appendChild(pElement);
    productoElement.appendChild(addElement);

    return productoElement;
}

function fillProductList(productos) {
    const productList = document.getElementById("product-list");

    for (const producto of productos) {
        productList.appendChild(createProductElement(producto));
        
    }
}

fillProductList(productos);
updateTotalPrice(cart); // Para que salga "Total: $0.00" en lugar de "Total: 0"
