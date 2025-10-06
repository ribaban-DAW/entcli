// El objetivo de esta práctica es recoger palabras ingresadas por el usuario,
// almacenarlas en un array y realizar operaciones de manipulación y análisis
// de los datos almacenados. Los resultados se mostrarán en la misma página web.

// Instrucciones

//     - Haciendo uso de una función, por ejemplo prompt("Introduce una palabra
//     (o deja en blanco para terminar):"),  solicita al usuario que introduzca
//     palabras una a una, y guarda cada palabra en un array.   
//     - Muestra en la página web todas las palabras ingresadas por  el usuario,
//     con el mensaje "Las palabras recogidas son: [palabras]".   
//     - Muestra la primera y la última palabra ingresada.   
//     - Calcula y muestra el número total  de palabras.   
//     - Crea una copia del array palabras y ordénala alfabéticamente,
//     siguiendo las instrucciones de final.

// En la misma página web, muestra  la siguiente información:          

//     La primera palabra ingresada por el usuario.       
//     La última palabra ingresada  por el usuario.       
//     El número total de palabras  ingresadas por el usuario.        
//     Las palabras ordenadas alfabéticamente.

// Para mostrar los resultados, puedes ir concatenándolos en una cadena
// con etiquetas HTML y por ejemplo, volcar esa cadena en un div con ID
// resultado:

// document.getElementById("resultado").innerHTML = resultadoHTML;

// NOTA: Deberás hacer uso de la ordenación avanzada de arrays para que sea
// una ordenación estricta del español, teniendo encuenta la ñ y tambien
// obviar las mayúsculas y minúsculas.

const container = document.getElementById("container");

function getWords() {
    const words = [];
    
    while (true) {
        const input = prompt("Introduce una palabra (o deja en blanco para terminar):");
        if (input === "") {
            break;
        }
        if (input) {
            words.push(input);
        }
    }

    return words;
}

function showWords(words) {
    if (words.length === 0) {
        return;
    }
    let output = "<p>Las palabras recogidas son: [";

    for (let i = 0; i < words.length - 1; i++) {
        output += `${words[i]}, `;
    }

    if (words.length) {
        output += words.at(-1);
    }
    output += "]</p>";
    container.innerHTML += output;
}

function showWordsAmount(words) {
    container.innerHTML += `<p>Hay ${words.length} palabras</p>`;
}

function getFirstWord(words) {
    return words.at(0);
}

function getLastWord(words) {
    return words.at(-1);
}

function showFirstWord(words) {
    if (words.length === 0) {
        container.innerHTML += "<p>No has introducido ninguna palabra</p>";
        return;
    }
    container.innerHTML += `<p>La primera palabra es: ${getFirstWord(words)}</p>`;
}

function showLastWord(words) {
    if (words.length === 0) {
        container.innerHTML += "<p>No has introducido ninguna palabra</p>";
        return;
    }
    container.innerHTML += `<p>La última palabra es: ${getLastWord(words)}</p>`;
}

function getSortedWords(words) {
    return words.sort((a, b) => { return a.localeCompare(b) });
}

const words = getWords();
showWords(words);
showWordsAmount(words);
showFirstWord(words);
showLastWord(words);
const sortedWords = getSortedWords([...words]);
showWords(sortedWords);
showWords(words);
