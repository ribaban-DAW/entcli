// Repaso tema de tablas de los apuntes de Diseño. Elabora un programa que permita añadir
// filas a una tabla HTML. Las nuevas filas han de ser valores inventados por ti.
// Recuerda los métodos createElement y appendChild para crear y añadir las filas con sus
// columnas y que con textcontent puedes asignar  el contenido de un elemento sin etiquetas html.

let baseNumber = 2;

function addRow() {
    const tbodyElement = document.getElementsByTagName("tbody")[0];
    const rowElement = document.createElement("tr");
    const cellBaseElement = document.createElement("td");
    cellBaseElement.textContent = baseNumber;
    rowElement.appendChild(cellBaseElement);
    for (let i = 1; i <= 10; ++i) {
        const cellElement = document.createElement("td");
        cellElement.textContent = baseNumber * i;
        rowElement.appendChild(cellElement);
    }
    tbodyElement.appendChild(rowElement);
    ++baseNumber;
}
