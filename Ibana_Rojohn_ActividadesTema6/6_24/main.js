// Elabora un programa que le solicite al usuario el número de filas y columnas,
// y genere esa tabla rellena con números aleatorios. Finalmente, el programa debe
// recorrer la tabla y mostrar en consola cuántas filas y columnas ha detectado.

function createTable(nRows, nCols) {    
    const tableElement = document.createElement("table");
    
    for (let i = 0; i < nRows; ++i) {
        const rowElement = document.createElement("tr");
        for (let j = 0; j < nCols; ++j) {
            const cellElement = document.createElement("td");
            cellElement.textContent = Math.random() * 100;
            rowElement.appendChild(cellElement);
        }
        tableElement.appendChild(rowElement);
    }
    
    document.body.appendChild(tableElement);
}

function getNumber(str) {
    const number = prompt(str);
    if (number.trim() === "" || isNaN(number)) {
        return getNumber(str);
    }

    return Number(number);
}

const nRows = getNumber("Introduce el número de filas");
const nCols = getNumber("Introduce el número de columnas");

createTable(nRows, nCols);

const tableElement = document.getElementsByTagName("table")[0];
let countRows = 0;
let countCols = 0;
for (const row of tableElement.rows) {
    ++countRows;
    if (!countCols) {
        for (const cell of row.cells) {
            ++countCols;
        }
    }
}

console.log(`${countRows} x ${countCols}`);
