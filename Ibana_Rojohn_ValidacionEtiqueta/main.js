class Etiqueta {

    constructor(nombreArticulo, referenciaArticulo) {
        this.nombreArticulo = nombreArticulo;
        this.referenciaArticulo = referenciaArticulo; 
    }

    mostrarArticulo() {
        console.log(`Nombre: ${this.nombreArticulo}`);
    }

    validar() {
        const regexEtiqueta = /^\d{4}\-[a-zA-Z0-9]{5}\/\d{2}_\d$/;
        if (regexEtiqueta.test(this.referenciaArticulo)) {
            console.log(`Etiqueta ${this.referenciaArticulo} válida`);
        } else {
            console.log(`Etiqueta ${this.referenciaArticulo} inválida`);
        }
    }
}

const etiquetas = [
    new Etiqueta("1", "2022-xrFdS/25_9"), // Válido
    new Etiqueta("2", "2022-aAaaa/1_1"),  // Inválido
    new Etiqueta("3", "2022-FdS/25_1"),   // Inválido
    new Etiqueta("4", "1-xrFdS/25_1"),    // Inválido
    new Etiqueta("5", "2024-ribab/27_6"), // Válido
    new Etiqueta("6", "202xrFdS/25_1"),   // Inválido
    new Etiqueta("7", "2022-xrFdS25_1"),  // Inválido
    new Etiqueta("8", "1234-aBcDe/12_3"), // Válido
]

etiquetas.forEach((etiqueta) => {
    etiqueta.validar();
})
