const artistas = [
    {
      nombre: "Karol G",
      canciones: ["Tusa", "Provenza", "Bichota", "Si Antes Te Hubiera Conocido"]
    },
    {
      nombre: "Shakira",
      canciones: ["Hips Don't Lie", "Waka Waka (This Time for Africa)", "La Tortura", "Puntería"]
    },
    {
      nombre: "Rosalía",
      canciones: ["Con Altura", "Malamente", "Despechá", "Motomami"]
    },
    {
      nombre: "Luis Fonsi",
      canciones: ["Despacito", "Échame la Culpa", "No Me Doy Por Vencido", "Aquí Estoy Yo"]
    }
];
//Añade aqui tu código

function createSongTable(artista) {
    const tableElement = document.createElement("table");
    artista.canciones.forEach((cancion) => {
        const tableRowElement = document.createElement("tr");
        const tableCellElement = document.createElement("td");
        tableCellElement.textContent = cancion;
        tableRowElement.appendChild(tableCellElement);
        tableElement.appendChild(tableRowElement);
    })
    return tableElement;
}

// Modifico el objeto original para tener id, que servirá para el valor que tenga el option
const artistasId = [];
let artistaId = 1;
artistas.forEach((artista) => {
    artistasId.push({...artista, id: artistaId})
    artistaId++;
})

// Para vaciar el contenido si no se selecciona artista
const emptyOptionElement = document.querySelectorAll("#cantanteSelect > option")[0];
emptyOptionElement.addEventListener("click", (e) => {
    const divContainer = document.getElementById("tablaContainer");
    divContainer.textContent = "";
})

const selectElement = document.getElementById("cantanteSelect");
artistasId.forEach((artista) => {
    const optionElement = document.createElement("option");
    optionElement.value = artista.id;
    optionElement.addEventListener("click", (e) => {
        const divContainer = document.getElementById("tablaContainer");
        divContainer.textContent = "";
        divContainer.appendChild(createSongTable(artista));        
    })
    optionElement.textContent = artista.nombre;
    selectElement.appendChild(optionElement);
})
