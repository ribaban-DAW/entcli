const obj = JSON.parse(sessionStorage.getItem("obj"));

if (obj) {
    document.body.textContent = "";
    for (const [k, v] of Object.entries(obj)) {
        const pEl = document.createElement("p");
        pEl.textContent = `${k}: ${v}`;

        document.body.appendChild(pEl);
    }
} else {
    const formEl = document.querySelector("form");
    
    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const newObj = {
            "marca": document.getElementById("marca").value,
            "modelo": document.getElementById("modelo").value,
            "numBastidor": document.getElementById("numBastidor").value,
            "cilindrada": document.getElementById("cilindrada").value,
            "numPuertas": document.getElementById("numPuertas").value,
            "color": document.getElementById("color").value,
            "nombre": document.getElementById("nombre").value,
            "apellidos": document.getElementById("apellidos").value,
            "direccion": document.getElementById("direccion").value,
            "telefono": document.getElementById("telefono").value,
            "mail": document.getElementById("mail").value,
        };
    
        sessionStorage.setItem("obj", JSON.stringify(newObj));
        window.location.reload();
    });
}

