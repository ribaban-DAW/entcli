let tecnologias = [
    { "lenguaje": "JavaScript", "framework": "React", "ambito": "Frontend" },
    { "lenguaje": "JavaScript", "framework": "Vue", "ambito": "Frontend" },
    { "lenguaje": "JavaScript", "framework": "Angular", "ambito": "Frontend" },
    { "lenguaje": "Python", "framework": "Django", "ambito": "Backend" },
    { "lenguaje": "Python", "framework": "Flask", "ambito": "Backend" },
    { "lenguaje": "PHP", "framework": "Laravel", "ambito": "Backend" }
];

const ambitoElement = document.getElementById("ambito");
const resultadoElement = document.getElementById("resultado");
const resultadoH2Element = document.querySelector("#resultado > h2");
const resultadoUlElement = document.querySelector("#resultado > ul");
resultadoUlElement.classList.add("framework-lista");

function addTecnologiasToList(filterTecnologias) {
    resultadoUlElement.textContent = "";

    filterTecnologias.forEach(((tecnologia) => {
        const liElement = document.createElement("li");
        liElement.textContent = `${tecnologia.framework} [${tecnologia.lenguaje}]`;
        liElement.classList.add("framework-elemento");

        resultadoUlElement.appendChild(liElement);
    }));
}

function updateResultado(ambito) {
    const filterTecnologias = tecnologias.filter((tecnologia) => { return tecnologia.ambito === ambito; });

    resultadoH2Element.textContent = `Frameworks (${ambito})`;
    addTecnologiasToList(filterTecnologias);
}

ambitoElement.addEventListener("click", (e) => {
    if (e.target.checked) {
        updateResultado(e.target.value);
    }
})
