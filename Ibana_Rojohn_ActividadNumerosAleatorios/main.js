// Crea un array de 100 elementos y rellénalo con números aleatorios.
// Luego muestra en pantalla una lista con todos los números pares que contiene.
// Nota: para generar números aleatorios desde O hasta MAX, puedes utilizar la expresión Math.floor(Math.random()*MAX);

const arr = [];
const MAX = 100;

for (let i = 0; i < MAX; i++) {
    arr.push(Math.floor(Math.random() * MAX));
}

const container = document.getElementById("container");
let countEven = 0;
for (const n of arr) {
    if (n % 2 === 0) {
        container.innerHTML += `<p>${n}</p>`;
        console.log(n);
        countEven++;
    }
}

console.log(`Hay ${countEven} elementos pares en el array`);
container.innerHTML += `Hay ${countEven} elementos pares en el array`;
