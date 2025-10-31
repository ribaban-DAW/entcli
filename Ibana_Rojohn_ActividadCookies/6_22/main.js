// Crea una cookie que almacene dos datos solicitados al usuario: su nombre y su edad.
// La cookie debe caducar en 30 minutos.

function showData() {
    const sectionElement = document.createElement("section");

    const pElement = document.createElement("p");
    pElement.textContent = `Eres ${getCookie("nombre")} y tienes ${getCookie("edad")} años`;

    sectionElement.appendChild(pElement);

    document.body.appendChild(sectionElement);
}

const formElement = document.getElementsByTagName("form")[0];
formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    if (getCookie("nombre") && getCookie("edad")) {
        return;
    }

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;

    const maxAgeDuration = 60 * 30;
    setCookie("nombre", nombre, maxAgeDuration);
    setCookie("edad", edad, maxAgeDuration);

    showData();
});

showData();
