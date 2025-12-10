const catalogo = {
    tienda: "Super Web Store",
    productos: [
    { id: 1, nombre: "Auriculares Bluetooth X200", descripcion: "Auriculares inalámbricos con cancelación parcial de ruido.", precio: 49.99, disponible: true },
    { id: 2, nombre: "Teclado mecánico TKL", descripcion: "Compacto, switches táctiles y retroiluminación RGB.", precio: 79.5, disponible: true },
    { id: 3, nombre: "Ratón ergonómico Pro", descripcion: "Diseño vertical para reducir tensión en la muñeca.", precio: 39.0, disponible: false },
    { id: 4, nombre: "Monitor 24\" 1080p", descripcion: "120Hz, panel IPS y soporte ajustable.", precio: 129.95, disponible: true },
    { id: 5, nombre: "Cable USB-C 2m", descripcion: "Carga rápida y transferencia de datos.", precio: 9.99, disponible: true }
    ],
    ventasMensuales: [120, 150, 95, 180, 160, 200]
};

function getSortButton(state) {
    const sortButtonElement = document.createElement("button");
    sortButtonElement.setAttribute("id", "sortButton");
    sortButtonElement.textContent = `Ordenar por precio: ${state}`;

    return sortButtonElement;
}

function fillHeader(title, state) {
    const headerElement = document.getElementById("header");
    headerElement.textContent = "";

    const headerContainer = document.createElement("div");
    const headerTitle = document.createElement("h1");
    headerTitle.textContent = title;
    headerContainer.appendChild(headerTitle);
    const headerSmall = document.createElement("small");
    headerSmall.textContent = "Catálogo dinámico generado desde un objeto literal sin usar ";
    const headerStrong = document.createElement("strong");
    headerStrong.textContent = "innerHTML";
    headerSmall.appendChild(headerStrong);
    headerContainer.appendChild(headerSmall);

    headerElement.appendChild(headerContainer);
    headerElement.appendChild(getSortButton(state));
}

