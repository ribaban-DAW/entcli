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

function createArtistImage(imgSrc) {
    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;

    return imgElement;
}

fetch("artistas.json")
    .then(response => response.json())
    .then(artistas => {
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
            optionElement.textContent = artista.nombre;
            selectElement.appendChild(optionElement);
        })

        document.addEventListener("click", (e) => {
            if (e.target.tagName === "OPTION" && e.target.closest("#cantanteSelect")) {
                const divContainer = document.getElementById("tablaContainer");
                divContainer.textContent = "";
                if (e.target.value === "") {
                    return;
                }
                const artista = artistasId[e.target.value - 1];
                divContainer.appendChild(createArtistImage(artista.foto));
                divContainer.appendChild(createSongTable(artista));        
            }
        })
    })
    .catch(e => console.log(e));
