var festivalesJSON = `{
    "Festival": "Navar-Pop",
    "Ciudad": "Ablitas",
    "Anno": 2018,
    "Grupos": [
        {
            "nombre": "Love of lesbian",
            "compania": "Warner Music",
            "discos": [
                "Microscopic Movies",
                "Is it Fiction?",
                "Ungravity",
                "Maniobras de escapismo",
                "Cuentos chinos para niños del Japón",
                "1999",
                "La noche eterna. Los días no vividos",
                "El poeta Halley"
            ]
        },
        {
            "nombre": "Izal",
            "compania": "Autoeditado",
            "discos": [
                "Teletransporte",
                "Magia y efectos especiales",
                "Agujeros de gusano",
                "Copacabana",
                "VIVO",
                "Autoterapia"
            ]
        },
        {
            "nombre": "Miss Caffeina",
            "compania": "Warner Music",
            "discos": [
                "Imposibilidad del fenómeno",
                "De polvo y flores",
                "Detroit"
            ]
        }
    ]
}`;

const container = document.getElementById("container");

const festivales = JSON.parse(festivalesJSON);

let result = "";
result += `<section>`;
result += `<h1>Festival: ${festivales.Festival}</h1>`;
result += `<p>Ciudad: ${festivales.Ciudad}</p>`;
result += `<p>Año: ${festivales.Anno}</p>`;

const grupos = festivales.Grupos;

for (const grupo of grupos) {
    result += `<article>`;
    result += `<h2>${grupo.nombre}</h2>`;
    result += `<p>Compañía: ${grupo.compania}</p>`;
    result += `<p>Discografía</p>`;
    
    result += "<ul>";
    const discos = grupo.discos;
    for (const disco of discos) {
        result += `<li>${disco}</li>`;
    }
    result += "</ul>";
    result += `</article>`;
}

result += `</section>`;

container.innerHTML += result;
