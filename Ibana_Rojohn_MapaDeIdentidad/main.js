// - Crea un mapa vacío en JavaScript donde se utilizarán los DNI como claves y
// los nombres de las personas como valores.
// - Añade 10 personas al mapa, usando el DNI como clave y el nombre como valor.
// - Crea una función que muestre por pantalla la lista de todos los DNI junto con
// el nombre de las personas.
// - A continuación, muestra en pantalla los datos llamando a la función creada en
// el paso anterior.
// - Modifica el nombre de la tercera persona en el mapa.
// - Finalmente, vuelve a mostrar todos los datos en pantalla utilizando la función
// para comprobar que la operación se ha realizado correctamente.

function displayIdentity(dni_name) {
    let container = document.getElementById("container");

    // NOTA: Al añadir directamente a container.innerHTML no se estaba añadiendo correctamente
    // el resultado, por eso primero está añadido en una variable
    let output = "<ol>"
    for (const [dni, name] of dni_name) {
        output += `<li>${dni}: ${name}</li>`;
    }
    output += "</ol>";

    container.innerHTML += output;
}

function createRandomDNI() {
    const alphabet = "ABDCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    let dni = "";
    
    for (let i = 0; i < 8; i++) {
        dni += `${Math.floor(Math.random() * 9)}`;
    }
    dni += alphabet[randomIndex];
    
    return dni;
}

function createRandomName() {
    const alphabet = "ABDCDEFGHIJKLMNOPQRSTUVWXYZ";
    let name = "";
    const randomLength = Math.floor(Math.random() * 10) + 3;
    for (let i = 0; i < randomLength; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        name += alphabet[randomIndex];
    }

    return name;
}

function fillMap(dni_name, quantity) {
    for (let i = 0; i < quantity; i++) {
        const dni = createRandomDNI();
        const name = createRandomName();
        dni_name.set(dni, name);
    }
}

function modifyThirdElement(dni_name, newName) {
    const thirdPair = [...dni_name][2];
    const dni = thirdPair[0];
    dni_name.set(dni, newName);
}

const dni_name = new Map();

fillMap(dni_name, 10);
displayIdentity(dni_name)
modifyThirdElement(dni_name, "Rojohn");
displayIdentity(dni_name)
