// Escribe un programa que permita modificar el estilo de un párrafo cuyo identificador es "párrafo".

function modificarEstilo() {
    const pElement = document.getElementById("párrafo"); // NOTA: Lo ideal sería que el id no tuviese caracteres especiales
    pElement.classList.toggle("pink");
}

