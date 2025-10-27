// Escribe un programa que vaya interrogando al usuario sobre una lista de ingredientes.
// Por cada ingrediente se debe añadir un elemento a una lista desordenada. La petición
// de ingredientes finalizará cuando el usuario pulse el botón Cancelar.

const ulElement = document.getElementsByTagName("ul")[0];

function getIngrediente() {
    const ingrediente = prompt("Introduce un ingrediente");
    if (ingrediente === null) {
        return;
    }
    const ingredienteElement = document.createElement("li");
    ingredienteElement.textContent = ingrediente;

    ulElement.appendChild(ingredienteElement);
    setTimeout(getIngrediente, 0);
}

getIngrediente();
