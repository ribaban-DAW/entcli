const titleElement = document.createElement("h1");
titleElement.textContent = "Lista de elementos";
document.body.appendChild(titleElement);

const ulElement = document.createElement("ul");
document.body.appendChild(ulElement);

const addButtonElement = document.createElement("button");
addButtonElement.textContent = "Añadir elemento";
addButtonElement.addEventListener("click", (e) => {
    const element = prompt("Introduce un elemento para la lista");
    if (element === null) {
        return;
    }

    const liElement = document.createElement("li");

    const containerElement = document.createElement("div");

    const pElement = document.createElement("p");
    pElement.textContent = element;
    containerElement.appendChild(pElement);

    const deleteButtonElement = document.createElement("button");
    deleteButtonElement.textContent = "X";
    deleteButtonElement.addEventListener("click", (e) => {
        ulElement.removeChild(liElement);
    })
    containerElement.appendChild(deleteButtonElement);

    liElement.appendChild(containerElement);
    
    ulElement.appendChild(liElement);
});

document.body.appendChild(addButtonElement);
