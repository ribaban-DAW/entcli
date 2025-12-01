export function crearElemento(tag, texto) {
    const el = document.createElement(tag);
    el.textContent = texto;
    
    return el;
}

export function agregarA(contenedor, elemento) {
    contenedor.appendChild(elemento);
}

export function crearLista(items) {
    const ulEl = crearElemento("ul");
    
    items.forEach((item) => {
        agregarA(ulEl, crearElemento("li", item));
    })

    return ulEl;
}

export function limpiar(contenedor) {
    contenedor.replaceChildren();
}