function getTotalSells(ventasMensuales) {
    return ventasMensuales.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function getMonthlySellAverage(ventasMensuales) {
    const average = getTotalSells(ventasMensuales) / ventasMensuales.length;
    
    return average.toFixed(2);
}

function getMaxSell(ventasMensuales) {
    const maxSell = Math.max(...ventasMensuales);
    const maxSellMonth = ventasMensuales.indexOf(maxSell) + 1;

    return `Mes ${maxSellMonth} — ${maxSell} unidades`;
}

function getMinSell(ventasMensuales) {
    const minSell = Math.min(...ventasMensuales);
    const minSellMonth = ventasMensuales.indexOf(minSell) + 1;
    
    return `Mes ${minSellMonth} — ${minSell} unidades`;
}

function getProductPriceSum(productos) {
    // Si se tuviese que utilizar el reduce, habría que crear un array de los precios a partir del mapa
    // de productos, pero considero que esta forma es más eficiente porque solo necesito el forEach

    let priceSum = 0;
    productos.forEach((producto) =>priceSum += producto["precio"]);
    
    return `€ ${priceSum}`;
    
    // // De todas maneras si fuese obligatorio utilizar el reduce, lo haría de esta manera:
    
    // const precios = Array.from(productos.values()).map((producto) => producto["precio"]);
    // return precios.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function fillSummary(ventasMensuales, productos) {
    const summary = [
        { "title": "Total ventas (últimos 6 meses):", "func": getTotalSells(ventasMensuales) + " unidades"},
        { "title": "Media mensual:", "func": getMonthlySellAverage(ventasMensuales) + " unidades"},
        { "title": "Mes con mayor venta:", "func": getMaxSell(ventasMensuales)},
        { "title": "Mes con menor venta:", "func": getMinSell(ventasMensuales)},
        { "title": "Suma precios productos:", "func": getProductPriceSum(productos)},
    ]
    let output = "";

    const summaryElement = document.getElementById("summary");
    summaryElement.textContent = "";

    const tableElement = document.createElement("table");

    const theadElement = document.createElement("thead");
    {
        const trElement = document.createElement("tr");
        for (const element of summary) {
            const thElement = document.createElement("th");
            thElement.textContent = element["title"];
            trElement.appendChild(thElement);
        }
        theadElement.appendChild(trElement);
    }

    const tbodyElement = document.createElement("tbody");
    {
        const trElement = document.createElement("tr");
        for (const element of summary) {
            const tdElement = document.createElement("td");
            tdElement.textContent = element["func"];
            trElement.appendChild(tdElement);
        }
        tbodyElement.appendChild(trElement);
    }

    tableElement.appendChild(theadElement);
    tableElement.appendChild(tbodyElement);

    summaryElement.appendChild(tableElement);
}

let inputFilter = "";
function fillFilterContainer() {
    const filterContainer = document.getElementById("filterContainer");
    filterContainer.textContent = "";

    const labelElement = document.createElement("label");
    labelElement.textContent = "Buscar producto: ";
    labelElement.setAttribute("for", "inputElement");
    filterContainer.appendChild(labelElement);

    const inputElement = document.createElement("input");
    inputElement.setAttribute("id", "inputFilter");
    inputElement.setAttribute("name", "inputFilter");
    inputElement.setAttribute("placeholder", "Escribe un nombre");
    filterContainer.appendChild(inputElement);

    const buttonElement = document.createElement("button");
    buttonElement.textContent = "Borrar filtro";
    buttonElement.setAttribute("id", "clearFilter");
    filterContainer.appendChild(buttonElement);
}

function fillProductList(productos, state, inputFilter = "") {
    const sortProductos = [...productos];

    if (state === "asc") {
        sortProductos.sort((a, b) => a["precio"] - b["precio"]);
    } else if (state === "desc") {
        sortProductos.sort((a, b) => b["precio"] - a["precio"]);
    }

    const productoListElement = document.getElementById("productList");
    productoListElement.textContent = "";

    sortProductos
        .filter(sortProducto => sortProducto["nombre"].toLowerCase().includes(inputFilter.trim().toLowerCase()))
        .forEach((producto) => {
            const productoArticle = document.createElement("article");
            const productoTitle = document.createElement("h1");
            productoTitle.textContent = producto["nombre"];
            productoArticle.appendChild(productoTitle);
            
            const productSmall = document.createElement("small");
            productSmall.textContent = producto["descripcion"];
            productoArticle.appendChild(productSmall);
            
            const productoStrong = document.createElement("strong");
            productoStrong.textContent = "€ " + producto["precio"].toFixed(2);
            productoArticle.appendChild(productoStrong);
            
            const productoParagraph = document.createElement("p");
            if (producto["disponible"]) {
                productoParagraph.classList.add("disponible");
                productoParagraph.textContent = "Disponible";
            } else {
                productoParagraph.classList.add("agotado");
                productoParagraph.textContent = "Agotado";
            }
            productoArticle.appendChild(productoParagraph);
            productoListElement.appendChild(productoArticle);
        });

}

function fillFooter(productos) {
    const footerElement = document.getElementById("footer");

    const footerSmall = document.createElement("small");
    footerSmall.textContent = "Práctica generada desde el objeto ";
    const footerStrong = document.createElement("strong");
    footerStrong.textContent = "catalogo";
    footerSmall.appendChild(footerStrong);
    footerSmall.textContent += `. Productos totales ${productos.length}`;

    footerElement.appendChild(footerSmall);
}

let stateIndex = 0;
function getCurrentState() {
    const states = ["desc", "asc"];

    return states[stateIndex % states.length];
}

fillHeader(catalogo["tienda"], getCurrentState());
fillSummary(catalogo["ventasMensuales"], catalogo["productos"]);
fillFilterContainer();
fillProductList(catalogo["productos"], getCurrentState());
fillFooter(catalogo["productos"]);

document.body.addEventListener("click", (e) => {
    if (e.target && e.target.id === "sortButton") {
        stateIndex++;

        fillHeader(catalogo["tienda"], getCurrentState());
        fillProductList(catalogo["productos"], getCurrentState());
    }
});

document.body.addEventListener("keyup", (e) => {
    if (e.target && e.target.id === "inputFilter") {
        const inputFilter = document.getElementById("inputFilter");
        fillProductList(catalogo["productos"], getCurrentState(), inputFilter.value);
    }
});

document.body.addEventListener("click", (e) => {
    if (e.target && e.target.id === "clearFilter") {
        document.getElementById("inputFilter").value = "";
        fillProductList(catalogo["productos"], getCurrentState());
    }
})
