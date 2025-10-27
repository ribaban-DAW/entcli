// Crea un programa que, partiendo de un código HTML con una lista ordenada de personas,
// devuelva los nombres de la primera y de la última de la lista.

const liElements = document.querySelectorAll("ol>li");

const sectionElement = document.createElement("section");
const firstPersonContainer = document.createElement("p");
firstPersonContainer.textContent = `La primera persona de la lista ordenada es: ${liElements[0].textContent}`;
const lastPersonContainer = document.createElement("p");
lastPersonContainer.textContent = `La última persona de la lista ordenada es: ${liElements[liElements.length - 1].textContent}`;

sectionElement.appendChild(firstPersonContainer);
sectionElement.appendChild(lastPersonContainer);

document.body.prepend(sectionElement);
