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
    return `<button id="sort-btn">Ordenar por precio: ${state}</button>`;
}

function fillHeader(title, state) {
    let output = "";

    output += "<div>";
        output += `<h1>${title}</h1>`;
        output += "<small>Catálogo dinámico generado desde un objeto literal usando <strong>innerHTML</strong></small>";
    output += "</div>";

    output += getSortButton(state);

    return output;
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

    output += "<table>";
        output += "<thead>";
            output += "<tr>";
            for (const e of summary) {
                output += `<th>${e["title"]}</th>`;
            }
            output += "</tr>";
            output += "</thead>";
            output += "<tbody>";
            output += "<tr>";
            for (const e of summary) {
                output += `<td>${e["func"]}</td>`;
            }
            output += "</tr>";
        output += "</tbody>";
    output += "</table>";

    return output;
}

function fillProductList(productos, state) {
    const sortProductos = [...productos];

    if (state === "asc") {
        sortProductos.sort((a, b) => a["precio"] - b["precio"]);
    } else if (state === "desc") {
        sortProductos.sort((a, b) => b["precio"] - a["precio"]);
    } else {
        sortProductos.sort((a, b) => a["id"] - b["id"]);
    }

    let output = "";
    
    sortProductos.forEach((producto) => {
        output += "<article>";
            output += `<h1>${producto["nombre"]}</h1>`;
            output += `<small>${producto["descripcion"]}</small>`;
            output += `<strong>€ ${producto["precio"].toFixed(2)}</strong>`;
            if (producto["disponible"]) {
                output += `<p class="disponible">Disponible</p>`;
            } else {
                output += `<p class="agotado">Agotado</p>`;
            }
        output += "</article>";
    });

    return output;
}

let stateIndex = -1;
function getCurrentState() {
    const states = ["asc", "desc", "no"];

    stateIndex = (stateIndex + 1) % states.length;
    return states[stateIndex];
}

let state = getCurrentState();
const header = document.getElementById("header");
header.innerHTML = fillHeader(catalogo["tienda"], state);

const summary = document.getElementById("summary");
summary.innerHTML = fillSummary(catalogo["ventasMensuales"], catalogo["productos"]);

const productList = document.getElementById("productList");
productList.innerHTML = fillProductList(catalogo["productos"], state);

document.body.addEventListener("click", (e) => {
    if (e.target && e.target.id === "sort-btn") {
        state = getCurrentState();
        header.innerHTML = fillHeader(catalogo["tienda"], state);
        productList.innerHTML = fillProductList(catalogo["productos"], state);
    }
})
